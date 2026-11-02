import { afterEach, describe, expect, it, vi } from "vitest";
import { fetchNews, newsTime, plainText } from "./news";

afterEach(() => vi.unstubAllGlobals());
function response(items: unknown[]) {
  return { ok: true, json: async () => ({ status: "ok", items }) };
}
describe("restored RSS news feed", () => {
  it("merges sources, deduplicates, sorts newest first, and keeps articles without images", async () => {
    const old = {
      title: "Tin cũ",
      pubDate: "2026-10-31 10:00:00",
      link: "https://vnexpress.net/cu.html",
      description: "<p>Bản tin cũ</p>",
    };
    const newest = {
      title: "AI &amp;amp; dữ liệu",
      pubDate: "2026-11-02 12:00:00",
      link: "https://genk.vn/moi.htm",
      content: '<p>Mô hình mới</p><img data-src="/image.jpg">',
    };
    vi.stubGlobal(
      "fetch",
      vi
        .fn()
        .mockResolvedValueOnce(response([old, newest]))
        .mockResolvedValueOnce(response([newest])),
    );
    const result = await fetchNews(["https://one/feed", "https://two/feed"]);
    expect(result.unavailable).toBe(0);
    expect(result.articles).toHaveLength(2);
    expect(result.articles[0]).toMatchObject({
      title: "AI & dữ liệu",
      source: "GenK",
      image: "https://genk.vn/image.jpg",
    });
    expect(result.articles[1]).toMatchObject({
      title: "Tin cũ",
      source: "VnExpress",
      image: null,
      summary: "Bản tin cũ",
    });
  });
  it("retains available feeds when another source fails", async () => {
    vi.stubGlobal(
      "fetch",
      vi
        .fn()
        .mockRejectedValueOnce(new Error("offline"))
        .mockResolvedValueOnce(
          response([
            {
              title: "Tin mới",
              link: "https://tuoitre.vn/tin.htm",
              thumbnail: "https://tuoitre.vn/cover.jpg",
            },
          ]),
        ),
    );
    const result = await fetchNews(["https://one/feed", "https://two/feed"]);
    expect(result.unavailable).toBe(1);
    expect(result.articles[0].source).toBe("Tuổi Trẻ");
  });
  it("reports complete failure and distinguishes an empty successful feed", async () => {
    vi.stubGlobal("fetch", vi.fn().mockResolvedValue({ ok: false }));
    await expect(fetchNews(["https://one/feed"])).rejects.toThrow(
      "Chưa kết nối",
    );
    vi.stubGlobal(
      "fetch",
      vi
        .fn()
        .mockResolvedValue({
          ok: true,
          json: async () => ({ status: "error", message: "limit" }),
        }),
    );
    await expect(fetchNews(["https://one/feed"])).rejects.toThrow();
    vi.stubGlobal("fetch", vi.fn().mockResolvedValue(response([])));
    expect(await fetchNews(["https://one/feed"])).toEqual({
      articles: [],
      unavailable: 0,
    });
  });
  it("renders feed text safely and rejects unsupported link protocols", async () => {
    vi.stubGlobal(
      "fetch",
      vi.fn().mockResolvedValue(
        response([
          { title: "Unsafe", link: "javascript:alert(1)" },
          {
            title: "<strong>Tiêu đề</strong><script>bad()</script>",
            link: "https://dantri.com.vn/tin.htm",
            thumbnail: "javascript:alert(1)",
          },
        ]),
      ),
    );
    const result = await fetchNews(["https://one/feed"]);
    expect(result.articles).toHaveLength(1);
    expect(result.articles[0]).toMatchObject({ title: "Tiêu đề", image: null });
    expect(plainText("&lt;b&gt;Lập trình&lt;/b&gt;")).toBe("Lập trình");
  });
  it("handles invalid and future publication dates without negative ages", () => {
    expect(newsTime("invalid")).toBe("");
    expect(newsTime(new Date(Date.now() + 86400000).toISOString())).toBe(
      "Vừa cập nhật",
    );
  });
});

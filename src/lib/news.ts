// Original RSS API and source groups used by Góc chia sẻ.
export const newsFeeds = [
  {
    label: "Tổng hợp 24h",
    feeds: [
      "https://vnexpress.net/rss/so-hoa.rss",
      "https://vietnamnet.vn/rss/cong-nghe.rss",
      "https://dantri.com.vn/rss/suc-manh-so.rss",
      "https://thanhnien.vn/rss/cong-nghe.rss",
      "https://genk.vn/rss/home.rss",
    ],
  },
  {
    label: "Số hoá & Thiết bị",
    feeds: [
      "https://vnexpress.net/rss/so-hoa.rss",
      "https://dantri.com.vn/rss/suc-manh-so.rss",
      "https://vietnamnet.vn/rss/cong-nghe.rss",
    ],
  },
  {
    label: "Công nghệ",
    feeds: [
      "https://thanhnien.vn/rss/cong-nghe.rss",
      "https://tuoitre.vn/rss/nhip-song-so.rss",
    ],
  },
  {
    label: "Dành cho Dev",
    feeds: [
      "https://genk.vn/rss/home.rss",
      "https://vnexpress.net/rss/khoa-hoc.rss",
    ],
  },
];
export const newsSources = [
  { name: "VnExpress", url: "https://vnexpress.net/so-hoa" },
  { name: "VietNamNet", url: "https://vietnamnet.vn/cong-nghe" },
  { name: "Dân Trí", url: "https://dantri.com.vn/suc-manh-so.htm" },
  { name: "Tuổi Trẻ", url: "https://tuoitre.vn/nhip-song-so.htm" },
  { name: "Thanh Niên", url: "https://thanhnien.vn/cong-nghe.htm" },
  { name: "GenK", url: "https://genk.vn/" },
];
type FeedItem = {
  title?: string;
  pubDate?: string;
  link?: string;
  thumbnail?: string;
  description?: string;
  content?: string;
  enclosure?: { link?: string };
};
export type NewsArticle = {
  title: string;
  publishedAt: string;
  link: string;
  image: string | null;
  summary: string;
  source: string;
};
export function plainText(html: string) {
  let value = html;
  for (let i = 0; i < 3; i++) {
    const parsed = new DOMParser().parseFromString(value, "text/html");
    parsed
      .querySelectorAll("script,style")
      .forEach((element) => element.remove());
    const next = parsed.body.textContent?.trim() || "";
    if (next === value) break;
    value = next;
  }
  return value;
}
function httpUrl(value: string | undefined | null, base?: string) {
  if (!value) return null;
  try {
    const url = new URL(value, base);
    return ["https:", "http:"].includes(url.protocol) ? url.href : null;
  } catch {
    return null;
  }
}
function articleImage(item: FeedItem, link: string) {
  const parsed = new DOMParser().parseFromString(
    item.content || item.description || "",
    "text/html",
  );
  const image = parsed.querySelector("img");
  return (
    httpUrl(item.thumbnail, link) ||
    httpUrl(item.enclosure?.link, link) ||
    httpUrl(image?.getAttribute("data-src") || image?.getAttribute("src"), link)
  );
}
function sourceName(link: string) {
  const hostname = new URL(link).hostname.replace(/^www\./, "");
  return (
    newsSources.find((source) => {
      const domain = new URL(source.url).hostname;
      return hostname === domain || hostname.endsWith(`.${domain}`);
    })?.name || hostname
  );
}
async function fetchFeed(
  url: string,
  signal?: AbortSignal,
): Promise<FeedItem[]> {
  const controller = new AbortController();
  const abort = () => controller.abort();
  signal?.addEventListener("abort", abort, { once: true });
  if (signal?.aborted) controller.abort();
  const timeout = window.setTimeout(abort, 12000);
  try {
    const response = await fetch(
      `https://api.rss2json.com/v1/api.json?rss_url=${encodeURIComponent(url)}`,
      { signal: controller.signal },
    );
    if (!response.ok) throw new Error("Nguồn tin chưa phản hồi.");
    const data = await response.json();
    if (data.status !== "ok" || !Array.isArray(data.items))
      throw new Error("Nguồn tin tạm thời không khả dụng.");
    return data.items;
  } finally {
    clearTimeout(timeout);
    signal?.removeEventListener("abort", abort);
  }
}
export async function fetchNews(feeds: string[], signal?: AbortSignal) {
  const results = await Promise.allSettled(
    feeds.map((feed) => fetchFeed(feed, signal)),
  );
  const available = results.filter(
    (result): result is PromiseFulfilledResult<FeedItem[]> =>
      result.status === "fulfilled",
  );
  if (!available.length)
    throw new Error(
      "Chưa kết nối được với nguồn tin. Bạn có thể thử lại hoặc đọc trực tiếp tại các báo bên dưới.",
    );
  const articles = new Map<string, NewsArticle>();
  for (const item of available.flatMap((result) => result.value)) {
    const link = httpUrl(item.link);
    if (!link || !item.title || articles.has(link)) continue;
    articles.set(link, {
      title: plainText(item.title),
      link,
      publishedAt: item.pubDate || "",
      image: articleImage(item, link),
      summary: plainText(item.description || item.content || ""),
      source: sourceName(link),
    });
  }
  return {
    articles: [...articles.values()].sort(
      (a, b) =>
        (Date.parse(b.publishedAt) || 0) - (Date.parse(a.publishedAt) || 0),
    ),
    unavailable: results.length - available.length,
  };
}
export function newsTime(value: string) {
  const date = new Date(value);
  if (Number.isNaN(date.getTime())) return "";
  const minutes = Math.max(
    0,
    Math.floor((Date.now() - date.getTime()) / 60000),
  );
  if (minutes < 1) return "Vừa cập nhật";
  if (minutes < 60) return `${minutes} phút trước`;
  if (minutes < 1440) return `${Math.floor(minutes / 60)} giờ trước`;
  return date.toLocaleDateString("vi-VN");
}

import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { ArrowUpRight, RefreshCw, Newspaper } from "lucide-react";
import { Page, PageHeader } from "@/components/Page";
import { Reveal } from "@/components/studio/Motion";
import {
  fetchNews,
  newsFeeds,
  newsSources,
  newsTime,
  type NewsArticle,
} from "@/lib/news";

function NewsImage({
  article,
  priority = false,
}: {
  article: NewsArticle;
  priority?: boolean;
}) {
  const [failed, setFailed] = useState(false);
  return (
    <div className="news-image">
      {article.image && !failed ? (
        <img
          src={article.image}
          alt=""
          loading={priority ? "eager" : "lazy"}
          referrerPolicy="no-referrer"
          onError={() => setFailed(true)}
        />
      ) : (
        <div className="news-image-placeholder">
          <Newspaper strokeWidth={1} size={36} />
          <span>{article.source}</span>
        </div>
      )}
    </div>
  );
}
function NewsMeta({ article }: { article: NewsArticle }) {
  return (
    <div className="news-meta">
      <span>{article.source}</span>
      <time dateTime={article.publishedAt || undefined}>
        {newsTime(article.publishedAt)}
      </time>
    </div>
  );
}
export default function BlogPage() {
  const [activeTab, setActiveTab] = useState(0);
  const [visible, setVisible] = useState(12);
  const feed = newsFeeds[activeTab];
  const { data, isLoading, isFetching, error, refetch, dataUpdatedAt } =
    useQuery({
      queryKey: ["news", feed.label],
      queryFn: ({ signal }) => fetchNews(feed.feeds, signal),
      refetchInterval: 60000,
      staleTime: 45000,
      retry: 1,
    });
  const articles = data?.articles || [];
  const [featured, ...others] = articles;
  const secondary = others.slice(0, 4);
  const rest = others.slice(4);
  return (
    <Page>
      <PageHeader
        eyebrow="Góc chia sẻ"
        title="Tin công nghệ"
        description="Tin mới từ VnExpress, VietNamNet, Dân Trí, Tuổi Trẻ, Thanh Niên và GenK."
      />
      <section className="container news-desk" aria-label="Bảng tin công nghệ">
        <div className="news-toolbar">
          <div className="news-tabs" aria-label="Chuyên mục tin tức">
            {newsFeeds.map((item, index) => (
              <button
                key={item.label}
                aria-pressed={activeTab === index}
                onClick={() => {
                  setActiveTab(index);
                  setVisible(12);
                }}
              >
                {item.label}
              </button>
            ))}
          </div>
          <button
            className="news-refresh"
            onClick={() => void refetch()}
            disabled={isFetching}
            aria-label="Làm mới tin tức"
          >
            <RefreshCw
              size={16}
              className={isFetching ? "news-spinning" : ""}
            />
            <span>Làm mới</span>
          </button>
        </div>
        <div className="news-update" role="status">
          {isFetching
            ? "Đang cập nhật tin…"
            : dataUpdatedAt
              ? `Cập nhật lúc ${new Date(dataUpdatedAt).toLocaleTimeString("vi-VN", { hour: "2-digit", minute: "2-digit" })} · Tự động cập nhật mỗi phút`
              : "Tự động cập nhật mỗi phút"}
          {!!data?.unavailable && (
            <span> Một số nguồn tin đang tạm gián đoạn.</span>
          )}
        </div>
        {isLoading && (
          <div className="news-loading" aria-hidden="true">
            <div />
            <div />
            <div />
          </div>
        )}
        {error && (
          <div className="news-message" role="alert">
            <h2>Chưa tải được tin tức</h2>
            <p>{error.message}</p>
            <button onClick={() => void refetch()} disabled={isFetching}>
              Thử lại <RefreshCw size={15} />
            </button>
          </div>
        )}
        {!isLoading && !error && !featured && (
          <div className="news-message">
            <h2>Chưa có tin mới trong chuyên mục này.</h2>
            <p>Bạn có thể chọn chuyên mục khác hoặc quay lại sau.</p>
          </div>
        )}
        {featured && (
          <>
            <div className="news-frontpage">
              <article className="news-lead">
                <a
                  href={featured.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="news-story-link"
                >
                  <NewsImage key={featured.link} article={featured} priority />
                  <NewsMeta article={featured} />
                  <h2>{featured.title}</h2>
                  <p>{featured.summary}</p>
                  <span className="news-read">
                    Đọc tại {featured.source} <ArrowUpRight size={16} />
                  </span>
                </a>
              </article>
              <div className="news-secondary">
                {secondary.map((article) => (
                  <article key={article.link}>
                    <a
                      className="news-story-link"
                      href={article.link}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <div>
                        <NewsMeta article={article} />
                        <h3>{article.title}</h3>
                      </div>
                      <NewsImage article={article} />
                    </a>
                  </article>
                ))}
              </div>
            </div>
            {rest.length > 0 && (
              <section
                className="news-latest"
                aria-labelledby="latest-news-title"
              >
                <div className="news-section-heading">
                  <h2 id="latest-news-title">Tin mới nhất</h2>
                  <span>{articles.length} bài viết</span>
                </div>
                <div className="news-grid">
                  {rest.slice(0, visible).map((article) => (
                    <Reveal key={article.link}>
                      <article>
                        <a
                          className="news-story-link"
                          href={article.link}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <NewsImage article={article} />
                          <NewsMeta article={article} />
                          <h3>{article.title}</h3>
                          <p>{article.summary}</p>
                          <span className="news-read">
                            Đọc bài viết <ArrowUpRight size={15} />
                          </span>
                        </a>
                      </article>
                    </Reveal>
                  ))}
                </div>
                {visible < rest.length && (
                  <button
                    className="news-more"
                    onClick={() => setVisible((count) => count + 12)}
                  >
                    Xem thêm tin tức <span>({rest.length - visible})</span>
                  </button>
                )}
              </section>
            )}
          </>
        )}
        <footer className="news-sources">
          <p>Nguồn tin</p>
          <div>
            {newsSources.map((source) => (
              <a
                href={source.url}
                key={source.name}
                target="_blank"
                rel="noopener noreferrer"
              >
                {source.name}
                <ArrowUpRight size={13} />
              </a>
            ))}
          </div>
          <small>
            Bài viết mở tại báo gốc. Nội dung và hình ảnh thuộc các nguồn xuất
            bản.
          </small>
        </footer>
      </section>
    </Page>
  );
}

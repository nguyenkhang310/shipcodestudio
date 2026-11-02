import { Link, useParams } from "react-router-dom";
import { ChevronLeft } from "lucide-react";
import { Page, PageHeader } from "@/components/Page";
import { Action } from "@/components/studio/Actions";
import { findBlogPost } from "@/lib/blog";
import NotFound from "./NotFound";
const dateLabel = (date: string) =>
  new Intl.DateTimeFormat("vi-VN", {
    day: "numeric",
    month: "long",
    year: "numeric",
    timeZone: "Asia/Ho_Chi_Minh",
  }).format(new Date(date));
export default function BlogPostPage() {
  const { slug } = useParams();
  const post = findBlogPost(slug);
  if (!post) return <NotFound />;
  return (
    <Page>
      <PageHeader eyebrow={post.cat} title={post.title} />
      <article className="container article-content">
        <Link className="text-link mb-7" to="/blog">
          <ChevronLeft size={14} />
          Góc chia sẻ
        </Link>
        <div className="article-meta">
          <span>{dateLabel(post.date)}</span>
          <span>{post.read.replace("min", "phút đọc")}</span>
          <span>ShipCode</span>
        </div>
        {post.intro.map((p) => (
          <p key={p}>{p}</p>
        ))}
        {post.sections.map((s) => (
          <section key={s.heading}>
            <h2>{s.heading}</h2>
            {s.paragraphs.map((p) => (
              <p key={p}>{p}</p>
            ))}
            {s.bullets && (
              <ul>
                {s.bullets.map((b) => (
                  <li key={b}>{b}</li>
                ))}
              </ul>
            )}
          </section>
        ))}
        <div className="article-conclusion">
          <span className="eyebrow">ĐIỀU ĐỌNG LẠI</span>
          <p>{post.conclusion}</p>
        </div>
        <Action>Trao đổi cùng ShipCode</Action>
      </article>
    </Page>
  );
}

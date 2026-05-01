import { ArrowLeft, ArrowRight, Calendar, Clock } from "lucide-react";
import { Link, useParams } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Page } from "@/components/Page";
import { blogPosts, findBlogPost } from "@/lib/blog";
import NotFound from "./NotFound";

const BlogPostPage = () => {
  const { slug } = useParams();
  const post = findBlogPost(slug);

  if (!post) {
    return <NotFound />;
  }

  const relatedPosts = blogPosts
    .filter((candidate) => candidate.slug !== post.slug)
    .slice(0, 3);

  return (
    <Page>
      <article className="container max-w-5xl">
        <Link
          to="/blog"
          className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors mb-8"
        >
          <ArrowLeft className="w-4 h-4" />
          Quay lại Blog
        </Link>

        <div className="mb-8">
          <div className="mb-5 inline-flex items-center gap-2 rounded-md border border-primary/20 bg-primary/10 px-3 py-1 text-xs font-mono uppercase tracking-[0.12em] text-primary">
            {post.cat}
          </div>
          <h1 className="mb-5 font-display text-4xl font-bold leading-tight text-balance md:text-5xl">
            {post.title}
          </h1>
          <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
            <span className="flex items-center gap-2">
              <Calendar className="w-4 h-4" />
              {post.date}
            </span>
            <span className="flex items-center gap-2">
              <Clock className="w-4 h-4" />
              {post.read}
            </span>
          </div>
        </div>

        <div className="premium-card mb-10 overflow-hidden p-0">
          <div className="relative aspect-[16/8] bg-gradient-to-br from-primary/20 to-secondary/20">
            <img
              src={post.image}
              alt={post.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/70 via-background/10 to-transparent" />
          </div>
        </div>

        <div className="grid lg:grid-cols-[minmax(0,1fr)_280px] gap-10">
          <div className="space-y-8">
            <div className="space-y-5 text-lg leading-8 text-muted-foreground">
              {post.intro.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>

            {post.sections.map((section) => (
              <section key={section.heading} className="premium-card p-6 md:p-8">
                <h2 className="font-display text-2xl font-bold md:text-3xl mb-4">
                  {section.heading}
                </h2>
                <div className="space-y-4 leading-7 text-muted-foreground">
                  {section.paragraphs.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                </div>
                {section.bullets && (
                  <ul className="mt-6 space-y-3">
                    {section.bullets.map((bullet) => (
                      <li key={bullet} className="flex items-start gap-3 text-sm text-foreground/80">
                        <span className="mt-2 w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </section>
            ))}

            <section className="premium-card p-6 md:p-8">
              <div className="absolute inset-0 mesh-gradient opacity-20 pointer-events-none" />
              <div className="relative">
                <div className="text-xs font-mono uppercase tracking-[0.14em] text-primary mb-3">
                  Kết luận nhanh
                </div>
                <p className="text-lg leading-relaxed text-foreground/90">
                  {post.conclusion}
                </p>
              </div>
            </section>
          </div>

          <aside className="space-y-6">
            <div className="premium-card sticky top-28 p-6">
              <div className="text-xs font-mono uppercase tracking-[0.14em] text-primary mb-3">
                Cần hỗ trợ nhanh?
              </div>
              <p className="text-sm text-muted-foreground leading-7 mb-5">
                Nếu bạn muốn chốt đề tài, lên đề cương hoặc cần làm theo yêu cầu khách hàng, ShipCode có thể tư vấn ngay trong 30 phút.
              </p>
              <Button asChild variant="hero" className="w-full group">
                <Link to="/lien-he">
                  Liên hệ ShipCode
                  <ArrowRight className="transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
            </div>
          </aside>
        </div>

        <section className="mt-16">
          <div className="flex items-end justify-between gap-4 mb-6">
            <div>
              <div className="text-xs font-mono uppercase tracking-[0.14em] text-primary mb-3">
                Bài liên quan
              </div>
              <h2 className="font-display text-3xl font-bold">
                Đọc tiếp để có thêm góc nhìn
              </h2>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {relatedPosts.map((relatedPost) => (
              <Link
                key={relatedPost.slug}
                to={`/blog/${relatedPost.slug}`}
                className="premium-card group overflow-hidden p-0 transition-all hover:-translate-y-1 hover:border-primary/40"
              >
                <div className="relative aspect-video overflow-hidden">
                  <img
                    src={relatedPost.image}
                    alt={relatedPost.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/70 via-transparent to-transparent" />
                </div>
                <div className="p-5">
                  <div className="text-xs font-mono uppercase tracking-[0.12em] text-primary mb-2">
                    {relatedPost.cat}
                  </div>
                  <h3 className="font-display font-semibold text-lg leading-snug group-hover:text-primary transition-colors">
                    {relatedPost.title}
                  </h3>
                </div>
              </Link>
            ))}
          </div>
        </section>
      </article>
    </Page>
  );
};

export default BlogPostPage;

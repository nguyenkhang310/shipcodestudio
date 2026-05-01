import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import { Calendar, ArrowUpRight, Loader2, ChevronRight, Radio } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Page } from "@/components/Page";

const FEEDS = [
  { label: "Tổng hợp 24h", feeds: [
    "https://vnexpress.net/rss/so-hoa.rss",
    "https://vietnamnet.vn/rss/cong-nghe.rss",
    "https://dantri.com.vn/rss/suc-manh-so.rss",
    "https://thanhnien.vn/rss/cong-nghe.rss",
    "https://genk.vn/rss/home.rss"
  ]},
  { label: "Số hoá & Thiết bị", feeds: ["https://vnexpress.net/rss/so-hoa.rss", "https://dantri.com.vn/rss/suc-manh-so.rss", "https://vietnamnet.vn/rss/cong-nghe.rss"] },
  { label: "Công nghệ", feeds: ["https://thanhnien.vn/rss/cong-nghe.rss", "https://tuoitre.vn/rss/nhip-song-so.rss"] },
  { label: "Dành cho Dev", feeds: ["https://genk.vn/rss/home.rss", "https://vnexpress.net/rss/khoa-hoc.rss"] },
];

type FeedItem = {
  title: string;
  pubDate: string;
  link: string;
  thumbnail: string;
  description: string;
  content: string;
  categories: string[];
  enclosure?: {
    link?: string;
  };
};

const fetchFeed = async (rssUrl: string): Promise<FeedItem[]> => {
  const res = await fetch(`https://api.rss2json.com/v1/api.json?rss_url=${encodeURIComponent(rssUrl)}`);
  if (!res.ok) return [];
  const data = await res.json();
  return (data.items || []) as FeedItem[];
};

const extractImage = (item: FeedItem): string | null => {
  if (item.thumbnail && item.thumbnail !== "") return item.thumbnail;
  if (item.enclosure?.link) {
    return item.enclosure.link;
  }
  const doc = new DOMParser().parseFromString(item.content || item.description || "", "text/html");
  const img = doc.querySelector("img");
  if (img) {
    const src = img.getAttribute("src");
    const dataSrc = img.getAttribute("data-src");
    return dataSrc || src || null;
  }
  return null;
};

type ProcessedFeedItem = FeedItem & { imageUrl: string };

const fetchAllFeeds = async (feeds: string[]): Promise<ProcessedFeedItem[]> => {
  const results = await Promise.all(feeds.map(fetchFeed));
  const all = results.flat();
  // deduplicate by link
  const seen = new Set<string>();
  const unique: ProcessedFeedItem[] = [];
  for (const item of all) {
    if (!seen.has(item.link)) {
      seen.add(item.link);
      const imgUrl = extractImage(item);
      if (imgUrl) {
        unique.push({ ...item, imageUrl: imgUrl });
      }
    }
  }
  // sort by date desc
  unique.sort((a, b) => new Date(b.pubDate).getTime() - new Date(a.pubDate).getTime());
  return unique;
};

const decodeHtml = (html: string) => {
  const txt = document.createElement("textarea");
  let decoded = html;
  for (let i = 0; i < 3; i++) {
    txt.innerHTML = decoded;
    if (txt.value === decoded) break;
    decoded = txt.value;
  }
  return decoded;
};

const extractText = (html: string) => {
  const doc = new DOMParser().parseFromString(html, "text/html");
  const text = doc.body.textContent?.trim() || "";
  return decodeHtml(text);
};

const timeAgo = (dateStr: string) => {
  const diff = Date.now() - new Date(dateStr).getTime();
  const mins = Math.floor(diff / 60000);
  if (mins < 60) return `${mins} phút trước`;
  const hours = Math.floor(mins / 60);
  if (hours < 24) return `${hours} giờ trước`;
  const days = Math.floor(hours / 24);
  return `${days} ngày trước`;
};

const FALLBACK_IMG = "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=800&auto=format&fit=crop";

const BlogPage = () => {
  const [activeTab, setActiveTab] = useState(0);
  const activeFeed = FEEDS[activeTab];

  const { data: posts, isLoading, error } = useQuery({
    queryKey: ["news", activeFeed.label],
    queryFn: () => fetchAllFeeds(activeFeed.feeds),
    refetchInterval: 60000, // Refetch real-time every minute
  });

  const featured = posts?.[0];
  const secondary = posts?.slice(1, 5) || [];
  const rest = posts?.slice(5) || [];

  return (
    <Page>
      <div className="container py-8 md:py-12">
        <div className="mb-8 grid gap-6 md:grid-cols-[minmax(0,1fr)_minmax(280px,420px)] md:items-end">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <p className="section-kicker mb-5 flex items-center gap-2">
              <Radio className="h-3.5 w-3.5 text-green-400 animate-pulse" />
              Tin tức công nghệ
            </p>
            <h1 className="font-display font-bold display-heading text-balance">
              Tech <span className="text-gradient">News</span>
            </h1>
          </motion.div>
          <motion.p
            className="section-copy"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Cập nhật tin tức mới nhất về công nghệ, AI, Startup và khoa học từ VnExpress.
          </motion.p>
        </div>

        <motion.div
          className="mb-10 flex items-center gap-2 overflow-x-auto border-b border-border/70 pb-4"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.15 }}
        >
          {FEEDS.map((f, i) => (
            <motion.button
              key={f.label}
              onClick={() => setActiveTab(i)}
              className={`relative whitespace-nowrap rounded-md px-4 py-2.5 text-sm font-semibold transition-all duration-300 ${
                activeTab === i
                  ? "bg-primary text-primary-foreground shadow-lg shadow-primary/30"
                  : "border border-border bg-card/50 text-muted-foreground hover:border-primary/40 hover:text-foreground"
              }`}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
            >
              {f.label}
            </motion.button>
          ))}
        </motion.div>

        {isLoading && (
          <motion.div
            className="premium-card flex flex-col items-center justify-center gap-4 py-24 text-sm text-muted-foreground"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            <div className="relative">
              <Loader2 className="w-8 h-8 animate-spin text-primary" />
              <motion.div
                className="absolute inset-0 rounded-full"
                style={{ boxShadow: "0 0 20px hsl(42 92% 58% / 0.3)" }}
                animate={{ opacity: [0.3, 0.7, 0.3] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              />
            </div>
            <span>Đang tải tin tức...</span>
          </motion.div>
        )}

        {error && (
          <div className="premium-card py-20 text-center text-sm text-muted-foreground">
            Không thể tải tin tức lúc này. Vui lòng thử lại sau.
          </div>
        )}

        {!isLoading && posts && posts.length > 0 && (
          <div className="space-y-10">
            <div className="grid lg:grid-cols-12 gap-6">
              {featured && (
                <a
                  href={featured.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="premium-card group block lg:col-span-7 transition-all hover:border-primary/40"
                >
                  <div className="relative aspect-[16/9] overflow-hidden bg-accent">
                    <img
                      src={featured.imageUrl}
                      alt={featured.title}
                      referrerPolicy="no-referrer"
                      onError={(e) => { e.currentTarget.src = FALLBACK_IMG; }}
                      className="w-full h-full object-cover group-hover:scale-[1.02] transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                    <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
                      <span className="mb-3 inline-block rounded-md bg-white/20 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-[0.12em] text-white backdrop-blur-sm">
                        Tin nổi bật
                      </span>
                      <h2 className="font-display text-xl font-bold leading-snug text-white line-clamp-3 md:text-2xl lg:text-3xl mb-2">
                        {decodeHtml(featured.title)}
                      </h2>
                      <p className="text-white/70 text-sm line-clamp-2 hidden md:block">
                        {extractText(featured.description)}
                      </p>
                    </div>
                  </div>
                </a>
              )}

              <div className="lg:col-span-5 flex flex-col gap-3">
                {secondary.map((p, i) => (
                  <a
                    key={i}
                    href={p.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex gap-4 rounded-md border border-border/60 bg-card/30 p-3 transition-all hover:border-primary/40 hover:bg-muted/25"
                  >
                    <div className="w-24 h-16 rounded-md overflow-hidden shrink-0 bg-accent">
                      <img
                        src={p.imageUrl}
                        alt=""
                        referrerPolicy="no-referrer"
                        onError={(e) => { e.currentTarget.src = FALLBACK_IMG; }}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="text-sm font-medium leading-snug line-clamp-2 group-hover:text-foreground transition-colors mb-1">
                        {decodeHtml(p.title)}
                      </h3>
                      <span className="text-[11px] text-muted-foreground">
                        {timeAgo(p.pubDate)}
                      </span>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            <div className="border-t border-border/70" />

            {rest.length > 0 && (
              <div>
                <h3 className="mb-6 text-xs font-mono uppercase tracking-[0.14em] text-primary">Tin mới nhất</h3>
                <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
                  {rest.map((p, i) => (
                    <motion.a
                      key={i}
                      href={p.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="premium-card group block transition-all hover:border-primary/40 hover:shadow-lg hover:shadow-primary/10"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: Math.min(i * 0.06, 0.5) }}
                      whileHover={{ y: -4 }}
                    >
                      <div className="aspect-[16/9] overflow-hidden bg-accent relative">
                        <img
                          src={p.imageUrl}
                          alt=""
                          referrerPolicy="no-referrer"
                          onError={(e) => { e.currentTarget.src = FALLBACK_IMG; }}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      </div>
                      <div className="p-4">
                        <h4 className="text-sm font-medium leading-snug line-clamp-2 mb-2 group-hover:text-foreground transition-colors">
                          {decodeHtml(p.title)}
                        </h4>
                        <p className="text-xs text-muted-foreground line-clamp-2 mb-3">
                          {extractText(p.description)}
                        </p>
                        <div className="flex items-center justify-between">
                          <span className="text-[11px] text-muted-foreground flex items-center gap-1">
                            <Calendar className="w-3 h-3" />
                            {timeAgo(p.pubDate)}
                          </span>
                          <ChevronRight className="w-3.5 h-3.5 text-muted-foreground/50 group-hover:text-primary group-hover:translate-x-0.5 transition-all" />
                        </div>
                      </div>
                    </motion.a>
                  ))}
                </div>
              </div>
            )}

            <div className="border-t border-border/70 py-6 text-center">
              <p className="text-xs text-muted-foreground">
                Nguồn tổng hợp: VnExpress, Vietnamnet, Dân Trí, Tuổi Trẻ, Thanh Niên, GenK · Cập nhật tự động
              </p>
            </div>
          </div>
        )}
      </div>
    </Page>
  );
};

export default BlogPage;

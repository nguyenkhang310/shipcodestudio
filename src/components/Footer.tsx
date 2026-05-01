import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import logo from "@/assets/logo-shipcode.webp";
import { ArrowUpRight, Heart } from "lucide-react";
import { contactInfo, socialLinks } from "@/lib/contact";

const cols = [
  {
    title: "Sản phẩm",
    links: [
      { to: "/dich-vu", label: "Dịch vụ" },
      { to: "/cong-nghe", label: "Công nghệ" },
      { to: "/du-an", label: "Dự án" },
      { to: "/bang-gia", label: "Bảng giá" },
    ],
  },
  {
    title: "Khám phá",
    links: [
      { to: "/quy-trinh", label: "Quy trình" },
      { to: "/blog", label: "Blog" },
      { to: "/faq", label: "FAQ" },
      { to: "/lien-he", label: "Liên hệ" },
    ],
  },
];

export const Footer = () => {
  return (
    <footer className="relative mt-10 overflow-hidden border-t border-border/80 pb-10 pt-20 noise">
      <div className="absolute inset-0 aurora opacity-[0.55] -z-10" />

      <div className="container relative">
        {/* Animated shimmer watermark */}
        <div className="mb-12 sm:mb-14 select-none overflow-hidden border-b border-border/70 pb-6 sm:pb-8 relative group">
          <div className="font-display text-3xl sm:text-4xl md:text-6xl lg:text-8xl xl:text-9xl font-black leading-none text-transparent bg-gradient-to-b from-foreground/12 to-transparent bg-clip-text relative">
            SHIPCODE
            {/* Shimmer overlay */}
            <div
              className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/15 to-transparent animate-shimmer"
              style={{
                WebkitBackgroundClip: "text",
                backgroundClip: "text",
              }}
            />
          </div>
          {/* Underline glow */}
          <motion.div
            className="absolute bottom-8 left-0 right-0 h-px"
            style={{
              background:
                "linear-gradient(90deg, transparent, hsl(42 92% 58% / 0.3), transparent)",
            }}
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, delay: 0.3 }}
          />
        </div>

        <div className="grid gap-10 md:grid-cols-12 md:gap-12 mb-14">
          <div className="md:col-span-5">
            <div className="flex items-center gap-3 mb-6">
              <motion.img
                src={logo}
                alt="ShipCode"
                className="h-11 w-11 rounded-lg"
                whileHover={{ rotate: [0, -5, 5, 0] }}
                transition={{ duration: 0.5 }}
              />
              <div>
                <div className="font-display text-lg font-bold">
                  SHIP<span className="text-primary">CODE</span>
                </div>
                <div className="text-[10px] text-muted-foreground uppercase tracking-[0.14em]">
                  Code · Build · Ship
                </div>
              </div>
            </div>
            <p className="max-w-md text-sm leading-relaxed text-muted-foreground mb-6">
              Đối tác công nghệ tin cậy của hơn 500+ doanh nghiệp và cá nhân.
              Chúng tôi không chỉ viết code – chúng tôi kiến tạo giải pháp kinh
              doanh.
            </p>
            <div className="flex gap-3">
              {socialLinks.slice(0, 4).map((link, idx) => (
                <motion.a
                  key={link.label}
                  href={link.href}
                  target={link.external ? "_blank" : undefined}
                  rel={link.external ? "noreferrer" : undefined}
                  aria-label={link.label}
                  title={link.label}
                  className="flex h-10 w-10 items-center justify-center rounded-md border border-border bg-card/70 transition-all duration-300 hover:border-primary hover:bg-primary hover:text-primary-foreground hover:shadow-lg hover:shadow-primary/25 hover:-translate-y-1"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.08 }}
                >
                  <link.icon className="w-4 h-4" />
                </motion.a>
              ))}
            </div>
          </div>

          {cols.map((col, colIdx) => (
            <div key={col.title} className="md:col-span-2">
              <h4 className="mb-4 text-sm font-semibold uppercase tracking-[0.12em] text-muted-foreground">
                {col.title}
              </h4>
              <ul className="space-y-3 text-sm">
                {col.links.map((l, i) => (
                  <motion.li
                    key={l.to}
                    initial={{ opacity: 0, x: -8 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: colIdx * 0.1 + i * 0.05 }}
                  >
                    <Link
                      to={l.to}
                      className="hover:text-primary transition-colors inline-flex items-center gap-1 group"
                    >
                      {l.label}
                      <ArrowUpRight className="w-3 h-3 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                    </Link>
                  </motion.li>
                ))}
              </ul>
            </div>
          ))}

          <div className="md:col-span-3">
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-[0.12em] text-muted-foreground">
              Liên hệ nhanh
            </h4>
            <div className="space-y-3 text-sm">
              <div className="group">
                <span className="text-muted-foreground">SĐT / Zalo · </span>
                <a
                  href={`tel:${contactInfo.phoneRaw}`}
                  className="font-mono hover:text-primary transition-colors"
                >
                  {contactInfo.phoneDisplay}
                </a>
              </div>
              <div className="group">
                <span className="text-muted-foreground">Email · </span>
                <a
                  href={`mailto:${contactInfo.email}`}
                  className="break-all hover:text-primary transition-colors"
                >
                  {contactInfo.email}
                </a>
              </div>
              <div>
                <span className="text-muted-foreground">Office · </span>
                {contactInfo.office}
              </div>
            </div>

            {/* Status badge */}
            <div className="mt-6 inline-flex items-center gap-2 rounded-md border border-green-500/30 bg-green-500/10 px-3 py-1.5 text-xs font-semibold text-green-400">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-60" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-green-400" />
              </span>
              Đang nhận dự án
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center justify-between gap-4 border-t border-border pt-8 text-sm text-muted-foreground md:flex-row">
          <div className="flex items-center gap-1">
            © {new Date().getFullYear()} ShipCode. Made with
            <Heart className="w-3.5 h-3.5 text-red-400 fill-red-400 inline mx-0.5" />
            in Vietnam.
          </div>
          <div className="flex items-center gap-6">
            <a
              href={contactInfo.instagramUrl}
              target="_blank"
              rel="noreferrer"
              className="hover:text-primary transition-colors"
            >
              Instagram
            </a>
            <a
              href={contactInfo.tiktokUrl}
              target="_blank"
              rel="noreferrer"
              className="hover:text-primary transition-colors"
            >
              TikTok
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

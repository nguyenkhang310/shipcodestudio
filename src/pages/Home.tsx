import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import type { ReactNode } from "react";
import {
  ArrowUpRight,
  ArrowRight,
  Code2,
  Rocket,
  Sparkles,
  Github,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Page } from "@/components/Page";
import logo from "@/assets/logo-shipcode.webp";

import { ServicesContent } from "./ServicesPage";
import { ProcessContent } from "./ProcessPage";
import { PricingContent } from "./PricingPage";

const techGroups = [
  {
    label: "Frontend",
    description:
      "Thiết kế giao diện dễ dùng, tối ưu chuyển đổi và hoạt động mượt trên mọi trình duyệt.",
    items: ["React", "Next.js", "TypeScript", "Tailwind CSS"],
  },
  {
    label: "Backend",
    description:
      "Xây dựng API, xác thực và xử lý dữ liệu hiệu quả để hệ thống vận hành ổn định.",
    items: ["Node.js", "NestJS", "Express", "Django", "FastAPI"],
  },
  {
    label: "AI / Cloud",
    description:
      "Tự động hóa, gợi ý thông minh và hạ tầng đám mây giúp sản phẩm của bạn thông minh hơn.",
    items: ["TensorFlow", "PyTorch", "Hugging Face", "AWS", "GCP", "Docker"],
  },
];

const techBenefits = [
  {
    title: "Chọn đúng công nghệ",
    text: "Không chạy theo trend. Chúng tôi tư vấn stack dựa trên mục tiêu, quy mô và thời hạn dự án.",
  },
  {
    title: "Giảm rủi ro phát triển",
    text: "Stack chuẩn giúp tránh lỗi thiết kế, tăng tốc bàn giao và dễ bảo trì sau này.",
  },
  {
    title: "Vận hành dễ dàng",
    text: "Sản phẩm được xây dựng bằng công nghệ phổ biến, dễ mở rộng và dễ chuyển giao cho đội ngũ khác.",
  },
];

const founderRepos = [
  {
    name: "SaigonRentMapAnalytics",
    desc: "Bản đồ nhiệt phân tích giá thuê nhà trọ tại TP.HCM.",
    lang: "TypeScript",
    url: "https://github.com/nguyenkhang310/SaigonRentMapAnalytics",
  },
  {
    name: "tmdtuth",
    desc: "Hệ thống thương mại điện tử với Python và Flask.",
    lang: "Python",
    url: "https://github.com/nguyenkhang310/tmdtuth",
  },
  {
    name: "smart-fridge-iot",
    desc: "Hệ thống IoT theo dõi và quản lý tủ lạnh thông minh.",
    lang: "Python",
    url: "https://github.com/nguyenkhang310/smart-fridge-iot",
  },
  {
    name: "stroke-risk-predictor",
    desc: "Mô hình Machine Learning dự đoán nguy cơ đột quỵ.",
    lang: "Python",
    url: "https://github.com/nguyenkhang310/stroke-risk-predictor",
  },
  {
    name: "phathienbiensovn",
    desc: "AI nhận diện và đọc tự động biển số xe Việt Nam.",
    lang: "Notebook",
    url: "https://github.com/nguyenkhang310/phathienbiensovn",
  },
  {
    name: "hcmuteweb",
    desc: "Giao diện website giới thiệu doanh nghiệp.",
    lang: "HTML",
    url: "https://github.com/nguyenkhang310/hcmuteweb",
  },
];

type SectionIntroProps = {
  index: string;
  eyebrow: string;
  title: ReactNode;
  description: string;
};

const SectionIntro = ({
  index,
  eyebrow,
  title,
  description,
}: SectionIntroProps) => (
  <div className="mb-12 grid gap-6 md:mb-14 md:grid-cols-[minmax(0,1fr)_minmax(280px,420px)] md:items-end">
    <div>
      <div className="section-kicker mb-5">
        {index} · {eyebrow}
      </div>
      <h2 className="font-display font-bold display-heading text-balance">
        {title}
      </h2>
    </div>
    <p className="section-copy md:pb-1">{description}</p>
  </div>
);

const Home = () => {
  return (
    <Page>
      <section className="relative isolate -mt-24 overflow-hidden border-b border-border/70 pt-20 md:-mt-28 md:pt-28">
        {/* Enhanced background with multiple gradients */}
        <div className="pointer-events-none absolute inset-0 z-0 bg-gradient-to-b from-primary/8 via-background/40 to-background/95" />
        <div className="pointer-events-none absolute inset-x-0 top-0 z-0 h-96 bg-gradient-to-b from-primary/15 to-transparent opacity-40" />
        <div className="pointer-events-none absolute inset-x-0 bottom-0 z-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />

        {/* Decorative orbs - static on mobile, animated on desktop via CSS */}
        <div
          className="pointer-events-none absolute -right-40 top-32 z-0 h-80 w-80 rounded-full blur-3xl opacity-20 hidden md:block"
          style={{ background: "radial-gradient(circle, hsl(42 92% 58% / 0.5), transparent 70%)" }}
        />
        <div
          className="pointer-events-none absolute -left-32 bottom-40 z-0 h-72 w-72 rounded-full blur-3xl opacity-15 hidden md:block"
          style={{ background: "radial-gradient(circle, hsl(358 62% 48% / 0.4), transparent 70%)" }}
        />

        <div className="container relative z-10 grid min-h-[calc(100vh-72px)] items-center gap-6 py-8 md:gap-10 md:py-16 lg:grid-cols-12 lg:py-20">
          <div className="space-y-8 lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45 }}
              className="inline-flex items-center gap-2 rounded-full border border-primary/40 bg-primary/12 px-4 py-2 text-xs font-semibold text-primary backdrop-blur-sm"
            >
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-60" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-primary" />
              </span>
              Đang nhận dự án mới · Made in Vietnam
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.08 }}
              className="font-display hero-title font-extrabold text-balance text-3xl sm:text-4xl md:text-5xl lg:text-6xl"
            >
              Giải pháp phần mềm{" "}
              <span className="text-gradient animate-pulse block mt-2">
                toàn diện
              </span>
              <span className="block mt-2">bàn giao đúng hạn.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.16 }}
              className="max-w-2xl text-lg leading-8 text-muted-foreground md:text-xl"
            >
              Từ <span className="text-primary font-semibold">Web</span>,{" "}
              <span className="text-primary font-semibold">Mobile</span>,{" "}
              <span className="text-primary font-semibold">AI</span> cho đến{" "}
              <span className="text-primary font-semibold">
                Blockchain & IoT
              </span>{" "}
              — ShipCode biến ý tưởng thành sản phẩm thực tế, chất lượng cao,
              bảo hành dài hạn.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.25 }}
              className="flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4 pt-4"
            >
              <Button
                asChild
                variant="hero"
                size="default"
                className="group shadow-lg shadow-primary/40 hover:shadow-primary/60 transition-all duration-300 sm:size-xl"
              >
                <Link to="/lien-he" className="gap-2 sm:gap-3">
                  <span>Nhận tư vấn ngay</span>
                  <ArrowRight className="h-4 w-4 sm:h-5 sm:w-5 transition-transform duration-300 group-hover:translate-x-1.5" />
                </Link>
              </Button>
              <Button
                asChild
                variant="outlineGlow"
                size="default"
                className="group border-primary/40 hover:border-primary/60 hover:bg-primary/8 transition-all duration-300 sm:size-xl"
              >
                <Link to="/du-an" className="gap-2">
                  <span>Xem dự án mẫu</span>
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.35 }}
              className="grid max-w-2xl grid-cols-2 sm:grid-cols-3 gap-2 sm:gap-3 border-t border-border/50 pt-4 sm:pt-6 sm:gap-4 sm:pt-8"
            >
              {[
                { value: "99.9%", label: "Uptime hệ thống" },
                { value: "<200ms", label: "Tốc độ phản hồi" },
                { value: "100%", label: "Deadline đúng hạn" },
              ].map((s) => (
                <motion.div
                  key={s.label}
                  className="group rounded-lg border border-primary/20 bg-gradient-to-br from-primary/8 to-transparent p-3 sm:p-4 hover:border-primary/40 hover:bg-primary/12 transition-all duration-300 cursor-pointer"
                  whileHover={{ scale: 1.05, y: -4 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <div className="font-display text-lg sm:text-2xl md:text-3xl font-bold text-gradient">
                    {s.value}
                  </div>
                  <div className="mt-1 sm:mt-2 text-[11px] sm:text-xs text-muted-foreground group-hover:text-foreground/80 transition-colors">
                    {s.label}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.92, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="relative lg:col-span-5"
          >
            {/* Card background glow */}
            <div
              className="absolute inset-0 rounded-2xl blur-2xl opacity-30 -z-10 hidden md:block"
              style={{ background: "linear-gradient(135deg, hsl(42 92% 58% / 0.4), hsl(18 82% 54% / 0.3))" }}
            />

            <div className="premium-card mx-auto max-w-md p-5 sm:p-7 md:p-8 border-primary/30 backdrop-blur-sm">
              <div className="flex items-center justify-between gap-4 border-b border-primary/20 pb-6 mb-6">
                <div>
                  <div className="text-xs font-mono uppercase tracking-[0.14em] text-primary font-bold">
                    ShipCode Studio
                  </div>
                  <div className="mt-3 font-display text-3xl font-bold bg-gradient-to-r from-primary via-primary/80 to-orange-400 bg-clip-text text-transparent">
                    Build rõ, ship gọn.
                  </div>
                </div>
                <img
                  src={logo}
                  alt="ShipCode"
                  className="h-16 w-16 rounded-xl object-cover shadow-elegant"
                />
              </div>

              <div className="grid gap-4 py-6">
                {[
                  {
                    icon: Code2,
                    label: "Clean architecture",
                    text: "Dễ bảo trì và chuyển giao",
                  },
                  {
                    icon: Rocket,
                    label: "Delivery discipline",
                    text: "Milestone rõ theo từng tuần",
                  },
                  {
                    icon: Sparkles,
                    label: "Premium UI",
                    text: "Giao diện mượt trên mọi màn hình",
                  },
                ].map((item, idx) => (
                  <motion.div
                    key={item.label}
                    className="flex items-center gap-4 rounded-lg border border-primary/15 bg-gradient-to-br from-primary/6 to-transparent p-4 hover:border-primary/35 hover:bg-primary/12 transition-all duration-300 group cursor-pointer"
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.3 + idx * 0.1 }}
                    whileHover={{ x: 4 }}
                  >
                    <div className="icon-box group-hover:bg-primary/20 group-hover:border-primary/40 transition-all duration-300">
                      <item.icon className="h-5 w-5 text-primary group-hover:scale-110 transition-transform duration-300" />
                    </div>
                    <div>
                      <div className="font-semibold text-foreground group-hover:text-primary transition-colors duration-300">
                        {item.label}
                      </div>
                      <div className="text-sm text-muted-foreground">
                        {item.text}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>

              <div className="rounded-lg border border-primary/25 bg-gradient-to-br from-primary/12 to-primary/5 p-4 text-sm leading-7 text-foreground/90 backdrop-blur-sm">
                Tối ưu cho khách hàng cần sản phẩm{" "}
                <span className="text-primary font-semibold">đẹp, chắc</span>,
                bàn giao nhanh và có tài liệu đầy đủ để vận hành lâu dài.
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <motion.section
        id="dich-vu"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="container border-b border-border/50 py-20 md:py-28"
      >
        <SectionIntro
          index="01"
          eyebrow="Dịch vụ"
          title={
            <>
              Mọi dự án công nghệ,{" "}
              <span className="text-gradient">một đội ngũ duy nhất.</span>
            </>
          }
          description="Từ phần mềm doanh nghiệp đến các dự án AI phức tạp, chúng tôi nhận phát triển hệ thống phần mềm với phạm vi, tiến độ và đầu ra rõ ràng."
        />
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          <ServicesContent />
        </motion.div>
      </motion.section>

      <section
        id="quy-trinh"
        className="container border-b border-border/70 py-20 md:py-24"
      >
        <SectionIntro
          index="02"
          eyebrow="Quy trình"
          title={
            <>
              5 bước, <span className="text-gradient">0 lo lắng.</span>
            </>
          }
          description="Quy trình minh bạch, có cam kết bằng hợp đồng và có demo theo từng mốc để bạn nắm được chất lượng trước khi bàn giao."
        />
        <ProcessContent />
      </section>

      <section
        id="bang-gia"
        className="container border-b border-border/70 py-20 md:py-24"
      >
        <SectionIntro
          index="03"
          eyebrow="Bảng giá"
          title={
            <>
              Giá rõ ràng,{" "}
              <span className="text-gradient">không phát sinh.</span>
            </>
          }
          description="Báo giá cố định ngay từ đầu sau khi xem yêu cầu. Bạn biết rõ hạng mục, milestone và chi phí trước khi bắt đầu."
        />
        <PricingContent />
      </section>

      <motion.section
        id="cong-nghe"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="container border-b border-border/50 py-20 md:py-28"
      >
        <SectionIntro
          index="04"
          eyebrow="Công nghệ"
          title={
            <>
              Công nghệ{" "}
              <span className="text-gradient">giúp giải quyết bài toán.</span>
            </>
          }
          description="Không chọn stack để chạy theo xu hướng. Mỗi quyết định kỹ thuật đều hướng đến tốc độ triển khai, chi phí và khả năng vận hành."
        />

        <div className="mb-8 grid gap-5 md:grid-cols-3">
          {techBenefits.map((benefit, idx) => (
            <motion.div
              key={benefit.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="premium-card p-6 transition-all duration-300 hover:border-primary/50 hover:shadow-lg hover:shadow-primary/20 md:p-7 group cursor-pointer"
              whileHover={{ y: -4 }}
            >
              <h3 className="mb-3 font-display text-xl font-semibold text-foreground group-hover:text-primary transition-colors duration-300">
                {benefit.title}
              </h3>
              <p className="text-sm leading-7 text-muted-foreground group-hover:text-foreground/80 transition-colors duration-300">
                {benefit.text}
              </p>
            </motion.div>
          ))}
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {techGroups.map((group, idx) => (
            <motion.div
              key={group.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 + idx * 0.1 }}
              className="premium-card card-3d p-6 transition-all duration-300 hover:border-primary/40 hover:shadow-lg hover:shadow-primary/25 md:p-7 group"
              whileHover={{ y: -6 }}
            >
              <h3 className="mb-3 font-display text-2xl font-semibold text-foreground group-hover:text-primary transition-colors duration-300">
                {group.label}
              </h3>
              <p className="mb-5 text-sm leading-7 text-muted-foreground group-hover:text-foreground/80 transition-colors duration-300">
                {group.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <span
                    key={item}
                    className="chip hover:bg-primary/20 hover:text-primary hover:border-primary/60 transition-all duration-300 cursor-default"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="mt-12 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
        >
          <Link
            to="/cong-nghe"
            className="inline-flex items-center gap-2 font-semibold text-primary underline underline-offset-4 decoration-primary/30 transition-all hover:text-foreground hover:decoration-primary group"
          >
            Xem chi tiết công nghệ
            <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
          </Link>
        </motion.div>
      </motion.section>

      <motion.section
        id="du-an"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="container border-b border-border/50 py-20 md:py-28"
      >
        <SectionIntro
          index="05"
          eyebrow="Founder & dự án"
          title={
            <>
              Người đứng sau ShipCode,{" "}
              <span className="text-gradient">Nguyên Khang.</span>
            </>
          }
          description="Kinh nghiệm thực chiến đa nền tảng, tập trung vào chất lượng mã nguồn, trải nghiệm sản phẩm và sự hỗ trợ sau bàn giao."
        />

        <div className="grid gap-6 lg:grid-cols-12">
          <motion.div
            className="lg:col-span-4"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <div className="premium-card flex h-full flex-col items-center p-7 hover:border-primary/40 transition-all duration-300 group">
              <div className="mb-6 h-28 w-28 rounded-full bg-gradient-primary p-1 shadow-elegant group-hover:shadow-lg group-hover:shadow-primary/40 transition-all duration-300">
                <img
                  src="https://avatars.githubusercontent.com/u/258641749?v=4"
                  alt="Nguyên Khang"
                  className="h-full w-full rounded-full border-4 border-background object-cover"
                />
              </div>
              <h3 className="mb-2 font-display text-3xl font-bold text-foreground group-hover:text-primary transition-colors duration-300">
                Nguyên Khang
              </h3>
              <p className="mb-4 text-xs font-mono uppercase tracking-[0.14em] text-primary font-bold">
                Founder & Lead Developer
              </p>
              <p className="mx-auto mb-8 max-w-xs text-sm leading-7 text-muted-foreground">
                Data Engineering student at Ho Chi Minh City University of
                Technology and Engineering (HCMUTE). Passionate about AI, Web
                Development & System Architecture.
              </p>
              <a
                href="https://github.com/nguyenkhang310"
                target="_blank"
                rel="noreferrer"
                className="mt-auto inline-flex w-full items-center justify-center gap-2 rounded-lg border border-primary/30 bg-gradient-to-r from-primary/10 to-transparent px-4 py-3 font-semibold transition-all hover:border-primary/60 hover:bg-primary/20 hover:text-primary group/link"
              >
                <Github className="h-5 w-5 group-hover/link:scale-110 transition-transform" />{" "}
                @nguyenkhang310
              </a>
            </div>
          </motion.div>

          <div className="grid gap-5 md:grid-cols-2 lg:col-span-8">
            {founderRepos.map((p, idx) => (
              <motion.a
                key={p.name}
                href={p.url}
                target="_blank"
                rel="noreferrer"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.25 + idx * 0.08 }}
                className="premium-card group flex min-h-[160px] sm:min-h-[200px] flex-col justify-between p-5 sm:p-6 transition-all duration-300 hover:border-primary/40 hover:shadow-lg hover:shadow-primary/20"
                whileHover={{ y: -4 }}
              >
                <div>
                  <div className="mb-4 flex items-start justify-between">
                    <div className="icon-box group-hover:bg-primary/20 group-hover:border-primary/40 transition-all duration-300">
                      <Code2 className="h-5 w-5 text-primary group-hover:scale-110 transition-transform duration-300" />
                    </div>
                    <ArrowUpRight className="h-4 w-4 text-muted-foreground transition-all duration-300 group-hover:text-primary group-hover:translate-x-1 group-hover:-translate-y-1" />
                  </div>
                  <h4 className="mb-2 truncate font-display text-lg font-semibold transition-colors duration-300 group-hover:text-primary">
                    {p.name}
                  </h4>
                  <p className="mb-4 line-clamp-2 text-sm text-muted-foreground group-hover:text-foreground/80 transition-colors duration-300">
                    {p.desc}
                  </p>
                </div>
                <div className="flex items-center gap-2 text-[11px] font-mono uppercase text-primary/80 group-hover:text-primary transition-colors duration-300">
                  <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                  {p.lang}
                </div>
              </motion.a>
            ))}
          </div>
        </div>

        <motion.div
          className="mt-10 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
        >
          <a
            href="https://github.com/nguyenkhang310"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground underline underline-offset-4 decoration-border transition-all hover:text-foreground hover:decoration-primary group"
          >
            Khám phá toàn bộ kho lưu trữ trên Github
            <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
          </a>
        </motion.div>
      </motion.section>

      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
        className="border-b border-border/50 py-20 md:py-28 relative overflow-hidden"
      >
        {/* Background glow effect */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-primary/8 via-transparent to-transparent" />

        <div className="container relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <div className="mx-auto mb-8 flex h-14 w-14 items-center justify-center rounded-lg border border-primary/30 bg-gradient-to-br from-primary/15 to-transparent">
              <Rocket className="h-7 w-7 text-primary" />
            </div>
            <h2 className="mx-auto max-w-4xl font-display text-4xl font-bold leading-tight text-balance md:text-5xl">
              Biến ý tưởng kinh doanh thành{" "}
              <span className="text-gradient">sản phẩm thực chiến.</span>
            </h2>
            <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground">
              ShipCode phát triển phần mềm chất lượng cao, đẹp ở giao diện và
              chắc ở kiến trúc.
            </p>
          </motion.div>
        </div>
      </motion.section>

      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="container py-20 text-center md:py-28 relative"
      >
        {/* Final CTA glow background */}
        <div
          className="pointer-events-none absolute inset-0 blur-3xl opacity-20 -z-10 hidden md:block"
          style={{ background: "radial-gradient(circle, hsl(42 92% 58% / 0.3), transparent 70%)" }}
        />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
        >
          <h2 className="font-display text-4xl font-bold leading-tight text-balance md:text-5xl">
            Sẵn sàng <span className="text-gradient">ship code?</span>
          </h2>
          <p className="mx-auto mb-10 mt-6 max-w-xl text-lg text-muted-foreground">
            Gửi đề bài hôm nay, nhận báo giá trong{" "}
            <span className="text-primary font-semibold">30 phút</span>.
          </p>
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.98 }}>
            <Button
              asChild
              variant="hero"
              size="xl"
              className="group shadow-lg shadow-primary/50 hover:shadow-primary/70 transition-all duration-300 px-8"
            >
              <Link to="/lien-he" className="gap-3">
                <span className="text-lg">Bắt đầu dự án</span>
                <ArrowRight className="h-5 w-5" />
              </Link>
            </Button>
          </motion.div>
        </motion.div>
      </motion.section>
    </Page>
  );
};

export default Home;

import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  MessageCircle,
  FileText,
  Code2,
  TestTube2,
  Presentation,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Page, PageHeader } from "@/components/Page";

const steps = [
  {
    icon: MessageCircle,
    title: "Khảo sát & Phân tích yêu cầu",
    time: "Bước 01",
    desc: "Tiếp nhận ý tưởng, xác định rõ phạm vi bài toán. Tư vấn công nghệ tối ưu (Web/Mobile/AI/IoT), báo giá minh bạch và chốt lộ trình.",
    details: [
      "Phân tích nghiệp vụ",
      "Đề xuất stack công nghệ",
      "Chốt phạm vi và tính năng",
      "Ký kết lộ trình rõ ràng",
    ],
  },
  {
    icon: FileText,
    title: "Thiết kế Kiến trúc & UI/UX",
    time: "Bước 02",
    desc: "Xây dựng sơ đồ cơ sở dữ liệu (ERD), thiết kế hệ thống và lên bản mock-up giao diện UI/UX trực quan trên Figma.",
    details: [
      "Thiết kế Database (ERD)",
      "Sơ đồ kiến trúc hệ thống",
      "Mock-up UI/UX Figma",
      "Chốt thiết kế với khách",
    ],
  },
  {
    icon: Code2,
    title: "Lập trình & Báo cáo tiến độ",
    time: "Bước 03",
    desc: "Thực thi bằng Clean Code, quản lý source qua Git. Báo cáo tiến độ định kỳ hàng tuần, demo tính năng liên tục để bạn theo dõi sát sao.",
    details: [
      "Clean code & Best practices",
      "Quản lý source bằng Git",
      "Demo tiến độ hàng tuần",
      "Review và tinh chỉnh",
    ],
  },
  {
    icon: TestTube2,
    title: "Kiểm thử & Viết tài liệu",
    time: "Bước 04",
    desc: "Kiểm thử toàn diện đảm bảo không lỗi (Bug-free). Hỗ trợ viết tài liệu báo cáo kỹ thuật (Word/LaTeX) chuẩn format yêu cầu.",
    details: [
      "Unit & Integration Test",
      "Tối ưu hiệu năng (Performance)",
      "Viết tài liệu HDSD",
      "Hướng dẫn triển khai",
    ],
  },
  {
    icon: Presentation,
    title: "Bàn giao & Triển khai",
    time: "Bước 05",
    desc: "Bàn giao toàn bộ Source Code, hỗ trợ setup môi trường lên Server. Training chi tiết cách vận hành và quản trị hệ thống phần mềm.",
    details: [
      "Deploy lên Server/Cloud",
      "Training vận hành hệ thống",
      "Bàn giao tài liệu",
      "Bảo hành, bảo trì dài hạn",
    ],
  },
];

const stepVariants = {
  hidden: { opacity: 0, x: -30 },
  visible: (i: number) => ({
    opacity: 1,
    x: 0,
    transition: { delay: i * 0.12, duration: 0.5, ease: [0.22, 1, 0.36, 1] },
  }),
};

export const ProcessContent = () => {
  return (
    <>
      <div className="relative ml-1 sm:ml-4 md:ml-8 space-y-4 sm:space-y-6 md:space-y-8 pb-4 sm:pb-8">
        {/* Animated gradient timeline line */}
        <div className="absolute left-0 top-0 bottom-0 w-px overflow-hidden">
          <motion.div
            className="w-full h-full"
            style={{
              background:
                "linear-gradient(180deg, hsl(42 92% 58% / 0.5), hsl(358 62% 48% / 0.3), hsl(190 95% 58% / 0.2), transparent)",
              transformOrigin: "top",
            }}
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1.2, ease: "easeOut" }}
          />
        </div>

        {steps.map((s, i) => (
          <motion.div
            key={s.title}
            className="relative pl-8 md:pl-14"
            variants={stepVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            custom={i}
          >
            {/* Animated step icon node */}
            <motion.div
              className="absolute -left-5 top-0 z-10 flex h-10 w-10 items-center justify-center rounded-md border border-primary/30 bg-background shadow-elegant md:-left-6 md:h-12 md:w-12 group/icon"
              whileHover={{ scale: 1.15, borderColor: "hsl(42 92% 58% / 0.6)" }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <s.icon className="h-5 w-5 text-primary md:h-6 md:w-6" />
            </motion.div>

            {/* Connection dot between line and card */}
            <div className="absolute -left-[3px] top-5 h-1.5 w-1.5 rounded-full bg-primary/60 md:-left-[4px]" />

            <div className="premium-card group p-3 sm:p-4 md:p-7 transition-all duration-300 hover:border-primary/40 hover:shadow-lg hover:shadow-primary/10">
              <div className="mb-4 flex flex-col justify-between gap-4 md:flex-row md:items-center">
                <h3 className="font-display text-lg sm:text-2xl font-bold text-foreground transition-colors group-hover:text-primary md:text-3xl">
                  {s.title}
                </h3>
                <motion.div
                  className="inline-flex shrink-0 items-center rounded-md border border-primary/20 bg-primary/10 px-4 py-1.5 text-sm font-bold uppercase tracking-[0.12em] text-primary"
                  whileHover={{
                    scale: 1.05,
                    backgroundColor: "hsl(42 92% 58% / 0.2)",
                  }}
                >
                  {s.time}
                </motion.div>
              </div>

              <p className="mb-4 md:mb-5 text-xs sm:text-sm md:text-base leading-6 md:leading-7 text-muted-foreground">
                {s.desc}
              </p>

              <div className="grid gap-3 sm:grid-cols-2">
                {s.details.map((d, dIdx) => (
                  <motion.div
                    key={d}
                    className="flex items-center gap-2 sm:gap-3 rounded-md border border-border/60 bg-muted/25 p-2.5 sm:p-4 transition-all duration-300 hover:border-primary/30 hover:bg-primary/5 group/detail"
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 + dIdx * 0.05 }}
                  >
                    <div className="flex h-6 w-6 sm:h-8 sm:w-8 shrink-0 items-center justify-center rounded-md bg-primary/10 group-hover/detail:bg-primary/20 transition-colors">
                      <CheckCircle2 className="h-4 w-4 text-primary" />
                    </div>
                    <span className="text-xs sm:text-sm font-medium group-hover/detail:text-foreground transition-colors">
                      {d}
                    </span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      <motion.div
        className="mt-12 md:mt-16 text-center"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.3 }}
      >
        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.97 }}>
          <Button
            asChild
            variant="hero"
            size="default"
            className="group md:size-lg px-6 md:px-10 py-2 md:py-3 md:text-lg shadow-lg shadow-primary/30 hover:shadow-primary/50 transition-shadow"
          >
            <Link to="/lien-he">
              Bắt đầu Bước 01{" "}
              <ArrowRight className="ml-2 transition-transform group-hover:translate-x-2" />
            </Link>
          </Button>
        </motion.div>
      </motion.div>
    </>
  );
};

const ProcessPage = () => {
  return (
    <Page>
      <PageHeader
        index="02"
        eyebrow="Quy trình"
        title={
          <>
            5 bước, <span className="text-gradient">0 lo lắng.</span>
          </>
        }
        description="Quy trình rõ ràng, minh bạch, có cam kết bằng hợp đồng. Bạn theo dõi được tiến độ mỗi ngày, không sợ bị 'bùng kèo'."
      />

      <div className="container">
        <ProcessContent />
      </div>
    </Page>
  );
};

export default ProcessPage;

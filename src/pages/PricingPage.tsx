import { Link } from "react-router-dom";
import {
  Check,
  Sparkles,
  ShieldCheck,
  Clock,
  MessageCircle,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Page, PageHeader } from "@/components/Page";

const plans = [
  {
    name: "Web / Mobile App",
    price: "600.000",
    desc: "Phát triển Website, Web App hoặc ứng dụng di động từ cơ bản đến khá.",
    features: [
      "Frontend (React/Vue/Flutter)",
      "Backend RESTful API",
      "Database thiết kế chuẩn",
      "Tài liệu hệ thống",
      "Hỗ trợ sửa lỗi 7 ngày",
    ],
    cta: "Đặt đơn Web/App",
    variant: "outline" as const,
  },
  {
    name: "AI & Data Science",
    price: "1.000.000",
    desc: "Phát triển mô hình AI, Computer Vision, NLP hoặc Data Science.",
    features: [
      "Xử lý dữ liệu (Dataset)",
      "Train & Optimize Model",
      "Notebook giải thích code",
      "Tích hợp giao diện Web demo",
      "Hỗ trợ trả lời câu hỏi",
    ],
    cta: "Đặt đơn AI/ML",
    variant: "hero" as const,
    featured: true,
  },
  {
    name: "IoT & Vi mạch",
    price: "800.000",
    desc: "Hệ thống nhà thông minh, điều khiển vi điều khiển, theo dõi cảm biến.",
    features: [
      "Code Firmware (C/C++)",
      "Thiết kế sơ đồ mạch",
      "Giao diện Web/App điều khiển",
      "Tích hợp MQTT/Firebase",
      "Video hướng dẫn nối dây",
    ],
    cta: "Đặt đơn IoT",
    variant: "outlineGlow" as const,
  },
];

export const PricingContent = () => {
  return (
    <>
      <div className="grid gap-4 md:gap-5 md:grid-cols-3 max-w-6xl mx-auto">
        {plans.map((p) => (
          <div
            key={p.name}
            className={`premium-card relative flex flex-col p-4 sm:p-5 md:p-6 md:p-7 transition-all duration-300 hover:-translate-y-1 ${
              p.featured
                ? "border-primary/60 shadow-elegant"
                : "hover:border-primary/40"
            }`}
          >
            {p.featured && (
              <div className="absolute -top-3 sm:-top-4 left-1/2 flex -translate-x-1/2 items-center gap-1.5 rounded-md bg-gradient-fire px-3 py-1 sm:px-4 sm:py-1.5 text-[10px] sm:text-xs font-bold uppercase tracking-[0.12em] text-primary-foreground shadow-elegant">
                <Sparkles className="w-3 h-3" /> Phổ biến nhất
              </div>
            )}
            {p.featured && (
              <div className="absolute inset-0 mesh-gradient opacity-20 pointer-events-none" />
            )}
            <div className="relative flex h-full flex-col">
              <h3 className="font-display font-semibold text-lg md:text-xl mb-2">
                {p.name}
              </h3>
              <p className="text-xs md:text-sm text-muted-foreground mb-5 md:mb-6 min-h-[40px]">
                {p.desc}
              </p>
              <div className="mb-6 md:mb-8">
                <div className="flex items-baseline gap-1">
                  {p.price !== "Liên hệ" && (
                    <span className="text-xs text-muted-foreground">từ</span>
                  )}
                  <span className="font-display font-bold text-2xl sm:text-3xl md:text-4xl text-gradient">
                    {p.price}
                  </span>
                  {p.price !== "Liên hệ" && (
                    <span className="text-xs text-muted-foreground">đ</span>
                  )}
                </div>
              </div>
              <ul className="space-y-2 md:space-y-3 mb-6 md:mb-8 flex-1">
                {p.features.map((f) => (
                  <li
                    key={f}
                    className="flex items-start gap-2 md:gap-3 text-xs md:text-sm"
                  >
                    <div className="mt-0.5 w-4 md:w-5 h-4 md:h-5 rounded-md bg-primary/15 flex items-center justify-center shrink-0">
                      <Check className="w-2.5 md:w-3 h-2.5 md:h-3 text-primary" />
                    </div>
                    <span className="text-muted-foreground">{f}</span>
                  </li>
                ))}
              </ul>
              <Button
                asChild
                variant={p.variant}
                className="w-full"
                size="default"
              >
                <Link to="/lien-he">{p.cta}</Link>
              </Button>
            </div>
          </div>
        ))}
      </div>

      <div className="grid gap-5 mt-12 md:grid-cols-3">
        {[
          {
            icon: ShieldCheck,
            title: "Cam kết hợp đồng",
            desc: "Mọi đơn đều có hợp đồng & NDA. Bảo mật 100%.",
          },
          {
            icon: Clock,
            title: "Đúng deadline",
            desc: "98% đơn hàng được giao đúng hoặc trước hạn.",
          },
          {
            icon: MessageCircle,
            title: "Hỗ trợ 24/7",
            desc: "Trả lời mọi câu hỏi của bạn trong vòng 1 giờ.",
          },
        ].map((b) => (
          <div
            key={b.title}
            className="premium-card flex items-start gap-4 p-5"
          >
            <div className="icon-box shrink-0">
              <b.icon className="text-primary" />
            </div>
            <div>
              <div className="font-semibold mb-1">{b.title}</div>
              <p className="text-sm text-muted-foreground">{b.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

const PricingPage = () => {
  return (
    <Page>
      <PageHeader
        index="03"
        eyebrow="Bảng giá"
        title={
          <>
            Giá rõ ràng, <span className="text-gradient">không phát sinh.</span>
          </>
        }
        description="Báo giá cố định ngay từ đầu sau khi xem yêu cầu. Đặt cọc 30%, thanh toán theo milestone — bạn chỉ trả khi hài lòng."
      />

      <div className="container">
        <PricingContent />
      </div>
    </Page>
  );
};

export default PricingPage;

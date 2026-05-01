import { Page, PageHeader } from "@/components/Page";

const groups = [
  {
    label: "Frontend",
    description:
      "Xây dựng giao diện đẹp, responsive và dễ dùng cho người dùng cuối.",
    useCases: [
      "Website giới thiệu thương hiệu",
      "Dashboard vận hành nội bộ",
      "Ứng dụng tương tác cao trên trình duyệt",
    ],
    items: ["React", "Next.js", "TypeScript", "Tailwind CSS"],
  },
  {
    label: "Backend",
    description:
      "Thiết kế API an toàn, xử lý dữ liệu hiệu quả và hỗ trợ mở rộng theo doanh nghiệp.",
    useCases: [
      "Hệ thống quản lý đơn hàng",
      "API cho mobile app",
      "Dịch vụ SaaS và portal khách hàng",
    ],
    items: ["Node.js", "NestJS", "Express", "Django", "FastAPI"],
  },
  {
    label: "Mobile",
    description:
      "Phát triển ứng dụng native và cross-platform mượt mà cho iOS/Android.",
    useCases: [
      "App bán hàng và đặt lịch",
      "Ứng dụng nội bộ cho nhân sự",
      "App khách hàng thân thiết",
    ],
    items: ["Flutter", "React Native", "Kotlin", "Swift", "Java"],
  },
  {
    label: "AI / ML",
    description:
      "Ứng dụng AI để tự động hóa, phân tích thông tin và cải thiện trải nghiệm người dùng.",
    useCases: [
      "Chatbot hỗ trợ khách hàng",
      "Dự đoán nhu cầu/thiếu hụt",
      "Phân tích dữ liệu hành vi",
    ],
    items: ["TensorFlow", "PyTorch", "Hugging Face", "LangChain"],
  },
  {
    label: "Database",
    description:
      "Lưu trữ dữ liệu nhanh, bảo mật và dễ dàng mở rộng cho hệ thống lớn nhỏ.",
    useCases: [
      "Ứng dụng thương mại điện tử",
      "Hệ thống CRM",
      "Quản lý kho và tài sản",
    ],
    items: ["PostgreSQL", "MySQL", "MongoDB", "Redis", "Firebase", "Supabase"],
  },
  {
    label: "DevOps & Cloud",
    description:
      "Triển khai, giám sát và vận hành hệ thống bền bỉ trên đám mây.",
    useCases: [
      "Triển khai nhanh sản phẩm",
      "Backup và phục hồi dữ liệu",
      "Giám sát hiệu suất 24/7",
    ],
    items: ["Docker", "Kubernetes", "AWS", "GCP", "Azure", "Vercel"],
  },
];

const TechPage = () => {
  return (
    <Page>
      <PageHeader
        index="05"
        eyebrow="Công nghệ hỗ trợ"
        title={
          <>
            Làm chủ <span className="text-gradient">mọi stack.</span>
          </>
        }
        description="Chúng tôi không kể tên công nghệ để khoe. Chúng tôi chọn stack phù hợp với bài toán, tốc độ triển khai và chi phí vận hành."
      />

      <div className="container space-y-14">
        <div className="relative -mx-4 overflow-hidden border-y border-border/70 py-5">
          <div className="absolute bottom-0 left-0 top-0 z-10 w-20 bg-gradient-to-r from-background to-transparent" />
          <div className="absolute bottom-0 right-0 top-0 z-10 w-20 bg-gradient-to-l from-background to-transparent" />
          <div className="flex animate-marquee gap-4 w-max">
            {[
              ...groups.flatMap((g) => g.items),
              ...groups.flatMap((g) => g.items),
            ].map((t, i) => (
              <div
                key={i}
                className="chip whitespace-nowrap font-mono"
              >
                {t}
              </div>
            ))}
          </div>
        </div>

        <div className="grid gap-5 lg:grid-cols-3">
          {groups.map((g, i) => (
            <div
              key={g.label}
              className="premium-card card-3d p-6 transition-all hover:border-primary/40 md:p-7"
            >
              <div className="absolute -top-10 -right-10 h-40 w-40 mesh-gradient opacity-20" />
              <div className="relative">
                <div className="flex items-center gap-3 mb-4">
                  <span className="font-mono text-xs text-primary/60">
                    0{i + 1}
                  </span>
                  <h3 className="font-display text-2xl font-bold">{g.label}</h3>
                </div>
                <p className="mb-6 text-sm leading-7 text-muted-foreground">
                  {g.description}
                </p>
                <div className="mb-5">
                  <p className="text-xs uppercase tracking-[0.14em] text-primary/80 mb-3">
                    Dùng cho
                  </p>
                  <div className="grid gap-3">
                    {g.useCases.map((useCase) => (
                      <span
                        key={useCase}
                        className="inline-flex items-center gap-2 rounded-md border border-border bg-muted/20 px-3 py-2 text-sm text-foreground"
                      >
                        <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                        {useCase}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="flex flex-wrap gap-2">
                  {g.items.map((it) => (
                    <span key={it} className="chip font-mono">
                      {it}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="premium-card p-7 md:p-9">
          <h2 className="font-display text-3xl font-bold md:text-4xl mb-6 text-balance">
            Tại sao công nghệ của chúng tôi có ý nghĩa?
          </h2>
          <div className="grid gap-5 md:grid-cols-3">
            <div className="rounded-md border border-border bg-background/60 p-5">
              <p className="font-semibold text-lg mb-3">Tư vấn thực tế</p>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Chúng tôi phân tích bài toán trước rồi chọn công nghệ phù hợp,
                không chọn vì nó hot.
              </p>
            </div>
            <div className="rounded-md border border-border bg-background/60 p-5">
              <p className="font-semibold text-lg mb-3">Đảm bảo vận hành</p>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Sản phẩm được xây dựng để dễ bảo trì, dễ mở rộng và giảm rủi ro
                khi bàn giao.
              </p>
            </div>
            <div className="rounded-md border border-border bg-background/60 p-5">
              <p className="font-semibold text-lg mb-3">
                Tập trung vào giá trị
              </p>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Ta ưu tiên tốc độ ra mắt, chất lượng trải nghiệm và chi phí hợp
                lý cho doanh nghiệp.
              </p>
            </div>
          </div>
        </div>
      </div>
    </Page>
  );
};

export default TechPage;

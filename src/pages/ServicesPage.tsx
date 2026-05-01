import { Link } from "react-router-dom";
import { Globe, Smartphone, Brain, Cpu, Gamepad2, Coins, Database, Shield, ArrowUpRight, ArrowRight, FolderGit2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Page, PageHeader } from "@/components/Page";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

const services = [
  { 
    icon: Globe, title: "Website / Web App", desc: "Landing page, e-commerce, ERP, CRM, dashboard quản trị bằng React, Next.js, Laravel, Spring Boot, .NET.", tag: "Phổ biến nhất", deliverables: ["Frontend hiện đại", "Backend RESTful/GraphQL", "Database thiết kế chuẩn", "Deploy + CI/CD"],
    popularProjects: ["Hệ thống quản lý bán hàng (E-commerce) đa nền tảng", "Website đặt phòng khách sạn / vé máy bay trực tuyến", "Dashboard quản trị nhân sự và chấm công (HRM)", "Mạng xã hội thu nhỏ chia sẻ bài viết, hình ảnh", "Website đấu giá sản phẩm trực tuyến"]
  },
  { 
    icon: Smartphone, title: "Ứng dụng Mobile", desc: "Android (Java/Kotlin), iOS (Swift), cross-platform với Flutter, React Native.", deliverables: ["Native hoặc cross-platform", "Push notification", "Tích hợp Firebase", "Build APK/IPA"],
    popularProjects: ["App quản lý chi tiêu cá nhân thông minh", "Ứng dụng gọi món ăn và giao hàng trực tuyến", "App luyện thi trắc nghiệm bằng Flashcard", "App theo dõi sức khoẻ, đếm bước chân (Fitness)", "Ví điện tử / App thanh toán mô phỏng"]
  },
  { 
    icon: Brain, title: "AI / Machine Learning", desc: "Chatbot, NLP, computer vision, recommend system, dự đoán dữ liệu với Python, TensorFlow, PyTorch.", tag: "Hot 2026", deliverables: ["Train model trên dataset thật", "Notebook giải thích chi tiết", "Web demo kết quả", "Báo cáo có biểu đồ"],
    popularProjects: ["Hệ thống Recommend gợi ý sản phẩm/phim ảnh", "Nhận diện khuôn mặt và chấm công AI", "Chatbot RAG trả lời câu hỏi dựa trên tài liệu", "Phân loại bệnh qua ảnh X-quang (Computer Vision)", "Dự đoán giá nhà/chứng khoán bằng Machine Learning"]
  },
  { 
    icon: Cpu, title: "IoT & Embedded", desc: "Smart home, giám sát môi trường với ESP32, Arduino, Raspberry Pi, MQTT, kết nối cloud realtime.", deliverables: ["Sơ đồ mạch", "Firmware C/C++", "Dashboard realtime", "Hướng dẫn lắp ráp"],
    popularProjects: ["Hệ thống nhà thông minh điều khiển qua điện thoại", "Giám sát chất lượng không khí / độ ẩm đất trồng", "Thùng rác thông minh tự động phân loại", "Bãi đỗ xe thông minh có đếm số lượng xe", "Hệ thống tưới cây tự động cảnh báo qua Telegram"]
  },
  { 
    icon: Gamepad2, title: "Game Development", desc: "Game 2D/3D bằng Unity, Unreal, Godot. Đầy đủ menu, level, hiệu ứng, âm thanh.", deliverables: ["Asset đầy đủ", "Multi-level + boss", "Sound effect", "Build cho PC/Web"],
    popularProjects: ["Game Sinh tồn RPG góc nhìn thứ 3 (3D)", "Game Platformer vượt ải truyền thống (2D)", "Game thẻ bài chiến thuật turn-based", "Game đua xe né chướng ngại vật mobile", "Game AR (thực tế ảo tăng cường) bắt quái thú"]
  },
  { 
    icon: Coins, title: "Blockchain / Web3", desc: "Smart contract Solidity, DApp, NFT marketplace, ví crypto, kết nối MetaMask, Ethereum, BSC.", deliverables: ["Smart contract verified", "DApp frontend", "Tích hợp ví", "Test trên testnet"],
    popularProjects: ["Sàn giao dịch NFT Marketplace phi tập trung", "Hệ thống truy xuất nguồn gốc nông sản bằng Blockchain", "Ứng dụng Bầu cử trực tuyến chống gian lận (DApp)", "Sàn Swap token phi tập trung (DEX) cơ bản", "Game Play-to-Earn tích hợp Web3"]
  },
  { 
    icon: Database, title: "Big Data & BI", desc: "Dashboard BI, Power BI, Tableau, ETL, xử lý dữ liệu lớn với Spark, Hadoop, Kafka.", deliverables: ["Pipeline ETL", "Dashboard tương tác", "Báo cáo insight", "Dataset thực tế"],
    popularProjects: ["Phân tích và Dashboard hành vi mua hàng của khách hàng", "ETL pipeline xử lý log dữ liệu giao dịch từ Kafka", "Phân cụm khách hàng (Clustering) phục vụ Marketing", "Hệ thống phân tích Sentiment (cảm xúc) từ mạng xã hội", "Dashboard phân tích rủi ro tín dụng ngân hàng"]
  },
  { 
    icon: Shield, title: "An toàn thông tin", desc: "Pentest, mã hoá, hệ thống xác thực, bảo mật mạng, phân tích log, IDS/IPS.", deliverables: ["Báo cáo Pentest", "PoC tấn công", "Giải pháp phòng thủ", "Demo trên lab"],
    popularProjects: ["Mô phỏng và phòng chống tấn công SQL Injection, XSS", "Triển khai hệ thống phát hiện xâm nhập (IDS/IPS)", "Xây dựng ứng dụng quản lý mật khẩu mã hoá đầu cuối", "Pentest và dò quét lỗ hổng ứng dụng Web", "Mô phỏng mã độc Ransomware và cách phục hồi"]
  },
];

export const ServicesContent = () => {
  return (
    <>
      <div className="grid md:grid-cols-2 gap-6">
        {services.map((s, i) => (
          <article
            key={s.title}
            className="premium-card group flex flex-col p-6 transition-all duration-300 hover:border-primary/40 md:p-7"
          >
            <div className="absolute -top-20 -right-20 w-64 h-64 mesh-gradient opacity-0 group-hover:opacity-40 transition-opacity duration-700" />

            {s.tag && (
              <span className="absolute top-5 right-5 z-10 rounded-md bg-gradient-fire px-3 py-1 text-[10px] font-bold uppercase tracking-[0.12em] text-primary-foreground">
                {s.tag}
              </span>
            )}

            <div className="relative flex flex-1 items-start gap-5">
              <div className="icon-box shrink-0 transition-colors group-hover:bg-primary">
                <s.icon className="h-6 w-6 text-primary transition-colors group-hover:text-primary-foreground" />
              </div>
              <div className="flex-1 flex flex-col h-full">
                <span className="font-mono text-xs text-primary/60">0{i + 1}</span>
                <h3 className="font-display font-bold text-2xl mb-3 mt-1 text-balance">{s.title}</h3>
                <p className="text-sm text-muted-foreground leading-7 mb-5">{s.desc}</p>
                <ul className="space-y-2 mb-6 flex-1">
                  {s.deliverables.map((d) => (
                    <li key={d} className="flex items-center gap-2 text-sm">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                      <span className="text-foreground/80">{d}</span>
                    </li>
                  ))}
                </ul>
                
                {/* Popular Projects Dialog Button */}
                <Dialog>
                  <DialogTrigger asChild>
                    <Button variant="outlineGlow" size="sm" className="w-full flex items-center justify-center gap-2 group/btn border-primary/30 hover:border-primary">
                      <FolderGit2 className="w-4 h-4 text-primary" />
                      Xem dự án tiêu biểu
                      <ArrowUpRight className="w-4 h-4 transition-transform group-hover/btn:-translate-y-0.5 group-hover/btn:translate-x-0.5 opacity-70" />
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="sm:max-w-[550px] glass border-primary/30 p-6 md:p-8">
                    <DialogHeader>
                      <div className="flex items-center gap-4 mb-2">
                        <div className="icon-box shrink-0">
                          <s.icon className="w-7 h-7 text-primary" />
                        </div>
                        <div>
                          <DialogTitle className="text-2xl font-display tracking-tight text-gradient">{s.title}</DialogTitle>
                          <DialogDescription className="text-sm mt-1">
                            Các dịch vụ phát triển phần mềm được nhiều doanh nghiệp và khách hàng tin dùng.
                          </DialogDescription>
                        </div>
                      </div>
                    </DialogHeader>
                    <div className="mt-4 space-y-3">
                      {s.popularProjects.map((proj, idx) => (
                        <div key={idx} className="flex items-start gap-3 p-4 rounded-md bg-muted/40 border border-border/50 hover:border-primary/40 hover:bg-muted/60 transition-colors">
                          <div className="mt-1 w-6 h-6 rounded-full bg-primary/15 flex items-center justify-center shrink-0">
                            <span className="font-mono text-[10px] font-bold text-primary">{idx + 1}</span>
                          </div>
                          <span className="text-foreground/90 font-medium text-[15px] leading-snug pt-0.5">{proj}</span>
                        </div>
                      ))}
                    </div>
                    <div className="mt-8 flex justify-end gap-3">
                      <Button asChild variant="hero" className="w-full sm:w-auto">
                        <Link to="/lien-he">Nhận tư vấn ngay <ArrowRight className="w-4 h-4 ml-1" /></Link>
                      </Button>
                    </div>
                  </DialogContent>
                </Dialog>

              </div>
            </div>
          </article>
        ))}
      </div>

      {/* CTA */}
      <div className="premium-card mt-16 p-8 text-center md:p-10">
        <div className="absolute inset-0 mesh-gradient opacity-25" />
        <div className="relative">
          <h2 className="font-display font-bold text-3xl md:text-4xl mb-4 text-balance">
            Không tìm thấy mảng bạn cần?
          </h2>
          <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
            Chúng tôi nhận cả những đề tài đặc biệt. Liên hệ để được tư vấn miễn phí.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button asChild variant="hero" size="xl" className="group">
              <Link to="/lien-he">Liên hệ tư vấn <ArrowRight className="transition-transform group-hover:translate-x-1" /></Link>
            </Button>
            <Button asChild variant="outlineGlow" size="xl">
              <Link to="/bang-gia">Xem bảng giá <ArrowUpRight /></Link>
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

const ServicesPage = () => {
  return (
    <Page>
      <PageHeader
        index="01"
        eyebrow="Dịch vụ"
        title={<>Mọi dự án công nghệ, <span className="text-gradient">một đội ngũ duy nhất.</span></>}
        description="Từ dự án nhỏ đến hệ thống Enterprise phức tạp — chúng tôi cung cấp giải pháp toàn diện cho mọi nhu cầu công nghệ của bạn."
      />

      <div className="container">
        <ServicesContent />
      </div>
    </Page>
  );
};

export default ServicesPage;

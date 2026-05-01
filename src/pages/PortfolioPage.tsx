import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Layers } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Page, PageHeader } from "@/components/Page";
import { motion, AnimatePresence } from "framer-motion";

const projects = [
  // Kỹ thuật phần mềm
  {
    img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800&auto=format&fit=crop",
    title: "Hệ thống quản lý SaaS",
    category: "Kỹ thuật phần mềm",
    approach:
      "Xây dựng hệ thống phân quyền đa cấp bậc. Ứng dụng kiến trúc Microservices, tích hợp Payment Gateway và Dashboard phân tích real-time.",
    stack: "React · Node.js · PostgreSQL",
  },
  {
    img: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?q=80&w=800&auto=format&fit=crop",
    title: "Ứng dụng Di động Đa nền tảng",
    category: "Kỹ thuật phần mềm",
    approach:
      "Phát triển App iOS & Android chuẩn UI/UX. Tích hợp bản đồ, định vị GPS, xử lý socket real-time cho các ứng dụng đặt xe, giao đồ ăn.",
    stack: "Flutter · React Native · Firebase",
  },
  {
    img: "https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?q=80&w=800&auto=format&fit=crop",
    title: "Nền tảng E-commerce",
    category: "Kỹ thuật phần mềm",
    approach:
      "Thiết kế hệ thống thương mại điện tử chịu tải cao. Áp dụng Redis caching, RabbitMQ cho xử lý đơn hàng và tối ưu truy vấn.",
    stack: "Next.js · Spring Boot · MongoDB",
  },
  // Trí tuệ nhân tạo
  {
    img: "https://images.unsplash.com/photo-1555255707-c07966088b7b?q=80&w=800&auto=format&fit=crop",
    title: "Nhận diện Computer Vision",
    category: "Trí tuệ nhân tạo",
    approach:
      "Áp dụng Deep Learning nhận diện khuôn mặt, biển số xe, hoặc phân loại hình ảnh y khoa. Tối ưu tốc độ xử lý trên Edge devices.",
    stack: "Python · TensorFlow · OpenCV",
  },
  {
    img: "https://images.unsplash.com/photo-1591696205602-2f950c417cb9?q=80&w=800&auto=format&fit=crop",
    title: "Xử lý ngôn ngữ tự nhiên (NLP)",
    category: "Trí tuệ nhân tạo",
    approach:
      "Huấn luyện Chatbot thông minh hỗ trợ khách hàng, phân tích sắc thái bình luận (Sentiment Analysis) sử dụng các mô hình Transformers.",
    stack: "PyTorch · HuggingFace · FastAPI",
  },
  // Hệ thống nhúng & IoT
  {
    img: "https://images.unsplash.com/photo-1558002038-1055907df827?q=80&w=800&auto=format&fit=crop",
    title: "Hệ thống Smart Home & IoT",
    category: "Hệ thống nhúng",
    approach:
      "Lập trình vi điều khiển thu thập dữ liệu cảm biến. Xây dựng Web Dashboard theo dõi và điều khiển thiết bị qua giao thức MQTT.",
    stack: "C/C++ · ESP32 · MQTT · React",
  },
  {
    img: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?q=80&w=800&auto=format&fit=crop",
    title: "Xe tự hành & Robotics",
    category: "Hệ thống nhúng",
    approach:
      "Phát triển thuật toán dò đường, tránh vật cản cho Robot/Xe tự hành sử dụng cảm biến Lidar, siêu âm kết hợp thuật toán PID.",
    stack: "Arduino · ROS · C++",
  },
  // Khoa học dữ liệu
  {
    img: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=800&auto=format&fit=crop",
    title: "Hệ thống Gợi ý (Recommendation)",
    category: "Khoa học dữ liệu",
    approach:
      "Thu thập dữ liệu lớn, làm sạch và phân tích. Áp dụng thuật toán Collaborative Filtering để xây dựng hệ thống gợi ý sản phẩm.",
    stack: "Python · Scikit-learn · Pandas",
  },
  // An toàn thông tin
  {
    img: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=800&auto=format&fit=crop",
    title: "Hệ thống phát hiện xâm nhập",
    category: "An toàn thông tin",
    approach:
      "Nghiên cứu lỗ hổng bảo mật, phát triển hệ thống phát hiện xâm nhập mạng (IDS/IPS) và thiết lập cảnh báo theo thời gian thực.",
    stack: "Python · Wireshark · Linux",
  },
  {
    img: "https://images.unsplash.com/photo-1621416894569-0f39ed31d247?q=80&w=800&auto=format&fit=crop",
    title: "DApp & Smart Contract",
    category: "An toàn thông tin",
    approach:
      "Xây dựng ứng dụng phi tập trung (DApp) trên mạng lưới Blockchain. Lập trình Smart Contract minh bạch, chống tấn công Re-entrancy.",
    stack: "Solidity · Web3.js · Next.js",
  },
  // Thêm các dự án mới
  {
    img: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=800&auto=format&fit=crop",
    title: "Phần mềm Quản lý Nhân sự (HRM)",
    category: "Kỹ thuật phần mềm",
    approach:
      "Phát triển hệ thống quản lý chấm công, tính lương tự động. Tích hợp AI nhận diện khuôn mặt điểm danh và xuất báo cáo động.",
    stack: "Vue.js · NestJS · MySQL",
  },
  {
    img: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?q=80&w=800&auto=format&fit=crop",
    title: "Hệ thống Đặt lịch / Booking",
    category: "Kỹ thuật phần mềm",
    approach:
      "Xây dựng ứng dụng đặt lịch hẹn phòng khám, spa, hoặc sân bóng. Quản lý trạng thái slot real-time và gửi nhắc nhở qua SMS/Email.",
    stack: "React Native · Node.js · Redis",
  },
  {
    img: "https://images.unsplash.com/photo-1589254065878-42c9da997008?q=80&w=800&auto=format&fit=crop",
    title: "Nhận diện giọng nói (Speech-to-Text)",
    category: "Trí tuệ nhân tạo",
    approach:
      "Sử dụng mô hình Whisper hoặc các kiến trúc Deep Learning để chuyển đổi giọng nói tiếng Việt thành văn bản với độ chính xác cao.",
    stack: "Python · PyTorch · Librosa",
  },
  {
    img: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?q=80&w=800&auto=format&fit=crop",
    title: "Dự báo Chứng khoán (Time Series)",
    category: "Khoa học dữ liệu",
    approach:
      "Cào dữ liệu (Crawling) thị trường. Sử dụng mô hình chuỗi thời gian (ARIMA, LSTM) để dự đoán xu hướng giá cổ phiếu và vẽ biểu đồ.",
    stack: "Python · Keras · Plotly",
  },
  {
    img: "https://images.unsplash.com/photo-1495539406979-bf61750d38ad?q=80&w=800&auto=format&fit=crop",
    title: "Nông nghiệp Thông minh (Smart Agri)",
    category: "Hệ thống nhúng",
    approach:
      "Hệ thống tưới tiêu tự động dựa trên độ ẩm đất và thời tiết. Dữ liệu cảm biến truyền về server qua mạng LoRa hoặc 4G để theo dõi.",
    stack: "C++ · STM32 · LoRa · React",
  },
  {
    img: "https://images.unsplash.com/photo-1563206767-5b18f218e8de?q=80&w=800&auto=format&fit=crop",
    title: "Phân tích Mã độc (Malware Analysis)",
    category: "An toàn thông tin",
    approach:
      "Dùng kỹ thuật Reverse Engineering để dịch ngược và phân tích hành vi mã độc. Xây dựng môi trường Sandbox an toàn để kiểm thử.",
    stack: "C/C++ · Assembly · Python",
  },
];

const filters = [
  "Tất cả",
  "Kỹ thuật phần mềm",
  "Trí tuệ nhân tạo",
  "Hệ thống nhúng",
  "Khoa học dữ liệu",
  "An toàn thông tin",
];

const filterCounts: Record<string, number> = {};
filters.forEach((f) => {
  filterCounts[f] =
    f === "Tất cả"
      ? projects.length
      : projects.filter((p) => p.category === f).length;
});

const PortfolioPage = () => {
  const [active, setActive] = useState("Tất cả");
  const filtered =
    active === "Tất cả"
      ? projects
      : projects.filter((p) => p.category === active);

  return (
    <Page>
      <PageHeader
        index="04"
        eyebrow="Dự án"
        title={
          <>
            Những dự án đã <span className="text-gradient">bàn giao</span> thành
            công.
          </>
        }
        description="Một số dự án phần mềm và công nghệ tiêu biểu chúng tôi đã thực hiện cho các khách hàng."
      />

      <div className="container">
        {/* Enhanced filter with count badges */}
        <div className="mb-8 sm:mb-10 flex gap-2 overflow-x-auto border-b border-border/70 pb-4 sm:pb-5 sm:flex-wrap scrollbar-none -mx-4 px-4 sm:mx-0 sm:px-0">
          {filters.map((f) => (
            <motion.button
              key={f}
              onClick={() => setActive(f)}
              className={`relative shrink-0 rounded-md px-3 sm:px-4 py-2 sm:py-2.5 text-xs sm:text-sm font-semibold transition-all duration-300 ${
                active === f
                  ? "bg-primary text-primary-foreground shadow-lg shadow-primary/30"
                  : "border border-border bg-card/60 text-muted-foreground hover:border-primary/40 hover:text-foreground"
              }`}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              layout
            >
              {f}
              <span
                className={`ml-2 inline-flex h-5 min-w-5 items-center justify-center rounded-full text-[10px] font-bold ${
                  active === f
                    ? "bg-primary-foreground/20 text-primary-foreground"
                    : "bg-muted text-muted-foreground"
                }`}
              >
                {filterCounts[f]}
              </span>
            </motion.button>
          ))}
        </div>

        {/* Animated grid */}
        <motion.div
          layout
          className="grid gap-4 md:gap-5 md:grid-cols-2 lg:grid-cols-3"
        >
          <AnimatePresence mode="popLayout">
            {filtered.map((p) => (
              <motion.article
                key={p.title}
                layout
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9, y: -10 }}
                transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                className="premium-card group card-3d transition-all duration-300 hover:border-primary/40 hover:shadow-lg hover:shadow-primary/15"
              >
                <div className="aspect-[4/3] overflow-hidden relative">
                  <img
                    src={p.img}
                    alt={p.title}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent opacity-80" />
                  {/* Overlay shine effect on hover */}
                  <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="absolute top-4 left-4 rounded-md bg-background/[0.85] px-3 py-1 text-xs font-mono uppercase tracking-[0.12em] text-primary backdrop-blur border border-primary/20">
                    {p.category}
                  </div>
                </div>
                <div className="p-3.5 sm:p-5 md:p-6">
                  <h3 className="font-display font-semibold text-sm sm:text-base md:text-lg mb-1.5 sm:mb-2 text-foreground group-hover:text-primary transition-colors duration-300">
                    {p.title}
                  </h3>
                  <p className="text-xs md:text-sm text-muted-foreground mb-4 line-clamp-3 leading-6 group-hover:text-foreground/70 transition-colors duration-300">
                    {p.approach}
                  </p>
                  <div className="flex items-center">
                    <div className="flex flex-wrap gap-1.5">
                      {p.stack.split(" · ").map((tech) => (
                        <span
                          key={tech}
                          className="rounded-md border border-border/60 bg-muted/20 px-2.5 py-1 text-[11px] font-semibold text-foreground/80 hover:border-primary/30 hover:text-primary transition-colors cursor-default"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.article>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Empty state */}
        {filtered.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="premium-card flex flex-col items-center justify-center py-20 text-center"
          >
            <Layers className="h-12 w-12 text-muted-foreground/30 mb-4" />
            <p className="text-muted-foreground">
              Chưa có dự án trong mảng này.
            </p>
          </motion.div>
        )}

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="premium-card relative mt-10 sm:mt-16 overflow-hidden p-6 sm:p-8 text-center md:p-10"
        >
          <div className="absolute inset-0 mesh-gradient opacity-25" />
          <motion.div
            className="pointer-events-none absolute -top-20 left-1/2 -translate-x-1/2 w-60 h-60 rounded-full blur-3xl opacity-20"
            style={{
              background:
                "radial-gradient(circle, hsl(42 92% 58% / 0.5), transparent)",
            }}
            animate={{ scale: [1, 1.3, 1] }}
            transition={{ duration: 5, repeat: Infinity }}
          />
          <div className="relative">
            <h2 className="font-display font-bold text-2xl sm:text-3xl md:text-4xl mb-4 text-balance">
              Muốn dự án của bạn nằm ở đây?
            </h2>
            <p className="text-sm md:text-base text-muted-foreground mb-6 md:mb-8">
              Bắt đầu hành trình cùng ShipCode hôm nay.
            </p>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.97 }}>
              <Button
                asChild
                variant="hero"
                size="default"
                className="group md:size-lg shadow-lg shadow-primary/30 hover:shadow-primary/50 transition-shadow"
              >
                <Link to="/lien-he">
                  Bắt đầu dự án{" "}
                  <ArrowRight className="transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </Page>
  );
};

export default PortfolioPage;

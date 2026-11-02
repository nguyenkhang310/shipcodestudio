import { Page, PageHeader } from "@/components/Page";
import { Reveal } from "@/components/studio/Motion";
import { Action } from "@/components/studio/Actions";
const groups = [
  {
    name: "Giao diện",
    text: "Trải nghiệm dễ dùng, thích ứng màn hình và có thể tiếp tục phát triển.",
    items: ["React", "Next.js", "TypeScript", "Tailwind CSS"],
  },
  {
    name: "Hệ thống & dữ liệu",
    text: "API có cấu trúc, cơ sở dữ liệu phù hợp và luồng xử lý rõ ràng.",
    items: ["Node.js", "Python", "Flask", "PostgreSQL", "MongoDB"],
  },
  {
    name: "Ứng dụng di động",
    text: "Lựa chọn nền tảng theo thiết bị cần hỗ trợ và ngân sách thực tế.",
    items: ["Flutter", "React Native", "Firebase"],
  },
  {
    name: "AI & xử lý ảnh",
    text: "Từ chuẩn bị dữ liệu đến đánh giá mô hình, với kết quả có thể giải thích.",
    items: ["Python", "PyTorch", "OpenCV", "Pandas"],
  },
  {
    name: "Thiết bị kết nối",
    text: "Kết nối cảm biến với phần mềm và giao diện theo dõi.",
    items: ["ESP32", "Arduino", "MQTT", "C/C++"],
  },
  {
    name: "Triển khai",
    text: "Đóng gói môi trường, quản lý phiên bản và hướng dẫn vận hành.",
    items: ["Git", "Docker", "Linux", "Vercel"],
  },
];
export default function TechPage() {
  return (
    <Page>
      <PageHeader
        eyebrow="Công nghệ"
        title={
          <>
            Công nghệ
            <br />
            <span className="text-gradient">sử dụng</span>
          </>
        }
        description="Lựa chọn theo yêu cầu, khả năng bảo trì và môi trường triển khai dự án."
      />
      <div className="container">
        <div className="tech-grid">
          {groups.map((g, i) => (
            <Reveal className="tech-item" key={g.name} delay={(i % 2) * 0.08}>
              <span className="eyebrow">0{i + 1}</span>
              <h2>{g.name}</h2>
              <p>{g.text}</p>
              <div className="tag-list">
                {g.items.map((t) => (
                  <span key={t}>{t}</span>
                ))}
              </div>
            </Reveal>
          ))}
        </div>
        <div className="inline-cta">
          <div>
            <h2>Yêu cầu công nghệ cụ thể</h2>
            <p>Gửi tên ngôn ngữ, framework hoặc nền tảng bạn cần sử dụng.</p>
          </div>
          <Action>Liên hệ tư vấn</Action>
        </div>
      </div>
    </Page>
  );
}

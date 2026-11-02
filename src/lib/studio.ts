export const services = [
  {
    id: "web",
    name: "Website & ứng dụng",
    short: "Website & hệ thống quản lý",
    description:
      "Website giới thiệu, trang bán hàng và hệ thống quản lý: đăng nhập, phân quyền, tìm kiếm và báo cáo theo yêu cầu.",
    technologies: ["React", "Next.js", "TypeScript", "Node.js"],
    deliverables: [
      "Giao diện thích ứng điện thoại, máy tính",
      "API và cơ sở dữ liệu theo yêu cầu",
      "Mã nguồn cùng hướng dẫn cài đặt",
      "Kiểm thử các luồng sử dụng chính",
    ],
  },
  {
    id: "ai",
    name: "AI & khoa học dữ liệu",
    short: "AI & phân tích dữ liệu",
    description:
      "Phân tích dữ liệu, xây dựng mô hình dự đoán và nhận diện hình ảnh. Bàn giao notebook, kết quả đánh giá và giao diện chạy thử.",
    technologies: ["Python", "PyTorch", "OpenCV", "FastAPI"],
    deliverables: [
      "Xử lý và chuẩn bị dữ liệu",
      "Mô hình và notebook giải thích",
      "Đánh giá kết quả, nêu rõ giới hạn",
      "Giao diện minh họa kết quả",
    ],
  },
  {
    id: "mobile",
    name: "Ứng dụng di động",
    short: "Ứng dụng Android & iOS",
    description:
      "Thiết kế và lập trình ứng dụng Android, iOS có đăng nhập, kết nối API và thông báo. Có bản dựng để chạy thử trên thiết bị.",
    technologies: ["Flutter", "React Native", "Firebase"],
    deliverables: [
      "Luồng sử dụng và thiết kế giao diện",
      "Tích hợp API, đăng nhập, thông báo",
      "Bản dựng thử trên thiết bị",
      "Hướng dẫn cấu hình và triển khai",
    ],
  },
  {
    id: "iot",
    name: "IoT & hệ thống nhúng",
    short: "IoT & thiết bị kết nối",
    description:
      "Đọc dữ liệu cảm biến, điều khiển thiết bị và theo dõi qua dashboard. Chọn linh kiện, viết firmware và kết nối với phần mềm.",
    technologies: ["ESP32", "Arduino", "MQTT", "C/C++"],
    deliverables: [
      "Sơ đồ kết nối linh kiện",
      "Mã nguồn firmware",
      "Giao diện theo dõi dữ liệu",
      "Tài liệu lắp ráp và vận hành",
    ],
  },
];
export const founder = {
  name: "Nguyên Khang",
  role: "Founder · ShipCode",
  expertise: "Kỹ thuật dữ liệu · Phát triển phần mềm · AI",
  github: "https://github.com/nguyenkhang310",
  avatar: "/projects/founder.png",
};
export const founderMilestones = [
  {
    label: "Tham gia",
    title: "AI Challenge TP.HCM 2026",
    detail:
      "Hội thi Thử thách Trí tuệ Nhân tạo Thành phố Hồ Chí Minh năm 2026.",
    href: "https://aichallenge.hochiminhcity.gov.vn/",
  },
  {
    label: "Top 12",
    title: "UIT Data Science Challenge",
    detail:
      "Cuộc thi Khoa học Dữ liệu UIT — Trường Đại học Công nghệ Thông tin, ĐHQG-HCM.",
    href: "https://www.uit.edu.vn/bai-viet/chinh-thuc-khoi-dong-cuoc-thi-uit-data-science-challenge-2026",
  },
];
export { projects, featuredProjects, projectFilters } from "./projects";
export type { Project } from "./projects";
export const steps = [
  {
    title: "Xác định yêu cầu",
    text: "Trao đổi ý tưởng, yêu cầu, thời gian và ngân sách. Chốt phạm vi trước khi bắt đầu.",
    output: "Phạm vi & kế hoạch",
  },
  {
    title: "Thiết kế hệ thống",
    text: "Thiết kế giao diện, luồng sử dụng và cấu trúc dữ liệu. Thống nhất hướng làm cùng bạn.",
    output: "Thiết kế & kiến trúc",
  },
  {
    title: "Lập trình & kiểm thử",
    text: "Phát triển theo từng mốc, chia sẻ bản demo và điều chỉnh từ phản hồi thực tế.",
    output: "Mã nguồn & bản demo",
  },
  {
    title: "Bàn giao & hướng dẫn",
    text: "Kiểm thử, hướng dẫn cài đặt và giải thích cách vận hành. Thống nhất thời gian hỗ trợ sau bàn giao.",
    output: "Sản phẩm & tài liệu",
  },
];
export const plans = [
  {
    name: "Web & ứng dụng",
    price: "600.000",
    text: "Website giới thiệu, bán hàng và phần mềm quản lý.",
    features: [
      "Giao diện theo yêu cầu",
      "API & cơ sở dữ liệu",
      "Hướng dẫn cài đặt",
      "Hỗ trợ sửa lỗi 7 ngày",
    ],
    service: "web",
  },
  {
    name: "AI & dữ liệu",
    price: "1.000.000",
    text: "Mô hình dự đoán, xử lý ảnh và phân tích dữ liệu.",
    features: [
      "Xử lý dữ liệu đầu vào",
      "Mô hình & notebook",
      "Đánh giá kết quả",
      "Giao diện demo",
    ],
    service: "ai",
  },
  {
    name: "IoT & hệ thống nhúng",
    price: "800.000",
    text: "Cảm biến, vi điều khiển và phần mềm theo dõi.",
    features: [
      "Firmware theo yêu cầu",
      "Sơ đồ kết nối",
      "Giao diện theo dõi",
      "Hướng dẫn lắp ráp",
    ],
    service: "iot",
  },
];
export const faqs = [
  {
    q: "Mình cần chuẩn bị gì trước khi liên hệ?",
    a: "Bạn có thể gửi đề cương, mô tả ý tưởng hoặc danh sách tính năng cần làm. Nếu chưa rõ hướng đi, hãy chia sẻ mục tiêu, công nghệ đang học và thời hạn dự kiến để cùng xác định phạm vi phù hợp.",
  },
  {
    q: "Chi phí được tính như thế nào?",
    a: "Mức giá trên website là giá khởi điểm. Báo giá cụ thể phụ thuộc vào tính năng, độ phức tạp, tài liệu và thời hạn. Phạm vi cùng chi phí được thống nhất trước khi bắt đầu; yêu cầu bổ sung sẽ được trao đổi riêng.",
  },
  {
    q: "Mình có được xem tiến độ không?",
    a: "Có. Hai bên thống nhất các mốc demo từ đầu. Ở mỗi mốc, bạn được xem phần đã hoàn thành và gửi phản hồi để điều chỉnh trong phạm vi đã chốt.",
  },
  {
    q: "Có bàn giao mã nguồn và hướng dẫn không?",
    a: "Có. Phần bàn giao gồm mã nguồn dự án, hướng dẫn cài đặt và tài liệu đã thống nhất. ShipCode hỗ trợ giải thích cấu trúc để bạn hiểu cách hệ thống hoạt động.",
  },
  {
    q: "Nếu cần chỉnh sửa sau khi bàn giao thì sao?",
    a: "Thời gian hỗ trợ và phạm vi sửa lỗi được xác nhận khi báo giá. Các tính năng mới ngoài yêu cầu ban đầu sẽ được ước tính chi phí và thời gian riêng trước khi thực hiện.",
  },
  {
    q: "Có thể làm việc từ xa không?",
    a: "Có. Bạn có thể trao đổi với ShipCode qua Zalo, email hoặc cuộc gọi. Các bản demo, tài liệu và mã nguồn được chia sẻ trực tuyến theo từng giai đoạn.",
  },
];

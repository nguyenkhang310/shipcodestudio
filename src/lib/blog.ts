import heroBg from "@/assets/hero-bg.jpg";
import portfolio1 from "@/assets/portfolio-1.jpg";
import portfolio2 from "@/assets/portfolio-2.jpg";
import portfolio3 from "@/assets/portfolio-3.jpg";
import portfolio4 from "@/assets/portfolio-4.jpg";
import portfolio5 from "@/assets/portfolio-5.jpg";

export type BlogSection = {
  heading: string;
  paragraphs: string[];
  bullets?: string[];
};

export type BlogPost = {
  slug: string;
  cat: string;
  date: string;
  read: string;
  title: string;
  excerpt: string;
  image: string;
  intro: string[];
  sections: BlogSection[];
  conclusion: string;
};

export const blogPosts: BlogPost[] = [
  {
    slug: "chon-de-tai-do-an-it",
    cat: "Hướng dẫn",
    date: "20 Apr 2026",
    read: "8 min",
    title: "Cách chọn đề tài đồ án IT vừa hay vừa dễ bảo vệ",
    excerpt:
      "Bí quyết chọn đề tài phù hợp với năng lực bản thân, vừa gây ấn tượng với hội đồng vừa không quá khó để hoàn thành đúng hạn.",
    image: heroBg,
    intro: [
      "Chọn đề tài đúng ngay từ đầu giúp bạn tiết kiệm rất nhiều thời gian ở giai đoạn làm sản phẩm, viết báo cáo và chuẩn bị bảo vệ.",
      "Một đề tài tốt không nhất thiết phải quá mới hay quá phức tạp. Điều quan trọng là nó đủ rõ ràng, có đầu ra cụ thể và phù hợp với năng lực hiện tại của bạn.",
    ],
    sections: [
      {
        heading: "Bắt đầu từ thứ bạn thật sự làm được",
        paragraphs: [
          "Hãy nhìn lại những môn bạn học tốt nhất, stack bạn từng chạm vào và kiểu sản phẩm bạn thấy hứng thú. Nếu bạn đã quen web thì chọn một đề tài web có chiều sâu sẽ an toàn hơn việc nhảy thẳng sang AI hoặc embedded chỉ vì đang hot.",
          "Đề tài phù hợp là đề tài mà bạn có thể chủ động giải thích kiến trúc, luồng xử lý và lý do chọn công nghệ khi hội đồng hỏi sâu.",
        ],
        bullets: [
          "Ưu tiên mảng bạn đã có nền tảng từ trước",
          "Chọn đề tài có đầu ra demo rõ ràng",
          "Tránh ôm quá nhiều công nghệ mới cùng lúc",
        ],
      },
      {
        heading: "Ưu tiên đề tài có phạm vi vừa đủ",
        paragraphs: [
          "Nhiều bạn chọn đề tài quá rộng nên đến cuối kỳ chỉ kịp làm bản demo nửa vời. Một đề tài vừa đủ sẽ dễ lên timeline, chốt milestone và bảo vệ tự tin hơn.",
          "Bạn nên cắt rõ phần nào là bắt buộc để đạt yêu cầu, phần nào là nâng cao nếu còn thời gian.",
        ],
      },
      {
        heading: "Kiểm tra trước tính khả thi khi viết báo cáo",
        paragraphs: [
          "Một đề tài dễ bảo vệ thường có nhiều thứ để trình bày: sơ đồ hệ thống, use case, database, luồng xử lý, ảnh demo và kết quả test.",
          "Nếu đề tài nghe hay nhưng khó thể hiện thành báo cáo hoặc khó demo trước hội đồng, bạn sẽ mất lợi thế rất lớn ở ngày bảo vệ.",
        ],
      },
    ],
    conclusion:
      "Chọn đề tài hợp năng lực, phạm vi rõ và có giá trị trình bày sẽ giúp bạn đi đường dài nhẹ hơn rất nhiều từ lúc code đến lúc bước vào phòng bảo vệ.",
  },
  {
    slug: "de-tai-ai-hot-2026",
    cat: "AI / ML",
    date: "12 Apr 2026",
    read: "6 min",
    title: "Top 10 đề tài AI hot nhất 2026 cho sinh viên IT",
    excerpt:
      "RAG, Multi-agent, Computer Vision Edge... đâu là hướng đi vừa hợp xu thế vừa khả thi cho đồ án?",
    image: portfolio1,
    intro: [
      "AI vẫn là nhóm đề tài được quan tâm mạnh trong 2026, nhưng không phải hướng nào cũng phù hợp để sinh viên triển khai trong thời gian ngắn.",
      "Chọn đề tài AI tốt là chọn bài toán có dữ liệu hợp lý, mô hình đủ giải thích và cách demo trực quan.",
    ],
    sections: [
      {
        heading: "Nhóm đề tài dễ tạo ấn tượng",
        paragraphs: [
          "Các hướng như chatbot hỏi đáp tài liệu nội bộ, hệ thống gợi ý, nhận diện hình ảnh theo miền dữ liệu cụ thể và AI hỗ trợ quy trình đều dễ demo và dễ trình bày giá trị thực tế.",
        ],
        bullets: [
          "RAG chatbot cho tài liệu doanh nghiệp hoặc trường học",
          "Hệ thống recommend cho phim, sản phẩm hoặc khoá học",
          "Computer vision cho giám sát và nhận dạng",
          "Phân tích dữ liệu dự báo theo dashboard",
        ],
      },
      {
        heading: "Nhóm đề tài nên cân nhắc kỹ",
        paragraphs: [
          "Các đề tài quá nặng về nghiên cứu thuần, cần dataset lớn hoặc chi phí training cao sẽ tạo áp lực lớn cho sinh viên nếu không có đội hỗ trợ mạnh.",
          "Nếu chọn hướng này, bạn nên thu hẹp mục tiêu và chấp nhận đánh đổi về quy mô.",
        ],
      },
      {
        heading: "Checklist trước khi chốt đề tài AI",
        paragraphs: [
          "Hãy xác định rõ bạn lấy dữ liệu từ đâu, mô hình nào phù hợp, cách đánh giá kết quả ra sao và demo trước hội đồng bằng gì.",
        ],
        bullets: [
          "Có dataset đủ sạch và hợp pháp để dùng",
          "Có baseline để so sánh kết quả",
          "Có dashboard hoặc giao diện demo rõ ràng",
        ],
      },
    ],
    conclusion:
      "Đề tài AI tốt nhất không phải đề tài nghe kêu nhất, mà là đề tài bạn có thể làm ra kết quả rõ ràng và giải thích được trước hội đồng.",
  },
  {
    slug: "viet-bao-cao-do-an-an-diem",
    cat: "Kinh nghiệm",
    date: "05 Apr 2026",
    read: "10 min",
    title: "Cách viết báo cáo đồ án chuẩn chỉnh & ăn điểm",
    excerpt:
      "Cấu trúc 5 chương kinh điển, cách trình bày hình ảnh, sơ đồ, code snippet và trích dẫn tài liệu.",
    image: portfolio2,
    intro: [
      "Nhiều đồ án code rất ổn nhưng điểm không cao vì báo cáo rời rạc, thiếu logic hoặc trình bày cẩu thả.",
      "Một báo cáo tốt phải giúp người đọc hiểu được vấn đề, giải pháp, cách triển khai và kết quả mà không cần đoán ý của bạn.",
    ],
    sections: [
      {
        heading: "Giữ cấu trúc báo cáo thật logic",
        paragraphs: [
          "Phần mở đầu phải nêu rõ bài toán và mục tiêu. Phần phân tích mô tả yêu cầu, nghiệp vụ, phạm vi. Phần thiết kế thể hiện kiến trúc, database, luồng xử lý. Phần triển khai đi vào công nghệ và minh hoạ giao diện. Phần kết luận chốt kết quả và hướng phát triển.",
        ],
      },
      {
        heading: "Hình ảnh và sơ đồ quan trọng hơn bạn nghĩ",
        paragraphs: [
          "Use case, activity diagram, ERD, class diagram và ảnh chụp màn hình hệ thống là những thứ giúp báo cáo của bạn nhìn chuyên nghiệp ngay lập tức.",
          "Mỗi hình nên có chú thích rõ ràng và xuất hiện đúng chỗ thay vì nhét cho có.",
        ],
      },
      {
        heading: "Đừng biến chương triển khai thành đống code chụp màn hình",
        paragraphs: [
          "Hội đồng không cần xem quá nhiều đoạn code dài. Họ cần bạn nêu được các thành phần quan trọng, mô tả vai trò của chúng và vì sao cách triển khai đó hợp lý.",
        ],
        bullets: [
          "Trích 1-2 đoạn code tiêu biểu thay vì cả file",
          "Giải thích chức năng trước khi đưa code",
          "Ưu tiên flow, kiến trúc và kết quả test",
        ],
      },
    ],
    conclusion:
      "Báo cáo càng rõ, mạch lạc và có hình minh hoạ đúng chỗ thì hội đồng càng dễ đánh giá cao chất lượng tổng thể của đồ án.",
  },
  {
    slug: "react-vs-nextjs-do-an-web",
    cat: "Web",
    date: "28 Mar 2026",
    read: "5 min",
    title: "React vs Next.js cho đồ án Web 2026",
    excerpt:
      "So sánh chi tiết để bạn chọn framework phù hợp với đề tài và mục tiêu bảo vệ.",
    image: portfolio3,
    intro: [
      "React và Next.js đều là lựa chọn mạnh cho đồ án web, nhưng không phải đề tài nào cũng cần Next.js.",
      "Chọn đúng framework sẽ giúp bạn tiết kiệm công sức setup và tập trung hơn vào phần giá trị của sản phẩm.",
    ],
    sections: [
      {
        heading: "Khi nào nên chọn React thuần",
        paragraphs: [
          "Nếu đề tài của bạn là dashboard quản trị, hệ thống nội bộ hoặc SPA có API backend riêng, React thuần với Vite thường đủ nhanh, gọn và dễ debug.",
        ],
        bullets: [
          "Setup đơn giản",
          "Tối ưu cho SPA và admin dashboard",
          "Phù hợp khi backend tách riêng",
        ],
      },
      {
        heading: "Khi nào nên chọn Next.js",
        paragraphs: [
          "Nếu bạn cần routing mạnh, SSR, SEO tốt, hoặc muốn gom frontend và backend vào một dự án dễ deploy thì Next.js đáng cân nhắc hơn.",
        ],
      },
      {
        heading: "Tiêu chí chọn nhanh",
        paragraphs: [
          "Đừng chọn theo trend. Hãy nhìn vào loại giao diện, cách triển khai backend, nhu cầu SEO và độ quen tay của bạn với hệ sinh thái React.",
        ],
      },
    ],
    conclusion:
      "Với đa số đồ án web có deadline gấp, React thuần đủ an toàn. Chỉ nên dùng Next.js khi bài toán thực sự hưởng lợi từ khả năng routing, SSR hoặc full-stack.",
  },
  {
    slug: "flutter-hay-react-native",
    cat: "Mobile",
    date: "15 Mar 2026",
    read: "7 min",
    title: "Flutter hay React Native cho đồ án mobile?",
    excerpt:
      "Phân tích ưu nhược điểm từ góc nhìn sinh viên: thời gian học, độ khó, cộng đồng support.",
    image: portfolio4,
    intro: [
      "Flutter và React Native đều đủ mạnh để làm đồ án mobile đẹp và có chiều sâu.",
      "Sự khác nhau lớn nhất nằm ở tốc độ làm quen, cách xây UI và mức độ phù hợp với nền tảng bạn đã biết trước đó.",
    ],
    sections: [
      {
        heading: "Flutter mạnh ở tốc độ làm UI đồng nhất",
        paragraphs: [
          "Flutter phù hợp khi bạn muốn kiểm soát giao diện rất tốt và làm app chạy đẹp trên cả Android lẫn iOS mà ít phụ thuộc vào component native.",
        ],
      },
      {
        heading: "React Native lợi thế nếu bạn đã biết React",
        paragraphs: [
          "Nếu đã có nền React web, bạn sẽ làm quen React Native nhanh hơn rất nhiều. Điều này cực kỳ hữu ích với deadline ngắn.",
        ],
        bullets: [
          "Tận dụng tư duy component và state",
          "Dễ chia sẻ nhân lực giữa web và mobile",
          "Hệ sinh thái rộng, tài liệu nhiều",
        ],
      },
      {
        heading: "Chọn theo đội hình và deadline",
        paragraphs: [
          "Một công nghệ tốt nhưng không ai trong team hiểu rõ sẽ khiến tiến độ tụt mạnh. Hãy chọn thứ giúp nhóm triển khai ổn định nhất.",
        ],
      },
    ],
    conclusion:
      "Nếu team mạnh React thì nghiêng về React Native. Nếu muốn UI nhất quán và kiểm soát cao từ đầu, Flutter là lựa chọn rất đáng tin.",
  },
  {
    slug: "cau-hoi-phan-bien-va-cach-tra-loi",
    cat: "Bảo vệ",
    date: "01 Mar 2026",
    read: "9 min",
    title: "Câu hỏi phản biện hay gặp & cách trả lời",
    excerpt:
      "Tổng hợp các câu phản biện kinh điển từ hội đồng cùng template trả lời chuyên nghiệp.",
    image: portfolio5,
    intro: [
      "Ngày bảo vệ không chỉ là demo sản phẩm. Hội đồng muốn biết bạn có thực sự hiểu thứ mình làm hay không.",
      "Chuẩn bị sẵn khung trả lời cho các câu hỏi phổ biến sẽ giúp bạn giữ bình tĩnh và trả lời mạch lạc hơn rất nhiều.",
    ],
    sections: [
      {
        heading: "Nhóm câu hỏi về lý do chọn công nghệ",
        paragraphs: [
          "Đây là kiểu câu hỏi xuất hiện gần như chắc chắn. Bạn nên trả lời bằng cách so sánh ngắn với lựa chọn khác và gắn với yêu cầu bài toán.",
        ],
        bullets: [
          "Vì sao chọn framework này mà không chọn framework khác?",
          "Vì sao dùng NoSQL thay vì SQL hoặc ngược lại?",
          "Vì sao triển khai kiến trúc này?",
        ],
      },
      {
        heading: "Nhóm câu hỏi về giới hạn hệ thống",
        paragraphs: [
          "Nếu bị hỏi về nhược điểm, đừng né tránh. Hãy thừa nhận đúng phạm vi hiện tại, sau đó nêu hướng cải tiến tiếp theo.",
        ],
      },
      {
        heading: "Khung trả lời ngắn gọn mà an toàn",
        paragraphs: [
          "Hãy trả lời theo ba bước: nêu yêu cầu bài toán, nêu lý do chọn giải pháp, cuối cùng là đánh đổi đã chấp nhận.",
          "Cách trả lời này giúp bạn vừa thể hiện hiểu biết vừa không bị lan man.",
        ],
      },
    ],
    conclusion:
      "Bạn không cần trả lời như một nhà nghiên cứu. Bạn chỉ cần cho hội đồng thấy rằng mọi quyết định trong đồ án đều có lý do rõ ràng.",
  },
];

export const featuredPost = blogPosts[0];
export const blogListingPosts = blogPosts.slice(1);

export const findBlogPost = (slug?: string) =>
  blogPosts.find((post) => post.slug === slug);

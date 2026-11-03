# ShipCode Studio

Website tiếng Việt của ShipCode, dùng React, TypeScript và Vite.

## Chạy tại máy

```sh
npm ci
npm run dev
```

Vite dùng cổng 8080. Kiểm tra trước khi triển khai:

```sh
npx tsc --noEmit -p tsconfig.app.json
npm run test
npm run build
```

## Chỉnh nội dung

- `src/lib/studio.ts`: Founder, cột mốc, dịch vụ, chi phí và FAQ.
- `src/lib/projects.ts`: đủ 13 repo công khai, công nghệ, ảnh, loại ảnh và trạng thái fork.
- `src/data/github-repositories.json`: snapshot metadata GitHub dùng để kiểm tra danh sách.
- `src/components/studio/ScrollScenes.tsx`: hero thu khung, các bề mặt chuyển cảnh và ảnh Founder chuyển động theo cuộn.
- `src/components/studio/ProjectSequence.tsx`: cửa sổ dự án xếp lớp chuyển theo cuộn, có nút chọn và hỗ trợ phím mũi tên; chuyển thủ công khi giảm chuyển động hoặc màn hình thấp.
- `src/components/studio/ProjectCatalog.tsx`: danh sách đầy đủ và bộ lọc repo trên trang chủ/trang dự án.
- `src/components/studio/ProjectExplorer.tsx`: danh sách 13 repo mở bằng nút Khám phá thêm bên trong Dự án.
- `src/project-windows.css`: giao diện cửa sổ và kênh TikTok trong phần dự án.
- `src/lib/useActiveSection.ts`: menu theo vị trí cuộn thực tế, cập nhật cả khi mở danh sách repo.
- `src/lib/news.ts`: API RSS2JSON và các nhóm nguồn tin cũ, khử trùng lặp, sắp theo ngày và xử lý lỗi từng nguồn.
- `src/pages/BlogPage.tsx`: Góc chia sẻ dạng bảng tin, chuyên mục, cập nhật mỗi phút, làm mới và xem thêm.
- `src/components/studio/HomeServices.tsx`: bốn nhóm dịch vụ, phạm vi và phần bàn giao hiển thị trực tiếp.
- `src/components/studio/PricingOptions.tsx`: ba lựa chọn chi phí dùng chung ở trang chủ và trang bảng giá.
- `src/home-sections.css`: nhịp nền tối/sáng, nền tối màu đen trung tính.
- `src/pages/Home.tsx`: bố cục trang chủ.
- `src/studio.css`: giao diện studio, các trang bên trong và responsive.
- `src/components/studio/HeroReel.tsx`: video nền toàn màn hình, tự phát tắt tiếng; SellerPilot và Climate Lab mỗi cảnh 16 giây, kết vòng bằng R Shiny 8 giây; chỉ một video xuất hiện tại mỗi thời điểm.
- `src/components/studio/SmoothScroll.tsx`: cuộn quán tính Lenis, khóa cuộn khi mở menu/dialog, hỗ trợ tùy chọn giảm chuyển động.
- `src/components/Layout.tsx`: chuyển trang và cuộn tới các mục.
- `src/components/studio/TikTok.tsx`: hai video TikTok đã ghim, nhúng bằng trình phát chính thức; có trạng thái tải lỗi và đường dẫn xem trực tiếp.

## Tài nguyên

Video gốc trong thư mục gốc được giữ nguyên. Các bản dùng trên web, đã tối ưu H.264 và hỗ trợ phát nhanh, nằm trong `public/media/`. Các bản `*-hero.mp4` là đoạn giới thiệu chất lượng cao dùng làm nền; bản đầy đủ dùng trong phần dự án.

Ảnh Founder giữ màu gốc từ avatar GitHub của Nguyên Khang. Ảnh Smart Fridge và nhận diện biển số lấy từ repository tương ứng. Dữ liệu dự án được chọn và kiểm tra từ tài khoản `github.com/nguyenkhang310`, không gọi GitHub API trong lúc người dùng mở website.

Thông tin học tập HCMUTE được ghi theo yêu cầu của Founder. SellerPilot là dự án mô phỏng; giới hạn này được nêu trong phần chi tiết dự án.

## Form liên hệ

Form giữ tích hợp Web3Forms có sẵn, kiểm tra dữ liệu, chống gửi trùng và giữ nội dung khi lỗi mạng. Có thể cấu hình khóa công khai riêng trong `.env.local`:

```env
VITE_WEB3FORMS_ACCESS_KEY=your_public_access_key
```

Trong kiểm tra giao diện, yêu cầu gửi form được mô phỏng, không gửi thông tin thử nghiệm đến hộp thư thật.

TikTok là dịch vụ bên ngoài: quyền riêng tư của video, mạng và chính sách trình duyệt có thể ảnh hưởng việc phát. Website chỉ hiển thị trình phát sau tín hiệu sẵn sàng hợp lệ từ đúng iframe TikTok, tránh để khung lỗi của bên thứ ba xuất hiện trên giao diện.

Năm ảnh bìa được tạo bằng công cụ image_gen tích hợp, lưu trong `public/projects/*-cover.webp`. Bộ prompt và nguồn ảnh ở `docs/project-image-prompts.md`; tên cuộc thi và phạm vi xác minh thông tin Founder ở `docs/founder-sources.md`.

Video `1K04P7M1F_6MDU2G.mov` dùng tại demo dự án AI Challenge trong cùng dãy cửa sổ (`ProjectSequence.tsx`). Bản web `ai-challenge-demo.mp4` giữ nguyên luồng hình H.264 1392×720 của file gốc, bỏ âm thanh và tối ưu phát nhanh.

Video R Shiny `6B3B9565-5F62-48A5-9193-9CF39112D5B6.mov` có bản giới thiệu 8 giây Full HD (`property-outro.mp4`) ở **cuối vòng video nền mở đầu**, sau SellerPilot và Climate Lab. Bản đầy đủ (`property-demo.mp4`) mở trong chi tiết repository bất động sản. Phần Founder không chứa video.

Góc chia sẻ giữ API RSS2JSON công khai có sẵn, không cần khóa API mới. Nội dung dẫn tới báo gốc, không sử dụng bài tĩnh thay cho nguồn tin. Nếu một nguồn gián đoạn, các nguồn khác vẫn hiển thị; khi tất cả nguồn lỗi, có nút thử lại và liên kết trực tiếp tới sáu báo.

Bố cục trang chủ xen kẽ: video mở đầu tối → dự án sáng → dịch vụ tối → bảng giá sáng → Founder tối → liên hệ sáng. Ảnh Founder giữ màu gốc. Danh sách repo chỉ mở khi bấm Khám phá thêm trong Dự án. Menu tự đánh dấu mục đang xem; liên kết tới mục dùng cùng khoảng bù 80px dưới header.

Mobile: `src/mobile.css` chứa bố cục gọn cho điện thoại; `BrandMark.tsx` dùng logo theo mật độ điểm ảnh; `use-media-query.ts` chọn video mobile ngay từ lần render đầu. Phạm vi thay đổi, số liệu tài nguyên và cách kiểm tra ở `docs/mobile-optimization.md`.

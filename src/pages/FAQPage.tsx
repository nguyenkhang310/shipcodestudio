import { Page, PageHeader } from "@/components/Page";
import { FAQ } from "@/components/studio/FAQ";
import { Action } from "@/components/studio/Actions";
export default function FAQPage() {
  return (
    <Page>
      <PageHeader
        eyebrow="Câu hỏi thường gặp"
        title={
          <>
            Câu hỏi
            <br />
            <span className="text-gradient">thường gặp</span>
          </>
        }
        description="Những điều bạn có thể muốn biết trước khi làm việc cùng ShipCode."
      />
      <div className="container faq-page-content">
        <FAQ />
        <div className="inline-cta">
          <div>
            <h2>Liên hệ tư vấn</h2>
            <p>Nguyên Khang sẽ trao đổi thêm theo yêu cầu dự án.</p>
          </div>
          <Action>Liên hệ ShipCode</Action>
        </div>
      </div>
    </Page>
  );
}

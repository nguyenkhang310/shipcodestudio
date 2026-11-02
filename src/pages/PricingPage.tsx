import { Page, PageHeader } from "@/components/Page";
import { PricingOptions } from "@/components/studio/PricingOptions";
export const PricingContent = PricingOptions;
export default function PricingPage() {
  return (
    <Page>
      <PageHeader
        eyebrow="Bảng giá"
        title="Chi phí thực hiện"
        description="Ba nhóm công việc thường nhận. Chọn nhóm phù hợp để gửi yêu cầu và nhận báo giá cụ thể."
      />
      <div className="container">
        <PricingOptions />
      </div>
    </Page>
  );
}

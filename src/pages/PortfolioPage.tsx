import { Page, PageHeader } from "@/components/Page";
import { ProjectCatalog } from "@/components/studio/ProjectCatalog";
import { Action } from "@/components/studio/Actions";
import { projects } from "@/lib/projects";
export default function PortfolioPage() {
  return (
    <Page>
      <PageHeader
        eyebrow="GitHub / nguyenkhang310"
        title={<>Dự án & mã nguồn</>}
        description={`${projects.length} repository công khai của Nguyên Khang. Bao gồm ứng dụng, phân tích dữ liệu, AI, IoT và công cụ; repo fork được ghi rõ.`}
      />
      <div className="container">
        <ProjectCatalog />
        <div className="inline-cta">
          <div>
            <h2>Liên hệ làm dự án</h2>
            <p>Trao đổi yêu cầu, công nghệ và thời hạn thực hiện.</p>
          </div>
          <Action>Liên hệ tư vấn</Action>
        </div>
      </div>
    </Page>
  );
}

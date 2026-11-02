import { Page, PageHeader } from "@/components/Page";
import { Reveal } from "@/components/studio/Motion";
import { Action } from "@/components/studio/Actions";
import { steps } from "@/lib/studio";
export const ProcessContent = () => (
  <>
    {steps.map((s, i) => (
      <Reveal className="process-detail" key={s.title}>
        <span>0{i + 1}</span>
        <div>
          <h2>{s.title}</h2>
          <span className="process-output">Bạn nhận được: {s.output}</span>
        </div>
        <p>{s.text}</p>
      </Reveal>
    ))}
  </>
);
export default function ProcessPage() {
  return (
    <Page>
      <PageHeader
        eyebrow="Cách làm việc"
        title={
          <>
            Quy trình
            <br />
            <span className="text-gradient">làm việc</span>
          </>
        }
        description="Thống nhất yêu cầu, thiết kế, lập trình, kiểm thử và bàn giao theo từng mốc."
      />
      <div className="container">
        <ProcessContent />
        <Reveal className="inline-cta">
          <div>
            <h2>Gửi yêu cầu dự án</h2>
            <p>Mô tả chức năng và thời hạn để được tư vấn.</p>
          </div>
          <Action>Liên hệ tư vấn</Action>
        </Reveal>
      </div>
    </Page>
  );
}

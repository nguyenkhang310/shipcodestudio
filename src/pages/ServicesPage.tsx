import { Check } from "lucide-react";
import { Page, PageHeader } from "@/components/Page";
import { Reveal } from "@/components/studio/Motion";
import { Action } from "@/components/studio/Actions";
import { Film } from "@/components/studio/Film";
import { services, projects } from "@/lib/studio";
export const ServicesContent = () => (
  <>
    {services.map((s, i) => (
      <section key={s.id} id={s.id} className="service-section">
        <Reveal className="service-copy">
          <span className="eyebrow">
            0{i + 1} / {s.name}
          </span>
          <h2>{s.short}</h2>
          <p>{s.description}</p>
          <div className="tag-list">
            {s.technologies.map((t) => (
              <span key={t}>{t}</span>
            ))}
          </div>
          <ul>
            {s.deliverables.map((d) => (
              <li key={d}>
                <Check />
                {d}
              </li>
            ))}
          </ul>
          <Action to={`/lien-he?service=${s.id}`}>Trao đổi dự án</Action>
        </Reveal>
        <Reveal className="service-art">
          {s.id === "mobile" ? (
            <Film
              src="/media/introducing.mp4"
              poster="/projects/sellerpilot.jpg"
              title="SellerPilot"
            />
          ) : s.id === "web" ? (
            <Film
              src="/media/data-demo.mp4"
              poster="/projects/climate-lab.jpg"
              title="Climate Lab"
            />
          ) : (
            <img
              className="service-real-image"
              src={
                projects.find(
                  (p) => p.id === (s.id === "ai" ? "vision" : "fridge"),
                )?.image
              }
              alt={
                s.id === "ai"
                  ? "Kết quả nhận diện biển số"
                  : "Dashboard Smart Fridge"
              }
              loading="lazy"
            />
          )}
        </Reveal>
      </section>
    ))}
  </>
);
export default function ServicesPage() {
  return (
    <Page>
      <PageHeader
        eyebrow="Dịch vụ"
        title={
          <>
            Phát triển phần mềm
            <br />
            <span className="text-gradient">& hỗ trợ kỹ thuật</span>
          </>
        }
        description="Website, ứng dụng, AI và thiết bị kết nối. Phạm vi thực hiện được thống nhất theo yêu cầu dự án."
      />
      <div className="container">
        <ServicesContent />
        <Reveal className="inline-cta">
          <div>
            <h2>Tư vấn kỹ thuật</h2>
            <p>Gửi yêu cầu để được tư vấn phạm vi và công nghệ.</p>
          </div>
          <Action>Liên hệ tư vấn</Action>
        </Reveal>
      </div>
    </Page>
  );
}

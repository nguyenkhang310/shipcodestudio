import { Link } from "react-router-dom";
import { ArrowDown, ArrowUpRight, Github } from "lucide-react";
import { Reveal } from "@/components/studio/Motion";
import { ProjectSequence } from "@/components/studio/ProjectSequence";
import { ProjectExplorer } from "@/components/studio/ProjectExplorer";
import {
  HeroSequence,
  ScrollSurface,
  ScrollPortrait,
} from "@/components/studio/ScrollScenes";
import { HeroReel } from "@/components/studio/HeroReel";
import { TikTok } from "@/components/studio/TikTok";
import { founder, founderMilestones } from "@/lib/studio";

import { HomeServices } from "@/components/studio/HomeServices";
import { PricingOptions } from "@/components/studio/PricingOptions";

export default function Home() {
  return (
    <main id="main-content" className="studio-home">
      <HeroSequence>
        <section className="product-hero dark-studio-hero">
          <div className="studio-container product-hero-layout">
            <div className="product-hero-copy">
              <Reveal>
                <span className="product-label">
                  SHIPCODE STUDIO · VIỆT NAM
                </span>
                <h1>
                  Thiết kế & lập trình
                  <br />
                  <span className="hero-title-accent">phần mềm</span>
                </h1>
                <p>Website, ứng dụng di động, AI và IoT.</p>
                <div className="product-hero-actions">
                  <Link className="product-primary" to="/lien-he">
                    Liên hệ tư vấn <ArrowUpRight size={17} />
                  </Link>
                  <Link to="/#du-an" className="product-secondary">
                    Xem dự án <ArrowDown size={16} />
                  </Link>
                </div>
              </Reveal>
            </div>
            <div className="product-hero-media">
              <HeroReel />
            </div>
          </div>
        </section>
      </HeroSequence>
      <section id="du-an" className="selected-work">
        <ScrollSurface className="project-showroom" tone="dark">
          <div className="studio-container">
            <Reveal className="editorial-heading">
              <h2>Dự án & mã nguồn</h2>
              <div>
                <span>GitHub / nguyenkhang310</span>
                <a href={founder.github} target="_blank" rel="noreferrer">
                  Xem tất cả repository <ArrowUpRight size={15} />
                </a>
              </div>
            </Reveal>
            <ProjectSequence />
            <ProjectExplorer />
            <TikTok compact />
          </div>
        </ScrollSurface>
      </section>
      <ScrollSurface id="dich-vu" className="home-services" tone="dark">
        <div className="studio-container">
          <Reveal className="home-section-heading">
            <div>
              <span>Dịch vụ</span>
              <h2>
                Phát triển
                <br />
                phần mềm
              </h2>
            </div>
            <p>
              Nhận làm website, ứng dụng, xử lý dữ liệu và thiết bị kết nối. Mỗi
              dự án có phạm vi công việc và các mốc demo được thống nhất từ đầu.
            </p>
          </Reveal>
          <HomeServices />
          <Link className="home-section-link" to="/dich-vu">
            Xem chi tiết dịch vụ <ArrowUpRight size={17} />
          </Link>
        </div>
      </ScrollSurface>
      <ScrollSurface id="chi-phi" className="home-pricing" tone="light">
        <div className="studio-container">
          <Reveal className="home-section-heading">
            <div>
              <span>Bảng giá</span>
              <h2>
                Chi phí
                <br />
                thực hiện
              </h2>
            </div>
            <p>
              Gửi mô tả hoặc đề cương đang có. ShipCode sẽ xem yêu cầu, trao đổi
              phần cần làm và gửi báo giá trước khi bắt đầu.
            </p>
          </Reveal>
          <PricingOptions />
        </div>
      </ScrollSurface>
      <ScrollSurface
        id="founder"
        className="founder-section founder-dark"
        tone="dark"
      >
        <div className="studio-container founder-layout">
          <ScrollPortrait
            src={founder.avatar}
            alt="Nguyên Khang — Founder ShipCode"
          />
          <Reveal className="founder-copy">
            <h2>
              Nguyên
              <br />
              Khang<span>.</span>
            </h2>
            <div className="founder-role">Founder · ShipCode</div>
            <p>{founder.expertise}</p>
            <p className="founder-education">
              Sinh viên ngành <strong>Kỹ thuật dữ liệu</strong> tại{" "}
              <strong>
                Trường Đại học Công nghệ Kỹ thuật TP. Hồ Chí Minh (HCMUTE).
              </strong>
            </p>
            <div
              className="founder-milestones"
              aria-label="Hoạt động và thành tích"
            >
              {founderMilestones.map((milestone) => (
                <div className="founder-milestone" key={milestone.title}>
                  <span>{milestone.label}</span>
                  <div>
                    <a
                      href={milestone.href}
                      target="_blank"
                      rel="noreferrer"
                      title="Thông tin chính thức về cuộc thi"
                    >
                      {milestone.title}
                      <ArrowUpRight size={15} />
                    </a>
                    <p>{milestone.detail}</p>
                  </div>
                </div>
              ))}
            </div>
            <a
              className="founder-github"
              href={founder.github}
              target="_blank"
              rel="noreferrer"
            >
              <Github size={18} /> github.com/nguyenkhang310{" "}
              <ArrowUpRight size={16} />
            </a>
          </Reveal>
        </div>
      </ScrollSurface>
      <ScrollSurface id="lien-he-home" className="studio-contact" tone="warm">
        <div className="studio-container">
          <Reveal>
            <span className="studio-section-label">Liên hệ</span>
            <Link to="/lien-he" className="contact-statement">
              Liên hệ thực hiện dự án
              <ArrowUpRight strokeWidth={1} />
            </Link>
            <div className="contact-footline">
              <span>Tư vấn phạm vi, công nghệ và chi phí thực hiện.</span>
              <span>SHIPCODE STUDIO / VIỆT NAM</span>
            </div>
          </Reveal>
        </div>
      </ScrollSurface>
    </main>
  );
}

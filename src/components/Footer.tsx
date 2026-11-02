import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import { contactInfo } from "@/lib/contact";
import { founder } from "@/lib/studio";
export const Footer = () => (
  <footer className="studio-footer">
    <div className="studio-container">
      <div className="studio-footer-top">
        <Link to="/" className="studio-footer-wordmark">
          shipcode.
        </Link>
        <div className="studio-footer-links">
          <Link to="/du-an">Dự án</Link>
          <Link to="/dich-vu">Dịch vụ</Link>
          <Link to="/cong-nghe">Công nghệ</Link>
          <Link to="/quy-trinh">Quy trình</Link>
          <Link to="/bang-gia">Chi phí</Link>
          <Link to="/faq">Câu hỏi thường gặp</Link>
        </div>
        <div className="studio-footer-links">
          <Link to="/#founder">Founder</Link>
          <a href={founder.github} target="_blank" rel="noreferrer">
            GitHub ↗
          </a>
          <a
            href="https://www.tiktok.com/@shipcodestudio"
            target="_blank"
            rel="noreferrer"
          >
            TikTok ↗
          </a>
          <a href={contactInfo.instagramUrl} target="_blank" rel="noreferrer">
            Instagram ↗
          </a>
        </div>
        <div className="studio-footer-contact">
          <a href={`mailto:${contactInfo.email}`}>{contactInfo.email}</a>
          <a href={`tel:${contactInfo.phoneRaw}`}>{contactInfo.phoneDisplay}</a>
          <span>Hồ Chí Minh, Việt Nam</span>
        </div>
      </div>
      <div className="studio-footer-bottom">
        <span>© {new Date().getFullYear()} ShipCode Studio</span>
        <a href={founder.github} target="_blank" rel="noreferrer">
          Founder — Nguyên Khang ↗
        </a>
        <span>Code. Build. Ship.</span>
      </div>
    </div>
  </footer>
);

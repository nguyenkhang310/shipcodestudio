import { useState } from "react";
import { useSearchParams } from "react-router-dom";
import { ArrowUpRight, CheckCircle2, Loader2, MapPin } from "lucide-react";
import { Page, PageHeader } from "@/components/Page";
import { Reveal } from "@/components/studio/Motion";
import { contactInfo } from "@/lib/contact";
import { services } from "@/lib/studio";
const WEB3FORMS_KEY =
  import.meta.env.VITE_WEB3FORMS_ACCESS_KEY ||
  "01bbfe30-4dda-45ca-9bfa-5944addf86c6";
export default function ContactPage() {
  const [params] = useSearchParams();
  const [loading, setLoading] = useState(false),
    [submitted, setSubmitted] = useState(false),
    [error, setError] = useState("");
  const service = params.get("service") || "";
  async function submit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (loading) return;
    const form = e.currentTarget,
      data = new FormData(form);
    if (data.get("company_website")) return;
    setLoading(true);
    setError("");
    const value = (name: string) =>
      data.get(name)?.toString().trim() || "Chưa cung cấp";
    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        signal: AbortSignal.timeout(20000),
        body: JSON.stringify({
          access_key: WEB3FORMS_KEY,
          subject: `[ShipCode] Yêu cầu dự án từ ${value("name")}`,
          from_name: "ShipCode Studio",
          name: value("name"),
          phone: value("phone"),
          email: value("email"),
          "Lĩnh vực": value("service"),
          "Ngân sách": value("budget"),
          "Thời hạn": value("deadline"),
          message: value("description"),
        }),
      });
      const result = await response.json();
      if (!response.ok || !result.success)
        throw new Error(
          "Gửi chưa thành công. Bạn hãy thử lại hoặc liên hệ trực tiếp qua Zalo.",
        );
      setSubmitted(true);
      form.reset();
    } catch (err) {
      setError(
        err instanceof Error && err.name === "TimeoutError"
          ? "Kết nối đang chậm. Nội dung của bạn vẫn được giữ lại; hãy thử lại hoặc liên hệ trực tiếp."
          : "Chưa thể gửi yêu cầu. Nội dung của bạn vẫn được giữ lại. Vui lòng thử lại hoặc liên hệ trực tiếp qua Zalo.",
      );
    } finally {
      setLoading(false);
    }
  }
  return (
    <Page>
      <PageHeader
        eyebrow="Liên hệ"
        title={
          <>
            Liên hệ
            <br />
            <span className="text-gradient">ShipCode</span>
          </>
        }
        description="Gửi yêu cầu hoặc liên hệ trực tiếp với Nguyên Khang."
      />
      <div className="container contact-layout">
        <Reveal className="contact-aside">
          <p>
            Trao đổi trực tiếp hoặc để lại yêu cầu.
            <br />
            ShipCode sẽ liên hệ để hiểu rõ hơn về dự án của bạn.
          </p>
          {[
            {
              label: "Gọi điện / Zalo",
              value: contactInfo.phoneDisplay,
              href: `https://zalo.me/${contactInfo.phoneRaw}`,
            },
            {
              label: "Email",
              value: contactInfo.email,
              href: `mailto:${contactInfo.email}`,
            },
            {
              label: "Instagram",
              value: "@bngkhang",
              href: contactInfo.instagramUrl,
            },
            {
              label: "TikTok",
              value: "@shipcodestudio",
              href: "https://www.tiktok.com/@shipcodestudio",
            },
          ].map((c) => (
            <a
              key={c.label}
              className="contact-method"
              href={c.href}
              target="_blank"
              rel="noreferrer"
            >
              <div>
                <small>{c.label}</small>
                <strong>{c.value}</strong>
              </div>
              <ArrowUpRight />
            </a>
          ))}
          <div className="contact-location">
            <MapPin size={15} /> Hồ Chí Minh, Việt Nam · Làm việc trực tuyến
          </div>
        </Reveal>
        <Reveal>
          <form className="contact-form" onSubmit={submit} aria-busy={loading}>
            {submitted ? (
              <div className="form-success" role="status">
                <CheckCircle2 size={48} strokeWidth={1.3} />
                <h2>Đã nhận yêu cầu</h2>
                <p>
                  Cảm ơn bạn đã chia sẻ. ShipCode sẽ liên hệ qua thông tin bạn
                  để lại để cùng trao đổi bước tiếp theo.
                </p>
                <button
                  type="button"
                  className="pill-button"
                  onClick={() => setSubmitted(false)}
                >
                  Gửi một yêu cầu khác <ArrowUpRight size={16} />
                </button>
              </div>
            ) : (
              <>
                <h2>Thông tin dự án</h2>
                <p>Các trường có dấu * là thông tin cần thiết.</p>
                <div className="form-grid">
                  <div className="form-field">
                    <label htmlFor="name">Tên của bạn *</label>
                    <input
                      id="name"
                      name="name"
                      autoComplete="name"
                      placeholder="Mình nên gọi bạn là gì?"
                      required
                      maxLength={100}
                    />
                  </div>
                  <div className="form-field">
                    <label htmlFor="phone">Số điện thoại / Zalo *</label>
                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      autoComplete="tel"
                      placeholder="Số để mình liên hệ lại"
                      required
                      minLength={8}
                      maxLength={20}
                      pattern="[+]?[0-9 ]{8,20}"
                    />
                  </div>
                </div>
                <div className="form-field">
                  <label htmlFor="email">Email *</label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    placeholder="ban@example.com"
                    required
                    maxLength={200}
                  />
                </div>
                <div className="form-field">
                  <label htmlFor="service">Bạn đang cần hỗ trợ gì? *</label>
                  <select
                    id="service"
                    name="service"
                    defaultValue={
                      services.some((s) => s.id === service) ? service : ""
                    }
                    required
                  >
                    <option value="" disabled>
                      Chọn lĩnh vực
                    </option>
                    {services.map((s) => (
                      <option value={s.id} key={s.id}>
                        {s.name}
                      </option>
                    ))}
                    <option value="other">Mình cần tư vấn thêm</option>
                  </select>
                </div>
                <div className="form-grid">
                  <div className="form-field">
                    <label htmlFor="budget">Ngân sách dự kiến</label>
                    <select id="budget" name="budget" defaultValue="">
                      <option value="">Chưa xác định</option>
                      <option>Dưới 3 triệu</option>
                      <option>3 – 6 triệu</option>
                      <option>6 – 10 triệu</option>
                      <option>Trên 10 triệu</option>
                    </select>
                  </div>
                  <div className="form-field">
                    <label htmlFor="deadline">Thời hạn mong muốn</label>
                    <input id="deadline" name="deadline" type="date" />
                  </div>
                </div>
                <div className="form-field">
                  <label htmlFor="description">Chia sẻ thêm về ý tưởng *</label>
                  <textarea
                    id="description"
                    name="description"
                    placeholder="Bạn muốn làm gì? Cần những tính năng nào? Có công nghệ hoặc yêu cầu đặc biệt nào không?"
                    required
                    minLength={15}
                    maxLength={5000}
                  />
                </div>
                <div className="hidden" aria-hidden="true">
                  <label htmlFor="company_website">Website công ty</label>
                  <input
                    id="company_website"
                    name="company_website"
                    tabIndex={-1}
                    autoComplete="off"
                  />
                </div>
                {error && (
                  <p className="form-error" role="alert">
                    {error}
                  </p>
                )}
                <button
                  className="pill-button"
                  type="submit"
                  disabled={loading}
                >
                  {loading ? (
                    <>
                      <Loader2 size={16} className="animate-spin" /> Đang gửi…
                    </>
                  ) : (
                    <>
                      Gửi yêu cầu <ArrowUpRight size={16} />
                    </>
                  )}
                </button>
                <p className="form-disclosure">
                  Thông tin được gửi qua Web3Forms đến ShipCode để phản hồi yêu
                  cầu của bạn.
                </p>
              </>
            )}
          </form>
        </Reveal>
      </div>
    </Page>
  );
}

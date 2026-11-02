import { Link } from "react-router-dom";
import { ArrowUpRight, Check } from "lucide-react";
import { plans } from "@/lib/studio";
import { Reveal } from "./Motion";

export function PricingOptions() {
  return (
    <>
      <div className="pricing-options">
        {plans.map((plan) => (
          <Reveal className="pricing-option" key={plan.service}>
            <h3>{plan.name}</h3>
            <p>{plan.text}</p>
            <div className="pricing-option-price">
              <span>Từ</span>
              <strong>
                {plan.price}
                <small>đ</small>
              </strong>
            </div>
            <ul>
              {plan.features.map((feature) => (
                <li key={feature}>
                  <Check size={15} strokeWidth={1.5} />
                  {feature}
                </li>
              ))}
            </ul>
            <Link to={`/lien-he?service=${plan.service}`}>
              Gửi yêu cầu báo giá <ArrowUpRight size={17} />
            </Link>
          </Reveal>
        ))}
      </div>
      <div className="pricing-scope-note">
        <p>
          Đây là giá khởi điểm. Chi phí cụ thể được xác nhận sau khi xem tính
          năng, dữ liệu và thời hạn thực hiện.
        </p>
        <Link to="/lien-he?service=mobile">
          Cần ứng dụng di động hoặc yêu cầu riêng? <ArrowUpRight size={16} />
        </Link>
      </div>
      <div className="pricing-working-terms">
        {[
          {
            title: "Chốt phạm vi trước khi làm",
            text: "Tính năng, thời gian và chi phí được ghi trong báo giá. Phần phát sinh được trao đổi riêng.",
          },
          {
            title: "Có bản demo theo từng mốc",
            text: "Bạn xem phần đã hoàn thành, chạy thử và góp ý trước khi chuyển sang bước tiếp theo.",
          },
          {
            title: "Bàn giao mã nguồn",
            text: "Kèm hướng dẫn cài đặt và tài liệu đã thống nhất. Thời gian hỗ trợ được nêu trong báo giá.",
          },
        ].map((term) => (
          <Reveal key={term.title}>
            <h3>{term.title}</h3>
            <p>{term.text}</p>
          </Reveal>
        ))}
      </div>
    </>
  );
}

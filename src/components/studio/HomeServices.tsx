import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import { services } from "@/lib/studio";
import { Reveal } from "./Motion";

export function HomeServices() {
  return (
    <div className="home-service-list">
      {services.map((service, index) => (
        <Reveal key={service.id} className="home-service-row">
          <span className="home-service-number">0{index + 1}</span>
          <div className="home-service-name">
            <h3>{service.short}</h3>
            <p>{service.technologies.join(" / ")}</p>
            <Link to={`/lien-he?service=${service.id}`}>
              Trao đổi yêu cầu <ArrowUpRight size={16} />
            </Link>
          </div>
          <div className="home-service-scope">
            <p>{service.description}</p>
            <span>Phần bàn giao</span>
            <ul>
              {service.deliverables.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </Reveal>
      ))}
    </div>
  );
}

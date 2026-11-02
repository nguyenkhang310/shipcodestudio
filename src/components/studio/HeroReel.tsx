import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
const films = [
  {
    src: "/media/sellerpilot-hero.mp4",
    poster: "/projects/sellerpilot.jpg",
    name: "SellerPilot",
    type: "Ứng dụng di động · AI",
    duration: 16000,
  },
  {
    src: "/media/climate-hero.mp4",
    poster: "/projects/climate-lab.jpg",
    name: "Climate Lab",
    type: "Trực quan hóa dữ liệu",
    duration: 16000,
  },
  {
    src: "/media/property-outro.mp4",
    poster: "/projects/property-demo.jpg",
    name: "Phân tích bất động sản",
    type: "R · Shiny · Dữ liệu TP.HCM",
    duration: 8000,
  },
];
export function HeroReel() {
  const [active, setActive] = useState(0),
    reduced = useReducedMotion();
  const video = useRef<HTMLVideoElement>(null);
  useEffect(() => {
    if (reduced) return;
    const timer = window.setTimeout(
      () => setActive((i) => (i + 1) % films.length),
      films[active].duration,
    );
    return () => clearTimeout(timer);
  }, [active, reduced]);
  const film = films[active];
  return (
    <div className="product-reel">
      <div className="product-reel-stage">
        <AnimatePresence mode="wait" initial={false}>
          <motion.video
            key={film.src}
            ref={video}
            src={film.src}
            poster={film.poster}
            aria-label={`Demo ${film.name}`}
            autoPlay
            muted
            loop
            playsInline
            disablePictureInPicture
            preload="auto"
            initial={{ opacity: 0, y: reduced ? 0 : 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: reduced ? 0 : -8 }}
            transition={{
              duration: reduced ? 0 : 0.55,
              ease: [0.22, 1, 0.36, 1],
            }}
            onCanPlay={() => {
              if (video.current) {
                video.current.muted = true;
                video.current.play().catch(() => {});
              }
            }}
            onVolumeChange={() => {
              if (video.current && !video.current.muted)
                video.current.muted = true;
            }}
          />
        </AnimatePresence>
      </div>
      <div className="product-reel-caption">
        <span>
          {film.name}
          <small>{film.type}</small>
        </span>
        <div className="reel-pagination" aria-label="Chọn video giới thiệu">
          {films.map((item, i) => (
            <button
              key={item.name}
              aria-label={`Xem video ${item.name}`}
              aria-pressed={active === i}
              onClick={() => setActive(i)}
            >
              <span className={active === i ? "active" : ""} />
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

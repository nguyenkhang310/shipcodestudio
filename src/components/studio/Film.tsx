import { useEffect, useRef, useState } from "react";
interface FilmProps {
  src: string;
  poster: string;
  title: string;
  description?: string;
  eager?: boolean;
}
export function Film({ src, poster, title, eager = false }: FilmProps) {
  const host = useRef<HTMLDivElement>(null),
    video = useRef<HTMLVideoElement>(null);
  const [loaded, setLoaded] = useState(eager);
  useEffect(() => {
    if (!host.current) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setLoaded(true);
          observer.disconnect();
        }
      },
      { rootMargin: "350px" },
    );
    observer.observe(host.current);
    return () => observer.disconnect();
  }, []);
  return (
    <div className="video-shell" ref={host}>
      <div className="film-preview">
        <video
          ref={video}
          src={loaded ? src : undefined}
          poster={poster}
          aria-label={title}
          muted
          autoPlay
          loop
          playsInline
          disablePictureInPicture
          preload={eager ? "auto" : "none"}
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
      </div>
    </div>
  );
}

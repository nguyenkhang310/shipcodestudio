import { useCallback, useEffect, useRef, useState } from "react";
import { ArrowUpRight, Music2, RotateCw } from "lucide-react";
import { Reveal } from "./Motion";
import logo from "@/assets/shipcode-transparent.webp";
const origin = "https://www.tiktok.com",
  profile = `${origin}/@shipcodestudio`;
export const pinnedTikToks = [
  { id: "7653750383654915348", label: "ShipCode / 01" },
  { id: "7632596989884157204", label: "ShipCode / 02" },
] as const;
function TikTokPlayer({ id, label }: { id: string; label: string }) {
  const host = useRef<HTMLDivElement>(null),
    frame = useRef<HTMLIFrameElement>(null);
  const [near, setNear] = useState(false),
    [ready, setReady] = useState(false),
    [failed, setFailed] = useState(false),
    [attempt, setAttempt] = useState(0);
  const send = useCallback(
    (type: string) =>
      frame.current?.contentWindow?.postMessage(
        { "x-tiktok-player": true, type },
        origin,
      ),
    [],
  );
  useEffect(() => {
    if (!host.current) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setNear(true);
          observer.disconnect();
        }
      },
      { rootMargin: "300px" },
    );
    observer.observe(host.current);
    return () => observer.disconnect();
  }, []);
  useEffect(() => {
    if (!near) return;
    const timer = window.setTimeout(() => setFailed(true), 15000);
    const message = (event: MessageEvent) => {
      if (
        event.origin !== origin ||
        event.source !== frame.current?.contentWindow ||
        !event.data ||
        typeof event.data !== "object" ||
        event.data["x-tiktok-player"] !== true
      )
        return;
      const data = event.data;
      if (
        data.type === "onPlayerReady" ||
        (data.type === "onStateChange" && data.value === 1)
      ) {
        clearTimeout(timer);
        setReady(true);
        setFailed(false);
        if (data.type === "onPlayerReady") {
          send("mute");
          send("play");
        }
      }
      if (data.type === "onPlayerError" && data.value?.errorCode !== 3002) {
        clearTimeout(timer);
        setFailed(true);
      }
    };
    window.addEventListener("message", message);
    return () => {
      clearTimeout(timer);
      window.removeEventListener("message", message);
    };
  }, [near, attempt, send]);
  function retry() {
    setReady(false);
    setFailed(false);
    setAttempt((v) => v + 1);
  }
  return (
    <div className="tiktok-video-card" ref={host}>
      <div className="tiktok-player-frame">
        {near && (
          <iframe
            key={attempt}
            ref={frame}
            src={`${origin}/player/v1/${id}?autoplay=1&loop=1&force_muted=1&controls=0&rel=0&description=0&music_info=0`}
            title={label}
            allow="autoplay; encrypted-media; fullscreen"
            className={ready && !failed ? "is-ready" : ""}
          />
        )}
        <div className={`tiktok-cover ${ready && !failed ? "is-hidden" : ""}`}>
          <Music2 size={21} />
          <img src={logo} alt="" />
          <strong>@shipcodestudio</strong>
          {failed ? (
            <>
              <p>TikTok hiện chưa tải được.</p>
              <button className="text-link" onClick={retry}>
                <RotateCw size={13} />
                Thử lại
              </button>
            </>
          ) : (
            <p>{near ? "Đang tải video…" : label}</p>
          )}
          <a
            className="tiktok-external"
            href={`${profile}/video/${id}`}
            target="_blank"
            rel="noreferrer"
          >
            Mở trên TikTok <ArrowUpRight size={13} />
          </a>
        </div>
      </div>
      <div className="tiktok-video-caption">
        <span>@shipcodestudio</span>
        <a
          href={`${profile}/video/${id}`}
          target="_blank"
          rel="noreferrer"
          aria-label={`Mở ${label} trên TikTok`}
        >
          <ArrowUpRight size={15} />
        </a>
      </div>
    </div>
  );
}
export function TikTok({ compact = false }: { compact?: boolean }) {
  return (
    <section
      className={`social-section ${compact ? "project-channel" : ""}`}
      aria-label="Kênh TikTok ShipCode"
    >
      <div
        className={
          compact ? "project-channel-layout" : "container social-layout"
        }
      >
        <Reveal className="social-copy">
          <a
            className="project-channel-identity"
            href={profile}
            target="_blank"
            rel="noreferrer"
          >
            <img src={logo} alt="Logo ShipCode" />
            <span>
              <strong>ShipCode Studio</strong>
              <small>TikTok · @shipcodestudio</small>
            </span>
          </a>
          <h2>{compact ? "Video trên kênh" : "Video dự án"}</h2>
          <a
            className="text-link"
            href={profile}
            target="_blank"
            rel="noreferrer"
          >
            Xem kênh TikTok <ArrowUpRight size={15} />
          </a>
        </Reveal>
        <Reveal>
          <div className="tiktok-video-grid">
            {pinnedTikToks.map((video) => (
              <TikTokPlayer key={video.id} {...video} />
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

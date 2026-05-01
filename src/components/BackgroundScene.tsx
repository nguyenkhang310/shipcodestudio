import { useEffect, useRef } from "react";

const panelLines = Array.from({ length: 5 });
const dataPulses = Array.from({ length: 7 });
const codeColumns = [
  ["API", "AUTH", "CACHE", "QUEUE", "DB"],
  ["TSX", "NODE", "EDGE", "CLOUD", "CI/CD"],
  ["MODEL", "VECTOR", "GPU", "RAG", "AGENT"],
];

export const BackgroundScene = () => {
  const sceneRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let raf = 0;
    let scrollStopTimer: number | undefined;

    const handleScroll = () => {
      if (raf) return;

      raf = window.requestAnimationFrame(() => {
        sceneRef.current?.classList.add("is-scrolling");
        window.clearTimeout(scrollStopTimer);
        scrollStopTimer = window.setTimeout(() => {
          sceneRef.current?.classList.remove("is-scrolling");
        }, 160);
        raf = 0;
      });
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.cancelAnimationFrame(raf);
      window.clearTimeout(scrollStopTimer);
    };
  }, []);

  return (
    <div ref={sceneRef} className="background-scene hidden md:block" aria-hidden="true">
      <div className="background-scene__vignette" />
      <div className="background-scene__depth">
        <div className="background-scene__horizon" />
        <div className="background-scene__matrix">
          {codeColumns.map((column, columnIndex) => (
            <div
              key={columnIndex}
              className={`background-scene__code-column background-scene__code-column--${
                columnIndex + 1
              }`}
            >
              {column.map((token) => (
                <span key={token}>{token}</span>
              ))}
            </div>
          ))}
        </div>

        <div className="background-scene__grid background-scene__grid--back" />
        <div className="background-scene__grid background-scene__grid--floor" />

        <div className="background-scene__core">
          <span />
          <span />
          <span />
        </div>

        <div className="background-scene__circuit background-scene__circuit--one">
          <span />
          <span />
          <span />
        </div>
        <div className="background-scene__circuit background-scene__circuit--two">
          <span />
          <span />
          <span />
        </div>

        <div className="background-scene__panel background-scene__panel--left">
          <span className="background-scene__panel-kicker">DEPLOY</span>
          {panelLines.map((_, index) => (
            <span key={index} className="background-scene__panel-line" />
          ))}
        </div>

        <div className="background-scene__panel background-scene__panel--right">
          <span className="background-scene__panel-kicker">INFERENCE</span>
          {panelLines.map((_, index) => (
            <span key={index} className="background-scene__panel-line" />
          ))}
        </div>

        <div className="background-scene__module">
          <span />
          <span />
          <span />
          <span />
        </div>

        {dataPulses.map((_, index) => (
          <span
            key={index}
            className={`background-scene__pulse background-scene__pulse--${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

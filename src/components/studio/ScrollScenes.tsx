import { useEffect, useRef, useState, type ReactNode } from "react";
import {
  motion,
  useMotionValueEvent,
  useReducedMotion,
  useScroll,
  useTransform,
  type MotionStyle,
} from "framer-motion";

// Keep normal document flow on short viewports and when motion is reduced.
export function useSceneMotion() {
  const reduced = useReducedMotion();
  const [tall, setTall] = useState(
    () => window.matchMedia("(min-height: 660px)").matches,
  );
  useEffect(() => {
    const query = window.matchMedia("(min-height: 660px)");
    const update = () => setTall(query.matches);
    query.addEventListener("change", update);
    return () => query.removeEventListener("change", update);
  }, []);
  return !reduced && tall;
}

export function HeroSequence({ children }: { children: ReactNode }) {
  const animated = useSceneMotion();
  return animated ? <AnimatedHero>{children}</AnimatedHero> : <>{children}</>;
}

function AnimatedHero({ children }: { children: ReactNode }) {
  const track = useRef<HTMLDivElement>(null);
  const frame = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: track,
    offset: ["start start", "end end"],
  });
  const scale = useTransform(scrollYProgress, [0, 0.18, 0.88], [1, 1, 0.9]);
  const borderRadius = useTransform(scrollYProgress, [0, 0.2, 0.8], [0, 0, 28]);
  const introOpacity = useTransform(
    scrollYProgress,
    [0, 0.12, 0.52],
    [1, 1, 0],
  );
  const introY = useTransform(scrollYProgress, [0, 0.65], ["0px", "-85px"]);
  const captionOpacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);
  useMotionValueEvent(scrollYProgress, "change", (value) => {
    const intro =
      frame.current?.querySelector<HTMLElement>(".product-hero-copy");
    const caption = frame.current?.querySelector<HTMLElement>(
      ".product-reel-caption",
    );
    if (intro) intro.inert = value > 0.5;
    if (caption) caption.inert = value > 0.5;
  });
  return (
    <div className="hero-story" ref={track}>
      <div className="hero-story-pin">
        <motion.div
          ref={frame}
          className="hero-story-frame"
          style={
            {
              scale,
              borderRadius,
              "--scene-intro-opacity": introOpacity,
              "--scene-intro-y": introY,
              "--scene-caption-opacity": captionOpacity,
            } as MotionStyle
          }
        >
          {children}
        </motion.div>
      </div>
    </div>
  );
}

export function ScrollSurface({
  children,
  className,
  id,
  tone,
}: {
  children: ReactNode;
  className: string;
  id?: string;
  tone: "dark" | "light" | "warm";
}) {
  const target = useRef<HTMLElement>(null);
  const animated = useSceneMotion();
  const { scrollYProgress } = useScroll({
    target,
    offset: ["start end", "start 72px"],
  });
  const clipPath = useTransform(
    scrollYProgress,
    [0, 0.82],
    ["inset(0% 4% 0% 4% round 32px)", "inset(0% 0% 0% 0% round 0px)"],
  );
  return (
    <div className={`scroll-surface-shell surface-before-${tone}`}>
      <motion.section
        ref={target}
        id={id}
        className={className}
        style={animated ? { clipPath } : undefined}
      >
        {children}
      </motion.section>
    </div>
  );
}

export function ScrollPortrait({ src, alt }: { src: string; alt: string }) {
  const target = useRef<HTMLDivElement>(null);
  const animated = useSceneMotion();
  const { scrollYProgress } = useScroll({
    target,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [24, -24]);
  const scale = useTransform(scrollYProgress, [0, 0.6, 1], [1.12, 1.04, 1.1]);
  return (
    <div ref={target} className="founder-photo scroll-portrait">
      <motion.img
        src={src}
        alt={alt}
        loading="lazy"
        style={animated ? { y, scale } : undefined}
      />
    </div>
  );
}

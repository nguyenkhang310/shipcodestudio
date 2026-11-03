import { useEffect, useRef, useState } from "react";
import {
  animate,
  useReducedMotion,
  type AnimationPlaybackControls,
  motion,
  useMotionValue,
  useMotionValueEvent,
  useScroll,
  useTransform,
  type MotionValue,
} from "framer-motion";
import { ArrowLeft, ArrowRight, ArrowUpRight, Github } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { projects, type Project } from "@/lib/projects";
import { ProjectCard } from "./ProjectCard";
import { Film } from "./Film";
import { useSceneMotion } from "./ScrollScenes";
import { useSmoothScroll } from "./SmoothScroll";

type Showcase = {
  id: string;
  name: string;
  description: string;
  stack: string[];
  image: string;
  video: string;
  project?: Project;
};
const aiDemo: Showcase = {
  id: "ai-challenge",
  name: "HCMUTE.SHIPCODE",
  description:
    "Hệ thống tìm kiếm và truy xuất video cho AI Challenge: tìm theo nội dung, hỏi đáp và định vị khoảnh khắc trong video.",
  stack: ["AI Challenge", "Video Retrieval", "AI Agent"],
  image: "/projects/ai-challenge-demo.jpg",
  video: "/media/ai-challenge-demo.mp4",
};
const showcase: Showcase[] = [
  "sellerpilot",
  "climate",
  "property",
  "fridge",
  "vision",
].map((id) => {
  const project = projects.find((item) => item.id === id)!;
  return { ...project, project };
});
showcase.splice(2, 0, aiDemo);

export function ProjectSequence() {
  const animated = useSceneMotion(801);
  return animated ? <ScrollWindows /> : <ManualWindows />;
}

function ScrollWindows() {
  const track = useRef<HTMLDivElement>(null);
  const scroll = useSmoothScroll();
  const { scrollYProgress } = useScroll({
    target: track,
    offset: ["start 80px", "end end"],
  });
  const position = useTransform(
    scrollYProgress,
    [0, 1],
    [0, showcase.length - 1],
  );
  const [active, setActive] = useState(0);
  const current = useRef(0);
  useMotionValueEvent(position, "change", (value) => {
    const next = Math.max(0, Math.min(showcase.length - 1, Math.round(value)));
    if (next !== current.current) {
      current.current = next;
      setActive(next);
    }
  });
  function select(index: number) {
    if (!track.current) return;
    const top = track.current.getBoundingClientRect().top + window.scrollY - 80;
    const distance = track.current.offsetHeight - window.innerHeight + 80;
    const target = top + (distance * index) / (showcase.length - 1);
    if (scroll?.current) scroll.current.scrollTo(target, { duration: 0.95 });
    else window.scrollTo({ top: target, behavior: "smooth" });
  }
  return (
    <div className="project-window-story" ref={track}>
      <div className="project-window-pin">
        <WindowGallery position={position} active={active} select={select} />
      </div>
    </div>
  );
}
function ManualWindows() {
  const [active, setActive] = useState(0);
  const reduced = useReducedMotion();
  const position = useMotionValue(0);
  const animation = useRef<AnimationPlaybackControls | null>(null);
  useEffect(() => () => animation.current?.stop(), []);
  function select(index: number) {
    const next = Math.max(0, Math.min(showcase.length - 1, index));
    animation.current?.stop();
    setActive(next);
    if (reduced) position.set(next);
    else
      animation.current = animate(position, next, {
        duration: 0.5,
        ease: [0.22, 1, 0.36, 1],
      });
  }
  return (
    <div className="project-window-manual">
      <WindowGallery
        position={position}
        active={active}
        select={select}
        swipe
      />
    </div>
  );
}
function WindowGallery({
  position,
  active,
  select,
  swipe = false,
}: {
  position: MotionValue<number>;
  active: number;
  select: (index: number) => void;
  swipe?: boolean;
}) {
  const touch = useRef({ x: 0, y: 0 });
  const swiped = useRef(false);
  return (
    <div
      className="project-window-gallery"
      role="region"
      aria-roledescription="carousel"
      aria-label="Cửa sổ dự án"
      onKeyDown={(event) => {
        if (
          event.target instanceof HTMLElement &&
          event.target.closest('[role="dialog"]')
        )
          return;
        if (event.key === "ArrowRight" || event.key === "ArrowLeft") {
          event.preventDefault();
          select(
            Math.max(
              0,
              Math.min(
                showcase.length - 1,
                active + (event.key === "ArrowRight" ? 1 : -1),
              ),
            ),
          );
        }
      }}
    >
      <div className="project-window-topline">
        <span>
          {String(active + 1).padStart(2, "0")} /{" "}
          {String(showcase.length).padStart(2, "0")}
        </span>
        <a
          href="https://www.tiktok.com/@shipcodestudio"
          target="_blank"
          rel="noreferrer"
        >
          TikTok <strong>@shipcodestudio</strong>
          <ArrowUpRight size={14} />
        </a>
      </div>
      <div
        className="project-window-canvas"
        onTouchStart={(event) => {
          if (!swipe) return;
          const point = event.touches[0];
          touch.current = { x: point.clientX, y: point.clientY };
          swiped.current = false;
        }}
        onTouchEnd={(event) => {
          if (!swipe) return;
          const point = event.changedTouches[0];
          const dx = point.clientX - touch.current.x;
          const dy = point.clientY - touch.current.y;
          if (Math.abs(dx) > 40 && Math.abs(dx) > Math.abs(dy) * 1.3) {
            swiped.current = true;
            select(active + (dx < 0 ? 1 : -1));
          }
        }}
        onClickCapture={(event) => {
          if (swiped.current) {
            event.preventDefault();
            event.stopPropagation();
            swiped.current = false;
          }
        }}
      >
        {showcase.map((entry, index) => (
          <ProjectWindow
            key={entry.id}
            item={entry}
            index={index}
            position={position}
            active={active}
            select={() => select(index)}
          />
        ))}
      </div>
      <div className="project-window-details">
        <button
          className="project-window-arrow"
          onClick={() => select(active - 1)}
          disabled={active === 0}
          aria-label="Dự án trước"
        >
          <ArrowLeft size={21} />
        </button>
        <div
          className="project-window-caption"
          aria-live="polite"
          aria-atomic="true"
        >
          {showcase.map((item, index) => (
            <motion.div
              key={item.id}
              className="window-caption-entry"
              aria-hidden={active !== index}
              ref={(element) => {
                if (element) element.inert = active !== index;
              }}
              style={{ visibility: active === index ? "visible" : "hidden" }}
              initial={false}
              animate={{
                opacity: active === index ? 1 : 0,
                y: active === index ? 0 : 8,
              }}
              transition={{ duration: 0.18 }}
            >
              <span className="window-project-stack">
                {item.stack.join(" / ")}
              </span>
              <h3>{item.name}</h3>
              <p>{item.description}</p>
              <a
                href={
                  item.project
                    ? `https://github.com/nguyenkhang310/${item.project.repo}`
                    : "https://aichallenge.hochiminhcity.gov.vn/"
                }
                target="_blank"
                rel="noreferrer"
              >
                {item.project ? <Github size={14} /> : null}
                {item.project ? "Xem mã nguồn" : "Thông tin hội thi"}
                <ArrowUpRight size={14} />
              </a>
            </motion.div>
          ))}
        </div>
        <button
          className="project-window-arrow"
          onClick={() => select(active + 1)}
          disabled={active === showcase.length - 1}
          aria-label="Dự án tiếp theo"
        >
          <ArrowRight size={21} />
        </button>
      </div>
      <div className="project-window-pagination" aria-label="Chọn cửa sổ dự án">
        {showcase.map((entry, index) => (
          <button
            key={entry.id}
            aria-label={`Chọn ${entry.name}`}
            aria-pressed={active === index}
            onClick={() => select(index)}
          >
            <span />
          </button>
        ))}
      </div>
    </div>
  );
}
function ProjectWindow({
  item,
  index,
  position,
  active,
  select,
}: {
  item: Showcase;
  index: number;
  position: MotionValue<number>;
  active: number;
  select: () => void;
}) {
  const distance = useTransform(position, (value) => index - value);
  const x = useTransform(
    distance,
    (value) =>
      `${Math.sign(value) * (Math.min(Math.abs(value), 1) * 43 + Math.max(0, Math.abs(value) - 1) * 26)}%`,
  );
  const scale = useTransform(distance, (value) =>
    Math.max(0.52, 1 - Math.abs(value) * 0.17),
  );
  const rotateY = useTransform(distance, (value) =>
    Math.max(-24, Math.min(24, value * -15)),
  );
  const y = useTransform(distance, (value) =>
    Math.min(32, Math.abs(value) * 14),
  );
  const opacity = useTransform(
    distance,
    [-3, -2, -1, 0, 1, 2, 3],
    [0, 0.3, 0.65, 1, 0.65, 0.3, 0],
  );
  const zIndex = useTransform(
    distance,
    (value) => 100 - Math.round(Math.abs(value) * 20),
  );
  const isActive = index === active;
  const visible = Math.abs(index - active) <= 2;
  return (
    <motion.div
      className={`project-window ${isActive ? "is-active" : ""}`}
      data-project={item.id}
      aria-hidden={!visible}
      style={{
        x,
        y,
        scale,
        rotateY,
        opacity,
        zIndex,
        pointerEvents: visible ? "auto" : "none",
      }}
    >
      <div className="project-window-titlebar" aria-hidden="true">
        <div className="window-lights">
          <i />
          <i />
          <i />
        </div>
        <span>{item.name}</span>
        <small>{item.video ? "VIDEO DEMO" : "GIAO DIỆN"}</small>
      </div>
      <div
        className="project-window-body"
        ref={(element) => {
          if (element) element.inert = !isActive;
        }}
      >
        {item.project ? <ProjectCard project={item.project} /> : <DemoWindow />}
      </div>
      {!isActive && visible && (
        <button
          className="project-window-select"
          onClick={select}
          aria-label={`Xem cửa sổ ${item.name}`}
          tabIndex={-1}
        />
      )}
    </motion.div>
  );
}
function DemoWindow() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <button
          className="window-demo-open"
          aria-label="Khám phá HCMUTE.SHIPCODE"
        >
          <Film src={aiDemo.video} poster={aiDemo.image} title={aiDemo.name} />
          <span className="window-demo-expand">
            <ArrowUpRight size={20} />
          </span>
        </button>
      </DialogTrigger>
      <DialogContent className="project-dialog">
        <DialogHeader>
          <span className="eyebrow">AI Challenge</span>
          <DialogTitle>{aiDemo.name}</DialogTitle>
          <DialogDescription>{aiDemo.description}</DialogDescription>
        </DialogHeader>
        <Film
          eager
          src={aiDemo.video}
          poster={aiDemo.image}
          title={aiDemo.name}
        />
        <a
          className="text-link"
          href="https://aichallenge.hochiminhcity.gov.vn/"
          target="_blank"
          rel="noreferrer"
        >
          Thông tin hội thi <ArrowUpRight size={15} />
        </a>
      </DialogContent>
    </Dialog>
  );
}

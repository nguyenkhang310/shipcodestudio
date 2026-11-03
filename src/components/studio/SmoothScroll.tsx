import {
  createContext,
  useContext,
  useEffect,
  useRef,
  type ReactNode,
} from "react";
import { useReducedMotion } from "framer-motion";
import Lenis from "lenis";
import { useMediaQuery } from "@/hooks/use-media-query";
import "lenis/dist/lenis.css";
const ScrollContext =
  createContext<React.MutableRefObject<Lenis | null> | null>(null);
export function SmoothScroll({ children }: { children: ReactNode }) {
  const instance = useRef<Lenis | null>(null),
    reduced = useReducedMotion();
  const touch = useMediaQuery("(hover: none) and (pointer: coarse)");
  useEffect(() => {
    if (reduced || touch) return;
    const lenis = new Lenis({
      autoRaf: true,
      lerp: 0.085,
      smoothWheel: true,
      anchors: true,
      prevent: (node) =>
        Boolean(
          node.closest(
            '[data-lenis-prevent], [role="dialog"], .mobile-menu, .tiktok-video-grid',
          ),
        ),
    });
    instance.current = lenis;
    const updateLock = () => {
      if (
        document.body.style.overflow === "hidden" ||
        document.body.hasAttribute("data-scroll-locked")
      )
        lenis.stop();
      else lenis.start();
    };
    const observer = new MutationObserver(updateLock);
    observer.observe(document.body, {
      attributes: true,
      attributeFilter: ["style", "data-scroll-locked"],
    });
    return () => {
      observer.disconnect();
      lenis.destroy();
      instance.current = null;
    };
  }, [reduced, touch]);
  return (
    <ScrollContext.Provider value={instance}>{children}</ScrollContext.Provider>
  );
}
export function useSmoothScroll() {
  return useContext(ScrollContext);
}

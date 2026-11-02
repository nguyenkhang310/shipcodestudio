import { useEffect, useState } from "react";

// Read the document position; changing the active marker never navigates or scrolls.
export function useActiveSection(enabled: boolean) {
  const [active, setActive] = useState("trang-chu");
  useEffect(() => {
    if (!enabled) return;
    let frame = 0;
    const ids = ["du-an", "dich-vu", "chi-phi", "founder", "lien-he-home"];
    const update = () => {
      frame = 0;
      const header =
        document.querySelector(".site-header")?.getBoundingClientRect()
          .height || 56;
      const readingLine = header + Math.min(160, innerHeight * 0.18);
      let next = "trang-chu";
      for (const id of ids) {
        const section = document.getElementById(id);
        if (!section) continue;
        const bounds = section.getBoundingClientRect();
        if (bounds.top <= readingLine) next = id;
      }
      setActive((previous) => (previous === next ? previous : next));
    };
    const schedule = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };
    window.addEventListener("scroll", schedule, { passive: true });
    window.addEventListener("resize", schedule);
    const resize = new ResizeObserver(schedule);
    resize.observe(document.body);
    // Home is lazy-loaded, and the repository drawer changes the page height.
    const content = new MutationObserver(schedule);
    content.observe(document.body, { childList: true, subtree: true });
    schedule();
    return () => {
      window.removeEventListener("scroll", schedule);
      window.removeEventListener("resize", schedule);
      resize.disconnect();
      content.disconnect();
      cancelAnimationFrame(frame);
    };
  }, [enabled]);
  return active;
}

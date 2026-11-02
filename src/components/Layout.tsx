import { Suspense, useEffect } from "react";
import { useLocation, useOutlet } from "react-router-dom";
import {
  AnimatePresence,
  motion,
  MotionConfig,
  useReducedMotion,
} from "framer-motion";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import {
  SmoothScroll,
  useSmoothScroll,
} from "@/components/studio/SmoothScroll";
function RouteScroll({ expectedPath }: { expectedPath: string }) {
  const { pathname, hash } = useLocation(),
    scroll = useSmoothScroll(),
    reduced = useReducedMotion();
  useEffect(() => {
    if (pathname !== expectedPath) return;
    const frame = requestAnimationFrame(() => {
      const target = hash ? document.getElementById(hash.slice(1)) : null;
      if (scroll?.current) {
        scroll.current.resize();
        scroll.current.scrollTo(target || 0, {
          immediate: !target,
          duration: 1.3,
        });
      } else if (target)
        window.scrollTo({
          top: target.getBoundingClientRect().top + window.scrollY - 80,
          behavior: reduced ? "instant" : "smooth",
        });
      else window.scrollTo({ top: 0, left: 0, behavior: "instant" });
    });
    return () => cancelAnimationFrame(frame);
  }, [pathname, hash, scroll, reduced, expectedPath]);
  return null;
}
function AnimatedRoutes() {
  const { pathname } = useLocation(),
    outlet = useOutlet(),
    reduced = useReducedMotion();
  return (
    <AnimatePresence mode="wait" initial={false}>
      <motion.div
        className="route-view"
        key={pathname}
        initial={{ opacity: 0, y: reduced ? 0 : 35 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: reduced ? 0 : -20 }}
        transition={{ duration: reduced ? 0 : 0.5, ease: [0.22, 1, 0.36, 1] }}
      >
        <Suspense
          fallback={
            <main id="main-content" className="route-loading" role="status">
              <span>Đang mở trang…</span>
            </main>
          }
        >
          {outlet}
          <RouteScroll expectedPath={pathname} />
        </Suspense>
      </motion.div>
    </AnimatePresence>
  );
}
export const Layout = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    const titles: Record<string, string> = {
      "/": "Phát triển phần mềm theo yêu cầu",
      "/dich-vu": "Dịch vụ",
      "/du-an": "Dự án",
      "/quy-trinh": "Cách làm việc",
      "/bang-gia": "Chi phí",
      "/cong-nghe": "Công nghệ",
      "/blog": "Góc chia sẻ",
      "/faq": "Câu hỏi thường gặp",
      "/lien-he": "Liên hệ",
    };
    document.title = `ShipCode — ${titles[pathname] || (pathname.startsWith("/blog/") ? "Góc chia sẻ" : "Không tìm thấy trang")}`;
  }, [pathname]);
  return (
    <MotionConfig reducedMotion="user">
      <SmoothScroll>
        <a href="#main-content" className="skip-link">
          Đến nội dung chính
        </a>
        <Navbar />
        <AnimatedRoutes />
        <Footer />
      </SmoothScroll>
    </MotionConfig>
  );
};

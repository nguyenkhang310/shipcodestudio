import { useEffect, useRef, useState, type MouseEvent } from "react";
import { Link, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight, Menu, X } from "lucide-react";
import logo from "@/assets/shipcode-transparent.webp";
import { useActiveSection } from "@/lib/useActiveSection";
import { useSmoothScroll } from "@/components/studio/SmoothScroll";
const pageLinks = [
  { to: "/dich-vu", label: "Dịch vụ" },
  { to: "/du-an", label: "Dự án" },
  { to: "/quy-trinh", label: "Cách làm việc" },
  { to: "/bang-gia", label: "Chi phí" },
  { to: "/blog", label: "Góc chia sẻ" },
];
export const Navbar = () => {
  const [open, setOpen] = useState(false);
  const { pathname, hash } = useLocation();
  const activeSection = useActiveSection(pathname === "/");
  const scroll = useSmoothScroll();
  const activeLabel = (
    {
      "trang-chu": "Trang chủ",
      "du-an": "Dự án",
      "dich-vu": "Dịch vụ",
      founder: "Founder",
      "chi-phi": "Chi phí",
      "lien-he-home": "Liên hệ",
    } as Record<string, string>
  )[activeSection];
  const isLinkActive = (to: string) =>
    to.includes("#")
      ? pathname === "/" && activeSection === to.split("#")[1]
      : pathname === to || pathname.startsWith(to + "/");
  function followAnchor(event: MouseEvent<HTMLAnchorElement>, to: string) {
    setOpen(false);
    // Clicking an already selected hash must still return to that section.
    if (
      pathname !== "/" ||
      !to.includes("#") ||
      hash !== "#" + to.split("#")[1] ||
      event.metaKey ||
      event.ctrlKey ||
      event.shiftKey ||
      event.altKey
    )
      return;
    const target = document.getElementById(to.split("#")[1]);
    if (!target) return;
    event.preventDefault();
    requestAnimationFrame(() => {
      if (scroll?.current) {
        scroll.current.resize();
        scroll.current.scrollTo(target, { duration: 1.1 });
      } else
        window.scrollTo({
          top: target.getBoundingClientRect().top + window.scrollY - 80,
          behavior: window.matchMedia("(prefers-reduced-motion: reduce)")
            .matches
            ? "instant"
            : "smooth",
        });
    });
  }
  const links =
    pathname === "/"
      ? [
          { to: "/#du-an", label: "Dự án" },
          { to: "/#dich-vu", label: "Dịch vụ" },
          { to: "/#chi-phi", label: "Chi phí" },
          { to: "/#founder", label: "Founder" },
          { to: "/blog", label: "Góc chia sẻ" },
        ]
      : pageLinks;
  const toggle = useRef<HTMLButtonElement>(null);
  const menu = useRef<HTMLDivElement>(null);
  useEffect(() => {
    setOpen(false);
  }, [pathname, hash]);
  useEffect(() => {
    if (!open) return;
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    menu.current?.querySelector<HTMLAnchorElement>("a")?.focus();
    function keydown(e: KeyboardEvent) {
      if (e.key === "Escape") {
        setOpen(false);
        toggle.current?.focus();
      }
      if (e.key === "Tab") {
        const items = [
          toggle.current,
          ...Array.from(
            menu.current?.querySelectorAll<HTMLAnchorElement>("a") || [],
          ),
        ].filter(Boolean) as HTMLElement[];
        const index = items.indexOf(document.activeElement as HTMLElement);
        if (e.shiftKey && index <= 0) {
          e.preventDefault();
          items[items.length - 1]?.focus();
        } else if (!e.shiftKey && index === items.length - 1) {
          e.preventDefault();
          items[0]?.focus();
        }
      }
    }
    document.addEventListener("keydown", keydown);
    return () => {
      document.body.style.overflow = previous;
      document.removeEventListener("keydown", keydown);
    };
  }, [open]);
  return (
    <header
      className={`site-header ${pathname === "/" ? "is-studio" : ""} ${open ? "menu-is-open" : ""}`}
    >
      <nav className="nav-inner" aria-label="Điều hướng chính">
        <Link to="/" className="brand" aria-label="ShipCode — Trang chủ">
          <img src={logo} alt="" />
          <span>
            shipcode<span className="brand-period">.</span>
          </span>
        </Link>
        <div className="desktop-nav">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className={isLinkActive(l.to) ? "active" : undefined}
              aria-current={
                isLinkActive(l.to)
                  ? l.to.includes("#")
                    ? "location"
                    : "page"
                  : undefined
              }
              onClick={(event) => followAnchor(event, l.to)}
            >
              {l.label}
            </Link>
          ))}
        </div>
        <Link
          className={`nav-contact ${pathname === "/" && activeSection === "lien-he-home" ? "active" : ""}`}
          aria-current={
            pathname === "/" && activeSection === "lien-he-home"
              ? "location"
              : undefined
          }
          to="/lien-he"
        >
          Cùng bắt đầu <ArrowUpRight size={13} />
        </Link>
        <button
          className="menu-toggle"
          ref={toggle}
          aria-label={open ? "Đóng menu" : "Mở menu"}
          aria-expanded={open}
          aria-controls="mobile-menu"
          onClick={() => setOpen((v) => !v)}
        >
          {pathname === "/" && !open && (
            <span className="nav-section-name">{activeLabel}</span>
          )}
          {open ? <X size={21} /> : <Menu size={21} />}
        </button>
      </nav>
      <AnimatePresence>
        {open && (
          <motion.div
            id="mobile-menu"
            ref={menu}
            className="mobile-menu"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.25 }}
          >
            <span className="eyebrow">KHÁM PHÁ SHIPCODE</span>
            {[
              ...links,
              { to: "/cong-nghe", label: "Công nghệ" },
              { to: "/faq", label: "Câu hỏi thường gặp" },
              { to: "/lien-he", label: "Liên hệ" },
            ].map((l, i) => (
              <motion.div
                key={l.to}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.035 }}
              >
                <Link
                  to={l.to}
                  className={isLinkActive(l.to) ? "active" : undefined}
                  aria-current={
                    isLinkActive(l.to)
                      ? l.to.includes("#")
                        ? "location"
                        : "page"
                      : undefined
                  }
                  onClick={(event) => followAnchor(event, l.to)}
                >
                  {l.label}
                  <ArrowUpRight size={22} />
                </Link>
              </motion.div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

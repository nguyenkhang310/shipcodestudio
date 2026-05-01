import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import logo from "@/assets/logo-shipcode.webp";

const links = [
  { to: "/#dich-vu", label: "Dịch vụ", num: "01", isHash: true },
  { to: "/#quy-trinh", label: "Quy trình", num: "02", isHash: true },
  { to: "/#bang-gia", label: "Bảng giá", num: "03", isHash: true },
  { to: "/du-an", label: "Dự án", num: "04", isHash: false },
  { to: "/cong-nghe", label: "Công nghệ", num: "05", isHash: false },
  { to: "/blog", label: "Blog", num: "06", isHash: false },
  { to: "/faq", label: "FAQ", num: "07", isHash: false },
];

export const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20);
    handler();
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  useEffect(() => {
    setOpen(false);
    if (location.hash) {
      requestAnimationFrame(() => {
        document
          .getElementById(location.hash.replace("#", ""))
          ?.scrollIntoView({ behavior: "smooth", block: "start" });
      });
      return;
    }
    window.scrollTo({ top: 0, behavior: "auto" });
  }, [location.pathname, location.hash]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 border-b transition-all duration-300 ${
        scrolled
          ? "border-primary/40 bg-gradient-to-b from-background/95 to-background/80 backdrop-blur-2xl shadow-lg"
          : "border-primary/20 bg-gradient-to-b from-background/85 to-background/70 backdrop-blur-xl"
      }`}
    >
      {/* Top border glow effect */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent opacity-50" />

      <nav className="container flex h-[72px] items-center justify-between gap-4">
        <Link
          to="/"
          className="flex items-center gap-3 group shrink-0 transition-transform hover:scale-[1.02]"
        >
          <div className="relative">
            <img
              src={logo}
              alt="ShipCode logo"
              className="h-11 w-11 rounded-lg object-cover transition-all duration-300 group-hover:shadow-lg group-hover:shadow-primary/30"
              width={44}
              height={44}
            />
            <div className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-br from-primary/20 to-transparent" />
          </div>
          <div className="hidden sm:block">
            <div className="font-display font-bold text-lg leading-none bg-gradient-to-r from-foreground to-primary bg-clip-text text-transparent">
              SHIP<span className="text-primary">CODE</span>
            </div>
            <div className="text-[10px] text-primary/80 uppercase tracking-[0.14em] mt-1 font-semibold">
              Code · Build · Ship
            </div>
          </div>
        </Link>

        <ul className="hidden lg:flex items-center gap-0.5">
          {links.map((l) => (
            <li key={l.to}>
              {l.isHash ? (
                <a
                  href={l.to}
                  className="relative inline-flex min-h-10 items-center gap-2 rounded-lg px-3.5 text-sm font-medium text-muted-foreground transition-all duration-200 hover:text-foreground hover:bg-primary/8 group"
                >
                  <span className="font-mono text-[10px] text-primary/70 font-bold tracking-wider">
                    {l.num}
                  </span>
                  <span className="relative">{l.label}</span>
                  <span className="absolute bottom-2 left-3 right-3 h-0.5 bg-gradient-to-r from-transparent via-primary to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-center" />
                </a>
              ) : (
                <NavLink
                  to={l.to}
                  className={({ isActive }) =>
                    `relative inline-flex min-h-10 items-center gap-2 rounded-lg px-3.5 text-sm font-medium transition-all duration-200 group ${
                      isActive
                        ? "text-primary bg-primary/12 shadow-md shadow-primary/20"
                        : "text-muted-foreground hover:text-foreground hover:bg-primary/8"
                    }`
                  }
                >
                  {({ isActive }) => (
                    <>
                      <span className="font-mono text-[10px] text-primary/70 font-bold tracking-wider">
                        {l.num}
                      </span>
                      <span className="relative">{l.label}</span>
                      {isActive && (
                        <motion.span
                          className="absolute -bottom-0.5 left-3 right-3 h-0.5 bg-gradient-to-r from-primary via-primary to-primary/60 rounded-full"
                          layoutId="navbar-indicator"
                          transition={{
                            type: "spring",
                            stiffness: 380,
                            damping: 30,
                          }}
                        />
                      )}
                    </>
                  )}
                </NavLink>
              )}
            </li>
          ))}
        </ul>

        <div className="hidden md:flex items-center gap-3 shrink-0">
          <Button
            asChild
            variant="hero"
            size="default"
            className="shadow-md shadow-primary/30 hover:shadow-primary/50 transition-all duration-300"
          >
            <Link to="/lien-he" className="bg-primary hover:bg-primary/90">
              Nhận tư vấn
            </Link>
          </Button>
        </div>

        <button
          aria-label="Menu"
          className="lg:hidden inline-flex h-10 w-10 items-center justify-center rounded-lg border border-primary/30 bg-primary/10 hover:bg-primary/20 hover:border-primary/40 transition-all duration-300"
          onClick={() => setOpen(!open)}
        >
          {open ? (
            <X className="text-primary" />
          ) : (
            <Menu className="text-primary" />
          )}
        </button>
      </nav>

      {open && (
        <motion.div
          className="lg:hidden border-t border-primary/30 bg-gradient-to-b from-background/98 to-background backdrop-blur-xl"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.2 }}
        >
          <ul className="container py-6 space-y-2">
            {links.map((l) => (
              <li key={l.to}>
                {l.isHash ? (
                  <a
                    href={l.to}
                    onClick={() => setOpen(false)}
                    className="flex min-h-11 items-center gap-3 rounded-lg px-4 text-base text-muted-foreground hover:text-primary hover:bg-primary/12 transition-all duration-200"
                  >
                    <span className="font-mono text-xs font-bold text-primary/80">
                      {l.num}
                    </span>
                    {l.label}
                  </a>
                ) : (
                  <NavLink
                    to={l.to}
                    onClick={() => setOpen(false)}
                    className={({ isActive }) =>
                      `flex min-h-11 items-center gap-3 rounded-lg px-4 text-base transition-all duration-200 ${
                        isActive
                          ? "bg-primary/12 text-primary font-semibold"
                          : "text-muted-foreground hover:text-primary hover:bg-primary/8"
                      }`
                    }
                  >
                    {({ isActive }) => (
                      <>
                        <span className="font-mono text-xs font-bold text-primary/80">
                          {l.num}
                        </span>
                        {l.label}
                      </>
                    )}
                  </NavLink>
                )}
              </li>
            ))}
            <li className="pt-3">
              <Button asChild variant="hero" className="w-full">
                <Link to="/lien-he">Nhận tư vấn</Link>
              </Button>
            </li>
          </ul>
        </motion.div>
      )}
    </header>
  );
};

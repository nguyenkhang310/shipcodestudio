import { Link, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Page } from "@/components/Page";
import { Home, ArrowLeft, Compass } from "lucide-react";
import { motion } from "framer-motion";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404:", location.pathname);
  }, [location.pathname]);

  return (
    <Page>
      <div className="container min-h-[60vh] flex flex-col items-center justify-center text-center relative overflow-hidden">
        {/* Animated mesh gradient background */}
        <motion.div
          className="absolute inset-0 mesh-gradient opacity-25 -z-10"
        />

        {/* Decorative orbs - hidden on mobile */}
        <div
          className="pointer-events-none absolute -top-20 -right-20 w-72 h-72 rounded-full blur-3xl opacity-20 hidden md:block"
          style={{ background: "radial-gradient(circle, hsl(42 92% 58% / 0.5), transparent 70%)" }}
        />
        <div
          className="pointer-events-none absolute -bottom-20 -left-20 w-60 h-60 rounded-full blur-3xl opacity-15 hidden md:block"
          style={{ background: "radial-gradient(circle, hsl(358 62% 48% / 0.4), transparent 70%)" }}
        />

        {/* Animated compass icon */}
        <motion.div
          initial={{ opacity: 0, scale: 0.5, rotate: -90 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 0.8, type: "spring", stiffness: 100 }}
          className="mb-6"
        >
          <div className="relative">
            <div className="relative flex h-20 w-20 items-center justify-center rounded-2xl border border-primary/30 bg-gradient-to-br from-primary/15 to-transparent backdrop-blur-sm">
              <Compass className="h-10 w-10 text-primary" />
            </div>
          </div>
        </motion.div>

        {/* Glitch-style 404 number */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="relative select-none"
        >
          <div className="font-display text-[10rem] font-black leading-none text-gradient md:text-[14rem] relative">
            404
          </div>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.25 }}
          className="font-display font-bold text-3xl md:text-5xl mb-4 mt-2"
        >
          Hết bến đỗ rồi.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.35 }}
          className="text-muted-foreground text-lg mb-10 max-w-md"
        >
          Trang bạn tìm không tồn tại — có lẽ con tàu đã đi nhầm hướng. Quay về cảng nhé!
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.45 }}
          className="flex flex-wrap justify-center gap-3"
        >
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.97 }}>
            <Button asChild variant="hero" size="lg" className="shadow-lg shadow-primary/30 hover:shadow-primary/50 transition-shadow">
              <Link to="/"><Home className="mr-2" /> Về Trang chủ</Link>
            </Button>
          </motion.div>
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.97 }}>
            <Button variant="glass" size="lg" onClick={() => window.history.back()}>
              <ArrowLeft className="mr-2" /> Quay lại
            </Button>
          </motion.div>
        </motion.div>

        {/* Animated path trail */}
        <motion.div
          className="absolute bottom-0 left-0 right-0 h-px"
          style={{ background: "linear-gradient(90deg, transparent, hsl(42 92% 58% / 0.5), transparent)" }}
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 1.5, delay: 0.5 }}
        />
      </div>
    </Page>
  );
};

export default NotFound;

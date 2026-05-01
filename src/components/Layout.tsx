import { Outlet, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import { BackgroundScene } from "@/components/BackgroundScene";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

export const Layout = () => {
  const location = useLocation();
  return (
    <div className="relative min-h-screen overflow-x-hidden bg-background text-foreground">
      <BackgroundScene />
      <div className="noise relative z-10 min-h-screen">
        <Navbar />
        <AnimatePresence mode="wait">
          <div key={location.pathname}>
            <Outlet />
          </div>
        </AnimatePresence>
        <Footer />
      </div>
    </div>
  );
};

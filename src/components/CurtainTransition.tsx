import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import logo from "@/assets/logo-shipcode.webp";

/**
 * CurtainTransition
 * - Plays a gold→red curtain wipe whenever the route changes.
 * - The curtain enters from the bottom-right, covers the screen, then exits to top-left.
 * - Logo appears centered while the curtain is fully covering.
 */
export const CurtainTransition = () => {
  const location = useLocation();
  const [phase, setPhase] = useState<"idle" | "in" | "out">("idle");
  const [key, setKey] = useState(location.pathname);

  useEffect(() => {
    setKey(location.pathname);
    setPhase("in");
    const t1 = setTimeout(() => setPhase("out"), 650);
    const t2 = setTimeout(() => setPhase("idle"), 1300);
    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
    };
  }, [location.pathname]);

  return (
    <AnimatePresence>
      {phase !== "idle" && (
        <motion.div
          key={key}
          className="fixed inset-0 z-[100] pointer-events-none flex items-center justify-center"
          initial={{ clipPath: "circle(0% at 100% 100%)" }}
          animate={{
            clipPath:
              phase === "in"
                ? "circle(150% at 50% 50%)"
                : "circle(0% at 0% 0%)",
          }}
          exit={{ clipPath: "circle(0% at 0% 0%)" }}
          transition={{ duration: 0.65, ease: [0.83, 0, 0.17, 1] }}
          style={{
            background:
              "linear-gradient(135deg, hsl(45 95% 55%), hsl(15 90% 55%), hsl(0 75% 50%))",
          }}
        >
          <motion.div
            initial={{ scale: 0.6, opacity: 0 }}
            animate={{ scale: 1, opacity: phase === "in" ? 1 : 0 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="flex flex-col items-center gap-3"
          >
            <img
              src={logo}
              alt=""
              className="w-20 h-20 rounded-2xl drop-shadow-[0_0_30px_rgba(0,0,0,0.5)]"
            />
            <div className="font-display font-bold text-2xl text-background tracking-wider">
              SHIP<span className="opacity-70">CODE</span>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

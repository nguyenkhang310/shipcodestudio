import { motion } from "framer-motion";
import { ReactNode } from "react";

interface PageProps {
  children: ReactNode;
}

export const Page = ({ children }: PageProps) => (
  <motion.main
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
    className="min-h-screen pt-24 md:pt-28 pb-20 md:pb-24"
  >
    {children}
  </motion.main>
);

interface PageHeaderProps {
  eyebrow: string;
  title: ReactNode;
  description?: string;
  index?: string; // e.g. "01"
}

export const PageHeader = ({ eyebrow, title, description, index }: PageHeaderProps) => (
  <header className="container relative pb-8 sm:pb-12 md:pb-16">
    <div className="absolute -top-12 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent -z-10" />

    <div className="flex items-start gap-4 md:gap-6">
      {index && (
        <motion.span
          className="font-mono text-sm text-primary/60 mt-2 hidden md:block shrink-0"
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4, delay: 0.1 }}
        >
          [{index}]
        </motion.span>
      )}
      <div className="flex-1 min-w-0">
        <motion.div
          className="section-kicker mb-4 sm:mb-6"
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.05 }}
        >
          {eyebrow}
        </motion.div>
        <motion.h1
          className="font-display font-bold display-heading text-balance max-w-5xl"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.12 }}
        >
          {title}
        </motion.h1>
        {description && (
          <motion.p
            className="section-copy mt-4 sm:mt-6 max-w-2xl"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            {description}
          </motion.p>
        )}
      </div>
    </div>

    {/* Animated underline */}
    <motion.div
      className="absolute bottom-0 left-4 right-4 sm:left-6 sm:right-6 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent"
      initial={{ scaleX: 0 }}
      animate={{ scaleX: 1 }}
      transition={{ duration: 0.8, delay: 0.3 }}
    />
  </header>
);

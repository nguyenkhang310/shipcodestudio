import { useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { Plus, Minus } from "lucide-react";
import { ProjectCatalog } from "./ProjectCatalog";
import { projects } from "@/lib/projects";

export function ProjectExplorer() {
  const [open, setOpen] = useState(false);
  const reduced = useReducedMotion();
  return (
    <div className="project-explorer">
      <button
        className="project-explore-toggle"
        aria-expanded={open}
        aria-controls="project-repositories"
        onClick={() => setOpen((value) => !value)}
      >
        <span>
          Khám phá thêm<small>{projects.length} repository trên GitHub</small>
        </span>
        {open ? <Minus size={24} /> : <Plus size={24} />}
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            id="project-repositories"
            className="project-explore-panel"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{
              duration: reduced ? 0 : 0.45,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            <ProjectCatalog />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { projects, projectFilters } from "@/lib/projects";
import { ProjectCard } from "./ProjectCard";
import { Reveal } from "./Motion";

export function ProjectCatalog({ home = false }: { home?: boolean }) {
  const [filter, setFilter] = useState<string>("all");
  const visible = projects.filter(
    (project) => filter === "all" || project.type === filter,
  );
  return (
    <div className={`project-catalog ${home ? "catalog-home" : ""}`}>
      {home && (
        <Reveal className="catalog-heading">
          <div>
            <span className="studio-section-label">
              GitHub / nguyenkhang310
            </span>
            <h3>Toàn bộ repository</h3>
          </div>
          <a
            href="https://github.com/nguyenkhang310?tab=repositories"
            target="_blank"
            rel="noreferrer"
          >
            {projects.length} repo công khai
            <ArrowUpRight size={16} />
          </a>
        </Reveal>
      )}
      <div className="catalog-filters" aria-label="Lọc repository">
        {projectFilters.map((item) => (
          <button
            key={item.id}
            aria-pressed={filter === item.id}
            onClick={() => setFilter(item.id)}
          >
            {item.name}
            <span>
              {item.id === "all"
                ? projects.length
                : projects.filter((project) => project.type === item.id).length}
            </span>
          </button>
        ))}
      </div>
      <div className="repository-grid">
        {visible.map((project) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.05 }}
            transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
          >
            <ProjectCard project={project} cover />
          </motion.div>
        ))}
      </div>
    </div>
  );
}

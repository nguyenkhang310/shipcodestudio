import { ArrowUpRight, Github } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Film } from "./Film";
import type { Project } from "@/lib/studio";
export function ProjectCard({
  project,
  cover = false,
}: {
  project: Project;
  cover?: boolean;
}) {
  return (
    <Dialog>
      <article
        className={`case-study case-${project.id} ${cover ? "case-cover" : ""}`}
      >
        <DialogTrigger asChild>
          <button
            className="case-media"
            aria-label={`Khám phá ${project.name}`}
          >
            <div className="case-media-drift">
              <div className="case-media-inner">
                {project.video && !cover ? (
                  <Film
                    src={project.video}
                    poster={project.image}
                    title={project.name}
                  />
                ) : (
                  <img
                    className={
                      project.imageKind === "illustration" ||
                      project.imageKind === "capture"
                        ? "project-photo-cover"
                        : "project-source-capture"
                    }
                    src={project.image}
                    alt={
                      project.imageKind === "illustration"
                        ? `Ảnh giới thiệu ${project.name}`
                        : `Hình từ repository ${project.repo}`
                    }
                    loading="lazy"
                  />
                )}
              </div>
            </div>
            <span className="case-open">
              <ArrowUpRight size={22} />
            </span>
          </button>
        </DialogTrigger>
        <div className="case-caption">
          <div>
            <span className="case-category">{project.category}</span>
            <h3>{project.name}</h3>
            {project.fork && <span className="repo-fork">Fork</span>}
          </div>
          <a
            href={`https://github.com/nguyenkhang310/${project.repo}`}
            target="_blank"
            rel="noreferrer"
            aria-label={`Mã nguồn ${project.name} trên GitHub`}
          >
            <Github size={19} />
          </a>
        </div>
        <span className="case-stack">{project.stack.join(" / ")}</span>
      </article>
      <DialogContent className="project-dialog">
        <DialogHeader>
          <span className="eyebrow">{project.category}</span>
          <DialogTitle>{project.name}</DialogTitle>
          <DialogDescription>{project.description}</DialogDescription>
        </DialogHeader>
        {project.video ? (
          <Film
            eager
            src={project.video}
            poster={project.image}
            title={project.name}
          />
        ) : (
          <img
            className="case-dialog-image"
            src={project.image}
            alt={
              project.imageKind === "illustration"
                ? `Ảnh giới thiệu ${project.name}`
                : `Hình từ repository ${project.repo}`
            }
          />
        )}
        <p className="case-note">{project.note}</p>
        <div className="tag-list">
          {project.stack.map((t) => (
            <span key={t}>{t}</span>
          ))}
        </div>
        <div className="case-dialog-links">
          <a
            className="pill-button"
            href={`https://github.com/nguyenkhang310/${project.repo}`}
            target="_blank"
            rel="noreferrer"
          >
            Xem mã nguồn <ArrowUpRight size={16} />
          </a>
          {project.demo && (
            <a
              className="text-link"
              href={project.demo}
              target="_blank"
              rel="noreferrer"
            >
              Mở sản phẩm <ArrowUpRight size={15} />
            </a>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
}

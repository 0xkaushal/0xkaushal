import { ExternalLink } from "lucide-react";
import { GitHubIcon } from "./icons/GitHubIcon";
import type { Project } from "@/data/projects";

export function ProjectCard({ project }: { project: Project }) {
  return (
    <div className="group rounded-lg border border-border bg-surface p-6 transition-all hover:border-accent/50">
      <div className="mb-3 flex items-start justify-between">
        <div className="flex items-center gap-2">
          <span className="text-xl">{project.emoji}</span>
          <h3 className="font-semibold text-foreground">{project.title}</h3>
        </div>
        <div className="flex items-center gap-2">
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted transition-colors hover:text-foreground"
              aria-label={`${project.title} on GitHub`}
            >
              <GitHubIcon size={16} />
            </a>
          )}
          {project.live && (
            <a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted transition-colors hover:text-foreground"
              aria-label={`${project.title} live site`}
            >
              <ExternalLink size={16} />
            </a>
          )}
        </div>
      </div>

      <p className="mb-4 text-sm text-muted">{project.description}</p>

      <div className="flex flex-wrap gap-2">
        {project.tech.map((t) => (
          <span
            key={t}
            className="rounded-full border border-border px-2.5 py-0.5 font-mono text-xs text-muted"
          >
            {t}
          </span>
        ))}
      </div>
    </div>
  );
}

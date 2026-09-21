"use client";

import { motion } from "motion/react";
import { ArrowUpRight, Sparkles } from "lucide-react";
import type { Project } from "@/data/projects";
import { ProjectImage } from "./ProjectImage";

type ProjectCardProps = {
  project: Project;
  onSelect: (project: Project) => void;
};

export function ProjectCard({ project, onSelect }: ProjectCardProps) {
  return (
    <motion.article
      className="project cursor-pointer group"
      whileHover={{ y: -8 }}
      transition={{ type: "spring", stiffness: 250, damping: 22 }}
      onClick={() => onSelect(project)}
      tabIndex={0}
      role="button"
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          onSelect(project);
        }
      }}
    >
      <div className="project-head">
        <span className="project-head-id">PROJECT {project.id}</span>
        <div className="project-head-action">
          <span className="explore-label">INSPECT ARCHITECTURE</span>
          <ArrowUpRight className="arrow-icon transition-transform duration-200 group-hover:translate-x-1 group-hover:-translate-y-1" />
        </div>
      </div>

      <ProjectImage
        theme={project.theme}
        number={project.id}
        image={project.image}
        alt={project.title}
      />

      <div className="project-body">
        <div>
          <h3>
            {project.title.split("\n").map((line) => (
              <span key={line}>{line}</span>
            ))}
          </h3>
          <p className="project-tagline-text">{project.tagline}</p>
        </div>

        <div>
          <p>{project.description}</p>
          <div className="project-tech-bar">
            <ul>
              {project.technologies.slice(0, 4).map((t) => (
                <li key={t}>{t}</li>
              ))}
              {project.technologies.length > 4 && (
                <li className="more-pill">+{project.technologies.length - 4} more</li>
              )}
            </ul>
            <span className="inspect-btn">
              <Sparkles size={14} /> Full Case Study
            </span>
          </div>
        </div>
      </div>
    </motion.article>
  );
}

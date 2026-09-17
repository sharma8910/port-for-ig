"use client";
import { motion } from "motion/react";
import { ArrowUpRight } from "lucide-react";
import type { Project } from "@/data/projects";
import { ProjectImage } from "./ProjectImage";
export function ProjectCard({ project }: { project: Project }) {
  return (
    <motion.article
      className="project"
      whileHover={{ y: -8 }}
      transition={{ type: "spring", stiffness: 250, damping: 22 }}
    >
      <div className="project-head">
        <span>PROJECT {project.id}</span>
        <ArrowUpRight />
        <span>CASE STUDY / PLACEHOLDER</span>
      </div>
      <ProjectImage theme={project.theme} number={project.id} image={project.image} alt={project.title} />
      <div className="project-body">
        <h3>
          {project.title.split("\n").map((line) => (
            <span key={line}>{line}</span>
          ))}
        </h3>
        <div>
          <p>{project.description}</p>
          <ul>
            {project.technologies.map((t) => (
              <li key={t}>{t}</li>
            ))}
          </ul>
        </div>
      </div>
    </motion.article>
  );
}

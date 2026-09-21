"use client";

import { useState } from "react";
import { projects, type Project } from "@/data/projects";
import { ProjectCard } from "./ProjectCard";
import { ProjectModal } from "./ProjectModal";

export function Projects() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <section className="section projects" id="work">
      <div className="projects-title">
        <div className="eyebrow">03 / SELECTED WORK</div>
        <h2>
          NOT JUST
          <br />
          <em>IDEAS.</em>
        </h2>
        <p>Real backend architecture, AI pipelines, and working software. Click any project to inspect.</p>
      </div>

      <div className="project-list">
        {projects.map((project) => (
          <ProjectCard
            project={project}
            key={project.id}
            onSelect={(p) => setSelectedProject(p)}
          />
        ))}
      </div>

      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
}

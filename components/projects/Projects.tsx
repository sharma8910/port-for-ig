import { projects } from "@/data/projects";
import { ProjectCard } from "./ProjectCard";
export function Projects() {
  return (
    <section className="section projects" id="work">
      <div className="projects-title">
        <div className="eyebrow">03 / SELECTED WORK</div>
        <h2>
          NOT JUST
          <br />
          <em>IDEAS.</em>
        </h2>
        <p>Small systems, real problems, lots of learning.</p>
      </div>
      <div className="project-list">
        {projects.map((project) => (
          <ProjectCard project={project} key={project.id} />
        ))}
      </div>
    </section>
  );
}

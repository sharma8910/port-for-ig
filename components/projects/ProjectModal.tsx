"use client";

import { useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { X, ExternalLink, Code2, CheckCircle2, AlertTriangle, Layers, Lightbulb } from "lucide-react";
import type { Project } from "@/data/projects";

type ProjectModalProps = {
  project: Project | null;
  onClose: () => void;
};

export function ProjectModal({ project, onClose }: ProjectModalProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (project) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <AnimatePresence>
      <div className="modal-backdrop" onClick={onClose}>
        <motion.div
          className="modal-container"
          onClick={(e) => e.stopPropagation()}
          initial={{ opacity: 0, scale: 0.94, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.94, y: 20 }}
          transition={{ type: "spring", damping: 25, stiffness: 300 }}
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-title"
        >
          <div className="modal-header">
            <div className="modal-header-meta">
              <span className="modal-project-id">PROJECT {project.id}</span>
              <span className={`modal-status-badge ${project.status.toLowerCase().replace(" ", "-")}`}>
                {project.status}
              </span>
            </div>
            <button className="modal-close-btn" onClick={onClose} aria-label="Close modal">
              <X size={20} />
            </button>
          </div>

          <div className="modal-body">
           
            <p className="modal-tagline">{project.tagline}</p>

            <div className="modal-actions-bar">
              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="modal-btn modal-btn-dark"
                >
                  <Code2 size={16} /> View Repository
                </a>
              )}
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="modal-btn modal-btn-orange"
                >
                  <ExternalLink size={16} /> Live Demo
                </a>
              )}
            </div>

            <div className="modal-grid">
              <div className="modal-section-box problem-box">
                <div className="modal-section-title">
                  <AlertTriangle size={17} className="text-orange" />
                  <span>THE PROBLEM</span>
                </div>
                <p>{project.problem}</p>
              </div>

              <div className="modal-section-box solution-box">
                <div className="modal-section-title">
                  <Lightbulb size={17} className="text-orange" />
                  <span>THE SOLUTION</span>
                </div>
                <p>{project.solution}</p>
              </div>
            </div>

            <div className="modal-section-box architecture-box">
              <div className="modal-section-title">
                <Layers size={17} className="text-orange" />
                <span>SYSTEM ARCHITECTURE FLOW</span>
              </div>
              <div className="architecture-steps">
                {project.architecture.map((step, index) => (
                  <div className="arch-step-item" key={step}>
                    <span className="arch-step-num">0{index + 1}</span>
                    <span className="arch-step-text">{step}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="modal-grid">
              <div className="modal-section-box">
                <div className="modal-section-title">
                  <span>KEY CHALLENGES OVERCOME</span>
                </div>
                <ul className="modal-list">
                  {project.challenges.map((challenge) => (
                    <li key={challenge}>
                      <span className="bullet">•</span>
                      <span>{challenge}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="modal-section-box">
                <div className="modal-section-title">
                  <CheckCircle2 size={17} className="text-orange" />
                  <span>WHAT I LEARNED</span>
                </div>
                <ul className="modal-list">
                  {project.learnings.map((learning) => (
                    <li key={learning}>
                      <span className="bullet">✓</span>
                      <span>{learning}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="modal-tech-section">
              <span className="modal-tech-label">TECHNOLOGIES USED</span>
              <div className="modal-tech-pills">
                {project.technologies.map((tech) => (
                  <span className="modal-pill" key={tech}>
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}

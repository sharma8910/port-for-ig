"use client";

import { motion } from "motion/react";
import { currentlyBuildingData } from "@/data/currently-building";
import { ArrowUpRight, GitBranch, Cpu, Sparkles } from "lucide-react";

export function CurrentlyBuilding({ compact = false }: { compact?: boolean }) {
  const {
    projectTitle,
    tagline,
    progressPercent,
    activeBranch,
    statusText,
    techStack,
    learningTarget,
    lastUpdated,
    githubUrl,
  } = currentlyBuildingData;

  return (
    <section className={`section-building-widget ${compact ? 'inside-hero' : ''}`} id="workspace">
      <motion.div
        className="building-card"
        initial={{ opacity: 0, y: 8, scale: 0.995 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.36, ease: "easeOut" }}
      >
        <div className="building-header">
          <div className="building-badge">
            <span className="pulse-dot" />
            <span className="badge-text">CURRENT BUILD • UPDATED MANUALLY</span>
          </div>
          <a
            href={githubUrl}
            target="_blank"
            rel="noreferrer"
            className="building-link"
          >
            <span>GitHub Profile</span>
            <ArrowUpRight size={15} />
          </a>
        </div>

        <div className="building-content-grid">
          <div className="building-main">
            <h3 className="building-title">{projectTitle}</h3>
            <p className="building-tagline">{tagline}</p>

            <div className="progress-wrap">
              <div className="progress-meta">
                <span className="progress-label">DEVELOPMENT MILESTONE</span>
                <span className="progress-val">{progressPercent}% COMPLETE</span>
              </div>
              <div className="progress-bar-bg">
                <motion.div
                  className="progress-bar-fill"
                  initial={{ width: 0 }}
                  whileInView={{ width: `${progressPercent}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.2, ease: "easeOut" }}
                />
              </div>
            </div>

            <p className="building-desc">{statusText}</p>
            <p className="building-updated">Last updated: {lastUpdated}</p>
          </div>

          <div className="building-side">
            <div className="building-stat-box">
              <div className="stat-icon-title">
                <GitBranch size={16} className="stat-icon text-orange" />
                <span>ACTIVE BRANCH</span>
              </div>
              <code className="branch-code">{activeBranch}</code>
            </div>

            <div className="building-stat-box">
              <div className="stat-icon-title">
                <Sparkles size={16} className="stat-icon text-orange" />
                <span>FOCUS LEARNING</span>
              </div>
              <p className="learning-target">{learningTarget}</p>
            </div>

            <div className="building-stat-box">
              <div className="stat-icon-title">
                <Cpu size={16} className="stat-icon text-orange" />
                <span>STACK IN USE</span>
              </div>
              <div className="building-stack-pills">
                {techStack.map((tech) => (
                  <span className="building-pill" key={tech}>
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}

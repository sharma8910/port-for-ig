"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { journeyStages, journeySummary, type JourneyStage } from "@/data/journey";
import { CheckCircle, Terminal, Cpu, ArrowRight, Sparkles } from "lucide-react";
import { SystemVisualizer } from "./SystemVisualizer";

export function Journey() {
  const [activeStageId, setActiveStageId] = useState<string>("ai-rag");

  const currentStage =
    journeyStages.find((s) => s.id === activeStageId) || journeyStages[3];

  return (
    <section className="section journey-section" id="journey">
      <div className="journey-header">
        <div className="eyebrow">05 / DEVELOPER EVOLUTION</div>
        <h2>
          MY LEARNING
          <br />
          <em>ROADMAP.</em>
        </h2>
        <p className="journey-intro-text">
          How I progressed from writing basic C++ loops to architecting scalable backend APIs and vector-grounded RAG systems.
        </p>
      </div>

      {/* Interactive Stage Selector Bar */}
      <div className="stage-selector-bar">
        {journeyStages.map((stage) => {
          const isActive = stage.id === activeStageId;
          return (
            <button
              key={stage.id}
              className={`stage-step-btn ${isActive ? "stage-active" : ""}`}
              onClick={() => setActiveStageId(stage.id)}
            >
              <div className="step-num">{stage.stageNumber}</div>
              <div className="step-label-group">
                <span className="step-phase">{stage.phase}</span>
                <span className="step-title-short">{stage.title.split(" ")[0]}</span>
              </div>
              <span className={`status-dot ${stage.status.toLowerCase().replace(" ", "-")}`} />
            </button>
          );
        })}
      </div>

      {/* Active Stage Detailed Inspector */}
      <div className="stage-detail-container">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentStage.id}
            className="stage-card"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.35 }}
          >
            <div className="stage-card-header">
              <div>
                <span className="stage-badge-phase">
                  STAGE {currentStage.stageNumber} • {currentStage.phase}
                </span>
                <h3 className="stage-card-title">{currentStage.title}</h3>
                <p className="stage-card-subtitle">{currentStage.subtitle}</p>
              </div>
              <div className={`stage-status-tag ${currentStage.status.toLowerCase().replace(" ", "-")}`}>
                {currentStage.status}
              </div>
            </div>

            <p className="stage-card-summary">{currentStage.summary}</p>

            <div className="stage-card-grid">
              <div className="stage-box">
                <div className="stage-box-title">
                  <Cpu size={16} className="text-orange" />
                  <span>CORE SKILLS MASTERED</span>
                </div>
                <div className="skills-pill-group">
                  {currentStage.keySkills.map((skill) => (
                    <span className="skill-pill" key={skill}>
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              <div className="stage-box">
                <div className="stage-box-title">
                  <Terminal size={16} className="text-orange" />
                  <span>PROJECTS UNLOCKED</span>
                </div>
                <ul className="stage-project-list">
                  {currentStage.keyProjects.map((p) => (
                    <li key={p}>
                      <ArrowRight size={14} className="text-orange inline-icon" />
                      <span>{p}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="mindset-shift-box">
              <div className="mindset-title">
                <Sparkles size={16} className="text-orange" />
                <span>MINDSET SHIFT</span>
              </div>
              <p className="mindset-quote">&ldquo;{currentStage.mindsetShift}&rdquo;</p>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Timeline Quick Overview */}
      <div className="journey-timeline-strip">
        <h4>MILESTONES OVERVIEW</h4>
        <div className="timeline-steps-grid">
          {journeySummary.map((item, index) => (
            <div className="timeline-item" key={item.day}>
              <span className="timeline-num">0{index + 1}</span>
              <strong className="timeline-day">{item.day}</strong>
              <p className="timeline-text">{item.text}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Interactive System Flow Simulator */}
      <SystemVisualizer />
    </section>
  );
}

"use client";
import { motion } from "motion/react";
const steps = [
  "USER",
  "REQUEST",
  "API",
  "BACKEND",
  "DATABASE",
  "AI / RETRIEVAL",
  "RESPONSE",
];
export function Journey() {
  return (
    <section className="system-section">
      <div className="eyebrow">04 / THE FUN PART</div>
      <h2>
        HOW A THOUGHT
        <br />
        BECOMES A <em>SYSTEM.</em>
      </h2>
      <motion.div
        className="pipeline"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        {steps.map((step, i) => (
          <div className="pipeline-node" key={step}>
            <motion.div
              variants={{
                hidden: { opacity: 0, scale: 0.7 },
                visible: { opacity: 1, scale: 1 },
              }}
              transition={{ delay: i * 0.12 }}
            >
              {step}
            </motion.div>
            {i < steps.length - 1 && <span>↓</span>}
          </div>
        ))}
      </motion.div>
      <p className="system-note">THIS IS WHAT I LIKE BUILDING.</p>
    </section>
  );
}

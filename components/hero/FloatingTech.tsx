"use client";
import { motion } from "motion/react";
import { ArrowUpRight } from "lucide-react";

export function FloatingTech() {
  const tech = [
    {
      label: "RAG pdf",
      detail: "learn about RAG",
      href: "https://drive.google.com/file/d/1MgvEUlBdKsX9SEdcENt5q3qrEXbN2L6I/view?usp=drivesdk",
    },
  ];
  return (
    <div className="floating-tech">
      {tech.map(({ label, detail, href }, i) => (
        <motion.a
          key={label}
          href={href}
          className={`tech tech-${i}`}
          animate={{
            y: [0, i % 2 ? -10 : 9, 0],
            rotate: [0, i % 2 ? -1 : 1, 0],
          }}
          transition={{
            duration: 4 + (i % 3),
            repeat: Infinity,
            ease: "easeInOut",
          }}
          whileHover={{ y: -5, rotate: 0, scale: 1.04 }}
          whileTap={{ scale: 0.98 }}
        >
          <span className="tech-mark" aria-hidden="true" />
          <span className="tech-copy">
            <strong>{label}</strong>
            <small>{detail}</small>
          </span>
          <ArrowUpRight className="tech-arrow" size={18} aria-hidden="true" />
        </motion.a>
      ))}
    </div>
  );
}

export function FloatingTechs() {
  const tech = [
    {
      label: "SYSTEM DES pdf",
      detail: "System Design",
      href: "https://drive.google.com/file/d/1rWdwyXwsxZLPKc-RMY_iCCge4RfhF4nV/view?usp=drivesdk",
    },
  ];
  return (
    <div className="floating-tech">
      {tech.map(({ label, detail, href }, i) => (
        <motion.a
          key={label}
          href={href}
          className={`tech tech-${i}`}
          animate={{
            y: [0, i % 2 ? -10 : 9, 0],
            rotate: [0, i % 2 ? -1 : 1, 0],
          }}
          transition={{
            duration: 4 + (i % 3),
            repeat: Infinity,
            ease: "easeInOut",
          }}
          whileHover={{ y: -5, rotate: 0, scale: 1.04 }}
          whileTap={{ scale: 0.98 }}
        >
          <span className="tech-mark" aria-hidden="true" />
          <span className="tech-copy">
            <strong>{label}</strong>
            <small>{detail}</small>
          </span>
          <ArrowUpRight className="tech-arrow" size={18} aria-hidden="true" />
        </motion.a>
      ))}
    </div>
  );
}

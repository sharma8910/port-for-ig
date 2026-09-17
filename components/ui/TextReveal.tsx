"use client";
import { motion } from "motion/react";
export function TextReveal({
  children,
  className = "",
}: {
  children: string;
  className?: string;
}) {
  return (
    <motion.h1
      className={className}
      initial={{ opacity: 0, y: 70 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.h1>
  );
}

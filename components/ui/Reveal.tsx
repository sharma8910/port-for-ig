"use client";
import { motion } from "motion/react";
import { fadeUp } from "@/animations/variants";
import { smooth } from "@/animations/transitions";
export function Reveal({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <motion.div
      className={className}
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      transition={smooth}
    >
      {children}
    </motion.div>
  );
}

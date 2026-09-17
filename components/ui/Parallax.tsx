"use client";
import { motion, useScroll, useTransform } from "motion/react";
export function Parallax({
  children,
  offset = 30,
}: {
  children: React.ReactNode;
  offset?: number;
}) {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], [0, offset]);
  return <motion.div style={{ y }}>{children}</motion.div>;
}

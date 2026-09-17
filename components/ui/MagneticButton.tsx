"use client";
import { motion } from "motion/react";
import { ArrowUpRight } from "lucide-react";
export function MagneticButton({
  children,
  href = "#contact",
  dark = true,
}: {
  children: React.ReactNode;
  href?: string;
  dark?: boolean;
}) {
  return (
    <motion.a
      href={href}
      className={`magnetic ${dark ? "magnetic-dark" : "magnetic-light"}`}
      whileHover={{ y: -4, scale: 1.03 }}
      whileTap={{ scale: 0.96 }}
    >
      {children}
      <ArrowUpRight size={18} />
    </motion.a>
  );
}

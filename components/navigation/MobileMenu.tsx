"use client";
import { motion } from "motion/react";
export function MobileMenu({ open }: { open: boolean }) {
  return open ? (
    <motion.div
      className="mobile-menu"
      initial={{ opacity: 0, y: -12 }}
      animate={{ opacity: 1, y: 0 }}
    >
      <a href="#work">Work-Project</a>
      <a href="#about">About-hobby</a>
      <a href="#building">Build-Source</a>
      <a href="#contact">Contact</a>
      <a href="#instagramSection">InstaGrowth</a>
    </motion.div>
  ) : null;
}

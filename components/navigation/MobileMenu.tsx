"use client";

import { motion } from "motion/react";
import { navLinks } from "./Navbar";

export function MobileMenu({
  open,
  onClose,
}: {
  open: boolean;
  onClose?: () => void;
}) {
  if (!open) return null;

  return (
    <motion.div
      className="mobile-menu"
      initial={{ opacity: 0, y: -12 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -12 }}
    >
      {navLinks.map((link) => (
        <a
          key={link.label}
          href={link.href}
          onClick={() => {
            if (onClose) onClose();
          }}
        >
          {link.label}
        </a>
      ))}
    </motion.div>
  );
}

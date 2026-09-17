"use client";
import { motion, useMotionValue, useSpring } from "motion/react";
import { useEffect, useState } from "react";
export function Cursor() {
  const x = useMotionValue(-20);
  const y = useMotionValue(-20);
  const sx = useSpring(x, { damping: 24, stiffness: 350 });
  const sy = useSpring(y, { damping: 24, stiffness: 350 });
  const [enabled, setEnabled] = useState(false);
  useEffect(() => {
    const q = matchMedia("(pointer:fine)");
    setEnabled(q.matches);
    const move = (e: MouseEvent) => {
      x.set(e.clientX);
      y.set(e.clientY);
    };
    addEventListener("mousemove", move);
    return () => removeEventListener("mousemove", move);
  }, [x, y]);
  return enabled ? (
    <motion.div className="cursor" style={{ x: sx, y: sy }} />
  ) : null;
}

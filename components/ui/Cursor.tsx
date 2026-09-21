"use client";
import { motion, useMotionValue, useSpring } from "motion/react";
import { useEffect, useSyncExternalStore } from "react";

const finePointerQuery = "(pointer: fine)";

function subscribeToFinePointer(onStoreChange: () => void) {
  const mediaQuery = window.matchMedia(finePointerQuery);
  mediaQuery.addEventListener("change", onStoreChange);
  return () => mediaQuery.removeEventListener("change", onStoreChange);
}

function getFinePointerSnapshot() {
  return window.matchMedia(finePointerQuery).matches;
}
export function Cursor() {
  const x = useMotionValue(-20);
  const y = useMotionValue(-20);
  const sx = useSpring(x, { damping: 24, stiffness: 350 });
  const sy = useSpring(y, { damping: 24, stiffness: 350 });
  const enabled = useSyncExternalStore(
    subscribeToFinePointer,
    getFinePointerSnapshot,
    () => false,
  );
  useEffect(() => {
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

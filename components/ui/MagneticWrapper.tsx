"use client";

import { useMagneticHover } from "@/hooks/useMagneticHover";
import { motion } from "framer-motion";

export function MagneticWrapper({ children, className, strength = 15 }: { children: React.ReactNode, className?: string, strength?: number }) {
  const { ref, position, handleMouse, reset } = useMagneticHover(strength);

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouse}
      onMouseLeave={reset}
      animate={{ x: position.x, y: position.y }}
      transition={{ type: "spring", stiffness: 150, damping: 15, mass: 0.1 }}
      className={`inline-block ${className || ""}`}
    >
      {children}
    </motion.div>
  );
}

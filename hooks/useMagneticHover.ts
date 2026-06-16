"use client";

import { useRef, useState } from "react";

export function useMagneticHover(strength: number = 8) {
  const ref = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouse = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    
    // Check for prefers-reduced-motion
    if (typeof window !== "undefined") {
      const isReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      if (isReduced) return;
    }

    const { clientX, clientY } = e;
    const { height, width, left, top } = ref.current.getBoundingClientRect();
    const middleX = clientX - (left + width / 2);
    const middleY = clientY - (top + height / 2);
    
    setPosition({ 
      x: (middleX / width) * strength, 
      y: (middleY / height) * strength 
    });
  };

  const reset = () => {
    setPosition({ x: 0, y: 0 });
  };

  return { ref, position, handleMouse, reset };
}

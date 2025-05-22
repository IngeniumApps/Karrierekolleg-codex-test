'use client';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { useRef } from 'react';

export default function HeroVisual() {
  const containerRef = useRef(null);

  // Ganzer Seiten-Scroll (oder parent scrollen lassen)
  const { scrollY } = useScroll();

  // Parallax Bewegung: bei 0px scroll → 0px, bei 1000px scroll → -80px
  const yTransformLeft = useTransform(scrollY, [0, 1000], [0, -80]);
  const yTransformRight = useTransform(scrollY, [0, 1000], [0, 80]);

  // Glatte Bewegung mit Federung
  const yLeft = useSpring(yTransformLeft, { stiffness: 60, damping: 20 });
  const yRight = useSpring(yTransformRight, { stiffness: 60, damping: 20 });

  return (
    <div ref={containerRef} className="absolute inset-0 z-0 pointer-events-none">
      {/* Linker Kreis */}
      <motion.div
        className="absolute top-[20%] left-[5%] w-36 h-36 rounded-full bg-[#3c8bc1] opacity-25 backdrop-blur-sm"
        style={{ y: yLeft }}
      />

      {/* Rechter Kreis */}
      <motion.div
        className="absolute bottom-[15%] right-[10%] w-36 h-36 rounded-full bg-[#f4c94e] opacity-25 backdrop-blur-sm"
        style={{ y: yRight }}
      />
    </div>
  );
}

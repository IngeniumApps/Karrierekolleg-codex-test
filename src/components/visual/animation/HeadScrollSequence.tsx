// src/components/visual/animation/HeroScrollSequence.tsx
'use client';

import { useEffect, useRef, useState } from 'react';
import { useScroll, useTransform, useSpring, motion } from 'framer-motion';

const frameCount = 120;
const imagePath = (index: number) =>
  `/images/hero-sequence/frame_${String(index).padStart(4, '0')}.jpg`;

export default function HeroScrollSequence() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end start'],
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    mass: 0.5,
  });

  const frame = useTransform(smoothProgress, [0, 1], [0, frameCount - 1]);
  const [currentFrame, setCurrentFrame] = useState(0);

  useEffect(() => {
    return frame.on('change', (latest) => {
      setCurrentFrame(Math.round(latest));
    });
  }, [frame]);

  return (
    <div ref={sectionRef} className="sticky top-0 h-screen w-full z-0">
      <motion.img
        key={currentFrame}
        src={imagePath(currentFrame)}
        alt={`Frame ${currentFrame}`}
        className="w-full h-full object-cover absolute top-0 left-0"
      />
    </div>
  );
}

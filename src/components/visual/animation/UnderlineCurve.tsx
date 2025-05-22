'use client';

import { motion } from 'motion/react';

interface UnderlineCurveProps {
  className?: string;
  strokeWidth?: number;
  bottomOffset?: number;
}

export default function UnderlineCurve({
  className = '',
  strokeWidth = 6,
  bottomOffset = 0,
}: UnderlineCurveProps) {
  return (
    <motion.svg
      viewBox="0 0 200 40"
      fill="none"
      className={className}
      initial="hidden"
      animate="visible"
      style={{
        position: 'absolute',
        bottom: bottomOffset ? `-${bottomOffset}px` : undefined,
        pointerEvents: 'none',
      }}
    >
      <motion.path
        d="M10 30 C 60 10, 140 10, 190 30"
        stroke="currentColor"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        variants={{
          hidden: { pathLength: 0, opacity: 0 },
          visible: {
            pathLength: 1,
            opacity: 1,
            transition: {
              pathLength: {
                delay: 0.3,
                type: 'spring',
                duration: 1.2,
                bounce: 0,
              },
              opacity: { delay: 0.3, duration: 0.01 },
            },
          },
        }}
      />
    </motion.svg>
  );
}

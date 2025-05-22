'use client';

import { animate, hover } from 'motion';
import { splitText } from 'motion-plus';
import { useMotionValue } from 'motion/react';
import { type ElementType, useEffect, useRef } from 'react';
import type { ReactNode } from 'react';

interface ScatterTextProps {
  children: ReactNode;
  className?: string;
  tag?: ElementType;
}

export default function ScatterText({
  children,
  className = '',
  tag: Tag = 'div',
}: ScatterTextProps) {
  const containerRef = useRef<HTMLElement>(null);
  const velocityX = useMotionValue(0);
  const velocityY = useMotionValue(0);
  const prevEvent = useRef(0);

  useEffect(() => {
    if (!containerRef.current) return;

    const el = containerRef.current.querySelector('.scatter-text');
    if (!el) return;

    const { chars } = splitText(el as HTMLElement);

    const handlePointerMove = (event: PointerEvent) => {
      const now = performance.now();
      const timeSinceLastEvent = (now - prevEvent.current) / 1000;
      prevEvent.current = now;
      velocityX.set(event.movementX / timeSinceLastEvent);
      velocityY.set(event.movementY / timeSinceLastEvent);
    };

    document.addEventListener('pointermove', handlePointerMove);

    hover(chars, (element) => {
      const speed = Math.sqrt(velocityX.get() ** 2 + velocityY.get() ** 2);
      const angle = Math.atan2(velocityY.get(), velocityX.get());
      const distance = speed * 0.1;

      animate(
        element,
        {
          x: Math.cos(angle) * distance,
          y: Math.sin(angle) * distance,
        },
        { type: 'spring', stiffness: 100, damping: 50 },
      );
    });

    return () => {
      document.removeEventListener('pointermove', handlePointerMove);
    };
  }, []);

  return (
    <Tag ref={containerRef} className={className}>
      <span className="scatter-text inline-block">{children}</span>
    </Tag>
  );
}

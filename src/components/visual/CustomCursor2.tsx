import { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

export default function CustomCursor2() {
  const [isClient, setIsClient] = useState(false);
  const [isInteractive, setIsInteractive] = useState(false);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const smoothX = useSpring(mouseX, { damping: 60, stiffness: 1000, mass: 0.5 });
  const smoothY = useSpring(mouseY, { damping: 60, stiffness: 1000, mass: 0.5 });

  useEffect(() => {
    setIsClient(true);

    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };

    const handlePointerEnter = (e: Event) => {
      if (e.target instanceof Element && e.target.closest('a, button, [role="button"]')) {
        setIsInteractive(true);
      }
    };

    const handlePointerLeave = (e: Event) => {
      if (e.target instanceof Element && e.target.closest('a, button, [role="button"]')) {
        setIsInteractive(false);
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseover', handlePointerEnter);
    document.addEventListener('mouseout', handlePointerLeave);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseover', handlePointerEnter);
      document.removeEventListener('mouseout', handlePointerLeave);
    };
  }, []);

  if (!isClient) return null;

  return (
    <motion.div
      className="fixed top-0 left-0 pointer-events-none z-[9999] mix-blend-difference"
      style={{
        translateX: smoothX,
        translateY: smoothY,
      }}
      animate={{
        width: isInteractive ? 52 : 32,
        height: isInteractive ? 52 : 32,
        borderRadius: '50%',
        backgroundColor: isInteractive ? '#f4c74b' : '#d4c3db',
      }}
      transition={{
        type: 'spring',
        stiffness: 1000,
        damping: 60,
        mass: 0.5,
      }}
    />
  );
}

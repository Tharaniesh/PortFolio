import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

type AnimatedCursorState = {
  x: number;
  y: number;
};

export function AnimatedCursor() {
  const [position, setPosition] = useState<AnimatedCursorState>({ x: -100, y: -100 });

  useEffect(() => {
    const onMove = (event: MouseEvent) => {
      setPosition({ x: event.clientX, y: event.clientY });
    };

    window.addEventListener('mousemove', onMove, { passive: true });
    return () => window.removeEventListener('mousemove', onMove);
  }, []);

  return (
    <>
      <motion.div
        aria-hidden="true"
        animate={{ x: position.x - 14, y: position.y - 14 }}
        transition={{ type: 'spring', stiffness: 430, damping: 28, mass: 0.2 }}
        className="pointer-events-none fixed z-50 hidden h-7 w-7 rounded-full border border-cyan-200/60 bg-cyan-300/10 shadow-[0_0_30px_rgba(34,211,238,0.22)] backdrop-blur-sm xl:block"
      />
      <motion.div
        aria-hidden="true"
        animate={{ x: position.x - 2, y: position.y - 2 }}
        transition={{ type: 'spring', stiffness: 520, damping: 32, mass: 0.15 }}
        className="pointer-events-none fixed z-50 hidden h-1 w-1 rounded-full bg-white xl:block"
      />
    </>
  );
}

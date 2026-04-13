import { Suspense, useEffect, useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { HeroScene } from '../../three/scenes/HeroScene';

function FallbackOrb() {
  return (
    <div className="relative h-full w-full overflow-hidden rounded-[2rem] border border-white/10 bg-slate-950/60">
      <div className="absolute left-1/2 top-1/2 h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgba(103,232,249,0.45),rgba(14,165,233,0.18)_35%,rgba(15,23,42,0)_68%)] blur-2xl" />
      <div className="absolute inset-8 rounded-full border border-white/10" />
      <div className="absolute inset-12 rounded-full border border-cyan-300/10" />
    </div>
  );
}

export function HeroExperience() {
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    const onChange = () => setReducedMotion(mediaQuery.matches);

    onChange();
    mediaQuery.addEventListener('change', onChange);
    return () => mediaQuery.removeEventListener('change', onChange);
  }, []);

  if (reducedMotion) {
    return <FallbackOrb />;
  }

  return (
    <div className="relative h-full w-full overflow-hidden rounded-[2rem] border border-white/10 bg-slate-950/60">
      <Suspense fallback={<FallbackOrb />}>
        <Canvas
          dpr={[1, 1.5]}
          camera={{ position: [0, 0, 7.5], fov: 36 }}
          gl={{ antialias: true, alpha: true, powerPreference: 'high-performance' }}
          performance={{ min: 0.75 }}
        >
          <HeroScene />
        </Canvas>
      </Suspense>
    </div>
  );
}

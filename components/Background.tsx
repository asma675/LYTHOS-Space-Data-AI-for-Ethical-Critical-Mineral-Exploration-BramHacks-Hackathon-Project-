'use client';

import React from 'react';
import dynamic from 'next/dynamic';

// ⬅️ use YOUR Particles (the one you pasted)
const Particles = dynamic(() => import('@/components/Particles'), { ssr: false });

type BackgroundProps = {
  colors?: string[];     // maps to particleColors
  density?: number;      // maps to particleCount
  spread?: number;       // maps to particleSpread
  speed?: number;        // maps to speed
  alpha?: boolean;       // maps to alphaParticles
  className?: string;    // extra Tailwind classes
};

export default function Background({
  colors = ['#ffffff', '#e5fff4', '#bdeedd'],
  density = 1100,
  spread = 46,
  speed = 0.12,
  alpha = true,
  className = '',
}: BackgroundProps) {
  return (
    <div
      className={`fixed inset-0 -z-10 pointer-events-none ${className}`}
      aria-hidden
    >
      {/* Make sure canvas fills the screen */}
      <div className="absolute inset-0">
        <Particles
          particleColors={colors}
          particleCount={density}
          particleSpread={spread}
          speed={speed}
          alphaParticles={alpha}
          sizeRandomness={1}
          particleBaseSize={110}
          cameraDistance={22}
          disableRotation={false}
          moveParticlesOnHover={false}
          className="h-full w-full"
        />
      </div>
    </div>
  );
}

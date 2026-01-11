import React from 'react';

const FilmGrain = () => {
  return (
    <>
      <svg className="hidden">
        <filter id="noiseFilter">
          <feTurbulence 
            type="fractalNoise" 
            baseFrequency="0.6" 
            stitchTiles="stitch" 
            numOctaves="3" 
          />
        </filter>
      </svg>
      <div 
        className="fixed inset-0 z-[9000] opacity-[0.05] pointer-events-none mix-blend-overlay"
        style={{ filter: 'url(#noiseFilter)' }}
      ></div>
    </>
  );
};

export default FilmGrain;

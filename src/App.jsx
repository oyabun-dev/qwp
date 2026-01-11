import React from 'react';
import InstNavbar from './components/institutional/InstNavbar';

import CustomCursor from './components/institutional/CustomCursor';
import FilmGrain from './components/institutional/FilmGrain';
import Lenis from 'lenis';
import { useEffect } from 'react';
 

import InstHero from './components/institutional/InstHero';
import InstAbout from './components/institutional/InstAbout';
import InstApproach from './components/institutional/InstApproach';
import InstDivisions from './components/institutional/InstDivisions';
import InstPortfolio from './components/institutional/InstPortfolio';
import InstGovernance from './components/institutional/InstGovernance';
import InstFooter from './components/institutional/InstFooter';

function App() {
  useEffect(() => {
    const lenis = new Lenis({
        duration: 1.2,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        direction: 'vertical',
        gestureDirection: 'vertical',
        smooth: true,
        mouseMultiplier: 1,
        smoothTouch: false,
        touchMultiplier: 2,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
        lenis.destroy();
    }
  }, []);

  return (
    <div className="bg-[var(--bg-core)] min-h-screen selection:bg-black selection:text-white md:cursor-normal text-[var(--text-primary)]">

       

      <CustomCursor />
      <FilmGrain />
      <InstNavbar />

      <InstHero />
      <InstAbout />
      <InstApproach />
      <InstDivisions />
      <InstPortfolio />
      <InstGovernance />
      <InstFooter />
    </div>
  );
}

export default App;

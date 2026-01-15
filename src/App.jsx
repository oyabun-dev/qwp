import React, { useEffect } from 'react';
import './index.css';
import Lenis from 'lenis';
import InstHero from './components/institutional/InstHero';
import InstQuote from './components/institutional/InstQuote';
import InstManifesto from './components/institutional/InstManifesto';
import InstDiscipline from './components/institutional/InstDiscipline';
import InstImpact from './components/institutional/InstImpact';
import InstOffers from './components/institutional/InstOffers';
import InstTeam from './components/institutional/InstTeam';
import InstPartners from './components/institutional/InstPartners';
import InstCareers from './components/institutional/InstCareers';
import InstFooter from './components/institutional/InstFooter';

import InstHeader from './components/institutional/InstHeader';

function App() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // https://www.desmos.com/calculator/brs54l4xou
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
    };
  }, []);

  return (
    <div className="w-full min-h-screen bg-white">
      <InstHeader />
      <InstHero />
      <InstQuote />
      <InstManifesto />
      <InstDiscipline />
      <InstImpact />
      <InstOffers />
      <InstTeam />
      <InstPartners />
      <InstCareers />
      <InstFooter />
    </div>
  );
}

export default App;

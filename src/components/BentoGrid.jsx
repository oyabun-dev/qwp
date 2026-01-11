import React from 'react';
import HeroSection from './HeroSection';
import Footer from './Footer';
import AboutCard from './cards/AboutCard';
import MissionVisionCard from './cards/MissionVisionCard';
import EcosystemCard from './cards/EcosystemCard';
import ApproachCard from './cards/ApproachCard';
import SupportGovernanceCard from './cards/SupportGovernanceCard';
import ContactCard from './cards/ContactCard';

const BentoGrid = () => {
  return (
    <div className="min-h-screen bg-[var(--bg-primary)]">
        {/* Navigation / Header */}
        <nav className="fixed top-0 left-0 right-0 z-50 px-6 py-6 flex justify-between items-center pointer-events-none">
            <div className="pointer-events-auto">
                <span className="font-heading text-xl font-bold tracking-widest text-white mix-blend-difference">QURAYSH</span>
            </div>
            <div className="pointer-events-auto bg-white/10 backdrop-blur-md border border-white/10 px-4 py-2 rounded-full overflow-hidden relative group cursor-pointer hover:bg-white/20 transition-all">
                <span className="relative z-10 text-xs uppercase tracking-widest font-medium text-white">Menu</span>
            </div>
        </nav>

        {/* Hero Section (Standalone) */}
        <HeroSection />

        {/* Main Grid Content */}
        <div className="container mx-auto px-4 md:px-12 max-w-[1400px] pb-32">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 auto-rows-[minmax(300px, auto)]">
                
                {/* Row 1: About & Mission */}
                <AboutCard />
                <MissionVisionCard />

                {/* Row 2-3: Ecosystem (Main) */}
                <EcosystemCard />

                {/* Row 4-5: Approach & Support */}
                <ApproachCard />
                <SupportGovernanceCard />
                
                {/* Row 6: Contact */}
                <ContactCard />
                
                {/* Quote / Filler Card */}
                <div className="col-span-1 md:col-span-2 row-span-1 rounded-[32px] overflow-hidden bg-[var(--bg-secondary)] border border-[var(--border-glass)] p-8 flex items-center justify-center relative group">
                    <div className="absolute inset-0 bg-wave opacity-5"></div>
                    <blockquote className="relative z-10 text-center">
                        <p className="font-heading text-2xl text-[var(--accent-gold)] italic mb-4">"We do not predict the future. We structure it."</p>
                        <cite className="text-[var(--text-muted)] text-xs uppercase tracking-widest not-italic">— The Board</cite>
                    </blockquote>
                </div>
            </div>
        </div>

        {/* Footer (Standalone) */}
        <Footer />
    </div>
  );
};

export default BentoGrid;

import React from 'react';
import { motion } from 'framer-motion';

const Node = ({ title, subtitle, delay, isCenter = false }) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.9 }}
    whileInView={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.6, delay }}
    className={`relative z-10 p-6 md:p-8 border ${isCenter ? 'border-[var(--accent-gold)] bg-[var(--bg-tertiary)]/80' : 'border-[var(--border-strong)] bg-black/60'} backdrop-blur-md group hover:border-[var(--accent-gold)] transition-colors duration-500`}
  >
    <div className={`text-xs uppercase tracking-[0.2em] mb-2 ${isCenter ? 'text-[var(--accent-gold)]' : 'text-[var(--text-muted)]'}`}>
        {isCenter ? 'Holding Entity' : 'Strategic Sector'}
    </div>
    <h3 className={`font-heading text-xl md:text-2xl font-semibold ${isCenter ? 'text-white' : 'text-[var(--text-primary)]'}`}>
        {title}
    </h3>
    {subtitle && <p className="mt-2 text-sm text-[var(--text-secondary)]">{subtitle}</p>}
  </motion.div>
);

const Connector = ({ className }) => (
    <div className={`absolute bg-[var(--border-subtle)] ${className}`} />
);

const Structure = () => {
  return (
    <section id="structure" className="py-24 md:py-32 bg-[var(--bg-primary)] overflow-hidden relative">
      <div className="container relative z-10">
        <div className="text-center mb-24">
            <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="font-heading text-3xl md:text-4xl font-bold mb-4"
            >
                Group Structure
            </motion.h2>
            <p className="text-[var(--text-secondary)] max-w-2xl mx-auto">
                A centralized nervous system governing autonomous strategic units.
            </p>
        </div>

        <div className="max-w-5xl mx-auto relative">
            {/* Connecting Lines (Desktop) */}
            <div className="hidden md:block absolute inset-0 z-0 pointer-events-none">
                {/* Vertical Center Line */}
                <div className="absolute top-[15%] left-1/2 -translate-x-1/2 w-[1px] h-[70%] bg-gradient-to-b from-[var(--accent-gold)] to-transparent opacity-40"></div>
                
                {/* Horizontal Cross Line */}
                <div className="absolute top-[50%] left-[10%] w-[80%] h-[1px] bg-gradient-to-r from-transparent via-[var(--border-strong)] to-transparent"></div>
            </div>

            {/* Grid Layout */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-16 relative">
                
                {/* Top Center */}
                <div className="md:col-start-2 flex justify-center">
                    <Node title="QURAYSH GROUP" subtitle="Central Governance & Capital Allocation" isCenter={true} delay={0.2} />
                </div>

                {/* Middle Row (Left/Right) - rendered via grid positioning manually for visual hierarchy */}
                <div className="md:col-start-1 md:row-start-2 flex flex-col justify-center space-y-8 md:mt-12">
                    <Node title="Commerce" subtitle="Retail, Logistics, & Distribution" delay={0.4} />
                </div>
                
                <div className="md:col-start-3 md:row-start-2 flex flex-col justify-center space-y-8 md:mt-12">
                     <Node title="Technology" subtitle="SaaS, AI, & Digital Infrastructure" delay={0.5} />
                </div>

                {/* Bottom Row */}
                <div className="md:col-start-1 md:row-start-3 md:translate-x-1/2 mt-8">
                     <Node title="Real Estate" subtitle="Development & Asset Management" delay={0.6} />
                </div>
                
                <div className="md:col-start-3 md:row-start-3 md:-translate-x-1/2 mt-8">
                     <Node title="Ventures" subtitle="Early Stage Innovation" delay={0.7} />
                </div>

            </div>
        </div>
      </div>
    </section>
  );
};

export default Structure;

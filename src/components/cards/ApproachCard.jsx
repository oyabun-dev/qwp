import React from 'react';
import { motion } from 'framer-motion';
import SpotlightCard from '../ui/SpotlightCard';

const pillars = [
    { title: "Centralized Strategy", desc: "Unified vision and long-term strategy." },
    { title: "Operational Discipline", desc: "Shared standards of performance." },
    { title: "Systems & Structure", desc: "Prioritizing systems over improvisation." },
    { title: "Performance Execution", desc: "Value creation, measured and optimized." }
];

const ApproachCard = () => {
  return (
    <SpotlightCard 
      className="col-span-1 md:col-span-2 row-span-2 min-h-[400px]"
    >
        <div className="absolute inset-0 p-8 flex flex-col">
            <h3 className="font-heading text-3xl font-bold text-white mb-8">Our Approach</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 flex-1">
                {pillars.map((pillar, i) => (
                    <motion.div 
                        key={i} 
                        className="glass-panel p-5 rounded-2xl border border-white/5 hover:border-[var(--accent-gold)]/50 transition-colors group relative overflow-hidden flex flex-col justify-center"
                        whileHover={{ scale: 1.02 }}
                    >
                        <div className="absolute right-0 top-0 w-24 h-24 bg-[var(--accent-gold)]/5 rounded-bl-full -mr-4 -mt-4 transition-transform group-hover:scale-150 duration-500"></div>
                        <h4 className="text-white font-bold text-sm mb-2 uppercase tracking-wide group-hover:text-[var(--accent-gold)] transition-colors relative z-10">{pillar.title}</h4>
                        <p className="text-[var(--text-secondary)] text-xs leading-relaxed group-hover:text-white transition-colors relative z-10">{pillar.desc}</p>
                    </motion.div>
                ))}
            </div>
        </div>
    </SpotlightCard>
  );
};

export default ApproachCard;

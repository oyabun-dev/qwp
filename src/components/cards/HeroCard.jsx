import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const HeroCard = () => {
  return (
    <motion.div 
      className="col-span-1 md:col-span-4 row-span-2 relative h-[500px] rounded-[32px] overflow-hidden bg-[var(--bg-secondary)] border border-[var(--border-glass)]"
    >
        {/* Abstract Background */}
        <div className="absolute inset-0 bg-wave opacity-30"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/50 to-transparent"></div>

        <div className="absolute inset-0 p-8 md:p-12 flex flex-col justify-center max-w-4xl">
            <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="font-heading text-5xl md:text-7xl font-bold tracking-tighter text-white mb-6 leading-tight"
            >
                A strategic holding orchestrating <span className="text-[var(--text-secondary)]">businesses, systems, and markets.</span>
            </motion.h1>
            
            <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-[var(--text-secondary)] text-lg md:text-xl max-w-2xl mb-10 leading-relaxed"
            >
                Quraysh is a multi-sector holding company focused on building, structuring, and scaling high-performance businesses across commerce, technology, marketing, and operations.
            </motion.p>

            <motion.button 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="w-fit px-8 py-4 bg-white text-black rounded-full font-medium tracking-wide hover:bg-[var(--accent-gold)] transition-colors duration-300 flex items-center gap-2"
            >
                Explore the Group <ArrowRight size={18} />
            </motion.button>
        </div>
    </motion.div>
  );
};

export default HeroCard;

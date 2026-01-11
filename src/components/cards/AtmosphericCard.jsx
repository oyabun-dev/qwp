import React from 'react';
import { motion } from 'framer-motion';

const AtmosphericCard = () => {
  return (
    <motion.div 
      whileHover={{ scale: 1.01 }}
      className="col-span-1 md:col-span-2 row-span-1 relative h-[300px] rounded-[32px] overflow-hidden bg-black border border-[var(--border-glass)]"
    >
        {/* Subtle Gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-50"></div>
        
        {/* Content */}
        <div className="absolute inset-0 p-8 flex items-center justify-center relative z-10">
            <h3 className="font-heading text-6xl md:text-8xl font-bold tracking-tighter text-white opacity-90 mix-blend-overlay">
                Dominance
            </h3>
        </div>
    </motion.div>
  );
};

export default AtmosphericCard;

import React from 'react';
import { motion } from 'framer-motion';

const MissionCard = () => {
  return (
    <motion.div 
      whileHover={{ scale: 1.02 }}
      className="col-span-1 row-span-1 relative h-[300px] rounded-[32px] overflow-hidden bg-black border border-[var(--border-glass)]"
    >
        <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-white/5 rounded-full blur-[60px]"></div>

        <div className="absolute inset-0 p-8 flex flex-col justify-end relative z-10">
            <div className="bg-white/10 w-fit px-3 py-1 rounded-full text-[10px] uppercase tracking-widest mb-4">The Mandate</div>
            <h3 className="font-heading text-3xl font-bold text-white leading-tight">
                Order from <span className="text-[var(--text-secondary)]">Chaos.</span>
            </h3>
        </div>
    </motion.div>
  );
};

export default MissionCard;

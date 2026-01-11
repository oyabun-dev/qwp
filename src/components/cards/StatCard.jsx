import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

const StatCard = () => {
  return (
    <motion.div 
      whileHover={{ scale: 1.02 }}
      className="col-span-1 row-span-1 relative h-[300px] rounded-[32px] overflow-hidden bg-[var(--bg-secondary)] border border-[var(--border-glass)]"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[var(--accent-gold)]/5"></div>
      
      <div className="absolute inset-0 p-8 flex flex-col justify-between">
        <div className="flex justify-between items-start">
            <h3 className="font-heading text-4xl font-bold tracking-tighter text-white/90">
                Capital <br /><span className="text-[var(--text-secondary)]">Deployed</span>
            </h3>
        </div>

        <div className="flex items-end justify-between">
            <span className="text-5xl font-light tracking-tighter text-white">$12.4B</span>
            <ArrowUpRight size={32} className="text-[var(--accent-gold)]" />
        </div>
      </div>
    </motion.div>
  );
};

export default StatCard;

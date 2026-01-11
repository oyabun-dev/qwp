import React from 'react';
import { motion } from 'framer-motion';

const UpdateCard = () => {
  return (
    <motion.div 
      whileHover={{ scale: 1.02 }}
      className="col-span-1 row-span-1 relative h-[300px] rounded-[32px] overflow-hidden bg-black border border-[var(--border-glass)] group"
    >
      {/* Dotted Background */}
      <div className="absolute inset-0 bg-dots opacity-30"></div>
      
      {/* Radial Glow on Hover */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(198,168,124,0.15),transparent_70%)] opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>

      <div className="absolute inset-0 p-8 flex flex-col justify-between">
        <div className="flex justify-between items-start">
            <h3 className="font-heading text-4xl font-bold tracking-tight text-white">Strategy</h3>
            <span className="bg-[var(--accent-gold)]/20 text-[var(--accent-gold)] px-3 py-1 rounded-full text-[10px] uppercase tracking-widest border border-[var(--accent-gold)]/30">Q1 2025</span>
        </div>
        
        {/* Abstract Graph/Chart visual */}
        <div className="w-full h-1/2 flex items-end justify-between gap-1 pb-4">
             {[40, 65, 50, 80, 55, 90, 75].map((h, i) => (
                 <motion.div 
                    key={i} 
                    initial={{ height: 0, opacity: 0 }}
                    whileInView={{ height: `${h}%`, opacity: 1 }}
                    transition={{ duration: 0.8, delay: i * 0.1, ease: "easeOut" }}
                    className="w-full bg-[var(--text-secondary)]/20 rounded-t-sm hover:bg-[var(--accent-gold)] transition-colors duration-300" 
                 />
             ))}
        </div>
      </div>
    </motion.div>
  );
};

export default UpdateCard;

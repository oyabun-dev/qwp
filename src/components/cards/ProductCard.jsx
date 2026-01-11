import React from 'react';
import { motion } from 'framer-motion';
import { Globe, Shield } from 'lucide-react';

const ProductCard = () => {
  return (
    <motion.div 
      whileHover={{ scale: 1.01 }}
      className="col-span-1 md:col-span-2 row-span-2 relative h-[500px] md:h-[600px] rounded-[32px] overflow-hidden bg-[var(--bg-secondary)] border border-[var(--border-glass)]"
    >
      {/* Abstract Wave Background */}
      <div className="absolute inset-0 bg-wave opacity-20"></div>
      <div className="absolute inset-0 bg-gradient-to-tr from-black via-transparent to-[var(--accent-gold-dim)]/10"></div>

      {/* Content */}
      <div className="absolute inset-0 p-8 flex flex-col justify-end">
        <h2 className="font-heading text-6xl md:text-8xl font-bold mb-12 tracking-tighter text-white">The Group</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Sub Card 1 */}
          <div className="glass-panel rounded-2xl p-6">
            <div className="bg-white/10 w-8 h-8 rounded-full flex items-center justify-center mb-4">
              <Globe size={14} className="text-white" />
            </div>
            <h3 className="text-lg font-bold mb-2 text-white">Global Operations</h3>
            <p className="text-[var(--text-secondary)] text-sm">Strategic presence in key sovereign markets across 3 continents.</p>
          </div>

          {/* Sub Card 2 */}
          <div className="glass-panel rounded-2xl p-6">
             <div className="bg-white/10 w-8 h-8 rounded-full flex items-center justify-center mb-4">
              <Shield size={14} className="text-white" />
            </div>
            <h3 className="text-lg font-bold mb-2 text-white">Asset Security</h3>
            <p className="text-[var(--text-secondary)] text-sm">Fortified capital structures designed for generational endurance.</p>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ProductCard;

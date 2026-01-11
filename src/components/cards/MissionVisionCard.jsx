import React from 'react';
import { motion } from 'framer-motion';
import { Target, Eye } from 'lucide-react';

const MissionVisionCard = () => {
  return (
    <motion.div 
      whileHover={{ scale: 1.01 }}
      className="col-span-1 md:col-span-2 row-span-1 relative h-[300px] rounded-[32px] overflow-hidden bg-[var(--bg-secondary)] border border-[var(--border-glass)] flex flex-col md:flex-row"
    >
        {/* Mission */}
        <div className="flex-1 p-8 border-b md:border-b-0 md:border-r border-[var(--border-glass)]">
             <div className="bg-white/10 w-8 h-8 rounded-full flex items-center justify-center mb-4">
                <Target size={14} className="text-white" />
            </div>
            <h4 className="font-bold text-white mb-2">Our Mission</h4>
            <p className="text-[var(--text-secondary)] text-sm">To structure and scale independent businesses by providing strategy, systems, and operational excellence.</p>
        </div>

        {/* Vision */}
        <div className="flex-1 p-8">
             <div className="bg-white/10 w-8 h-8 rounded-full flex items-center justify-center mb-4">
                <Eye size={14} className="text-white" />
            </div>
             <h4 className="font-bold text-white mb-2">Our Vision</h4>
            <p className="text-[var(--text-secondary)] text-sm">To become a reference holding in Africa for disciplined execution, innovation, and market leadership.</p>
        </div>
    </motion.div>
  );
};

export default MissionVisionCard;

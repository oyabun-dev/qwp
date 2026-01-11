import React from 'react';
import { motion } from 'framer-motion';

const SupportGovernanceCard = () => {
  return (
    <motion.div 
      whileHover={{ scale: 1.01 }}
      className="col-span-1 md:col-span-2 row-span-2 relative h-auto rounded-[32px] overflow-hidden bg-[var(--bg-secondary)] border border-[var(--border-glass)] p-8"
    >
        <div className="mb-8">
            <h4 className="text-xl font-bold text-white mb-4">Expertise & Support</h4>
            <div className="space-y-4">
                <div className="border-l-2 border-[var(--accent-gold)] pl-4">
                    <h5 className="text-white font-medium text-sm">Accounting & Finance</h5>
                    <p className="text-[var(--text-secondary)] text-xs">Tracking, reporting, compliance, and performance analysis.</p>
                </div>
                <div className="border-l-2 border-[var(--accent-gold)] pl-4">
                    <h5 className="text-white font-medium text-sm">Media Production</h5>
                    <p className="text-[var(--text-secondary)] text-xs">Communication, storytelling, and brand positioning.</p>
                </div>
            </div>
        </div>

        <div>
            <h4 className="text-xl font-bold text-white mb-4">Governance</h4>
            <p className="text-[var(--text-secondary)] text-sm leading-relaxed bg-white/5 p-4 rounded-xl">
                Quraysh operates under a structure ensuring accountability, transparency, and strategic alignment. Leadership focuses on long-term growth and stability.
            </p>
        </div>
    </motion.div>
  );
};

export default SupportGovernanceCard;

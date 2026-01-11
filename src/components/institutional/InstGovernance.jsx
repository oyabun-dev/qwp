import React from 'react';
import Section from '../ui/Section';
import Badge from '../ui/Badge';
import { motion } from 'framer-motion';

const InstGovernance = () => {
  return (
    <Section id="governance" className="bg-[var(--bg-inverse)] text-[var(--text-inverse)]">
         <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            
            {/* Title */}
            <div>
                <Badge className="bg-white/10 text-white border-white/20 mb-6">Governance</Badge>
                <motion.h2 
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="type-h1 mb-6 text-white"
                >
                    Radical <br/> Accountability.
                </motion.h2>
                <p className="type-body text-gray-400 max-w-sm">
                    Trust is not given; it is earned through transparency and structure.
                </p>
            </div>

            {/* Content */}
            <div className="space-y-12">
                {[
                    { title: "Capital Allocation", desc: "Rigorous investment committees ensure capital is deployed only where clear, long-term ROI is visible." },
                    { title: "Risk Management", desc: "Proactive identification of market, operational, and regulatory risks." },
                    { title: "Ethical Standards", desc: "Uncompromising adherence to Islamic finance principles and global compliance standards." }
                ].map((item, idx) => (
                    <motion.div 
                        key={idx}
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: idx * 0.1 }}
                        className="border-b border-white/10 pb-8 last:border-0"
                    >
                        <h3 className="type-h2 text-white mb-3 text-2xl">{item.title}</h3>
                        <p className="text-gray-400 leading-relaxed font-light">{item.desc}</p>
                    </motion.div>
                ))}
            </div>

         </div>
    </Section>
  );
};

export default InstGovernance;

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import SpotlightCard from '../ui/SpotlightCard';

const entities = [
    { name: "Street", desc: "Product-driven apparel brand.", type: "Commerce" },
    { name: "At Tijani Design", desc: "Creative design & branding studio.", type: "Design" },
    { name: "Wilane Creation", desc: "Custom production & craftsmanship.", type: "Manufacturing" },
    { name: "Black Wolf FX", desc: "Trading & market analysis.", type: "Finance" },
    { name: "OrvynLab", desc: "Tech & systems development.", type: "Technology" },
    { name: "Ndoye Électrique", desc: "Operations & technical services.", type: "Operations" },
];

const EcosystemCard = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <SpotlightCard 
      className="col-span-1 md:col-span-4 row-span-2 min-h-[500px] bg-black"
      spotlightColor="rgba(212, 175, 55, 0.1)"
    >
         <div className="absolute inset-0 bg-gradient-to-b from-[var(--bg-secondary)] to-black"></div>
         
         <div className="absolute inset-0 p-8 md:p-12">
            <h3 className="font-heading text-4xl font-bold text-white mb-10">The Ecosystem</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {entities.map((entity, i) => (
                    <motion.div 
                        key={i}
                        onMouseEnter={() => setHoveredIndex(i)}
                        onMouseLeave={() => setHoveredIndex(null)}
                        animate={{
                            opacity: hoveredIndex === null || hoveredIndex === i ? 1 : 0.2,
                            scale: hoveredIndex === i ? 1.05 : 0.98,
                            filter: hoveredIndex !== null && hoveredIndex !== i ? "blur(2px)" : "blur(0px)"
                        }}
                        transition={{ duration: 0.4, ease: "easeOut" }}
                        className="group p-6 rounded-2xl bg-[var(--bg-tertiary)] border border-[var(--border-glass)] hover:border-[var(--accent-gold)] transition-colors duration-300 relative overflow-hidden"
                    >
                        <div className="absolute inset-0 bg-[var(--accent-gold)]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                        <span className="text-[10px] uppercase tracking-widest text-[var(--accent-gold)] mb-2 block relative z-10">{entity.type}</span>
                        <h4 className="text-xl font-bold text-white mb-2 group-hover:text-[var(--accent-gold)] transition-colors relative z-10">{entity.name}</h4>
                        <p className="text-[var(--text-secondary)] text-sm relative z-10">{entity.desc}</p>
                    </motion.div>
                ))}
            </div>
         </div>
    </SpotlightCard>
  );
};

export default EcosystemCard;

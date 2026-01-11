import React from 'react';
import { motion } from 'framer-motion';
import Button from '../ui/Button';
import Badge from '../ui/Badge';
import Section from '../ui/Section';

const InstHero = () => {
  return (
    <Section className="min-h-screen flex items-center relative overflow-hidden bg-[var(--bg-core)] pt-32">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center w-full z-10">
            {/* Text Content */}
            <div className="lg:col-span-7 flex flex-col items-start">
               <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="mb-8"
                >
                    <Badge>Strategic Holding • Est. 2025</Badge>
               </motion.div>

                <motion.h1 
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.1 }}
                    className="type-display text-[var(--text-primary)] mb-8 leading-[0.95]"
                >
                    Building Structured <br/>
                    Businesses for <br/>
                    <span className="text-[var(--text-tertiary)]">Long-Term Scale.</span>
                </motion.h1>

                <motion.p 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.3 }}
                    className="type-body text-[var(--text-secondary)] text-xl mb-12 max-w-xl"
                >
                    Quraysh is a strategic holding company focused on commerce, systems, and execution-led growth.
                </motion.p>

                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="flex flex-wrap gap-4"
                >
                     <Button variant="brand" size="lg">
                        Explore Our Structure
                     </Button>
                </motion.div>
            </div>

            {/* Visual Content - Floating Card/Image */}
            <motion.div 
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, delay: 0.2 }}
                className="lg:col-span-5 relative h-[600px] w-full hidden md:block"
            >
                <div className="absolute inset-0 bg-[var(--bg-subtle)] rounded-[3rem] overflow-hidden">
                    <img 
                        src="/assets/fluid_gold_silk_abstract_1768079456452.png" 
                        alt="Strategic Flow" 
                        className="w-full h-full object-cover mix-blend-multiply opacity-80 scale-110"
                    />
                </div>
                
                {/* Stats Card Floating */}
                <motion.div 
                    animate={{ y: [0, -15, 0] }}
                    transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute -bottom-6 -left-6 bg-white p-6 rounded-[2rem] shadow-2xl max-w-[280px] border border-[var(--border-light)]"
                >
                    <div className="flex items-center gap-4 mb-4">
                        <div className="w-12 h-12 rounded-full bg-black flex items-center justify-center text-white text-xl font-bold">
                            5+
                        </div>
                        <div>
                            <p className="text-sm font-bold text-black">Active Divisions</p>
                            <p className="text-xs text-gray-500">Across Key Sectors</p>
                        </div>
                    </div>
                    <div className="flex gap-2">
                        {['Tech', 'Real Estate', 'Logistics'].map(tag => (
                            <span key={tag} className="text-[10px] uppercase font-bold bg-gray-100 px-2 py-1 rounded-md text-gray-600">{tag}</span>
                        ))}
                    </div>
                </motion.div>
            </motion.div>
        </div>
    </Section>
  );
};

export default InstHero;

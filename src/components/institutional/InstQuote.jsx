import React from 'react';
import Section from '../ui/Section';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { Quote } from 'lucide-react';

const InstQuote = () => {
  const { t } = useTranslation();

  return (
    <div className="w-full bg-black section-standard flex items-center justify-center overflow-hidden relative min-h-[50vh]">
        {/* Subtle Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:64px_64px] opacity-30"></div>
        
        {/* Radial Glow */}
        <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_center,_var(--color-brand)_0%,_transparent_70%)] blur-[100px]"></div>
        
        <Section className="bg-transparent text-white py-24 md:py-32 section-standard relative z-10">
            <div className="max-w-4xl mx-auto text-center">
                <motion.div 
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={{
                        hidden: { opacity: 0 },
                        visible: {
                            opacity: 1,
                            transition: {
                                staggerChildren: 0.3
                            }
                        }
                    }}
                >
                    <motion.div 
                        variants={{
                            hidden: { opacity: 0, y: 20 },
                            visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
                        }}
                    >
                        <Quote className="w-12 h-12 md:w-16 md:h-16 text-[#C5A059] mx-auto mb-8 opacity-90 animate-pulse-slow" />
                    </motion.div>
                    
                    <motion.h2 
                        variants={{
                            hidden: { opacity: 0, scale: 0.95 },
                            visible: { opacity: 1, scale: 1, transition: { duration: 0.8, ease: "easeOut" } }
                        }}
                        className="type-h2 leading-relaxed mb-10"
                    >
                        {t('quote.text')}
                    </motion.h2>

                    <motion.div 
                        variants={{
                            hidden: { width: 0, opacity: 0 },
                            visible: { width: 96, opacity: 0.5, transition: { duration: 1, delay: 0.2 } }
                        }}
                        className="h-1 bg-[#C5A059] mx-auto" 
                    />
                </motion.div>
            </div>
        </Section>
    </div>
  );
};

export default InstQuote;

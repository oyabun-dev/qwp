import React, { useRef } from 'react';
import Section from '../ui/Section';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { ArrowUpRight } from 'lucide-react';

const InstImpact = () => {
    const { t } = useTranslation();
    const targetRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: targetRef,
    });

    // Transform vertical scroll to horizontal movement
    // Calculating rough width: 5 cards * 42vw + gaps ~ 230vw. 
    // We need to move enough to show the last card. 
    // Moving 150vw to the left should be safe.
    const x = useTransform(scrollYProgress, [0, 1], ["0%", "-150%"]);

    const divisions = t('impact.divisions', { returnObjects: true }) || [];

    return (
        <section ref={targetRef} className="relative h-[500vh] bg-white section-standard text-black border-t border-gray-100">
            <div className="sticky top-0 h-screen flex flex-col justify-center overflow-hidden">
                <div className="max-w-screen-2xl mx-auto w-full px-6 md:px-12 lg:px-24 mb-12">
                    <p className="type-label text-[#C5A059] mb-4">{t('impact.label')}</p>
                    <h2 className="type-h2 max-w-2xl">
                        {t('impact.title')}
                    </h2>
                    <p className="type-body text-gray-500 mt-4">{t('impact.subtitle')}</p>
                </div>

                <div className="relative w-full">
                    <motion.div style={{ x }} className="flex gap-6 md:gap-10 pl-6 md:pl-24">
                        {divisions.map((div, i) => (
                            <div 
                                key={i}
                                className={`
                                    flex-shrink-0 w-[85vw] md:w-[48vw] p-8 md:p-12 rounded-xl min-h-[400px] md:min-h-[450px] flex flex-col justify-between group cursor-pointer transition-all duration-300 relative overflow-hidden
                                    bg-black text-white shadow-2xl shadow-black/50 
                                    border border-white/10 hover:border-[#C5A059]
                                    hover:-translate-y-2 hover:z-10
                                `}
                            >
                                {/* Dynamic Inner Glow Blob - Top Right Origin */}
                                <div className="absolute -top-20 -right-20 w-[600px] h-[600px] bg-[radial-gradient(circle,rgba(197,160,89,0.25)_0%,transparent_70%)] blur-[80px] opacity-0 group-hover:opacity-100 scale-50 group-hover:scale-150 transition-all duration-700 ease-out pointer-events-none" />

                                <div className="flex justify-between items-start relative z-10">
                                    <span className="type-label text-[#C5A059]">
                                        Division 0{i+1}
                                    </span>
                                    <ArrowUpRight className="w-8 h-8 opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 text-white" />
                                </div>
                                
                                <div className="relative z-10">
                                    <h3 className="type-h2 text-3xl mb-4 whitespace-nowrap">{div.name}</h3>
                                    <p className="type-body text-gray-400">{div.desc}</p>
                                </div>
                            </div>
                        ))}
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default InstImpact;

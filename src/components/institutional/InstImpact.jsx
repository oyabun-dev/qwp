import React, { useRef } from 'react';
import Section from '../ui/Section';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const InstImpact = () => {
    const { t } = useTranslation();
    const targetRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: targetRef,
    });

    // Transform vertical scroll to horizontal movement
    const x = useTransform(scrollYProgress, [0, 1], ["0%", "-85%"]);

    const rawDivisions = t('impact.divisions', { returnObjects: true });
    const divisions = Array.isArray(rawDivisions) ? rawDivisions : [];

    return (
        <section id="divisions" ref={targetRef} className="relative lg:h-[500vh] bg-white section-standard text-black border-t border-gray-100 pb-24 lg:pb-0">
            <div className="lg:sticky lg:top-0 lg:h-screen flex flex-col justify-center overflow-hidden">
                <div className="max-w-screen-2xl mx-auto w-full px-6 md:px-12 lg:px-24 mb-12 relative z-20">
                    <motion.p 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="type-label text-[#C5A059] mb-4"
                    >
                        {t('impact.label')}
                    </motion.p>
                    <motion.h2 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="type-h2 max-w-2xl"
                    >
                        {t('impact.title')}
                    </motion.h2>
                    <motion.p 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        className="type-body text-gray-500 mt-4"
                    >
                        {t('impact.subtitle')}
                    </motion.p>
                </div>

                <div className="relative w-full">
                    {/* Desktop: Framer Motion Transform */}
                    <motion.div style={{ x }} className="hidden lg:flex gap-10 pl-24 w-max">
                        {divisions.map((div, i) => (
                            <DivisionCard key={i} div={div} i={i} />
                        ))}
                    </motion.div>

                    {/* Mobile: Standard Horizontal Scroll */}
                    <div className="flex lg:hidden overflow-x-auto snap-x snap-mandatory gap-6 px-6 w-full pb-8">
                         {divisions.map((div, i) => (
                            <div key={i} className="snap-center shrink-0 first:pl-0 last:pr-6">
                                <DivisionCard div={div} i={i} mobile />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

const DivisionCard = ({ div, i, mobile }) => (
    <Link 
        to={`/divisions/${div.slug}`}
        className={`
            flex-shrink-0 relative overflow-hidden flex flex-col justify-between group cursor-pointer transition-all duration-300
            ${mobile ? 'w-[85vw] h-[400px] p-8 rounded-xl' : 'w-[48vw] min-h-[450px] p-12 rounded-xl hover:-translate-y-2 hover:z-10'}
            bg-black text-white shadow-2xl shadow-black/50 
            border border-white/10 hover:border-[#C5A059]
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
    </Link>
);

export default InstImpact;

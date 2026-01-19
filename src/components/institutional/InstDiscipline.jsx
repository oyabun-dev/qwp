import React from 'react';
import Section from '../ui/Section';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

const InstDiscipline = () => {
  const { t } = useTranslation();

  return (
    <div className="w-full bg-[#F8F8F8]">
        <Section className="section-standard text-black">
            <div className="mb-12 max-w-2xl">
                <p className="type-label text-[#C5A059] mb-4">Framework</p>
                <h2 className="type-h2 mb-4">{t('discipline.title')}</h2>
                <p className="type-body text-gray-500 text-xl">{t('discipline.subtitle')}</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {(t('discipline.cards', { returnObjects: true }) || []).map((card, idx) => (
                    <motion.div 
                        key={idx}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.7, delay: idx * 0.2, ease: "easeOut" }}
                    >
                        <div className="group bg-white bg-gradient-to-b from-white to-gray-50/50 p-8 rounded-xl shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] border border-gray-100 flex flex-col justify-between h-[280px] hover:shadow-[0_20px_40px_-5px_rgba(0,0,0,0.1)] hover:-translate-y-2 hover:border-[#C5A059]/30 transition-all duration-500 ease-out relative overflow-hidden cursor-pointer">
                            {/* Decorative Number */}
                            <div className="absolute top-4 right-6 text-7xl font-bold font-heading text-gray-50 group-hover:text-[#C5A059]/10 transition-colors duration-500 pointer-events-none select-none">
                                0{idx + 1}
                            </div>

                            <div className="relative z-10">
                                <h3 className="type-h3 mb-6 relative inline-block">
                                    {card.title}
                                    <span className="absolute -bottom-2 left-0 w-12 h-1 bg-[#C5A059] origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ease-out"></span>
                                </h3>
                            </div>

                            <p className="type-body text-gray-500 mt-auto border-t border-gray-100 pt-6 group-hover:border-[#C5A059]/20 transition-colors duration-500">
                                {card.desc}
                            </p>
                        </div>
                    </motion.div>
                ))}
            </div>
        </Section>
    </div>
  );
};

export default InstDiscipline;

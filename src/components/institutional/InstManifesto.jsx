import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useTranslation, Trans } from 'react-i18next';

const InstManifesto = () => {
    const { t } = useTranslation();
    const targetRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: targetRef,
        offset: ["start end", "end start"]
    });

    const y = useTransform(scrollYProgress, [0, 1], [50, -50]);

    const values = t('manifesto.values', { returnObjects: true }) || [];

    return (
        <section id="manifesto" className="py-24 md:py-32 bg-white text-black relative border-t border-gray-100">
            <div className="max-w-screen-2xl mx-auto w-full px-6 md:px-12 lg:px-24">
                <div className="flex flex-col lg:flex-row gap-24 items-start">
                    
                    {/* Sticky Title */}
                    <div className="w-full lg:w-1/3">
                        <motion.div style={{ y }} className="lg:sticky lg:top-32">
                            <span className="type-label text-[#C5A059] mb-4 block">{t('manifesto.label')}</span>
                            <h2 className="type-display text-5xl md:text-6xl lg:text-7xl leading-tight">
                                <Trans i18nKey="manifesto.title" components={{ 
                                    1: <span className="text-gray-400" /> 
                                }} />
                            </h2>
                        </motion.div>
                    </div>

                    {/* Values List */}
                    <div className="w-full lg:w-2/3 flex flex-col gap-16 pt-8">
                        {values.map((item, i) => (
                            <motion.div 
                                key={i}
                                initial={{ opacity: 0, x: 20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.6, delay: i * 0.1 }}
                                viewport={{ once: true }}
                                className="group"
                            >
                                <div className="h-[1px] w-full bg-gray-300 mb-8 group-hover:bg-[#C5A059] transition-colors duration-500" />
                                <h3 className="text-4xl font-light mb-4">{item.title}</h3>
                                <p className="type-body text-gray-500 text-xl max-w-lg">
                                    {item.desc}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default InstManifesto;

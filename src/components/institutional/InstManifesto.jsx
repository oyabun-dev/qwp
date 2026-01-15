import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { ShieldCheck, Zap, Globe } from 'lucide-react';

const InstManifesto = () => {
    const { t } = useTranslation();
    const targetRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: targetRef,
        offset: ["start end", "end start"]
    });

    const y = useTransform(scrollYProgress, [0, 1], [50, -50]);

    const items = [
        {
            icon: Globe,
            title: "Héritage & Innovation",
            desc: "Allier les valeurs traditionnelles de commerce éthique à la puissance de la technologie moderne."
        },
        {
            icon: Zap,
            title: "Impact Réel",
            desc: "Créer de la valeur réelle, tangible et durable, loin de la spéculation."
        },
        {
            icon: ShieldCheck,
            title: "Engagement Total",
            desc: "Une promesse de qualité intransigeante sur chaque produit et ligne de code que nous livrons."
        }
    ];

    return (
        <section ref={targetRef} className="section-standard bg-black text-white relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-10 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] bg-repeat" />
            
            <div className="max-w-screen-2xl mx-auto w-full relative z-10 px-6 md:px-12 lg:px-24">
                <div className="flex flex-col md:flex-row gap-16 md:gap-24 items-start">
                    
                    {/* Left: Title & Intro */}
                    <div className="w-full md:w-1/3">
                        <motion.div style={{ y }} className="sticky top-32">
                            <p className="type-label text-[#C5A059] mb-4">Notre Ambition</p>
                            <h2 className="type-h2">
                                Construire <br/><span className="text-gray-500">l'Avenir.</span>
                            </h2>
                            <p className="type-body text-gray-400 mt-8">
                                QURAYSH ne cherche pas seulement à réussir, mais à durer. Notre vision s'étend sur des décennies, pas des trimestres.
                            </p>
                        </motion.div>
                    </div>

                    {/* Right: Key Points */}
                    <div className="w-full md:w-2/3 grid grid-cols-1 gap-12">
                        {items.map((item, i) => (
                            <motion.div 
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: i * 0.1 }}
                                viewport={{ once: true }}
                                className="group flex gap-6 items-start border-b border-white/10 pb-12 last:border-0"
                            >
                                <div className="p-4 rounded-full bg-white/5 group-hover:bg-[#C5A059]/20 transition-colors duration-300">
                                    <item.icon className="w-6 h-6 text-[#C5A059]" />
                                </div>
                                <div>
                                    <h3 className="type-h3 mb-2 text-white group-hover:text-[#C5A059] transition-colors">{item.title}</h3>
                                    <p className="type-body text-gray-400">{item.desc}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default InstManifesto;

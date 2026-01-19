import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

const InstPartners = () => {
    const { t } = useTranslation();
    const partnerLogos = [
        { src: "/assets/partners/wolf-gold.png", alt: "Black Wolf FX", scale: 1 },
        { src: "/assets/partners/tidiany-design.jpg", alt: "At Tidiany Design", scale: 1 },
        { src: "/assets/partners/circle-gradient.png", alt: "Orvynlab", scale: 1 },
        { src: "/assets/partners/ndoye-electrique.png", alt: "Ndoye Électrique", scale: 1 },
        { src: "/assets/partners/3e-logo.png", alt: "STR3ET", scale: 1.5 },
        { src: "/assets/partners/wilane-creation.png", alt: "Wilane Création", scale: 1 }
    ];

    return (
        <section className="py-24 bg-black text-white overflow-hidden border-t border-white/10">
             <div className="max-w-screen-2xl mx-auto w-full px-6 md:px-12 lg:px-24 mb-12 flex justify-between items-end">
                <div>
                    <p className="type-label text-[#C5A059]">{t('partners.label')}</p>
                    <h2 className="type-h3 text-2xl mt-2 text-gray-400">{t('partners.title')}</h2>
                </div>
            </div>

            {/* CSS Animation Styles for Marquee */}
            <style>{`
                @keyframes marquee {
                    0% { transform: translateX(0); }
                    100% { transform: translateX(-50%); }
                }
                .animate-marquee {
                    animation: marquee 50s linear infinite;
                }
                .animate-marquee:hover {
                    animation-play-state: paused;
                }
            `}</style>

            <div className="relative flex whitespace-nowrap overflow-hidden py-12 opacity-80 hover:opacity-100 transition-opacity duration-500">
                <div className="absolute top-0 left-0 w-32 h-full bg-gradient-to-r from-black to-transparent z-10 pointer-events-none" />
                <div className="absolute top-0 right-0 w-32 h-full bg-gradient-to-l from-black to-transparent z-10 pointer-events-none" />

                <div className="flex gap-16 md:gap-32 items-center animate-marquee">
                    {[...partnerLogos, ...partnerLogos, ...partnerLogos, ...partnerLogos].map((logo, i) => (
                        <div key={i} className="group relative flex-shrink-0 w-48 h-32 flex items-center justify-center p-4">
                             {/* Tooltip */}
                             <div className="absolute -top-2 left-1/2 -translate-x-1/2 px-3 py-1 bg-white text-black text-xs font-bold uppercase tracking-wider rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap z-20">
                                {logo.alt}
                                <div className="absolute bottom-[-4px] left-1/2 -translate-x-1/2 w-2 h-2 bg-white rotate-45 transform"></div>
                             </div>

                             <img 
                                src={logo.src} 
                                alt={logo.alt} 
                                style={{ transform: `scale(${logo.scale || 1})` }}
                                className="w-full h-full object-contain filter grayscale group-hover:grayscale-0 transition-all duration-300"
                             />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default InstPartners;

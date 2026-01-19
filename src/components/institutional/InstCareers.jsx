import React from 'react';
import { ArrowRight } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const InstCareers = () => {
    const { t } = useTranslation();

    return (
        <section className="py-32 bg-black text-white relative overflow-hidden">
             {/* Gradient Accent */}
             <div className="absolute inset-0 bg-gradient-to-tr from-black via-black to-[#C5A059]/10" />

            <div className="max-w-screen-xl mx-auto w-full px-6 relative z-10 text-center">
                <p className="type-label text-[#C5A059] mb-6">{t('careers.label')}</p>
                <h2 className="type-display text-5xl md:text-7xl mb-8">
                    {t('careers.title')}
                </h2>
                <p className="type-body text-gray-400 mb-12 max-w-2xl mx-auto text-lg md:text-xl">
                    {t('careers.description')}
                </p>
                
                <div className="flex justify-center">
                    <button className="group flex items-center gap-4 bg-white text-black px-10 py-5 rounded-full font-medium hover:bg-[#C5A059] hover:text-white transition-all duration-300 transform hover:scale-105">
                        {t('careers.cta')}
                        <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </button>
                </div>
            </div>
        </section>
    );
};

export default InstCareers;
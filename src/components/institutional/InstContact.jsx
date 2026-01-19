import React from 'react';
import { useTranslation } from 'react-i18next';
import Section from '../ui/Section';
import { ArrowUpRight, MapPin, Mail } from 'lucide-react';

const InstContact = () => {
    const { t } = useTranslation();

  return (
    <div id="contact" className="w-full bg-[#C5A059] relative overflow-hidden border-t border-black/10">
        <Section className="text-black py-48 md:py-64">
            <div className="relative z-10 flex flex-col md:flex-row justify-between items-end gap-12">
                <div>
                    <p className="type-label text-white mb-6">{t('contact.label')}</p>
                    <h2 className="type-display text-5xl md:text-7xl">
                        {t('contact.title')}
                    </h2>
                </div>
                
                <div className="flex flex-col gap-8 md:text-right">
                    <a href={`mailto:${t('contact.email')}`} className="group flex items-center gap-4 md:justify-end text-2xl md:text-3xl hover:text-white transition-colors duration-300">
                        <span>{t('contact.email')}</span>
                        <ArrowUpRight className="w-6 h-6 md:w-8 md:h-8 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                    </a>
                    <div className="flex items-center gap-2 md:justify-end text-black/60">
                        <MapPin className="w-5 h-5" />
                        <span>{t('contact.location')}</span>
                    </div>
                </div>
            </div>
        </Section>
    </div>
  );
};

export default InstContact;
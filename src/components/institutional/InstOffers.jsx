import React from 'react';
import Section from '../ui/Section';
import Badge from '../ui/Badge';
import { useTranslation } from 'react-i18next';
import { Play } from 'lucide-react';

const InstOffers = () => {
    const { t } = useTranslation();

  return (
    <Section className="bg-white section-standard">
        <div className="mb-12">
            <Badge className="bg-black text-white mb-6">{t('offers.badge')}</Badge>
            <h2 className="type-h2 mb-4 text-black">{t('offers.title')}</h2>
            <p className="type-body text-gray-500">{t('offers.subtitle')}</p>
        </div>

        <div className="w-full aspect-video bg-gray-900 rounded-2xl overflow-hidden relative group cursor-pointer shadow-xl shadow-gray-200/40">
            <div className="absolute inset-0 flex items-center justify-center">
                 <div className="w-20 h-20 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center border border-white/20 group-hover:scale-110 transition-transform duration-300">
                     <Play className="w-8 h-8 text-white fill-current ml-1" />
                 </div>
            </div>
            <div className="absolute bottom-8 left-8 text-white">
                <p className="type-label mb-2 text-[#DFB275] border-none tracking-widest">FEATURED</p>
                <h3 className="type-h3">Quraysh Infrastructure Fund I</h3>
            </div>
        </div>
    </Section>
  );
};

export default InstOffers;

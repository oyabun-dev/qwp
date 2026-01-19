import React from 'react';
import Section from '../ui/Section';
import { useTranslation } from 'react-i18next';

import imgAg from '../../assets/images/portfolio/agriculture.png';
import imgEcom from '../../assets/images/portfolio/ecommerce.png';
import imgRamadan from '../../assets/images/portfolio/ramadan.jpg';
import imgVal from '../../assets/images/portfolio/valentines.png';

const images = {
    1: imgAg,
    2: imgEcom,
    3: imgRamadan,
    4: imgVal
};

const InstOffers = () => {
    const { t } = useTranslation();
    const items = t('offers.items', { returnObjects: true }) || [];

    return (
    <Section id="portfolio" className="bg-white section-standard">
        <div className="mb-12">
            <p className="type-label text-[#C5A059] mb-4">
                {t('offers.label')}
            </p>
            <h2 className="type-h2 mb-4 text-black">
                {t('offers.title')}
            </h2>
            <p className="type-body text-gray-500">
                {t('offers.subtitle')}
            </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-fr">
             {items.map((item, index) => (
                 <div 
                    key={item.id}
                    className={`
                        relative rounded-2xl overflow-hidden group cursor-pointer 
                        ${item.featured ? 'md:col-span-2 md:row-span-2 min-h-[400px] md:min-h-[600px]' : ''}
                        ${!item.featured && index !== 3 ? 'md:col-span-1 md:row-span-1 min-h-[290px]' : ''}
                        ${index === 3 ? 'md:col-span-3 md:row-span-1 min-h-[290px]' : ''}
                        shadow-lg hover:shadow-xl transition-all duration-500 bg-gray-100
                    `}
                 >
                     {/* Image Background */}
                     <div className="absolute inset-0 w-full h-full">
                        <img 
                            src={images[item.id]} 
                            alt={item.title} 
                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-colors duration-500" />
                     </div>

                     {/* Overlay Content */}
                     <div className="absolute inset-0 p-8 flex flex-col justify-end">
                         {item.featured && (
                             <div className="absolute top-8 left-8">
                                <p className="type-label text-[#DFB275] border-none tracking-widest bg-black/20 backdrop-blur-md px-3 py-1 rounded-full">{t('offers.featured')}</p>
                             </div>
                         )}

                         <div className={`transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300`}>
                             <h3 className="type-h3 mb-2 text-white">
                                 {item.title}
                             </h3>
                             <p className="type-body text-sm text-gray-200">
                                 {item.subtitle}
                             </p>
                         </div>
                     </div>
                 </div>
             ))}
        </div>
    </Section>
  );
};

export default InstOffers;

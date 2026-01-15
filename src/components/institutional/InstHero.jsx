import React from 'react';
import Section from '../ui/Section';
import Button from '../ui/Button';
import Badge from '../ui/Badge';
import { motion } from 'framer-motion';
import { useTranslation, Trans } from 'react-i18next';

const InstHero = () => {
  const { t } = useTranslation();

  return (
    <Section className="min-h-screen flex items-center bg-white text-black section-standard pt-32 lg:pt-48 relative overflow-hidden">
        {/* Abstract Gold Background Shape (Simulated) */}
        <div className="absolute top-0 right-0 w-[50vw] h-full bg-gradient-to-bl pointer-events-none blur-3xl opacity-50" />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center w-full z-10">
            <div className="flex flex-col items-start w-full">
                <motion.div 
                    initial={{ opacity: 0, y: 20 }} 
                    animate={{ opacity: 1, y: 0 }} 
                    transition={{ duration: 0.6 }}
                    className="mb-8"
                >
                    <Badge className="bg-gray-50 text-gray-500 border-gray-100">{t('hero.badge')}</Badge>
                </motion.div>

                <h1 className="type-display mb-10 text-black w-full">
                     <Trans i18nKey="hero.title" components={{ 
                        1: <span className="text-gray-400 block" /> 
                    }} />
                </h1>

                <p className="type-body text-gray-500 mb-12 font-medium max-w-xl leading-relaxed">
                    {t('hero.subtitle')}
                </p>

                <Button variant="brand" size="lg" className="bg-black text-white border-none hover:bg-gray-900 rounded-lg">
                    {t('hero.cta')}
                </Button>
            </div>
            
            {/* Right side placeholder for the gold/white abstract art */}
            <div className="relative h-[550px] w-full hidden lg:flex items-center justify-end -mr-24">
                 <div className="w-[600px] h-[550px] bg-white rounded-2xl flex items-center justify-center overflow-hidden">
                     <img src="/assets/hero-image.png" alt="Abstract Architecture" className="w-full h-full object-cover" />
                 </div>
            </div>
        </div>
    </Section>
  );
};

export default InstHero;

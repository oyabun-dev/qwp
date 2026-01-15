import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import Button from '../ui/Button';
import LanguageSelector from '../ui/LanguageSelector';

const InstHeader = () => {
    const { t, i18n } = useTranslation();
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
             setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <header className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-300 ${scrolled ? 'bg-white/95 backdrop-blur-md py-4 border-b border-gray-100 shadow-sm' : 'bg-transparent py-6'}`}>
            <div className="max-w-screen-2xl mx-auto px-6 md:px-12 lg:px-24 flex items-center justify-between">
                {/* Logo */}
                <div className="flex items-center gap-3">
                    <img src="/assets/quraysh-logo-gold.png" alt="Quraysh Logo" className="h-10 w-auto object-contain" />
                    <span className="font-heading font-bold text-xl tracking-widest text-black">QURAYSH</span>
                </div>

                {/* Desktop Navigation (Placeholder if needed later, for now just CTA) */}
                <div className="hidden md:flex items-center gap-8">
                     <nav className="flex gap-8 items-center">
                         <a href="#" className="type-label text-black hover:text-[#C5A059] transition-colors border-none">Manifesto</a>
                         <a href="#" className="type-label text-black hover:text-[#C5A059] transition-colors border-none">Divisions</a>
                         <a href="#" className="type-label text-black hover:text-[#C5A059] transition-colors border-none">Contact</a>
                         
                         {/* Language Switcher */}
                         <div className="border-l border-gray-200 pl-6 ml-4">
                            <LanguageSelector />
                         </div>
                     </nav>
                     <Button variant="brand" className="bg-black text-white px-6 py-2 text-xs rounded-lg hover:bg-gray-900 border-none">
                        {t('hero.cta')}
                     </Button>
                </div>
            </div>
        </header>
    );
};

export default InstHeader;

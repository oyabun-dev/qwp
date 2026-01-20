import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import Button from '../ui/Button';
import LanguageSelector from '../ui/LanguageSelector';
import { Menu, X } from 'lucide-react';
import { AnimatePresence } from 'framer-motion';

const InstHeader = () => {
    const { t, i18n } = useTranslation();
    const [scrolled, setScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
             setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Lock body scroll when menu is open
    useEffect(() => {
        if (mobileMenuOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
    }, [mobileMenuOpen]);

    const navLinks = [
        { href: "/#manifesto", label: t('nav.manifesto') },
        { href: "/#divisions", label: t('nav.divisions') },
        { href: "/#portfolio", label: t('nav.portfolio') },
        { href: "/team", label: t('nav.team') || 'Team' },
        { href: "/#contact", label: t('nav.contact') },
    ];

    return (
        <motion.header 
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-300 ${scrolled ? 'bg-white/95 backdrop-blur-md py-4 border-b border-gray-100 shadow-sm' : 'bg-transparent py-6'}`}
        >
            <div className="max-w-screen-2xl mx-auto px-6 md:px-12 lg:px-24 flex items-center justify-between">
                {/* Logo */}
                <Link to="/" className="flex items-center gap-3 hover:opacity-80 transition-opacity z-[110]">
                    <img src="/assets/quraysh-logo-gold.png" alt="Quraysh Logo" className="h-10 w-auto object-contain" />
                    <span className="font-heading font-bold text-xl tracking-widest text-black">QURAYSH</span>
                </Link>

                {/* Desktop Navigation */}
                <div className="hidden md:flex items-center gap-8">
                     <nav className="flex gap-8 items-center">
                         {navLinks.map((link) => (
                             <Link key={link.label} to={link.href} className="type-label text-black hover:text-[#C5A059] transition-colors border-none">
                                 {link.label}
                             </Link>
                         ))}
                         
                         {/* Language Switcher */}
                         <div className="border-l border-gray-200 pl-6 ml-4">
                            <LanguageSelector />
                         </div>
                     </nav>
                     <Button variant="brand" className="bg-black text-white px-6 py-2 text-xs rounded-lg hover:bg-gray-900 border-none">
                        {t('hero.cta')}
                     </Button>
                </div>

                {/* Mobile Actions (Language + Menu) */}
                <div className="flex md:hidden items-center gap-4 z-[110]">
                    <LanguageSelector />
                    <button 
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)} 
                        className="p-2 text-black"
                    >
                        {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
                    </button>
                </div>

                {/* Mobile Navigation Overlay */}
                <AnimatePresence>
                    {mobileMenuOpen && (
                        <motion.div 
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            transition={{ duration: 0.3 }}
                            className="fixed inset-0 bg-white z-[100] pt-32 px-6 flex flex-col items-start md:hidden"
                        >
                            <nav className="flex flex-col gap-8 w-full">
                                {navLinks.map((link) => (
                                    <Link 
                                        key={link.label} 
                                        to={link.href} 
                                        onClick={() => setMobileMenuOpen(false)}
                                        className="type-display text-4xl text-black hover:text-[#C5A059] transition-colors"
                                    >
                                        {link.label}
                                    </Link>
                                ))}
                                
                                <div className="h-[1px] w-full bg-gray-100 my-4" />
                                


                                <div className="mt-8">
                                    <Button variant="brand" className="w-full bg-black text-white px-6 py-4 rounded-lg hover:bg-gray-900 border-none text-lg">
                                        {t('hero.cta')}
                                    </Button>
                                </div>
                            </nav>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </motion.header>
    );
};

export default InstHeader;

import React, { useState, useRef, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

const Flags = {
    fr: (
        <svg viewBox="0 0 3 2" className="w-5 h-5 rounded-full object-cover shadow-sm border border-gray-100">
            <rect width="3" height="2" fill="#ED2939"/>
            <rect width="2" height="2" fill="#fff"/>
            <rect width="1" height="2" fill="#002395"/>
        </svg>
    ),
    en: (
        <svg viewBox="0 0 60 30" className="w-5 h-5 rounded-full object-cover shadow-sm border border-gray-100">
            <clipPath id="s">
                <path d="M0,0 v30 h60 v-30 z"/>
            </clipPath>
            <clipPath id="t">
                <path d="M30,15 h30 v15 z v15 h-30 z h-30 v-15 z v-15 h30 z"/>
            </clipPath>
            <g clipPath="url(#s)">
                <path d="M0,0 v30 h60 v-30 z" fill="#012169"/>
                <path d="M0,0 L60,30 M60,0 L0,30" stroke="#fff" strokeWidth="6"/>
                <path d="M0,0 L60,30 M60,0 L0,30" clipPath="url(#t)" stroke="#C8102E" strokeWidth="4"/>
                <path d="M30,0 v30 M0,15 h60" stroke="#fff" strokeWidth="10"/>
                <path d="M30,0 v30 M0,15 h60" stroke="#C8102E" strokeWidth="6"/>
            </g>
        </svg>
    )
};

const LanguageSelector = () => {
    const { i18n } = useTranslation();
    const [isOpen, setIsOpen] = useState(false);
    const dropdownRef = useRef(null);

    const currentLang = i18n.language;

    const languages = [
        { code: 'en', label: 'English', flag: Flags.en },
        { code: 'fr', label: 'Français', flag: Flags.fr }
    ];

    const currentFlag = languages.find(l => l.code === currentLang)?.flag || Flags.en;

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setIsOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    const handleLanguageChange = (langCode) => {
        i18n.changeLanguage(langCode);
        setIsOpen(false);
    };

    return (
        <div className="relative" ref={dropdownRef}>
            <button 
                onClick={() => setIsOpen(!isOpen)}
                className="flex items-center gap-2 px-3 py-1.5 rounded-full hover:bg-gray-50 transition-colors border border-transparent hover:border-gray-100"
            >
                {currentFlag}
                <ChevronDown className={`w-3 h-3 text-gray-400 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} />
            </button>

            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: 10, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 10, scale: 0.95 }}
                        transition={{ duration: 0.2 }}
                        className="absolute top-full right-0 mt-2 w-40 bg-white rounded-xl shadow-xl border border-gray-100 py-2 z-50 overflow-hidden"
                    >
                        {languages.map((lang) => (
                            <button
                                key={lang.code}
                                onClick={() => handleLanguageChange(lang.code)}
                                className={`w-full flex items-center gap-3 px-4 py-3 text-sm hover:bg-gray-50 transition-colors ${currentLang === lang.code ? 'bg-gray-50/50' : ''}`}
                            >
                                {lang.flag}
                                <span className={`font-medium ${currentLang === lang.code ? 'text-black' : 'text-gray-500'}`}>
                                    {lang.label}
                                </span>
                                {currentLang === lang.code && (
                                    <div className="ml-auto w-1.5 h-1.5 rounded-full bg-[#C5A059]" />
                                )}
                            </button>
                        ))}
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default LanguageSelector;

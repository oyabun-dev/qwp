import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Button from '../ui/Button';

const InstNavbar = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      // Handle visibility
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
      
      // Handle background
      setIsScrolled(currentScrollY > 50);
      
      setLastScrollY(currentScrollY);
    };
    
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  return (
    <AnimatePresence>
      <motion.nav
        initial={{ y: 0 }}
        animate={{ 
            y: isVisible ? 0 : -100,
            backgroundColor: isScrolled ? 'rgba(255, 255, 255, 0.8)' : 'transparent',
            backdropFilter: isScrolled ? 'blur(12px)' : 'blur(0px)',
        }}
        transition={{ duration: 0.4, ease: [0.76, 0, 0.24, 1] }}
        className="fixed top-0 w-full z-50 h-24 flex items-center border-b border-transparent transition-colors duration-300"
      >
         <div className="w-full max-w-[1440px] mx-auto px-6 md:px-10 flex justify-between items-center">
             {/* Logo */}
             <div className="flex items-center gap-2 cursor-pointer">
                <span className="w-8 h-8 bg-black rounded-lg flex items-center justify-center text-white font-bold text-lg">Q</span>
                <span className="font-bold text-2xl tracking-tight text-[var(--text-primary)] font-sans">
                    Quraysh
                </span>
             </div>

             {/* Center Links - Desktop */}
             <div className="hidden md:flex items-center gap-8">
                 {['Vision', 'Divisions', 'Portfolio', 'Governance'].map((item) => (
                     <a 
                        key={item} 
                        href={`#${item.toLowerCase()}`} 
                        className="text-sm font-medium text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors"
                    >
                        {item}
                     </a>
                 ))}
             </div>

             {/* Right Action */}
             <div className="flex items-center gap-4">
                <Button variant="primary" size="sm" icon={false} className="hidden md:inline-flex">
                    Contact
                </Button>
                
                {/* Mobile Menu Trigger */}
                <div className="md:hidden w-10 h-10 rounded-full border border-[var(--border-medium)] flex flex-col gap-1 items-center justify-center">
                    <span className="w-5 h-0.5 bg-black"></span>
                    <span className="w-5 h-0.5 bg-black"></span>
                </div>
             </div>
         </div>
      </motion.nav>
    </AnimatePresence>
  );
};

export default InstNavbar;

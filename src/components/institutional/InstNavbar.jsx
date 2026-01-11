import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Button from '../ui/Button';

const InstNavbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
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

  // Prevent scroll when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isMenuOpen]);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const menuVariants = {
    closed: {
        opacity: 0,
        y: "-100%",
        transition: { duration: 0.5, ease: [0.76, 0, 0.24, 1] }
    },
    open: {
        opacity: 1,
        y: "0%",
        transition: { duration: 0.5, ease: [0.76, 0, 0.24, 1] }
    }
  };

  const linkVariants = {
    closed: { y: 20, opacity: 0 },
    open: (i) => ({ 
        y: 0, 
        opacity: 1, 
        transition: { delay: 0.1 + (i * 0.1), duration: 0.4 } 
    })
  };

  return (
    <>
    <AnimatePresence>
      <motion.nav
        initial={{ y: 0 }}
        animate={{ 
            y: isVisible ? 0 : -100,
            backgroundColor: isScrolled || isMenuOpen ? 'rgba(255, 255, 255, 0.95)' : 'transparent',
            backdropFilter: isScrolled || isMenuOpen ? 'blur(12px)' : 'blur(0px)',
        }}
        transition={{ duration: 0.4, ease: [0.76, 0, 0.24, 1] }}
        className="fixed top-0 w-full z-50 h-24 flex items-center border-b border-transparent transition-colors duration-300"
      >
         <div className="w-full max-w-[1440px] mx-auto px-6 md:px-16 flex justify-between items-center relative z-50">
             {/* Logo */}
             <div className="flex items-center gap-2 cursor-pointer z-50">
                <img 
                    src="/assets/logo.png" 
                    alt="Quraysh Logo" 
                    className="h-16 w-auto object-contain" 
                    onError={(e) => {
                        e.target.onerror = null;
                        e.target.style.display = 'none';
                        e.target.nextSibling.style.display = 'flex';
                    }}
                />
                <span className="hidden w-8 h-8 bg-black rounded-lg items-center justify-center text-white font-bold text-lg">Q</span>
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
                <Button variant="brand" size="sm" icon={false} className="hidden md:inline-flex shadow-lg shadow-yellow-900/10">
                    Contact
                </Button>
                
                {/* Mobile Menu Trigger */}
                <button 
                    onClick={toggleMenu}
                    className="md:hidden w-10 h-10 rounded-full border border-[var(--border-medium)] flex flex-col gap-1.5 items-center justify-center relative z-50 hover:bg-gray-100 transition-colors"
                >
                    <motion.span 
                        animate={isMenuOpen ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
                        className="w-5 h-0.5 bg-black block"
                    />
                    <motion.span 
                        animate={isMenuOpen ? { opacity: 0 } : { opacity: 1 }}
                        className="w-5 h-0.5 bg-black block"
                    />
                    <motion.span 
                        animate={isMenuOpen ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }}
                        className="w-5 h-0.5 bg-black block"
                    />
                </button>
             </div>
         </div>

         {/* Mobile Full Screen Menu */}
         <motion.div
            variants={menuVariants}
            initial="closed"
            animate={isMenuOpen ? "open" : "closed"}
            className="fixed inset-0 bg-[var(--bg-core)] z-40 flex flex-col justify-center items-center md:hidden"
         >
             <div className="flex flex-col items-center gap-8">
                 {['Vision', 'Divisions', 'Portfolio', 'Governance'].map((item, i) => (
                     <motion.a 
                        key={item}
                        custom={i}
                        variants={linkVariants}
                        href={`#${item.toLowerCase()}`} 
                        onClick={() => setIsMenuOpen(false)}
                        className="text-4xl font-medium text-[var(--text-primary)] hover:text-gray-500 transition-colors"
                     >
                        {item}
                     </motion.a>
                 ))}
                 <motion.div 
                    custom={4}
                    variants={linkVariants}
                    className="mt-8"
                 >
                     <Button variant="brand" size="lg" onClick={() => setIsMenuOpen(false)}>
                        Contact Us
                     </Button>
                 </motion.div>
             </div>
         </motion.div>
      </motion.nav>
    </AnimatePresence>
    </>
  );
};

export default InstNavbar;

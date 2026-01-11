import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ArrowRight } from 'lucide-react';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Structure', href: '#structure' },
    { name: 'Approach', href: '#approach' },
    { name: 'Companies', href: '#portfolio' },
    { name: 'Leadership', href: '#leadership' },
    { name: 'Contact', href: '#contact' }
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-black/80 backdrop-blur-md border-b border-white/5 py-4' : 'bg-transparent py-6'
      }`}
    >
      <div className="container flex items-center justify-between">
        <a href="#" className="z-50 group">
          <h1 className="font-heading text-2xl tracking-widest font-bold text-white group-hover:text-[var(--accent-gold)] transition-colors duration-300">
            QURAYSH
          </h1>
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm uppercase tracking-widest text-[var(--text-secondary)] hover:text-white transition-colors duration-300 relative group"
            >
              {link.name}
              <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-[var(--accent-gold)] transition-all duration-300 group-hover:w-full"></span>
            </a>
          ))}
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden z-50 text-white"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Mobile Menu Overlay */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, x: '100%' }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: '100%' }}
              transition={{ duration: 0.5, type: "spring", damping: 20 }}
              className="fixed inset-0 bg-black z-40 flex flex-col items-center justify-center space-y-8 md:hidden"
            >
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="font-heading text-3xl text-white hover:text-[var(--accent-gold)] transition-colors"
                >
                  {link.name}
                </a>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
};

const Footer = () => {
  return (
    <footer className="bg-[var(--bg-tertiary)] pt-20 pb-10 border-t border-white/5">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="md:col-span-2">
            <h2 className="font-heading text-2xl tracking-widest font-bold text-white mb-6">QURAYSH</h2>
            <p className="text-[var(--text-secondary)] max-w-sm mb-8 leading-relaxed">
              Orchestrating excellence across industries. Building legacy through discipline, innovation, and strategic dominance.
            </p>
          </div>
          
          <div>
            <h3 className="text-sm font-bold uppercase tracking-widest text-white mb-6">Explore</h3>
            <ul className="space-y-4">
              {['About', 'Structure', 'Portfolio', 'Leadership'].map((item) => (
                <li key={item}>
                  <a href="#" className="text-[var(--text-secondary)] hover:text-[var(--accent-gold)] transition-colors text-sm">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-bold uppercase tracking-widest text-white mb-6">Connect</h3>
            <ul className="space-y-4">
              <li>
                <a href="#" className="text-[var(--text-secondary)] hover:text-[var(--accent-gold)] transition-colors text-sm flex items-center group">
                  Contact Us <ArrowRight size={14} className="ml-2 group-hover:translate-x-1 transition-transform" />
                </a>
              </li>
              <li>
                <a href="#" className="text-[var(--text-secondary)] hover:text-[var(--accent-gold)] transition-colors text-sm">
                  LinkedIn
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-[var(--text-muted)] uppercase tracking-wider">
          <p>&copy; {new Date().getFullYear()} Quraysh Group. All Rights Reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

const Layout = ({ children }) => {
  return (
    <div className="min-h-screen bg-[var(--bg-primary)] text-[var(--text-primary)] font-body selection:bg-[var(--accent-gold)] selection:text-black">
      <Navbar />
      <main className="w-full">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;

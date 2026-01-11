import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowDown } from 'lucide-react';

const Hero = () => {
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end start"]
    });

    const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
    const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

    return (
        <section ref={containerRef} id="hero" className="relative h-screen flex items-center justify-center overflow-hidden bg-[var(--bg-primary)]">
            {/* Animated Background */}
            <div className="absolute inset-0 z-0 opacity-40">
                <div className="absolute top-[-20%] left-[-10%] w-[60vw] h-[60vw] rounded-full bg-[radial-gradient(circle,rgba(198,168,124,0.15)_0%,transparent_70%)] blur-[100px] animate-pulse-slow"></div>
                <div className="absolute bottom-[-20%] right-[-10%] w-[50vw] h-[50vw] rounded-full bg-[radial-gradient(circle,rgba(255,255,255,0.05)_0%,transparent_70%)] blur-[80px]"></div>
            </div>

            {/* Grid Overlay */}
            <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10 z-0 pointer-events-none"></div>
            <div className="absolute inset-0 z-0" style={{ backgroundImage: 'linear-gradient(rgba(255, 255, 255, 0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.03) 1px, transparent 1px)', backgroundSize: '100px 100px' }}></div>

            {/* Content */}
            <motion.div 
                style={{ y, opacity }}
                className="relative z-10 container text-center"
            >
                <div className="overflow-hidden mb-6">
                    <motion.h2 
                        initial={{ y: 100, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                        className="text-[var(--accent-gold)] uppercase tracking-[0.3em] text-sm font-medium"
                    >
                        Strategic Holding Co.
                    </motion.h2>
                </div>

                <div className="overflow-hidden max-w-5xl mx-auto">
                    <motion.h1 
                        initial={{ y: 100, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                        className="font-heading text-6xl md:text-8xl lg:text-9xl font-semibold leading-tight mb-8" /* mb-8 = 32px */
                    >
                        Power in <span className="italic font-light text-[var(--text-secondary)]">Strategy.</span><br />
                        Legacy in <span className="italic font-light text-[var(--text-secondary)]">Order.</span>
                    </motion.h1>
                </div>

                <motion.p 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                    className="text-[var(--text-secondary)] text-lg md:text-xl max-w-2xl mx-auto mb-12 leading-relaxed"
                >
                    We orchestrate industries, build dominant systems, and cultivate long-term value across commerce, technology, and operations.
                </motion.p>

                <motion.div 
                    initial={{ opacity: 0, y: 32 }} /* 32px */
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.8 }}
                    className="flex flex-col md:flex-row items-center justify-center gap-6" /* gap-6 = 24px */
                >
                    <a href="#structure" className="px-8 py-4 bg-[var(--text-primary)] text-black font-medium tracking-wide hover:bg-[var(--accent-gold)] transition-colors duration-300 w-full md:w-auto">
                        Explore Our Group
                    </a>
                    <a href="#about" className="px-8 py-4 border border-[var(--border-strong)] text-[var(--text-primary)] font-medium tracking-wide hover:border-[var(--accent-gold)] hover:text-[var(--accent-gold)] transition-all duration-300 w-full md:w-auto">
                        The Vision
                    </a>
                </motion.div>
            </motion.div>

            {/* Scroll Indicator */}
            <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5, duration: 1 }}
                className="absolute bottom-10 left-1/2 -translate-x-1/2 text-[var(--text-muted)] flex flex-col items-center gap-2"
            >
                <span className="text-[10px] uppercase tracking-widest">Scroll</span>
                <ArrowDown size={16} className="animate-bounce" />
            </motion.div>
        </section>
    );
};

export default Hero;

import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const HeroSection = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  });

  const yBackground = useTransform(scrollYProgress, [0, 1], ["0%", "80%"]);
  const opacityHero = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section ref={ref} className="relative w-full min-h-[80vh] flex flex-col justify-center items-start pt-32 pb-20 px-4 md:px-12 overflow-hidden">
        {/* Abstract Background Elements */}
        <motion.div style={{ y: yBackground, opacity: opacityHero }} className="absolute inset-0 bg-black">
             <div className="absolute -right-[10%] top-[0%] w-[800px] h-[800px] bg-white/5 rounded-full blur-[150px] pointer-events-none"></div>
             <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-black via-transparent to-black pointer-events-none"></div>
        </motion.div>

        <div className="container mx-auto relative z-10 max-w-[1400px]">
             {/* Tagline */}
            <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="mb-6 flex items-center gap-4"
            >
                <div className="h-[1px] w-12 bg-[var(--accent-gold)]"></div>
                <span className="text-[var(--accent-gold)] uppercase tracking-[0.3em] text-sm font-bold">Strategic Holding</span>
            </motion.div>

            {/* Headline */}
            <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.1 }}
                className="font-heading text-6xl md:text-8xl lg:text-9xl font-bold tracking-tighter text-white mb-8 leading-[0.9]"
            >
                Power in <br />
                <span className="text-white/40">Strategy.</span>
            </motion.h1>
            
            {/* Subhead */}
            <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-[var(--text-secondary)] text-xl md:text-2xl max-w-2xl mb-12 leading-relaxed font-light"
            >
                A multi-sector authority orchestrating businesses, systems, and markets to build generational dominance.
            </motion.p>

            {/* CTA */}
            <motion.div
                 initial={{ opacity: 0, y: 20 }}
                 animate={{ opacity: 1, y: 0 }}
                 transition={{ duration: 0.8, delay: 0.3 }}
            >
                <button 
                    className="group relative px-8 py-4 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full text-white font-medium tracking-wide hover:bg-white hover:text-black transition-all duration-500 overflow-hidden"
                >
                    <span className="relative z-10 flex items-center gap-3">
                        Explore the Group <ArrowRight size={18} />
                    </span>
                    <div className="absolute inset-0 bg-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-500 z-0"></div>
                </button>
            </motion.div>
        </div>
    </section>
  );
};

export default HeroSection;

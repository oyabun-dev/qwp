import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-10%" });

  return (
    <section id="about" className="py-24 md:py-32 bg-[var(--bg-secondary)] relative border-b border-white/5"> {/* py-24=96px, py-32=128px */ }
      <div className="container" ref={ref}>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24"> {/* gap-16=64px, gap-24=96px */}
          {/* Sticky Heading */}
          <div className="lg:col-span-4 relative">
            <div className="lg:sticky lg:top-32"> {/* top-32=128px */}
              <motion.h2 
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="font-heading text-4xl md:text-5xl font-bold mb-6 text-[var(--accent-gold)]"
              >
                The Central Authority
              </motion.h2>
              <div className="h-1 w-20 bg-[var(--text-muted)] mb-8"></div>
            </div>
          </div>

          {/* Content */}
          <div className="lg:col-span-8 space-y-12">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            >
              <h3 className="text-2xl md:text-3xl font-light leading-relaxed mb-6 text-[var(--text-primary)]">
                Quraysh is not just a holding company. It is a <span className="text-white font-medium">system of dominance</span> designed to orchestrate industries and build generational legacy.
              </h3>
              <p className="text-[var(--text-secondary)] text-lg leading-relaxed">
                We operate at the intersection of capital, technology, and operational discipline. Our mandate is clear: identify high-value sectors, impose structural order, and drive relentless growth through centralized strategy and decentralized execution.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
              className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-8 border-t border-white/5"
            >
              <div>
                <h4 className="text-[var(--accent-gold)] uppercase tracking-widest text-sm font-bold mb-4">Vision</h4>
                <p className="text-[var(--text-secondary)]">
                  To build an immutable infrastructure of businesses that define the future of commerce and industry.
                </p>
              </div>
              <div>
                <h4 className="text-[var(--accent-gold)] uppercase tracking-widest text-sm font-bold mb-4">Mission</h4>
                <p className="text-[var(--text-secondary)]">
                  Execute with precision. Scale with discipline. Govern with absolute clarity.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

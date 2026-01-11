import React from 'react';
import { motion } from 'framer-motion';
import Section from '../ui/Section';
import Badge from '../ui/Badge';

const InstAbout = () => {
  return (
    <Section id="about" className="bg-[var(--bg-core)]">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24">
            
            {/* Left Col - Title */}
            <div>
                <Badge className="mb-8">Who We Are</Badge>
                <div className="sticky top-32">
                     <motion.h2
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="type-h1 text-[var(--text-primary)] mb-8"
                     >
                        Curating <br />
                        Excellence.
                     </motion.h2>
                </div>
            </div>

            {/* Right Col - Content */}
            <div className="space-y-16">
                {[
                    {
                        title: "The Vision",
                        text: "Quraysh was founded on the belief that true value lies at the intersection of tradition and innovation. We identify high-potential sectors and build institutions that define them."
                    },
                    {
                        title: "Our Mandate",
                        text: "We don't just invest; we operate. Our mandate is to bring structural discipline, digital transformation, and global standards to local markets."
                    },
                    {
                        title: "The Collective",
                        text: "We are a collective of strategists, engineers, and operators working in unison to solve complex infrastructure challenges."
                    }
                ].map((item, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 }}
                    >
                        <h3 className="type-h2 mb-4 text-[var(--text-primary)]">{item.title}</h3>
                        <p className="type-body text-[var(--text-secondary)]">{item.text}</p>
                        <div className="h-[1px] w-full bg-[var(--border-light)] mt-12" />
                    </motion.div>
                ))}
            </div>
        </div>
    </Section>
  );
};

export default InstAbout;

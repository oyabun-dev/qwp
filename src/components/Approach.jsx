import React from 'react';
import { motion } from 'framer-motion';
import { Target, Layers, Hourglass } from 'lucide-react';

const PrincipleCard = ({ icon: Icon, title, description, index }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6, delay: index * 0.2 }}
    className="group p-10 border border-[var(--border-strong)] bg-[var(--bg-secondary)] hover:bg-[var(--bg-tertiary)] hover:border-[var(--accent-gold)] transition-all duration-500"
  >
    <div className="mb-8 text-[var(--text-secondary)] group-hover:text-[var(--accent-gold)] transition-colors duration-500">
        <Icon size={40} strokeWidth={1} />
    </div>
    <h3 className="font-heading text-2xl font-bold mb-4 text-white">{title}</h3>
    <p className="text-[var(--text-secondary)] leading-relaxed group-hover:text-[var(--text-primary)] transition-colors duration-500">
        {description}
    </p>
  </motion.div>
);

const Approach = () => {
  const principles = [
    {
      icon: Target,
      title: "Absolute Discipline",
      description: "We do not react to markets; we shape them. Our operations are governed by rigorous standards that prioritize precision over speed, ensuring error-free execution at scale."
    },
    {
      icon: Layers,
      title: "Systemic Control",
      description: "Success is not accidental. We build self-reinforcing ecosystems where commerce, technology, and capital integrate to create insurmountable competitive moats."
    },
    {
      icon: Hourglass,
      title: "Generational Horizon",
      description: "We build for the next century, not the next quarter. Our decisions are anchored in long-term value creation, ignoring fleeting trends in favor of enduring structural dominance."
    }
  ];

  return (
    <section id="approach" className="py-24 md:py-32 bg-[var(--bg-secondary)] border-b border-white/5">
      <div className="container">
        <div className="mb-24 md:flex items-end justify-between">
            <div className="max-w-2xl">
                <h2 className="font-heading text-4xl md:text-5xl font-bold mb-6 text-white">Our Approach</h2>
                <p className="text-[var(--text-secondary)] text-lg">
                    Methodology is what separates the temporary from the timeless.
                </p>
            </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {principles.map((p, i) => (
                <PrincipleCard key={i} {...p} index={i} />
            ))}
        </div>
      </div>
    </section>
  );
};

export default Approach;

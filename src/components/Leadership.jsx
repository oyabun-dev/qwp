import React from 'react';
import { motion } from 'framer-motion';

const LeaderProfile = ({ name, title, bio, delay }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8, delay }}
    className="group"
  >
    <div className="aspect-[3/4] bg-[var(--bg-tertiary)] mb-6 relative overflow-hidden grayscale hover:grayscale-0 transition-all duration-700">
        {/* Placeholder for image */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
        <div className="absolute bottom-6 left-6 right-6">
            <h3 className="font-heading text-2xl text-white mb-1">{name}</h3>
            <p className="text-[var(--accent-gold)] text-sm uppercase tracking-widest">{title}</p>
        </div>
    </div>
    <div className="border-t border-[var(--border-strong)] pt-6 group-hover:border-[var(--accent-gold)] transition-colors duration-500">
        <p className="text-[var(--text-secondary)] text-sm leading-relaxed">
            {bio}
        </p>
    </div>
  </motion.div>
);

const Leadership = () => {
  const leaders = [
    {
      name: "Dr. Al-Hassan",
      title: "Group Chairman",
      bio: "The architect of the Quraysh philosophy. With over 40 years of experience in global markets, he defines the long-term strategic trajectory of the conglomerate."
    },
    {
      name: "Sarah Jenkins",
      title: "Chief Executive Officer",
      bio: "Executing the vision with ruthless efficiency. Formerly at top-tier investment banks, she brings rigorous operational discipline to every subsidiary."
    },
    {
      name: "Marcus Thorne",
      title: "Chief Investment Officer",
      bio: "Responsible for capital allocation and asset management. His mandate is simple: identify value, acquire leverage, and maximize returns."
    }
  ];

  return (
    <section id="leadership" className="py-24 md:py-32 bg-[var(--bg-secondary)] border-b border-white/5">
      <div className="container">
        <div className="mb-24 text-center max-w-3xl mx-auto">
            <h2 className="font-heading text-4xl font-bold text-white mb-6">Governance & Leadership</h2>
            <p className="text-[var(--text-secondary)] text-lg">
                Guided by a council of industry veterans committed to stability, integrity, and absolute performance.
            </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {leaders.map((leader, i) => (
                <LeaderProfile key={i} {...leader} delay={i * 0.2} />
            ))}
        </div>
      </div>
    </section>
  );
};

export default Leadership;

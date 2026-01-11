import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

const PortfolioItem = ({ name, sector, description, imageGradient, index }) => (
    <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: index * 0.1 }}
        className="group relative h-[400px] md:h-[500px] overflow-hidden border border-[var(--border-subtle)]"
    >
        {/* Background Image / Gradient */}
        <div className={`absolute inset-0 bg-gradient-to-br ${imageGradient} opacity-60 group-hover:opacity-80 group-hover:scale-105 transition-all duration-700`}></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent"></div>

        {/* Content */}
        <div className="absolute inset-0 p-8 flex flex-col justify-end">
             <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                <p className="text-[var(--accent-gold)] text-xs uppercase tracking-widest mb-2 font-bold">{sector}</p>
                <div className="flex items-base justify-between">
                    <h3 className="font-heading text-4xl text-white mb-4">{name}</h3>
                    <motion.div 
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }} // Simple view trigger, or could use group-hover but handled by CSS mostly
                        className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-x-[-10px] group-hover:translate-x-0"
                    >
                        <ArrowUpRight className="text-white" />
                    </motion.div>
                </div>
                <p className="text-[var(--text-secondary)] text-sm md:text-base max-w-sm line-clamp-2 group-hover:line-clamp-none group-hover:text-white transition-colors duration-300">
                    {description}
                </p>
             </div>
        </div>
    </motion.div>
);

const Portfolio = () => {
    const companies = [
        {
            name: "Quraysh Commerce",
            sector: "Retail & Distribution",
            description: "A lattice of high-end retail chains and logistical networks dominating the luxury consumer market.",
            imageGradient: "from-zinc-800 to-zinc-600"
        },
        {
            name: "Nexus Systems",
            sector: "Technology & AI",
            description: "Building the cognitive infrastructure for tomorrow’s enterprises through sovereign cloud and predictive analytics.",
            imageGradient: "from-blue-900/40 to-slate-800"
        },
        {
            name: "Atlas Capital",
            sector: "Investment & Banking",
            description: "Strategic capital deployment engine focused on acquiring and optimizing distressed industrial assets.",
            imageGradient: "from-[var(--accent-gold-dim)]/30 to-zinc-900"
        },
        {
            name: "Meridian Properties",
            sector: "Real Estate Development",
            description: "Developing iconic commercial districts that serve as physical manifestations of corporate power.",
            imageGradient: "from-stone-800 to-stone-600"
        }
    ];

  return (
    <section id="portfolio" className="py-24 md:py-32 bg-[var(--bg-primary)]">
      <div className="container">
        <div className="flex items-center justify-between mb-16"> {/* mb-16=64px */}
            <h2 className="font-heading text-4xl font-bold text-white">Our Companies</h2>
            <a href="#" className="hidden md:flex items-center text-sm uppercase tracking-widest hover:text-[var(--accent-gold)] transition-colors">
                View All Holdings <ArrowUpRight size={16} className="ml-2" />
            </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {companies.map((company, i) => (
                <PortfolioItem key={i} {...company} index={i} />
            ))}
        </div>
        
        <div className="mt-12 md:hidden text-center">
            <a href="#" className="inline-flex items-center text-sm uppercase tracking-widest hover:text-[var(--accent-gold)] transition-colors">
                View All Holdings <ArrowUpRight size={16} className="ml-2" />
            </a>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;

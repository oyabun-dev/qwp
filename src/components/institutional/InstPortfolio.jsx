import React from 'react';
import Section from '../ui/Section';
import Card from '../ui/Card';
import Badge from '../ui/Badge';
import Button from '../ui/Button';

const partners = [
    "Street",
    "Orvynlab",
    "Black Wolf FX",
    "At Tijani Design",
    "Wilane Creation",
    "Ndoye Electrique"
];

const initiatives = [
    {
        title: "Ramadan Commerce Initiative",
        status: "Active",
        desc: "High-velocity seasonal commerce operation focused on essential goods.",
        variant: "black",
        className: "md:col-span-2 md:row-span-2 min-h-[400px]"
    },
    {
        title: "Seasonal E-commerce Operations",
        status: "Scaling",
        desc: "Rapid deployment e-commerce structures for specific market windows.",
        variant: "white",
        className: "md:col-span-1 md:row-span-1 min-h-[200px]"
    },
    {
        title: "Digital Platforms",
        status: "Upcoming",
        desc: "Infrastructure for decentralized trade and services.",
        variant: "glass",
        className: "md:col-span-1 md:row-span-1 min-h-[200px]"
    }
];

const InstPortfolio = () => {
  return (
    <Section id="portfolio" className="bg-[var(--bg-core)]">
        
        {/* PARTNER ENTITIES */}
        <div className="mb-32">
            <div className="mb-12">
                <Badge className="mb-4">Partner Entities</Badge>
                <p className="type-body text-[var(--text-secondary)] max-w-2xl">
                    Independent entities contributing expertise and execution within Quraysh-led initiatives.
                </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
                {partners.map((partner, i) => (
                    <div key={i} className="p-6 border border-[var(--border-light)] rounded-xl flex items-center justify-center text-center hover:border-[var(--border-dark)] transition-colors duration-300">
                        <span className="font-medium text-sm text-[var(--text-primary)]">{partner}</span>
                    </div>
                ))}
            </div>
        </div>

        {/* ACTIVE INITIATIVES - BENTO GRID */}
        <div>
            <div className="mb-12">
                <Badge className="mb-4 bg-black text-white border-black">Active Initiatives</Badge>
                <h2 className="type-h2 mb-4">Execution Vehicles.</h2>
                <p className="type-body text-[var(--text-secondary)] max-w-2xl text-sm">
                    Initiatives are temporary or permanent structures deployed to capture specific market value.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 grid-rows-2 gap-6 h-auto md:h-[600px]">
                {initiatives.map((init, i) => (
                    <Card 
                        key={i} 
                        variant={init.variant} 
                        className={`flex flex-col justify-between ${init.className}`}
                    >
                        <div className="flex justify-between items-start mb-6">
                            <span className={`text-[10px] font-bold uppercase tracking-widest ${init.variant === 'black' ? 'text-gray-400' : 'text-[var(--text-tertiary)]'}`}>
                                {init.status}
                            </span>
                            {init.variant === 'black' && (
                                <div className="w-2 h-2 rounded-full bg-[var(--color-brand)] animate-pulse"></div>
                            )}
                        </div>

                        <div>
                            <h3 className={`type-h2 mb-4 ${init.variant === 'black' ? 'text-white' : ''}`}>
                                {init.title}
                            </h3>
                            <p className={`text-sm leading-relaxed ${init.variant === 'black' ? 'text-gray-400' : 'text-[var(--text-secondary)]'}`}>
                                {init.desc}
                            </p>
                        </div>
                    </Card>
                ))}
            </div>
        </div>

    </Section>
  );
};

export default InstPortfolio;

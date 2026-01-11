import React from 'react';
import Section from '../ui/Section';
import Card from '../ui/Card';
import Badge from '../ui/Badge';
import Button from '../ui/Button';

const InstPortfolio = () => {
  return (
    <Section id="portfolio" className="bg-[var(--bg-core)]">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div>
                <Badge className="mb-4">Portfolio</Badge>
                <h2 className="type-h1 leading-tight">Featured <br/> Ventures.</h2>
            </div>
            <div className="max-w-md">
                 <p className="type-body text-[var(--text-secondary)] mb-6">
                    A curated selection of our most impactful operating companies and strategic assets.
                 </p>
                 <Button variant="secondary" icon={true}>View All Holdings</Button>
            </div>
        </div>

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 grid-rows-2 gap-6 h-auto md:h-[800px]">
            
            {/* Primary Highlight - Large Card */}
            <Card variant="black" className="md:col-span-2 md:row-span-2 relative group p-0">
                <div className="absolute inset-0 bg-gray-900">
                    <img 
                        src="/assets/satin_carbon_minimalist_1768079456453.png" 
                        alt="Project Alpha" 
                        className="w-full h-full object-cover opacity-60 group-hover:opacity-40 transition-opacity duration-700"
                    />
                </div>
                <div className="relative z-10 p-10 h-full flex flex-col justify-end">
                    <Badge className="bg-white/10 text-white border-white/20 mb-4 self-start">Flagship</Badge>
                    <h3 className="type-display text-4xl md:text-6xl text-white mb-4">Project: Skyline</h3>
                    <p className="text-gray-300 max-w-lg text-lg mb-8">
                        Redefining urban living in West Africa through sustainable, high-density mixed-use developments.
                    </p>
                    <Button variant="secondary" className="self-start border-white/20 text-white hover:bg-white hover:text-black">
                        Case Study
                    </Button>
                </div>
            </Card>

            {/* Secondary Card 1 */}
            <Card variant="white" className="p-8 flex flex-col justify-between group hover:border-black/20 transition-colors">
                <div className="w-12 h-12 bg-[var(--bg-subtle)] rounded-full flex items-center justify-center text-2xl group-hover:bg-black group-hover:text-white transition-colors duration-300">
                    ↗
                </div>
                <div>
                     <h4 className="type-h2 mb-2">FinTech Core</h4>
                     <p className="text-sm text-[var(--text-secondary)]">Digital banking infrastructure for the unbanked.</p>
                </div>
            </Card>

            {/* Secondary Card 2 */}
            <Card variant="glass" className="relative p-8 flex flex-col justify-between overflow-hidden">
                 <div className="absolute -right-10 -top-10 w-40 h-40 bg-gradient-to-br from-gray-200 to-gray-400 rounded-full blur-3xl opacity-50"></div>
                 <div>
                    <Badge className="mb-4">New Acquisition</Badge>
                    <h4 className="type-h2 mb-2">Atlas Logistics</h4>
                    <p className="text-sm text-[var(--text-secondary)]">Regional freight optimization network.</p>
                 </div>
                 <div className="mt-8">
                     <span className="text-xs font-bold uppercase tracking-widest text-[var(--text-tertiary)]">Status: Scaling</span>
                 </div>
            </Card>

        </div>
    </Section>
  );
};

export default InstPortfolio;

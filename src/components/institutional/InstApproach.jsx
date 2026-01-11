import React from 'react';
import Section from '../ui/Section';
import Card from '../ui/Card';
import Badge from '../ui/Badge';
import { motion } from 'framer-motion';

const InstApproach = () => {
    const steps = [
        { num: '01', title: 'Identify', desc: 'We identify markets with asymmetric opportunity and operational inefficiencies.' },
        { num: '02', title: 'Structure', desc: 'We design teams, systems, pricing, and execution frameworks before capital is deployed.' },
        { num: '03', title: 'Scale', desc: 'We scale only what proves discipline, margins, and repeatability.' },
    ];

  return (
    <Section className="bg-[var(--bg-subtle)]">
        <div className="text-center max-w-2xl mx-auto mb-20">
            <Badge className="mb-6">The Methodology</Badge>
            <h2 className="type-h1 mb-6 text-[var(--text-primary)]">Discipline meets <br/> Scale.</h2>
            <p className="type-body text-[var(--text-secondary)]">We don’t rely on luck. We rely on a repeatable formula for value creation.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {steps.map((step, i) => (
                <Card key={i} variant="white" className="group text-left h-full">
                   <div className="flex flex-col h-full justify-between">
                       <div>
                            <span className="type-display text-4xl text-[var(--border-dark)] opacity-20 mb-6 block group-hover:text-[var(--text-primary)] group-hover:opacity-100 transition-all duration-500">
                                {step.num}
                            </span>
                            <h3 className="type-h2 mb-4">{step.title}</h3>
                            <p className="type-body text-[var(--text-secondary)] text-sm">{step.desc}</p>
                       </div>
                       
                       <div className="w-full h-1 bg-[var(--border-light)] mt-8 overflow-hidden rounded-full">
                           <motion.div 
                                className="h-full bg-[var(--text-primary)]"
                                initial={{ width: "0%" }}
                                whileInView={{ width: "100%" }}
                                transition={{ duration: 1, delay: 0.2 + (i * 0.2) }}
                           />
                       </div>
                   </div>
                </Card>
            ))}
        </div>
    </Section>
  );
};

export default InstApproach;

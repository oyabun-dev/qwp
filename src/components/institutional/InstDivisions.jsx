import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Section from '../ui/Section';
import Card from '../ui/Card';
import Badge from '../ui/Badge';
import Button from '../ui/Button';

const divisions = [
    {
        name: "Quraysh Commerce",
        role: "Goods & Trade",
        desc: "Product-based businesses, sourcing, e-commerce, and supply chain execution.",
        bg: "bg-black text-white",
        variant: "black"
    },
    {
        name: "Quraysh Operations",
        role: "Logistics & Fulfillment",
        desc: "Logistics, fulfillment, content production, and field execution.",
        bg: "bg-white text-black",
        variant: "white"
    },
    {
        name: "Quraysh Communication",
        role: "Growth & Brand",
        desc: "Brand strategy, growth systems, content, and distribution.",
        bg: "bg-gray-100 text-black",
        variant: "white"
    },
    {
        name: "Quraysh Technology",
        role: "Digital Infrastructure",
        desc: "Platforms, internal systems, automation, and digital infrastructure.",
        bg: "bg-black text-white",
        variant: "black"
    }
];

const InstDivisions = () => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: targetRef });
  const x = useTransform(scrollYProgress, [0, 1], ["1%", "-65%"]);

  return (
    <section id="divisions" ref={targetRef} className="h-[300vh] bg-[var(--bg-core)] relative">
        <div className="sticky top-0 flex h-screen items-center overflow-hidden">
            
            {/* Intro Text - Sticky Absolute */}
            <div className="absolute top-24 left-6 md:left-16 z-10 max-w-sm pointer-events-none">
                <Badge className="mb-4 bg-white/10 backdrop-blur-md border-black/5">Divisions</Badge>
                <h2 className="type-h2 mb-4 leading-tight">Structured for <br/> Impact.</h2>
                <p className="type-body text-[var(--text-secondary)] text-sm">
                    Our holdings operate independently but share a unified strategic backbone.
                </p>
            </div>

            <motion.div style={{ x }} className="flex gap-6 md:gap-10 pl-[15vw] md:pl-[30vw] min-w-max items-center">
                {divisions.map((division, index) => (
                    <Card 
                        key={index} 
                        variant={division.variant} 
                        className={`
                            w-[85vw] md:w-[600px] h-[55vh] md:h-[60vh] flex flex-col justify-center gap-12 p-8 md:p-12 shrink-0 
                            transition-all duration-500 hover:border-[var(--color-brand)] group
                            ${division.variant === 'black' ? 'hover:shadow-[0_0_30px_rgba(223,178,117,0.15)]' : 'hover:shadow-xl'}
                        `}
                    >
                        <div>
                            <div className="flex items-center gap-3 mb-2">
                                <span className={`w-3 h-3 rounded-full ${division.variant === 'black' ? 'bg-[var(--color-brand)]' : 'bg-[var(--color-brand)]'}`}></span>
                                <span className="text-xs md:text-sm font-bold tracking-widest uppercase opacity-60">{division.role}</span>
                            </div>
                            <h3 className="text-5xl md:text-7xl font-bold tracking-tighter leading-[0.9] mb-4 transition-colors duration-300 break-words">
                                <span className="group-hover:text-[var(--color-brand)] transition-colors duration-300">Quraysh</span><br/> {division.name.replace('Quraysh ', '')}
                            </h3>
                        </div>
                        
                        <div>
                            <p className="text-base md:text-xl font-light opacity-80 mb-8 max-w-md">{division.desc}</p>
                            <Button 
                                variant={division.variant === 'black' ? 'secondary' : 'primary' } 
                                className={`
                                    ${division.variant === 'black' 
                                        ? 'border-white/20 text-white hover:bg-transparent hover:border-[var(--color-brand)] hover:text-[var(--color-brand)]' 
                                        : 'hover:bg-transparent hover:border-[var(--color-brand)] hover:text-[var(--color-brand)]'
                                    }
                                    transition-all duration-300 border
                                `}
                            >
                                View Division
                            </Button>
                        </div>
                    </Card>
                ))}
                
                {/* Final Call to Action Card */}
                <Card variant="glass" className="w-[85vw] md:w-[600px] h-[55vh] md:h-[60vh] flex flex-col justify-center gap-8 items-center text-center p-10 shrink-0 bg-[var(--bg-subtle)] border transition-all duration-300 hover:border-[var(--color-brand)]">
                    <h3 className="type-h1 mb-6">Join the Ecosystem</h3>
                    <p className="type-body text-[var(--text-secondary)] mb-8 max-w-md">
                        We are aggressive in our expansion. If you have a project that fits our mandate, we want to hear from you.
                    </p>
                    <Button variant="brand" size="lg">Get in touch</Button>
                </Card>
            </motion.div>
        </div>
    </section>
  );
};

export default InstDivisions;

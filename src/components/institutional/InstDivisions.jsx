import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Section from '../ui/Section';
import Card from '../ui/Card';
import Badge from '../ui/Badge';
import Button from '../ui/Button';

const divisions = [
    {
        name: "Quraysh Capital",
        role: "Investment Arm",
        desc: "Allocating capital to high-yield infrastructure and technology assets.",
        bg: "bg-black text-white",
        variant: "black"
    },
    {
        name: "Quraysh Properties",
        role: "Real Estate Development",
        desc: "Developing next-generation commercial and residential spaces.",
        bg: "bg-white text-black",
        variant: "white"
    },
    {
        name: "Quraysh Logistics",
        role: "Supply Chain",
        desc: "Optimizing flow across regional and international trade routes.",
        bg: "bg-gray-100 text-black",
        variant: "white"
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
            <div className="absolute top-24 left-6 md:left-10 z-10 max-w-sm">
                <Badge className="mb-4">Divisions</Badge>
                <h2 className="type-h2 mb-4 leading-tight">Structured for <br/> Impact.</h2>
                <p className="type-body text-[var(--text-secondary)] text-sm">
                    Our holdings operate independently but share a unified strategic backbone.
                </p>
            </div>

            <motion.div style={{ x }} className="flex gap-10 pl-[40vw] md:pl-[30vw] min-w-max">
                {divisions.map((division, index) => (
                    <Card 
                        key={index} 
                        variant={division.variant} 
                        className="w-[85vw] md:w-[600px] h-[60vh] flex flex-col justify-between p-10 md:p-16 shrink-0"
                    >
                        <div>
                            <div className="flex items-center gap-3 mb-6">
                                <span className="w-10 h-10 rounded-full bg-current opacity-20"></span>
                                <span className="text-sm font-semibold tracking-widest uppercase opacity-60">{division.role}</span>
                            </div>
                            <h3 className="type-display text-4xl md:text-6xl mb-6">{division.name}</h3>
                        </div>
                        
                        <div>
                            <p className="text-lg md:text-xl font-light opacity-80 mb-8 max-w-md">{division.desc}</p>
                            <Button variant={division.variant === 'black' ? 'secondary' : 'primary' } className={division.variant === 'black' ? 'border-white/20 text-white hover:bg-white hover:text-black' : ''}>
                                View Division
                            </Button>
                        </div>
                    </Card>
                ))}
                
                {/* Final Call to Action Card in Horizontal Scroll */}
                <Card variant="glass" className="w-[85vw] md:w-[600px] h-[60vh] flex flex-col justify-center items-center text-center p-10 shrink-0 bg-[var(--bg-subtle)]">
                    <h3 className="type-h1 mb-6">Join the Ecosystem</h3>
                    <p className="type-body text-[var(--text-secondary)] mb-8 max-w-md">
                        We are aggressive in our expansion. If you have a project that fits our mandate, we want to hear from you.
                    </p>
                    <Button variant="primary" size="lg">Get in touch</Button>
                </Card>
            </motion.div>
        </div>
    </section>
  );
};

export default InstDivisions;

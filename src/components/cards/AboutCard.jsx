import React from 'react';
import { motion } from 'framer-motion';
import SpotlightCard from '../ui/SpotlightCard';

const AboutCard = () => {
  return (
    <SpotlightCard className="col-span-1 md:col-span-2 row-span-1 h-[300px] bg-black">
        <div className="absolute inset-0 bg-dots opacity-20"></div>
        <div className="absolute inset-0 p-8 flex flex-col justify-between relative z-10">
            <h3 className="font-heading text-3xl font-bold text-white">About Quraysh</h3>
            <p className="text-[var(--text-secondary)] leading-relaxed text-sm md:text-base">
                We operate as a central authority that connects talent, systems, and operations to build sustainable, scalable, and dominant ventures. Quraysh does not chase trends — it builds institutions.
            </p>
        </div>
    </SpotlightCard>
  );
};

export default AboutCard;

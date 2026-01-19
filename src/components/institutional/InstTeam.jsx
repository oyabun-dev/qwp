import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import Section from '../ui/Section';
import { ArrowUpRight } from 'lucide-react';

const InstTeam = () => {
    const { t } = useTranslation();
    const team = t('team.people', { returnObjects: true }) || [];

    const containerVars = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1
            }
        }
    };

    const itemVars = {
        hidden: { opacity: 0, y: 10 },
        show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] } }
    };

    return (
        <Section id="team" className="bg-white text-black min-h-screen pt-32 pb-24">
            {/* Editorial Header */}
            <div className="flex flex-col md:flex-row justify-between items-end mb-24 border-b border-black pb-8">
                <div>
                    <span className="type-label text-[#C5A059] mb-4 block">{t('team.label')}</span>
                    <h1 className="type-display text-7xl md:text-9xl leading-[0.85] tracking-tight">
                        {t('team.title')}
                    </h1>
                </div>
                <p className="type-body text-gray-500 max-w-sm text-right mt-8 md:mt-0 font-light">
                    {t('manifesto.values.2.desc')}
                </p>
            </div>

            {/* Premium List Layout */}
            <motion.div 
                variants={containerVars}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                className="flex flex-col"
            >
                {team.map((member, i) => (
                    <motion.div 
                        key={i}
                        variants={itemVars}
                        className="group relative border-b border-gray-100 hover:border-[#C5A059] transition-colors duration-500"
                    >
                        <div className="grid grid-cols-1 md:grid-cols-12 items-center py-8 md:py-10 px-2 gap-4 md:gap-0">
                            
                            {/* 1. Name & Avatar */}
                            <div className="md:col-span-4 flex items-center gap-6">
                                <span className="font-mono text-xs text-gray-300 w-6">0{i + 1}</span>
                                <div className="relative">
                                     {/* Small Minimalist Avatar */}
                                    <div className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center text-sm font-heading group-hover:bg-[#C5A059] group-hover:text-white transition-colors duration-300">
                                        {member.name.substring(0, 2).toUpperCase()}
                                    </div>
                                </div>
                                <h3 className="font-heading text-3xl md:text-4xl font-medium group-hover:translate-x-2 transition-transform duration-500">
                                    {member.name}
                                </h3>
                            </div>

                            {/* 2. Role */}
                            <div className="md:col-span-3 pl-12 md:pl-0 flex flex-wrap gap-2">
                                {(Array.isArray(member.role) ? member.role : [member.role]).map((role, idx) => (
                                    <span key={idx} className="font-mono text-xs uppercase tracking-widest text-[#C5A059] border border-[#C5A059]/20 px-3 py-1 rounded-full group-hover:bg-[#C5A059] group-hover:text-white transition-all duration-300">
                                        {role}
                                    </span>
                                ))}
                            </div>

                            {/* 3. Description */}
                            <div className="md:col-span-4 pl-12 md:pl-0">
                                <p className="text-gray-400 group-hover:text-gray-600 transition-colors duration-300 font-light leading-relaxed max-w-md">
                                    {member.desc}
                                </p>
                            </div>

                            {/* 4. Action */}
                            <div className="md:col-span-1 flex justify-end opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                <div className="w-12 h-12 rounded-full border border-gray-200 flex items-center justify-center group-hover:border-black transition-colors">
                                    <ArrowUpRight className="w-5 h-5" />
                                </div>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </motion.div>
        </Section>
    );
};

export default InstTeam;

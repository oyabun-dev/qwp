import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

const InstTeam = () => {
    const { t } = useTranslation();

    const team = [
        { name: "Kana", role: "Chief Executive Officer (CEO)", desc: "Vision stratégique et direction globale." },
        { name: "Khalifa", role: "Chief Technology Officer (CTO)", desc: "Innovation technique et ingénierie." },
        { name: "BMG", role: "Chief Product Officer (CPO)", desc: "Design produit et expérience client." },
        { name: "Synki", role: "Chief Financial Officer (CFO)", desc: "Structure financière et performance." }
    ];

    return (
        <section className="section-standard bg-white text-black">
            <div className="max-w-screen-2xl mx-auto w-full px-6 md:px-12 lg:px-24">
                <div className="mb-16">
                    <p className="type-label text-[#C5A059] mb-4">L'Équipe</p>
                    <h2 className="type-h2">Les Architectes.</h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {team.map((member, i) => (
                        <motion.div 
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: i * 0.1 }}
                            viewport={{ once: true }}
                            className="group"
                        >
                            <div className="aspect-[3/4] bg-gray-100 rounded-lg mb-6 overflow-hidden relative">
                                {/* Placeholder Gradient - Replace with Image */}
                                <div className="absolute inset-0 bg-gradient-to-tr from-gray-200 to-gray-50 group-hover:scale-105 transition-transform duration-700" />
                                <div className="absolute inset-0 flex items-center justify-center text-gray-300 text-9xl font-serif opacity-20">
                                    {member.name[0]}
                                </div>
                            </div>
                            <h3 className="type-h3 mb-1">{member.name}</h3>
                            <p className="type-label text-[#C5A059] mb-3">{member.role}</p>
                            <p className="type-body text-gray-500 text-sm">{member.desc}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default InstTeam;

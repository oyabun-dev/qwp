import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const InstCareers = () => {
    return (
        <section className="section-standard bg-black text-white relative overflow-hidden">
             {/* Dynamic Glow */}
            <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-[radial-gradient(circle,rgba(197,160,89,0.15)_0%,transparent_70%)] blur-[120px] pointer-events-none" />

            <div className="max-w-screen-2xl mx-auto w-full px-6 md:px-12 lg:px-24 relative z-10">
                <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-32">
                    
                    <div className="w-full lg:w-1/2">
                        <p className="type-label text-[#C5A059] mb-4">Carrières</p>
                        <h2 className="type-display mb-6">Rejoindre les Bâtisseurs.</h2>
                        <p className="type-body text-gray-400 mb-8 max-w-lg">
                            QURAYSH ne cherche pas des employés, mais des entrepreneurs dans l'âme. Nous recrutons ceux qui veulent construire l'avenir.
                        </p>
                        
                        <button className="group flex items-center gap-3 bg-white text-black px-8 py-4 rounded-full font-medium hover:bg-[#C5A059] hover:text-white transition-all duration-300">
                            Voir les opportunités
                            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </button>
                    </div>

                    <div className="w-full lg:w-1/2 grid grid-cols-1 gap-6">
                        {['Engineering', 'Design & Brand', 'Business Ops'].map((dept, i) => (
                             <motion.div 
                                key={i}
                                initial={{ opacity: 0, x: 20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.5, delay: i * 0.1 }}
                                viewport={{ once: true }}
                                className="p-8 border border-white/10 rounded-xl hover:border-[#C5A059] hover:bg-white/5 transition-all duration-300 cursor-pointer group"
                            >
                                <h3 className="type-h3 mb-2">{dept}</h3>
                                <p className="text-gray-500 group-hover:text-gray-300 transition-colors text-sm">
                                    {i === 0 && "Développeurs Backend, Architectes Système."}
                                    {i === 1 && "Créatifs, UX/UI Designers."}
                                    {i === 2 && "Chefs de projet, Logisticiens."}
                                </p>
                            </motion.div>
                        ))}
                    </div>

                </div>
            </div>
        </section>
    );
};

export default InstCareers;

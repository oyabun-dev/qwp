import React from 'react';
import { motion } from 'framer-motion';

const InstPartners = () => {
    const categories = [
        { name: "Infrastructure Tech", partners: ["AWS", "Vercel", "Stripe", "Supabase"] },
        { name: "Logistique & Supply", partners: ["DHL", "Maersk", "Local Carriers"] },
        { name: "Conseil & Légal", partners: ["Legal Firms", "Financial Advisors"] }
    ];

    return (
        <section className="py-24 bg-gray-50 border-y border-gray-200">
             <div className="max-w-screen-2xl mx-auto w-full px-6 md:px-12 lg:px-24">
                <div className="text-center mb-16 max-w-2xl mx-auto">
                    <p className="type-label text-[#C5A059] mb-4">Écosystème</p>
                    <h2 className="type-h2 mb-6">Réseau Stratégique.</h2>
                    <p className="type-body text-gray-500">
                        Nous collaborons avec les meilleurs experts pour garantir l'excellence de nos opérations.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
                    {categories.map((cat, i) => (
                        <motion.div 
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: i * 0.1 }}
                            viewport={{ once: true }}
                        >
                            <h3 className="type-h3 text-xl mb-6">{cat.name}</h3>
                            <div className="flex flex-wrap justify-center gap-4">
                                {cat.partners.map((partner, j) => (
                                    <span key={j} className="px-4 py-2 bg-white rounded-full border border-gray-200 text-gray-600 text-sm font-medium">
                                        {partner}
                                    </span>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default InstPartners;

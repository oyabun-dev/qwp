import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import Section from '../components/ui/Section';
import { motion } from 'framer-motion';
import { ArrowLeft, ArrowUpRight } from 'lucide-react';
import InstContact from '../components/institutional/InstContact';

const DivisionDetail = () => {
    const { id } = useParams();
    const { t } = useTranslation();
    
    // Retrieve data using the slug
    const data = t(`impact.division_details.${id}`, { returnObjects: true });
    
    // Fallback if ID is invalid or data missing (should safeguard against crashes)
    if (!data || typeof data === 'string') {
        return (
             <main className="pt-32 min-h-screen bg-white flex flex-col items-center justify-center">
                <h1 className="text-4xl font-bold mb-4">Division Not Found</h1>
                <Link to="/" className="text-[#C5A059] hover:underline">Return Home</Link>
             </main>
        );
    }

    return (
        <main className="bg-white min-h-screen text-black">
            {/* Hero Section */}
            <Section className="!pt-44 !pb-24 border-b border-gray-100">
                <Link to="/" className="inline-flex items-center gap-2 text-gray-400 hover:text-black transition-colors mb-12">
                    <ArrowLeft className="w-5 h-5" />
                    <span className="type-label border-none">Back</span>
                </Link>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                >
                    <span className="type-label text-[#C5A059] mb-6 block">Division</span>
                    <h1 className="type-display text-6xl md:text-8xl lg:text-9xl mb-8 leading-[0.9] tracking-tight">
                        {data.title}
                    </h1>
                    <p className="text-2xl md:text-3xl font-light max-w-2xl leading-tight">
                        {data.subtitle}
                    </p>
                </motion.div>
            </Section>

            {/* Content Grid */}
            <Section className="!py-24">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
                    {/* Main Content - Left */}
                    <div className="lg:col-span-7">
                        <motion.div
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                        >
                            <h3 className="type-h3 mb-8">Overview</h3>
                            <p className="type-body text-gray-500 text-lg leading-relaxed mb-12">
                                {data.content}
                            </p>

                            <h3 className="type-h3 mb-6">Core Capabilities</h3>
                            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                {(data.services || []).map((service, i) => (
                                    <li key={i} className="flex items-center gap-3 p-4 border border-gray-100 rounded-lg hover:border-[#C5A059] transition-colors">
                                        <div className="w-2 h-2 bg-[#C5A059]" />
                                        <span className="font-medium">{service}</span>
                                    </li>
                                ))}
                            </ul>
                        </motion.div>
                    </div>

                    {/* Stats - Right Sidebar */}
                    <div className="lg:col-span-5">
                        <div className="bg-black text-white p-10 rounded-2xl relative overflow-hidden">
                            <div className="absolute top-0 right-0 w-64 h-64 bg-[#C5A059]/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none" />
                            
                            <h3 className="type-label text-[#C5A059] mb-8 border-none">Key Metrics</h3>
                            
                            <div className="space-y-10 relative z-10">
                                {(data.stats || []).map((stat, i) => (
                                    <div key={i} className="border-b border-white/10 pb-6 last:border-0 last:pb-0">
                                        <p className="text-sm text-gray-400 font-mono tracking-widest uppercase mb-1">{stat.label}</p>
                                        <p className="text-5xl font-heading font-medium tracking-tight">{stat.value}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                        
                        <div className="mt-8 p-8 bg-gray-50 rounded-2xl border border-gray-100">
                             <h4 className="type-h3 text-xl mb-4">Lead this division?</h4>
                             <p className="text-sm text-gray-500 mb-6">We are always looking for exceptional talent to drive our ambitious roadmap.</p>
                             <Link to="/#contact" className="group flex items-center justify-between w-full p-4 bg-white border border-gray-200 hover:border-black transition-all rounded-xl">
                                <span>Apply Now</span>
                                <ArrowUpRight className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                             </Link>
                        </div>
                    </div>
                </div>
            </Section>

            <InstContact />
        </main>
    );
};

export default DivisionDetail;

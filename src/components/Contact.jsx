import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const ContactFeld = ({ label, type = "text", placeholder }) => (
    <div className="mb-8">
        <label className="block text-xs uppercase tracking-widest text-[var(--text-muted)] mb-2">{label}</label>
        {type === "textarea" ? (
            <textarea 
                placeholder={placeholder}
                rows={4}
                className="w-full bg-[var(--bg-tertiary)] border border-[var(--border-subtle)] p-4 text-white focus:outline-none focus:border-[var(--accent-gold)] transition-colors duration-300 resize-none"
            ></textarea>
        ) : (
            <input 
                type={type} 
                placeholder={placeholder}
                className="w-full bg-[var(--bg-tertiary)] border border-[var(--border-subtle)] p-4 text-white focus:outline-none focus:border-[var(--accent-gold)] transition-colors duration-300"
            />
        )}
    </div>
);

const Contact = () => {
  return (
    <section id="contact" className="py-24 md:py-32 bg-[var(--bg-primary)]">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24">
            {/* Left: Info */}
            <div>
                <h2 className="font-heading text-5xl font-bold text-white mb-10">Initiate Dialogue.</h2>
                <p className="text-[var(--text-secondary)] text-xl leading-relaxed mb-16 max-w-md">
                    We welcome inquiries from strategic partners, investors, and media. 
                </p>

                <div className="space-y-12">
                    <div>
                        <h3 className="text-[var(--accent-gold)] text-sm uppercase tracking-widest mb-4">Headquarters</h3>
                        <p className="text-white text-lg">
                            The Shard, Level 32<br />
                            32 London Bridge St<br />
                            London, SE1 9SG
                        </p>
                    </div>

                    <div>
                        <h3 className="text-[var(--accent-gold)] text-sm uppercase tracking-widest mb-4">Direct Communication</h3>
                        <p className="text-white text-lg mb-2">investors@quraysh.group</p>
                        <p className="text-white text-lg">press@quraysh.group</p>
                    </div>
                </div>
            </div>

            {/* Right: Form */}
            <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="bg-[var(--bg-secondary)] p-10 border border-[var(--border-subtle)]"
            >
                <form>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <ContactFeld label="Name" placeholder="Your Name" />
                        <ContactFeld label="Company" placeholder="Organization" />
                    </div>
                    <ContactFeld label="Email" type="email" placeholder="email@example.com" />
                    <ContactFeld label="Subject" placeholder="Investment Inquiry" />
                    <ContactFeld label="Message" type="textarea" placeholder="How can we collaborate?" />

                    <button className="w-full py-6 bg-[var(--text-primary)] text-black font-medium uppercase tracking-widest hover:bg-[var(--accent-gold)] transition-colors duration-300 flex items-center justify-center group">
                        Send Message
                        <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
                    </button>
                </form>
            </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

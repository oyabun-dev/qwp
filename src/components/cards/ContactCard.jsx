import React from 'react';
import { motion } from 'framer-motion';
import { Mail, CheckCircle } from 'lucide-react';

const ContactCard = () => {
  return (
    <motion.div 
      whileHover={{ scale: 1.01 }}
      className="col-span-1 md:col-span-2 row-span-1 relative h-[300px] rounded-[32px] overflow-hidden bg-black border border-[var(--border-glass)]"
    >
        <div className="absolute inset-0 bg-wave opacity-10"></div>
        <div className="absolute inset-0 p-8 flex flex-col justify-center">
            <div className="flex items-center gap-3 mb-6">
                 <div className="w-10 h-10 rounded-full bg-[var(--accent-gold)]/20 flex items-center justify-center">
                    <Mail size={18} className="text-[var(--accent-gold)]" />
                 </div>
                 <h3 className="font-heading text-3xl font-bold text-white">Contact Us</h3>
            </div>
            
            <p className="text-[var(--text-secondary)] mb-6">
                For partnerships, strategic collaborations, or institutional inquiries.
            </p>

            <button className="w-full py-3 border border-white/20 rounded-full text-white text-sm uppercase tracking-widest hover:bg-white hover:text-black transition-all duration-300">
                Get in Touch
            </button>
        </div>
    </motion.div>
  );
};

export default ContactCard;

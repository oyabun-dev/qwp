import React from 'react';
import Section from '../ui/Section';

const InstFooter = () => {
    const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[var(--bg-inverse)] text-[var(--text-inverse)] border-t border-white/10">
        <Section className="py-20">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-20">
                {/* Brand */}
                <div className="col-span-1 md:col-span-2">
                    <div className="flex items-center gap-3 mb-6">
                        <span className="w-8 h-8 bg-white rounded-lg flex items-center justify-center text-black font-bold text-lg">Q</span>
                        <span className="font-bold text-2xl tracking-tight text-white font-sans">
                            Quraysh
                        </span>
                    </div>
                </div>

                {/* Links */}
                <div>
                    <h4 className="text-sm font-bold uppercase tracking-widest mb-6 opacity-60">Company</h4>
                    <ul className="space-y-4 text-gray-400 text-sm">
                        <li className="hover:text-white transition-colors cursor-pointer">About</li>
                        <li className="hover:text-white transition-colors cursor-pointer">Divisions</li>
                        <li className="hover:text-white transition-colors cursor-pointer">Career</li>
                        <li className="hover:text-white transition-colors cursor-pointer">Contact</li>
                    </ul>
                </div>

                <div>
                    <h4 className="text-sm font-bold uppercase tracking-widest mb-6 opacity-60">Legal</h4>
                    <ul className="space-y-4 text-gray-400 text-sm">
                        <li className="hover:text-white transition-colors cursor-pointer">Privacy Policy</li>
                        <li className="hover:text-white transition-colors cursor-pointer">Terms of Service</li>
                        <li className="hover:text-white transition-colors cursor-pointer">Compliance</li>
                    </ul>
                </div>
            </div>

            <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-white/10 text-xs text-gray-500">
                <p>&copy; {currentYear} Quraysh Strategic Holdings. All rights reserved.</p>
                <div className="flex gap-6 mt-4 md:mt-0">
                    <span>Dakar</span>
                    <span>Dubai</span>
                    <span>New York</span>
                </div>
            </div>
        </Section>
    </footer>
  );
};

export default InstFooter;

import React from 'react';
import Section from '../ui/Section';

const InstFooter = () => {
    const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[var(--bg-inverse)] text-[var(--text-inverse)] border-t border-white/10">
        <Section className="py-20">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8 mb-12">
                {/* Brand */}
                <div>
                    <div className="flex items-center gap-3 mb-4">
                        <img 
                            src="/assets/logo.png" 
                            alt="Quraysh Logo" 
                            className="h-12 w-auto object-contain brightness-0 invert" 
                        />
                        <span className="font-bold text-xl tracking-tight text-white font-sans">
                            Quraysh Holding
                        </span>
                    </div>
                    <span className="text-sm text-gray-500">Dakar — Global Operations</span>
                </div>

                {/* Contact */}
                <div>
                   <a href="mailto:contact@quraysh.co" className="text-gray-400 hover:text-white transition-colors">
                        contact@quraysh.co
                   </a>
                </div>
            </div>

            <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-gray-600">
                <p>&copy; {currentYear} Quraysh Strategic Holdings.</p>
                <div className="flex gap-6 mt-4 md:mt-0">
                    <span>Privacy</span>
                    <span>Terms</span>
                </div>
            </div>
        </Section>
    </footer>
  );
};

export default InstFooter;

import React from 'react';

const Footer = () => {
    const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full bg-[var(--bg-secondary)] border-t border-[var(--border-glass)] pt-20 pb-10">
        <div className="container mx-auto px-4 md:px-12 max-w-[1400px]">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-20">
                <div className="col-span-1 md:col-span-2">
                    <h2 className="font-heading text-2xl font-bold tracking-widest text-white mb-6">QURAYSH</h2>
                    <p className="text-[var(--text-secondary)] max-w-sm text-sm leading-relaxed">
                        An institutional holding company building the infrastructure of tomorrow through disciplined capital allocation and operational excellence.
                    </p>
                </div>
                
                <div>
                    <h3 className="text-white font-bold uppercase tracking-widest text-xs mb-6">Governance</h3>
                    <ul className="space-y-4 text-[var(--text-secondary)] text-sm">
                        <li><a href="#" className="hover:text-[var(--accent-gold)] transition-colors">Board of Directors</a></li>
                        <li><a href="#" className="hover:text-[var(--accent-gold)] transition-colors">Investment Committee</a></li>
                        <li><a href="#" className="hover:text-[var(--accent-gold)] transition-colors">Compliance</a></li>
                    </ul>
                </div>

                <div>
                    <h3 className="text-white font-bold uppercase tracking-widest text-xs mb-6">Connect</h3>
                    <ul className="space-y-4 text-[var(--text-secondary)] text-sm">
                        <li><a href="#" className="hover:text-[var(--accent-gold)] transition-colors">Partnerships</a></li>
                        <li><a href="#" className="hover:text-[var(--accent-gold)] transition-colors">Press Inquiries</a></li>
                        <li><a href="#" className="hover:text-[var(--accent-gold)] transition-colors">Strategy Office</a></li>
                    </ul>
                </div>
            </div>

            <div className="border-t border-white/5 pt-10 flex flex-col md:flex-row justify-between items-center text-xs uppercase tracking-widest text-[var(--text-muted)]">
                <p>&copy; {currentYear} Quraysh Holding. All rights reserved.</p>
                <p>London • Dakar • Dubai</p>
            </div>
        </div>
    </footer>
  );
};

export default Footer;

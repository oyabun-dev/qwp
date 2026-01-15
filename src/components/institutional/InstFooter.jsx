import React from 'react';
import { useTranslation } from 'react-i18next';

const InstFooter = () => {
  const { t } = useTranslation();

  return (
    <footer className="bg-black text-white py-20 border-t border-[#DFB275]/20">
        <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-20">
                <div className="col-span-1 md:col-span-1">
                    <img src="/assets/quraysh-logo-gold.png" alt="Quraysh Logo" className="h-12 w-auto mb-8 object-contain brightness-0 invert" />
                    <h3 className="text-xl font-bold tracking-tight mb-8">
                        {t('footer.columns.governance.title')}
                    </h3>
                    <p className="text-gray-500 text-sm leading-relaxed max-w-xs">
                        L'intégrité est notre seule devise. Nous opérons selon les standards les plus stricts de l'industrie.
                    </p>
                </div>

                <div className="col-span-1 md:col-span-3 grid grid-cols-2 md:grid-cols-3 gap-8">
                    {/* Dynamic Footer Links */}
                    <div>
                        <h4 className="type-label mb-6 text-[#DFB275] border-none">Corporate</h4>
                        <ul className="space-y-4 text-sm text-gray-400 font-body">
                            <li><a href="#" className="hover:text-white transition-colors">Vision</a></li>
                            <li><a href="#" className="hover:text-white transition-colors">Manifesto</a></li>
                            <li><a href="#" className="hover:text-white transition-colors">Team</a></li>
                        </ul>
                    </div>
                    <div>
                         <h4 className="type-label mb-6 text-[#DFB275] border-none">Divisions</h4>
                         <ul className="space-y-4 text-sm text-gray-400 font-body">
                            <li><a href="#" className="hover:text-white transition-colors">Quraysh Commerce</a></li>
                            <li><a href="#" className="hover:text-white transition-colors">Quraysh Capital</a></li>
                            <li><a href="#" className="hover:text-white transition-colors">Quraysh Tech</a></li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="type-label mb-6 text-[#DFB275] border-none">Social</h4>
                        <ul className="space-y-4 text-sm text-gray-400 font-body">
                            <li><a href="#" className="hover:text-white transition-colors">LinkedIn</a></li>
                            <li><a href="#" className="hover:text-white transition-colors">Twitter</a></li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-white/5 opacity-60 text-xs tracking-widest uppercase">
                <p>{t('footer.brand')}</p>
                <p>{t('footer.rights')}</p>
            </div>
        </div>
    </footer>
  );
};

export default InstFooter;

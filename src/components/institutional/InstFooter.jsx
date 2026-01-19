import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

const InstFooter = () => {
  const { t } = useTranslation();

  const getLinkHref = (link) => {
      // Static Pages
      if (link === 'Team' || link === "L'Équipe" || link === 'Equipe' || link === 'Équipe') return '/team';
      if (link === 'Manifesto' || link === 'Manifeste') return '/#manifesto';
      if (link === 'Divisions' || link === 'Pôles') return '/#divisions';
      if (link === 'Portfolio') return '/#portfolio';
      if (link === 'Sitemap' || link === 'Plan du site') return '/sitemap';
      
      // Divisions
      if (link.includes('Capital')) return '/divisions/capital';
      if (link.includes('Tech')) return '/divisions/tech';
      if (link.includes('Commerce')) return '/divisions/commerce';
      if (link.includes('Growth')) return '/divisions/growth';
      if (link.includes('Operations')) return '/divisions/operations';

      return '#';
  };

  const RenderLink = ({ link }) => {
      const href = getLinkHref(link);
      if (href.startsWith('/')) {
            return <Link to={href} className="hover:text-white transition-colors">{link}</Link>;
      }
      return <a href={href} className="hover:text-white transition-colors">{link}</a>;
  };

  return (
    <footer className="bg-black text-white py-20 border-t border-[#DFB275]/20 relative overflow-hidden">
        {/* Giant Watermark */}
        <div className="absolute bottom-[-5%] left-1/2 -translate-x-1/2 pointer-events-none select-none w-full text-center">
            <span className="font-heading font-bold text-[20vw] leading-none text-white opacity-[0.03] tracking-wider">
                QURAYSH
            </span>
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-20">
                {/* Brand Column */}
                <div className="col-span-1 md:col-span-1">
                    <div className="flex items-center gap-4 mb-8">
                        <img src="/assets/quraysh-logo-gold.png" alt="Quraysh Logo" className="h-10 w-auto object-contain brightness-0 invert" />
                        <span className="font-heading font-bold text-2xl tracking-widest text-white">QURAYSH</span>
                    </div>
                    {/* Governance removed as per request */}
                </div>

                <div className="col-span-1 md:col-span-3 grid grid-cols-2 md:grid-cols-3 gap-8">
                    {/* Dynamic Footer Links */}
                    <div>
                        <h4 className="type-label mb-6 text-[#DFB275] border-none">{t('footer.columns.corporate.title')}</h4>
                        <ul className="space-y-4 text-sm text-gray-400 font-body">
                            {(t('footer.columns.corporate.links', { returnObjects: true }) || []).map((link, i) => (
                                <li key={i}><RenderLink link={link} /></li>
                            ))}
                        </ul>
                    </div>
                    <div>
                         <h4 className="type-label mb-6 text-[#DFB275] border-none">{t('footer.columns.divisions.title')}</h4>
                         <ul className="space-y-4 text-sm text-gray-400 font-body">
                            {(t('footer.columns.divisions.links', { returnObjects: true }) || []).map((link, i) => (
                                <li key={i}><RenderLink link={link} /></li>
                            ))}
                        </ul>
                    </div>
                    <div>
                        <h4 className="type-label mb-6 text-[#DFB275] border-none">{t('footer.columns.social.title')}</h4>
                        <ul className="space-y-4 text-sm text-gray-400 font-body">
                            {(t('footer.columns.social.links', { returnObjects: true }) || []).map((link, i) => (
                                <li key={i}><RenderLink link={link} /></li>
                            ))}
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

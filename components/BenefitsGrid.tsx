
import React from 'react';
import { useLanguage } from '../LanguageContext';

const BenefitsGrid: React.FC = () => {
  const { t, lang } = useLanguage();

  const levels = [
    { title: t('maturity', 'l1'), desc: t('maturity', 'l1_d'), risk: lang === 'ES' ? "Riesgo: Alto" : "Risk: High" },
    { title: t('maturity', 'l2'), desc: t('maturity', 'l2_d'), risk: lang === 'ES' ? "Riesgo: Medio-Alto" : "Risk: Med-High" },
    { title: t('maturity', 'l3'), desc: t('maturity', 'l3_d'), risk: lang === 'ES' ? "Riesgo: Controlado" : "Risk: Controlled" },
    { title: t('maturity', 'l4'), desc: t('maturity', 'l4_d'), risk: lang === 'ES' ? "Riesgo: Bajo" : "Risk: Low" },
    { title: t('maturity', 'l5'), desc: t('maturity', 'l5_d'), risk: lang === 'ES' ? "Riesgo: Mínimo" : "Risk: Minimal" }
  ];

  return (
    <section className="bg-black py-32 md:py-56 px-6 md:px-24 border-y border-white/10 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-red-600/50 to-transparent"></div>
      
      <div className="max-w-7xl mx-auto">
        <div className="mb-20 md:mb-32">
            <h2 className="text-mono text-red-600 font-bold uppercase tracking-[0.5em] text-sm mb-6 flex items-center gap-6">
              <span className="w-20 h-px bg-red-600"></span>
              {t('maturity', 'title')}
            </h2>
            <p className="text-4xl md:text-6xl font-black uppercase tracking-tighter max-w-4xl">{t('maturity', 'subtitle')}</p>
        </div>
        
        <div className="space-y-4">
          {levels.map((level, i) => (
            <div key={i} className="group relative bg-white/5 border border-white/10 p-10 md:p-14 hover:bg-white transition-all duration-700 flex flex-col md:flex-row md:items-center justify-between gap-8 overflow-hidden">
              <div className="relative z-10 flex items-center gap-10">
                <span className="text-4xl md:text-6xl font-black text-red-600 opacity-40 group-hover:opacity-100 group-hover:scale-125 transition-all">0{i + 1}</span>
                <div className="max-w-xl">
                  <h3 className="text-2xl md:text-3xl font-black uppercase tracking-tight group-hover:text-black transition-colors mb-2">
                    {level.title}
                  </h3>
                  <p className="text-lg md:text-xl font-light opacity-50 group-hover:opacity-100 group-hover:text-black transition-all">
                    {level.desc}
                  </p>
                </div>
              </div>
              
              <div className="relative z-10 flex flex-col items-start md:items-end">
                  <span className={`text-mono text-xs font-black uppercase px-4 py-2 mb-4 group-hover:bg-black group-hover:text-white transition-colors ${i < 2 ? 'bg-red-600/20 text-red-600' : 'bg-white/10 text-white/40'}`}>
                    {level.risk}
                  </span>
                  {i === 2 && (
                    <div className="absolute -right-4 top-0 h-full flex items-center">
                        <span className="bg-red-600 text-white text-[10px] font-black uppercase px-2 py-8 rotate-180 [writing-mode:vertical-lr]">{lang === 'ES' ? 'IMPLEMENTACIÓN DXOF+' : 'DXOF+ IMPLEMENTED'}</span>
                    </div>
                  )}
              </div>
              
              <div className="absolute top-0 right-0 bottom-0 w-0 bg-red-600/5 group-hover:w-full transition-all duration-700 -z-10"></div>
            </div>
          ))}
        </div>
        
        <div className="mt-20 flex justify-center">
            <button className="bg-red-600 text-white px-12 py-6 text-2xl font-black uppercase tracking-widest hover:bg-white hover:text-black transition-all shadow-[15px_15px_0px_rgba(255,255,255,0.1)]">
                {t('maturity', 'cta')}
            </button>
        </div>
      </div>
    </section>
  );
};

export default BenefitsGrid;

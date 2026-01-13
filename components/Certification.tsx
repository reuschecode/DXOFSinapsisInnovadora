
import React from 'react';
import { useLanguage } from '../LanguageContext';

const Certification: React.FC = () => {
  const { t, lang } = useLanguage();

  return (
    <section className="bg-black py-40 md:py-60 px-6 md:px-24 flex flex-col items-center justify-center relative overflow-hidden">
      <div className="absolute top-0 right-0 w-full h-full opacity-20 pointer-events-none">
        <img 
          src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2000&auto=format&fit=crop" 
          className="w-full h-full object-cover grayscale invert" 
          alt="Abstract tech grid"
        />
      </div>
      
      <div className="relative z-10 max-w-4xl text-center">
        <div className="inline-block px-6 py-2 border border-red-600 text-red-600 text-mono text-sm font-bold uppercase tracking-[0.4em] mb-12">
          {t('certification', 'badge')}
        </div>
        
        <h2 className="text-[clamp(3rem,8vw,8rem)] leading-[0.8] mb-12 tracking-tighter font-black uppercase">
          {t('certification', 'title')} <br/><span className="text-red-600 italic">{t('certification', 'subtitle')}</span>
        </h2>
        
        <p className="text-xl md:text-3xl font-light leading-snug opacity-80 mb-16 italic">
          {t('certification', 'desc')}
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 text-left">
            <div className="p-10 bg-white/5 border-l-4 border-red-600">
                <p className="text-2xl font-bold uppercase mb-4">{lang === 'ES' ? 'Valor de mercado' : 'Market Value'}</p>
                <p className="opacity-60 leading-tight">
                    {lang === 'ES' 
                        ? "No certificamos técnicos. Certificamos decisores responsables capaces de liderar en entornos de alta incertidumbre." 
                        : "We don't certify technicians. We certify responsible decisors capable of leading in high-uncertainty environments."}
                </p>
            </div>
            <div className="p-10 bg-white/5 border-l-4 border-red-600">
                <p className="text-2xl font-bold uppercase mb-4">{lang === 'ES' ? 'Propósito' : 'Purpose'}</p>
                <p className="opacity-60 leading-tight">
                    {lang === 'ES' 
                        ? "Crear una comunidad de líderes que operan bajo estándares globales de gobierno de IA y accountability." 
                        : "Create a community of leaders operating under global standards of AI governance and accountability."}
                </p>
            </div>
        </div>
      </div>
    </section>
  );
};

export default Certification;

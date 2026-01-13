
import React from 'react';
import { useLanguage } from '../LanguageContext';

interface FinalCTAProps {
  onOpenReg: () => void;
}

const FinalCTA: React.FC<FinalCTAProps> = ({ onOpenReg }) => {
  const { t } = useLanguage();

  return (
    <section className="relative bg-red-600 text-white py-48 md:py-60 px-6 md:px-24 lg:px-48 flex flex-col items-center text-center overflow-hidden">
      <div className="absolute inset-0 opacity-40 mix-blend-multiply pointer-events-none">
        <img 
          src="https://images.unsplash.com/photo-1518186285589-2f7649de83e0?q=80&w=2000&auto=format&fit=crop" 
          className="w-full h-full object-cover grayscale contrast-[2] brightness-[0.5]" 
          alt="Massive concrete structure"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-red-600 via-transparent to-red-900"></div>
      </div>
      
      <div className="relative z-10 max-w-6xl w-full">
        <div className="mb-12 inline-block px-8 py-3 border-4 border-white text-mono font-black uppercase tracking-[0.4em] text-sm md:text-xl bg-black text-white animate-pulse">
          {t('cta', 'alert')}
        </div>
        
        <h2 className="text-[clamp(3rem,10vw,9rem)] leading-[0.85] md:leading-[0.8] mb-12 tracking-tighter font-black uppercase">
          {t('cta', 'title_1')} <br/><span className="italic opacity-80">{t('cta', 'title_accent')}</span> {t('cta', 'title_2')}
        </h2>
        
        <p className="text-[clamp(1.25rem,4vw,2.5rem)] font-light mb-20 max-w-4xl mx-auto leading-tight tracking-tight">
          {t('cta', 'sub')}
        </p>
        
        <div className="flex flex-col items-center gap-12 w-full">
          <button 
            onClick={onOpenReg}
            className="group relative bg-white text-black px-10 md:px-24 py-10 md:py-12 text-[clamp(1.5rem,3vw,3rem)] font-black uppercase tracking-widest hover:bg-black hover:text-white transition-all duration-500 w-full md:w-auto shadow-[30px_30px_0px_rgba(0,0,0,0.2)]"
          >
            <span className="relative z-10">{t('cta', 'button')}</span>
            <div className="absolute inset-0 bg-black translate-x-3 translate-y-3 md:translate-x-6 md:translate-y-6 -z-10 group-hover:translate-x-0 group-hover:translate-y-0 transition-transform duration-300"></div>
          </button>
          
          <div className="max-w-2xl">
            <p className="text-xl md:text-2xl font-black uppercase tracking-tighter opacity-90 leading-none mb-6">
                {t('cta', 'footer')}
            </p>
            <div className="h-1 w-20 bg-black mx-auto"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;

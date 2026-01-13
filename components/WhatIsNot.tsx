
import React from 'react';
import { useLanguage } from '../LanguageContext';

const WhatIsNot: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section className="bg-white text-black py-40 md:py-60 px-6 md:px-24 flex flex-col items-center relative overflow-hidden">
      <div className="absolute -left-10 md:-left-20 top-20 text-[clamp(10rem,20vw,20rem)] font-black text-black/5 leading-none select-none pointer-events-none uppercase">
        NOT
      </div>
      
      <div className="max-w-7xl w-full relative z-10">
        <h2 className="text-xl md:text-2xl text-mono font-bold mb-20 md:mb-32 uppercase tracking-widest text-red-600">
          {t('whatIsNot', 'title')}
        </h2>
        
        <div className="space-y-24 md:space-y-40">
          <p className="text-[clamp(2.5rem,8.5vw,8rem)] leading-[0.9] tracking-tighter flex flex-wrap items-baseline gap-x-4 md:gap-x-10 uppercase font-bold">
            <span className="opacity-45 italic block w-full md:w-auto mb-4 md:mb-0">DXOF+</span> 
            <span className="whitespace-nowrap">{t('whatIsNot', 'not_a')}</span>
            <span className="text-red-600 underline decoration-4 md:decoration-[12px] underline-offset-[10px] md:underline-offset-[20px] block md:inline mt-4 md:mt-0">{t('whatIsNot', 'copilot')}</span>
          </p>
          
          <p className="text-[clamp(2.5rem,8.5vw,8rem)] leading-[0.9] tracking-tighter flex flex-wrap items-baseline gap-x-4 md:gap-x-10 uppercase font-bold">
            <span className="whitespace-nowrap">{t('whatIsNot', 'no_es')}</span>
            <span className="text-red-600 underline decoration-4 md:decoration-[12px] underline-offset-[10px] md:underline-offset-[20px] block md:inline mt-4 md:mt-0">{t('whatIsNot', 'prompt')}</span>
          </p>
          
          <p className="text-[clamp(2.5rem,8.5vw,8rem)] leading-[0.9] tracking-tighter flex flex-wrap items-baseline gap-x-4 md:gap-x-10 uppercase font-bold">
            <span className="whitespace-nowrap">{t('whatIsNot', 'no_es')}</span>
            <span className="text-red-600 underline decoration-4 md:decoration-[12px] underline-offset-[10px] md:underline-offset-[20px] block md:inline mt-4 md:mt-0">{t('whatIsNot', 'auto')}</span>
          </p>
        </div>
        
        <div className="mt-40 md:mt-60 pt-12 border-t border-black/10">
            <p className="text-mono text-sm font-bold uppercase tracking-widest opacity-40">
                {t('whatIsNot', 'system_mandate')}
            </p>
        </div>
      </div>
    </section>
  );
};

export default WhatIsNot;

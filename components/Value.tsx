
import React from 'react';
import { useLanguage } from '../LanguageContext';

const Value: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section className="bg-black py-40 md:py-60 px-6 md:px-24 flex flex-col items-center justify-center text-center relative overflow-hidden">
      <div className="relative z-10 w-full max-w-7xl">
        <p className="text-2xl md:text-5xl text-white font-light mb-12 uppercase tracking-tighter">
          {t('value', 'line1')}
        </p>
        
        <div className="relative inline-block w-full">
          <h2 className="text-[clamp(3.5rem,14vw,18rem)] font-black text-white leading-none tracking-tighter italic uppercase">
            {t('value', 'line2')}
          </h2>
          <div className="absolute -top-10 md:-top-16 left-0 md:-left-12 text-mono bg-red-600 text-white text-xl md:text-4xl font-black italic -rotate-12 px-4 py-2 shadow-[8px_8px_0px_rgba(0,0,0,1)]">
            {t('value', 'label')}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Value;

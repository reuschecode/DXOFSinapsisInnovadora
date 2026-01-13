
import React, { useState } from 'react';
import { useLanguage } from '../LanguageContext';

const Manifesto: React.FC = () => {
  const { t } = useLanguage();
  const [activePart, setActivePart] = useState<number | null>(null);

  const parts = [
    { text: t('manifesto', 'main_1'), detail: t('manifesto', 'detail_1') },
    { text: t('manifesto', 'main_2'), detail: t('manifesto', 'detail_2'), accent: true },
    { text: t('manifesto', 'main_3'), detail: t('manifesto', 'detail_3') }
  ];

  return (
    <section className="bg-black py-40 md:py-60 px-6 md:px-24 relative overflow-hidden flex flex-col items-center justify-center">
      <div className={`absolute inset-0 transition-opacity duration-1000 ${activePart !== null ? 'opacity-40' : 'opacity-20'}`}>
        <img 
          src="https://images.unsplash.com/photo-1558441719-ffb4d4520f6b?q=80&w=2000&auto=format&fit=crop" 
          alt="Technical Structure" 
          className={`w-full h-full object-cover grayscale mix-blend-overlay transition-transform duration-[3s] ${activePart !== null ? 'scale-110 rotate-1' : 'scale-100'}`}
        />
      </div>

      <div className="relative z-10 max-w-7xl w-full text-center">
        <div className="flex flex-col gap-2 md:gap-4 mb-20">
          {parts.map((part, index) => (
            <button
              key={index}
              onClick={() => setActivePart(activePart === index ? null : index)}
              className="group relative block w-full text-center focus:outline-none"
            >
              <h2 className={`text-[clamp(2rem,8.5vw,8.5rem)] leading-[0.8] tracking-tighter uppercase font-bold transition-all duration-500 cursor-pointer
                ${activePart === index ? 'text-red-600' : 'text-white outline-text hover:text-white/80'}
                ${part.accent && activePart !== index ? 'text-red-600/60 italic' : ''}
              `}>
                {part.text}
              </h2>
              
              {/* Detail Panel */}
              <div className={`overflow-hidden transition-all duration-700 ease-in-out ${activePart === index ? 'max-h-[500px] mt-8 md:mt-12 opacity-100' : 'max-h-0 opacity-0'}`}>
                <div className="max-w-3xl mx-auto p-6 md:p-10 border-l-4 md:border-l-8 border-red-600 bg-white/5 backdrop-blur-md">
                   <p className="text-lg md:text-3xl text-white font-light leading-tight italic text-left">
                     {part.detail}
                   </p>
                   <div className="mt-6 flex items-center gap-4 text-mono text-xs md:text-sm text-red-600 font-bold tracking-[0.3em]">
                      <span className="animate-pulse">CRITICAL_INSIGHT_0{index + 1}</span>
                      <div className="h-px flex-grow bg-red-600/30"></div>
                   </div>
                </div>
              </div>
            </button>
          ))}
        </div>
        
        <div className={`transition-all duration-700 ${activePart !== null ? 'opacity-20 scale-95' : 'opacity-100'}`}>
            <h2 className="text-[clamp(1.1rem,3.5vw,3rem)] text-white/40 uppercase font-bold leading-none tracking-tighter mb-10">
                {t('manifesto', 'sub')}
            </h2>
            <div className="h-px w-24 md:w-32 bg-red-600 mx-auto mb-10"></div>
            <p className="text-lg md:text-2xl text-mono text-red-600 uppercase tracking-[0.4em] font-black animate-pulse">
                {t('manifesto', 'footer')}
            </p>
        </div>
      </div>
      
      <style>{`
        .outline-text {
            -webkit-text-stroke: 1px rgba(255,255,255,0.4);
            color: transparent;
        }
        @media (min-width: 768px) {
          .outline-text {
              -webkit-text-stroke: 2px rgba(255,255,255,0.3);
          }
        }
        .outline-text:hover {
            -webkit-text-stroke: 2px white;
        }
      `}</style>
    </section>
  );
};

export default Manifesto;

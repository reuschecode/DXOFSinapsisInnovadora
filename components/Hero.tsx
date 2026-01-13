
import React from 'react';
import { useLanguage } from '../LanguageContext';
import Logo from './Logo';

interface HeroProps {
  onOpenReg: () => void;
}

const Hero: React.FC<HeroProps> = ({ onOpenReg }) => {
  const { t } = useLanguage();
  const headlineParts = t('hero', 'headline').split('.');

  return (
    <section className="relative min-h-screen flex flex-col justify-center px-6 md:px-24 lg:px-48 bg-black overflow-hidden border-b border-white/10">
      <div className="scanline"></div>
      
      <div className="absolute inset-0 opacity-60 pointer-events-none">
        <img 
          src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2000&auto=format&fit=crop" 
          alt="Structural Governance" 
          className="w-full h-full object-cover grayscale contrast-[1.4] brightness-[0.3]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-black/60"></div>
      </div>

      <div className="relative z-10 max-w-7xl">
        <div className="mb-12 inline-flex items-center gap-4">
          <Logo size="md" />
          <span className="text-mono text-xs text-red-600 font-bold border border-red-600 px-3 py-1 animate-pulse">
            {t('hero', 'alert')}
          </span>
        </div>
        
        <h1 className="text-[clamp(3.5rem,11vw,11rem)] leading-[0.8] tracking-tighter uppercase font-bold text-white mb-10">
          {headlineParts[0]}<span className="text-red-600">.</span><br/>
          <span className="text-red-600 italic font-light">{headlineParts[1]}</span>
        </h1>

        <div className="max-w-3xl mb-16">
          <p className="text-[clamp(1.25rem,2.8vw,2.2rem)] font-light leading-tight tracking-tight text-white/80 border-l-4 border-red-600 pl-8">
            {t('hero', 'subheadline')}
          </p>
        </div>

        <div className="flex flex-col md:flex-row gap-6 items-start">
          <button 
            onClick={onOpenReg}
            className="group relative bg-red-600 text-white px-12 py-8 text-2xl font-black uppercase tracking-tighter hover:bg-white hover:text-black transition-all duration-500 shadow-[15px_15px_0px_rgba(255,0,0,0.3)]"
          >
            {t('hero', 'cta')}
          </button>
          <div className="text-mono text-[10px] opacity-40 uppercase tracking-widest max-w-[200px] mt-4 md:mt-0">
            [ PROTOCOLO_ACTIVO_V4.1 ] <br/> [ BOARD_LIABILITY_PROTECTION ]
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
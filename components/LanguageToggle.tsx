
import React from 'react';
import { useLanguage } from '../LanguageContext';

const LanguageToggle: React.FC = () => {
  const { lang, setLang } = useLanguage();

  return (
    <div className="fixed top-8 right-8 z-[110] flex gap-px bg-white/10 backdrop-blur-md border border-white/20">
      <button
        onClick={() => setLang('ES')}
        className={`px-4 py-2 text-mono text-xs font-bold transition-colors ${
          lang === 'ES' ? 'bg-red-600 text-white' : 'hover:bg-white/10 text-white/50'
        }`}
      >
        ES
      </button>
      <button
        onClick={() => setLang('EN')}
        className={`px-4 py-2 text-mono text-xs font-bold transition-colors ${
          lang === 'EN' ? 'bg-red-600 text-white' : 'hover:bg-white/10 text-white/50'
        }`}
      >
        EN
      </button>
    </div>
  );
};

export default LanguageToggle;

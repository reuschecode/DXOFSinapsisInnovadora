
import React, { useState } from 'react';
import { useLanguage } from '../LanguageContext';
import Modal from './Modal';

interface MaturityModelProps {
  onOpenReg: () => void;
}

const MaturityModel: React.FC<MaturityModelProps> = ({ onOpenReg }) => {
  const { t, lang } = useLanguage();
  const [selectedLevel, setSelectedLevel] = useState<number | null>(null);

  const levels = [
    { 
      title: t('maturity', 'l1'), 
      desc: t('maturity', 'l1_d'), 
      protocol: t('maturity', 'l1_p'),
      riskLabel: lang === 'ES' ? 'VULNERABLE' : 'VULNERABLE',
      deliverable: lang === 'ES' ? 'Mapa de Riesgos Inmediatos' : 'Immediate Risk Map'
    },
    { 
      title: t('maturity', 'l2'), 
      desc: t('maturity', 'l2_d'), 
      protocol: t('maturity', 'l2_p'),
      riskLabel: lang === 'ES' ? 'MEJORABLE' : 'IMPROVABLE',
      deliverable: lang === 'ES' ? 'Informe de Retorno (ROI)' : 'ROI Impact Report'
    },
    { 
      title: t('maturity', 'l3'), 
      desc: t('maturity', 'l3_d'), 
      protocol: t('maturity', 'l3_p'),
      riskLabel: lang === 'ES' ? 'OPERATIVO' : 'OPERATIONAL',
      deliverable: lang === 'ES' ? 'Manual de Blindaje Operativo' : 'Operational Shielding Manual'
    },
    { 
      title: t('maturity', 'l4'), 
      desc: t('maturity', 'l4_d'), 
      protocol: t('maturity', 'l4_p'),
      riskLabel: lang === 'ES' ? 'SEGURO' : 'SECURE',
      deliverable: lang === 'ES' ? 'Certificación de Protección' : 'Protection Certification'
    },
    { 
      title: t('maturity', 'l5'), 
      desc: t('maturity', 'l5_d'), 
      protocol: t('maturity', 'l5_p'),
      riskLabel: lang === 'ES' ? 'LÍDER' : 'LEADER',
      deliverable: lang === 'ES' ? 'Ventaja Competitiva Total' : 'Total Competitive Advantage'
    }
  ];

  return (
    <section className="relative bg-black py-32 md:py-48 px-6 md:px-24 border-y border-white/10 overflow-hidden">
      <div className="absolute inset-0 opacity-15 pointer-events-none">
        <img 
          src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2000&auto=format&fit=crop" 
          className="w-full h-full object-cover grayscale brightness-[0.2]"
          alt=""
        />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="mb-20 flex flex-col md:flex-row justify-between items-end gap-10">
          <div>
            <h2 className="text-mono text-red-600 font-bold uppercase tracking-static text-xs mb-6">
              [ {t('maturity', 'title')} ]
            </h2>
            <p className="text-5xl md:text-8xl font-black uppercase tracking-tighter leading-[0.8] mb-0">
              {t('maturity', 'subtitle')}
            </p>
          </div>
          <p className="text-xl italic opacity-40 max-w-sm border-l border-white/20 pl-6">
            {lang === 'ES' ? "Dormir tranquilo depende de saber quién responde por tus sistemas." : "Sleeping soundly depends on knowing who is responsible for your systems."}
          </p>
        </div>
        
        <div className="space-y-2">
          {levels.map((level, i) => (
            <button 
              key={i} 
              onClick={() => setSelectedLevel(i)}
              className="group w-full text-left relative bg-white/5 backdrop-blur-sm border border-white/10 p-8 md:p-12 hover:bg-red-600 transition-all duration-500 flex flex-col md:flex-row md:items-center justify-between gap-6"
            >
              <div className="relative z-10 flex items-center gap-10">
                <span className="text-2xl font-mono text-white/20 group-hover:text-black transition-colors">0{i + 1}</span>
                <div>
                  <h3 className="text-2xl md:text-3xl font-black uppercase tracking-tight group-hover:text-black transition-colors mb-1 leading-none">
                    {level.title}
                  </h3>
                  <p className="text-lg font-light opacity-50 group-hover:opacity-100 group-hover:text-black transition-all leading-tight">
                    {level.desc}
                  </p>
                </div>
              </div>
              <div className="text-mono text-[10px] font-black uppercase px-5 py-2 border border-white/20 group-hover:border-black group-hover:bg-black group-hover:text-white transition-all">
                {lang === 'ES' ? 'VER SOLUCIÓN' : 'VIEW SOLUTION'}
              </div>
            </button>
          ))}
        </div>
        
        <div className="mt-20 flex justify-center">
            <button 
                onClick={onOpenReg}
                className="bg-red-600 text-white px-16 py-8 text-2xl font-black uppercase tracking-widest hover:bg-white hover:text-black transition-all shadow-[20px_20px_0px_rgba(255,255,255,0.05)]"
            >
                {t('maturity', 'cta')}
            </button>
        </div>
      </div>

      {selectedLevel !== null && (
        <Modal 
          isOpen={true} 
          onClose={() => setSelectedLevel(null)}
          title={levels[selectedLevel].title}
          subtitle={lang === 'ES' ? "Blindaje para tu Negocio" : "Shielding for your Business"}
        >
          <div className="space-y-10">
            <div className="flex items-center justify-between gap-6 border-b border-black/5 pb-6">
               <span className="text-5xl md:text-6xl font-black text-red-600 opacity-20 italic">0{selectedLevel + 1}</span>
               <div className="text-right">
                  <span className="text-mono text-[9px] font-black uppercase tracking-widest text-red-600 block mb-1">{lang === 'ES' ? 'ESTADO_ACTUAL' : 'CURRENT_STATUS'}</span>
                  <span className="text-xl font-black uppercase tracking-tighter">{levels[selectedLevel].riskLabel}</span>
               </div>
            </div>
            
            <div className="space-y-4">
              <h4 className="text-mono text-[9px] font-black text-black/40 uppercase tracking-[0.3em]">{lang === 'ES' ? 'LO QUE HAREMOS POR TI' : 'WHAT WE WILL DO FOR YOU'}</h4>
              <p className="text-2xl md:text-3xl font-bold italic leading-tight tracking-tighter bg-black/5 p-6 border-l-8 border-red-600">
                {levels[selectedLevel].protocol}
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
               <div className="p-6 border-2 border-black flex flex-col justify-between h-full">
                  <div>
                    <h4 className="font-black uppercase text-[10px] tracking-[0.3em] mb-4 text-red-600">{lang === 'ES' ? 'BENEFICIOS REALES' : 'REAL BENEFITS'}</h4>
                    <ul className="space-y-3 text-base font-medium opacity-90">
                      <li className="flex items-start gap-2">
                        <span className="text-red-600 font-black">/</span>
                        {lang === 'ES' ? 'Eliminación de puntos ciegos' : 'Elimination of blind spots'}
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-red-600 font-black">/</span>
                        {lang === 'ES' ? 'Protección de tu patrimonio' : 'Asset protection'}
                      </li>
                    </ul>
                  </div>
               </div>
               <div className="p-6 bg-black text-white flex flex-col justify-between h-full">
                  <div>
                    <h4 className="font-black uppercase text-[10px] tracking-[0.3em] mb-4 text-red-600">{lang === 'ES' ? 'RESULTADO FINAL' : 'FINAL RESULT'}</h4>
                    <p className="text-2xl font-black uppercase italic leading-none tracking-tighter transition-colors">
                      {levels[selectedLevel].deliverable}
                    </p>
                  </div>
               </div>
            </div>

            <button 
              onClick={() => {
                setSelectedLevel(null);
                onOpenReg();
              }}
              className="w-full bg-red-600 text-white py-6 text-xl font-black uppercase tracking-widest hover:bg-black transition-all shadow-[10px_10px_0px_rgba(0,0,0,0.1)]"
            >
              {lang === 'ES' ? 'MEJORAR MI NIVEL' : 'UPGRADE MY LEVEL'}
            </button>
          </div>
        </Modal>
      )}
    </section>
  );
};

export default MaturityModel;

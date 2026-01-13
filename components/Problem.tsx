
import React, { useState } from 'react';
import { useLanguage } from '../LanguageContext';
import Modal from './Modal';

const Problem: React.FC = () => {
  const { t, lang } = useLanguage();
  const [selectedCase, setSelectedCase] = useState<number | null>(null);

  const problems = [
    { 
        title: t('problem', 'p1_title'), 
        desc: t('problem', 'p1_desc'),
        caseTitle: t('problem', 'p1_case_title'),
        caseText: t('problem', 'p1_case_text'),
        evidence: t('problem', 'p1_evidence')
    },
    { 
        title: t('problem', 'p2_title'), 
        desc: t('problem', 'p2_desc'),
        caseTitle: t('problem', 'p2_case_title'),
        caseText: t('problem', 'p2_case_text'),
        evidence: t('problem', 'p2_evidence')
    },
    { 
        title: t('problem', 'p3_title'), 
        desc: t('problem', 'p3_desc'),
        caseTitle: t('problem', 'p3_case_title'),
        caseText: t('problem', 'p3_case_text'),
        evidence: t('problem', 'p3_evidence')
    }
  ];

  return (
    <section className="relative bg-white text-black py-24 md:py-40 px-6 md:px-24 overflow-hidden">
      {/* Background Graphic */}
      <div className="absolute top-0 right-0 w-1/3 h-full opacity-[0.08] pointer-events-none">
        <img src="https://images.unsplash.com/photo-1510074377623-8cf13fb86c08?q=80&w=1000&auto=format&fit=crop" className="w-full h-full object-cover grayscale" alt="" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="mb-20">
          <h2 className="text-[clamp(2.5rem,7.5vw,7.5rem)] leading-[0.85] tracking-tighter uppercase font-black">
            {t('problem', 'title')} <span className="text-red-600 italic">{t('problem', 'title_accent')}</span>
          </h2>
          <p className="text-2xl md:text-3xl font-light opacity-50 mt-6 max-w-2xl">{t('problem', 'subtitle')}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-black/10 border border-black/10">
          {problems.map((p, index) => (
            <button 
              key={index} 
              onClick={() => setSelectedCase(index)}
              className="text-left bg-white p-12 group hover:bg-black transition-all duration-500 flex flex-col justify-between min-h-[350px] cursor-pointer outline-none border-b md:border-b-0"
            >
              <div>
                <span className="text-mono text-red-600 text-[10px] font-black block mb-10 uppercase tracking-[0.3em]">[ FAIL_REPORT_0{index + 1} ]</span>
                <h3 className="text-3xl mb-4 group-hover:text-white transition-colors leading-[0.9] uppercase font-bold">
                  {p.title}
                </h3>
                <p className="text-xl opacity-60 group-hover:text-white transition-all font-light leading-tight">
                  {p.desc}
                </p>
              </div>
              <div className="mt-8 text-red-600 font-black text-xs uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-all flex items-center gap-3">
                {lang === 'ES' ? 'VER FORENSE' : 'VIEW FORENSIC'}
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                    <path d="M7 17L17 7M17 7H7M17 7V17"/>
                </svg>
              </div>
            </button>
          ))}
        </div>
      </div>

      {selectedCase !== null && (
        <Modal 
          isOpen={true} 
          onClose={() => setSelectedCase(null)}
          title={problems[selectedCase].caseTitle}
          subtitle={lang === 'ES' ? "Análisis de Exposición Real" : "Real Exposure Analysis"}
        >
          <div className="space-y-10">
            <div className="p-8 bg-red-600 text-white border-l-8 border-black shadow-[10px_10px_0px_rgba(0,0,0,0.1)]">
                <p className="text-mono text-[9px] font-black uppercase tracking-[0.3em] mb-4 opacity-70">{lang === 'ES' ? 'DIAGNÓSTICO_TÉCNICO' : 'TECHNICAL_DIAGNOSIS'}</p>
                <p className="text-xl md:text-2xl font-black leading-tight italic uppercase tracking-tighter">
                    {problems[selectedCase].caseText}
                </p>
            </div>

            <div className="space-y-4">
              <h5 className="text-mono text-[10px] font-black text-red-600 uppercase tracking-[0.3em] flex items-center gap-4">
                <span className="w-8 h-px bg-red-600"></span>
                {lang === 'ES' ? 'EVIDENCIA_DEL_MERCADO' : 'MARKET_EVIDENCE'}
              </h5>
              <div className="p-8 bg-black/5 border-2 border-dashed border-black/10">
                <p className="text-lg md:text-xl font-bold leading-tight text-black italic">
                   "{problems[selectedCase].evidence}"
                </p>
              </div>
            </div>

            <div className="space-y-3 pt-4 border-t border-black/10">
              <h5 className="text-mono text-[10px] font-bold text-red-600 uppercase tracking-widest">{lang === 'ES' ? 'CONCLUSIÓN DXOF+' : 'DXOF+ CONCLUSION'}</h5>
              <p className="text-lg font-bold leading-tight text-black opacity-90 border-l-4 border-red-600 pl-6">
                {selectedCase === 0 && (lang === 'ES' ? "Sin un AI System Owner responsable, la empresa es financieramente indefendible ante litigios algorítmicos." : "Without a responsible AI System Owner, the company is financially indefensible against algorithmic litigation.")}
                {selectedCase === 1 && (lang === 'ES' ? "La IA no es una solución tecnológica; es un riesgo de gobernanza que destruye valor si no se ancla a KPIs reales." : "AI is not a tech solution; it's a governance risk that destroys value if not anchored to real KPIs.")}
                {selectedCase === 2 && (lang === 'ES' ? "Confiar en modelos a escala sin una capa 'Observer' independiente anula la soberanía decisional del Directorio." : "Trusting scale models without an independent 'Observer' layer annuls the Board's decisional sovereignty.")}
              </p>
            </div>
          </div>
        </Modal>
      )}
    </section>
  );
};

export default Problem;
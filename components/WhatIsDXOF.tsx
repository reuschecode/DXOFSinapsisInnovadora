
import React, { useState } from 'react';
import { useLanguage } from '../LanguageContext';
import Modal from './Modal';

interface LayerData {
  id: string;
  name: string;
  question: string;
  subtitle: string;
  image: string;
  content: React.ReactNode;
}

const WhatIsDXOF: React.FC = () => {
  const { t, lang } = useLanguage();
  const [selectedId, setSelectedId] = useState<string | null>(null);

  const layers: LayerData[] = [
    {
      id: "intent",
      name: t('dxof', 'initiatives'),
      question: t('dxof', 'role1'),
      subtitle: lang === 'ES' ? "Sin KPI y sponsor, no existe caso de uso." : "Without KPI and sponsor, there is no use case.",
      image: "https://images.unsplash.com/photo-1518186285589-2f7649de83e0?q=80&w=1000&auto=format&fit=crop",
      content: (
        <div className="grid md:grid-cols-2 gap-12 text-black">
          <div className="space-y-6">
            <h4 className="font-bold uppercase tracking-wider text-red-600 text-mono text-base">{lang === 'ES' ? 'Outputs Obligatorios' : 'Mandatory Outputs'}</h4>
            <ul className="space-y-4 text-xl">
                <li className="p-4 bg-black/5 border-l-4 border-black">• {lang === 'ES' ? 'Problema de negocio definido' : 'Defined business problem'}</li>
                <li className="p-4 bg-black/5 border-l-4 border-black">• {lang === 'ES' ? 'KPI económico asociado' : 'Associated economic KPI'}</li>
                <li className="p-4 bg-black/5 border-l-4 border-black">• {lang === 'ES' ? 'Sponsor de negocio identificado' : 'Identified business sponsor'}</li>
            </ul>
          </div>
          <div className="bg-red-600 text-white p-10 flex flex-col justify-center">
            <p className="text-3xl font-black uppercase italic leading-tight">{lang === 'ES' ? 'VALIDACIÓN DE VALOR' : 'VALUE VALIDATION'}</p>
            <p className="mt-4 text-lg opacity-80">{lang === 'ES' ? 'Solo avanzamos si la decisión impacta el balance de situación.' : 'We only move forward if the decision impacts the balance sheet.'}</p>
          </div>
        </div>
      )
    },
    {
      id: "design",
      name: t('dxof', 'orchestrator'),
      question: t('dxof', 'role2'),
      subtitle: lang === 'ES' ? "Nombramiento del AI System Owner (Accountable)." : "Appointment of the AI System Owner (Accountable).",
      image: "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=800&auto=format&fit=crop",
      content: (
        <div className="space-y-10 text-black">
          <div className="grid md:grid-cols-2 gap-10">
            <div className="p-8 border-2 border-black">
                <h5 className="font-black uppercase mb-4">{lang === 'ES' ? 'Clasificación de Riesgo' : 'Risk Classification'}</h5>
                <p className="text-4xl font-bold tracking-tighter">BAJO / MEDIO / ALTO</p>
            </div>
            <div className="p-8 bg-black text-white">
                <h5 className="font-black uppercase mb-4 text-red-600">{lang === 'ES' ? 'Output Crítico' : 'Critical Output'}</h5>
                <p className="text-2xl italic leading-tight">{lang === 'ES' ? 'AI System Owner nombrado con autoridad para pausar o apagar.' : 'AI System Owner appointed with authority to pause or stop.'}</p>
            </div>
          </div>
          <p className="text-lg opacity-60 italic">{lang === 'ES' ? 'Definición de límites de automatización y decisiones prohibidas.' : 'Definition of automation limits and prohibited decisions.'}</p>
        </div>
      )
    },
    {
      id: "assisted",
      name: t('dxof', 'operative'),
      question: t('dxof', 'role3'),
      subtitle: lang === 'ES' ? "Si no se puede explicar, no se puede automatizar." : "If it can't be explained, it can't be automated.",
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=800&auto=format&fit=crop",
      content: (
        <div className="space-y-8 text-black">
            <h4 className="text-mono text-red-600 font-bold uppercase tracking-widest">{lang === 'ES' ? 'REGLA DE ORO' : 'GOLDEN RULE'}</h4>
            <p className="text-4xl font-black uppercase tracking-tighter leading-[0.85]">{lang === 'ES' ? 'LA IA NO DECIDE: PROPONE' : 'AI DOES NOT DECIDE: IT PROPOSES'}</p>
            <div className="p-8 bg-black/5 border-l-8 border-red-600">
                <ul className="space-y-4 text-xl font-medium">
                    <li>• {lang === 'ES' ? 'Validaciones técnicas y de riesgo' : 'Technical and risk validations'}</li>
                    <li>• {lang === 'ES' ? 'Umbrales de escalamiento humano' : 'Human escalation thresholds'}</li>
                    <li>• {lang === 'ES' ? 'Trazabilidad absoluta de la lógica' : 'Absolute logic traceability'}</li>
                </ul>
            </div>
        </div>
      )
    },
    {
      id: "governance",
      name: t('dxof', 'observer'),
      question: t('dxof', 'role4'),
      subtitle: lang === 'ES' ? "Kill Switch operativo y revisión periódica." : "Operational Kill Switch and periodic review.",
      image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=800&auto=format&fit=crop",
      content: (
        <div className="grid md:grid-cols-2 gap-10 text-black">
            <div className="space-y-6">
                <p className="text-2xl font-bold uppercase italic">{lang === 'ES' ? 'Mecanismos Obligatorios' : 'Mandatory Mechanisms'}</p>
                <div className="space-y-2 text-mono text-sm opacity-60">
                    <p>[ MONITOREO_CONTINUO ]</p>
                    <p>[ KILL_SWITCH_OPERATIVO ]</p>
                    <p>[ CANAL_FEEDBACK_RECLAMOS ]</p>
                </div>
            </div>
            <div className="p-8 bg-black text-white flex items-center">
                <p className="text-xl md:text-2xl font-light italic">{lang === 'ES' ? 'Aseguramos que el sistema no se desvíe de la intención original.' : 'We ensure the system does not deviate from the original intent.'}</p>
            </div>
        </div>
      )
    }
  ];

  const currentLayer = layers.find(l => l.id === selectedId);

  return (
    <section className="bg-white text-black py-24 md:py-48 px-6 md:px-24 lg:px-48 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-24 md:mb-32 gap-12">
            <h2 className="text-[clamp(2.5rem,8vw,7rem)] leading-[0.8] mb-0 tracking-tighter uppercase font-black">
              {t('dxof', 'title')} <br/><span className="text-red-600 italic">{t('dxof', 'title_accent')}</span>
            </h2>
            <div className="max-w-md md:text-right">
                <div className="flex items-center gap-3 md:justify-end mb-4">
                    <span className="w-2.5 h-2.5 bg-red-600 rounded-full animate-pulse"></span>
                    <p className="text-mono text-sm font-bold uppercase tracking-[0.3em] text-red-600">SEQUENTIAL_CORE</p>
                </div>
                <p className="text-xl md:text-2xl font-light italic leading-none text-black/60">{t('dxof', 'footer')}</p>
            </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-14">
          {layers.map((layer, index) => (
            <button 
              key={layer.id} 
              onClick={() => setSelectedId(layer.id)}
              className="group relative min-h-[400px] md:h-[500px] overflow-hidden bg-black text-white text-left cursor-pointer border border-black/10 transition-all duration-700 hover:shadow-[20px_20px_0px_rgba(255,0,0,1)]"
            >
              <img 
                src={layer.image} 
                className="img-brutalist absolute inset-0 w-full h-full object-cover grayscale contrast-[2] brightness-[0.35]" 
                alt={layer.name}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent"></div>
              
              <div className="relative h-full p-8 md:p-12 flex flex-col justify-end">
                <span className="text-mono text-red-600 font-black mb-4 md:mb-8 text-base">[{t('dxof', 'protocol')}0{index + 1} ]</span>
                <h3 className="text-[clamp(1.75rem,4vw,3.5rem)] mb-4 md:mb-6 leading-[0.85] tracking-tighter italic group-hover:text-red-600 transition-colors uppercase font-black max-w-[90%]">
                  {layer.name}
                </h3>
                <p className="text-xl md:text-2xl font-light opacity-60 group-hover:opacity-100 transition-opacity uppercase tracking-tight leading-none">
                  {layer.question}
                </p>
                
                <div className="absolute top-6 right-6 md:top-10 md:right-10 border-2 border-white/20 p-3 md:p-4 group-hover:border-red-600 group-hover:bg-red-600 group-hover:rotate-45 transition-all duration-500 hidden sm:flex">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                        <path d="M5 12h14M12 5l7 7-7 7"/>
                    </svg>
                </div>
              </div>
            </button>
          ))}
        </div>

        <div className="mt-32 md:mt-52 text-center px-4 space-y-4 md:space-y-6">
          <p className="text-mono text-xs md:text-sm uppercase opacity-40 tracking-[0.5em] mb-10 font-bold">{lang === 'ES' ? 'ROLES OFICIALES DXOF+' : 'OFFICIAL DXOF+ ROLES'}</p>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-10 md:gap-12 text-left border-t border-black/10 pt-16">
             <div>
                <p className="font-bold uppercase text-red-600 mb-2">AI Governance Lead</p>
                <p className="text-sm opacity-60">{lang === 'ES' ? 'Define estándares y arbitra conflictos de gobierno.' : 'Defines standards and arbitrates governance conflicts.'}</p>
             </div>
             <div>
                <p className="font-bold uppercase text-red-600 mb-2">AI System Owner</p>
                <p className="text-sm opacity-60 font-bold">{lang === 'ES' ? 'Rol crítico: Responde por impactos y puede apagar el sistema.' : 'Critical role: Accounts for impacts and can shut down the system.'}</p>
             </div>
             <div>
                <p className="font-bold uppercase text-red-600 mb-2">Risk & Ethics Lead</p>
                <p className="text-sm opacity-60">{lang === 'ES' ? 'Evalúa impactos no técnicos y define límites éticos.' : 'Evaluates non-technical impacts and defines ethical limits.'}</p>
             </div>
             <div>
                <p className="font-bold uppercase text-red-600 mb-2">Legal / Compliance</p>
                <p className="text-sm opacity-60">{lang === 'ES' ? 'Gestiona exposición legal y asegura cumplimiento fiduciario.' : 'Manages legal exposure and ensures fiduciary compliance.'}</p>
             </div>
          </div>
        </div>
      </div>

      <Modal 
        isOpen={!!selectedId} 
        onClose={() => setSelectedId(null)}
        title={currentLayer?.name || ""}
        subtitle={currentLayer?.subtitle || ""}
      >
        <div className="max-w-full overflow-hidden">
          {currentLayer?.content || <p className="text-xl italic opacity-60">{lang === 'ES' ? 'Cargando protocolo...' : 'Loading protocol...'}</p>}
        </div>
      </Modal>
    </section>
  );
};

export default WhatIsDXOF;

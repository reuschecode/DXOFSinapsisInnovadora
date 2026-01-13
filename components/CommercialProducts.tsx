
import React, { useState } from 'react';
import { useLanguage } from '../LanguageContext';
import Modal from './Modal';

interface ProductProps {
  onOpenReg: () => void;
}

const CommercialProducts: React.FC<ProductProps> = ({ onOpenReg }) => {
  const { t, lang } = useLanguage();
  const [selectedPackIndex, setSelectedPackIndex] = useState<number | null>(null);

  const products = [
    {
      title: t('services', 's1'),
      description: t('services', 's1_desc'),
      img: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?q=80&w=800&auto=format&fit=crop",
      cta: lang === 'ES' ? "AGENDAR AUDITORÍA" : "SCHEDULE AUDIT",
      protocol: t('services', 'p1_protocol'),
      kpi: t('services', 'p1_kpi'),
      code: "AUDIT_V4.1",
      steps: lang === 'ES' ? [
        "Mapeo de Shadow AI y deuda decisional.",
        "Auditoría forense de logs de decisión.",
        "Identificación de brechas de responsabilidad."
      ] : [
        "Shadow AI and decisional debt mapping.",
        "Forensic decision log audit.",
        "Identification of responsibility gaps."
      ]
    },
    {
      title: t('services', 's2'),
      description: t('services', 's2_desc'),
      img: "https://images.unsplash.com/photo-1497366811353-6870744d04b2?q=80&w=800&auto=format&fit=crop",
      cta: lang === 'ES' ? "DISEÑAR PROTOCOLOS" : "DESIGN PROTOCOLS",
      protocol: t('services', 'p2_protocol'),
      kpi: t('services', 'p2_kpi'),
      code: "SHIELD_V4.1",
      steps: lang === 'ES' ? [
        "Definición de matrices RACI-AI.",
        "Diseño técnico de Kill-Switches.",
        "Configuración de umbrales de riesgo."
      ] : [
        "RACI-AI matrix definition.",
        "Technical Kill-Switch design.",
        "Risk threshold configuration."
      ]
    },
    {
      title: t('services', 's3'),
      description: t('services', 's3_desc'),
      img: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=800&auto=format&fit=crop",
      cta: lang === 'ES' ? "ESCALAR OPERACIÓN" : "SCALE OPERATION",
      protocol: t('services', 'p3_protocol'),
      kpi: t('services', 'p3_kpi'),
      code: "SCALE_V4.1",
      steps: lang === 'ES' ? [
        "Despliegue de Decisional Ledgers.",
        "Certificación de gobernanza DXOF+.",
        "Orquestación de soberanía decisional."
      ] : [
        "Decisional Ledger deployment.",
        "DXOF+ governance certification.",
        "Decisional sovereignty orchestration."
      ]
    }
  ];

  return (
    <section className="bg-white text-black py-24 md:py-40 px-6 md:px-24 overflow-hidden border-t border-black/10">
      <div className="max-w-7xl mx-auto">
        <div className="mb-20">
          <h2 className="text-[clamp(2.5rem,7vw,7rem)] leading-[0.85] tracking-tighter font-black uppercase">
            {t('services', 'title')} <span className="text-red-600 italic">{t('services', 'title_accent')}</span>
          </h2>
          <div className="h-2 w-32 bg-red-600 mt-6"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <div 
              key={index} 
              className="group relative bg-black text-white p-10 flex flex-col justify-between border border-black/10 overflow-hidden min-h-[500px]"
            >
              <img 
                src={product.img} 
                className="img-brutalist absolute inset-0 w-full h-full object-cover grayscale contrast-[1.5] brightness-[0.5] group-hover:scale-105 transition-transform duration-[1.5s]" 
                alt={product.title}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent"></div>
              
              <div className="relative z-10 space-y-6">
                <div className="flex justify-between items-start">
                  <span className="text-mono text-red-600 font-bold uppercase tracking-widest text-[10px] bg-red-600/20 px-2 py-1">[{product.code}]</span>
                  <button 
                    onClick={() => setSelectedPackIndex(index)}
                    className="text-white/60 hover:text-red-600 text-[10px] font-black uppercase tracking-widest flex items-center gap-2 border-b border-white/10 hover:border-red-600 transition-all"
                  >
                    {lang === 'ES' ? 'VER DETALLES TÉCNICOS' : 'VIEW TECHNICAL SPECS'}
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                        <path d="M5 12h14M12 5l7 7-7 7"/>
                    </svg>
                  </button>
                </div>
                <h3 className="text-4xl font-black uppercase tracking-tighter leading-none italic">{product.title}</h3>
                <p className="text-xl opacity-60 group-hover:opacity-100 transition-opacity leading-tight font-light">{product.description}</p>
              </div>

              <div className="relative z-10 space-y-3 mt-8">
                <button 
                    onClick={onOpenReg}
                    className="w-full bg-red-600 text-white py-6 text-xl font-black uppercase tracking-widest hover:bg-white hover:text-black transition-all"
                >
                    {product.cta}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {selectedPackIndex !== null && (
        <Modal 
          isOpen={true} 
          onClose={() => setSelectedPackIndex(null)}
          title={products[selectedPackIndex].title}
          subtitle={t('services', 'modal_title')}
        >
          <div className="space-y-10">
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-6">
                 <h4 className="text-mono text-[9px] font-black text-red-600 uppercase tracking-widest">{t('services', 'protocol_title')}</h4>
                 <p className="text-xl font-bold leading-tight italic border-l-8 border-red-600 pl-6">
                    {products[selectedPackIndex].protocol}
                 </p>
                 <div className="space-y-3">
                   <h5 className="text-mono text-[9px] font-black uppercase opacity-40">{lang === 'ES' ? 'FASES_DE_INTERVENCIÓN' : 'INTERVENTION_PHASES'}</h5>
                   <ul className="space-y-2">
                     {products[selectedPackIndex].steps.map((step, idx) => (
                       <li key={idx} className="flex items-center gap-3 text-base font-bold uppercase tracking-tighter">
                         <span className="w-1 h-1 bg-black"></span>
                         {step}
                       </li>
                     ))}
                   </ul>
                 </div>
              </div>
              <div className="space-y-6">
                 <h4 className="text-mono text-[9px] font-black text-red-600 uppercase tracking-widest">METRICA_KPI</h4>
                 <p className="text-xl font-bold leading-tight italic border-l-8 border-black pl-6">
                    {products[selectedPackIndex].kpi}
                 </p>
                 <div className="p-6 bg-black text-white">
                   <p className="text-mono text-[9px] font-black text-red-600 mb-3 tracking-[0.3em]">DXOF_SECURITY_LEVEL</p>
                   <p className="text-3xl font-black uppercase italic tracking-tighter">MAX_COMPLIANCE</p>
                 </div>
              </div>
            </div>

            <div className="p-8 bg-black text-white shadow-[10px_10px_0px_rgba(255,0,0,1)]">
              <span className="text-mono text-[9px] font-black uppercase tracking-[0.4em] opacity-40 mb-3 block">{t('services', 'deliverable')}</span>
              <p className="text-2xl md:text-3xl font-black uppercase italic leading-none tracking-tighter">{t('services', 'deliverable_text')}</p>
            </div>

            <div className="flex flex-col md:flex-row gap-4 pt-4">
               <button 
                  onClick={() => {
                    setSelectedPackIndex(null);
                    onOpenReg();
                  }}
                  className="flex-grow bg-red-600 text-white py-6 text-xl font-black uppercase tracking-widest hover:bg-black transition-all shadow-[8px_8px_0px_rgba(0,0,0,0.1)]"
               >
                  {products[selectedPackIndex].cta}
               </button>
               <button 
                  onClick={() => setSelectedPackIndex(null)}
                  className="px-10 py-6 border-4 border-black text-lg font-black uppercase tracking-widest hover:bg-black hover:text-white transition-all"
               >
                  {lang === 'ES' ? 'VOLVER' : 'BACK'}
               </button>
            </div>
          </div>
        </Modal>
      )}
    </section>
  );
};

export default CommercialProducts;

import React, { useState } from 'react';
import { useLanguage } from '../LanguageContext';
import Modal from './Modal';

const ArchitectureLayers: React.FC = () => {
  const { t, lang } = useLanguage();
  const [selectedLayer, setSelectedLayer] = useState<number | null>(null);

  const layers = [
    { 
      id: "intent", 
      name: t('dxof', 'initiatives'), 
      question: t('dxof', 'role1'), 
      code: "BUSINESS_KPI_VAL", 
      img: "https://images.unsplash.com/photo-1518186285589-2f7649de83e0?q=80&w=1000&auto=format&fit=crop",
      detail: lang === 'ES' ? "Validación de KPIs económicos. Sin impacto directo al balance o un sponsor de negocio claro, el protocolo DXOF+ bloquea el despliegue para proteger el capital." : "Economic KPI validation. Without a direct balance sheet impact or a clear business sponsor, the DXOF+ protocol blocks deployment to protect capital.",
      mandatories: lang === 'ES' ? ["Sponsor de Negocio Asignado", "Atribución de Valor al EBITDA", "Mapa de Riesgo Reputacional"] : ["Assigned Business Sponsor", "EBITDA Value Attribution", "Reputational Risk Map"]
    },
    { 
      id: "design", 
      name: t('dxof', 'orchestrator'), 
      question: t('dxof', 'role2'), 
      code: "RACI_AI_OWNERSHIP", 
      img: "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=800&auto=format&fit=crop",
      detail: lang === 'ES' ? "Nombramiento del Accountable legal. Designamos al 'AI System Owner' con autoridad fiduciaria y capacidad técnica para ejecutar el Kill-Switch." : "Appointment of the Legal Accountable. We designate the 'AI System Owner' with fiduciary authority and technical capacity to execute the Kill-Switch.",
      mandatories: lang === 'ES' ? ["Nombramiento de Accountable Único", "Matriz de Escalado Humano", "Veto de Decisión Automática"] : ["Unique Accountable Appointment", "Human Escalation Matrix", "Automatic Decision Veto"]
    },
    { 
      id: "assisted", 
      name: t('dxof', 'operative'), 
      question: t('dxof', 'role3'), 
      code: "X_AI_LOGIC_LEDGER", 
      img: "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=800&auto=format&fit=crop",
      detail: lang === 'ES' ? "Trazabilidad de la lógica algorítmica. Decodificamos la 'Caja Negra' para asegurar que cada decisión propuesta sea auditable y defendible ante reguladores." : "Algorithmic logic traceability. We decode the 'Black Box' to ensure every proposed decision is auditable and defensible before regulators.",
      mandatories: lang === 'ES' ? ["Registro de Lógica (Logs)", "Explicabilidad Forense", "Validación de Sesgos"] : ["Logic Logging", "Forensic Explainability", "Bias Validation"]
    },
    { 
      id: "governance", 
      name: t('dxof', 'observer'), 
      question: t('dxof', 'role4'), 
      code: "FIDUCIARY_OBSERVER_V4", 
      img: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=800&auto=format&fit=crop",
      detail: lang === 'ES' ? "Protocolo de vigilancia continua. Implementamos observadores independientes que monitorean la deriva del sistema y garantizan la soberanía decisional." : "Continuous surveillance protocol. We implement independent observers that monitor system drift and guarantee decisional sovereignty.",
      mandatories: lang === 'ES' ? ["Monitoreo de Deriva (Drift)", "Kill-Switch Operativo 24/7", "Auditoría de Terceros"] : ["Drift Monitoring", "24/7 Operational Kill-Switch", "Third-Party Auditing"]
    }
  ];

  return (
    <section className="relative bg-white text-black py-24 md:py-48 px-6 md:px-24 lg:px-48 overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full opacity-[0.1] pointer-events-none">
        <img 
          src="https://images.unsplash.com/photo-1497215728101-856f4ea42174?q=80&w=2000&auto=format&fit=crop" 
          className="w-full h-full object-cover grayscale"
          alt=""
        />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-24 md:mb-32 gap-12">
            <h2 className="text-[clamp(2.5rem,8vw,7rem)] leading-[0.8] mb-0 tracking-tighter uppercase font-black">
              {t('dxof', 'title')} <br/><span className="text-red-600 italic">{t('dxof', 'title_accent')}</span>
            </h2>
            <div className="max-w-md md:text-right">
                <p className="text-mono text-sm font-bold uppercase tracking-[0.3em] text-red-600 mb-4 animate-pulse">SPEC_V4.1_STABLE</p>
                <p className="text-xl md:text-2xl font-light italic leading-none text-black/60">
                    {lang === 'ES' ? "Gobernamos la complejidad técnica para asegurar una operación defendible." : "We govern technical complexity to ensure a defensible operation."}
                </p>
            </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-black/5 border border-black/5">
          {layers.map((layer, index) => (
            <button 
              key={layer.id} 
              onClick={() => setSelectedLayer(index)}
              className="group relative h-[450px] overflow-hidden bg-black text-white p-12 flex flex-col justify-end border-r border-b border-white/5 text-left cursor-pointer outline-none"
            >
              <img 
                src={layer.img} 
                className="img-brutalist absolute inset-0 w-full h-full object-cover grayscale contrast-[1.4] brightness-[0.5] opacity-90 group-hover:scale-105 transition-transform duration-[1.5s]" 
                alt={layer.name}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent"></div>
              <div className="relative z-10 space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-mono text-red-600 font-bold text-xs">[{layer.code}]</span>
                  <span className="text-white/40 text-[10px] font-black uppercase tracking-widest group-hover:text-red-600 transition-colors">Ver Protocolo +</span>
                </div>
                <h3 className="text-4xl md:text-5xl font-black uppercase tracking-tighter italic leading-none group-hover:text-red-600 transition-colors">
                  {layer.name}
                </h3>
                <p className="text-xl font-light opacity-60 leading-tight uppercase tracking-tight">
                  {layer.question}
                </p>
              </div>
            </button>
          ))}
        </div>
      </div>

      {selectedLayer !== null && (
        <Modal
          isOpen={true}
          onClose={() => setSelectedLayer(null)}
          title={layers[selectedLayer].name}
          subtitle={lang === 'ES' ? "Análisis de Capa Arquitectónica" : "Architectural Layer Analysis"}
        >
          <div className="space-y-10">
            <div className="space-y-4">
              <h4 className="text-mono text-[10px] font-black text-red-600 uppercase tracking-widest">{lang === 'ES' ? 'DEFINICIÓN DE CONTROL' : 'CONTROL DEFINITION'}</h4>
              <p className="text-xl md:text-2xl font-bold leading-tight italic border-l-8 border-red-600 pl-8">
                {layers[selectedLayer].detail}
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="p-8 bg-black text-white shadow-[10px_10px_0px_rgba(255,0,0,0.1)]">
                <h4 className="text-mono text-[9px] font-black text-red-600 uppercase tracking-[0.3em] mb-6">{lang === 'ES' ? 'MANDATORIOS_CAPA' : 'LAYER_MANDATORIES'}</h4>
                <ul className="space-y-4">
                  {layers[selectedLayer].mandatories.map((m, idx) => (
                    <li key={idx} className="flex items-center gap-3 text-lg font-black uppercase italic tracking-tighter">
                      <span className="w-1.5 h-1.5 bg-red-600"></span>
                      {m}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="p-8 border-2 border-black flex flex-col justify-center">
                <p className="text-mono text-[9px] font-black text-red-600 uppercase tracking-[0.3em] mb-3">{lang === 'ES' ? 'OBJETIVO_FIDUCIARIO' : 'FIDUCIARY_GOAL'}</p>
                <p className="text-xl font-bold leading-tight uppercase">
                  {selectedLayer === 0 && (lang === 'ES' ? "Evitar la quema de capital en tecnología sin retorno." : "Avoid capital burn in technology without return.")}
                  {selectedLayer === 1 && (lang === 'ES' ? "Eliminar el vacío legal de responsabilidad corporativa." : "Eliminate the legal vacuum of corporate responsibility.")}
                  {selectedLayer === 2 && (lang === 'ES' ? "Garantizar la auditabilidad ante fallos sistémicos." : "Guarantee auditability in the face of systemic failures.")}
                  {selectedLayer === 3 && (lang === 'ES' ? "Mantener la soberanía humana sobre el algoritmo." : "Maintain human sovereignty over the algorithm.")}
                </p>
              </div>
            </div>
          </div>
        </Modal>
      )}
    </section>
  );
};

export default ArchitectureLayers;
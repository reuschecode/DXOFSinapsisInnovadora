
import React, { useState } from 'react';
import { useLanguage } from '../LanguageContext';
import Modal from './Modal';

const Services: React.FC = () => {
  const { t } = useLanguage();
  const [selectedService, setSelectedService] = useState<number | null>(null);

  const services = [
    {
      title: t('services', 's1'),
      description: t('services', 's1_desc'),
      img: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?q=80&w=800&auto=format&fit=crop"
    },
    {
      title: t('services', 's2'),
      description: t('services', 's2_desc'),
      img: "https://images.unsplash.com/photo-1497366811353-6870744d04b2?q=80&w=800&auto=format&fit=crop"
    },
    {
      title: t('services', 's3'),
      description: t('services', 's3_desc'),
      img: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=800&auto=format&fit=crop"
    }
  ];

  return (
    <section className="bg-[#050505] py-32 md:py-48 px-6 md:px-24 lg:px-48 relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="mb-24 md:mb-32 flex flex-col md:flex-row md:items-end gap-6 md:gap-10">
          <h2 className="text-[clamp(2.5rem,7vw,6rem)] text-white mb-0 leading-[0.85] tracking-tighter font-black">
            {t('services', 'title')}<span className="text-red-600">.</span>
          </h2>
          <div className="flex-grow h-px bg-white/10 mb-4 hidden md:block"></div>
          <span className="text-mono text-red-600 font-bold uppercase tracking-[0.4em] mb-2 text-xs md:text-sm animate-pulse">[DECISION_ECONOMY_CORE]</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 md:gap-12">
          {services.map((service, index) => (
            <button 
              key={index} 
              onClick={() => setSelectedService(index)}
              className="group relative bg-white min-h-[480px] md:min-h-[550px] overflow-hidden text-left cursor-pointer border border-white/5 transition-transform duration-500 hover:-translate-y-3"
            >
              <img 
                src={service.img} 
                alt={service.title} 
                className="img-brutalist absolute inset-0 w-full h-full object-cover opacity-30 grayscale contrast-[2] brightness-[0.3]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-white via-white/95 to-transparent transition-opacity duration-700"></div>
              
              <div className="relative h-full p-8 md:p-10 flex flex-col justify-end text-black">
                <span className="text-mono text-red-600 font-black mb-4 text-xl md:text-2xl">S_0{index + 1}</span>
                <h3 className="text-[clamp(1.5rem,3.5vw,2.2rem)] mb-6 md:mb-8 leading-[0.9] font-black uppercase tracking-tighter">
                  {service.title}
                </h3>
                <p className="text-xl md:text-2xl font-light leading-snug opacity-80 group-hover:opacity-100 transition-opacity">
                  {service.description}
                </p>
                
                <div className="mt-8 md:mt-10 pt-8 md:pt-10 border-t border-black/10 flex justify-between items-center">
                   <span className="text-mono text-xs font-bold opacity-40 uppercase tracking-widest">Protocol_Ready</span>
                   <div className="w-12 h-12 md:w-14 md:h-14 bg-black text-white flex items-center justify-center group-hover:bg-red-600 group-hover:scale-110 transition-all duration-500">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                        <path d="M7 17L17 7M17 7H7M17 7V17"/>
                      </svg>
                   </div>
                </div>
              </div>
            </button>
          ))}
        </div>
      </div>

      {selectedService !== null && (
        <Modal 
          isOpen={true} 
          onClose={() => setSelectedService(null)}
          title={services[selectedService].title}
          subtitle={t('services', 'modal_title')}
        >
          <div className="space-y-8 md:space-y-10">
            <p className="text-3xl md:text-5xl font-black uppercase tracking-tighter leading-none text-red-600">{t('services', 'protocol_title')}</p>
            <p className="text-xl md:text-3xl font-light leading-snug border-l-4 md:border-l-8 border-red-600 pl-6 md:pl-10 italic">
              {services[selectedService].description}
            </p>
            <div className="bg-black text-white p-8 md:p-12 shadow-[15px_15px_0px_rgba(255,0,0,1)]">
               <p className="text-mono text-xs md:text-sm uppercase mb-6 opacity-50 tracking-[0.3em] font-bold">{t('services', 'deliverable')}</p>
               <p className="text-2xl md:text-4xl font-bold italic leading-tight">"{t('services', 'deliverable_text')}"</p>
            </div>
          </div>
        </Modal>
      )}
    </section>
  );
};

export default Services;

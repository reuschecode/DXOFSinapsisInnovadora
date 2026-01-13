
import React, { useState } from 'react';
import { useLanguage } from '../LanguageContext';
import { sendEmail } from '../emailService';

interface RegistrationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const RegistrationModal: React.FC<RegistrationModalProps> = ({ isOpen, onClose }) => {
  const { t, lang } = useLanguage();
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    const formData = new FormData(e.target as HTMLFormElement);
    const data = {
      id: formData.get('id') as string,
      email: formData.get('email') as string,
      magnitude: formData.get('magnitude') as string
    };

    try {
      await sendEmail(data, lang);
    } catch (error) {
      console.error('Error sending email:', error);
    }

    setSubmitted(true);
    setTimeout(() => {
        onClose();
        setSubmitted(false);
    }, 4000);
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-black/98 backdrop-blur-2xl" onClick={onClose} />
      
      <div className="relative bg-[#0a0a0a] border border-red-600/50 w-full max-w-3xl text-white shadow-[0_0_100px_rgba(255,0,0,0.1)] overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-[1px] bg-red-600/50 animate-[scan_4s_linear_infinite]" />
        
        <div className="p-8 md:p-16 relative z-10">
          {!submitted ? (
            <>
              <div className="mb-12 flex justify-between items-start">
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-2.5 h-2.5 bg-red-600 rounded-full animate-pulse" />
                    <span className="text-mono text-red-600 text-xs font-bold uppercase tracking-[0.5em]">
                      {t('registration', 'access')}
                    </span>
                  </div>
                  <h2 className="text-5xl md:text-7xl font-bold uppercase tracking-tighter leading-[0.85] italic">
                    {t('registration', 'title')} <br/><span className="text-red-600">{t('registration', 'accent')}</span>
                  </h2>
                </div>
                <button 
                  onClick={onClose} 
                  className="hover:rotate-90 transition-transform duration-300 p-2 border border-white/10 hover:border-red-600"
                >
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" />
                  </svg>
                </button>
              </div>

              <form onSubmit={handleSubmit} className="space-y-10">
                <div className="grid md:grid-cols-2 gap-10">
                  <div className="space-y-3 group">
                    <label className="text-mono text-xs uppercase font-bold opacity-40 group-focus-within:opacity-100 group-focus-within:text-red-600 transition-all tracking-widest">{t('registration', 'label_id')}</label>
                    <input 
                      required 
                      type="text" 
                      name="id"
                      placeholder={t('registration', 'placeholder_id')} 
                      className="w-full bg-white/5 border-b border-white/20 p-4 text-xl md:text-2xl font-bold uppercase tracking-tight focus:border-red-600 focus:outline-none transition-all focus:bg-white/10"
                    />
                  </div>
                  <div className="space-y-3 group">
                    <label className="text-mono text-xs uppercase font-bold opacity-40 group-focus-within:opacity-100 group-focus-within:text-red-600 transition-all tracking-widest">{t('registration', 'label_link')}</label>
                    <input 
                      required 
                      type="email" 
                      name="email"
                      placeholder={t('registration', 'placeholder_link')} 
                      className="w-full bg-white/5 border-b border-white/20 p-4 text-xl md:text-2xl font-bold uppercase tracking-tight focus:border-red-600 focus:outline-none transition-all focus:bg-white/10"
                    />
                  </div>
                </div>

                <div className="space-y-3 group">
                  <label className="text-mono text-xs uppercase font-bold opacity-40 group-focus-within:opacity-100 group-focus-within:text-red-600 transition-all tracking-widest">{t('registration', 'label_magnitude')}</label>
                  <select name="magnitude" className="w-full bg-white/5 border-b border-white/20 p-4 text-xl md:text-2xl font-bold uppercase tracking-tight focus:border-red-600 focus:outline-none transition-all appearance-none">
                    <option className="bg-black">{t('registration', 'mag_1')}</option>
                    <option className="bg-black">{t('registration', 'mag_2')}</option>
                    <option className="bg-black">{t('registration', 'mag_3')}</option>
                    <option className="bg-black">{t('registration', 'mag_4')}</option>
                  </select>
                </div>
                
                <div className="pt-8">
                  <button type="submit" className="group relative w-full bg-red-600 p-8 text-2xl md:text-3xl font-bold uppercase tracking-widest hover:bg-white hover:text-black transition-all">
                    <span className="relative z-10 flex items-center justify-center gap-4">
                      {t('registration', 'submit')}
                      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                        <path d="M5 12h14M12 5l7 7-7 7"/>
                      </svg>
                    </span>
                  </button>
                </div>
                
                <div className="flex justify-between items-center text-mono text-xs opacity-40 uppercase tracking-[0.2em] pt-4 font-bold">
                  <span>{t('registration', 'encryption')}</span>
                  <span>{t('registration', 'ip_log')}</span>
                </div>
              </form>
            </>
          ) : (
            <div className="py-24 text-center space-y-12">
                <div className="relative inline-block">
                    <div className="w-24 h-24 border-4 border-red-600/20 rounded-full animate-[ping_2s_infinite]" />
                    <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-4 h-4 bg-red-600 rounded-full" />
                    </div>
                </div>
                <div>
                  <h3 className="text-6xl md:text-8xl font-bold uppercase tracking-tighter mb-4 italic">{t('registration', 'sent_title')}</h3>
                  <p className="text-xl md:text-2xl font-light opacity-60 text-mono uppercase tracking-widest">
                    {t('registration', 'sent_sub')}
                  </p>
                </div>
                <div className="text-red-600 text-mono text-base font-bold tracking-widest">
                  {t('registration', 'wait')}
                </div>
            </div>
          )}
        </div>
      </div>
      
      <style>{`
        @keyframes scan {
          from { top: 0; }
          to { top: 100%; }
        }
      `}</style>
    </div>
  );
};

export default RegistrationModal;


import React, { useEffect } from 'react';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  subtitle: string;
  children: React.ReactNode;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, title, subtitle, children }) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => { document.body.style.overflow = 'unset'; };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-6">
      <div 
        className="absolute inset-0 bg-black/95 backdrop-blur-md" 
        onClick={onClose}
      />
      <div className="relative bg-white text-black w-full max-w-3xl max-h-[85vh] overflow-y-auto border-t-8 border-red-600 shadow-[0_0_80px_rgba(255,0,0,0.15)]">
        <div className="scanline opacity-10"></div>
        <div className="p-6 md:p-10">
          <div className="flex justify-between items-start mb-8 md:mb-10">
            <div>
              <span className="text-red-600 font-black uppercase tracking-widest text-[10px] mb-2 block">[ BLINDAJE_DXOF+ ]</span>
              <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tighter leading-[0.85]">{title}</h2>
              <p className="text-lg mt-4 font-medium text-black/60 italic border-l-2 border-black/10 pl-4 leading-tight">{subtitle}</p>
            </div>
            <button 
              onClick={onClose}
              className="text-black hover:text-red-600 transition-all p-2 border border-black/5 hover:border-red-600"
              aria-label="Cerrar"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            </button>
          </div>
          
          <div className="space-y-8 md:space-y-10">
            {children}
          </div>

          <div className="mt-12 pt-8 border-t border-black/10 flex flex-col md:flex-row justify-between items-center gap-4">
            <span className="text-[9px] font-black uppercase tracking-[0.4em] text-black/40 text-center md:text-left">DXOF+ Fiduciary Framework v4.1 // SECURE_AUDIT</span>
            <button 
              onClick={onClose}
              className="w-full md:w-auto bg-black text-white px-10 py-3 text-sm font-bold uppercase tracking-widest hover:bg-red-600 transition-all shadow-[8px_8px_0px_rgba(0,0,0,0.1)]"
            >
              CONFIRMAR LECTURA
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;

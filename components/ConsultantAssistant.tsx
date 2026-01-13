
import React, { useState, useRef, useEffect } from 'react';
import { useLanguage } from '../LanguageContext';
import { GoogleGenAI } from "@google/genai";

const ConsultantAssistant: React.FC = () => {
  const { t, lang } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<{ role: 'user' | 'assistant', content: string }[]>([]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isTyping]);

  const handleSend = async () => {
    if (!input.trim() || isTyping) return;

    const userMsg = input.trim();
    setMessages(prev => [...prev, { role: 'user', content: userMsg }]);
    setInput('');
    setIsTyping(true);

    try {
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
      const systemInstruction = `
        ROL: Jefe de Laboratorio - Auditoría Senior en DXOF+.
        OBJETIVO: Informar estrictamente sobre la metodología DXOF+ (Decision Execution and Ownership Framework).
        
        REGLAS CRÍTICAS DE RESPUESTA:
        1. RESPUESTA GENÉRICA: Únicamente debes explicar los pilares de la metodología (Capas: Intención, RACI, Lógica, Observador). No proporciones soluciones específicas a problemas particulares.
        2. NO PROMESAS: Está terminantemente prohibido prometer resultados, tiempos de ejecución o éxitos en la implementación.
        3. NO GARANTÍAS: No asegures la viabilidad de ningún proyecto sin una auditoría formal previa.
        4. NO REGALOS: No ofrezcas consultoría gratuita, tips, consejos prácticos o diagnósticos preliminares. La única vía de intervención es el proceso de auditoría oficial.
        5. TONO: Formal, frío, técnico y distante. Sin exclamaciones ni lenguaje servil.
        
        PROTOCOLO DE RESPUESTA:
        - Saludo formal técnico.
        - Explicación teórica de la capa metodológica correspondiente a la duda.
        - Advertencia sobre el riesgo de operar sin el marco DXOF+ completo.
        - Remisión final al protocolo de Auditoría de Control como único punto de entrada válido.
        
        Si el usuario solicita consejos prácticos, responde que la integridad del sistema impide emitir juicios sin una custodia fiduciaria del activo (datos/procesos) en laboratorio controlado.
        
        Idioma: ${lang === 'ES' ? 'Español' : 'Inglés'}.
      `;

      const response = await ai.models.generateContent({
        model: 'gemini-3-flash-preview',
        contents: userMsg,
        config: {
          systemInstruction,
          temperature: 0.3, // Reducido para mayor consistencia y menor "creatividad"
        },
      });

      const aiText = response.text || (lang === 'ES' ? 'Error de protocolo.' : 'Protocol error.');
      setMessages(prev => [...prev, { role: 'assistant', content: aiText }]);
    } catch (error) {
      console.error(error);
      setMessages(prev => [...prev, { role: 'assistant', content: t('assistant', 'error') }]);
    } finally {
      setIsTyping(false);
    }
  };

  return (
    <div className="fixed bottom-8 left-8 z-[120]">
      {/* Botón Flotante */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`relative group bg-red-600 text-white w-16 h-16 flex items-center justify-center border-2 border-white shadow-[8px_8px_0px_rgba(0,0,0,1)] hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all ${isOpen ? 'rotate-90' : ''}`}
      >
        {isOpen ? (
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
            <line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        ) : (
          <div className="flex flex-col items-center gap-1">
            <div className="w-6 h-0.5 bg-white"></div>
            <div className="w-4 h-0.5 bg-white"></div>
            <div className="w-6 h-0.5 bg-white"></div>
          </div>
        )}
        <div className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full animate-ping border border-white"></div>
      </button>

      {/* Ventana de Terminal */}
      {isOpen && (
        <div className="absolute bottom-20 left-0 w-[350px] md:w-[450px] h-[550px] bg-black border-2 border-red-600 shadow-[15px_15px_0px_rgba(255,0,0,0.1)] flex flex-col overflow-hidden">
          {/* Header */}
          <div className="bg-red-600 p-3 flex justify-between items-center text-mono text-[10px] font-black uppercase tracking-widest text-white">
            <span>{t('assistant', 'title')}</span>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 bg-white rounded-full animate-pulse"></span>
              <span>{t('assistant', 'status')}</span>
            </div>
          </div>

          {/* Messages */}
          <div 
            ref={scrollRef}
            className="flex-grow p-6 overflow-y-auto space-y-6 text-mono text-sm"
          >
            <div className="text-red-600 opacity-60 italic">
              -- DXOF_METHODOLOGY_ACCESS_V4.1 --
            </div>
            <div className="text-white/80 leading-relaxed">
              {t('assistant', 'intro')}
            </div>

            {messages.map((m, i) => (
              <div key={i} className={`flex flex-col ${m.role === 'user' ? 'items-end' : 'items-start'}`}>
                <span className="text-[10px] opacity-30 mb-1 uppercase">
                  {m.role === 'user' ? '[QUERY_REQ]' : '[AUDITOR_SIG]'}
                </span>
                <div className={`p-4 max-w-[85%] ${m.role === 'user' ? 'bg-white/10 text-white border-r-2 border-white/20' : 'bg-red-600/10 text-red-600 border-l-2 border-red-600'}`}>
                  {m.content}
                </div>
              </div>
            ))}

            {isTyping && (
              <div className="flex flex-col items-start animate-pulse">
                <span className="text-[10px] opacity-30 mb-1 uppercase">[AUDITOR_ANALYSING]</span>
                <div className="h-4 w-32 bg-red-600/20"></div>
              </div>
            )}
          </div>

          {/* Input */}
          <div className="p-4 border-t border-white/10 bg-white/5">
            <div className="flex gap-2">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                placeholder={t('assistant', 'placeholder')}
                className="flex-grow bg-black border border-white/20 p-3 text-white focus:outline-none focus:border-red-600 transition-colors placeholder:opacity-20"
              />
              <button
                onClick={handleSend}
                disabled={isTyping}
                className="bg-red-600 text-white px-4 hover:bg-white hover:text-black transition-all"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                  <path d="M5 12h14M12 5l7 7-7 7"/>
                </svg>
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ConsultantAssistant;

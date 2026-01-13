
import React, { useState } from 'react';
import { LanguageProvider } from './LanguageContext';
import LanguageToggle from './components/LanguageToggle';
import Hero from './components/Hero';
import Problem from './components/Problem';
import MaturityModel from './components/MaturityModel';
import ArchitectureLayers from './components/ArchitectureLayers';
import CommercialProducts from './components/CommercialProducts';
import FinalCTA from './components/FinalCTA';
import Footer from './components/Footer';
import RegistrationModal from './components/RegistrationModal';
import ConsultantAssistant from './components/ConsultantAssistant';

const App: React.FC = () => {
  const [isRegModalOpen, setIsRegModalOpen] = useState(false);

  const openRegModal = () => setIsRegModalOpen(true);

  return (
    <LanguageProvider>
      <main className="min-h-screen bg-black text-white selection:bg-red-600 selection:text-white overflow-x-hidden">
        <LanguageToggle />
        <Hero onOpenReg={openRegModal} />
        
        {/* Paso 1: El Dolor (Con evidencia real) */}
        <Problem />
        
        {/* Paso 2: El Espejo (Auto-diagnóstico inmediato) */}
        <MaturityModel onOpenReg={openRegModal} />

        {/* Paso 2.5: La Prueba Técnica (Equilibrio de rigor) */}
        <ArchitectureLayers />
        
        {/* Paso 3: La Oferta (Claridad de lo que se compra) */}
        <CommercialProducts onOpenReg={openRegModal} />
        
        {/* Paso 4: La Regla Brutal (Cierre) */}
        <FinalCTA onOpenReg={openRegModal} />
        
        <Footer />
        
        {/* Widget de Asistente de Auditoría */}
        <ConsultantAssistant />
        
        <RegistrationModal 
          isOpen={isRegModalOpen} 
          onClose={() => setIsRegModalOpen(false)} 
        />
      </main>
    </LanguageProvider>
  );
};

export default App;

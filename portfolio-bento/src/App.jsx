import React, { useState } from 'react';

// Layout
import BackgroundAurora from './layout/BackgroundAurora'; 

// Modais (Certifique-se que estão em src/components/modals/)
import HardTrapModal from './components/modals/HardTrapModal';
import AutomationModal from './components/modals/AutomationModal';
import RoutesModal from './components/modals/RoutesModal'; 

// Seções (Certifique-se que estão em src/components/sections/ ou src/sections/)
import HeroSection from './components/sections/HeroSection';
import AISection from './components/sections/AISection';
import BackendSection from './components/sections/BackendSection';
import RoutesSection from './components/sections/RoutesSection';
import EducationSection from './components/sections/EducationSection';

function App() {
  // Estados para controlar a visibilidade de cada Modal
  const [showDetailsModal, setShowDetailsModal] = useState(false);     // HardTrap
  const [showAutomationModal, setShowAutomationModal] = useState(false); // Bot de Automação
  const [showRoutesModal, setShowRoutesModal] = useState(false);         // Otimizador de Rotas

  return (
    <div className="min-h-screen bg-[#f8fafc] text-slate-900 p-6 md:p-12 font-sans selection:bg-indigo-100 relative overflow-hidden">
      
      {/* Background Animado */}
      <BackgroundAurora />

      {/* --- ÁREA DE MODAIS (Ficam por cima de tudo com z-50) --- */}
      
      {/* 1. Modal Hard Trap (Detalhes do Backend) */}
      {showDetailsModal && (
        <HardTrapModal onClose={() => setShowDetailsModal(false)} />
      )}

      {/* 2. Modal de Automação (RPA) */}
      {showAutomationModal && (
        <AutomationModal onClose={() => setShowAutomationModal(false)} />
      )}
      
      {/* 3. Modal de Rotas (Logística) */}
      {showRoutesModal && (
        <RoutesModal onClose={() => setShowRoutesModal(false)} />
      )} 

      {/* --- CONTEÚDO PRINCIPAL DA PÁGINA --- */}
      <div className="relative z-10 max-w-6xl mx-auto space-y-10">
        
        <HeroSection />

        <AISection />

        {/* BackendSection controla o HardTrapModal */}
        <BackendSection onOpenModal={() => setShowDetailsModal(true)} />

        {/* RoutesSection agora controla DOIS modais: Automação e Rotas */}
        <RoutesSection 
          onOpenAutomation={() => setShowAutomationModal(true)} 
          onOpenRouteOptimizer={() => setShowRoutesModal(true)} 
        />

        <EducationSection />

      </div>
    </div>
  );
}

export default App;
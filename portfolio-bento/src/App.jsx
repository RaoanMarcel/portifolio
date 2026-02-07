import React, { useState } from 'react';

import BackgroundAurora from './layout/BackgroundAurora'; 
import HardTrapModal from './components/modals/HardTrapModal';
import AutomationModal from './components/modals/AutomationModal';
import RoutesModal from './components/modals/RoutesModal'; 
import ScraperModal from './components/modals/ScraperModal';

import HeroSection from './components/sections/HeroSection';
import AISection from './components/sections/AISection';
import BackendSection from './components/sections/BackendSection';
import EngineeringGrid from './components/sections/EngineeringGrid';
import EducationSection from './components/sections/EducationSection';

function App() {
  const [showHardTrap, setShowHardTrap] = useState(false);
  const [showAutomation, setShowAutomation] = useState(false);
  const [showRoutes, setShowRoutes] = useState(false);
  const [showScraper, setShowScraper] = useState(false);

  return (
    <div className="min-h-screen bg-[#f8fafc] text-slate-900 p-6 md:p-12 relative overflow-hidden">
      
      <BackgroundAurora />

      {showHardTrap && <HardTrapModal onClose={() => setShowHardTrap(false)} />}
      {showAutomation && <AutomationModal onClose={() => setShowAutomation(false)} />}
      {showRoutes && <RoutesModal onClose={() => setShowRoutes(false)} />}
      {showScraper && <ScraperModal onClose={() => setShowScraper(false)} />} 

      <div className="relative z-10 max-w-6xl mx-auto space-y-10">
        
        <HeroSection />

        <AISection />

        <BackendSection onOpenModal={() => setShowHardTrap(true)} />

        <EngineeringGrid 
          onOpenAutomation={() => setShowAutomation(true)} 
          onOpenRoutes={() => setShowRoutes(true)} 
          onOpenScraper={() => setShowScraper(true)} 
        />

        <EducationSection />

      </div>
    </div>
  );
}

export default App;
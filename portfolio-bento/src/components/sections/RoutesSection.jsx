import React from 'react'; // Não precisa mais de useState aqui
import { Map, ArrowRight, Bot } from 'lucide-react';

// Recebe as funções onOpenAutomation e onOpenRouteOptimizer do App.tsx
const RoutesSection = ({ onOpenAutomation, onOpenRouteOptimizer }) => {
  
  return (
    <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-6">
        
        {/* --- CARD 1: AUTOMAÇÃO (RPA) --- */}
        <div 
          onClick={onOpenAutomation}
          className="group bg-white p-6 rounded-2xl border border-slate-200 hover:border-emerald-300 hover:shadow-xl transition-all duration-300 cursor-pointer relative overflow-hidden"
        >
          {/* Badge Decorativa */}
          <div className="absolute top-0 right-0 bg-emerald-500 text-white text-[10px] font-bold px-3 py-1 rounded-bl-lg z-10">
            RPA & DATA
          </div>

          <div className="flex items-start gap-4">
            <div className="p-3 bg-emerald-50 rounded-xl text-emerald-600 group-hover:bg-emerald-600 group-hover:text-white transition-colors duration-300">
              <Bot size={28} />
            </div>
            
            <div className="flex-1 space-y-2">
              <h3 className="text-lg font-bold text-slate-800 group-hover:text-emerald-700 transition-colors">
                Framework de Automação
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Bot de alta performance para coleta de dados e automação de processos repetitivos.
              </p>
              <div className="pt-3 flex items-center gap-1 text-sm font-bold text-emerald-600 group-hover:gap-2 transition-all">
                Ver detalhes <ArrowRight size={16} />
              </div>
            </div>
          </div>
        </div>

        {/* --- CARD 2: ROTAS (TSP) --- */}
        <div 
          onClick={onOpenRouteOptimizer}
          className="group bg-white p-6 rounded-2xl border border-slate-200 hover:border-indigo-300 hover:shadow-xl transition-all duration-300 cursor-pointer relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 bg-indigo-500 text-white text-[10px] font-bold px-3 py-1 rounded-bl-lg z-10">
            LOGÍSTICA
          </div>

          <div className="flex items-start gap-4">
            <div className="p-3 bg-indigo-50 rounded-xl text-indigo-600 group-hover:bg-indigo-600 group-hover:text-white transition-colors duration-300">
              <Map size={28} />
            </div>
            
            <div className="flex-1 space-y-2">
              <h3 className="text-lg font-bold text-slate-800 group-hover:text-indigo-700 transition-colors">
                Smart Route Optimizer
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Algoritmo TSP para otimização logística utilizando dados reais de malha viária.
              </p>
              <div className="pt-3 flex items-center gap-1 text-sm font-bold text-indigo-600 group-hover:gap-2 transition-all">
                Ver detalhes <ArrowRight size={16} />
              </div>
            </div>
          </div>
        </div>

    </div>
  );
};

export default RoutesSection;
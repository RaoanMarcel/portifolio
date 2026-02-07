import React from 'react';
import { Map, ArrowRight, Bot, TrendingUp } from 'lucide-react';

const EngineeringGrid = ({ onOpenAutomation, onOpenRoutes, onOpenScraper }) => {
  return (
    <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-6">
        
        <div 
          onClick={onOpenAutomation}
          className="group bg-white p-6 rounded-2xl border border-slate-200 hover:border-emerald-300 hover:shadow-xl transition-all duration-300 cursor-pointer relative overflow-hidden flex flex-col"
        >
          <div className="absolute top-0 right-0 bg-emerald-500 text-white text-[10px] font-bold px-3 py-1 rounded-bl-lg z-10">
            RPA
          </div>

          <div className="flex items-start gap-4 mb-4">
            <div className="p-3 bg-emerald-50 rounded-xl text-emerald-600 group-hover:bg-emerald-600 group-hover:text-white transition-colors duration-300">
              <Bot size={24} />
            </div>
            <div className="flex-1">
                <h3 className="text-lg font-bold text-slate-800 group-hover:text-emerald-700 transition-colors">
                    Bot de Automação
                </h3>
            </div>
          </div>
          
          <p className="text-sm text-slate-600 leading-relaxed flex-1">
            Framework para coleta de dados e execução de processos repetitivos em alta performance.
          </p>
          
          <div className="pt-4 mt-auto flex items-center gap-1 text-sm font-bold text-emerald-600 group-hover:gap-2 transition-all">
            Ver detalhes <ArrowRight size={16} />
          </div>
        </div>

        <div 
          onClick={onOpenRoutes}
          className="group bg-white p-6 rounded-2xl border border-slate-200 hover:border-indigo-300 hover:shadow-xl transition-all duration-300 cursor-pointer relative overflow-hidden flex flex-col"
        >
          <div className="absolute top-0 right-0 bg-indigo-500 text-white text-[10px] font-bold px-3 py-1 rounded-bl-lg z-10">
            LOGÍSTICA
          </div>

          <div className="flex items-start gap-4 mb-4">
            <div className="p-3 bg-indigo-50 rounded-xl text-indigo-600 group-hover:bg-indigo-600 group-hover:text-white transition-colors duration-300">
              <Map size={24} />
            </div>
            <div className="flex-1">
                <h3 className="text-lg font-bold text-slate-800 group-hover:text-indigo-700 transition-colors">
                    Smart Routes
                </h3>
            </div>
          </div>

          <p className="text-sm text-slate-600 leading-relaxed flex-1">
            Algoritmo TSP para otimização de entregas utilizando dados de malha viária real.
          </p>

          <div className="pt-4 mt-auto flex items-center gap-1 text-sm font-bold text-indigo-600 group-hover:gap-2 transition-all">
            Ver detalhes <ArrowRight size={16} />
          </div>
        </div>

        <div 
          onClick={onOpenScraper}
          className="group bg-white p-6 rounded-2xl border border-slate-200 hover:border-orange-300 hover:shadow-xl transition-all duration-300 cursor-pointer relative overflow-hidden flex flex-col"
        >
          <div className="absolute top-0 right-0 bg-orange-500 text-white text-[10px] font-bold px-3 py-1 rounded-bl-lg z-10">
            DATA ENG
          </div>

          <div className="flex items-start gap-4 mb-4">
            <div className="p-3 bg-orange-50 rounded-xl text-orange-600 group-hover:bg-orange-600 group-hover:text-white transition-colors duration-300">
              <TrendingUp size={24} />
            </div>
            <div className="flex-1">
                <h3 className="text-lg font-bold text-slate-800 group-hover:text-orange-700 transition-colors">
                    Price Tracker
                </h3>
            </div>
          </div>

          <p className="text-sm text-slate-600 leading-relaxed flex-1">
            Pipeline ETL para monitoramento de concorrentes e inteligência de preços dinâmica.
          </p>

          <div className="pt-4 mt-auto flex items-center gap-1 text-sm font-bold text-orange-600 group-hover:gap-2 transition-all">
            Ver detalhes <ArrowRight size={16} />
          </div>
        </div>

    </div>
  );
};

export default EngineeringGrid;
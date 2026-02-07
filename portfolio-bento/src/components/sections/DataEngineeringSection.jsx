import React from 'react';
import { Search, Terminal, Bot, Database, Server } from 'lucide-react';
import SectionTitle from '../ui/SectionTitle';
import BentoCard from '../ui/BentoCard';

const DataEngineeringSection = ({ onOpenModal }) => {
  return (
    <section>
      <SectionTitle icon={Search} title="Engenharia de Dados & ETL" />
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

          <BentoCard className="md:col-span-2 flex flex-col justify-between bg-white hover:border-blue-200 transition-colors">
            <div>
                <div className="flex justify-between items-start mb-4">
                  <div className="p-2 bg-slate-100 text-slate-700 rounded-lg"><Search size={20} /></div>
                  <span className="text-[10px] font-bold bg-slate-900 text-white px-2 py-1 rounded">ETL PIPELINE</span>
                </div>
                <h3 className="font-bold text-lg text-slate-900 mb-2">Data Scraper Engine</h3>
                <p className="text-sm text-slate-600 mb-4 leading-relaxed">
                  Bot desenvolvido em Python (Selenium/BeautifulSoup) que coleta dados de preços de grandes varejistas. Os dados são limpos, normalizados e exportados para CSV/JSON.
                </p>
            </div>
            <div className="bg-slate-50 rounded border border-slate-200 p-3 flex items-center gap-3">
                <Terminal size={14} className="text-slate-400" />
                <code className="text-xs text-slate-600 truncate font-mono">pip install selenium pandas sqlalchemy</code>
            </div>
          </BentoCard>

          <BentoCard className="flex flex-col justify-center gap-4 bg-slate-50 border-dashed border-slate-300">
            <div onClick={onOpenModal} className="cursor-pointer group/item">
                <div className="flex items-center gap-3 text-indigo-600 hover:text-indigo-800 transition">
                    <Bot size={18} />
                    <span className="text-sm font-bold border-b border-transparent group-hover/item:border-indigo-600">Framework de Automação (RPA)</span>
                </div>
            </div>

            <div className="h-px bg-slate-200 w-full"></div>
            
            <div className="flex items-center gap-3 text-slate-600 opacity-80 hover:opacity-100 transition">
                <Database size={18} />
                <span className="text-sm font-bold">SQL Optimization</span>
            </div>
            
            <div className="h-px bg-slate-200 w-full"></div>
            
            <div className="flex items-center gap-3 text-slate-600 opacity-80 hover:opacity-100 transition">
                <Server size={18} />
                <span className="text-sm font-bold">Data Warehousing</span>
            </div>
          </BentoCard>

      </div>
    </section>
  );
};

export default DataEngineeringSection;
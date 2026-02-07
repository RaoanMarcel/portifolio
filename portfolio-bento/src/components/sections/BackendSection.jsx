import React from 'react';
import { Server, Code2, ExternalLink } from 'lucide-react';
import SectionTitle from '../ui/SectionTitle';
import BentoCard from '../ui/BentoCard';

const BackendSection = ({ onOpenModal }) => {
  return (
    <section>
      <SectionTitle icon={Server} title="Arquitetura de Sistemas & Dados" colorClass="text-indigo-600" />
      
      <BentoCard className="group relative overflow-hidden border-indigo-50 hover:border-indigo-200 transition-all bg-gradient-to-br from-white to-indigo-50/30">
        <div className="flex flex-col md:flex-row gap-8 items-center">
            
            <div className="flex-1 space-y-4 relative z-10">
              <div className="flex items-center gap-2 mb-2">
                <span className="bg-white text-slate-600 text-[10px] font-bold px-2 py-1 rounded uppercase border border-slate-200 shadow-sm">E-commerce Data</span>
                <span className="bg-indigo-600 text-white text-[10px] font-bold px-2 py-1 rounded uppercase shadow-sm shadow-indigo-200">Backend System</span>
              </div>
              
              <h3 className="text-2xl font-bold text-slate-900">HardTrap: Ecossistema de Vendas</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Embora possua um frontend, o foco deste projeto é a <strong>Engenharia de Dados</strong>. Sistema de gestão de estoque centralizado, com Webhooks e Dashboard analítico.
              </p>
              
              <div className="grid grid-cols-2 gap-4 pt-4">
                <div className="bg-white/60 p-3 rounded-lg border border-indigo-100">
                  <p className="text-xs text-indigo-400 font-bold uppercase mb-1">Banco de Dados</p>
                  <p className="text-sm font-semibold text-slate-700">PostgreSQL + Prisma</p>
                </div>
                <div className="bg-white/60 p-3 rounded-lg border border-indigo-100">
                  <p className="text-xs text-indigo-400 font-bold uppercase mb-1">Infraestrutura</p>
                  <p className="text-sm font-semibold text-slate-700">Render & Netlify</p>
                </div>
              </div>

              <div className="pt-6 flex gap-3">
                <button 
                  onClick={onOpenModal} 
                  className="flex items-center gap-2 text-sm font-bold text-indigo-600 hover:text-indigo-800 transition bg-indigo-50 px-4 py-2 rounded-lg border border-indigo-100"
                >
                  <Code2 size={16} /> Ver Arquitetura
                </button>
                <a href="https://hardtrap.com" target="_blank" rel="noreferrer" className="flex items-center gap-2 text-sm font-bold text-slate-500 hover:text-slate-800 transition px-4 py-2">
                  <ExternalLink size={16} /> Acessar Loja
                </a>
              </div>
            </div>
            <div className="w-full md:w-5/12 aspect-video bg-slate-900 rounded-lg overflow-hidden relative border border-slate-800 shadow-2xl transform group-hover:scale-[1.02] transition-transform duration-500">
              <img 
                src="/ecommerce.png" 
                alt="HardTrap Dashboard Interface" 
                className="w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-opacity duration-500"
              />
            </div>
        </div>
      </BentoCard>
    </section>
  );
};

export default BackendSection;
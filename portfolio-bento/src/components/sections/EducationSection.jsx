import React from 'react';
import { Sprout, Terminal, Download } from 'lucide-react';

const EducationSection = () => {
  return (
    <div className="bg-white border border-slate-200 shadow-sm relative overflow-hidden rounded-3xl p-6 md:p-8">
        
        <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-slate-50 to-transparent rounded-bl-full -mr-8 -mt-8 pointer-events-none"></div>

        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8 relative z-10">

          <div className="flex-1 space-y-8">
            
            <div className="relative pl-8 border-l-2 border-emerald-200">
              <div className="absolute -left-[9px] top-0 bg-white p-1 rounded-full border border-emerald-200">
                <Sprout size={14} className="text-emerald-600" />
              </div>
              <h3 className="font-bold text-slate-900 text-lg">
                Pós-Graduação em IA e Big Data (AgroTech)
              </h3>
              <p className="text-slate-700 text-sm font-medium mt-1">Pontifícia Universidade Católica (PUCPR) • Em andamento</p>
              <p className="text-slate-500 text-xs mt-2 max-w-xl leading-relaxed">
                Especialização em modelagem preditiva, sensoriamento remoto e soluções escaláveis para o campo.
              </p>
            </div>

            <div className="relative pl-8 border-l-2 border-slate-200">
              <div className="absolute -left-[9px] top-0 bg-white p-1 rounded-full border border-slate-200">
                  <Terminal size={14} className="text-slate-600" />
              </div>
              <h3 className="font-bold text-slate-900 text-lg">
                Bacharelado em Engenharia de Software
              </h3>
              <p className="text-slate-700 text-sm font-medium mt-1">Universidade Grande Vale (UGV) • Concluído</p>
              <p className="text-slate-500 text-xs mt-2 max-w-xl leading-relaxed">
                Foco em arquitetura de software, qualidade de código e desenvolvimento full stack.
              </p>
            </div>
          </div>

          <div className="w-full md:w-auto flex justify-end">
            <a
              href="/curriculo.pdf"
              download="Curriculo-Raoan-Marcel.pdf"
              className="flex items-center gap-2 bg-white border border-slate-200 px-6 py-3 rounded-xl font-bold text-slate-700 hover:border-emerald-500 hover:text-emerald-700 hover:shadow-lg hover:bg-emerald-50 transition-all group cursor-pointer"
            >
              <Download size={20} className="group-hover:scale-110 transition-transform" />
              Download CV
            </a>
          </div>

        </div>
    </div>
  );
};

export default EducationSection;
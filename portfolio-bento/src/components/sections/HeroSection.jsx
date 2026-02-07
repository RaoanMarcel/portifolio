import React from 'react';
import { Terminal, Mail, Linkedin, Github } from 'lucide-react';
import BentoCard from '../ui/BentoCard';

const HeroSection = () => {
  const techStack = [
    { name: "Python", type: "lang" },
    { name: "SQL & Pandas", type: "data" },
    { name: "OpenCV", type: "ai" },
    { name: "Selenium & BeautifulSoup", type: "data" },
    { name: "TensorFlow", type: "ai" },
    { name: "PostgreSQL", type: "data" },
  ];

  const getTagStyle = (type) => {
    switch(type) {
      case 'data': return "bg-indigo-50 text-indigo-700 border-indigo-200";
      case 'ai': return "bg-emerald-50 text-emerald-700 border-emerald-200";
      case 'infra': return "bg-slate-100 text-slate-700 border-slate-200";
      default: return "bg-blue-50 text-blue-700 border-blue-200";
    }
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
      <BentoCard className="md:col-span-8 flex flex-col justify-center space-y-6 relative overflow-hidden bg-white border-slate-200">
          <div className="absolute top-0 right-0 p-32 bg-indigo-50/50 rounded-full blur-3xl -z-10 translate-x-10 -translate-y-10"></div>

          <div className="space-y-4">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-slate-900 text-white text-[10px] font-bold rounded-full uppercase tracking-wider w-fit shadow-md shadow-slate-200">
              <Terminal size={10} className="text-indigo-400" /> Data Engineer & AI
            </div>
            
            <h1 className="text-3xl md:text-5xl font-bold tracking-tight text-slate-900 leading-tight">
              Transformando dados brutos em <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-emerald-700">inteligência</span>.
            </h1>
            
            <p className="text-slate-600 text-lg max-w-2xl leading-relaxed">
              Engenheiro focado em <strong>Arquitetura de Dados</strong>, Pipelines de ETL e modelos de IA. Especialista em criar backends robustos que escalam.
            </p>
          </div>

          <div className="pt-2">
            <div className="flex flex-wrap gap-2 mb-6">
              {techStack.map((tech) => (
                <span key={tech.name} className={`px-3 py-1 text-xs font-bold rounded-md border ${getTagStyle(tech.type)}`}>
                  {tech.name}
                </span>
              ))}
            </div>

            <div className="flex gap-3">
              <a href="mailto:seuemail@exemplo.com" className="flex items-center gap-2 bg-slate-900 text-white px-5 py-2.5 rounded-lg font-medium hover:bg-slate-800 transition shadow-lg shadow-slate-200 text-sm">
                <Mail size={16} /> Contato
              </a>
              <a href="https://www.linkedin.com/in/raoan-marcel/" target="_blank" rel="noopener noreferrer  " className="flex items-center gap-2 bg-white border border-slate-200 px-5 py-2.5 rounded-lg font-medium hover:bg-slate-50 hover:border-slate-300 transition text-sm text-slate-700">
                <Linkedin size={16} /> LinkedIn
              </a>
            </div>
          </div>
      </BentoCard>

      <a href="https://github.com/RaoanMarcel" target="_blank" rel="noopener noreferrer" className="md:col-span-4 h-full group">
        <BentoCard noPadding={true} className="!bg-emerald-500 border-emerald-400 hover:border-emerald-300 flex flex-col items-center justify-center text-center h-full min-h-[300px] relative overflow-hidden transition-colors duration-500 shadow-xl shadow-emerald-500/20">
           <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[size:20px_20px]"></div>
           
           <div className="relative z-10 flex flex-col items-center gap-5">
             <div className="p-4 bg-white/20 rounded-full text-white mb-2 group-hover:scale-110 group-hover:bg-white group-hover:text-emerald-600 transition-all duration-300 backdrop-blur-sm">
                <Github size={42} />
             </div>
             
             <div>
               <span className="text-white font-bold text-2xl block tracking-tight shadow-sm">GitHub</span>
               <span className="text-emerald-50 text-sm opacity-90">@RaoanMarcel</span>
             </div>

             <div className="flex items-center gap-4 text-xs font-mono text-white mt-2 bg-black/10 px-4 py-2 rounded-full border border-white/20 backdrop-blur-md">
               <div className="flex items-center gap-1.5">
                 <div className="w-2 h-2 bg-white rounded-full animate-pulse shadow-[0_0_8px_rgba(255,255,255,0.8)]"></div>
                 <span className="font-semibold">Open to Work</span>
               </div>
             </div>
             
             <div className="text-[10px] text-emerald-100/80 mt-4 uppercase tracking-widest group-hover:text-white transition-colors font-bold">
               Ver repositórios
             </div>
           </div>
        </BentoCard>
      </a>
    </div>
  );
};

export default HeroSection;
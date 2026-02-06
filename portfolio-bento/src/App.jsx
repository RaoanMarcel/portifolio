import React from 'react';
import { Github, Linkedin, Mail, Map, Database, Sprout, ShoppingCart, ExternalLink, Code2 } from 'lucide-react';

// Componente Card Reutilizável para manter consistência
const BentoCard = ({ children, className = "" }) => (
  <div className={`bg-white p-6 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-all duration-300 ${className}`}>
    {children}
  </div>
);

function App() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 p-4 md:p-8 font-sans selection:bg-emerald-100">
      
      {/* Container Principal - Grid System */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-4 auto-rows-[minmax(180px,auto)]">
        
        {/* 1. HERO SECTION (Ocupa 2 colunas) */}
        <BentoCard className="md:col-span-2 md:row-span-2 flex flex-col justify-center items-start space-y-4">
          <div className="inline-block px-3 py-1 bg-emerald-100 text-emerald-800 text-xs font-bold rounded-full uppercase tracking-wider">
            Desenvolvedor Full Stack & Dados
          </div>
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-slate-800">
            Transformando dados em <span className="text-emerald-600">soluções reais</span>.
          </h1>
          <p className="text-slate-600 text-lg max-w-lg">
            Especialista em arquiteturas complexas. Atualmente desenvolvendo IA para o setor Agro e sistemas de E-commerce escaláveis.
          </p>
          <div className="flex gap-3 pt-2">
            <button className="flex items-center gap-2 bg-slate-900 text-white px-5 py-2.5 rounded-lg font-medium hover:bg-slate-800 transition">
              <Mail size={18} /> Contato
            </button>
            <button className="flex items-center gap-2 bg-white border border-slate-300 px-5 py-2.5 rounded-lg font-medium hover:bg-slate-50 transition">
              <Linkedin size={18} /> LinkedIn
            </button>
          </div>
        </BentoCard>

        {/* 2. PROJETO DESTAQUE: AGRO IA (Vertical) */}
        <BentoCard className="md:row-span-2 flex flex-col justify-between group cursor-pointer relative overflow-hidden bg-slate-900 text-white border-slate-800">
          {/* Fundo decorativo simulando mapa/dados */}
          <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#10b981_1px,transparent_1px)] [background-size:16px_16px]"></div>
          
          <div className="relative z-10">
            <div className="flex justify-between items-start mb-4">
              <div className="p-2 bg-emerald-500/20 rounded-lg">
                <Sprout className="text-emerald-400" size={24} />
              </div>
              <span className="text-xs font-mono text-emerald-400 border border-emerald-500/30 px-2 py-1 rounded">EM DESENVOLVIMENTO</span>
            </div>
            <h3 className="text-xl font-bold mb-2">AgroScan AI</h3>
            <p className="text-slate-400 text-sm">
              Reconhecimento de doenças em folhas e mapeamento geoespacial interativo para agricultura de precisão.
            </p>
          </div>
          
          <div className="relative z-10 mt-6 bg-slate-800/50 p-3 rounded-lg border border-slate-700">
            <div className="flex items-center gap-2 text-xs text-slate-300 mb-2">
              <Database size={12} /> Processamento de Imagem
            </div>
            {/* Placeholder visual do mapa */}
            <div className="h-24 bg-slate-700/50 rounded flex items-center justify-center text-xs font-mono text-slate-500">
              [Visualização do Mapa/IA]
            </div>
          </div>
        </BentoCard>

        {/* 3. TECH STACK (Compacto) */}
        <BentoCard className="flex flex-col justify-center">
          <h3 className="text-sm font-bold uppercase text-slate-500 mb-4 tracking-wider">Tech Stack</h3>
          <div className="flex flex-wrap gap-2">
            {["React", "Vite", "Tailwind", "Python", "Pandas", "SQL", "TensorFlow"].map((tech) => (
              <span key={tech} className="px-3 py-1 bg-slate-100 text-slate-700 text-sm font-medium rounded-md border border-slate-200">
                {tech}
              </span>
            ))}
          </div>
        </BentoCard>

        {/* 4. PROJETO E-COMMERCE (Horizontal) */}
        <BentoCard className="md:col-span-2 flex flex-col md:flex-row gap-6 items-center">
          <div className="flex-1 space-y-3">
            <div className="p-2 bg-blue-100 w-fit rounded-lg text-blue-700">
              <ShoppingCart size={24} />
            </div>
            <h3 className="text-xl font-bold text-slate-800">Plataforma E-commerce Completa</h3>
            <p className="text-slate-600 text-sm">
              Solução robusta com checkout, gestão de estoque em tempo real e painel administrativo. Focado em performance e conversão.
            </p>
            <div className="flex gap-2 pt-2">
               <a href="#" className="text-sm font-bold text-slate-900 flex items-center gap-1 hover:text-emerald-600 transition">
                 Ver Case <ExternalLink size={14} />
               </a>
            </div>
          </div>
          {/* Placeholder Visual */}
          <div className="w-full md:w-48 h-32 bg-slate-100 rounded-lg border border-slate-200 flex items-center justify-center text-slate-400 text-xs">
            [Mockup E-commerce]
          </div>
        </BentoCard>

        {/* 5. GITHUB/CODE */}
        <BentoCard className="bg-emerald-600 text-white border-transparent hover:bg-emerald-700 flex flex-col items-center justify-center text-center gap-2 cursor-pointer">
          <Github size={32} />
          <span className="font-bold">GitHub</span>
          <span className="text-xs opacity-80">Confira meus commits</span>
        </BentoCard>

        {/* 6. SOBRE / EDUCAÇÃO */}
        <BentoCard className="md:col-span-3 bg-slate-100 border-none">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
             <div>
               <h3 className="font-bold text-slate-800">Formação Acadêmica & Cursos</h3>
               <p className="text-sm text-slate-600">Graduação em XXXXX • Especialização em Data Science</p>
             </div>
             <button className="text-sm border border-slate-300 px-4 py-2 rounded-lg bg-white hover:bg-slate-50 font-medium">
               Baixar Currículo PDF
             </button>
          </div>
        </BentoCard>

      </div>
    </div>
  );
}

export default App;
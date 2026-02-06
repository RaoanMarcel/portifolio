import React from 'react';
import { Github, Linkedin, Mail, Database, Sprout, ShoppingCart, ExternalLink, Download, FileJson, Terminal } from 'lucide-react';

const BentoCard = ({ children, className = "" }) => (
  <div className={`bg-white p-6 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-all duration-300 ${className}`}>
    {children}
  </div>
);

function App() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 p-4 md:p-8 font-sans selection:bg-emerald-100">
      
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-4 auto-rows-[minmax(180px,auto)]">
        
        {/* 1. HERO SECTION */}
        <BentoCard className="md:col-span-2 md:row-span-2 flex flex-col justify-center items-start space-y-4">
          <div className="inline-block px-3 py-1 bg-emerald-100 text-emerald-800 text-xs font-bold rounded-full uppercase tracking-wider">
            Engenharia de Software & Data Science
          </div>
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-slate-800">
            Arquitetura de Software orientada a <span className="text-emerald-600">Inteligência de Dados</span>.
          </h1>
          <p className="text-slate-600 text-lg max-w-lg">
            Engenheiro de Software com foco em unir tecnologia e ciência de dados. Especialista em criar soluções escaláveis, inteligentes e orientadas a resultados para o Agronegócio e Varejo.
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

        {/* 2. PROJETO DESTAQUE: AGRO IA (Com Mockup de Código) */}
        <BentoCard className="md:row-span-2 flex flex-col justify-between group cursor-pointer relative overflow-hidden bg-slate-900 text-white border-slate-800">
          <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#10b981_1px,transparent_1px)] [background-size:16px_16px]"></div>
          
          <div className="relative z-10">
            <div className="flex justify-between items-start mb-4">
              <div className="p-2 bg-emerald-500/20 rounded-lg">
                <Sprout className="text-emerald-400" size={24} />
              </div>
              <span className="text-xs font-mono text-emerald-400 border border-emerald-500/30 px-2 py-1 rounded">BACKEND & AI</span>
            </div>
            <h3 className="text-xl font-bold mb-2">AgroScan AI</h3>
            <p className="text-slate-400 text-sm">
              Detecção de patógenos em lavouras via Visão Computacional. Mapeamento geoespacial e análise preditiva de safras.
            </p>
          </div>
          
          {/* AQUI ESTÁ O TRUQUE: Um editor de código falso */}
          <div className="relative z-10 mt-6 bg-[#0f172a] p-4 rounded-lg border border-slate-700 font-mono text-xs overflow-hidden shadow-xl">
            <div className="flex gap-1.5 mb-3 opacity-50">
              <div className="w-2.5 h-2.5 rounded-full bg-red-500"></div>
              <div className="w-2.5 h-2.5 rounded-full bg-yellow-500"></div>
              <div className="w-2.5 h-2.5 rounded-full bg-green-500"></div>
            </div>
            <div className="text-slate-300 space-y-1">
              <p><span className="text-purple-400">def</span> <span className="text-blue-400">analyze_leaf</span>(image):</p>
              <p className="pl-4 text-slate-500"># Processamento com TensorFlow</p>
              <p className="pl-4">model = tf.load_model(<span className="text-green-400">'agro_v2.h5'</span>)</p>
              <p className="pl-4">prediction = model.predict(image)</p>
              <p className="pl-4"><span className="text-purple-400">return</span> {`{`}</p>
              <p className="pl-8"><span className="text-green-400">"disease"</span>: <span className="text-green-400">"Rust"</span>,</p>
              <p className="pl-8"><span className="text-green-400">"confidence"</span>: <span className="text-orange-400">0.98</span></p>
              <p className="pl-4">{`}`}</p>
            </div>
          </div>
        </BentoCard>

        {/* 3. TECH STACK */}
        <BentoCard className="flex flex-col justify-center">
          <h3 className="text-sm font-bold uppercase text-slate-500 mb-4 tracking-wider">Tech Stack</h3>
          <div className="flex flex-wrap gap-2">
            {["Python", "TensorFlow", "Pandas", "React", "SQL", "Docker", "AWS"].map((tech) => (
              <span key={tech} className="px-3 py-1 bg-slate-100 text-slate-700 text-sm font-medium rounded-md border border-slate-200">
                {tech}
              </span>
            ))}
          </div>
        </BentoCard>

        {/* 4. PROJETO E-COMMERCE */}
        <BentoCard className="md:col-span-2 flex flex-col md:flex-row gap-6 items-center">
          <div className="flex-1 space-y-3">
            <div className="p-2 bg-blue-100 w-fit rounded-lg text-blue-700">
              <ShoppingCart size={24} />
            </div>
            <h3 className="text-xl font-bold text-slate-800">E-commerce Full Stack</h3>
            <p className="text-slate-600 text-sm">
              Plataforma completa com painel administrativo, gestão de estoque em tempo real e checkout seguro. Foco em performance.
            </p>
            <div className="flex gap-2 pt-2">
               <a href="#" className="text-sm font-bold text-slate-900 flex items-center gap-1 hover:text-emerald-600 transition">
                 Ver Arquitetura <ExternalLink size={14} />
               </a>
            </div>
          </div>
          {/* Placeholder Visual E-commerce */}
          <div className="w-full md:w-48 h-32 bg-slate-100 rounded-lg border border-slate-200 flex items-center justify-center text-slate-400 text-xs">
            [Print do Site]
          </div>
        </BentoCard>

        {/* 5. GITHUB */}
        <BentoCard className="bg-emerald-600 text-white border-transparent hover:bg-emerald-700 flex flex-col items-center justify-center text-center gap-2 cursor-pointer">
          <Github size={32} />
          <span className="font-bold">GitHub</span>
          <span className="text-xs opacity-80">Ver repositórios</span>
        </BentoCard>

        {/* 6. FORMAÇÃO (Layout Corrigido) */}
        <BentoCard className="md:col-span-3 bg-slate-100 border-none">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
             
             {/* Textos de Formação */}
             <div className="flex-1 space-y-6">
               <div>
                 <h3 className="font-bold text-slate-900 text-lg flex items-center gap-2">
                   <Sprout size={18} className="text-emerald-600" />
                   Pós-Graduação em IA e Big Data (AgroTech)
                 </h3>
                 <p className="text-slate-600 text-sm pl-7">Pontifícia Universidade Católica (PUCPR) • Em andamento</p>
                 <p className="text-slate-500 text-xs pl-7 mt-1 max-w-2xl">
                   Especialização em modelagem preditiva, sensoriamento remoto e soluções escaláveis para o campo.
                 </p>
               </div>
               
               <div>
                 <h3 className="font-bold text-slate-900 text-lg flex items-center gap-2">
                   <Terminal size={18} className="text-slate-600" />
                   Bacharelado em Engenharia de Software
                 </h3>
                 <p className="text-slate-600 text-sm pl-7">Universidade Grande Vale (UGV) • Concluído</p>
                 <p className="text-slate-500 text-xs pl-7 mt-1 max-w-2xl">
                   Foco em arquitetura de software, qualidade de código e desenvolvimento full stack.
                 </p>
               </div>
             </div>

             {/* Botão de Download (Agora alinhado e destacado) */}
             <div className="w-full md:w-auto flex justify-end">
               <button className="flex items-center gap-2 bg-white border border-slate-300 px-6 py-3 rounded-xl font-bold text-slate-700 hover:bg-white hover:border-emerald-500 hover:text-emerald-600 hover:shadow-md transition-all group">
                 <Download size={20} className="group-hover:animate-bounce" />
                 Download CV
               </button>
             </div>

          </div>
        </BentoCard>

      </div>
    </div>
  );
}

export default App;
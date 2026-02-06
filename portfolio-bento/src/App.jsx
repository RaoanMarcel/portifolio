import React, { useState } from 'react';
import { Github, Linkedin, Mail, Sprout, ShoppingCart, ExternalLink, Download, Terminal, X, Server, Database, Globe, Lock, Cpu, ArrowRight, Folder, Layout, Box, Code2, GraduationCap } from 'lucide-react';

// Componente de Card Base
const BentoCard = ({ children, className = "", onClick, noPadding = false }) => (
  <div 
    onClick={onClick}
    className={`bg-white rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-all duration-300 ${onClick ? 'cursor-pointer' : ''} ${className} ${noPadding ? 'p-0' : 'p-6'}`}
  >
    {children}
  </div>
);

// Componente para Títulos de Seção
const SectionTitle = ({ icon: Icon, title }) => (
  <div className="flex items-center gap-2 mb-6 text-slate-400 font-medium uppercase tracking-widest text-sm pl-1">
    <Icon size={16} /> {title}
  </div>
);

function App() {
  const [showEcommerceModal, setShowEcommerceModal] = useState(false);

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 p-6 md:p-12 font-sans selection:bg-emerald-100">
      
      {/* --- MODAL (Mantido igual) --- */}
      {showEcommerceModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm transition-all animate-in fade-in duration-200" onClick={() => setShowEcommerceModal(false)}>
          <div className="bg-white w-full max-w-3xl rounded-2xl shadow-2xl overflow-hidden border border-slate-200" onClick={(e) => e.stopPropagation()}>
            <div className="bg-slate-50 p-6 border-b border-slate-100 flex justify-between items-center">
              <div>
                <h2 className="text-2xl font-bold text-slate-800 flex items-center gap-2">
                  <ShoppingCart className="text-blue-600" /> HardTrap Store
                </h2>
                <p className="text-slate-500 text-sm">Arquitetura Full Stack & Fluxo de Pagamento</p>
              </div>
              <button onClick={() => setShowEcommerceModal(false)} className="p-2 hover:bg-slate-200 rounded-full transition text-slate-500 hover:text-red-500">
                <X size={24} />
              </button>
            </div>
            <div className="p-6 overflow-y-auto max-h-[80vh]">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-6">
                <div className="space-y-4">
                  <h3 className="font-bold text-slate-700 flex items-center gap-2 border-b pb-2"><Cpu size={18} className="text-emerald-600" /> Frontend & SSR</h3>
                  <ul className="space-y-3 text-sm text-slate-600">
                    <li className="flex gap-3"><span className="font-semibold text-slate-800 min-w-[90px]">Next.js 14:</span><span>App Router e Server-Side Rendering.</span></li>
                    <li className="flex gap-3"><span className="font-semibold text-slate-800 min-w-[90px]">Tailwind:</span><span>Design System responsivo.</span></li>
                    <li className="flex gap-3"><span className="font-semibold text-slate-800 min-w-[90px]">Security:</span><span>Auth via JWT e RBAC.</span></li>
                  </ul>
                </div>
                <div className="space-y-4">
                  <h3 className="font-bold text-slate-700 flex items-center gap-2 border-b pb-2"><Database size={18} className="text-blue-600" /> Backend & Data</h3>
                  <ul className="space-y-3 text-sm text-slate-600">
                    <li className="flex gap-3"><span className="font-semibold text-slate-800 min-w-[90px]">PostgreSQL:</span><span>Banco relacional robusto.</span></li>
                    <li className="flex gap-3"><span className="font-semibold text-slate-800 min-w-[90px]">Prisma:</span><span>ORM com type-safety.</span></li>
                    <li className="flex gap-3"><span className="font-semibold text-slate-800 min-w-[90px]">Stripe:</span><span>Gateway de pagamentos.</span></li>
                  </ul>
                </div>
              </div>
              <div className="bg-[#1e293b] rounded-lg p-4 font-mono text-xs text-slate-300 border border-slate-700 shadow-inner">
                 <div className="flex justify-between items-center mb-3 border-b border-slate-700 pb-2">
                  <span className="text-blue-400 font-bold">checkoutService.ts</span>
                  <span className="text-slate-500 flex items-center gap-1"><Server size={10} /> Prisma Transaction</span>
                </div>
                <div className="space-y-1 opacity-90">
                  <p><span className="text-purple-400">return await</span> prisma.$transaction(<span className="text-purple-400">async</span> (tx) ={`>`} {`{`}</p>
                  <p className="pl-4 text-slate-500">// Lógica de transação segura...</p>
                  <p className="pl-4"><span className="text-purple-400">await</span> tx.product.update({`{`} ... {`}`})</p>
                  <p className="pl-4"><span className="text-purple-400">return await</span> tx.order.create({`{`} ... {`}`})</p>
                  <p>{`}`});</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* --- CONTAINER PRINCIPAL COM ESPAÇAMENTO VERTICAL --- */}
      <div className="max-w-6xl mx-auto space-y-16">
        
        {/* SEÇÃO 1: INTRODUÇÃO */}
        <section>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Hero Card - Ocupa 2 colunas */}
            <BentoCard className="md:col-span-2 flex flex-col justify-center items-start space-y-4 min-h-[280px]">
              <div className="inline-block px-3 py-1 bg-emerald-100 text-emerald-800 text-xs font-bold rounded-full uppercase tracking-wider">
                Engenharia de Software
              </div>
              <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-slate-800">
                Arquitetura de Software orientada a <span className="text-emerald-600">Dados</span>.
              </h1>
              <p className="text-slate-600 text-lg max-w-lg">
                Engenheiro com foco em soluções escaláveis, unindo desenvolvimento Full Stack e Inteligência de Dados.
              </p>
              <div className="flex gap-3 pt-2">
                <a href="mailto:contatoraoanmarcel@gmail.com" className="flex items-center gap-2 bg-slate-900 text-white px-5 py-2.5 rounded-lg font-medium hover:bg-slate-800 transition cursor-pointer">
                  <Mail size={18} /> Contato
                </a>
                <a href="https://www.linkedin.com/in/raoan-marcel/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 bg-white border border-slate-300 px-5 py-2.5 rounded-lg font-medium hover:bg-slate-50 transition cursor-pointer">
                  <Linkedin size={18} /> LinkedIn
                </a>
              </div>
            </BentoCard>

            {/* Coluna Direita - GitHub e Resumo */}
            <div className="flex flex-col gap-6">
               <a href="https://github.com/RaoanMarcel" target="_blank" rel="noopener noreferrer" className="flex-1">
                <BentoCard className="bg-slate-900 text-white border-transparent hover:bg-black flex flex-col items-center justify-center text-center gap-3 cursor-pointer transition-colors h-full min-h-[160px]">
                  <Github size={48} />
                  <div>
                    <span className="font-bold block text-lg">GitHub</span>
                    <span className="text-xs text-slate-400">Ver código fonte</span>
                  </div>
                </BentoCard>
              </a>
              
              <BentoCard className="flex-1 flex flex-col justify-center bg-slate-100 border-none">
                 <div className="flex items-center gap-3 mb-2">
                    <div className="p-2 bg-white rounded-md shadow-sm text-emerald-600"><Code2 size={20}/></div>
                    <span className="font-bold text-slate-700">Full Stack Dev</span>
                 </div>
                 <p className="text-xs text-slate-500">Especialista em React, Node, Python e Cloud Infrastructure.</p>
              </BentoCard>
            </div>
          </div>
        </section>

        {/* SEÇÃO 2: PROJETOS DESTAQUE (Lado a Lado) */}
        <section>
          <SectionTitle icon={Layout} title="Projetos em Destaque" />
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            
            {/* Projeto 1: Agro AI */}
            <BentoCard className="flex flex-col justify-between group cursor-pointer relative overflow-hidden bg-[#0a0f1c] text-white border-slate-800 h-96">
              <div className="absolute inset-0 opacity-20 bg-[radial-gradient(#10b981_1px,transparent_1px)] [background-size:16px_16px]"></div>
              <div className="relative z-10">
                <div className="flex justify-between items-start mb-4">
                  <div className="p-2 bg-emerald-500/20 rounded-lg">
                    <Sprout className="text-emerald-400" size={24} />
                  </div>
                  <span className="text-xs font-mono text-emerald-400 border border-emerald-500/30 px-2 py-1 rounded">AI POWERED</span>
                </div>
                <h3 className="text-2xl font-bold mb-2">AgroScan AI</h3>
                <p className="text-slate-400 text-sm leading-relaxed">
                  Detecção de patógenos em lavouras utilizando Visão Computacional e análise preditiva de safras em tempo real.
                </p>
              </div>
              <div className="relative z-10 mt-6 bg-black/50 backdrop-blur-md p-4 rounded-lg border border-slate-700/50 font-mono text-xs shadow-xl group-hover:border-emerald-500/30 transition-colors">
                  <div className="text-slate-300 space-y-1">
                  <p><span className="text-purple-400">def</span> <span className="text-blue-400">analyze</span>(img):</p>
                  <p className="pl-4">model = tf.load(<span className="text-green-400">'agro_v2.h5'</span>)</p>
                  <p className="pl-4"><span className="text-purple-400">return</span> model.predict(img)</p>
                </div>
              </div>
            </BentoCard>

            {/* Projeto 2: HardTrap Store */}
            <BentoCard 
              onClick={() => setShowEcommerceModal(true)}
              noPadding={true}
              className="group overflow-hidden cursor-pointer h-96 flex flex-col"
            >
              <div className="h-1/2 p-8 flex flex-col justify-center bg-white z-10 relative">
                  <div className="flex items-center gap-2 mb-3">
                    <div className="w-8 h-8 rounded-full bg-blue-50 flex items-center justify-center text-blue-600">
                      <ShoppingCart size={16} />
                    </div>
                    <span className="text-[11px] font-bold text-slate-400 uppercase tracking-widest">E-commerce</span>
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-2 group-hover:text-blue-700 transition-colors">HardTrap Store</h3>
                  <p className="text-slate-500 text-sm leading-relaxed">
                    Plataforma completa com Dashboard, Stripe e Gestão de Estoque.
                  </p>
                  <div className="mt-4 flex items-center gap-2 text-sm font-bold text-blue-600">
                      Ver Arquitetura <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                  </div>
              </div>
              <div className="h-1/2 bg-slate-100 relative overflow-hidden">
                 <img 
                    src="/ecommerce.png" 
                    onError={(e) => {e.target.onerror = null; e.target.src="https://images.unsplash.com/photo-1556742049-0cfed4f7a07d?auto=format&fit=crop&w=800&q=80"}}
                    alt="Store Dashboard" 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                 />
              </div>
            </BentoCard>

          </div>
        </section>

        {/* SEÇÃO 3: LABS & EXPERIMENTOS */}
        <section>
          <SectionTitle icon={Code2} title="Labs & Conceitos" />
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
             {/* Card A */}
            <BentoCard className="flex flex-col gap-3 group hover:border-emerald-200 transition-colors min-h-[180px]">
                <div className="p-2 bg-slate-100 rounded-lg w-fit group-hover:bg-emerald-50 group-hover:text-emerald-600 transition-colors">
                   <Folder size={20} />
                </div>
                <div>
                  <h4 className="font-bold text-slate-800">Sistema ERP</h4>
                  <p className="text-xs text-slate-500 mt-1">Gestão empresarial modular.</p>
                </div>
            </BentoCard>

            {/* Card B */}
            <BentoCard className="flex flex-col gap-3 group hover:border-blue-200 transition-colors min-h-[180px]">
                 <div className="p-2 bg-slate-100 rounded-lg w-fit group-hover:bg-blue-50 group-hover:text-blue-600 transition-colors">
                   <Layout size={20} />
                </div>
                <div>
                  <h4 className="font-bold text-slate-800">App Delivery</h4>
                  <p className="text-xs text-slate-500 mt-1">Mobile React Native.</p>
                </div>
            </BentoCard>

            {/* Card C */}
            <BentoCard className="flex flex-col gap-3 group hover:border-purple-200 transition-colors min-h-[180px]">
                 <div className="p-2 bg-slate-100 rounded-lg w-fit group-hover:bg-purple-50 group-hover:text-purple-600 transition-colors">
                   <Globe size={20} />
                </div>
                <div>
                  <h4 className="font-bold text-slate-800">API Gateway</h4>
                  <p className="text-xs text-slate-500 mt-1">Orquestração de microsserviços.</p>
                </div>
            </BentoCard>

            {/* Card D */}
            <BentoCard className="flex flex-col gap-3 group hover:border-orange-200 transition-colors min-h-[180px]">
                 <div className="p-2 bg-slate-100 rounded-lg w-fit group-hover:bg-orange-50 group-hover:text-orange-600 transition-colors">
                   <Box size={20} />
                </div>
                <div>
                  <h4 className="font-bold text-slate-800">Microservices</h4>
                  <p className="text-xs text-slate-500 mt-1">Arquitetura event-driven.</p>
                </div>
            </BentoCard>
          </div>
        </section>

        {/* SEÇÃO 4: BACKGROUND */}
        <section>
          <SectionTitle icon={GraduationCap} title="Background & Tech" />
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            {/* Tech Stack */}
            <BentoCard className="md:col-span-1 flex flex-col justify-center bg-white border-slate-200">
              <h3 className="font-bold text-slate-800 mb-4 flex items-center gap-2">
                <Terminal size={18} /> Stack Principal
              </h3>
              <div className="flex flex-wrap gap-2">
                {["Python", "Next.js", "PostgreSQL", "React", "Docker", "AWS", "Typescript"].map((tech) => (
                  <span key={tech} className="px-3 py-1 bg-slate-50 text-slate-600 text-xs font-bold rounded-md border border-slate-100 cursor-default">
                    {tech}
                  </span>
                ))}
              </div>
            </BentoCard>

            {/* Formação */}
            <BentoCard className="md:col-span-2 bg-slate-100 border-none">
              <div className="flex flex-col md:flex-row justify-between items-center gap-6 h-full">
                 <div className="flex-1 space-y-4">
                    <div>
                      <h4 className="font-bold text-slate-900 flex items-center gap-2">
                        <Sprout size={16} className="text-emerald-600" /> Pós em IA e Big Data
                      </h4>
                      <p className="text-xs text-slate-500 pl-6">Pontifícia Universidade Católica (PUCPR)</p>
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-900 flex items-center gap-2">
                        <Terminal size={16} className="text-slate-600" /> Eng. de Software
                      </h4>
                      <p className="text-xs text-slate-500 pl-6">Universidade Grande Vale (UGV)</p>
                    </div>
                 </div>
                 <a href="/curriculo.pdf" download className="w-full md:w-auto flex justify-center items-center gap-2 bg-white border border-slate-300 px-6 py-3 rounded-xl font-bold text-slate-700 hover:shadow-md transition-all">
                   <Download size={20} /> Download CV
                 </a>
              </div>
            </BentoCard>

          </div>
        </section>

      </div>
    </div>
  );
}

export default App;
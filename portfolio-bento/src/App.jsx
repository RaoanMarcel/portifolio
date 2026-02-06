import React, { useState } from 'react';
import { Github, Linkedin, Mail, Sprout, ShoppingCart, ExternalLink, Download, Terminal, X, Server, Database, Globe, Lock, Cpu } from 'lucide-react';

const BentoCard = ({ children, className = "", onClick }) => (
  <div 
    onClick={onClick}
    className={`bg-white p-6 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-all duration-300 ${onClick ? 'cursor-pointer' : ''} ${className}`}
  >
    {children}
  </div>
);

function App() {
  const [showEcommerceModal, setShowEcommerceModal] = useState(false);

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 p-4 md:p-8 font-sans selection:bg-emerald-100">
      
      {/* --- MODAL DO E-COMMERCE (HARDTRAP STORE) --- */}
      {showEcommerceModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm transition-all animate-in fade-in duration-200" onClick={() => setShowEcommerceModal(false)}>
          <div className="bg-white w-full max-w-3xl rounded-2xl shadow-2xl overflow-hidden border border-slate-200" onClick={(e) => e.stopPropagation()}>
            
            {/* Cabeçalho Modal */}
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

            {/* Corpo do Modal */}
            <div className="p-6 overflow-y-auto max-h-[80vh]">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-6">
                
                {/* Coluna 1: Frontend & Performance */}
                <div className="space-y-4">
                  <h3 className="font-bold text-slate-700 flex items-center gap-2 border-b pb-2">
                    <Cpu size={18} className="text-emerald-600" /> Frontend & SSR
                  </h3>
                  <ul className="space-y-3 text-sm text-slate-600">
                    <li className="flex gap-3">
                      <span className="font-semibold text-slate-800 min-w-[90px]">Next.js 14:</span>
                      <span>App Router e Server-Side Rendering para SEO.</span>
                    </li>
                    <li className="flex gap-3">
                      <span className="font-semibold text-slate-800 min-w-[90px]">Tailwind:</span>
                      <span>Design responsivo e performance de carregamento.</span>
                    </li>
                    <li className="flex gap-3">
                      <span className="font-semibold text-slate-800 min-w-[90px]">Security:</span>
                      <span>Auth via JWT (HttpOnly Cookies) e RBAC.</span>
                    </li>
                  </ul>
                </div>

                {/* Coluna 2: Backend & Dados */}
                <div className="space-y-4">
                  <h3 className="font-bold text-slate-700 flex items-center gap-2 border-b pb-2">
                    <Database size={18} className="text-blue-600" /> Backend & Data
                  </h3>
                  <ul className="space-y-3 text-sm text-slate-600">
                    <li className="flex gap-3">
                      <span className="font-semibold text-slate-800 min-w-[90px]">PostgreSQL:</span>
                      <span>Banco relacional robusto para integridade de pedidos.</span>
                    </li>
                    <li className="flex gap-3">
                      <span className="font-semibold text-slate-800 min-w-[90px]">Prisma ORM:</span>
                      <span>Type-safety e otimização de queries.</span>
                    </li>
                    <li className="flex gap-3">
                      <span className="font-semibold text-slate-800 min-w-[90px]">Stripe:</span>
                      <span>Processamento de pagamentos via Webhooks.</span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Snippet de Código Visual (Prisma Transaction) */}
              <div className="bg-[#1e293b] rounded-lg p-4 font-mono text-xs text-slate-300 border border-slate-700 shadow-inner">
                <div className="flex justify-between items-center mb-3 border-b border-slate-700 pb-2">
                  <span className="text-blue-400 font-bold">checkoutService.ts</span>
                  <span className="text-slate-500 flex items-center gap-1"><Server size={10} /> Prisma Transaction</span>
                </div>
                <div className="space-y-1 opacity-90">
                  <p><span className="text-purple-400">const</span> createOrder = <span className="text-purple-400">async</span> (userId, items) ={`>`} {`{`}</p>
                  <p className="pl-4 text-slate-500">// Transaction garante que estoque e pedido andem juntos</p>
                  <p className="pl-4"><span className="text-purple-400">return await</span> prisma.$transaction(<span className="text-purple-400">async</span> (tx) ={`>`} {`{`}</p>
                  <p className="pl-8"><span className="text-purple-400">for</span> (<span className="text-purple-400">const</span> item <span className="text-purple-400">of</span> items) {`{`}</p>
                  <p className="pl-12"><span className="text-purple-400">await</span> tx.product.update({`{`}</p>
                  <p className="pl-16">where: {`{`} id: item.id {`}`},</p>
                  <p className="pl-16">data: {`{`} stock: {`{`} decrement: item.qty {`}`} {`}`}</p>
                  <p className="pl-12">{`}`});</p>
                  <p className="pl-8">{`}`}</p>
                  <p className="pl-8"><span className="text-purple-400">return await</span> tx.order.create({`{`}</p>
                  <p className="pl-12">data: {`{`} userId, status: <span className="text-green-400">'PENDING'</span>, items {`}`}</p>
                  <p className="pl-8">{`}`});</p>
                  <p className="pl-4">{`}`});</p>
                  <p>{`}`}</p>
                </div>
              </div>

            </div>
          </div>
        </div>
      )}

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
            <a 
              href="mailto:contatoraoanmarcel@gmail.com" 
              className="flex items-center gap-2 bg-slate-900 text-white px-5 py-2.5 rounded-lg font-medium hover:bg-slate-800 transition cursor-pointer"
            >
              <Mail size={18} /> Contato
            </a>
            <a 
              href="https://www.linkedin.com/in/raoan-marcel/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-white border border-slate-300 px-5 py-2.5 rounded-lg font-medium hover:bg-slate-50 transition cursor-pointer"
            >
              <Linkedin size={18} /> LinkedIn
            </a>
          </div>
        </BentoCard>

        {/* 2. PROJETO DESTAQUE: AGRO IA */}
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
          
          <div className="relative z-10 mt-6 bg-[#0f172a] p-4 rounded-lg border border-slate-700 font-mono text-xs overflow-hidden shadow-xl hover:scale-[1.02] transition-transform duration-500">
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
            {["Python", "Next.js", "PostgreSQL", "React", "Docker", "AWS", "Prisma"].map((tech) => (
              <span key={tech} className="px-3 py-1 bg-slate-100 text-slate-700 text-sm font-medium rounded-md border border-slate-200 hover:bg-emerald-50 hover:text-emerald-700 transition-colors cursor-default">
                {tech}
              </span>
            ))}
          </div>
        </BentoCard>

        {/* 4. PROJETO HARDTRAP STORE (CLICÁVEL + LINK EXTERNO) */}
        <BentoCard 
          onClick={() => setShowEcommerceModal(true)}
          className="md:col-span-2 flex flex-col md:flex-row gap-6 items-center overflow-hidden group cursor-pointer relative"
        >
           {/* Efeito sutil de hover no card */}
           <div className="absolute inset-0 bg-blue-50/0 group-hover:bg-blue-50/30 transition-colors duration-300 pointer-events-none"></div>

          <div className="flex-1 space-y-3 z-10 p-2">
            <div className="flex items-center justify-between">
                <div className="p-2 bg-blue-100 w-fit rounded-lg text-blue-700">
                  <ShoppingCart size={24} />
                </div>
            </div>
            
            <h3 className="text-xl font-bold text-slate-800">HardTrap Store</h3>
            <p className="text-slate-600 text-sm">
              E-commerce Full Stack com Dashboard Admin em tempo real. Arquitetura desacoplada e checkout seguro.
            </p>
            
            {/* STACK VISÍVEL RAPIDAMENTE */}
            <div className="flex flex-wrap gap-2 mt-2">
                {["Next.js 14", "PostgreSQL", "Prisma", "Stripe"].map(t => (
                    <span key={t} className="text-xs font-mono bg-slate-100 text-slate-600 px-2 py-1 rounded border border-slate-200">
                        {t}
                    </span>
                ))}
            </div>

            <div className="flex gap-3 pt-2">
               <button className="text-sm font-bold text-blue-600 flex items-center gap-1 hover:text-blue-800 transition">
                 Ver Arquitetura <ExternalLink size={14} />
               </button>
               
               {/* BOTÃO LINK EXTERNO */}
               <a 
                 href="https://hardtrap.com" 
                 target="_blank" 
                 rel="noopener noreferrer"
                 onClick={(e) => e.stopPropagation()} // Para não abrir o modal quando clicar no link
                 className="text-sm font-bold text-slate-500 flex items-center gap-1 hover:text-slate-800 transition border-l border-slate-300 pl-3"
               >
                 <Globe size={14} /> Acessar Loja
               </a>
            </div>
          </div>
          
          {/* IMAGEM DO E-COMMERCE (MAIOR) */}
          <div className="w-full md:w-1/2 h-48 md:h-full min-h-[200px] bg-slate-100 rounded-xl border border-slate-200 overflow-hidden relative shadow-inner">
            <img 
                src="/ecommerce.png" 
                onError={(e) => {e.target.onerror = null; e.target.src="https://images.unsplash.com/photo-1556742049-0cfed4f7a07d?auto=format&fit=crop&w=800&q=80"}}
                alt="HardTrap Store Dashboard" 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
            />
          </div>
        </BentoCard>

        {/* 5. GITHUB */}
        <a 
          href="https://github.com/RaoanMarcel" 
          target="_blank"
          rel="noopener noreferrer"
          className="contents" 
        >
          <BentoCard className="bg-emerald-600 text-white border-transparent hover:bg-emerald-700 flex flex-col items-center justify-center text-center gap-2 cursor-pointer transition-colors">
            <Github size={32} />
            <span className="font-bold">GitHub</span>
            <span className="text-xs opacity-80">Ver repositórios</span>
          </BentoCard>
        </a>

        {/* 6. FORMAÇÃO */}
        <BentoCard className="md:col-span-3 bg-slate-100 border-none">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
             
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

             <div className="w-full md:w-auto flex justify-end">
               <a 
                 href="/curriculo.pdf" 
                 download="Curriculo_Eng_Software.pdf"
                 className="flex items-center gap-2 bg-white border border-slate-300 px-6 py-3 rounded-xl font-bold text-slate-700 hover:bg-white hover:border-emerald-500 hover:text-emerald-600 hover:shadow-md transition-all group"
               >
                 <Download size={20} className="group-hover:animate-bounce" />
                 Download CV
               </a>
             </div>

          </div>
        </BentoCard>

      </div>
    </div>
  );
}

export default App;
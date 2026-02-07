import React, { useState } from 'react';
import { 
  Github, Linkedin, Mail, Sprout, Database, ExternalLink, Download, 
  Terminal, X, Server, Cpu, ArrowRight, Folder, 
  Layout, Box, Code2, GraduationCap, ChevronLeft, ChevronRight, 
  Search, BarChart3, Cloud, ShieldCheck, Play 
} from 'lucide-react';
import curriculoPdf from './assets/curriculo.pdf';

const BentoCard = ({ children, className = "", onClick, noPadding = false }) => (
  <div 
    onClick={onClick}
    className={`bg-white rounded-2xl border border-slate-200 shadow-sm hover:shadow-lg transition-all duration-300 ${onClick ? 'cursor-pointer' : ''} ${className} ${noPadding ? 'p-0' : 'p-6'}`}
  >
    {children}
  </div>
);

const SectionTitle = ({ icon: Icon, title, colorClass = "text-slate-500" }) => (
  <div className={`flex items-center gap-2 mb-6 font-bold uppercase tracking-widest text-xs pl-1 ${colorClass}`}>
    <Icon size={14} /> {title}
  </div>
);

const VSCodeWindow = ({ code, fileName = "model_inference.py", output }) => (
  <div className="w-full rounded-lg overflow-hidden border border-slate-800 bg-[#1e1e1e] shadow-2xl font-mono text-xs group">
    <div className="bg-[#2d2d2d] px-3 py-2 flex items-center gap-2 border-b border-black/20">
      <div className="flex gap-1.5 opacity-60 group-hover:opacity-100 transition-opacity">
        <div className="w-2.5 h-2.5 rounded-full bg-[#ff5f56]"></div>
        <div className="w-2.5 h-2.5 rounded-full bg-[#ffbd2e]"></div>
        <div className="w-2.5 h-2.5 rounded-full bg-[#27c93f]"></div>
      </div>
      <span className="ml-2 text-slate-400 text-[10px] flex items-center gap-1">
        <Code2 size={10} /> {fileName}
      </span>
    </div>
    <div className="p-4 text-slate-300 overflow-x-auto leading-relaxed">
      {code.map((line, i) => (
        <div key={i} className="flex hover:bg-white/5 transition-colors">
          <span className="text-slate-600 w-6 shrink-0 text-right mr-3 select-none">{i + 1}</span>
          <span dangerouslySetInnerHTML={{ __html: line }}></span>
        </div>
      ))}
    </div>
    {output && (
      <div className="border-t border-slate-700 bg-[#1e1e1e] p-3">
        <div className="flex items-center gap-2 text-[10px] text-slate-500 mb-1 uppercase tracking-wider">
          <Terminal size={10} /> Output
        </div>
        <div className="font-mono text-emerald-400 opacity-90">
          <span className="text-pink-400">➜</span> {output}
        </div>
      </div>
    )}
  </div>
);

function App() {
  const [showDetailsModal, setShowDetailsModal] = useState(false);

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
    <div className="min-h-screen bg-[#f8fafc] text-slate-900 p-6 md:p-12 font-sans selection:bg-indigo-100 relative overflow-hidden">
      
      <style>{`
        @keyframes float-1 {
          0%, 100% { transform: translate(0, 0) rotate(0deg); }
          33% { transform: translate(100px, -50px) rotate(10deg); }
          66% { transform: translate(-50px, 50px) rotate(-5deg); }
        }
        @keyframes float-2 {
          0%, 100% { transform: translate(0, 0) scale(1); }
          50% { transform: translate(-80px, -80px) scale(1.1); }
        }
        @keyframes float-3 {
          0%, 100% { transform: translate(0, 0) scale(1); }
          50% { transform: translate(50px, 80px) scale(1.2); }
        }
        .aurora-blob {
          position: absolute;
          filter: blur(80px);
          opacity: 0.6;
          mix-blend-mode: multiply;
          border-radius: 50%;
          animation-timing-function: ease-in-out;
          animation-iteration-count: infinite;
        }
      `}</style>

      <div className="fixed inset-0 -z-0 bg-slate-50 overflow-hidden">
          
          <div 
            className="aurora-blob bg-indigo-300 w-[60vw] h-[60vw] top-[-10%] left-[-10%]"
            style={{ animation: 'float-1 15s infinite' }}
          ></div>

          <div 
            className="aurora-blob bg-emerald-300 w-[50vw] h-[50vw] top-[20%] right-[-10%]"
            style={{ animation: 'float-2 18s infinite' }}
          ></div>

          <div 
            className="aurora-blob bg-purple-300 w-[50vw] h-[50vw] bottom-[-10%] left-[20%]"
            style={{ animation: 'float-3 20s infinite' }}
          ></div>

          <div className="absolute inset-0 bg-white/40 backdrop-blur-[10px]"></div>
          
      </div>

      {showDetailsModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-in fade-in" onClick={() => setShowDetailsModal(false)}>
          <div className="bg-white w-full max-w-3xl rounded-2xl shadow-2xl overflow-hidden border border-slate-200" onClick={(e) => e.stopPropagation()}>
            <div className="bg-slate-50 p-4 border-b border-slate-100 flex justify-between items-center">
              <h2 className="text-lg font-bold text-slate-800 flex items-center gap-2">
                <Database className="text-indigo-600" /> Arquitetura de Dados: HardTrap
              </h2>
              <button onClick={() => setShowDetailsModal(false)} className="p-1 hover:bg-slate-200 rounded-full transition"><X size={20} /></button>
            </div>
            <div className="p-8 space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <h3 className="font-bold text-indigo-900 border-b border-indigo-100 pb-2 mb-2">Backend & Ingestion</h3>
                    <ul className="text-sm text-slate-600 space-y-2">
                      <li className="flex items-start gap-2"><div className="w-1.5 h-1.5 mt-1.5 rounded-full bg-indigo-500"/> <strong>Prisma ORM:</strong> Modelagem relacional complexa.</li>
                      <li className="flex items-start gap-2"><div className="w-1.5 h-1.5 mt-1.5 rounded-full bg-indigo-500"/> <strong>Webhooks:</strong> Eventos assíncronos do Stripe.</li>
                      <li className="flex items-start gap-2"><div className="w-1.5 h-1.5 mt-1.5 rounded-full bg-indigo-500"/> <strong>Supabase:</strong> DB Escalável.</li>
                    </ul>
                  </div>
                  <div className="space-y-2">
                    <h3 className="font-bold text-indigo-900 border-b border-indigo-100 pb-2 mb-2">Analytics</h3>
                    <ul className="text-sm text-slate-600 space-y-2">
                      <li className="flex items-start gap-2"><div className="w-1.5 h-1.5 mt-1.5 rounded-full bg-emerald-500"/> <strong>KPIs em Tempo Real:</strong> Dashboard admin.</li>
                      <li className="flex items-start gap-2"><div className="w-1.5 h-1.5 mt-1.5 rounded-full bg-emerald-500"/> <strong>ETL de Vendas:</strong> Raw data &gt; Insights.</li>
                    </ul>
                  </div>
                </div>
                
                <div className="bg-[#1e1e1e] rounded-lg p-5 mt-4 shadow-inner">
                  <p className="font-mono text-xs text-slate-500 mb-2 border-b border-slate-700 pb-2 flex justify-between">
                    <span>// Pipeline de processamento de pedido</span>
                    <span className="text-indigo-400">server-side</span>
                  </p>
                  <p className="font-mono text-xs text-slate-300 leading-6">
                    <span className="text-purple-400">async function</span> <span className="text-yellow-200">processOrderData</span>(event) {'{'}<br/>
                    &nbsp;&nbsp;<span className="text-blue-400">const</span> rawData = <span className="text-purple-400">await</span> stripe.events.retrieve(event.id);<br/>
                    &nbsp;&nbsp;<span className="text-emerald-400">await</span> dataLake.ingest(<span className="text-orange-300">"raw_orders"</span>, rawData);<br/>
                    &nbsp;&nbsp;<span className="text-slate-500">/* Dispara job de analytics */</span><br/>
                    {'}'}
                  </p>
                </div>
            </div>
          </div>
        </div>
      )}
      
      <div className="relative z-10 max-w-6xl mx-auto space-y-10">
        
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
                  <a href="#" className="flex items-center gap-2 bg-white border border-slate-200 px-5 py-2.5 rounded-lg font-medium hover:bg-slate-50 hover:border-slate-300 transition text-sm text-slate-700">
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

        <section>
          <SectionTitle icon={Cpu} title="Inteligência Artificial & Computer Vision" colorClass="text-emerald-700" />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            
            <BentoCard className="flex flex-col justify-center bg-white border-emerald-100 hover:border-emerald-300">
               <div className="mb-4 bg-emerald-50 w-fit p-3 rounded-xl text-emerald-600">
                 <Sprout size={28} />
               </div>
               <h2 className="text-2xl font-bold text-slate-900 mb-3">AgroScan AI</h2>
               <p className="text-slate-600 mb-6 leading-relaxed">
                 Modelo de Visão Computacional treinado para detecção precoce de patógenos em lavouras. Utiliza <strong>TensorFlow</strong> e processamento de imagem para classificar a saúde das folhas em tempo real via API.
               </p>
               
               <div className="space-y-3 mb-8">
                 <div className="flex items-center gap-3 text-sm text-slate-700">
                   <ShieldCheck size={16} className="text-emerald-500" /> Precisão de 94% no Dataset de Teste
                 </div>
                 <div className="flex items-center gap-3 text-sm text-slate-700">
                   <Cloud size={16} className="text-emerald-500" /> Deploy em construção
                 </div>
               </div>

               <div className="flex gap-2 mt-auto pt-4 border-t border-slate-100">
                 <span className="text-[10px] bg-slate-50 px-2 py-1 rounded border border-slate-200 text-slate-600 font-mono">Python</span>
                 <span className="text-[10px] bg-slate-50 px-2 py-1 rounded border border-slate-200 text-slate-600 font-mono">Keras</span>
                 <span className="text-[10px] bg-slate-50 px-2 py-1 rounded border border-slate-200 text-slate-600 font-mono">OpenCV</span>
                 <span className="text-[10px] bg-slate-50 px-2 py-1 rounded border border-slate-200 text-slate-600 font-mono">TensorFlow</span>
                 <span className="text-[10px] bg-slate-50 px-2 py-1 rounded border border-slate-200 text-slate-600 font-mono">Flutter</span>
               </div>
            </BentoCard>

            <div className="flex flex-col gap-4">
              <VSCodeWindow 
                fileName="predict_disease.py"
                output="Prediction: 'Rust' (Confidence: 0.94)"
                code={[
                  '<span class="text-purple-400">import</span> tensorflow <span class="text-purple-400">as</span> tf',
                  '<span class="text-purple-400">import</span> cv2',
                  '',
                  '<span class="text-blue-400">def</span> <span class="text-yellow-200">analyze_leaf</span>(image_path):',
                  '&nbsp;&nbsp;img = cv2.imread(image_path)',
                  '&nbsp;&nbsp;img = tf.image.resize(img, [<span class="text-orange-300">224</span>, <span class="text-orange-300">224</span>])',
                  '&nbsp;&nbsp;model = tf.keras.models.load(<span class="text-orange-300">"agro_v2.h5"</span>)',
                  '',
                  '&nbsp;&nbsp;<span class="text-slate-500"># Inferência do modelo</span>',
                  '&nbsp;&nbsp;prediction = model.predict(tf.expand_dims(img, <span class="text-orange-300">0</span>))',
                  '&nbsp;&nbsp;<span class="text-purple-400">return</span> <span class="text-yellow-200">format_output</span>(prediction)'
                ]}
              />
              <div className="bg-white rounded-xl p-4 border border-emerald-100 shadow-sm flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="bg-emerald-50 p-2 rounded-lg text-emerald-600"><BarChart3 size={20} /></div>
                    <div>
                      <p className="text-[10px] text-slate-400 font-bold uppercase tracking-wider">Imagens Processadas</p>
                      <p className="font-bold text-slate-800 text-lg">1,320 +</p>
                    </div>
                  </div>
                  <div className="text-emerald-700 text-xs font-bold bg-emerald-50 px-2 py-1 rounded-full border border-emerald-100">+14% este mês</div>
              </div>
            </div>

          </div>
        </section>

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
                   <button onClick={() => setShowDetailsModal(true)} className="flex items-center gap-2 text-sm font-bold text-indigo-600 hover:text-indigo-800 transition bg-indigo-50 px-4 py-2 rounded-lg border border-indigo-100">
                     <Code2 size={16} /> Ver Arquitetura
                   </button>
                   <a href="https://hardtrap.com" target="_blank" className="flex items-center gap-2 text-sm font-bold text-slate-500 hover:text-slate-800 transition px-4 py-2">
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
                <div className="flex items-center gap-3 text-slate-600 opacity-80 hover:opacity-100 transition">
                   <Layout size={18} />
                   <span className="text-sm font-bold">API Gateway</span>
                </div>
                <div className="h-px bg-slate-200 w-full"></div>
                <div className="flex items-center gap-3 text-slate-600 opacity-80 hover:opacity-100 transition">
                   <Database size={18} />
                   <span className="text-sm font-bold">SQL Optimization</span>
                </div>
                <div className="h-px bg-slate-200 w-full"></div>
                <div className="flex items-center gap-3 text-slate-600 opacity-80 hover:opacity-100 transition">
                   <Box size={18} />
                   <span className="text-sm font-bold">Microservices</span>
                </div>
             </BentoCard>

          </div>
        </section>

        <BentoCard className="bg-white border-slate-200 shadow-sm relative overflow-hidden"> 
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
                  href={curriculoPdf}  
                  download="Curriculo_Eng_Software.pdf" 
                  className="flex items-center gap-2 bg-white border border-slate-200 px-6 py-3 rounded-xl font-bold text-slate-700 hover:border-emerald-500 hover:text-emerald-700 hover:shadow-lg hover:bg-emerald-50 transition-all group" 
                >              
                 <Download size={20} className="group-hover:scale-110 transition-transform" /> 
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
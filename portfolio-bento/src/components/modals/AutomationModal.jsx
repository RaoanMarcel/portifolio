import React from 'react';
import { 
  Bot, X, Cpu, Database, BarChart3, Layout, 
  ShoppingCart, TrendingUp, Zap, RefreshCw, Github 
} from 'lucide-react';

const AutomationModal = ({ onClose }) => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-in fade-in" onClick={onClose}>
      <div className="bg-white w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-2xl shadow-2xl border border-slate-200 flex flex-col" onClick={(e) => e.stopPropagation()}>
        
        <div className="bg-white/80 backdrop-blur-md p-5 border-b border-slate-100 flex justify-between items-center sticky top-0 z-20">
          <h2 className="text-xl font-bold text-slate-800 flex items-center gap-3">
            <div className="p-2 bg-indigo-50 rounded-lg text-indigo-600">
               <Bot size={24} />
            </div>
            Framework de Automação & Monitoramento
          </h2>
          <button onClick={onClose} className="p-2 hover:bg-slate-100 text-slate-500 rounded-full transition"><X size={20} /></button>
        </div>

        <div className="p-6 md:p-8 space-y-8">
            <div className="flex flex-col md:flex-row gap-6 items-start">
                <p className="text-slate-600 text-sm leading-relaxed flex-1">
                  Ferramenta de <strong>RPA de alto desempenho</strong> que integra automação web, processamento de fluxos de dados e interface de controle. Resolve desafios de latência em sistemas dinâmicos e garante persistência de dados onde APIs oficiais não existem.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="group p-5 rounded-xl border border-slate-200 hover:border-indigo-300 hover:shadow-md transition-all duration-300 bg-white">
                    <div className="flex items-center gap-3 mb-3">
                        <div className="p-2 rounded-lg bg-indigo-50 text-indigo-600 group-hover:bg-indigo-600 group-hover:text-white transition-colors">
                            <Cpu size={18}/> 
                        </div>
                        <h3 className="font-bold text-slate-800 text-sm">Engenharia de Automação</h3>
                    </div>
                    <ul className="text-xs text-slate-600 space-y-2 list-disc pl-4 marker:text-indigo-300">
                        <li><strong>Playwright Síncrono:</strong> Automação de fluxos complexos.</li>
                        <li><strong>Gestão de Sessão:</strong> Tratamento de contextos e pop-ups.</li>
                        <li><strong>Injeção Client-Side:</strong> JS injetado para evitar latência de rede.</li>
                    </ul>
                </div>

                <div className="group p-5 rounded-xl border border-slate-200 hover:border-emerald-300 hover:shadow-md transition-all duration-300 bg-white">
                    <div className="flex items-center gap-3 mb-3">
                        <div className="p-2 rounded-lg bg-emerald-50 text-emerald-600 group-hover:bg-emerald-600 group-hover:text-white transition-colors">
                            <Database size={18}/> 
                        </div>
                        <h3 className="font-bold text-slate-800 text-sm">Pipeline de Persistência</h3>
                    </div>
                    <ul className="text-xs text-slate-600 space-y-2 list-disc pl-4 marker:text-emerald-300">
                        <li><strong>Incremental Saving:</strong> Salva apenas melhorias (&gt; 1%).</li>
                        <li><strong>Deduplicação:</strong> Limpeza automática de histórico.</li>
                        <li><strong>Arquitetura JSON:</strong> Recuperação de estado robusta.</li>
                    </ul>
                </div>

                <div className="group p-5 rounded-xl border border-slate-200 hover:border-blue-300 hover:shadow-md transition-all duration-300 bg-white">
                    <div className="flex items-center gap-3 mb-3">
                        <div className="p-2 rounded-lg bg-blue-50 text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                            <BarChart3 size={18}/> 
                        </div>
                        <h3 className="font-bold text-slate-800 text-sm">Monitoramento (Scraper)</h3>
                    </div>
                    <ul className="text-xs text-slate-600 space-y-2 list-disc pl-4 marker:text-blue-300">
                        <li><strong>Streaming Local:</strong> Leitura constante de variáveis de estado.</li>
                        <li><strong>Event Trigger:</strong> Algoritmo de decisão baseado em picos.</li>
                        <li><strong>Observabilidade:</strong> Logs estruturados em tempo real.</li>
                    </ul>
                </div>

                <div className="group p-5 rounded-xl border border-slate-200 hover:border-purple-300 hover:shadow-md transition-all duration-300 bg-white">
                    <div className="flex items-center gap-3 mb-3">
                        <div className="p-2 rounded-lg bg-purple-50 text-purple-600 group-hover:bg-purple-600 group-hover:text-white transition-colors">
                            <Layout size={18}/> 
                        </div>
                        <h3 className="font-bold text-slate-800 text-sm">Control Plane (GUI)</h3>
                    </div>
                    <ul className="text-xs text-slate-600 space-y-2 list-disc pl-4 marker:text-purple-300">
                        <li><strong>Tkinter + Threading:</strong> UI responsiva com bot em background.</li>
                        <li><strong>Separação de Camadas:</strong> Lógica de Execução vs. Visão.</li>
                        <li><strong>Controle Total:</strong> Start/Stop sem crashar a aplicação.</li>
                    </ul>
                </div>
            </div>

            <div className="border border-slate-200 rounded-xl overflow-hidden">
                <div className="bg-slate-50 px-5 py-3 border-b border-slate-200 flex justify-between items-center">
                      <h4 className="font-bold text-slate-800 text-sm flex items-center gap-2">
                        <ShoppingCart size={16} className="text-slate-500"/>
                        Aplicabilidade no E-commerce & Varejo
                      </h4>
                      <span className="text-[10px] font-bold uppercase bg-orange-100 text-orange-700 px-2 py-0.5 rounded-full border border-orange-200">
                        Casos de Uso
                      </span>
                </div>
                
                <div className="p-5 bg-white grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
                      
                      <div className="flex flex-col items-center gap-2 p-3 rounded-lg hover:bg-slate-50 transition cursor-default">
                        <div className="text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-1">Inteligência de Mercado</div>
                        <div className="p-2 bg-emerald-100 text-emerald-600 rounded-full mb-1"><TrendingUp size={20}/></div>
                        <div className="font-bold text-slate-800 text-sm">Monitoramento de Preços</div>
                        <div className="text-[11px] text-slate-500 leading-tight">
                            Dashboards dinâmicos que rastreiam concorrentes e alertam sobre ofertas em tempo real.
                        </div>
                      </div>

                      <div className="flex flex-col items-center gap-2 p-3 rounded-lg hover:bg-slate-50 transition cursor-default md:border-x md:border-slate-100">
                        <div className="text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-1">QA & Infraestrutura</div>
                        <div className="p-2 bg-purple-100 text-purple-600 rounded-full mb-1"><Zap size={20}/></div>
                        <div className="font-bold text-slate-800 text-sm">Stress Test de Checkout</div>
                        <div className="text-[11px] text-slate-500 leading-tight">
                            Simulação massiva de carrinhos e compras para validar servidores em eventos como Black Friday.
                        </div>
                      </div>

                      <div className="flex flex-col items-center gap-2 p-3 rounded-lg hover:bg-slate-50 transition cursor-default">
                        <div className="text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-1">Integração ERP</div>
                        <div className="p-2 bg-blue-100 text-blue-600 rounded-full mb-1"><RefreshCw size={20}/></div>
                        <div className="font-bold text-slate-800 text-sm">Sincronização de Legado</div>
                        <div className="text-[11px] text-slate-500 leading-tight">
                            Extração de pedidos da web para preenchimento automático em ERPs sem API oficial.
                        </div>
                      </div>

                </div>
                <div className="bg-slate-50 px-5 py-2 border-t border-slate-200 text-center">
                    <p className="text-[10px] text-slate-500">
                        * Soluções escaláveis para validação de fluxos críticos de compra e venda.
                    </p>
                </div>
            </div>

            <div className="pt-2 flex justify-end">
                <a href="https://github.com/RaoanMarcel/Cookie-Clicker-bot" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-slate-900 text-white px-6 py-3 rounded-xl font-bold hover:bg-slate-800 transition shadow-lg shadow-slate-200 text-sm hover:-translate-y-1">
                  <Github size={18} /> Acessar Código Fonte
                </a>
            </div>
        </div>
      </div>
    </div>
  );
};

export default AutomationModal;
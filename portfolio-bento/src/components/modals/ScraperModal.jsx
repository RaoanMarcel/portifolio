import React from 'react';
import { 
  BarChart3, X, Code2, Database, Layers, 
  TrendingUp, Search, AlertCircle, ArrowDown, ExternalLink
} from 'lucide-react';

const ScraperModal = ({ onClose }) => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-in fade-in" onClick={onClose}>
      <div className="bg-white w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-2xl shadow-2xl border border-slate-200 flex flex-col" onClick={(e) => e.stopPropagation()}>
        
        <div className="bg-white/80 backdrop-blur-md p-5 border-b border-slate-100 flex justify-between items-center sticky top-0 z-20">
          <h2 className="text-xl font-bold text-slate-800 flex items-center gap-3">
            <div className="p-2 bg-orange-50 rounded-lg text-orange-600">
               <TrendingUp size={24} />
            </div>
            Market Price Tracker (ETL)
          </h2>
          <button onClick={onClose} className="p-2 hover:bg-slate-100 text-slate-500 rounded-full transition"><X size={20} /></button>
        </div>

        <div className="p-6 md:p-8 space-y-8">
            <div className="flex flex-col md:flex-row gap-6 items-start">
                <p className="text-slate-600 text-sm leading-relaxed flex-1">
                  Pipeline de Engenharia de Dados focado em <strong>Inteligência de Mercado</strong>. O sistema monitora concorrentes (Amazon, Pichau, Terabyte), extrai preços em tempo real e utiliza lógica de negócio para sugerir ajustes de precificação baseados em margem de lucro e competitividade.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                
                <div className="group p-5 rounded-xl border border-slate-200 hover:border-orange-300 hover:shadow-md transition-all duration-300 bg-white">
                    <div className="flex items-center gap-3 mb-3">
                        <div className="p-2 rounded-lg bg-orange-50 text-orange-600 group-hover:bg-orange-600 group-hover:text-white transition-colors">
                            <Search size={18}/> 
                        </div>
                        <h3 className="font-bold text-slate-800 text-sm">1. Extração (Scraping)</h3>
                    </div>
                    <ul className="text-xs text-slate-600 space-y-2 list-disc pl-4 marker:text-orange-300">
                        <li><strong>Python + Requests:</strong> Coleta de alta performance.</li>
                        <li><strong>BeautifulSoup4:</strong> Parsing de HTML estruturado.</li>
                        <li><strong>Anti-Bloqueio:</strong> Rotação de User-Agents.</li>
                    </ul>
                </div>

                <div className="group p-5 rounded-xl border border-slate-200 hover:border-blue-300 hover:shadow-md transition-all duration-300 bg-white">
                    <div className="flex items-center gap-3 mb-3">
                        <div className="p-2 rounded-lg bg-blue-50 text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                            <Database size={18}/> 
                        </div>
                        <h3 className="font-bold text-slate-800 text-sm">2. Carga (Raw Data)</h3>
                    </div>
                    <ul className="text-xs text-slate-600 space-y-2 list-disc pl-4 marker:text-blue-300">
                        <li><strong>Camada Bronze:</strong> Armazena dados "sujos" originais.</li>
                        <li><strong>Histórico:</strong> Rastreabilidade de alterações de preço.</li>
                        <li><strong>PostgreSQL:</strong> Persistência robusta.</li>
                    </ul>
                </div>

                <div className="group p-5 rounded-xl border border-slate-200 hover:border-emerald-300 hover:shadow-md transition-all duration-300 bg-white">
                    <div className="flex items-center gap-3 mb-3">
                        <div className="p-2 rounded-lg bg-emerald-50 text-emerald-600 group-hover:bg-emerald-600 group-hover:text-white transition-colors">
                            <Code2 size={18}/> 
                        </div>
                        <h3 className="font-bold text-slate-800 text-sm">3. Transformação & Regras</h3>
                    </div>
                    <ul className="text-xs text-slate-600 space-y-2 list-disc pl-4 marker:text-emerald-300">
                        <li><strong>Limpeza (Silver):</strong> Normalização de moeda e strings.</li>
                        <li><strong>Enriquecimento (Gold):</strong> Cruzamento com Custo vs. Concorrente.</li>
                        <li><strong>SQL:</strong> Queries analíticas complexas.</li>
                    </ul>
                </div>

                <div className="group p-5 rounded-xl border border-slate-200 hover:border-purple-300 hover:shadow-md transition-all duration-300 bg-white">
                    <div className="flex items-center gap-3 mb-3">
                        <div className="p-2 rounded-lg bg-purple-50 text-purple-600 group-hover:bg-purple-600 group-hover:text-white transition-colors">
                            <Layers size={18}/> 
                        </div>
                        <h3 className="font-bold text-slate-800 text-sm">4. Data Viz & Delivery</h3>
                    </div>
                    <ul className="text-xs text-slate-600 space-y-2 list-disc pl-4 marker:text-purple-300">
                        <li><strong>Índice de Competitividade:</strong> KPI de posicionamento de mercado.</li>
                        <li><strong>Alertas:</strong> Sugestão de "Buy Box" ou Promoção.</li>
                        <li><strong>Dashboard:</strong> Visão clara para tomada de decisão.</li>
                    </ul>
                </div>
            </div>

            <div className="border border-slate-200 rounded-xl overflow-hidden">
                <div className="bg-slate-50 px-5 py-3 border-b border-slate-200 flex justify-between items-center">
                      <h4 className="font-bold text-slate-800 text-sm flex items-center gap-2">
                        <BarChart3 size={16} className="text-slate-500"/>
                        Análise de Competitividade
                      </h4>
                      <span className="text-[10px] font-bold uppercase bg-orange-100 text-orange-700 px-2 py-0.5 rounded-full border border-orange-200">
                        Data Driven
                      </span>
                </div>
                
                <div className="p-5 bg-white grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
                      
                      <div className="flex flex-col items-center gap-2 p-3 rounded-lg hover:bg-slate-50 transition cursor-default">
                        <div className="text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-1">Cenário A</div>
                        <div className="p-2 bg-red-100 text-red-600 rounded-full mb-1"><AlertCircle size={20}/></div>
                        <div className="font-bold text-slate-800 text-sm">Concorrente Agressivo</div>
                        <div className="text-[11px] text-slate-500 leading-tight mt-1">
                            Preço Concorrente &lt; Custo.<br/>
                            <span className="font-bold text-red-600">Ação: Manter Preço (Evitar Prejuízo).</span>
                        </div>
                      </div>

                      <div className="flex flex-col items-center gap-2 p-3 rounded-lg hover:bg-slate-50 transition cursor-default md:border-x md:border-slate-100">
                        <div className="text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-1">Cenário B</div>
                        <div className="p-2 bg-emerald-100 text-emerald-600 rounded-full mb-1"><ArrowDown size={20}/></div>
                        <div className="font-bold text-slate-800 text-sm">Oportunidade</div>
                        <div className="text-[11px] text-slate-500 leading-tight mt-1">
                            Margem permite redução.<br/>
                            <span className="font-bold text-emerald-600">Ação: Baixar para cobrir oferta.</span>
                        </div>
                      </div>

                      <div className="flex flex-col items-center gap-2 p-3 rounded-lg hover:bg-slate-50 transition cursor-default">
                        <div className="text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-1">Visualização</div>
                        <div className="p-2 bg-blue-100 text-blue-600 rounded-full mb-1"><BarChart3 size={20}/></div>
                        <div className="font-bold text-slate-800 text-sm">Market Share</div>
                        <div className="text-[11px] text-slate-500 leading-tight mt-1">
                            Gráfico comparativo de posicionamento da marca vs. média do mercado.
                        </div>
                      </div>

                </div>
            </div>

            <div className="pt-2 flex justify-end">
                <a href="#" className="inline-flex items-center gap-2 bg-slate-900 text-white px-6 py-3 rounded-xl font-bold hover:bg-slate-800 transition shadow-lg shadow-slate-200 text-sm hover:-translate-y-1">
                  <ExternalLink size={18} /> Ver Repositório
                </a>
            </div>
        </div>
      </div>
    </div>
  );
};

export default ScraperModal;
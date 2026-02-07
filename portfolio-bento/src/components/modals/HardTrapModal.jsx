import React from 'react';
import { 
  Database, X, Server, CreditCard, Shield, 
  ShoppingBag, Zap, BarChart3, Lock, Github, Layout
} from 'lucide-react';

const HardTrapModal = ({ onClose }) => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-in fade-in" onClick={onClose}>
      <div className="bg-white w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-2xl shadow-2xl border border-slate-200 flex flex-col" onClick={(e) => e.stopPropagation()}>
        
        {/* --- Header --- */}
        <div className="bg-white/80 backdrop-blur-md p-5 border-b border-slate-100 flex justify-between items-center sticky top-0 z-20">
          <h2 className="text-xl font-bold text-slate-800 flex items-center gap-3">
            <div className="p-2 bg-indigo-50 rounded-lg text-indigo-600">
               <Database size={24} />
            </div>
            Arquitetura de Dados: HardTrap
          </h2>
          <button onClick={onClose} className="p-2 hover:bg-slate-100 text-slate-500 rounded-full transition"><X size={20} /></button>
        </div>

        <div className="p-6 md:p-8 space-y-8">
            {/* Descrição Principal */}
            <div className="flex flex-col md:flex-row gap-6 items-start">
                <p className="text-slate-600 text-sm leading-relaxed flex-1">
                  Plataforma completa de <strong>E-commerce de Produtos Digitais</strong> (Beat Store). Utiliza uma arquitetura orientada a eventos para processar pagamentos via Stripe, gerenciar licenciamento de arquivos de áudio e fornecer downloads seguros instantaneamente após a confirmação.
                </p>
            </div>

            {/* --- Grid Tecnológico (4 Blocos) --- */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                
                {/* Bloco 1: Backend & DB */}
                <div className="group p-5 rounded-xl border border-slate-200 hover:border-indigo-300 hover:shadow-md transition-all duration-300 bg-white">
                    <div className="flex items-center gap-3 mb-3">
                        <div className="p-2 rounded-lg bg-indigo-50 text-indigo-600 group-hover:bg-indigo-600 group-hover:text-white transition-colors">
                            <Server size={18}/> 
                        </div>
                        <h3 className="font-bold text-slate-800 text-sm">Modelagem de Dados (ORM)</h3>
                    </div>
                    <ul className="text-xs text-slate-600 space-y-2 list-disc pl-4 marker:text-indigo-300">
                        <li><strong>Prisma ORM:</strong> Schemas relacionais complexos.</li>
                        <li><strong>MySQL/Postgres:</strong> Integridade transacional.</li>
                        <li><strong>Relações:</strong> Usuários ↔ Licenças ↔ Arquivos.</li>
                    </ul>
                </div>

                {/* Bloco 2: Fintech */}
                <div className="group p-5 rounded-xl border border-slate-200 hover:border-emerald-300 hover:shadow-md transition-all duration-300 bg-white">
                    <div className="flex items-center gap-3 mb-3">
                        <div className="p-2 rounded-lg bg-emerald-50 text-emerald-600 group-hover:bg-emerald-600 group-hover:text-white transition-colors">
                            <CreditCard size={18}/> 
                        </div>
                        <h3 className="font-bold text-slate-800 text-sm">Infraestrutura Financeira</h3>
                    </div>
                    <ul className="text-xs text-slate-600 space-y-2 list-disc pl-4 marker:text-emerald-300">
                        <li><strong>Stripe Connect:</strong> Split de pagamentos.</li>
                        <li><strong>Webhooks:</strong> Escuta eventos de sucesso/falha.</li>
                        <li><strong>Idempotência:</strong> Evita duplicidade de cobrança.</li>
                    </ul>
                </div>

                {/* Bloco 3: Frontend/SEO */}
                <div className="group p-5 rounded-xl border border-slate-200 hover:border-blue-300 hover:shadow-md transition-all duration-300 bg-white">
                    <div className="flex items-center gap-3 mb-3">
                        <div className="p-2 rounded-lg bg-blue-50 text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                            <Layout size={18}/> 
                        </div>
                        <h3 className="font-bold text-slate-800 text-sm">Frontend & Performance</h3>
                    </div>
                    <ul className="text-xs text-slate-600 space-y-2 list-disc pl-4 marker:text-blue-300">
                        <li><strong>Next.js (App Router):</strong> Renderização Híbrida.</li>
                        <li><strong>Zustand:</strong> Gerenciamento de player de áudio global.</li>
                        <li><strong>Tailwind + Shadcn:</strong> UI Design System consistente.</li>
                    </ul>
                </div>

                {/* Bloco 4: Segurança */}
                <div className="group p-5 rounded-xl border border-slate-200 hover:border-purple-300 hover:shadow-md transition-all duration-300 bg-white">
                    <div className="flex items-center gap-3 mb-3">
                        <div className="p-2 rounded-lg bg-purple-50 text-purple-600 group-hover:bg-purple-600 group-hover:text-white transition-colors">
                            <Shield size={18}/> 
                        </div>
                        <h3 className="font-bold text-slate-800 text-sm">Segurança & Entrega</h3>
                    </div>
                    <ul className="text-xs text-slate-600 space-y-2 list-disc pl-4 marker:text-purple-300">
                        <li><strong>URLs Assinadas:</strong> Acesso temporário aos arquivos.</li>
                        <li><strong>Proteção de Rotas:</strong> Middleware de autenticação.</li>
                        <li><strong>Clerk Auth:</strong> Gestão de identidade robusta.</li>
                    </ul>
                </div>
            </div>

            {/* --- SEÇÃO DE NEGÓCIO --- */}
            <div className="border border-slate-200 rounded-xl overflow-hidden">
                <div className="bg-slate-50 px-5 py-3 border-b border-slate-200 flex justify-between items-center">
                      <h4 className="font-bold text-slate-800 text-sm flex items-center gap-2">
                        <ShoppingBag size={16} className="text-slate-500"/>
                        Marketplace & Monetização
                      </h4>
                      <span className="text-[10px] font-bold uppercase bg-orange-100 text-orange-700 px-2 py-0.5 rounded-full border border-orange-200">
                        Full Stack App
                      </span>
                </div>
                
                <div className="p-5 bg-white grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
                      
                      <div className="flex flex-col items-center gap-2 p-3 rounded-lg hover:bg-slate-50 transition cursor-default">
                        <div className="text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-1">Conversão</div>
                        <div className="p-2 bg-emerald-100 text-emerald-600 rounded-full mb-1"><Zap size={20}/></div>
                        <div className="font-bold text-slate-800 text-sm">Venda Automatizada</div>
                        <div className="text-[11px] text-slate-500 leading-tight">
                            Do checkout à entrega do arquivo .WAV e licença PDF sem intervenção humana.
                        </div>
                      </div>

                      <div className="flex flex-col items-center gap-2 p-3 rounded-lg hover:bg-slate-50 transition cursor-default md:border-x md:border-slate-100">
                        <div className="text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-1">Proteção de Ativos</div>
                        <div className="p-2 bg-purple-100 text-purple-600 rounded-full mb-1"><Lock size={20}/></div>
                        <div className="font-bold text-slate-800 text-sm">Gestão de Licenças</div>
                        <div className="text-[11px] text-slate-500 leading-tight">
                            Contratos dinâmicos gerados automaticamente baseados no tier de compra.
                        </div>
                      </div>

                      <div className="flex flex-col items-center gap-2 p-3 rounded-lg hover:bg-slate-50 transition cursor-default">
                        <div className="text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-1">Insights</div>
                        <div className="p-2 bg-blue-100 text-blue-600 rounded-full mb-1"><BarChart3 size={20}/></div>
                        <div className="font-bold text-slate-800 text-sm">Dashboard Analítico</div>
                        <div className="text-[11px] text-slate-500 leading-tight">
                            Monitoramento em tempo real de receita, beats mais vendidos e churn rate.
                        </div>
                      </div>

                </div>
                <div className="bg-slate-50 px-5 py-2 border-t border-slate-200 text-center">
                    <p className="text-[10px] text-slate-500">
                        * Solução escalável capaz de suportar milhares de transações simultâneas.
                    </p>
                </div>
            </div>

            {/* --- Footer / CTA --- */}
            <div className="pt-2 flex justify-end">
                <a href="#" className="inline-flex items-center gap-2 bg-slate-900 text-white px-6 py-3 rounded-xl font-bold hover:bg-slate-800 transition shadow-lg shadow-slate-200 text-sm hover:-translate-y-1">
                  <Github size={18} /> Ver Código (HardTrap)
                </a>
            </div>
        </div>
      </div>
    </div>
  );
};

export default HardTrapModal;
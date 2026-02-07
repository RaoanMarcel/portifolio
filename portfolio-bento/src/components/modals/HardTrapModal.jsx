import React from 'react';
import { 
  Database, X, Server, CreditCard, Shield, 
  ShoppingBag, BarChart3, Lock, Github, Layout, Package, Users
} from 'lucide-react';

const HardTrapModal = ({ onClose }) => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-in fade-in" onClick={onClose}>
      <div className="bg-white w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-2xl shadow-2xl border border-slate-200 flex flex-col" onClick={(e) => e.stopPropagation()}>
        
        <div className="bg-white/80 backdrop-blur-md p-5 border-b border-slate-100 flex justify-between items-center sticky top-0 z-20">
          <h2 className="text-xl font-bold text-slate-800 flex items-center gap-3">
            <div className="p-2 bg-indigo-50 rounded-lg text-indigo-600">
               <ShoppingBag size={24} />
            </div>
            HardTrap Store — Full Stack E-commerce
          </h2>
          <button onClick={onClose} className="p-2 hover:bg-slate-100 text-slate-500 rounded-full transition"><X size={20} /></button>
        </div>

        <div className="p-6 md:p-8 space-y-8">
            <div className="flex flex-col md:flex-row gap-6 items-start">
                <p className="text-slate-600 text-sm leading-relaxed flex-1">
                  Plataforma de comércio eletrônico robusta desenvolvida para simular a operação real de uma marca de <strong>Streetwear</strong>. O sistema implementa um fluxo de vendas completo (End-to-End), desde o catálogo público até o painel administrativo para gestão de KPIs e processamento financeiro.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                
                <div className="group p-5 rounded-xl border border-slate-200 hover:border-indigo-300 hover:shadow-md transition-all duration-300 bg-white">
                    <div className="flex items-center gap-3 mb-3">
                        <div className="p-2 rounded-lg bg-indigo-50 text-indigo-600 group-hover:bg-indigo-600 group-hover:text-white transition-colors">
                            <Server size={18}/> 
                        </div>
                        <h3 className="font-bold text-slate-800 text-sm">Backend & Arquitetura</h3>
                    </div>
                    <ul className="text-xs text-slate-600 space-y-2 list-disc pl-4 marker:text-indigo-300">
                        <li><strong>Node.js + Express:</strong> API RESTful desacoplada.</li>
                        <li><strong>PostgreSQL + Prisma:</strong> Modelagem relacional robusta.</li>
                        <li><strong>CRUD:</strong> Gestão completa de dados.</li>
                    </ul>
                </div>

                <div className="group p-5 rounded-xl border border-slate-200 hover:border-emerald-300 hover:shadow-md transition-all duration-300 bg-white">
                    <div className="flex items-center gap-3 mb-3">
                        <div className="p-2 rounded-lg bg-emerald-50 text-emerald-600 group-hover:bg-emerald-600 group-hover:text-white transition-colors">
                            <CreditCard size={18}/> 
                        </div>
                        <h3 className="font-bold text-slate-800 text-sm">Pagamentos & Webhooks</h3>
                    </div>
                    <ul className="text-xs text-slate-600 space-y-2 list-disc pl-4 marker:text-emerald-300">
                        <li><strong>Stripe Checkout:</strong> Integração de pagamento seguro.</li>
                        <li><strong>Webhooks:</strong> Baixa automática de estoque.</li>
                        <li><strong>Confirmação:</strong> Processamento assíncrono.</li>
                    </ul>
                </div>

                <div className="group p-5 rounded-xl border border-slate-200 hover:border-blue-300 hover:shadow-md transition-all duration-300 bg-white">
                    <div className="flex items-center gap-3 mb-3">
                        <div className="p-2 rounded-lg bg-blue-50 text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                            <Layout size={18}/> 
                        </div>
                        <h3 className="font-bold text-slate-800 text-sm">Frontend & UX</h3>
                    </div>
                    <ul className="text-xs text-slate-600 space-y-2 list-disc pl-4 marker:text-blue-300">
                        <li><strong>Next.js 14:</strong> App Router e React Server Components.</li>
                        <li><strong>Tailwind CSS:</strong> Design responsivo e moderno.</li>
                        <li><strong>Estado:</strong> Carrinho de compras persistente.</li>
                    </ul>
                </div>

                <div className="group p-5 rounded-xl border border-slate-200 hover:border-purple-300 hover:shadow-md transition-all duration-300 bg-white">
                    <div className="flex items-center gap-3 mb-3">
                        <div className="p-2 rounded-lg bg-purple-50 text-purple-600 group-hover:bg-purple-600 group-hover:text-white transition-colors">
                            <Shield size={18}/> 
                        </div>
                        <h3 className="font-bold text-slate-800 text-sm">Segurança (RBAC)</h3>
                    </div>
                    <ul className="text-xs text-slate-600 space-y-2 list-disc pl-4 marker:text-purple-300">
                        <li><strong>JWT Auth:</strong> Autenticação segura de sessões.</li>
                        <li><strong>Controle de Acesso:</strong> Admin vs. Customer.</li>
                        <li><strong>DevOps:</strong> Git workflow e ESLint.</li>
                    </ul>
                </div>
            </div>

            <div className="border border-slate-200 rounded-xl overflow-hidden">
                <div className="bg-slate-50 px-5 py-3 border-b border-slate-200 flex justify-between items-center">
                      <h4 className="font-bold text-slate-800 text-sm flex items-center gap-2">
                        <Database size={16} className="text-slate-500"/>
                        Funcionalidades de Negócio
                      </h4>
                      <span className="text-[10px] font-bold uppercase bg-orange-100 text-orange-700 px-2 py-0.5 rounded-full border border-orange-200">
                        Business Logic
                      </span>
                </div>
                
                <div className="p-5 bg-white grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
                      
                      <div className="flex flex-col items-center gap-2 p-3 rounded-lg hover:bg-slate-50 transition cursor-default">
                        <div className="text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-1">Analytics</div>
                        <div className="p-2 bg-emerald-100 text-emerald-600 rounded-full mb-1"><BarChart3 size={20}/></div>
                        <div className="font-bold text-slate-800 text-sm">Dashboard Admin</div>
                        <div className="text-[11px] text-slate-500 leading-tight">
                            Gráficos de receita em tempo real, Ticket Médio e filtros por período.
                        </div>
                      </div>

                      <div className="flex flex-col items-center gap-2 p-3 rounded-lg hover:bg-slate-50 transition cursor-default md:border-x md:border-slate-100">
                        <div className="text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-1">Operação</div>
                        <div className="p-2 bg-purple-100 text-purple-600 rounded-full mb-1"><Package size={20}/></div>
                        <div className="font-bold text-slate-800 text-sm">Gestão de Estoque</div>
                        <div className="text-[11px] text-slate-500 leading-tight">
                            Controle total de produtos, upload de imagens e atualização automática pós-venda.
                        </div>
                      </div>

                      <div className="flex flex-col items-center gap-2 p-3 rounded-lg hover:bg-slate-50 transition cursor-default">
                        <div className="text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-1">Cliente</div>
                        <div className="p-2 bg-blue-100 text-blue-600 rounded-full mb-1"><Users size={20}/></div>
                        <div className="font-bold text-slate-800 text-sm">Área do Usuário</div>
                        <div className="text-[11px] text-slate-500 leading-tight">
                            Histórico detalhado de pedidos, busca avançada e perfil personalizado.
                        </div>
                      </div>

                </div>
            </div>

            <div className="pt-2 flex justify-end">
                <a href="#" className="inline-flex items-center gap-2 bg-slate-900 text-white px-6 py-3 rounded-xl font-bold hover:bg-slate-800 transition shadow-lg shadow-slate-200 text-sm hover:-translate-y-1">
                  <Github size={18} /> Ver Repositório
                </a>
            </div>
        </div>
      </div>
    </div>
  );
};

export default HardTrapModal;
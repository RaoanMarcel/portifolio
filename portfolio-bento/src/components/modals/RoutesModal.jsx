import React from 'react';
import { 
  Map, X, Server, Navigation, Layers, Code, 
  Truck, Clock, MapPin, Globe, Github 
} from 'lucide-react';

const RoutesModal = ({ onClose }) => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-in fade-in" onClick={onClose}>
      <div className="bg-white w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-2xl shadow-2xl border border-slate-200 flex flex-col" onClick={(e) => e.stopPropagation()}>
        
        <div className="bg-white/80 backdrop-blur-md p-5 border-b border-slate-100 flex justify-between items-center sticky top-0 z-20">
          <h2 className="text-xl font-bold text-slate-800 flex items-center gap-3">
            <div className="p-2 bg-indigo-50 rounded-lg text-indigo-600">
               <Map size={24} />
            </div>
            Smart Route Optimizer & TSP Solver
          </h2>
          <button onClick={onClose} className="p-2 hover:bg-slate-100 text-slate-500 rounded-full transition"><X size={20} /></button>
        </div>

        <div className="p-6 md:p-8 space-y-8">
            <div className="flex flex-col md:flex-row gap-6 items-start">
                <p className="text-slate-600 text-sm leading-relaxed flex-1">
                  Solução de <strong>Otimização Logística</strong> que resolve o problema do Caixeiro Viajante (TSP) integrando dados reais de malha viária. Diferente de roteirizadores simples, este sistema considera a viabilidade física das rotas usando APIs de geolocalização e algoritmos heurísticos.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                
                <div className="group p-5 rounded-xl border border-slate-200 hover:border-indigo-300 hover:shadow-md transition-all duration-300 bg-white">
                    <div className="flex items-center gap-3 mb-3">
                        <div className="p-2 rounded-lg bg-indigo-50 text-indigo-600 group-hover:bg-indigo-600 group-hover:text-white transition-colors">
                            <Server size={18}/> 
                        </div>
                        <h3 className="font-bold text-slate-800 text-sm">Backend & Algoritmos</h3>
                    </div>
                    <ul className="text-xs text-slate-600 space-y-2 list-disc pl-4 marker:text-indigo-300">
                        <li><strong>Python Flask:</strong> API RESTful robusta.</li>
                        <li><strong>Geopy:</strong> Cálculo de distância geodésica.</li>
                        <li><strong>Heurística TSP:</strong> Algoritmo "Nearest Neighbor".</li>
                    </ul>
                </div>

                <div className="group p-5 rounded-xl border border-slate-200 hover:border-emerald-300 hover:shadow-md transition-all duration-300 bg-white">
                    <div className="flex items-center gap-3 mb-3">
                        <div className="p-2 rounded-lg bg-emerald-50 text-emerald-600 group-hover:bg-emerald-600 group-hover:text-white transition-colors">
                            <Globe size={18}/> 
                        </div>
                        <h3 className="font-bold text-slate-800 text-sm">Integração Externa</h3>
                    </div>
                    <ul className="text-xs text-slate-600 space-y-2 list-disc pl-4 marker:text-emerald-300">
                        <li><strong>OpenRouteService:</strong> Dados de tráfego real.</li>
                        <li><strong>GeoJSON:</strong> Padronização de dados espaciais.</li>
                        <li><strong>API Key Management:</strong> Segurança de chaves.</li>
                    </ul>
                </div>

                <div className="group p-5 rounded-xl border border-slate-200 hover:border-blue-300 hover:shadow-md transition-all duration-300 bg-white">
                    <div className="flex items-center gap-3 mb-3">
                        <div className="p-2 rounded-lg bg-blue-50 text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                            <Layers size={18}/> 
                        </div>
                        <h3 className="font-bold text-slate-800 text-sm">Visualização (GIS)</h3>
                    </div>
                    <ul className="text-xs text-slate-600 space-y-2 list-disc pl-4 marker:text-blue-300">
                        <li><strong>Leaflet.js:</strong> Mapas interativos e leves.</li>
                        <li><strong>Polylines:</strong> Renderização de trajetos complexos.</li>
                        <li><strong>Marcadores Dinâmicos:</strong> UI reativa.</li>
                    </ul>
                </div>

                <div className="group p-5 rounded-xl border border-slate-200 hover:border-purple-300 hover:shadow-md transition-all duration-300 bg-white">
                    <div className="flex items-center gap-3 mb-3">
                        <div className="p-2 rounded-lg bg-purple-50 text-purple-600 group-hover:bg-purple-600 group-hover:text-white transition-colors">
                            <Navigation size={18}/> 
                        </div>
                        <h3 className="font-bold text-slate-800 text-sm">Pipeline de Roteirização</h3>
                    </div>
                    <ul className="text-xs text-slate-600 space-y-2 list-disc pl-4 marker:text-purple-300">
                        <li><strong>Input:</strong> Lista de endereços desordenados.</li>
                        <li><strong>Process:</strong> Ordenação lógica + Validação física.</li>
                        <li><strong>Output:</strong> Rota otimizada em tempo e km.</li>
                    </ul>
                </div>
            </div>

            <div className="border border-slate-200 rounded-xl overflow-hidden">
                <div className="bg-slate-50 px-5 py-3 border-b border-slate-200 flex justify-between items-center">
                      <h4 className="font-bold text-slate-800 text-sm flex items-center gap-2">
                        <Truck size={16} className="text-slate-500"/>
                        Aplicabilidade em Logística & Last Mile
                      </h4>
                      <span className="text-[10px] font-bold uppercase bg-orange-100 text-orange-700 px-2 py-0.5 rounded-full border border-orange-200">
                        Impacto Real
                      </span>
                </div>
                
                <div className="p-5 bg-white grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
                      
                      <div className="flex flex-col items-center gap-2 p-3 rounded-lg hover:bg-slate-50 transition cursor-default">
                        <div className="text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-1">Redução de Custos</div>
                        <div className="p-2 bg-emerald-100 text-emerald-600 rounded-full mb-1"><MapPin size={20}/></div>
                        <div className="font-bold text-slate-800 text-sm">Economia de Combustível</div>
                        <div className="text-[11px] text-slate-500 leading-tight">
                            Algoritmos que priorizam a menor distância física real reduzem o consumo da frota em até 20%.
                        </div>
                      </div>

                      <div className="flex flex-col items-center gap-2 p-3 rounded-lg hover:bg-slate-50 transition cursor-default md:border-x md:border-slate-100">
                        <div className="text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-1">Eficiência Operacional</div>
                        <div className="p-2 bg-purple-100 text-purple-600 rounded-full mb-1"><Clock size={20}/></div>
                        <div className="font-bold text-slate-800 text-sm">Otimização de Tempo</div>
                        <div className="text-[11px] text-slate-500 leading-tight">
                            Roteirização automática elimina o planejamento manual, liberando horas da equipe de gestão.
                        </div>
                      </div>

                      <div className="flex flex-col items-center gap-2 p-3 rounded-lg hover:bg-slate-50 transition cursor-default">
                        <div className="text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-1">Engenharia de Dados</div>
                        <div className="p-2 bg-blue-100 text-blue-600 rounded-full mb-1"><Code size={20}/></div>
                        <div className="font-bold text-slate-800 text-sm">Integração de Sistemas</div>
                        <div className="text-[11px] text-slate-500 leading-tight">
                            API pronta para ser acoplada a ERPs, CRMs e aplicativos de entregadores.
                        </div>
                      </div>

                </div>
                <div className="bg-slate-50 px-5 py-2 border-t border-slate-200 text-center">
                    <p className="text-[10px] text-slate-500">
                        * Tecnologia baseada em Open Source (OpenStreetMap) para eliminar custos de licenciamento.
                    </p>
                </div>
            </div>

            <div className="pt-2 flex justify-end">
                <a href="https://github.com/RaoanMarcel/Calculo-de-rotas-python" className="inline-flex items-center gap-2 bg-slate-900 text-white px-6 py-3 rounded-xl font-bold hover:bg-slate-800 transition shadow-lg shadow-slate-200 text-sm hover:-translate-y-1">
                  <Github size={18} /> Ver Repositório
                </a>
            </div>
        </div>
      </div>
    </div>
  );
};

export default RoutesModal;
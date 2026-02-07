import React from 'react';
import { Cpu, Sprout, ShieldCheck, Cloud, BarChart3, Github } from 'lucide-react';

const AISection = () => {
  return (
    <section>
      <div className="flex items-center gap-3 mb-8">
         <div className="p-2 bg-emerald-100 rounded-lg text-emerald-700">
            <Cpu size={24} />
         </div>
         <h2 className="text-3xl font-bold text-slate-900">Inteligência Artificial & Computer Vision</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        
        <div className="flex flex-col justify-center bg-white border border-emerald-100 hover:border-emerald-300 rounded-3xl p-6 shadow-sm transition-all duration-300 relative overflow-hidden group">
            
            <div className="mb-4 bg-emerald-50 w-fit p-3 rounded-xl text-emerald-600">
              <Sprout size={28} />
            </div>
            
            <h2 className="text-2xl font-bold text-slate-900 mb-3">AgroScan AI - Em construção 👷</h2>
            
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

              <div className="pt-2 flex justify-start">
                <a 
                  href="https://github.com/RaoanMarcel/AGData" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-slate-900 text-white px-6 py-3 rounded-xl font-bold hover:bg-slate-800 transition shadow-lg shadow-slate-200 text-sm hover:-translate-y-1"
                >
                  <Github size={18} /> Ver Repositório
                </a>
              </div>
            </div>

            <div className="flex gap-2 mt-auto pt-4 border-t border-slate-100 flex-wrap">
              {['Python', 'Keras', 'OpenCV', 'TensorFlow', 'Flutter'].map(tool => (
                <span key={tool} className="text-[10px] bg-slate-50 px-2 py-1 rounded border border-slate-200 text-slate-600 font-mono">{tool}</span>
              ))}
            </div>
        </div>

        <div className="flex flex-col gap-7">
          
          <div className="bg-[#1e1e1e] rounded-xl overflow-hidden shadow-xl border border-slate-800 font-mono text-xs md:text-sm">
            <div className="bg-[#2d2d2d] px-4 py-2 flex items-center gap-2 border-b border-slate-700">
                <div className="flex gap-1.5">
                    <div className="w-3 h-3 rounded-full bg-red-500"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                    <div className="w-3 h-3 rounded-full bg-green-500"></div>
                </div>
                <span className="ml-2 text-slate-400 text-xs">predict_disease.py</span>
            </div>
            <div className="p-4 text-slate-300 leading-relaxed overflow-x-auto">
                <div><span className="text-purple-400">import</span> tensorflow <span className="text-purple-400">as</span> tf</div>
                <div><span className="text-purple-400">import</span> cv2</div>
                <div className="h-4"></div>
                <div><span className="text-blue-400">def</span> <span className="text-yellow-200">analyze_leaf</span>(image_path):</div>
                <div className="pl-4">img = cv2.imread(image_path)</div>
                <div className="pl-4">img = tf.image.resize(img, [<span className="text-orange-300">224</span>, <span className="text-orange-300">224</span>])</div>
                <div className="pl-4">model = tf.keras.models.load(<span className="text-orange-300">"agro_v2.h5"</span>)</div>
                <div className="h-4"></div>
                <div className="pl-4 text-slate-500"># Inferência do modelo</div>
                <div className="pl-4">prediction = model.predict(tf.expand_dims(img, <span className="text-orange-300">0</span>))</div>
                <div className="pl-4"><span className="text-purple-400">return</span> <span className="text-yellow-200">format_output</span>(prediction)</div>
            </div>
            <div className="bg-[#252526] px-4 py-2 text-emerald-400 border-t border-slate-700 text-xs">
                &gt; Output: Prediction: 'Rust' (Confidence: 0.94)
            </div>
          </div>

          <div className="bg-white rounded-xl p-5 border border-emerald-100 shadow-sm flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="bg-emerald-50 p-2 rounded-lg text-emerald-600"><BarChart3 size={20} /></div>
                <div>
                  <p className="text-[10px] text-slate-400 font-bold uppercase tracking-wider">Imagens Processadas</p>
                  <p className="font-bold text-slate-800 text-lg">1,320 +</p>
                </div>
              </div>
              <div className="text-emerald-700 text-xs font-bold bg-emerald-50 px-4 py-2 rounded-full border border-emerald-100">+14% este mês</div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default AISection;
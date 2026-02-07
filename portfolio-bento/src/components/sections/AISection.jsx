import React from 'react';
import { Cpu, Sprout, ShieldCheck, Cloud, BarChart3, Github } from 'lucide-react';
import SectionTitle from '../ui/SectionTitle';
import BentoCard from '../ui/BentoCard';
import VSCodeWindow from '../ui/VSCodeWindow';

const AISection = () => {
  return (
    <section>
      <SectionTitle icon={Cpu} title="Inteligência Artificial & Computer Vision" colorClass="text-emerald-700" />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        
        <BentoCard className="flex flex-col justify-center bg-white border-emerald-100 hover:border-emerald-300">
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

              {/* Botão de Ver Repositório alinhado à esquerda */}
              <div className="pt-2 flex justify-start">
                <a 
                  href="https://github.com/seu-usuario/seu-repositorio" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-slate-900 text-white px-6 py-3 rounded-xl font-bold hover:bg-slate-800 transition shadow-lg shadow-slate-200 text-sm hover:-translate-y-1"
                >
                  <Github size={18} /> Ver Repositório
                </a>
              </div>
            </div>

            <div className="flex gap-2 mt-auto pt-4 border-t border-slate-100">
              {['Python', 'Keras', 'OpenCV', 'TensorFlow', 'Flutter'].map(tool => (
                <span key={tool} className="text-[10px] bg-slate-50 px-2 py-1 rounded border border-slate-200 text-slate-600 font-mono">{tool}</span>
              ))}
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
  );
};

export default AISection;
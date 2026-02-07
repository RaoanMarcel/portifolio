import React from 'react';
import { Code2, Terminal } from 'lucide-react';

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

export default VSCodeWindow;
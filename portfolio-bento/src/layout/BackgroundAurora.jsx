import React from 'react';

const AnimatedBackground = () => {
  return (
    <div className="fixed inset-0 -z-0 bg-slate-50 overflow-hidden">
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
  );
};

export default AnimatedBackground;
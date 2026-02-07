import React from 'react';

const BentoCard = ({ children, className = "", onClick, noPadding = false }) => (
  <div 
    onClick={onClick}
    className={`bg-white rounded-2xl border border-slate-200 shadow-sm hover:shadow-lg transition-all duration-300 ${onClick ? 'cursor-pointer' : ''} ${className} ${noPadding ? 'p-0' : 'p-6'}`}
  >
    {children}
  </div>
);

export default BentoCard;
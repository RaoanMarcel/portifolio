import React from 'react';

const SectionTitle = ({ icon: Icon, title, colorClass = "text-slate-500" }) => (
  <div className={`flex items-center gap-2 mb-6 font-bold uppercase tracking-widest text-xs pl-1 ${colorClass}`}>
    <Icon size={14} /> {title}
  </div>
);

export default SectionTitle;
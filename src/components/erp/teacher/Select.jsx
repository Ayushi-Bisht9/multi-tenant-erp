import React from 'react';

const Select = ({ label, options, className = '', ...props }) => {
  return (
    <div className={`flex flex-col gap-2 ${className}`}>
      {label && <label className="text-xs font-bold text-on-surface-variant uppercase tracking-wider ml-1">{label}</label>}
      <div className="relative">
        <select 
          className="w-full bg-slate-50 border border-transparent rounded-xl py-3 px-4 text-sm font-medium text-slate-700 outline-none hover:bg-slate-100/80 focus:bg-white focus:border-primary/20 focus:ring-4 focus:ring-primary/5 transition-all duration-200 appearance-none cursor-pointer" 
          {...props}
        >
          {options.map((opt, idx) => (
            <option key={idx} value={opt.value || opt}>{opt.label || opt}</option>
          ))}
        </select>
        <span className="material-symbols-outlined absolute right-3 top-1/2 -translate-y-1/2 text-outline pointer-events-none">
          expand_more
        </span>
      </div>
    </div>
  );
};

export default Select;

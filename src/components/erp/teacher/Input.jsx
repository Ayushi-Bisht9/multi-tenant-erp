import React from 'react';

const Input = ({ label, icon, className = '', ...props }) => {
  return (
    <div className={`flex flex-col gap-2 ${className}`}>
      {label && <label className="text-xs font-bold text-on-surface-variant uppercase tracking-wider ml-1">{label}</label>}
      <div className="relative">
        {icon && (
          <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-outline text-sm">
            {icon}
          </span>
        )}
        <input 
          className={`w-full bg-slate-50 border border-transparent rounded-xl py-3 ${icon ? 'pl-11' : 'pl-4'} pr-4 text-sm font-medium text-slate-700 outline-none hover:bg-slate-100/80 focus:bg-white focus:border-primary/20 focus:ring-4 focus:ring-primary/5 transition-all duration-200 placeholder:text-slate-400`} 
          {...props} 
        />
      </div>
    </div>
  );
};

export default Input;

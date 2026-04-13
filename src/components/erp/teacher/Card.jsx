import React from 'react';

const Card = ({ children, className = '', hoverable = false, ...props }) => {
  const hoverClasses = hoverable ? 'hover:shadow-md transition-all duration-300' : '';
  
  return (
    <article 
      className={`relative bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-sm border border-slate-100/50 flex flex-col transition-all duration-300 ${hoverable ? 'hover:shadow-xl hover:shadow-slate-200/50 hover:-translate-y-1 hover:border-primary/10' : ''} ${className}`} 
      {...props}
    >
      {children}
    </article>
  );
};

export default Card;

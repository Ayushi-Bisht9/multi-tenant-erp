import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { navItems, secondaryNavItems } from "./navigation";


const Sidebar = () => {
  const location = useLocation();

  return (
    <aside className="hidden md:flex fixed left-0 top-0 h-full w-72 bg-slate-50 flex-col p-4 gap-2 border-r border-slate-100 z-50 overflow-x-hidden">
      <div className="flex items-center gap-3 px-3 py-6 mb-4 group cursor-pointer hover:bg-white rounded-2xl transition-all duration-300 shadow-transparent hover:shadow-slate-200/50">
        <div className="w-12 h-12 rounded-xl bg-primary-container text-white flex items-center justify-center shadow-sm overflow-hidden group-hover:scale-110 transition-transform duration-500">
          <img
            alt="Profile"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuA1r4SHKOJzprfsYNvIXPTmb1qDRiCdpFaROwiAFyBqttKLLe7jPLnWG5l-jRzcjH0aQRtK8-1tySlL0SvbVvMnMaJZByD1ez1bTkT3hH6bDbiTSADdFDyUV6fWgHKCAFBRsFUWClcyU-OXZM2u3KRRr70Q5H-T39bxhuwQMaxGbLIDcxp4NbdjCSng-8uel2lX1iW9MZtSXUVOrmxe7hP_z4ITu3EuOSRGeBcGMGojjzFA8f7uwEhW4RDvcjVFJzncmyj9b_E5Hw"
            className="w-full h-full object-cover"
          />
        </div>
        <div>
          <h3 className="font-body text-sm font-extrabold tracking-tight text-slate-800 group-hover:text-primary transition-colors">Dr. Elena Vance</h3>
          <p className="text-[11px] font-medium text-slate-400">Senior Faculty</p>
          <span className="text-[9px] font-black uppercase tracking-[0.2em] text-primary/60 mt-0.5 block">AI Mentor</span>
        </div>
      </div>
      <nav className="flex flex-col gap-1 overflow-y-auto overflow-x-hidden pr-2">
        {navItems.map((item) => {
          const isActive = location.pathname.startsWith(item.path);
          return (
            <Link
              key={item.label}
              className={`flex items-center gap-3 px-4 py-3.5 rounded-2xl transition-all duration-300 group ${
                isActive
                  ? 'bg-primary text-white shadow-lg shadow-primary/25 translate-x-1'
                  : 'text-slate-500 hover:text-primary hover:bg-white hover:shadow-sm hover:translate-x-1'
              }`}
              to={item.path}
            >
              <span className={`material-symbols-outlined transition-transform duration-300 ${!isActive && 'group-hover:scale-110'}`} style={{ fontVariationSettings: isActive ? "'FILL' 1" : "'FILL' 0" }}>{item.icon}</span>
              <span className="font-body text-sm font-bold tracking-tight">{item.label}</span>
            </Link>
          );
        })}
        <div className="mt-8 pt-4 flex flex-col gap-1 border-t border-slate-200">
          <p className="px-4 text-[10px] font-bold text-slate-400 uppercase tracking-[0.2em] mb-2">Account</p>
          {secondaryNavItems.map((item) => {
            const isActive = location.pathname.startsWith(item.path);
            return (
              <Link
                key={item.label}
                className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-all ${
                  isActive
                    ? 'bg-white text-blue-700 shadow-sm translate-x-1 duration-200'
                    : 'text-slate-600 hover:text-blue-600 hover:bg-slate-100'
                }`}
                to={item.path}
              >
                <span className="material-symbols-outlined" style={{ fontVariationSettings: isActive ? "'FILL' 1" : "'FILL' 0" }}>{item.icon}</span>
                <span className="font-body text-sm font-semibold tracking-wide">{item.label}</span>
              </Link>
            );
          })}
        </div>
      </nav>
    </aside>
  );
};

export default Sidebar;

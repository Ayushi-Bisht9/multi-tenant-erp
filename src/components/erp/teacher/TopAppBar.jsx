import React from 'react';
import { useNavigate } from "react-router-dom";


const TopAppBar = ({ title }) => {
  const navigate = useNavigate();
  return (
    <header className="bg-white/80 backdrop-blur-xl flex justify-between items-center w-full px-4 md:px-8 py-4 md:py-5 sticky top-0 z-40 shadow-sm">
      <h1 className="text-lg md:text-xl font-extrabold tracking-tight text-blue-700 font-display truncate max-w-[200px] md:max-w-none">{title}</h1>
      <div className="flex items-center gap-4">
        <button className="p-2 text-slate-500 hover:bg-blue-50 rounded-full transition-colors">
          <span className="material-symbols-outlined">search</span>
        </button>
       <button
onClick={() => navigate("/teacher/notifications")}
className="relative p-2 rounded-lg hover:bg-slate-100 transition"
>

<span className="material-symbols-outlined">
notifications
</span>

</button>
      </div>
    </header>
  );
};

export default TopAppBar;

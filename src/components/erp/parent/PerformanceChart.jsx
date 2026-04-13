import React from 'react';

const PerformanceChart = () => {
  return (
    <div className="lg:col-span-2 bg-surface-container-lowest p-8 rounded-lg border border-outline-variant/5">
      <div className="flex justify-between items-end mb-10">
        <div>
          <h3 className="text-xl font-bold font-headline mb-1">Performance Trend</h3>
          <p className="text-sm text-on-surface-variant">Last 6 months aggregate performance</p>
        </div>
        <div className="flex gap-2">
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-primary"></span>
            <span className="text-xs font-medium text-on-surface-variant">2024</span>
          </div>
        </div>
      </div>

      {/* SVG Chart Component */}
      <div className="h-64 w-full relative">
        <svg className="w-full h-full" viewBox="0 0 1000 300">
          {/* Background Grid */}
          <line stroke="#eff4ff" strokeWidth="1" x1="0" x2="1000" y1="50" y2="50"></line>
          <line stroke="#eff4ff" strokeWidth="1" x1="0" x2="1000" y1="125" y2="125"></line>
          <line stroke="#eff4ff" strokeWidth="1" x1="0" x2="1000" y1="200" y2="200"></line>
          <line stroke="#eff4ff" strokeWidth="1" x1="0" x2="1000" y1="275" y2="275"></line>

          {/* Area Gradient */}
          <defs>
            <linearGradient id="chartGradient" x1="0" x2="0" y1="0" y2="1">
              <stop offset="0%" stopColor="#2170e4" stopOpacity="0.1"></stop>
              <stop offset="100%" stopColor="#2170e4" stopOpacity="0"></stop>
            </linearGradient>
          </defs>
          <path d="M0,220 Q100,200 200,180 T400,140 T600,100 T800,90 T1000,70 V300 H0 Z" fill="url(#chartGradient)"></path>

          {/* Line Path */}
          <path d="M0,220 Q100,200 200,180 T400,140 T600,100 T800,90 T1000,70" fill="none" stroke="#0058be" strokeLinecap="round" strokeWidth="4"></path>

          {/* Data Points */}
          <circle cx="200" cy="180" fill="#0058be" r="6" stroke="white" strokeWidth="2"></circle>
          <circle cx="400" cy="140" fill="#0058be" r="6" stroke="white" strokeWidth="2"></circle>
          <circle cx="600" cy="100" fill="#0058be" r="6" stroke="white" strokeWidth="2"></circle>
          <circle cx="800" cy="90" fill="#0058be" r="6" stroke="white" strokeWidth="2"></circle>
        </svg>

        <div className="flex justify-between mt-4 px-2">
          <span className="text-xs font-semibold text-on-surface-variant">SEP</span>
          <span className="text-xs font-semibold text-on-surface-variant">OCT</span>
          <span className="text-xs font-semibold text-on-surface-variant">NOV</span>
          <span className="text-xs font-semibold text-on-surface-variant">DEC</span>
          <span className="text-xs font-semibold text-on-surface-variant">JAN</span>
          <span className="text-xs font-semibold text-on-surface-variant text-primary font-bold underline underline-offset-4">FEB</span>
        </div>
      </div>
    </div>
  );
};

export default PerformanceChart;

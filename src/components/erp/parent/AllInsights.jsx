import React from 'react';

const AIInsights = () => {
  return (
    <div className="bg-surface-container-lowest p-8 rounded-lg border-2 border-primary/5 relative overflow-hidden flex flex-col justify-between">
      <div className="absolute top-0 right-0 p-4 opacity-10">
        <span className="material-symbols-outlined text-8xl text-primary" style={{ fontVariationSettings: "'FILL' 1" }}>psychology</span>
      </div>
      <div>
        <div className="flex items-center gap-3 mb-6">
          <div className="p-2 bg-tertiary-fixed rounded-md">
            <span className="material-symbols-outlined text-tertiary" style={{ fontVariationSettings: "'FILL' 1" }}>auto_awesome</span>
          </div>
          <h3 className="text-xl font-bold font-headline">AI Insight Alert</h3>
        </div>
        <div className="bg-tertiary/5 p-4 rounded-md border-l-4 border-tertiary mb-6">
          <p className="text-on-surface font-medium leading-relaxed">
            "Your child shows significant improvement in <span className="text-tertiary font-bold">Mathematics</span>. Alex has improved their average from B to A- over the last month."
          </p>
        </div>
        <ul className="space-y-3 text-sm text-on-surface-variant mb-6">
          <li className="flex items-start gap-2">
            <span className="material-symbols-outlined text-xs mt-1">check_circle</span>
            <span>Completed 100% of Algebra modules</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="material-symbols-outlined text-xs mt-1">check_circle</span>
            <span>High engagement during Calculus labs</span>
          </li>
        </ul>
      </div>
      <button className="w-full py-3 bg-surface-container-high text-primary font-bold rounded-md hover:bg-primary hover:text-white transition-all">
        View Detailed Insights
      </button>
    </div>
  );
};

export default AIInsights;

import React from 'react';

const SummaryCards = () => {
  return (
    <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      {/* Attendance */}
      <div className="bg-surface-container-lowest p-6 rounded-lg group hover:bg-primary/5 transition-colors border border-outline-variant/10">
        <div className="flex justify-between items-start mb-4">
          <div className="p-2 bg-surface-container-low rounded-md group-hover:bg-primary-fixed-dim transition-colors">
            <span className="material-symbols-outlined text-primary">calendar_check</span>
          </div>
          <span className="text-tertiary font-bold text-xs uppercase tracking-widest">+2% MoM</span>
        </div>
        <p className="text-on-surface-variant text-sm font-medium">Attendance</p>
        <h3 className="text-3xl font-extrabold text-on-surface mt-1">92%</h3>
      </div>

      {/* Avg Grade */}
      <div className="bg-surface-container-lowest p-6 rounded-lg group hover:bg-secondary/5 transition-colors border border-outline-variant/10">
        <div className="flex justify-between items-start mb-4">
          <div className="p-2 bg-surface-container-low rounded-md group-hover:bg-secondary-fixed-dim transition-colors">
            <span className="material-symbols-outlined text-secondary">star_rate</span>
          </div>
          <span className="text-primary font-bold text-xs uppercase tracking-widest">Steady</span>
        </div>
        <p className="text-on-surface-variant text-sm font-medium">Avg Grade</p>
        <h3 className="text-3xl font-extrabold text-on-surface mt-1">B+</h3>
      </div>

      {/* Pending Assignments */}
      <div className="bg-surface-container-lowest p-6 rounded-lg group hover:bg-tertiary/5 transition-colors border border-outline-variant/10">
        <div className="flex justify-between items-start mb-4">
          <div className="p-2 bg-surface-container-low rounded-md group-hover:bg-tertiary-fixed-dim transition-colors">
            <span className="material-symbols-outlined text-tertiary">pending_actions</span>
          </div>
          <span className="text-error font-bold text-xs uppercase tracking-widest">Due Soon</span>
        </div>
        <p className="text-on-surface-variant text-sm font-medium">Pending Assignments</p>
        <h3 className="text-3xl font-extrabold text-on-surface mt-1">2</h3>
      </div>

      {/* Upcoming Exams */}
      <div className="bg-surface-container-lowest p-6 rounded-lg group hover:bg-primary/5 transition-colors border border-outline-variant/10">
        <div className="flex justify-between items-start mb-4">
          <div className="p-2 bg-surface-container-low rounded-md group-hover:bg-primary-fixed-dim transition-colors">
            <span className="material-symbols-outlined text-primary">event_note</span>
          </div>
          <span className="text-on-surface-variant font-bold text-xs uppercase tracking-widest">Next: Mon</span>
        </div>
        <p className="text-on-surface-variant text-sm font-medium">Upcoming Exams</p>
        <h3 className="text-3xl font-extrabold text-on-surface mt-1">1</h3>
      </div>
    </section>
  );
};

export default SummaryCards;

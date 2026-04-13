import React from 'react';

const StudentHeader = () => {
  return (
    <section className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
      <div className="md:col-span-2 space-y-2">
        <h2 className="text-3xl font-extrabold text-on-surface font-headline tracking-tight">Parent Dashboard</h2>
        <div className="flex items-center gap-4 text-on-surface-variant font-inter">
          <div className="flex items-center gap-2">
            <span className="material-symbols-outlined text-primary text-lg">person</span>
            <span className="font-semibold">Alex Rivera</span>
          </div>
          <div className="w-1.5 h-1.5 rounded-full bg-outline-variant/50"></div>
          <div className="flex items-center gap-2">
            <span className="material-symbols-outlined text-primary text-lg">school</span>
            <span>Grade 11-A</span>
          </div>
          <div className="w-1.5 h-1.5 rounded-full bg-outline-variant/50"></div>
          <div className="flex items-center gap-2 text-primary font-medium">
            <span>St. Edwards Academy</span>
          </div>
        </div>
      </div>
      <div className="flex md:justify-end gap-3">
        <button className="bg-surface-container-high text-primary px-5 py-2.5 rounded-md font-semibold text-sm hover:bg-surface-variant transition-colors active:scale-95 duration-75">
          Download Report
        </button>
        <button className="bg-gradient-to-br from-primary to-primary-container text-white px-5 py-2.5 rounded-md font-semibold text-sm shadow-md hover:brightness-110 transition-all active:scale-95 duration-75">
          Contact Teacher
        </button>
      </div>
    </section>
  );
};

export default StudentHeader;

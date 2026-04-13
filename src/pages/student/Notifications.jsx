import React from 'react';
import MainLayout from '../../layouts/MainLayout';

export default function Notifications() {
  return (
    <MainLayout title="Notifications">
      <div className="px-8 pb-12 max-w-5xl mx-auto w-full">

<div className="flex items-center justify-between mb-8 mt-4">
<div className="flex items-center gap-3">
<span className="text-on-surface-variant font-medium">Recent Activity</span>
<span className="px-2 py-0.5 bg-primary-container text-white text-xs font-bold rounded-full">5 New</span>
</div>
<button className="text-primary hover:text-primary-container text-sm font-semibold flex items-center gap-1.5 transition-colors">
<span className="material-symbols-outlined text-lg">done_all</span>
                    Mark all as read
                </button>
</div>

<div className="flex flex-col gap-4">

<div className="group relative bg-surface-container-lowest p-6 rounded-lg shadow-[0px_12px_32px_rgba(11,28,48,0.04)] hover:shadow-[0px_12px_32px_rgba(11,28,48,0.08)] transition-all cursor-pointer">
<div className="flex gap-5">
<div className="w-12 h-12 shrink-0 rounded-md bg-error-container flex items-center justify-center text-error">
<span className="material-symbols-outlined" style={{ fontVariationSettings: `&apos` }}>warning</span>
</div>
<div className="flex-1">
<div className="flex items-start justify-between mb-1">
<h3 className="text-base font-bold text-on-surface leading-snug">Math Quiz: Linear Equations due tomorrow</h3>
<span className="text-xs text-on-surface-variant whitespace-nowrap">2 hours ago</span>
</div>
<p className="text-sm text-on-surface-variant leading-relaxed">Ensure all practice problems are completed before the 9:00 AM deadline tomorrow. Good luck!</p>
</div>
<div className="w-2.5 h-2.5 bg-primary rounded-full mt-2 ring-4 ring-primary/10"/>
</div>
</div>

<div className="group relative bg-surface-container-lowest p-6 rounded-lg shadow-[0px_12px_32px_rgba(11,28,48,0.04)] hover:shadow-[0px_12px_32px_rgba(11,28,48,0.08)] transition-all cursor-pointer">
<div className="flex gap-5">
<div className="w-12 h-12 shrink-0 rounded-md bg-primary-fixed flex items-center justify-center text-primary">
<span className="material-symbols-outlined" style={{ fontVariationSettings: `&apos` }}>check_circle</span>
</div>
<div className="flex-1">
<div className="flex items-start justify-between mb-1">
<h3 className="text-base font-bold text-on-surface leading-snug">Your grade for History Essay: Modern Era is ready</h3>
<span className="text-xs text-on-surface-variant whitespace-nowrap">4 hours ago</span>
</div>
<p className="text-sm text-on-surface-variant leading-relaxed">You achieved an A- (92%). Click to view detailed rubric analysis and teacher notes.</p>
</div>
<div className="w-2.5 h-2.5 bg-primary rounded-full mt-2 ring-4 ring-primary/10"/>
</div>
</div>

<div className="group relative bg-surface-container-lowest p-6 rounded-lg shadow-[0px_12px_32px_rgba(11,28,48,0.04)] border-l-4 border-secondary transition-all cursor-pointer">
<div className="flex gap-5">
<div className="w-12 h-12 shrink-0 rounded-md bg-secondary-fixed flex items-center justify-center text-secondary">
<span className="material-symbols-outlined" style={{ fontVariationSettings: `&apos` }}>info</span>
</div>
<div className="flex-1">
<div className="flex items-start justify-between mb-1">
<h3 className="text-base font-bold text-on-surface leading-snug">Mr. Smith added a comment on your Physics Lab</h3>
<span className="text-xs text-on-surface-variant whitespace-nowrap">Yesterday</span>
</div>
<p className="text-sm text-on-surface-variant leading-relaxed italic border-l-2 border-outline-variant/30 pl-4 my-2">&quot;Great work on the data visualization, Alex! Maybe clarify the error margin in the final section.&quot;</p>
</div>
<div className="w-2.5 h-2.5 bg-primary rounded-full mt-2 ring-4 ring-primary/10"/>
</div>
</div>

<div className="group relative bg-gradient-to-br from-surface-container-lowest to-[#fdf8ff] p-6 rounded-lg shadow-[0px_12px_32px_rgba(11,28,48,0.04)] border border-tertiary-fixed-dim/20 transition-all cursor-pointer overflow-hidden">
<div className="absolute -right-8 -top-8 w-32 h-32 bg-tertiary-fixed opacity-10 rounded-full blur-3xl"/>
<div className="flex gap-5 relative z-10">
<div className="w-12 h-12 shrink-0 rounded-md bg-tertiary-fixed flex items-center justify-center text-tertiary">
<span className="material-symbols-outlined" style={{ fontVariationSettings: `&apos` }}>auto_awesome</span>
</div>
<div className="flex-1">
<div className="flex items-start justify-between mb-1">
<h3 className="text-base font-bold text-on-surface leading-snug flex items-center gap-2">
                                    AI Recommendation
                                    <span className="text-[10px] tracking-wider uppercase bg-tertiary/10 text-tertiary px-2 py-0.5 rounded-full font-bold">Personalized</span>
</h3>
<span className="text-xs text-on-surface-variant whitespace-nowrap">Yesterday</span>
</div>
<p className="text-sm text-on-surface-variant leading-relaxed">New practice exercises suggested based on your last quiz in Calculus. Target: Derivative rules.</p>
<div className="mt-4 flex gap-2">
<button className="px-4 py-1.5 bg-tertiary text-white text-xs font-bold rounded-md hover:bg-tertiary-container transition-colors">Start Practice</button>
<button className="px-4 py-1.5 bg-white text-tertiary text-xs font-bold rounded-md hover:bg-tertiary-fixed transition-colors">Dismiss</button>
</div>
</div>
<div className="w-2.5 h-2.5 bg-primary rounded-full mt-2 ring-4 ring-primary/10"/>
</div>
</div>

<div className="group relative bg-surface-container-lowest p-6 rounded-lg shadow-[0px_12px_32px_rgba(11,28,48,0.04)] hover:shadow-[0px_12px_32px_rgba(11,28,48,0.08)] transition-all cursor-pointer">
<div className="flex gap-5">
<div className="w-12 h-12 shrink-0 rounded-md bg-surface-container-high flex items-center justify-center text-on-surface-variant">
<span className="material-symbols-outlined" style={{ fontVariationSettings: `&apos` }}>campaign</span>
</div>
<div className="flex-1">
<div className="flex items-start justify-between mb-1">
<h3 className="text-base font-bold text-on-surface leading-snug">School library hours extended for finals week</h3>
<span className="text-xs text-on-surface-variant whitespace-nowrap">Oct 24</span>
</div>
<p className="text-sm text-on-surface-variant leading-relaxed">The library will now remain open until 10:00 PM starting this Monday through the end of the exam period.</p>
</div>
<div className="w-2.5 h-2.5 bg-primary rounded-full mt-2 ring-4 ring-primary/10"/>
</div>
</div>

<div className="group relative bg-surface-container-low opacity-60 p-6 rounded-lg transition-all cursor-pointer grayscale-[0.5]">
<div className="flex gap-5">
<div className="w-12 h-12 shrink-0 rounded-md bg-surface-variant flex items-center justify-center text-outline">
<span className="material-symbols-outlined">schedule</span>
</div>
<div className="flex-1">
<div className="flex items-start justify-between mb-1">
<h3 className="text-base font-bold text-on-surface leading-snug">Attendance update for Wednesday</h3>
<span className="text-xs text-on-surface-variant whitespace-nowrap">3 days ago</span>
</div>
<p className="text-sm text-on-surface-variant leading-relaxed">Your attendance for Period 3 Physics has been marked as &apos;Present&apos;.</p>
</div>

</div>
</div>
</div>
</div>
<footer className="mt-auto py-8 text-center text-outline-variant text-xs">
            Academic Architect v4.2.0 &#x2022; ScholarFlow Pro Ecosystem
        </footer>

    </MainLayout>
  );
}


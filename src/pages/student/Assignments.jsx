import React from 'react';
import MainLayout from '../../layouts/MainLayout';

export default function Assignments() {
  return (
    <MainLayout title="Assignments">
      <div className="p-8 max-w-7xl mx-auto">

<div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-10">
<div className="bg-surface-container-lowest p-6 rounded-xl ambient-shadow flex flex-col gap-2">
<span className="text-on-surface-variant text-sm font-medium">Pending Tasks</span>
<div className="flex items-baseline gap-2">
<span className="font-headline text-3xl font-bold text-primary">04</span>
<span className="text-xs text-on-surface-variant">this week</span>
</div>
</div>
<div className="bg-surface-container-lowest p-6 rounded-xl ambient-shadow flex flex-col gap-2">
<span className="text-on-surface-variant text-sm font-medium">Average Grade</span>
<div className="flex items-baseline gap-2">
<span className="font-headline text-3xl font-bold text-secondary">A-</span>
<span className="text-xs text-on-surface-variant">+2% from last term</span>
</div>
</div>
<div className="col-span-2 bg-primary-container p-6 rounded-xl ambient-shadow primary-gradient text-on-primary flex justify-between items-center overflow-hidden relative">
<div className="z-10">
<h3 className="font-headline text-xl font-bold mb-1">Upcoming Exam</h3>
<p className="text-blue-100 text-sm opacity-90">Advanced Physics &#x2022; Friday, Oct 24</p>
<button className="mt-4 bg-white text-primary px-4 py-2 rounded-md text-xs font-bold hover:bg-blue-50 transition-colors">Review Material</button>
</div>
<span className="material-symbols-outlined text-white/20 text-8xl absolute -right-4 -bottom-4 rotate-12" data-icon="auto_awesome">auto_awesome</span>
</div>
</div>

<div className="flex flex-col md:flex-row gap-4 mb-8 items-center justify-between">
<div className="flex flex-1 w-full max-w-md bg-surface-container-low rounded-md px-4 py-2.5 items-center gap-3">
<span className="material-symbols-outlined text-slate-400 text-xl" data-icon="search">search</span>
<input className="bg-transparent border-none focus:ring-0 text-sm w-full placeholder:text-slate-400" placeholder="Search assignments..." type="text"/>
</div>
<div className="flex items-center gap-3 w-full md:w-auto">
<select className="bg-surface-container-low border-none rounded-md px-4 py-2.5 text-sm text-on-surface-variant focus:ring-2 focus:ring-surface-tint min-w-[140px]">
<option>All Subjects</option>
<option>Mathematics</option>
<option>Physics</option>
<option>Literature</option>
</select>
<select className="bg-surface-container-low border-none rounded-md px-4 py-2.5 text-sm text-on-surface-variant focus:ring-2 focus:ring-surface-tint min-w-[140px]">
<option>All Status</option>
<option>Pending</option>
<option>Submitted</option>
<option>Graded</option>
</select>
<button className="p-2.5 bg-surface-container-low text-primary rounded-md hover:bg-surface-container-high transition-colors">
<span className="material-symbols-outlined" data-icon="tune">tune</span>
</button>
</div>
</div>

<div className="bg-surface-container-lowest rounded-xl overflow-hidden ambient-shadow">
<table className="w-full text-left border-collapse">
<thead>
<tr className="bg-surface-container-low text-on-surface-variant">
<th className="px-6 py-4 font-headline text-sm font-bold uppercase tracking-wider">Assignment Title</th>
<th className="px-6 py-4 font-headline text-sm font-bold uppercase tracking-wider">Subject</th>
<th className="px-6 py-4 font-headline text-sm font-bold uppercase tracking-wider">Due Date</th>
<th className="px-6 py-4 font-headline text-sm font-bold uppercase tracking-wider">Status</th>
<th className="px-6 py-4 font-headline text-sm font-bold uppercase tracking-wider">Grade</th>
<th className="px-6 py-4"/>
</tr>
</thead>
<tbody className="divide-y divide-slate-100">

<tr className="hover:bg-slate-50/50 transition-colors group">
<td className="px-6 py-6">
<div className="flex flex-col">
<span className="font-bold text-on-surface text-base">Quantum Mechanics Introduction</span>
<span className="text-xs text-on-surface-variant">Problem Set #4</span>
</div>
</td>
<td className="px-6 py-6">
<span className="px-3 py-1 rounded-full bg-blue-50 text-blue-700 text-xs font-semibold">Physics</span>
</td>
<td className="px-6 py-6 text-sm font-medium text-on-surface-variant">Oct 28, 2023</td>
<td className="px-6 py-6">
<span className="flex items-center gap-1.5 text-xs font-bold text-amber-600">
<span className="w-2 h-2 rounded-full bg-amber-500"/>
                                    Pending
                                </span>
</td>
<td className="px-6 py-6">
<span className="text-slate-300 font-bold">&#x2014;</span>
</td>
<td className="px-6 py-6 text-right">
<button className="primary-gradient text-white px-4 py-2 rounded-md text-xs font-bold opacity-0 group-hover:opacity-100 transition-opacity">Submit</button>
</td>
</tr>

<tr className="hover:bg-slate-50/50 transition-colors group">
<td className="px-6 py-6">
<div className="flex flex-col">
<span className="font-bold text-on-surface text-base">Modernist Poetry Analysis</span>
<span className="text-xs text-on-surface-variant">Final Essay Draft</span>
</div>
</td>
<td className="px-6 py-6">
<span className="px-3 py-1 rounded-full bg-purple-50 text-purple-700 text-xs font-semibold">Literature</span>
</td>
<td className="px-6 py-6 text-sm font-medium text-on-surface-variant">Oct 22, 2023</td>
<td className="px-6 py-6">
<span className="flex items-center gap-1.5 text-xs font-bold text-blue-600">
<span className="w-2 h-2 rounded-full bg-blue-500"/>
                                    Submitted
                                </span>
</td>
<td className="px-6 py-6">
<span className="text-slate-300 font-bold italic text-xs">Awaiting...</span>
</td>
<td className="px-6 py-6 text-right text-slate-400">
<span className="material-symbols-outlined cursor-pointer hover:text-primary" data-icon="visibility">visibility</span>
</td>
</tr>

<tr className="hover:bg-slate-50/50 transition-colors group">
<td className="px-6 py-6">
<div className="flex flex-col">
<span className="font-bold text-on-surface text-base">Calculus: Integrals &amp; Derivatives</span>
<span className="text-xs text-on-surface-variant">Weekly Quiz #12</span>
</div>
</td>
<td className="px-6 py-6">
<span className="px-3 py-1 rounded-full bg-emerald-50 text-emerald-700 text-xs font-semibold">Mathematics</span>
</td>
<td className="px-6 py-6 text-sm font-medium text-on-surface-variant">Oct 15, 2023</td>
<td className="px-6 py-6">
<span className="flex items-center gap-1.5 text-xs font-bold text-emerald-600">
<span className="w-2 h-2 rounded-full bg-emerald-500"/>
                                    Graded
                                </span>
</td>
<td className="px-6 py-6">
<span className="text-emerald-700 font-bold font-headline">94/100</span>
</td>
<td className="px-6 py-6 text-right text-slate-400">
<span className="material-symbols-outlined cursor-pointer hover:text-primary" data-icon="more_vert">more_vert</span>
</td>
</tr>

<tr className="hover:bg-slate-50/50 transition-colors group">
<td className="px-6 py-6">
<div className="flex flex-col">
<span className="font-bold text-on-surface text-base">Chemical Reaction Dynamics</span>
<span className="text-xs text-on-surface-variant">Lab Report</span>
</div>
</td>
<td className="px-6 py-6">
<span className="px-3 py-1 rounded-full bg-blue-50 text-blue-700 text-xs font-semibold">Chemistry</span>
</td>
<td className="px-6 py-6 text-sm font-medium text-on-surface-variant">Oct 12, 2023</td>
<td className="px-6 py-6">
<span className="flex items-center gap-1.5 text-xs font-bold text-emerald-600">
<span className="w-2 h-2 rounded-full bg-emerald-500"/>
                                    Graded
                                </span>
</td>
<td className="px-6 py-6">
<span className="text-emerald-700 font-bold font-headline">88/100</span>
</td>
<td className="px-6 py-6 text-right text-slate-400">
<span className="material-symbols-outlined cursor-pointer hover:text-primary" data-icon="more_vert">more_vert</span>
</td>
</tr>
</tbody>
</table>

<div className="px-6 py-4 bg-slate-50/50 flex items-center justify-between border-t border-slate-100">
<span className="text-xs text-on-surface-variant">Showing 4 of 28 assignments</span>
<div className="flex items-center gap-2">
<button className="p-1.5 rounded-md hover:bg-white transition-colors text-slate-400 disabled:opacity-50" disabled>
<span className="material-symbols-outlined" data-icon="chevron_left">chevron_left</span>
</button>
<button className="w-8 h-8 rounded-md bg-primary text-white text-xs font-bold">1</button>
<button className="w-8 h-8 rounded-md hover:bg-white text-slate-600 text-xs font-bold transition-colors">2</button>
<button className="w-8 h-8 rounded-md hover:bg-white text-slate-600 text-xs font-bold transition-colors">3</button>
<button className="p-1.5 rounded-md hover:bg-white transition-colors text-slate-400">
<span className="material-symbols-outlined" data-icon="chevron_right">chevron_right</span>
</button>
</div>
</div>
</div>

<div className="mt-12 bg-white/40 border border-white p-8 rounded-xl flex items-center gap-8 relative overflow-hidden glass-card">
<div className="w-20 h-20 rounded-2xl bg-tertiary-fixed flex items-center justify-center text-tertiary shrink-0">
<span className="material-symbols-outlined text-4xl" data-icon="psychology" style={{ fontVariationSettings: `&apos` }}>psychology</span>
</div>
<div>
<h4 className="font-headline font-bold text-xl text-on-surface mb-2">Personalized Recommendation</h4>
<p className="text-on-surface-variant leading-relaxed max-w-2xl">
                        I&apos;ve noticed your performance in <span className="font-bold text-primary">Quantum Mechanics</span> has been slightly lower than your semester average. Would you like to schedule a 15-minute review session or access supplemental materials before your next assignment?
                    </p>
<div className="flex gap-4 mt-6">
<button className="bg-tertiary text-white px-6 py-2.5 rounded-md font-bold text-sm shadow-sm hover:opacity-90 transition-opacity">Get Help Now</button>
<button className="text-on-surface-variant px-6 py-2.5 rounded-md font-bold text-sm hover:bg-white/50 transition-colors">Maybe Later</button>
</div>
</div>

<div className="absolute -right-20 -top-20 w-64 h-64 bg-tertiary/5 rounded-full blur-3xl"/>
</div>
</div>

    </MainLayout>
  );
}


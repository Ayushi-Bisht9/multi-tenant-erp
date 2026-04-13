import React from 'react';
import MainLayout from '../../layouts/MainLayout';

export default function GradesCard() {
  return (
    <MainLayout title="Grades & Report Card">
      <section className="p-8">

<div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
<div className="md:col-span-2 primary-gradient rounded-xl p-8 text-white relative overflow-hidden shadow-lg">
<div className="relative z-10 flex flex-col h-full justify-between">
<div>
<h3 className="text-lg font-headline font-semibold opacity-90">Academic Performance Summary</h3>
<p className="text-4xl font-headline font-extrabold mt-2 tracking-tight">GPA 3.84 / 4.0</p>
<p className="text-sm mt-2 opacity-80 flex items-center gap-1">
<span className="material-symbols-outlined text-sm">trending_up</span>
                                Top 5% of class &#x2022; Improved by 0.12 from last term
                            </p>
</div>
<div className="flex gap-4 mt-8">
<button className="bg-white/20 hover:bg-white/30 backdrop-blur-md px-6 py-2.5 rounded-md text-sm font-semibold transition-all">View Analytics</button>
<button className="bg-white text-blue-700 px-6 py-2.5 rounded-md text-sm font-semibold transition-all flex items-center gap-2">
<span className="material-symbols-outlined text-lg">download</span>
                                Download Report Card
                            </button>
</div>
</div>

<div className="absolute -right-12 -bottom-12 w-64 h-64 bg-white/10 rounded-full blur-3xl"/>
</div>
<div className="bg-surface-container-lowest rounded-xl p-8 flex flex-col justify-between shadow-sm relative overflow-hidden">
<div>
<span className="text-xs font-bold text-secondary tracking-widest uppercase">Term Progress</span>
<h4 className="text-2xl font-headline font-bold text-on-surface mt-2">Term 2 Exam</h4>
<p className="text-sm text-on-surface-variant">Completed on Feb 14, 2024</p>
</div>
<div className="mt-4">
<div className="w-full bg-surface-container-low h-2 rounded-full overflow-hidden">
<div className="bg-secondary h-full rounded-full" style={{ width: `88%` }}/>
</div>
<div className="flex justify-between mt-2">
<span className="text-xs font-semibold text-on-surface-variant">Completion</span>
<span className="text-xs font-bold text-secondary">88%</span>
</div>
</div>
<div className="mt-6">
<span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-tertiary-fixed text-on-tertiary-fixed-variant text-xs font-bold">
<span className="material-symbols-outlined text-sm" style={{ fontVariationSettings: `&apos` }}>auto_awesome</span>
                            AI Insight: Excelling in Stem
                        </span>
</div>
</div>
</div>

<div className="bg-surface-container-lowest rounded-xl shadow-sm">
<div className="p-6 flex flex-col md:flex-row md:items-center justify-between gap-4">
<h3 className="text-xl font-headline font-bold text-on-surface">Subject-wise Breakdown</h3>
<div className="flex items-center gap-3">
<select className="bg-surface-container-low border-none rounded-md text-sm py-2 px-4 focus:ring-2 focus:ring-surface-tint">
<option>All Subjects</option>
<option>Mathematics</option>
<option>Physics</option>
<option>Computer Science</option>
</select>
<select className="bg-surface-container-low border-none rounded-md text-sm py-2 px-4 focus:ring-2 focus:ring-surface-tint">
<option>Term 2 Finals</option>
<option>Mid-Term Exam</option>
<option>Monthly Assessment</option>
</select>
<button className="w-10 h-10 flex items-center justify-center rounded-md bg-surface-container-low hover:bg-surface-container-high transition-colors">
<span className="material-symbols-outlined text-on-surface-variant">filter_list</span>
</button>
</div>
</div>
<div className="overflow-x-auto">
<table className="w-full text-left border-collapse">
<thead className="bg-surface-container-low/50">
<tr>
<th className="px-8 py-4 text-xs font-bold text-on-surface-variant uppercase tracking-wider">Subject</th>
<th className="px-6 py-4 text-xs font-bold text-on-surface-variant uppercase tracking-wider">Exam Type</th>
<th className="px-6 py-4 text-xs font-bold text-on-surface-variant uppercase tracking-wider">Marks Obtained</th>
<th className="px-6 py-4 text-xs font-bold text-on-surface-variant uppercase tracking-wider">Grade</th>
<th className="px-6 py-4 text-xs font-bold text-on-surface-variant uppercase tracking-wider">Teacher Remarks</th>
<th className="px-8 py-4 text-xs font-bold text-on-surface-variant uppercase tracking-wider text-right">Action</th>
</tr>
</thead>
<tbody className="divide-y divide-surface-container">

<tr className="hover:bg-surface-container-low/30 transition-colors group">
<td className="px-8 py-6">
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-lg bg-blue-50 flex items-center justify-center text-blue-600">
<span className="material-symbols-outlined">calculate</span>
</div>
<span className="font-bold text-on-surface">Advanced Mathematics</span>
</div>
</td>
<td className="px-6 py-6 text-sm text-on-surface-variant font-medium">Term 2 Finals</td>
<td className="px-6 py-6">
<span className="text-sm font-bold text-on-surface">95 / 100</span>
</td>
<td className="px-6 py-6">
<span className="px-3 py-1 rounded-md bg-green-100 text-green-700 font-bold text-xs uppercase tracking-widest">A+</span>
</td>
<td className="px-6 py-6 text-sm text-on-surface-variant italic leading-relaxed max-w-xs">
                                    &quot;Excellent grasp of complex calculus concepts. Consistent performance throughout the term.&quot;
                                </td>
<td className="px-8 py-6 text-right">
<button className="text-blue-700 hover:text-blue-900 font-semibold text-sm hover:underline transition-all">View detailed feedback</button>
</td>
</tr>

<tr className="hover:bg-surface-container-low/30 transition-colors group">
<td className="px-8 py-6">
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-lg bg-purple-50 flex items-center justify-center text-purple-600">
<span className="material-symbols-outlined">rocket_launch</span>
</div>
<span className="font-bold text-on-surface">Applied Physics</span>
</div>
</td>
<td className="px-6 py-6 text-sm text-on-surface-variant font-medium">Term 2 Finals</td>
<td className="px-6 py-6">
<span className="text-sm font-bold text-on-surface">88 / 100</span>
</td>
<td className="px-6 py-6">
<span className="px-3 py-1 rounded-md bg-blue-100 text-blue-700 font-bold text-xs uppercase tracking-widest">A</span>
</td>
<td className="px-6 py-6 text-sm text-on-surface-variant italic leading-relaxed max-w-xs">
                                    &quot;Strong analytical skills. Could improve on practical lab reporting accuracy.&quot;
                                </td>
<td className="px-8 py-6 text-right">
<button className="text-blue-700 hover:text-blue-900 font-semibold text-sm hover:underline transition-all">View detailed feedback</button>
</td>
</tr>

<tr className="hover:bg-surface-container-low/30 transition-colors group">
<td className="px-8 py-6">
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-lg bg-orange-50 flex items-center justify-center text-orange-600">
<span className="material-symbols-outlined">code</span>
</div>
<span className="font-bold text-on-surface">Computer Science</span>
</div>
</td>
<td className="px-6 py-6 text-sm text-on-surface-variant font-medium">Term 2 Finals</td>
<td className="px-6 py-6">
<span className="text-sm font-bold text-on-surface">98 / 100</span>
</td>
<td className="px-6 py-6">
<span className="px-3 py-1 rounded-md bg-green-100 text-green-700 font-bold text-xs uppercase tracking-widest">A+</span>
</td>
<td className="px-6 py-6 text-sm text-on-surface-variant italic leading-relaxed max-w-xs">
                                    &quot;Exceptional coding logic and problem-solving abilities. Project work was exemplary.&quot;
                                </td>
<td className="px-8 py-6 text-right">
<button className="text-blue-700 hover:text-blue-900 font-semibold text-sm hover:underline transition-all">View detailed feedback</button>
</td>
</tr>

<tr className="hover:bg-surface-container-low/30 transition-colors group">
<td className="px-8 py-6">
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-lg bg-indigo-50 flex items-center justify-center text-indigo-600">
<span className="material-symbols-outlined">history_edu</span>
</div>
<span className="font-bold text-on-surface">English Literature</span>
</div>
</td>
<td className="px-6 py-6 text-sm text-on-surface-variant font-medium">Term 2 Finals</td>
<td className="px-6 py-6">
<span className="text-sm font-bold text-on-surface">82 / 100</span>
</td>
<td className="px-6 py-6">
<span className="px-3 py-1 rounded-md bg-yellow-100 text-yellow-700 font-bold text-xs uppercase tracking-widest">B+</span>
</td>
<td className="px-6 py-6 text-sm text-on-surface-variant italic leading-relaxed max-w-xs">
                                    &quot;Good participation in discussions. Creative writing shows promise but needs structure.&quot;
                                </td>
<td className="px-8 py-6 text-right">
<button className="text-blue-700 hover:text-blue-900 font-semibold text-sm hover:underline transition-all">View detailed feedback</button>
</td>
</tr>
</tbody>
</table>
</div>

<div className="p-6 bg-surface-container-low/20 border-t border-surface-container flex justify-between items-center rounded-b-xl">
<p className="text-xs font-medium text-on-surface-variant italic">Showing 1-4 of 8 subjects graded for Term 2.</p>
<div className="flex gap-2">
<button className="w-8 h-8 rounded-md flex items-center justify-center border border-outline-variant/30 text-on-surface-variant hover:bg-white transition-colors">
<span className="material-symbols-outlined text-sm">chevron_left</span>
</button>
<button className="w-8 h-8 rounded-md flex items-center justify-center bg-primary text-white text-xs font-bold">1</button>
<button className="w-8 h-8 rounded-md flex items-center justify-center border border-outline-variant/30 text-on-surface-variant hover:bg-white transition-colors text-xs font-bold">2</button>
<button className="w-8 h-8 rounded-md flex items-center justify-center border border-outline-variant/30 text-on-surface-variant hover:bg-white transition-colors">
<span className="material-symbols-outlined text-sm">chevron_right</span>
</button>
</div>
</div>
</div>
</section>
<footer className="px-8 pb-12">
<div className="flex flex-col md:flex-row gap-6 items-center bg-blue-50/50 p-6 rounded-2xl border border-blue-100/30">
<div className="flex-1">
<h4 className="font-headline font-bold text-on-surface">Request Academic Counseling</h4>
<p className="text-sm text-on-surface-variant">Not satisfied with your results? Schedule a 15-min call with your academic advisor to discuss a roadmap.</p>
</div>
<div className="flex gap-4">
<button className="px-6 py-3 bg-white text-blue-700 font-bold rounded-lg shadow-sm hover:bg-blue-100 transition-all border border-blue-100">Schedule Meeting</button>
<button className="px-6 py-3 primary-gradient text-white font-bold rounded-lg shadow-md hover:scale-[1.02] transition-all">Download Full PDF Report</button>
</div>
</div>
</footer>

    </MainLayout>
  );
}


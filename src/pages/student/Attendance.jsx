import React from 'react';
import MainLayout from '../../layouts/MainLayout';

export default function Attendance() {
  return (
    <MainLayout title="Attendance">
      <div className="p-8 max-w-7xl mx-auto space-y-8">

        <section className="flex flex-wrap items-center gap-4">
          <div className="flex-1 flex gap-4">
            <select className="bg-surface-container-low border-none rounded-md px-4 py-2.5 text-sm font-['Inter'] focus:ring-2 focus:ring-surface-tint outline-none">
              <option>Academic Year 2023-24</option>
              <option>Academic Year 2022-23</option>
            </select>
            <select className="bg-surface-container-low border-none rounded-md px-4 py-2.5 text-sm font-['Inter'] focus:ring-2 focus:ring-surface-tint outline-none">
              <option>All Subjects</option>
              <option>Physics</option>
              <option>Chemistry</option>
              <option>Mathematics</option>
            </select>
            <select className="bg-surface-container-low border-none rounded-md px-4 py-2.5 text-sm font-['Inter'] focus:ring-2 focus:ring-surface-tint outline-none">
              <option>October 2023</option>
              <option>September 2023</option>
            </select>
          </div>
          <button className="bg-surface-container-high text-primary px-6 py-2.5 rounded-md font-['Inter'] font-semibold text-sm hover:bg-blue-200 transition-colors">
            Apply Filters
          </button>
        </section>

        <section className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">

          <div className="bg-surface-container-lowest p-6 rounded-xl space-y-4 shadow-sm border border-outline-variant/10">
            <div className="flex justify-between items-start">
              <span className="p-2 bg-blue-50 text-blue-600 rounded-lg">
                <span className="material-symbols-outlined">analytics</span>
              </span>
              <span className="text-xs font-bold text-green-600 bg-green-50 px-2 py-1 rounded-full">+2% vs last month</span>
            </div>
            <div>
              <p className="text-on-surface-variant text-sm font-['Inter']">Overall Attendance</p>
              <h2 className="text-4xl font-extrabold font-headline text-on-surface">96%</h2>
            </div>
            <div className="w-full bg-surface-container rounded-full h-1.5">
              <div className="bg-primary h-1.5 rounded-full" style={{ width: `96%` }} />
            </div>
          </div>

          <div className="bg-surface-container-lowest p-6 rounded-xl space-y-4 shadow-sm border border-outline-variant/10">
            <div className="flex justify-between items-start">
              <span className="p-2 bg-purple-50 text-purple-600 rounded-lg">
                <span className="material-symbols-outlined">gavel</span>
              </span>
              <span className="text-xs font-bold text-blue-600 bg-blue-50 px-2 py-1 rounded-full">Requirement Met</span>
            </div>
            <div>
              <p className="text-on-surface-variant text-sm font-['Inter']">Min. Requirement</p>
              <h2 className="text-4xl font-extrabold font-headline text-on-surface">75%</h2>
            </div>
            <p className="text-xs text-on-surface-variant italic">You are 21% above the limit.</p>
          </div>

          <div className="md:col-span-1 lg:col-span-2 bg-surface-container-lowest p-6 rounded-xl flex flex-col shadow-sm border border-outline-variant/10">
            <div className="flex justify-between items-center mb-4">
              <p className="text-on-surface font-headline font-bold">Monthly Trend</p>
              <span className="material-symbols-outlined text-on-surface-variant text-sm">more_horiz</span>
            </div>
            <div className="flex-1 flex items-end gap-2 pb-2">
              <div className="flex-1 bg-blue-100 rounded-t-md relative group h-[40%]"><div className="absolute bottom-full left-0 right-0 text-[10px] text-center opacity-0 group-hover:opacity-100 mb-1">82%</div></div>
              <div className="flex-1 bg-blue-200 rounded-t-md relative group h-[65%]"><div className="absolute bottom-full left-0 right-0 text-[10px] text-center opacity-0 group-hover:opacity-100 mb-1">88%</div></div>
              <div className="flex-1 bg-blue-300 rounded-t-md relative group h-[80%]"><div className="absolute bottom-full left-0 right-0 text-[10px] text-center opacity-0 group-hover:opacity-100 mb-1">92%</div></div>
              <div className="flex-1 bg-primary rounded-t-md relative group h-[96%]"><div className="absolute bottom-full left-0 right-0 text-[10px] text-center opacity-0 group-hover:opacity-100 mb-1 font-bold">96%</div></div>
              <div className="flex-1 bg-blue-200 rounded-t-md relative group h-[60%]"><div className="absolute bottom-full left-0 right-0 text-[10px] text-center opacity-0 group-hover:opacity-100 mb-1">85%</div></div>
              <div className="flex-1 bg-blue-100 rounded-t-md relative group h-[30%]"><div className="absolute bottom-full left-0 right-0 text-[10px] text-center opacity-0 group-hover:opacity-100 mb-1">78%</div></div>
            </div>
            <div className="flex justify-between text-[10px] text-slate-400 mt-2 font-['Inter']">
              <span>MAY</span><span>JUN</span><span>JUL</span><span>AUG</span><span>SEP</span><span>OCT</span>
            </div>
          </div>
        </section>

        <section className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          <div className="lg:col-span-8 bg-surface-container-lowest rounded-xl p-8 shadow-sm border border-outline-variant/10">
            <div className="flex justify-between items-center mb-8">
              <div>
                <h3 className="text-xl font-bold font-headline text-on-surface">October 2023</h3>
                <p className="text-sm text-on-surface-variant">Visual Presence Log</p>
              </div>
              <div className="flex gap-2">
                <button className="p-2 hover:bg-surface-container rounded-lg transition-colors"><span className="material-symbols-outlined">chevron_left</span></button>
                <button className="p-2 hover:bg-surface-container rounded-lg transition-colors"><span className="material-symbols-outlined">chevron_right</span></button>
              </div>
            </div>
            <div className="grid grid-cols-7 gap-4 mb-6">
              <div className="text-center text-xs font-bold text-slate-400">MON</div>
              <div className="text-center text-xs font-bold text-slate-400">TUE</div>
              <div className="text-center text-xs font-bold text-slate-400">WED</div>
              <div className="text-center text-xs font-bold text-slate-400">THU</div>
              <div className="text-center text-xs font-bold text-slate-400">FRI</div>
              <div className="text-center text-xs font-bold text-slate-400">SAT</div>
              <div className="text-center text-xs font-bold text-slate-400">SUN</div>

              <div className="h-16 rounded-lg bg-surface-container-low/30" />
              <div className="h-16 rounded-lg bg-surface-container-low/30" />
              <div className="h-16 rounded-lg bg-surface-container-low/30" />
              <div className="h-16 rounded-lg bg-surface-container-low/30" />

              <div className="h-16 rounded-lg bg-green-100 border-2 border-green-200 flex flex-col items-center justify-center relative">
                <span className="text-sm font-bold text-green-700">1</span>
                <span className="text-[8px] font-bold text-green-600">PRESENT</span>
              </div>
              <div className="h-16 rounded-lg bg-slate-50 flex items-center justify-center"><span className="text-sm font-medium text-slate-300">2</span></div>
              <div className="h-16 rounded-lg bg-slate-50 flex items-center justify-center"><span className="text-sm font-medium text-slate-300">3</span></div>
              <div className="h-16 rounded-lg bg-green-100 border-2 border-green-200 flex flex-col items-center justify-center"><span className="text-sm font-bold text-green-700">4</span><span className="text-[8px] font-bold text-green-600">PRESENT</span></div>
              <div className="h-16 rounded-lg bg-green-100 border-2 border-green-200 flex flex-col items-center justify-center"><span className="text-sm font-bold text-green-700">5</span><span className="text-[8px] font-bold text-green-600">PRESENT</span></div>
              <div className="h-16 rounded-lg bg-yellow-100 border-2 border-yellow-200 flex flex-col items-center justify-center"><span className="text-sm font-bold text-yellow-700">6</span><span className="text-[8px] font-bold text-yellow-600">LATE</span></div>
              <div className="h-16 rounded-lg bg-green-100 border-2 border-green-200 flex flex-col items-center justify-center"><span className="text-sm font-bold text-green-700">7</span><span className="text-[8px] font-bold text-green-600">PRESENT</span></div>
              <div className="h-16 rounded-lg bg-green-100 border-2 border-green-200 flex flex-col items-center justify-center"><span className="text-sm font-bold text-green-700">8</span><span className="text-[8px] font-bold text-green-600">PRESENT</span></div>
              <div className="h-16 rounded-lg bg-slate-50 flex items-center justify-center"><span className="text-sm font-medium text-slate-300">9</span></div>
              <div className="h-16 rounded-lg bg-slate-50 flex items-center justify-center"><span className="text-sm font-medium text-slate-300">10</span></div>
              <div className="h-16 rounded-lg bg-red-100 border-2 border-red-200 flex flex-col items-center justify-center"><span className="text-sm font-bold text-red-700">11</span><span className="text-[8px] font-bold text-red-600">ABSENT</span></div>
              <div className="h-16 rounded-lg bg-green-100 border-2 border-green-200 flex flex-col items-center justify-center"><span className="text-sm font-bold text-green-700">12</span><span className="text-[8px] font-bold text-green-600">PRESENT</span></div>
              <div className="h-16 rounded-lg bg-green-100 border-2 border-green-200 flex flex-col items-center justify-center"><span className="text-sm font-bold text-green-700">13</span><span className="text-[8px] font-bold text-green-600">PRESENT</span></div>
              <div className="h-16 rounded-lg bg-green-100 border-2 border-green-200 flex flex-col items-center justify-center"><span className="text-sm font-bold text-green-700">14</span><span className="text-[8px] font-bold text-green-600">PRESENT</span></div>
              <div className="h-16 rounded-lg bg-green-100 border-2 border-green-200 flex flex-col items-center justify-center"><span className="text-sm font-bold text-green-700">15</span><span className="text-[8px] font-bold text-green-600">PRESENT</span></div>
              <div className="h-16 rounded-lg bg-slate-50 flex items-center justify-center"><span className="text-sm font-medium text-slate-300">16</span></div>
              <div className="h-16 rounded-lg bg-slate-50 flex items-center justify-center"><span className="text-sm font-medium text-slate-300">17</span></div>
            </div>
            <div className="flex flex-wrap gap-6 mt-8 pt-8 border-t border-surface-container-low">
              <div className="flex items-center gap-2"><div className="w-3 h-3 rounded-full bg-green-400" /><span className="text-xs font-semibold text-on-surface-variant">Present</span></div>
              <div className="flex items-center gap-2"><div className="w-3 h-3 rounded-full bg-red-400" /><span className="text-xs font-semibold text-on-surface-variant">Absent</span></div>
              <div className="flex items-center gap-2"><div className="w-3 h-3 rounded-full bg-yellow-400" /><span className="text-xs font-semibold text-on-surface-variant">Late</span></div>
              <div className="flex items-center gap-2"><div className="w-3 h-3 rounded-full bg-slate-200" /><span className="text-xs font-semibold text-on-surface-variant">Holiday/Weekend</span></div>
            </div>
          </div>

          <div className="lg:col-span-4 space-y-6">
            <div className="bg-gradient-primary p-6 rounded-xl text-white shadow-xl relative overflow-hidden">
              <div className="absolute -right-8 -top-8 w-32 h-32 bg-white/10 rounded-full blur-2xl" />
              <div className="relative z-10 space-y-4">
                <div className="flex items-center gap-2">
                  <span className="material-symbols-outlined">auto_awesome</span>
                  <h4 className="font-bold font-headline">Attendance Insight</h4>
                </div>
                <p className="text-sm leading-relaxed opacity-90 font-['Inter']">
                  You have maintained 96% attendance this semester. This is 5% higher than the class average. Keep this up to qualify for the <span className="font-bold">Excellent Academic Conduct</span> award.
                </p>
                <button className="bg-white/20 hover:bg-white/30 transition-colors w-full py-2 rounded-lg text-xs font-bold uppercase tracking-wider">View Full Analysis</button>
              </div>
            </div>

            <div className="bg-surface-container-high/50 p-6 rounded-xl border border-blue-100 flex gap-4">
              <div className="p-3 bg-white rounded-xl shadow-sm h-fit">
                <span className="material-symbols-outlined text-tertiary">lightbulb</span>
              </div>
              <div className="space-y-1">
                <h4 className="font-bold font-headline text-on-surface text-sm">Smart Recommendation</h4>
                <p className="text-xs text-on-surface-variant leading-relaxed">
                  Maintain an attendance rate <span className="text-primary font-semibold">above 90%</span> to ensure eligibility for the <span className="italic">Global Merit Scholarship</span> program next semester.
                </p>
              </div>
            </div>

            <div className="bg-surface-container-lowest p-6 rounded-xl space-y-4 shadow-sm border border-outline-variant/10">
              <h4 className="font-bold font-headline text-on-surface text-sm mb-4">Consecutive Days</h4>
              <div className="flex items-end gap-1">
                <span className="text-5xl font-extrabold text-primary">14</span>
                <span className="text-on-surface-variant font-medium pb-1">days streak</span>
              </div>
              <p className="text-xs text-on-surface-variant">Your personal record is 22 days.</p>
            </div>
          </div>
        </section>

        <section className="bg-surface-container-lowest rounded-xl overflow-hidden shadow-sm border border-outline-variant/10">
          <div className="px-8 py-6 flex justify-between items-center border-b border-surface-container-low">
            <h3 className="text-xl font-bold font-headline text-on-surface">Recent Activity</h3>
            <button className="text-primary font-semibold text-sm hover:underline">Download CSV</button>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-left font-['Inter']">
              <thead>
                <tr className="bg-surface-container-low/50">
                  <th className="px-8 py-4 text-xs font-bold text-slate-500 uppercase tracking-wider">Date</th>
                  <th className="px-8 py-4 text-xs font-bold text-slate-500 uppercase tracking-wider">Subject</th>
                  <th className="px-8 py-4 text-xs font-bold text-slate-500 uppercase tracking-wider">Status</th>
                  <th className="px-8 py-4 text-xs font-bold text-slate-500 uppercase tracking-wider">Teacher</th>
                  <th className="px-8 py-4 text-xs font-bold text-slate-500 uppercase tracking-wider text-right">Remarks</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-surface-container-low">
                <tr className="hover:bg-surface-container-low/20 transition-colors">
                  <td className="px-8 py-4 text-sm font-medium">Oct 14, 2023</td>
                  <td className="px-8 py-4 text-sm font-semibold text-primary">Advanced Physics II</td>
                  <td className="px-8 py-4">
                    <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-[10px] font-bold">PRESENT</span>
                  </td>
                  <td className="px-8 py-4 text-sm text-on-surface-variant">Dr. Emily Watson</td>
                  <td className="px-8 py-4 text-sm text-on-surface-variant text-right">-</td>
                </tr>
                <tr className="hover:bg-surface-container-low/20 transition-colors">
                  <td className="px-8 py-4 text-sm font-medium">Oct 13, 2023</td>
                  <td className="px-8 py-4 text-sm font-semibold text-primary">Calculus & Matrix</td>
                  <td className="px-8 py-4">
                    <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-[10px] font-bold">PRESENT</span>
                  </td>
                  <td className="px-8 py-4 text-sm text-on-surface-variant">Prof. Michael Chen</td>
                  <td className="px-8 py-4 text-sm text-on-surface-variant text-right">-</td>
                </tr>
                <tr className="hover:bg-surface-container-low/20 transition-colors">
                  <td className="px-8 py-4 text-sm font-medium">Oct 12, 2023</td>
                  <td className="px-8 py-4 text-sm font-semibold text-primary">Organic Chemistry</td>
                  <td className="px-8 py-4">
                    <span className="bg-yellow-100 text-yellow-700 px-3 py-1 rounded-full text-[10px] font-bold">LATE</span>
                  </td>
                  <td className="px-8 py-4 text-sm text-on-surface-variant">Sarah Jenkins</td>
                  <td className="px-8 py-4 text-sm text-on-surface-variant text-right italic">10 mins late (Bus)</td>
                </tr>
                <tr className="hover:bg-surface-container-low/20 transition-colors">
                  <td className="px-8 py-4 text-sm font-medium">Oct 11, 2023</td>
                  <td className="px-8 py-4 text-sm font-semibold text-primary">Molecular Biology</td>
                  <td className="px-8 py-4">
                    <span className="bg-red-100 text-red-700 px-3 py-1 rounded-full text-[10px] font-bold">ABSENT</span>
                  </td>
                  <td className="px-8 py-4 text-sm text-on-surface-variant">Dr. Alan Turing</td>
                  <td className="px-8 py-4 text-sm text-on-surface-variant text-right italic text-red-500 font-medium">Medical Leave</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="p-4 bg-surface-container-low/20 text-center">
            <button className="text-sm font-bold text-primary hover:bg-blue-50 px-6 py-2 rounded-lg transition-colors">Load More Records</button>
          </div>
        </section>
      </div>
    </MainLayout>
  );
}

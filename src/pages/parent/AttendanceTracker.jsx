import React from 'react';
import DashboardLayout from "../../components/erp/parent/DashboardLayout";
const AttendanceTracker = () => {
  return (
    <DashboardLayout>
    <div className="p-8 max-w-7xl mx-auto space-y-8">
      {/* Header Section */}
      <div className="flex justify-between items-end mb-8">
        <div>
          <h1 className="text-4xl font-extrabold text-on-surface tracking-tight mb-2">Child Attendance</h1>
          <p className="text-on-surface-variant font-body">Tracking Alex's academic presence and engagement metrics.</p>
        </div>
        <div className="flex gap-3">
          <button className="bg-surface-container-high text-primary px-5 py-2.5 rounded-md text-sm font-semibold transition-all hover:bg-surface-variant">Export Report</button>
          <button className="bg-gradient-to-br from-primary to-primary-container text-white px-5 py-2.5 rounded-md text-sm font-semibold shadow-md hover:shadow-lg transition-all">Request Leave</button>
        </div>
      </div>

      {/* Bento Grid: Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
        <div className="bg-surface-container-lowest rounded-lg p-6 flex flex-col justify-between group hover:bg-primary transition-colors duration-300">
          <div className="flex justify-between items-start mb-4">
            <div className="bg-primary/10 w-12 h-12 rounded-md flex items-center justify-center group-hover:bg-white/20">
              <span className="material-symbols-outlined text-primary group-hover:text-white" data-icon="percent">percent</span>
            </div>
            <span className="text-xs font-bold text-primary group-hover:text-white bg-primary/5 group-hover:bg-white/10 px-2 py-1 rounded">Overall</span>
          </div>
          <div>
            <h3 className="text-sm text-on-surface-variant group-hover:text-white/80 font-medium">Overall Attendance</h3>
            <p className="text-3xl font-extrabold text-on-surface group-hover:text-white">92%</p>
          </div>
        </div>

        <div className="bg-surface-container-lowest rounded-lg p-6 flex flex-col justify-between border-l-4 border-tertiary">
          <div className="flex justify-between items-start mb-4">
            <div className="bg-tertiary/10 w-12 h-12 rounded-md flex items-center justify-center">
              <span className="material-symbols-outlined text-tertiary" data-icon="gavel">gavel</span>
            </div>
          </div>
          <div>
            <h3 className="text-sm text-on-surface-variant font-medium">Requirement</h3>
            <p className="text-3xl font-extrabold text-on-surface">Min 75%</p>
            <p className="text-xs text-tertiary font-medium mt-1 uppercase tracking-wider">Status: compliant</p>
          </div>
        </div>

        <div className="bg-surface-container-lowest rounded-lg p-6 flex flex-col justify-between">
          <div className="flex justify-between items-start mb-4">
            <div className="bg-green-100 w-12 h-12 rounded-md flex items-center justify-center">
              <span className="material-symbols-outlined text-green-600" data-icon="trending_up">trending_up</span>
            </div>
          </div>
          <div>
            <h3 className="text-sm text-on-surface-variant font-medium">Monthly Trend</h3>
            <p className="text-3xl font-extrabold text-on-surface">+2%</p>
            <p className="text-xs text-green-600 font-medium mt-1">Increasing vs last month</p>
          </div>
        </div>

        <div className="bg-surface-container-low rounded-lg p-6 flex flex-col justify-center relative overflow-hidden">
          <div className="absolute -right-4 -top-4 opacity-10">
            <span className="material-symbols-outlined text-7xl" data-icon="psychology">psychology</span>
          </div>
          <div className="flex items-center gap-2 mb-2">
            <span className="material-symbols-outlined text-tertiary text-sm" data-icon="auto_awesome" style={{ fontVariationSettings: "'FILL' 1" }}>auto_awesome</span>
            <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-tertiary">AI Insight</span>
          </div>
          <p className="text-sm italic text-on-surface font-medium leading-relaxed">"Alex has maintained exemplary attendance this semester."</p>
        </div>
      </div>

      {/* Middle Section: Calendar and Monthly Chart */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 mb-8">
        {/* Interactive Calendar - Mockup */}
        <div className="lg:col-span-8 bg-surface-container-lowest rounded-lg p-8 shadow-sm">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-xl font-bold text-on-surface">Attendance Calendar</h2>
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-green-500"></span>
                <span className="text-xs font-medium text-on-surface-variant">Present</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-red-500"></span>
                <span className="text-xs font-medium text-on-surface-variant">Absent</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-yellow-500"></span>
                <span className="text-xs font-medium text-on-surface-variant">Late</span>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <button className="p-1 hover:bg-surface-container rounded transition-colors">
                <span className="material-symbols-outlined" data-icon="chevron_left">chevron_left</span>
              </button>
              <span className="text-sm font-bold mx-2">October 2023</span>
              <button className="p-1 hover:bg-surface-container rounded transition-colors">
                <span className="material-symbols-outlined" data-icon="chevron_right">chevron_right</span>
              </button>
            </div>
          </div>
          <div className="grid grid-cols-7 gap-2 text-center text-xs font-bold text-on-surface-variant uppercase tracking-widest mb-4">
            <div>Sun</div><div>Mon</div><div>Tue</div><div>Wed</div><div>Thu</div><div>Fri</div><div>Sat</div>
          </div>
          <div className="grid grid-cols-7 gap-2">

{/* Week 1 */}
<div className="h-16 bg-green-50 text-green-700 font-bold rounded-md flex items-center justify-center border border-green-200">1</div>
<div className="h-16 bg-slate-50 text-slate-400 rounded-md flex items-center justify-center">2</div>
<div className="h-16 bg-green-50 text-green-700 font-bold rounded-md flex items-center justify-center border border-green-200">3</div>
<div className="h-16 bg-green-50 text-green-700 font-bold rounded-md flex items-center justify-center border border-green-200">4</div>
<div className="h-16 bg-yellow-50 text-yellow-700 font-bold rounded-md flex items-center justify-center border border-yellow-200">5</div>
<div className="h-16 bg-green-50 text-green-700 font-bold rounded-md flex items-center justify-center border border-green-200">6</div>
<div className="h-16 bg-red-50 text-red-700 font-bold rounded-md flex items-center justify-center border border-red-200">7</div>

{/* Week 2 */}
<div className="h-16 bg-green-50 text-green-700 font-bold rounded-md flex items-center justify-center border border-green-200">8</div>
<div className="h-16 bg-green-50 text-green-700 font-bold rounded-md flex items-center justify-center border border-green-200">9</div>
<div className="h-16 bg-slate-50 text-slate-500 rounded-md flex items-center justify-center">10</div>
<div className="h-16 bg-green-50 text-green-700 font-bold rounded-md flex items-center justify-center border border-green-200">11</div>
<div className="h-16 bg-yellow-50 text-yellow-700 font-bold rounded-md flex items-center justify-center border border-yellow-200">12</div>
<div className="h-16 bg-green-50 text-green-700 font-bold rounded-md flex items-center justify-center border border-green-200">13</div>
<div className="h-16 bg-red-50 text-red-700 font-bold rounded-md flex items-center justify-center border border-red-200">14</div>

{/* Week 3 */}
<div className="h-16 bg-green-50 text-green-700 font-bold rounded-md flex items-center justify-center border border-green-200">15</div>
<div className="h-16 bg-green-50 text-green-700 font-bold rounded-md flex items-center justify-center border border-green-200">16</div>
<div className="h-16 bg-slate-50 text-slate-500 rounded-md flex items-center justify-center">17</div>
<div className="h-16 bg-green-50 text-green-700 font-bold rounded-md flex items-center justify-center border border-green-200">18</div>
<div className="h-16 bg-yellow-50 text-yellow-700 font-bold rounded-md flex items-center justify-center border border-yellow-200">19</div>
<div className="h-16 bg-green-50 text-green-700 font-bold rounded-md flex items-center justify-center border border-green-200">20</div>
<div className="h-16 bg-red-50 text-red-700 font-bold rounded-md flex items-center justify-center border border-red-200">21</div>

{/* Week 4 */}
<div className="h-16 bg-green-50 text-green-700 font-bold rounded-md flex items-center justify-center border border-green-200">22</div>
<div className="h-16 bg-green-50 text-green-700 font-bold rounded-md flex items-center justify-center border border-green-200">23</div>
<div className="h-16 bg-slate-50 text-slate-500 rounded-md flex items-center justify-center">24</div>
<div className="h-16 bg-green-50 text-green-700 font-bold rounded-md flex items-center justify-center border border-green-200">25</div>
<div className="h-16 bg-yellow-50 text-yellow-700 font-bold rounded-md flex items-center justify-center border border-yellow-200">26</div>
<div className="h-16 bg-green-50 text-green-700 font-bold rounded-md flex items-center justify-center border border-green-200">27</div>
<div className="h-16 bg-red-50 text-red-700 font-bold rounded-md flex items-center justify-center border border-red-200">28</div>

{/* Week 5 */}
<div className="h-16 bg-green-50 text-green-700 font-bold rounded-md flex items-center justify-center border border-green-200">29</div>
<div className="h-16 bg-green-50 text-green-700 font-bold rounded-md flex items-center justify-center border border-green-200">30</div>
<div className="h-16 bg-slate-50 text-slate-500 rounded-md flex items-center justify-center">31</div>

{/* empty boxes for grid alignment */}
<div></div>
<div></div>
<div></div>
<div></div>

</div>
          {/* Calendar content truncated for brevity in static view */}
        </div>
        
        {/* Side Metric */}
        <div className="lg:col-span-4 flex flex-col gap-6">
          <div className="bg-surface-container-lowest rounded-lg p-6 shadow-sm flex-1 flex flex-col">
            <h2 className="text-lg font-bold text-on-surface mb-6">Subject Attendance</h2>
            <div className="space-y-6 flex-1">
              <div>
                <div className="flex justify-between items-center text-xs font-semibold mb-2">
                  <span className="text-on-surface">Mathematics</span>
                  <span className="text-primary">98%</span>
                </div>
                <div className="w-full bg-surface-container rounded-full h-1.5 overflow-hidden">
                  <div className="bg-primary h-full rounded-full" style={{ width: "98%" }}></div>
                </div>
              </div>
              <div>
                <div className="flex justify-between items-center text-xs font-semibold mb-2">
                  <span className="text-on-surface">Advanced Physics</span>
                  <span className="text-primary">85%</span>
                </div>
                <div className="w-full bg-surface-container rounded-full h-1.5 overflow-hidden">
                  <div className="bg-primary h-full rounded-full" style={{ width: "85%" }}></div>
                </div>
              </div>
              <div>
                <div className="flex justify-between items-center text-xs font-semibold mb-2">
                  <span className="text-on-surface">World Literature</span>
                  <span className="text-primary">94%</span>
                </div>
                <div className="w-full bg-surface-container rounded-full h-1.5 overflow-hidden">
                  <div className="bg-primary h-full rounded-full" style={{ width: "94%" }}></div>
                </div>
              </div>
              <div>
                <div className="flex justify-between items-center text-xs font-semibold mb-2">
                  <span className="text-on-surface">Computer Science</span>
                  <span className="text-primary">91%</span>
                </div>
                <div className="w-full bg-surface-container rounded-full h-1.5 overflow-hidden">
                  <div className="bg-primary h-full rounded-full" style={{ width: "91%" }}></div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-primary-container text-white rounded-lg p-6 relative overflow-hidden group shadow-sm">
            <div className="absolute right-0 bottom-0 translate-x-1/4 translate-y-1/4 opacity-10 group-hover:scale-110 transition-transform duration-700">
              <span className="material-symbols-outlined text-9xl" data-icon="military_tech">military_tech</span>
            </div>
            <h3 className="font-headline font-bold text-lg mb-2">Perfect Attendance Streak</h3>
            <div className="flex items-baseline gap-1">
              <span className="text-4xl font-extrabold">14</span>
              <span className="text-sm font-medium opacity-80">Days Active</span>
            </div>
            <p className="text-xs mt-3 opacity-90 leading-relaxed">Keep it up! 5 more days to unlock the "Consistent Learner" badge.</p>
          </div>
        </div>
      </div>

      {/* Detailed Log Table */}
      <div className="bg-surface-container-lowest rounded-lg shadow-sm overflow-hidden">
        <div className="px-8 py-6 border-b border-surface-container-low flex justify-between items-center">
          <h2 className="text-xl font-bold text-on-surface">Attendance Log</h2>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead className="bg-surface-container-low/50">
              <tr>
                <th className="px-8 py-4 text-[10px] font-bold uppercase tracking-widest text-on-surface-variant">Date</th>
                <th className="px-8 py-4 text-[10px] font-bold uppercase tracking-widest text-on-surface-variant">Day</th>
                <th className="px-8 py-4 text-[10px] font-bold uppercase tracking-widest text-on-surface-variant">Subject / Session</th>
                <th className="px-8 py-4 text-[10px] font-bold uppercase tracking-widest text-on-surface-variant">Teacher</th>
                <th className="px-8 py-4 text-[10px] font-bold uppercase tracking-widest text-on-surface-variant text-center">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-surface-container-low font-body">
              <tr className="hover:bg-slate-50/50 transition-colors">
                <td className="px-8 py-5 text-sm font-medium text-on-surface">Oct 20, 2023</td>
                <td className="px-8 py-5 text-sm text-on-surface-variant">Friday</td>
                <td className="px-8 py-5 text-sm text-on-surface">Mathematics (HL)</td>
                <td className="px-8 py-5 text-sm text-on-surface-variant">Dr. Sarah Vance</td>
                <td className="px-8 py-5 text-center">
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-bold bg-yellow-100 text-yellow-800">LATE</span>
                </td>
              </tr>
              <tr className="hover:bg-slate-50/50 transition-colors">
                <td className="px-8 py-5 text-sm font-medium text-on-surface">Oct 19, 2023</td>
                <td className="px-8 py-5 text-sm text-on-surface-variant">Thursday</td>
                <td className="px-8 py-5 text-sm text-on-surface">Advanced Physics</td>
                <td className="px-8 py-5 text-sm text-on-surface-variant">Prof. Alan Turing</td>
                <td className="px-8 py-5 text-center">
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-bold bg-green-100 text-green-800">PRESENT</span>
                </td>
              </tr>
              <tr className="hover:bg-slate-50/50 transition-colors">
                <td className="px-8 py-5 text-sm font-medium text-on-surface">Oct 08, 2023</td>
                <td className="px-8 py-5 text-sm text-on-surface-variant">Sunday</td>
                <td className="px-8 py-5 text-sm text-on-surface">Extra Curricular Art</td>
                <td className="px-8 py-5 text-sm text-on-surface-variant">Marc Chagall</td>
                <td className="px-8 py-5 text-center">
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-bold bg-red-100 text-red-800">ABSENT</span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

    </div>
    </DashboardLayout>
  );
};

export default AttendanceTracker;

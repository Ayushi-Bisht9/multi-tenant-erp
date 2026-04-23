import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import MainLayout from "../../components/erp/teacher/MainLayout";
import Card from "../../components/erp/teacher/Card";

const AttendanceOverview = () => {
  const navigate = useNavigate();
  
  return (
    <MainLayout title="The Academic Architect">
      {/* Header Section */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 gap-4">
        <div>
          <h2 className="text-3xl font-extrabold text-slate-800 font-display tracking-tight">Attendance Overview</h2>
          <p className="text-gray-500 font-medium mt-1">Academic Session: 2023-24 • Daily Logs</p>
        </div>
        <div className="flex space-x-3">
          <button className="flex items-center justify-center space-x-2 px-5 py-2.5 rounded-xl text-[#0058be] font-semibold bg-[#eff4ff] hover:bg-[#d8e2ff] transition-colors text-sm">
            <span className="material-symbols-outlined text-[20px]">file_download</span>
            <span>Export Report</span>
          </button>
          <button 
            onClick={() => navigate("/teacher/attendance/mark")}
            className="flex items-center justify-center space-x-2 px-6 py-2.5 rounded-xl text-white font-semibold bg-gradient-to-r from-[#0058be] to-[#2170e4] shadow-md active:scale-95 duration-150 transition-all text-sm"
          >
            <span className="material-symbols-outlined text-[20px]">fact_check</span>
            <span>Mark Attendance</span>
          </button>
        </div>
      </div>

      {/* Bento Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
        <Card className="flex flex-col justify-between relative overflow-hidden group shadow-sm border border-gray-100">
          <div className="absolute -right-4 -top-4 w-24 h-24 bg-[#0058be]/5 rounded-full group-hover:scale-110 transition-transform duration-500"></div>
          <div className="relative z-10">
            <p className="text-sm font-semibold text-gray-500 mb-1 uppercase tracking-wider">Today's Presence</p>
            <h3 className="text-4xl font-extrabold text-[#0058be]">94.2%</h3>
          </div>
          <div className="mt-4 flex items-center text-xs font-bold text-green-600 relative z-10">
            <span className="material-symbols-outlined text-[16px] mr-1">trending_up</span>
            <span>2.1% from yesterday</span>
          </div>
        </Card>

        <Card className="flex flex-col justify-between relative overflow-hidden group shadow-sm border border-gray-100">
          <div className="absolute -right-4 -top-4 w-24 h-24 bg-[#6b38d4]/5 rounded-full group-hover:scale-110 transition-transform duration-500"></div>
          <div className="relative z-10">
            <p className="text-sm font-semibold text-gray-500 mb-1 uppercase tracking-wider">Weekly Avg</p>
            <h3 className="text-4xl font-extrabold text-[#6b38d4]">88.5%</h3>
          </div>
          <div className="mt-4 flex items-center text-xs font-bold text-slate-500 relative z-10">
            <span className="material-symbols-outlined text-[16px] mr-1">history</span>
            <span>Steady state maintained</span>
          </div>
        </Card>

        <Card className="flex flex-col justify-between relative overflow-hidden group shadow-sm border border-gray-100">
          <div className="absolute -right-4 -top-4 w-24 h-24 bg-red-500/5 rounded-full group-hover:scale-110 transition-transform duration-500"></div>
          <div className="relative z-10">
            <p className="text-sm font-semibold text-gray-500 mb-1 uppercase tracking-wider">Absent Students</p>
            <h3 className="text-4xl font-extrabold text-red-600">12</h3>
          </div>
          <div className="mt-4 flex items-center text-xs font-bold text-red-600 relative z-10">
            <span className="material-symbols-outlined text-[16px] mr-1">warning</span>
            <span>3 students flagged for low attendance</span>
          </div>
        </Card>
      </div>

      {/* Intelligent Insights (Asymmetric Layout) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-10">
        
        {/* Class List Section (8 cols) */}
        <div className="lg:col-span-8">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-xl font-bold text-slate-800">Scheduled Classes Today</h3>
            <span className="text-sm font-medium text-[#0058be] bg-[#eff4ff] px-3 py-1 rounded-full">3 Classes Pending</span>
          </div>
          <div className="space-y-4">
            
            {/* Class Row 1 */}
            <div className="bg-white rounded-xl p-5 flex flex-col sm:flex-row sm:items-center shadow-sm border border-gray-100 group gap-4">
              <div className="w-14 h-14 rounded-xl bg-[#eff4ff] flex items-center justify-center text-[#0058be] shrink-0">
                <span className="material-symbols-outlined text-3xl">calculate</span>
              </div>
              <div className="flex-grow">
                <h4 className="font-bold text-slate-800 text-lg">Advanced Mathematics</h4>
                <p className="text-sm text-gray-500">Grade 11-A • 09:00 AM - 10:30 AM</p>
              </div>
              <div className="hidden md:flex items-center space-x-8">
                <div className="text-center">
                  <p className="text-[10px] font-bold text-slate-400 uppercase">Present</p>
                  <p className="text-lg font-bold text-green-600">32/34</p>
                </div>
                <div className="text-center">
                  <p className="text-[10px] font-bold text-slate-400 uppercase">Status</p>
                  <span className="text-xs font-bold text-green-700 bg-green-100 px-2 py-0.5 rounded">Completed</span>
                </div>
              </div>
              <button className="sm:ml-6 px-5 py-2 rounded-xl bg-gray-50 text-gray-400 font-bold text-sm cursor-not-allowed whitespace-nowrap">
                Marked
              </button>
            </div>

            {/* Class Row 2 */}
            <div className="bg-white rounded-xl p-5 flex flex-col sm:flex-row sm:items-center shadow-sm border border-blue-200 group gap-4 ring-2 ring-blue-50">
              <div className="w-14 h-14 rounded-xl bg-[#f2edff] flex items-center justify-center text-[#6b38d4] shrink-0">
                <span className="material-symbols-outlined text-3xl">science</span>
              </div>
              <div className="flex-grow">
                <h4 className="font-bold text-slate-800 text-lg">Quantum Physics Lab</h4>
                <p className="text-sm text-gray-500">Grade 12-C • 11:00 AM - 12:30 PM</p>
              </div>
              <div className="hidden md:flex items-center justify-center px-4">
                <span className="text-xs font-bold text-amber-600 bg-amber-50 border border-amber-200 px-3 py-1 rounded-full whitespace-nowrap">Requires Action</span>
              </div>
              <button
                onClick={() => navigate("/teacher/attendance/mark")}
                className="px-5 py-2 bg-[#0058be] text-white rounded-md font-semibold text-sm hover:opacity-90 transition shadow-md"
              >
                Mark Attendance
              </button>
            </div>

            {/* Class Row 3 */}
            <div className="bg-white rounded-xl p-5 flex flex-col sm:flex-row sm:items-center shadow-sm border border-gray-100 group gap-4">
              <div className="w-14 h-14 rounded-xl bg-orange-50 flex items-center justify-center text-orange-600 shrink-0">
                <span className="material-symbols-outlined text-3xl">menu_book</span>
              </div>
              <div className="flex-grow">
                <h4 className="font-bold text-slate-800 text-lg">Classical Literature</h4>
                <p className="text-sm text-gray-500">Grade 10-B • 02:00 PM - 03:30 PM</p>
              </div>
              <div className="hidden md:flex items-center justify-center px-4">
                <span className="text-xs font-bold text-slate-400 bg-slate-100 px-3 py-1 rounded-full italic whitespace-nowrap">Upcoming</span>
              </div>
              <button className="sm:ml-6 px-5 py-2 rounded-xl bg-[#eff4ff] text-[#0058be] font-bold text-sm hover:bg-[#d8e2ff] transition-colors whitespace-nowrap">
                Mark Now
              </button>
            </div>
          </div>
        </div>

        {/* Side Insight Section (4 cols) */}
        <div className="lg:col-span-4 space-y-6">
          {/* AI Intelligence Insight */}
          <div className="bg-orange-50 p-6 rounded-xl relative overflow-hidden border border-amber-900/10">
            <div className="absolute top-0 right-0 p-4">
              <span className="material-symbols-outlined text-amber-900/20 text-4xl">psychology</span>
            </div>
            <h4 className="text-[#924700] font-bold text-lg mb-2 flex items-center relative z-10">
              <span className="material-symbols-outlined mr-2 text-xl">auto_awesome</span>
              Attendance AI Insight
            </h4>
            <p className="text-[#723600] text-sm leading-relaxed mb-4 relative z-10">
              James Miller has missed 3 consecutive Lab sessions. This correlates with a 15% drop in his last quiz performance.
            </p>
            <button className="text-xs font-bold text-[#924700] underline decoration-[#b75b00]/30 underline-offset-4 hover:decoration-[#924700] transition-all relative z-10">
              Review Intervention Plan
            </button>
          </div>

          {/* Attendance Distribution */}
          <Card className="shadow-sm border border-gray-100">
            <h4 className="font-bold text-slate-800 mb-6">Presence Distribution</h4>
            <div className="space-y-4">
              <div>
                <div className="flex justify-between text-xs font-bold mb-1">
                  <span className="text-gray-500">Physical Presence</span>
                  <span className="text-[#0058be]">88%</span>
                </div>
                <div className="w-full h-2 bg-gray-100 rounded-full overflow-hidden">
                  <div className="h-full bg-[#0058be] rounded-full transition-all" style={{ width: '88%' }}></div>
                </div>
              </div>
              <div>
                <div className="flex justify-between text-xs font-bold mb-1">
                  <span className="text-gray-500">Late Arrivals</span>
                  <span className="text-amber-600">6%</span>
                </div>
                <div className="w-full h-2 bg-gray-100 rounded-full overflow-hidden">
                  <div className="h-full bg-amber-500 rounded-full transition-all" style={{ width: '6%' }}></div>
                </div>
              </div>
              <div>
                <div className="flex justify-between text-xs font-bold mb-1">
                  <span className="text-gray-500">Authorized Leaves</span>
                  <span className="text-[#6b38d4]">4%</span>
                </div>
                <div className="w-full h-2 bg-gray-100 rounded-full overflow-hidden">
                  <div className="h-full bg-[#6b38d4] rounded-full transition-all" style={{ width: '4%' }}></div>
                </div>
              </div>
            </div>
          </Card>

          {/* Quick Contact */}
          <div className="bg-[#eff4ff] p-6 rounded-xl border border-[#0058be]/10">
            <h4 className="font-bold text-[#0b1c30] text-sm mb-3">Notify Guardians</h4>
            <p className="text-xs text-gray-600 mb-4">Send automatic SMS/Email alerts for the 12 absent students today.</p>
            <button className="w-full py-2.5 bg-white text-[#0058be] border border-[#0058be]/30 rounded-xl font-bold text-xs hover:bg-[#0058be] hover:text-white transition-all shadow-sm">
              Send Notifications
            </button>
          </div>
        </div>

      </div>
    </MainLayout>
  );
};

export default AttendanceOverview;
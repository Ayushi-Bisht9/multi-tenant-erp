import React from 'react';
import { Link } from 'react-router-dom';
import MainLayout from "../../components/erp/teacher/MainLayout";
import Button from "../../components/erp/teacher/Button";
import Card from "../../components/erp/teacher/Card";


const students = [
  { id: 1, name: 'Julian Casablancas', roll: 'M10-042', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAD0LgMXZlqVBihjQRvTDkx4CGxVzK92jLzxUrE-IbUoZ0Cv_DX0e2_QuAzrwi_rBnz3RzkcqF96JS0qANwRlV0WJlaEoFLRgMSm5yQj6fSYG-B2KbArRNgi826EJF0TV2IMRuHO0_qLcy_wCIPAvtZvux7PtQwZ5H68Hei9oVYEic3HkVPTgCZsBKzTO5qPbfXf5i_zZ4SYE_c3QlAaXBQAYhybvAQMQSBxbt04OgMIsurTqLk8oMp79NDXwjcJkiCHxumgrDXkQ', att: 98, grade: 'A+', gradeColor: 'green' },
  { id: 2, name: 'Mia Goth', roll: 'M10-019', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC15Z0F5eeI5PJXgmZS1z98LK59OfryXHzxL8mI2fjPmgv2xDiHo35GFzIVG_GZunnN06PkC1CBZJHTkk1YjSEo9vnYGa5YYcu5K1yr_tFamIyCrlS9UNHTp0kKYddclXW34124AEBviX1rFtAc1JhwySLDNf3oLstQGRAbjOIPu7z9GkrtsnwdqI8gws4NlMxIWrD4C_YHvOlFRtUfNtB30ofJnQS8njzxYpLOR_yAZ88Sat4S8NWnIMaMhXxNx2_ePUJnLF9xYw', att: 82, grade: 'B', gradeColor: 'blue' },
  { id: 3, name: 'Sarah Polley', roll: 'M10-071', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBOoWnCytceH-QYlJSTtd_LcLAttLWFP1vnnPy8n0WTIlx4nGfLcWxJNnVPJ9Zpq1Y8TquJ76BwHPPlETT9jI8qWxHeyOWiECcIwh1_4erN0kg5obgrv8RChsn9GKbDMwAF5yhxOw7i6nfVt4kOKXvutMRNkx9XPB3U8rH3PF3SepWM5sDDBzzt0uMKSWjAsapbItWAHNbHZrM_C5JnjNLc_dZgYbV_vIb2tSSWpWs2DlUwtEyDPLF3HMsUbNtKk3z2xQJD7_wrAg', att: 92, grade: 'A', gradeColor: 'green' }
];

const ClassPerformanceManagement = () => {
  return (
    <MainLayout title="Teacher Portal">
      {/* Page Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-8 gap-4 border-b border-outline-variant/10 pb-4">
        <div>
          <h2 className="text-3xl font-extrabold font-display text-blue-900 tracking-tight">Grade 10-A Mathematics</h2>
          <span className="inline-flex items-center px-2 py-0.5 rounded-full text-xs font-bold bg-blue-100 text-blue-700 mt-2">Active Semester</span>
        </div>
      </div>

      <div className="space-y-8">
        {/* Bento Hero Section */}
        <section className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Class Overview Card */}
          <div className="lg:col-span-2 bg-surface-container-lowest rounded-lg p-8 relative overflow-hidden group shadow-ambient" style={{boxShadow: '0px 12px 32px rgba(11,28,48,0.04)'}}>
            <div className="relative z-10 flex flex-col h-full">
              <div className="mb-4">
                <h2 className="font-display text-3xl font-bold text-on-surface mb-2">Calculus & Geometry</h2>
                <p className="text-on-surface-variant max-w-xl leading-relaxed">Advanced mathematical concepts focusing on derivative applications, integral calculus, and 3D Euclidean geometry foundations for high-performing secondary students.</p>
              </div>
              <div className="mt-auto flex flex-wrap gap-3">
                <button className="bg-primary hover:bg-primary-container text-white px-6 py-3 rounded-md font-semibold transition-all flex items-center justify-center gap-2">
                  <span className="material-symbols-outlined text-sm">description</span>
                  Course Syllabus
                </button>
                <button className="bg-surface-container-high text-primary px-6 py-3 rounded-md font-semibold hover:bg-surface-variant transition-all">
                  Learning Materials
                </button>
              </div>
            </div>
            <div className="absolute -right-20 -top-20 w-64 h-64 bg-primary/5 rounded-full blur-3xl"></div>
            <div className="absolute right-8 top-8 opacity-10 hidden md:block">
              <span className="material-symbols-outlined text-9xl">functions</span>
            </div>
          </div>
          
          {/* Quick Actions & AI Insight */}
          <div className="space-y-6">
            <Card className="p-6 border border-outline-variant/10 shadow-sm">
              <h3 className="font-display font-bold text-slate-800 mb-4 flex items-center gap-2">
                <span className="material-symbols-outlined text-amber-600">bolt</span> Quick Actions
              </h3>
              <div className="grid grid-cols-1 gap-2">
                <Link to="/attendance/mark" className="flex items-center justify-between p-3 rounded-md hover:bg-surface-container-low transition-colors text-sm font-semibold text-slate-700 border border-transparent hover:border-outline-variant/20">
                  <span className="flex items-center gap-3"><span className="material-symbols-outlined text-primary">how_to_reg</span> Mark Attendance</span>
                  <span className="material-symbols-outlined text-xs">chevron_right</span>
                </Link>
                <Link to="/assignments/create" className="flex items-center justify-between p-3 rounded-md hover:bg-surface-container-low transition-colors text-sm font-semibold text-slate-700 border border-transparent hover:border-outline-variant/20">
                  <span className="flex items-center gap-3"><span className="material-symbols-outlined text-primary">add_task</span> Create Assignment</span>
                  <span className="material-symbols-outlined text-xs">chevron_right</span>
                </Link>
                <button className="flex items-center justify-between p-3 rounded-md hover:bg-surface-container-low transition-colors text-sm font-semibold text-slate-700 border border-transparent hover:border-outline-variant/20 outline-none block w-full">
                  <span className="flex items-center gap-3"><span className="material-symbols-outlined text-primary">insights</span> View Analytics</span>
                  <span className="material-symbols-outlined text-xs">chevron_right</span>
                </button>
              </div>
            </Card>
            <div className="bg-orange-50 rounded-lg p-6 relative overflow-hidden border border-amber-900/10">
              <div className="flex gap-4 items-start relative z-10">
                <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-[#924700] shrink-0 shadow-sm">
                  <span className="material-symbols-outlined">psychology</span>
                </div>
                <div>
                  <h4 className="font-display font-bold text-[#b75b00] mb-1">AI Insight</h4>
                  <p className="text-sm text-[#723600] leading-snug">3 students dropped 10% in attendance over the last 14 days. This may impact final grades.</p>
                  <button className="mt-4 bg-[#723600] text-white text-xs font-bold py-2 px-4 rounded-md uppercase tracking-wider hover:opacity-90">Generate Outreach</button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Grid */}
        <section className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          <Card className="p-6 border border-outline-variant/5 shadow-sm">
            <p className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-2">Total Students</p>
            <div className="flex items-end justify-between">
              <p className="text-3xl font-display font-extrabold text-on-surface">32</p>
              <span className="text-xs font-semibold text-slate-400">Capacity: 35</span>
            </div>
          </Card>
          <Card className="p-6 border border-outline-variant/5 shadow-sm">
            <p className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-2">Avg Performance</p>
            <div className="flex items-end justify-between">
              <p className="text-3xl font-display font-extrabold text-primary">84.5%</p>
              <span className="flex items-center text-xs font-bold text-green-600 mb-1">
                <span className="material-symbols-outlined text-sm">trending_up</span> +2.1
              </span>
            </div>
          </Card>
          <Card className="p-6 border border-outline-variant/5 shadow-sm">
            <p className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-2">Attendance Rate</p>
            <div className="flex flex-col mb-1 min-w-0 flex-1">
              <div className="flex items-end justify-between">
                <p className="text-3xl font-display font-extrabold text-on-surface mb-2">96.2%</p>
                <div className="w-16 h-1.5 bg-slate-100 rounded-full mb-3 overflow-hidden ml-2">
                  <div className="bg-primary h-full w-[96%]"></div>
                </div>
              </div>
            </div>
          </Card>
          <Card className="p-6 border border-outline-variant/5 shadow-sm">
            <p className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-2">Submissions</p>
            <div className="flex items-end justify-between">
              <p className="text-3xl font-display font-extrabold text-on-surface">28<span className="text-xl text-on-surface-variant font-medium">/32</span></p>
              <span className="text-xs font-semibold text-red-600 px-2 py-0.5 bg-red-50 rounded-full mb-1">4 Pending</span>
            </div>
          </Card>
        </section>

        {/* Main Interactive Tabs Section */}
        <section className="space-y-6">
          <div className="flex items-center gap-8 border-b border-outline-variant/20 overflow-x-auto pb-1">
            <button className="pb-3 px-2 font-display font-bold text-primary border-b-2 border-primary transition-all whitespace-nowrap">Students</button>
            <button className="pb-3 px-2 font-display font-bold text-slate-400 hover:text-slate-600 transition-all whitespace-nowrap outline-none">Assignments</button>
            <button className="pb-3 px-2 font-display font-bold text-slate-400 hover:text-slate-600 transition-all whitespace-nowrap outline-none">Attendance</button>
            <button className="pb-3 px-2 font-display font-bold text-slate-400 hover:text-slate-600 transition-all whitespace-nowrap outline-none">Grades</button>
          </div>
          
          <div className="grid grid-cols-1 xl:grid-cols-3 gap-8 items-start">
            {/* Student Table Canvas */}
            <Card className="xl:col-span-2 p-0 overflow-hidden border border-outline-variant/10 shadow-sm" shadow="sm">
              <div className="p-6 flex justify-between items-center border-b border-surface-container-low">
                <h3 className="font-display font-bold text-on-surface">Class Roster</h3>
                <button className="text-primary text-sm font-bold flex items-center gap-1 hover:opacity-80">
                  <span className="material-symbols-outlined text-sm">filter_list</span> Filter
                </button>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="bg-surface-container-low/50">
                      <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase tracking-widest">Student</th>
                      <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase tracking-widest hidden sm:table-cell">Roll No.</th>
                      <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase tracking-widest">Attendance</th>
                      <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase tracking-widest">Grade</th>
                      <th className="px-6 py-4"></th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-surface-container-low/50">
                    {students.map((student) => (
                      <tr key={student.id} className="hover:bg-slate-50 transition-colors">
                        <td className="px-6 py-4">
                          <div className="flex items-center gap-3">
                            <div className="w-8 h-8 rounded-full bg-slate-200 overflow-hidden shrink-0">
                              <img alt="Student" src={student.img} className="w-full h-full object-cover" />
                            </div>
                            <span className="font-semibold text-slate-700">{student.name}</span>
                          </div>
                        </td>
                        <td className="px-6 py-4 font-mono text-sm text-slate-500 hidden sm:table-cell">{student.roll}</td>
                        <td className="px-6 py-4">
                          <div className="flex flex-col sm:flex-row sm:items-center gap-2">
                            <span className="text-sm font-semibold text-slate-700">{student.att}%</span>
                            <div className="w-12 h-1 bg-slate-100 rounded-full overflow-hidden shrink-0 hidden sm:block">
                              <div className={`bg-${student.att > 85 ? 'green' : 'orange'}-500 h-full`} style={{ width: `${student.att}%` }}></div>
                            </div>
                          </div>
                        </td>
                        <td className="px-6 py-4">
                          <span className={`inline-flex px-2 py-1 rounded-md bg-${student.gradeColor}-50 text-${student.gradeColor}-700 text-xs font-bold`}>{student.grade}</span>
                        </td>
                        <td className="px-6 py-4 text-right">
                          <button className="material-symbols-outlined text-slate-300 hover:text-primary transition-colors outline-none cursor-pointer">more_vert</button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <div className="p-4 bg-slate-50/50 text-center border-t border-slate-100 max-w-full overflow-hidden block">
                <button className="text-xs font-bold text-primary uppercase tracking-widest hover:underline transition-all block w-full outline-none">View All 32 Students</button>
              </div>
            </Card>

            {/* Side Panels */}
            <div className="space-y-6">
              {/* Recent Submissions */}
              <Card className="p-6 border border-outline-variant/10 shadow-sm">
                <h3 className="font-display font-bold text-on-surface mb-6">Recent Submissions</h3>
                <div className="space-y-5">
                  <div className="flex gap-4 items-start">
                    <div className="w-10 h-10 rounded-md bg-blue-50 flex items-center justify-center shrink-0">
                      <span className="material-symbols-outlined text-blue-600">file_present</span>
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-bold text-slate-700 truncate">Vector Calculus Quiz</p>
                      <p className="text-xs text-slate-500">8 new submissions since yesterday</p>
                      <div className="mt-2 w-full h-1 bg-slate-100 rounded-full">
                        <div className="bg-primary h-full w-[87%] rounded-full"></div>
                      </div>
                    </div>
                  </div>
                  <div className="flex gap-4 items-start">
                    <div className="w-10 h-10 rounded-md bg-purple-50 flex items-center justify-center shrink-0">
                      <span className="material-symbols-outlined text-purple-600">draw</span>
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-bold text-slate-700 truncate">Euclidean Proofs Workshop</p>
                      <p className="text-xs text-slate-500">Completed 32/32</p>
                      <span className="mt-2 inline-flex items-center gap-1 text-[10px] font-bold text-green-600 uppercase">All Graded</span>
                    </div>
                  </div>
                </div>
                <button className="w-full mt-6 py-3 border border-slate-200 rounded-md text-xs font-bold text-slate-600 hover:bg-slate-50 transition-all uppercase tracking-widest outline-none">Open Gradebook</button>
              </Card>
              
              {/* Class Progress Card */}
              <div className="bg-primary rounded-lg p-6 text-white overflow-hidden relative group">
                <h3 className="font-display font-bold text-lg mb-4 relative z-10">Curriculum Progress</h3>
                <div className="relative z-10">
                  <div className="flex justify-between items-end mb-2">
                    <span className="text-4xl font-display font-extrabold">64%</span>
                    <span className="text-xs font-semibold opacity-80 pb-1">Topic 8 of 12</span>
                  </div>
                  <div className="w-full h-2 bg-white/20 rounded-full overflow-hidden">
                    <div className="bg-white h-full w-[64%]"></div>
                  </div>
                  <p className="mt-4 text-xs font-medium leading-relaxed opacity-90">Current: Introduction to Derivatives and the Power Rule. Next: Chain Rule Applications.</p>
                </div>
                <div className="absolute -right-4 -bottom-4 opacity-10 rotate-12 group-hover:rotate-0 transition-transform hidden md:block">
                  <span className="material-symbols-outlined text-[120px]">architecture</span>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </MainLayout>
  );
};

export default ClassPerformanceManagement;

import React from 'react';
import MainLayout from "../../components/erp/teacher/MainLayout";
import Button from "../../components/erp/teacher/Button";
import { useNavigate } from "react-router-dom";

const assignments = [
  {
    id: 1,
    title: 'Quadratic Equation Worksheet',
    subtitle: 'Chapter 4: Advanced Algebra',
    icon: 'functions',
    iconColor: 'blue',
    class: 'Grade 10-A',
    subject: 'Mathematics',
    submissionsCount: 28,
    totalStudents: 32,
    percent: 87,
    dueDate: 'Oct 25, 2023',
    status: 'Published',
    statusColor: 'green'
  },
  {
    id: 2,
    title: 'Thermodynamics Lab Report',
    subtitle: 'Unit 2: Heat and Motion',
    icon: 'science',
    iconColor: 'purple',
    class: 'Grade 11-B',
    subject: 'Physics',
    submissionsCount: 15,
    totalStudents: 24,
    percent: 62,
    dueDate: 'Oct 28, 2023',
    status: 'Published',
    statusColor: 'green'
  },
  {
    id: 3,
    title: 'Python Sorting Algorithms',
    subtitle: 'Module 3: Computational Thinking',
    icon: 'code',
    iconColor: 'orange',
    class: 'Grade 12-C',
    subject: 'Computer Science',
    submissionsCount: 0,
    totalStudents: 18,
    percent: 0,
    dueDate: 'Nov 02, 2023',
    status: 'Draft',
    statusColor: 'slate'
  }
];

const AssignmentListPage = () => {
  const navigate = useNavigate();
  return (
    <MainLayout title="Assignments">
      {/* Page Header Section */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
        <div>
          <nav className="flex text-xs text-on-surface-variant mb-2 space-x-2">
            <span className="hover:text-primary cursor-pointer">Dashboard</span>
            <span>/</span>
            <span className="font-semibold text-on-surface">Assignments</span>
          </nav>
          <h2 className="text-3xl font-extrabold font-display text-on-surface tracking-tight">Assignments</h2>
          <p className="text-on-surface-variant text-sm mt-1">Manage, track and grade student submissions across all your classes.</p>
        </div>
        <button
onClick={() => navigate("/teacher/assignments/create")}
className="px-5 py-2 bg-primary text-white rounded-md font-semibold text-sm hover:opacity-90 transition"
>

Create Assignment

</button>
      </div>

      {/* Bento Filter Bar */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
        <div className="md:col-span-2 bg-surface-container-lowest p-4 rounded-xl shadow-sm flex items-center space-x-4">
          <span className="material-symbols-outlined text-outline">search</span>
          <input className="w-full bg-transparent border-none focus:ring-0 text-sm font-body outline-none" placeholder="Search by title, topic or keyword..." type="text" />
        </div>
        <div className="bg-surface-container-lowest p-1 rounded-xl shadow-sm flex items-center">
          <div className="flex-1 px-4">
            <p className="text-[10px] uppercase tracking-wider text-outline font-bold">Class</p>
            <select className="w-full bg-transparent border-none p-0 focus:ring-0 text-sm font-semibold text-on-surface cursor-pointer outline-none">
              <option>All Classes</option>
              <option>Grade 10-A</option>
              <option>Grade 11-B</option>
              <option>Grade 12-C</option>
            </select>
          </div>
        </div>
        <div className="bg-surface-container-lowest p-1 rounded-xl shadow-sm flex items-center">
          <div className="flex-1 px-4">
            <p className="text-[10px] uppercase tracking-wider text-outline font-bold">Subject</p>
            <select className="w-full bg-transparent border-none p-0 focus:ring-0 text-sm font-semibold text-on-surface cursor-pointer outline-none">
              <option>All Subjects</option>
              <option>Mathematics</option>
              <option>Physics</option>
              <option>Computer Science</option>
            </select>
          </div>
        </div>
      </div>

      {/* Main Data Canvas */}
      <div className="bg-surface-container-lowest rounded-xl shadow-sm overflow-hidden mb-12">
        <div className="flex border-b border-slate-50 px-6 overflow-x-auto">
          <button className="px-6 py-4 text-sm font-semibold text-primary border-b-2 border-primary whitespace-nowrap">All Assignments</button>
          <button className="px-6 py-4 text-sm font-medium text-on-surface-variant hover:text-on-surface transition-colors whitespace-nowrap">Drafts (4)</button>
          <button className="px-6 py-4 text-sm font-medium text-on-surface-variant hover:text-on-surface transition-colors whitespace-nowrap">Published (12)</button>
          <button className="px-6 py-4 text-sm font-medium text-on-surface-variant hover:text-on-surface transition-colors whitespace-nowrap">Closed (45)</button>
        </div>
        
        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead className="bg-surface-container-low/30">
              <tr>
                <th className="px-6 py-4 text-xs font-bold text-outline-variant uppercase tracking-widest hidden md:table-cell">Assignment Title</th>
                <th className="px-6 py-4 text-xs font-bold text-outline-variant uppercase tracking-widest">Class & Subject</th>
                <th className="px-6 py-4 text-xs font-bold text-outline-variant uppercase tracking-widest text-center">Submissions</th>
                <th className="px-6 py-4 text-xs font-bold text-outline-variant uppercase tracking-widest">Due Date</th>
                <th className="px-6 py-4 text-xs font-bold text-outline-variant uppercase tracking-widest">Status</th>
                <th className="px-6 py-4 text-xs font-bold text-outline-variant uppercase tracking-widest text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-50">
              {assignments.map(item => (
                <tr key={item.id} className="hover:bg-surface-container-low transition-colors group">
                  <td className="px-6 py-5">
                    <div className="flex items-center">
                      <div className={`w-10 h-10 rounded-lg bg-${item.iconColor}-100 flex items-center justify-center text-${item.iconColor}-600 mr-4`}>
                        <span className="material-symbols-outlined">{item.icon}</span>
                      </div>
                      <div>
                        <p className="font-semibold text-on-surface text-sm">{item.title}</p>
                        <p className="text-xs text-on-surface-variant mt-0.5">{item.subtitle}</p>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-5">
                    <span className="text-sm font-medium text-on-surface block">{item.class}</span>
                    <span className="text-[11px] text-on-surface-variant px-2 py-0.5 bg-surface-container-low rounded-full">{item.subject}</span>
                  </td>
                  <td className="px-6 py-5">
                    <div className="flex flex-col items-center">
                      <p className="text-sm font-bold text-on-surface">{item.submissionsCount} / {item.totalStudents}</p>
                      <div className="w-24 h-1.5 bg-slate-200 rounded-full mt-2 overflow-hidden">
                        <div className="bg-primary h-full" style={{ width: `${item.percent}%` }}></div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-5">
                    <div className="flex items-center text-sm text-on-surface font-medium">
                      <span className="material-symbols-outlined text-xs mr-2 text-outline">calendar_today</span>
                      {item.dueDate}
                    </div>
                  </td>
                  <td className="px-6 py-5">
                    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold bg-${item.statusColor}-100 text-${item.statusColor}-700`}>
                      <span className={`w-1.5 h-1.5 rounded-full bg-${item.statusColor}-500 mr-2`}></span>
                      {item.status}
                    </span>
                  </td>
                  <td className="px-6 py-5 text-right">
                    <div className="flex items-center justify-end space-x-2 opacity-0 group-hover:opacity-100 transition-opacity">
                      <button className="p-2 text-primary hover:bg-primary/10 rounded-md transition-colors">
                        <span className="material-symbols-outlined text-xl">visibility</span>
                      </button>
                      <button className="p-2 text-on-surface-variant hover:bg-slate-100 rounded-md transition-colors">
                        <span className="material-symbols-outlined text-xl">edit</span>
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      
      {/* Contextual Insight (Bento Bottom) */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 bg-gradient-to-br from-blue-700 to-blue-900 rounded-xl p-8 text-white relative overflow-hidden flex flex-col justify-center">
          <div className="relative z-10 max-w-md">
            <h3 className="text-2xl font-bold font-display mb-2">Automated Grading Assistant</h3>
            <p className="text-blue-100 text-sm mb-6 leading-relaxed">Let AI Architect help you scan and highlight key themes in student submissions for the "Python Sorting Algorithms" assignment. Reduce grading time by up to 40%.</p>
            <button className="bg-white text-blue-700 px-6 py-2 rounded-md font-bold text-sm hover:bg-blue-50 transition-colors shadow-xl">Enable AI Assistant</button>
          </div>
          <div className="absolute right-12 top-1/2 -translate-y-1/2 opacity-20 hidden md:block">
            <span className="material-symbols-outlined text-[160px]" style={{ fontVariationSettings: "'FILL' 1" }}>auto_awesome</span>
          </div>
        </div>
        <div className="bg-surface-container-high rounded-xl p-6 flex flex-col justify-between">
          <div>
            <h4 className="font-bold font-display text-on-surface mb-1">Submission Trend</h4>
            <p className="text-xs text-on-surface-variant">Weekly engagement levels</p>
          </div>
          <div className="h-24 flex items-end justify-between px-2 gap-2 mt-4">
            {[40, 60, 30, 85, 50, 70, 90].map((h, i) => (
              <div key={i} className={`w-full ${h === 85 ? 'bg-primary' : 'bg-primary/20'} rounded-t-sm h-[${h}%]`}></div>
            ))}
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default AssignmentListPage;

import React from 'react';
import { Link } from 'react-router-dom';
import MainLayout from "../../components/erp/teacher/MainLayout";
import Button from "../../components/erp/teacher/Button";
import Card from "../../components/erp/teacher/Card";


const submissions = [
  { id: 1, name: 'Aaron Anderson', initials: 'AA', roll: '10A01', status: 'On Time', statusClass: 'bg-green-100 text-green-700', date: 'Oct 24, 04:15 PM', marks: '45', color: 'blue' },
  { id: 2, name: 'Bella Barnes', initials: 'BB', roll: '10A05', status: 'Late', statusClass: 'bg-orange-100 text-orange-700', date: 'Oct 25, 08:30 AM', marks: '38', color: 'purple' },
  { id: 3, name: 'Caleb Carter', initials: 'CC', roll: '10A12', status: 'Pending', statusClass: 'bg-red-100 text-red-700', date: '—', marks: '—', color: 'slate' },
];

const AssignmentDetailPage = () => {
  return (
    <MainLayout title="Assignments">
      {/* Back Navigation & Page Title */}
      <div className="mb-8 flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <Link className="inline-flex items-center text-primary font-medium text-sm hover:underline mb-2" to="/assignments">
            <span className="material-symbols-outlined text-sm mr-1">arrow_back</span>
            Back to Assignments
          </Link>
          <h2 className="font-display text-3xl font-extrabold tracking-tight text-on-surface">Assignment Detail</h2>
        </div>
        <div className="flex gap-3">
          <Button variant="secondary">Edit Assignment</Button>
          <Button variant="primary">Download All Submissions</Button>
        </div>
      </div>

      {/* Top Section: Grid Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
        {/* Assignment Summary Card */}
        <Card className="lg:col-span-2 overflow-hidden shadow-ambient" style={{boxShadow: '0px 12px 32px rgba(11, 28, 48, 0.06)'}}>
          <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full -mr-16 -mt-16"></div>
          <div className="flex justify-between items-start mb-6">
            <div>
              <span className="inline-block px-3 py-1 bg-blue-100 text-blue-800 text-xs font-bold rounded-full mb-3">MATHEMATICS</span>
              <h3 className="font-display text-2xl font-bold text-on-surface mb-1">Quadratic Equation Worksheet</h3>
              <p className="text-on-surface-variant text-sm flex items-center">
                <span className="material-symbols-outlined text-sm mr-1">school</span> Class 10-A
              </p>
            </div>
            <div className="text-right">
              <p className="text-xs text-on-surface-variant font-medium uppercase tracking-wider mb-1">Due Date</p>
              <p className="font-display font-bold text-red-600">Oct 25, 2023</p>
            </div>
          </div>
          <div className="mb-6">
            <h4 className="text-xs font-bold text-on-surface-variant uppercase tracking-widest mb-2">Instructions</h4>
            <p className="text-on-surface text-sm leading-relaxed">
              Complete all 15 problems from the attached PDF. Show your step-by-step derivation for the roots of the equations. Submissions must be in a single PDF format. Clear handwriting is mandatory for offline scan uploads.
            </p>
          </div>
          <div>
            <h4 className="text-xs font-bold text-on-surface-variant uppercase tracking-widest mb-3">Attachment</h4>
            <div className="flex items-center p-3 bg-surface-container-low rounded-md group hover:bg-surface-container-high transition-colors cursor-pointer w-fit">
              <span className="material-symbols-outlined text-primary mr-3">picture_as_pdf</span>
              <div className="mr-6">
                <p className="text-sm font-semibold text-on-surface">quadratic_equations_v2.pdf</p>
                <p className="text-xs text-on-surface-variant">1.2 MB • Oct 18 Uploaded</p>
              </div>
              <span className="material-symbols-outlined text-outline group-hover:text-primary">download</span>
            </div>
          </div>
        </Card>

        {/* Submission Summary Card */}
        <Card className="flex flex-col justify-between shadow-ambient" style={{boxShadow: '0px 12px 32px rgba(11, 28, 48, 0.06)'}}>
          <h4 className="font-display text-lg font-bold text-on-surface mb-6">Submission Status</h4>
          <div className="space-y-6">
            <div className="flex items-end justify-between">
              <div>
                <p className="text-3xl font-display font-extrabold text-on-surface">28<span className="text-sm font-normal text-on-surface-variant ml-1">/ 32</span></p>
                <p className="text-sm text-on-surface-variant">Total Submitted</p>
              </div>
              <div className="w-16 h-16 relative">
                <svg className="w-full h-full transform -rotate-90">
                  <circle className="text-slate-100" cx="32" cy="32" fill="transparent" r="28" stroke="currentColor" strokeWidth="6"></circle>
                  <circle className="text-primary" cx="32" cy="32" fill="transparent" r="28" stroke="currentColor" strokeDasharray="175" strokeDashoffset="35" strokeWidth="6"></circle>
                </svg>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="p-3 bg-red-50 rounded-md">
                <p className="text-red-600 font-bold text-lg">04</p>
                <p className="text-xs text-red-800 font-medium">Pending</p>
              </div>
              <div className="p-3 bg-orange-50 rounded-md">
                <p className="text-tertiary font-bold text-lg">06</p>
                <p className="text-xs text-amber-800 font-medium">Late</p>
              </div>
            </div>
          </div>
          <div className="mt-8 pt-6 border-t border-slate-100">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm font-medium">Average Grade</span>
              <span className="text-sm font-bold text-primary">B+ (84%)</span>
            </div>
            <div className="w-full bg-slate-100 h-1.5 rounded-full overflow-hidden">
              <div className="bg-primary h-full w-[84%]"></div>
            </div>
          </div>
        </Card>
      </div>

      {/* Middle Section: AI Insights */}
      <div className="mb-8 p-6 bg-orange-50 rounded-lg border border-tertiary/10 flex flex-col md:flex-row items-center gap-6">
        <div className="bg-white/50 p-3 rounded-full">
          <span className="material-symbols-outlined text-tertiary text-3xl" style={{ fontVariationSettings: "'FILL' 1" }}>auto_awesome</span>
        </div>
        <div className="flex-1">
          <h4 className="font-display font-bold text-amber-900 mb-1">AI Performance Insight</h4>
          <p className="text-amber-800/80 text-sm">
            Most students lost marks in <span className="font-bold">Question 3 (Real-world Application)</span>. Concept application needs improvement. 12 students struggled specifically with discriminant analysis.
          </p>
        </div>
        <button className="whitespace-nowrap bg-tertiary text-white px-6 py-2.5 rounded-md font-semibold text-sm hover:bg-amber-800 transition-colors shadow-sm">
          Recommend Practice Topic
        </button>
      </div>

      {/* Bottom Section: Submissions Table */}
      <Card className="p-0 overflow-hidden shadow-ambient" style={{boxShadow: '0px 12px 32px rgba(11, 28, 48, 0.06)'}}>
        <div className="px-6 py-5 flex flex-col sm:flex-row sm:justify-between sm:items-center border-b border-slate-100 gap-4">
          <h4 className="font-display text-lg font-bold text-on-surface">Student Submissions</h4>
          <div className="flex items-center gap-4">
            <div className="relative">
              <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-outline text-sm">search</span>
              <input className="pl-10 pr-4 py-2 bg-surface-container-low border-none rounded-md text-sm focus:ring-2 focus:ring-primary/20 sm:w-64 outline-none" placeholder="Search student..." type="text" />
            </div>
            <button className="flex items-center gap-2 text-sm font-medium text-on-surface-variant hover:text-primary">
              <span className="material-symbols-outlined text-sm">filter_list</span> Filter
            </button>
          </div>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-surface-container-low/50">
                <th className="px-6 py-4 text-xs font-bold text-on-surface-variant uppercase tracking-widest">Student Name</th>
                <th className="px-6 py-4 text-xs font-bold text-on-surface-variant uppercase tracking-widest">Roll No.</th>
                <th className="px-6 py-4 text-xs font-bold text-on-surface-variant uppercase tracking-widest">Status</th>
                <th className="px-6 py-4 text-xs font-bold text-on-surface-variant uppercase tracking-widest">Submission Time</th>
                <th className="px-6 py-4 text-xs font-bold text-on-surface-variant uppercase tracking-widest text-center">Marks</th>
                <th className="px-6 py-4 text-xs font-bold text-on-surface-variant uppercase tracking-widest text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {submissions.map((sub) => (
                <tr key={sub.id} className="hover:bg-slate-50 transition-colors">
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                      <div className={`w-8 h-8 rounded-full bg-${sub.color}-100 flex items-center justify-center text-${sub.color}-600 font-bold text-xs`}>{sub.initials}</div>
                      <span className="text-sm font-semibold text-on-surface">{sub.name}</span>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-sm text-on-surface-variant">{sub.roll}</td>
                  <td className="px-6 py-4">
                    <span className={`px-2.5 py-1 ${sub.statusClass} text-xs font-bold rounded-full`}>{sub.status}</span>
                  </td>
                  <td className="px-6 py-4 text-sm text-on-surface-variant">{sub.date}</td>
                  <td className="px-6 py-4 text-center">
                    {sub.marks === '—' ? (
                      <span className="text-sm font-bold text-outline">—</span>
                    ) : (
                      <><span className="text-sm font-bold text-on-surface">{sub.marks}</span><span className="text-xs text-on-surface-variant">/50</span></>
                    )}
                  </td>
                  <td className="px-6 py-4 text-right">
                    <div className="flex justify-end gap-2">
                       {sub.marks === '—' ? (
                         <>
                          <button className="p-2 text-outline cursor-not-allowed" disabled><span className="material-symbols-outlined text-lg">visibility</span></button>
                          <button className="p-2 text-outline cursor-not-allowed" disabled><span className="material-symbols-outlined text-lg">border_color</span></button>
                          <button className="p-2 text-primary hover:bg-blue-50 rounded-md transition-colors" title="Send Reminder"><span className="material-symbols-outlined text-lg">mail</span></button>
                         </>
                       ) : (
                         <>
                          <button className="p-2 text-primary hover:bg-blue-50 rounded-md transition-colors" title="View Submission"><span className="material-symbols-outlined text-lg">visibility</span></button>
                          <button className="p-2 text-secondary hover:bg-purple-50 rounded-md transition-colors" title="Grade"><span className="material-symbols-outlined text-lg">border_color</span></button>
                          <button className="p-2 text-outline hover:text-on-surface rounded-md transition-colors" title="Download"><span className="material-symbols-outlined text-lg">download</span></button>
                         </>
                       )}
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="px-6 py-4 bg-surface-container-low/30 flex items-center justify-between">
          <p className="text-xs text-on-surface-variant font-medium">Showing 1 to 10 of 32 submissions</p>
          <div className="flex gap-2">
            <button className="p-1 rounded text-outline disabled:opacity-50" disabled><span className="material-symbols-outlined">chevron_left</span></button>
            <button className="p-1 rounded bg-primary text-white text-xs font-bold w-6 h-6 flex items-center justify-center">1</button>
            <button className="p-1 rounded hover:bg-white text-outline text-xs font-bold w-6 h-6 flex items-center justify-center border border-transparent hover:border-slate-200">2</button>
            <button className="p-1 rounded hover:bg-white text-outline">
              <span className="material-symbols-outlined">chevron_right</span>
            </button>
          </div>
        </div>
      </Card>
    </MainLayout>
  );
};

export default AssignmentDetailPage;

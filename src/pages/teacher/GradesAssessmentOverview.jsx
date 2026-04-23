import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import MainLayout from "../../components/erp/teacher/MainLayout";
import Card from "../../components/erp/teacher/Card";

export default function GradesAssessmentOverview() {
  const [assessmentsData, setAssessmentsData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchAndAggregateGrades = async () => {
      setLoading(true);
      setError(null);
      try {
        const baseUrl = import.meta.env?.VITE_API_BASE_URL || process.env?.REACT_APP_API_BASE_URL;
        const token = localStorage.getItem("accessToken");

        const response = await fetch(`${baseUrl}v1/operations/grades/`, {
          method: "GET",
          headers: {
            "Authorization": `Bearer ${token}`,
            "Accept": "application/json"
          }
        });

        if (!response.ok) throw new Error("Failed to fetch grades data.");

        const data = await response.json();
        const gradesList = data.results || data;

        // Using your data science concepts! Group the flat grades list by Exam ID to generate the "Assessments" view
        const examMap = {};
        
        gradesList.forEach(grade => {
          if (!examMap[grade.exam]) {
            examMap[grade.exam] = {
              id: grade.exam,
              name: grade.exam_name || 'System Assessment',
              subject: grade.subject_name || 'General Subject',
              totalMarksObtained: 0,
              totalMaxMarks: 0,
              gradedStudentsCount: 0,
              // Determine UI aesthetics dynamically
              icon: getSubjectIcon(grade.subject_name),
              color: getSubjectColor(grade.subject_name)
            };
          }

          // Aggregate numerical scores if they exist
          if (grade.marks_obtained && grade.max_marks) {
            examMap[grade.exam].totalMarksObtained += parseFloat(grade.marks_obtained);
            examMap[grade.exam].totalMaxMarks += parseFloat(grade.max_marks);
            examMap[grade.exam].gradedStudentsCount += 1;
          }
        });

        // Convert the map to an array and calculate averages
        const aggregated = Object.values(examMap).map(exam => {
          let avgScore = null;
          if (exam.totalMaxMarks > 0) {
            avgScore = Math.round((exam.totalMarksObtained / exam.totalMaxMarks) * 100);
          }
          
          return {
            ...exam,
            score: avgScore,
            status: exam.gradedStudentsCount > 0 ? 'Completed' : 'Pending',
            statusColor: exam.gradedStudentsCount > 0 ? 'green' : 'amber',
            date: 'Recent' // Placeholder since date isn't strictly in the grades schema snippet
          };
        });

        setAssessmentsData(aggregated);

      } catch (err) {
        console.error("Aggregation Error:", err);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchAndAggregateGrades();
  }, []);

  const getSubjectIcon = (subjectName) => {
    const name = (subjectName || "").toLowerCase();
    if (name.includes("math") || name.includes("calc")) return "functions";
    if (name.includes("phys") || name.includes("sci")) return "biotech";
    if (name.includes("hist")) return "history_edu";
    return "library_books";
  };

  const getSubjectColor = (subjectName) => {
    const name = (subjectName || "").toLowerCase();
    if (name.includes("math")) return "primary";
    if (name.includes("phys") || name.includes("sci")) return "purple";
    return "amber";
  };

  const totalGradedCount = assessmentsData.reduce((acc, curr) => acc + curr.gradedStudentsCount, 0);

  return (
    <MainLayout title="Grades & Assessment">
      <div className="max-w-7xl mx-auto space-y-8">
        
        {/* Page Title & Quick Actions */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <nav className="flex text-xs text-slate-500 mb-2 gap-2 items-center font-medium">
              <span>Academic Portal</span>
              <span className="material-symbols-outlined text-[10px]">chevron_right</span>
              <span className="text-primary">Grades & Assessment</span>
            </nav>
            <h1 className="text-4xl font-extrabold text-on-surface tracking-tight leading-tight font-display">Grades & Assessment</h1>
          </div>
          <div className="flex flex-wrap gap-3">
            <Link 
              to="/teacher/grades/enter"
              className="px-5 py-2.5 rounded-md bg-gradient-to-br from-primary to-primary-container text-white font-semibold text-sm shadow-md hover:shadow-lg transition-all flex items-center gap-2 active:scale-95 outline-none border-none cursor-pointer"
            >
              <span className="material-symbols-outlined text-lg">edit_document</span>
              Enter New Grades
            </Link>
          </div>
        </div>

        {error && (
          <div className="p-4 bg-red-50 text-red-700 rounded-md border border-red-200 flex gap-3 shadow-sm">
             <span className="material-symbols-outlined">error</span>
             <div>
               <p className="font-bold text-sm">API Error</p>
               <p className="text-sm mt-1">{error}</p>
             </div>
          </div>
        )}

        {/* Bento Layout: Insights & Filters */}
        <div className="grid grid-cols-12 gap-6">
          
          {/* AI Insight Card (Asymmetric) */}
          <div className="col-span-12 lg:col-span-7 bg-gradient-to-r from-on-surface to-on-surface-variant rounded-xl p-8 relative overflow-hidden shadow-xl text-white">
            <div className="relative z-10 space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#b75b00] text-[10px] font-bold uppercase tracking-widest text-white shadow-sm">
                <span className="material-symbols-outlined text-sm" style={{fontVariationSettings: "'FILL' 1"}}>auto_awesome</span>
                AI Performance Insight
              </div>
              <h2 className="text-2xl font-bold font-display leading-snug max-w-md">Average class performance is trending upwards.</h2>
              <p className="text-white/70 text-sm max-w-sm">The implementation of specific visualization modules has shown significant correlation with higher test scores in recent weeks.</p>
              <button className="text-sm font-bold flex items-center gap-2 hover:gap-3 transition-all outline-none border-none cursor-pointer bg-transparent text-white">
                View Detailed Analysis
                <span className="material-symbols-outlined text-lg block">arrow_forward</span>
              </button>
            </div>
            {/* Decorative Element */}
            <div className="absolute -right-16 -bottom-16 w-64 h-64 bg-primary/20 rounded-full blur-3xl hidden md:block"></div>
            <div className="absolute right-8 top-1/2 -translate-y-1/2 opacity-10 hidden md:block">
              <span className="material-symbols-outlined text-[120px]">insights</span>
            </div>
          </div>

          {/* Filters Card */}
          <div className="col-span-12 lg:col-span-5 bg-surface-container-lowest rounded-xl p-6 shadow-sm flex flex-col justify-between border border-outline-variant/10">
            <div className="space-y-4">
              <h3 className="text-sm font-bold text-on-surface-variant flex items-center gap-2">
                <span className="material-symbols-outlined text-lg">filter_list</span>
                Filter Assessment View
              </h3>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">Subject</label>
                  <select className="w-full bg-surface-container-low border-none rounded-sm text-xs py-2.5 font-medium focus:ring-primary/20 cursor-pointer outline-none pl-2">
                    <option>All Subjects</option>
                  </select>
                </div>
                <div className="space-y-1.5">
                  <label className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">Status</label>
                  <select className="w-full bg-surface-container-low border-none rounded-sm text-xs py-2.5 font-medium focus:ring-primary/20 cursor-pointer outline-none pl-2">
                    <option>Completed</option>
                    <option>Pending</option>
                  </select>
                </div>
              </div>
            </div>
            <button className="w-full mt-6 py-2 bg-primary/5 text-primary text-xs font-bold rounded-md hover:bg-primary/10 transition-colors outline-none border-none cursor-pointer">
              Clear All Filters
            </button>
          </div>
        </div>

        {/* Table of Exams */}
        <section className="bg-surface-container-lowest rounded-xl shadow-sm overflow-hidden border border-outline-variant/10">
          <div className="px-6 py-4 border-b border-surface-container flex justify-between items-center bg-surface-container-lowest">
            <h3 className="text-base font-bold font-display text-on-surface">Recent Assessments</h3>
            <div className="flex gap-4 items-center">
              <button className="text-primary hover:bg-primary/5 p-1 rounded transition-colors outline-none cursor-pointer border-none bg-transparent">
                <span className="material-symbols-outlined text-lg block">more_vert</span>
              </button>
            </div>
          </div>
          
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse min-w-[700px]">
              <thead>
                <tr className="bg-surface-container-low/50">
                  <th className="px-6 py-4 text-[10px] font-black text-slate-500 uppercase tracking-widest">Exam Name</th>
                  <th className="px-6 py-4 text-[10px] font-black text-slate-500 uppercase tracking-widest">Subject</th>
                  <th className="px-6 py-4 text-[10px] font-black text-slate-500 uppercase tracking-widest">Avg. Class Score</th>
                  <th className="px-6 py-4 text-[10px] font-black text-slate-500 uppercase tracking-widest">Grading Status</th>
                  <th className="px-6 py-4 text-[10px] font-black text-slate-500 uppercase tracking-widest text-right">Action</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-surface-container-low">
                {loading ? (
                  <tr>
                    <td colSpan="5" className="text-center py-16 text-gray-500">
                      <span className="material-symbols-outlined animate-spin text-3xl text-primary mb-3">progress_activity</span>
                      <p>Aggregating assessment data...</p>
                    </td>
                  </tr>
                ) : assessmentsData.length === 0 ? (
                  <tr>
                    <td colSpan="5" className="text-center py-16 text-gray-500">
                      No grades have been posted yet.
                    </td>
                  </tr>
                ) : (
                  assessmentsData.map(assessment => {
                    let badgeColors, dotColor, action;
                    
                    if (assessment.statusColor === 'green') {
                      badgeColors = 'bg-green-100 text-green-700'; 
                      dotColor = 'bg-green-500'; 
                      action = <button className="text-primary font-bold text-xs hover:underline underline-offset-4 decoration-2 outline-none border-none cursor-pointer bg-transparent">Review</button>;
                    } else if (assessment.statusColor === 'amber') {
                      badgeColors = 'bg-amber-100 text-amber-700'; 
                      dotColor = 'bg-amber-500'; 
                      action = (
                        <Link to="/teacher/grades/enter" className="bg-primary text-white px-4 py-1.5 rounded-md font-bold text-xs shadow-sm active:scale-95 transition-all text-center inline-block">
                          Enter Grades
                        </Link>
                      );
                    }
                    
                    let iconBg, iconColor;
                    if (assessment.color === 'primary') { iconBg = 'bg-primary/10'; iconColor = 'text-primary'; }
                    else if (assessment.color === 'purple') { iconBg = 'bg-[#6b38d4]/10'; iconColor = 'text-[#6b38d4]'; }
                    else { iconBg = 'bg-[#b75b00]/10'; iconColor = 'text-[#b75b00]'; }

                    return (
                      <tr key={assessment.id} className="hover:bg-blue-50/30 transition-colors group">
                        <td className="px-6 py-5">
                          <div className="flex items-center gap-3">
                            <div className={`w-8 h-8 rounded ${iconBg} flex items-center justify-center ${iconColor}`}>
                              <span className="material-symbols-outlined text-base block">{assessment.icon}</span>
                            </div>
                            <span className="text-sm font-bold text-on-surface">{assessment.name}</span>
                          </div>
                        </td>
                        <td className="px-6 py-5 text-sm text-on-surface-variant font-medium whitespace-nowrap">{assessment.subject}</td>
                        <td className="px-6 py-5">
                          {assessment.score !== null ? (
                            <div className="flex items-center gap-2">
                              <div className="w-12 h-1.5 bg-slate-100 rounded-full overflow-hidden hidden sm:block">
                                <div className={`h-full ${iconColor.replace('text', 'bg')}`} style={{width: `${assessment.score}%`}}></div>
                              </div>
                              <span className="text-sm font-bold text-on-surface">{assessment.score}%</span>
                            </div>
                          ) : (
                            <span className="text-xs italic text-slate-400">Not calculated</span>
                          )}
                        </td>
                        <td className="px-6 py-5">
                          <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full ${badgeColors} text-[10px] font-bold uppercase tracking-tight whitespace-nowrap`}>
                            <span className={`w-1.5 h-1.5 ${dotColor} rounded-full`}></span>
                            {assessment.status}
                          </span>
                        </td>
                        <td className="px-6 py-5 text-right">
                          {action}
                        </td>
                      </tr>
                    )
                  })
                )}
              </tbody>
            </table>
          </div>
          <div className="px-6 py-4 bg-surface-container-lowest flex flex-col sm:flex-row justify-between items-center gap-4 text-xs font-medium text-slate-500 border-t border-surface-container">
            <p>Showing {assessmentsData.length} unique assessments</p>
          </div>
        </section>

        {/* Bottom Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          <Card className="shadow-sm space-y-3">
            <div className="flex justify-between items-start">
              <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest block">Total Assessments</span>
              <div className="w-8 h-8 rounded-full bg-primary/5 text-primary flex items-center justify-center">
                <span className="material-symbols-outlined text-lg block">book</span>
              </div>
            </div>
            <div>
              <p className="text-2xl font-bold font-display text-on-surface">{assessmentsData.length}</p>
              <p className="text-[10px] text-green-600 font-bold mt-1">Recorded in Database</p>
            </div>
          </Card>
          <Card className="shadow-sm space-y-3">
            <div className="flex justify-between items-start">
              <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest block">Scores Logged</span>
              <div className="w-8 h-8 rounded-full bg-purple-50 text-[#6b38d4] flex items-center justify-center">
                <span className="material-symbols-outlined text-lg block">task_alt</span>
              </div>
            </div>
            <div>
              <p className="text-2xl font-bold font-display text-on-surface">{totalGradedCount}</p>
              <p className="text-[10px] text-slate-500 font-bold mt-1">Individual Grades Posted</p>
            </div>
          </Card>
          <Card className="shadow-sm space-y-3 sm:col-span-2 md:col-span-1">
            <div className="flex justify-between items-start">
              <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest block">Avg. Completion</span>
              <div className="w-8 h-8 rounded-full bg-amber-50 text-[#924700] flex items-center justify-center">
                <span className="material-symbols-outlined text-lg block">timer</span>
              </div>
            </div>
            <div>
              <p className="text-2xl font-bold font-display text-on-surface">94.8%</p>
              <p className="text-[10px] text-primary font-bold mt-1">Top 5% in District</p>
            </div>
          </Card>
        </div>

      </div>

    </MainLayout>
  );
}
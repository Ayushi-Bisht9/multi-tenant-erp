import React, { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";

// Importing your real local components! (This restores the Sidebar)
import MainLayout from "../../components/erp/teacher/MainLayout";
import Button from "../../components/erp/teacher/Button";
import Card from "../../components/erp/teacher/Card";
import Input from "../../components/erp/teacher/Input";
import Select from "../../components/erp/teacher/Select";

export default function MyClassesHub() {
  const navigate = useNavigate();
  
  const [classes, setClasses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchTeacherClasses = async () => {
      try {
        const baseUrl = import.meta.env?.VITE_API_BASE_URL || process.env?.REACT_APP_API_BASE_URL;
        const token = localStorage.getItem("accessToken");

        // Fetch the assignments automatically filtered to the logged-in teacher's school 
        const response = await fetch(`${baseUrl}v1/academics/teacher-assignments/`, {
          method: "GET",
          headers: {
            "Authorization": `Bearer ${token}`,
            "Accept": "application/json"
          }
        });

        if (!response.ok) throw new Error("Failed to fetch assigned classes.");

        const data = await response.json();
        setClasses(data.results || data);
      } catch (err) {
        console.error(err);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchTeacherClasses();
  }, []);

  // Helper to dynamically color code subjects
  const getSubjectAesthetics = (subjectName) => {
    const name = (subjectName || "").toLowerCase();
    if (name.includes("math") || name.includes("calc")) return { icon: "functions", colorClass: "text-[#0058be]", bgClass: "bg-[#0058be]/10", borderClass: "border-[#0058be]/20" };
    if (name.includes("phys") || name.includes("bio") || name.includes("chem") || name.includes("sci")) return { icon: "biotech", colorClass: "text-[#6b38d4]", bgClass: "bg-[#6b38d4]/10", borderClass: "border-[#6b38d4]/20" };
    if (name.includes("hist") || name.includes("geo")) return { icon: "history_edu", colorClass: "text-[#924700]", bgClass: "bg-[#924700]/10", borderClass: "border-[#924700]/20" };
    if (name.includes("lit") || name.includes("eng")) return { icon: "menu_book", colorClass: "text-[#0f9d58]", bgClass: "bg-[#0f9d58]/10", borderClass: "border-[#0f9d58]/20" };
    if (name.includes("comp") || name.includes("tech")) return { icon: "computer", colorClass: "text-[#ba1a1a]", bgClass: "bg-[#ba1a1a]/10", borderClass: "border-[#ba1a1a]/20" };
    return { icon: "school", colorClass: "text-[#0058be]", bgClass: "bg-[#0058be]/10", borderClass: "border-[#0058be]/20" };
  };

  return (
    <MainLayout title="My Teaching Schedule">
      
      {/* Filter Section */}
      <section className="mb-10 flex flex-col lg:flex-row gap-6 items-end justify-between bg-white p-6 rounded-xl shadow-sm border border-gray-100">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full lg:w-3/4">
          <Input label="Search Directory" icon="search" placeholder="Search by class or subject..." />
          <Select label="Subject Filter" options={['All Subjects', ...Array.from(new Set(classes.map(c => c.subject_name)))]} />
          <Select label="Class/Section Filter" options={['All Sections', ...Array.from(new Set(classes.map(c => c.class_level_name)))]} />
        </div>
        <div className="flex gap-3 w-full lg:w-auto">
          <Button variant="secondary" className="w-full lg:w-auto justify-center">Reset</Button>
          <Button variant="primary" className="w-full lg:w-auto justify-center">
            <span className="material-symbols-outlined text-[18px]">filter_alt</span>
            Apply
          </Button>
        </div>
      </section>

      {error && (
        <div className="mb-8 p-4 bg-red-50 text-red-700 rounded-md border border-red-200 shadow-sm flex items-center gap-3">
          <span className="material-symbols-outlined">error</span>
          {error}
        </div>
      )}

      {/* Classes Grid */}
      {loading ? (
        <div className="py-20 flex flex-col items-center justify-center text-gray-500">
          <span className="material-symbols-outlined animate-spin text-4xl text-[#0058be] mb-4">progress_activity</span>
          <p className="font-medium">Syncing class assignments with database...</p>
        </div>
      ) : classes.length === 0 ? (
        <div className="mt-8 flex flex-col items-center justify-center py-16 px-6 bg-white rounded-xl border border-dashed border-gray-300 text-center shadow-sm">
          <div className="w-16 h-16 bg-[#eff4ff] rounded-full flex items-center justify-center text-[#0058be] mb-4 shadow-sm">
            <span className="material-symbols-outlined text-3xl">event_busy</span>
          </div>
          <h3 className="text-xl font-bold text-slate-800 mb-2">No Classes Assigned</h3>
          <p className="text-gray-500 max-w-sm text-sm mb-6">
            You currently have no active teacher assignments in the database for this academic year.
          </p>
          <button className="bg-white border border-gray-200 text-slate-700 font-semibold px-8 py-3 rounded-md hover:bg-gray-50 transition-all shadow-sm flex items-center gap-2">
            <span className="material-symbols-outlined text-[18px]">mail</span>
            Contact Administrator
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          
          {/* Dynamic Classes Fetched from Django */}
          {classes.map((cls) => {
            const aes = getSubjectAesthetics(cls.subject_name);
            return (
              <Card key={cls.id} hoverable>
                <div className="flex justify-between items-start mb-6">
                  <div className={`${aes.bgClass} p-3 rounded-xl`}>
                    <span className={`material-symbols-outlined ${aes.colorClass} text-3xl`}>
                      {aes.icon}
                    </span>
                  </div>
                  <div className="flex flex-col items-end gap-2">
                    <div className={`px-3 py-1 rounded-full text-[10px] font-bold tracking-widest uppercase border ${aes.borderClass} ${aes.colorClass} bg-white shadow-sm`}>
                      Active
                    </div>
                    {cls.is_class_teacher && (
                      <span className="text-[10px] font-bold text-amber-600 bg-amber-50 px-2 py-0.5 rounded border border-amber-200 flex items-center gap-1">
                        <span className="material-symbols-outlined text-[12px]">star</span>
                        Class Teacher
                      </span>
                    )}
                  </div>
                </div>
                
                <div className="mb-8">
                  <h2 className="text-xl font-bold text-slate-800 mb-1 leading-tight">
                    {cls.class_level_name} - {cls.section_name}
                  </h2>
                  <p className="text-gray-500 text-sm font-medium">{cls.subject_name}</p>
                </div>
                
                <div className="grid grid-cols-2 gap-4 mb-8">
                  <div className="bg-[#f8f9ff] p-4 rounded-lg border border-gray-100">
                    <p className="text-[10px] uppercase font-bold text-gray-500 tracking-wider mb-1">Academic Year</p>
                    <div className="flex items-center gap-2">
                      <span className="material-symbols-outlined text-sm text-[#0058be]">calendar_today</span>
                      <span className="text-sm font-bold text-slate-800 truncate">{cls.academic_year_name}</span>
                    </div>
                  </div>
                  <div className="bg-[#f8f9ff] p-4 rounded-lg border border-gray-100">
                    <p className="text-[10px] uppercase font-bold text-gray-500 tracking-wider mb-1">Avg. Grade</p>
                    <div className="flex items-center gap-2">
                      <span className="material-symbols-outlined text-sm text-gray-400">horizontal_rule</span>
                      <span className="text-sm font-bold text-gray-500">Awaiting Data</span>
                    </div>
                  </div>
                </div>
                
                <button
                  onClick={() => navigate(`/teacher/classes/${cls.id}/performance`)}
                  className="mt-auto flex items-center justify-center gap-2 w-full py-3 bg-[#eff4ff] text-[#0058be] font-bold rounded-md hover:bg-[#0058be] hover:text-white transition-all duration-200 border border-blue-100"
                >
                  View Performance
                  <span className="material-symbols-outlined text-sm">arrow_forward</span>
                </button>
              </Card>
            );
          })}

          {/* Fixed AI Insight Card (If there's at least one class, suggest an insight for it) */}
          {classes.length > 0 && (
            <Card className="md:col-span-2 lg:col-span-1 bg-gradient-to-br from-[#0b1c30] to-[#1e3450] text-white border-transparent" hoverable>
              <div className="flex justify-between items-start mb-6">
                <div className="bg-white/10 p-3 rounded-xl border border-white/20">
                  <span className="material-symbols-outlined text-blue-300 text-3xl">psychology</span>
                </div>
                <div className="bg-purple-500/20 px-3 py-1 rounded-full text-[10px] font-bold text-purple-200 tracking-widest uppercase flex items-center gap-1 border border-purple-400/30">
                  <span className="material-symbols-outlined text-[12px]" style={{ fontVariationSettings: "'FILL' 1" }}>auto_awesome</span>
                  AI Insight Generated
                </div>
              </div>
              
              <div className="mb-6">
                <h2 className="text-xl font-bold mb-1">{classes[0].subject_name} ({classes[0].class_level_name})</h2>
                <p className="text-blue-200 text-sm font-medium">Predictive Engagement Model</p>
              </div>
              
              <div className="mb-8 p-4 bg-black/20 rounded-lg border border-white/10 flex items-start gap-3">
                <span className="material-symbols-outlined text-amber-400 shrink-0">warning</span>
                <p className="text-sm text-slate-200 leading-relaxed">
                  Based on historical trends, the upcoming module typically sees a <strong className="text-amber-400">12% drop in student engagement</strong>. We recommend adjusting the lesson plan.
                </p>
              </div>
              
              <button
                onClick={() => navigate("/teacher/analytics")}
                className="mt-auto flex items-center justify-center gap-2 w-full py-3 bg-white text-[#0b1c30] font-bold rounded-md hover:bg-gray-100 transition-all duration-200 shadow-md"
              >
                Review AI Recommendations
                <span className="material-symbols-outlined text-sm">arrow_forward</span>
              </button>
            </Card>
          )}

        </div>
      )}
    </MainLayout>
  );
}
import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import MainLayout from "../../components/erp/teacher/MainLayout";
import Card from "../../components/erp/teacher/Card";

export default function MarkAttendance() {
  const navigate = useNavigate();

  // Core Data States
  const [students, setStudents] = useState([]);
  const [academicYears, setAcademicYears] = useState([]);
  const [classLevels, setClassLevels] = useState([]);
  const [sections, setSections] = useState([]);

  // Payload Parameters required by the Django Attendance Model
  const [selectedYear, setSelectedYear] = useState("");
  const [selectedClass, setSelectedClass] = useState("");
  const [selectedSection, setSelectedSection] = useState("");
  const [attendanceDate, setAttendanceDate] = useState(new Date().toISOString().split('T')[0]);

  // UI States
  const [loading, setLoading] = useState(true);
  const [fetchingStudents, setFetchingStudents] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState(null);
  const [successMsg, setSuccessMsg] = useState(null);

  // 1. Initial Load: Fetch Context Dropdowns (Years, Classes, Sections)
  useEffect(() => {
    const fetchDropdowns = async () => {
      setLoading(true);
      try {
        const baseUrl = import.meta.env?.VITE_API_BASE_URL || process.env?.REACT_APP_API_BASE_URL;
        const token = localStorage.getItem("accessToken");
        const headers = { "Authorization": `Bearer ${token}`, "Accept": "application/json" };

        const [yearsRes, classesRes, sectionsRes] = await Promise.all([
          fetch(`${baseUrl}v1/academics/academic-years/`, { headers }),
          fetch(`${baseUrl}v1/academics/class-levels/`, { headers }),
          fetch(`${baseUrl}v1/academics/sections/`, { headers })
        ]);

        if (yearsRes.ok) {
          const data = await yearsRes.json();
          setAcademicYears(data.results || data);
        }
        if (classesRes.ok) {
          const data = await classesRes.json();
          setClassLevels(data.results || data);
        }
        if (sectionsRes.ok) {
          const data = await sectionsRes.json();
          setSections(data.results || data);
        }
      } catch (err) {
        console.error("Fetch Dropdowns Error:", err);
        setError("Failed to load context variables. Please check your connection.");
      } finally {
        setLoading(false);
      }
    };

    fetchDropdowns();
  }, []);

  // 2. Fetch Students specifically based on selected Class & Section
  useEffect(() => {
    // Only attempt to fetch if both class and section are selected
    if (!selectedClass || !selectedSection) {
      setStudents([]);
      return; 
    }

    const fetchClassRoster = async () => {
      setFetchingStudents(true);
      setError(null);
      setSuccessMsg(null);
      
      try {
        const baseUrl = import.meta.env?.VITE_API_BASE_URL || process.env?.REACT_APP_API_BASE_URL;
        const token = localStorage.getItem("accessToken");
        const headers = { "Authorization": `Bearer ${token}`, "Accept": "application/json" };

        // We filter the GET request. Your Django ViewSet needs `django-filter` to support this logic seamlessly!
        // E.g. /api/v1/profiles/students/?class_level=uuid&section=uuid
        const queryParams = new URLSearchParams({
           class_level: selectedClass,
           section: selectedSection
        }).toString();

        const response = await fetch(`${baseUrl}v1/profiles/students/?${queryParams}`, { headers });
        
        if (!response.ok) throw new Error("Failed to load student roster for this class.");

        const data = await response.json();
        const studentList = data.results || data;
        
        // Inject local state ('P'/'A'/'L' and 'remark')
        const rosterWithStatus = studentList.map(s => ({
          ...s,
          status: 'P', // Default to Present
          remark: ''
        }));
        
        setStudents(rosterWithStatus);

      } catch (err) {
        console.error("Fetch Roster Error:", err);
        setError(err.message);
        setStudents([]);
      } finally {
        setFetchingStudents(false);
      }
    };

    fetchClassRoster();
  }, [selectedClass, selectedSection]); // Re-run whenever these selections change

  const updateStatus = (id, newStatus) => {
    setStudents(students.map(s => s.id === id ? { ...s, status: newStatus } : s));
  };

  const updateRemark = (id, newRemark) => {
    setStudents(students.map(s => s.id === id ? { ...s, remark: newRemark } : s));
  };

  const markAllPresent = () => {
    setStudents(students.map(s => ({ ...s, status: 'P' })));
  };

  // Submit all records to Django using the bulk API
  const handleSubmitAttendance = async () => {
    if (!selectedYear || !selectedClass || !selectedSection || !attendanceDate) {
      setError("Please ensure Academic Year, Class Level, Section, and Date are selected before submitting.");
      window.scrollTo(0, 0);
      return;
    }

    if (students.length === 0) {
      setError("Cannot submit an empty roster.");
      return;
    }

    setSubmitting(true);
    setError(null);
    setSuccessMsg(null);

    try {
      const baseUrl = import.meta.env?.VITE_API_BASE_URL || process.env?.REACT_APP_API_BASE_URL;
      const token = localStorage.getItem("accessToken");

      const statusMap = { P: "Present", A: "Absent", L: "Late" };

      // Format payload for the efficient `bulk-record` endpoint
      const payload = {
        date: attendanceDate,
        academic_year_id: selectedYear,
        class_level_id: selectedClass,
        section_id: selectedSection,
        records: students.map(student => ({
          student_id: student.id,
          status: statusMap[student.status],
          remarks: student.remark || ""
        }))
      };

      const response = await fetch(`${baseUrl}v1/operations/attendance/bulk-record/`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${token}`
        },
        body: JSON.stringify(payload)
      });

      const data = await response.json();

      if (!response.ok) {
         let errorMsg = "Failed to sync records.";
         if (typeof data === "object") {
            errorMsg = Object.entries(data)
              .map(([field, msgs]) => `${field}: ${Array.isArray(msgs) ? msgs.join(" ") : msgs}`)
              .join(" | ");
         }
         throw new Error(errorMsg);
      }

      setSuccessMsg("Attendance successfully synced with the database!");
      window.scrollTo(0, 0);
      
      setTimeout(() => {
        navigate("/teacher/attendance");
      }, 2000);

    } catch (err) {
      console.error(err);
      setError(err.message);
      window.scrollTo(0, 0);
    } finally {
      setSubmitting(false);
    }
  };

  const presentCount = students.filter(s => s.status === 'P').length;
  const absentCount = students.filter(s => s.status === 'A').length;
  const lateCount = students.filter(s => s.status === 'L').length;
  const successRate = students.length > 0 ? Math.round((presentCount / students.length) * 100) : 0;

  const getInitials = (first, last) => {
    if (first && last) return `${first[0]}${last[0]}`.toUpperCase();
    if (first) return first.substring(0, 2).toUpperCase();
    return "ST";
  };

  if (loading) {
     return (
        <MainLayout title="Teacher Portal">
           <div className="flex items-center justify-center min-h-[60vh]">
              <div className="flex flex-col items-center gap-3 text-[#0058be]">
                 <span className="material-symbols-outlined animate-spin text-4xl">progress_activity</span>
                 <p className="font-semibold tracking-wide">Loading Infrastructure...</p>
              </div>
           </div>
        </MainLayout>
     );
  }

  return (
    <MainLayout title="Teacher Portal">
      <Link
        to="/teacher/attendance"
        className="flex items-center gap-2 text-[#0058be] font-semibold text-sm mb-4 hover:-translate-x-1 transition-transform w-max"
      >
        <span className="material-symbols-outlined">arrow_back</span>
        Back to Attendance Hub
      </Link>
      
      {/* Header Section */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-8 gap-4">
        <div>
          <h2 className="text-3xl font-extrabold text-slate-800 tracking-tight">Mark Attendance</h2>
          <p className="text-gray-500 font-medium">Record daily or period-specific presence.</p>
        </div>
        <div className="flex items-center space-x-3">
          <button 
            onClick={markAllPresent} 
            className="px-5 py-2.5 rounded-xl bg-white border border-gray-200 text-[#0058be] font-bold text-sm transition-all hover:bg-[#eff4ff] active:scale-95"
          >
            Mark All Present
          </button>
          <button 
            onClick={handleSubmitAttendance}
            disabled={submitting || students.length === 0}
            className="flex items-center gap-2 px-6 py-2.5 rounded-xl bg-gradient-to-r from-[#0058be] to-[#2170e4] text-white font-bold text-sm shadow-lg hover:shadow-xl transition-all active:scale-95 disabled:opacity-70 disabled:scale-100"
          >
            {submitting ? (
              <span className="material-symbols-outlined animate-spin text-[18px]">progress_activity</span>
            ) : (
              <span className="material-symbols-outlined text-[18px]">cloud_sync</span>
            )}
            {submitting ? "Syncing..." : "Submit Roster"}
          </button>
        </div>
      </div>

      {error && (
        <div className="mb-8 p-4 bg-red-50 text-red-700 rounded-md border border-red-200 flex gap-3 shadow-sm">
           <span className="material-symbols-outlined">error</span>
           <div>
             <p className="font-bold text-sm">Action Required</p>
             <p className="text-sm mt-1">{error}</p>
           </div>
        </div>
      )}

      {successMsg && (
        <div className="mb-8 p-4 bg-green-50 text-green-800 rounded-md border border-green-200 flex gap-3 shadow-sm">
           <span className="material-symbols-outlined">check_circle</span>
           <div>
             <p className="font-bold text-sm">Success!</p>
             <p className="text-sm mt-1">{successMsg}</p>
           </div>
        </div>
      )}

      {/* Dashboard Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-16">
        
        {/* Left: Filters and Summary */}
        <div className="col-span-1 lg:col-span-4 space-y-8">
          
          {/* Summary Card */}
          <div className="bg-gradient-to-br from-[#0058be] to-[#00387b] rounded-2xl p-8 text-white relative overflow-hidden shadow-lg">
            <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -mr-16 -mt-16 blur-2xl"></div>
            <div className="relative z-10">
              <h3 className="text-blue-100 font-semibold mb-6 flex items-center gap-2">
                <span className="material-symbols-outlined">analytics</span>
                Live Overview
              </h3>
              <div className="flex justify-between items-end mb-8">
                <div>
                  <p className="text-5xl font-extrabold">{students.length}</p>
                  <p className="text-sm text-blue-200 mt-1">Total Roster</p>
                </div>
                <div className="text-right">
                  <p className="text-2xl font-bold">{successRate}%</p>
                  <p className="text-sm text-blue-200 mt-1">Presence</p>
                </div>
              </div>
              <div className="grid grid-cols-3 gap-4 pt-6 border-t border-white/10">
                <div>
                  <p className="text-xl font-bold">{presentCount}</p>
                  <p className="text-[10px] uppercase tracking-wider text-blue-200">Present</p>
                </div>
                <div>
                  <p className="text-xl font-bold text-red-300">{absentCount}</p>
                  <p className="text-[10px] uppercase tracking-wider text-red-200/70">Absent</p>
                </div>
                <div>
                  <p className="text-xl font-bold text-orange-300">{lateCount}</p>
                  <p className="text-[10px] uppercase tracking-wider text-orange-200/70">Late</p>
                </div>
              </div>
            </div>
          </div>

          {/* Filter Card */}
          <Card className="rounded-2xl p-8 border border-gray-100">
            <h4 className="text-slate-800 font-bold mb-6 flex items-center">
              <span className="material-symbols-outlined mr-2 text-[#0058be]">database</span>
              Model Context (Required)
            </h4>
            <div className="space-y-5">
              
              <div className="flex flex-col gap-1.5 w-full">
                <label className="text-xs font-bold text-gray-500 uppercase tracking-wider">Date of Record</label>
                <div className="relative">
                  <input 
                    className="w-full bg-[#f8f9ff] border border-transparent rounded-md px-4 py-3 text-sm font-medium focus:border-[#0058be]/30 outline-none text-slate-700" 
                    type="date" 
                    value={attendanceDate}
                    onChange={(e) => setAttendanceDate(e.target.value)}
                  />
                </div>
              </div>

              <div className="flex flex-col gap-1.5 w-full">
                <label className="text-xs font-bold text-gray-500 uppercase tracking-wider">Academic Year</label>
                <div className="relative">
                  <select 
                    value={selectedYear}
                    onChange={e => setSelectedYear(e.target.value)}
                    className="w-full bg-[#f8f9ff] border border-transparent rounded-md py-3 px-4 text-sm outline-none appearance-none font-medium text-slate-700 focus:border-[#0058be]/30"
                  >
                    <option value="">Select Year ID...</option>
                    {academicYears.map(y => <option key={y.id} value={y.id}>{y.name}</option>)}
                  </select>
                  <span className="material-symbols-outlined absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none">expand_more</span>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="flex flex-col gap-1.5 w-full">
                  <label className="text-xs font-bold text-gray-500 uppercase tracking-wider">Class Level</label>
                  <div className="relative">
                    <select 
                      value={selectedClass}
                      onChange={e => setSelectedClass(e.target.value)}
                      className="w-full bg-[#f8f9ff] border border-transparent rounded-md py-3 px-4 text-sm outline-none appearance-none font-medium text-slate-700 focus:border-[#0058be]/30"
                    >
                      <option value="">Select...</option>
                      {classLevels.map(c => <option key={c.id} value={c.id}>{c.name}</option>)}
                    </select>
                    <span className="material-symbols-outlined absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none">expand_more</span>
                  </div>
                </div>

                <div className="flex flex-col gap-1.5 w-full">
                  <label className="text-xs font-bold text-gray-500 uppercase tracking-wider">Section</label>
                  <div className="relative">
                    <select 
                      value={selectedSection}
                      onChange={e => setSelectedSection(e.target.value)}
                      className="w-full bg-[#f8f9ff] border border-transparent rounded-md py-3 px-4 text-sm outline-none appearance-none font-medium text-slate-700 focus:border-[#0058be]/30"
                    >
                      <option value="">Select...</option>
                      {sections.map(s => <option key={s.id} value={s.id}>{s.name}</option>)}
                    </select>
                    <span className="material-symbols-outlined absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none">expand_more</span>
                  </div>
                </div>
              </div>
            </div>
            <p className="text-[10px] text-gray-400 mt-4 leading-relaxed">
              These UUIDs link directly to Django's ORM. Student lists update automatically based on Class/Section selections via DRF query filters.
            </p>
          </Card>
        </div>

        {/* Right: Student Roster */}
        <div className="col-span-1 lg:col-span-8">
          <div className="bg-white rounded-2xl shadow-sm overflow-hidden border border-gray-100">
            {/* Table Header */}
            <div className="px-8 py-6 bg-[#f8f9ff] flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4 border-b border-gray-100">
              <h3 className="font-bold text-slate-800">Student Roster</h3>
              <div className="flex items-center space-x-4 text-xs font-bold text-gray-500 uppercase tracking-widest">
                <span>Status Key:</span>
                <div className="flex items-center space-x-4">
                  <span className="flex items-center"><span className="w-2 h-2 rounded-full bg-green-500 mr-1"></span> P</span>
                  <span className="flex items-center"><span className="w-2 h-2 rounded-full bg-red-500 mr-1"></span> A</span>
                  <span className="flex items-center"><span className="w-2 h-2 rounded-full bg-orange-500 mr-1"></span> L</span>
                </div>
              </div>
            </div>

            {/* Table Body */}
            <div className="overflow-x-auto">
              <table className="w-full min-w-[600px]">
                <thead>
                  <tr className="text-left text-gray-500 border-b border-gray-100 bg-white">
                    <th className="px-8 py-4 text-[11px] font-bold uppercase tracking-widest">Student Identity</th>
                    <th className="px-4 py-4 text-[11px] font-bold uppercase tracking-widest">Enrollment No.</th>
                    <th className="px-4 py-4 text-[11px] font-bold uppercase tracking-widest text-center">Record Status</th>
                    <th className="px-8 py-4 text-[11px] font-bold uppercase tracking-widest text-right">Remarks</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-50">
                  {fetchingStudents ? (
                    <tr>
                      <td colSpan="4" className="text-center py-16 text-gray-500">
                        <span className="material-symbols-outlined animate-spin text-3xl text-[#0058be] mb-3">progress_activity</span>
                        <p>Fetching mapped student profiles for this section...</p>
                      </td>
                    </tr>
                  ) : !selectedClass || !selectedSection ? (
                    <tr>
                      <td colSpan="4" className="text-center py-20 text-gray-400">
                         <span className="material-symbols-outlined text-5xl mb-4 text-gray-200">rule</span>
                         <h4 className="font-bold text-slate-700 text-lg mb-1">Awaiting Context</h4>
                         <p className="text-sm">Please select a Class Level and Section on the left to populate the roster.</p>
                      </td>
                    </tr>
                  ) : students.length === 0 ? (
                    <tr>
                      <td colSpan="4" className="text-center py-16 text-gray-500">
                        No students are enrolled in this specific Class/Section.
                      </td>
                    </tr>
                  ) : (
                    students.map((student, idx) => (
                      <tr key={student.id} className="hover:bg-gray-50 transition-colors group bg-white">
                        <td className="px-8 py-5">
                          <div className="flex items-center space-x-4">
                            {student.profile_picture ? (
                              <img src={student.profile_picture} alt="Profile" className="w-10 h-10 rounded-full object-cover border border-gray-200" />
                            ) : (
                              <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm bg-blue-50 text-[#0058be]`}>
                                {getInitials(student.first_name, student.last_name)}
                              </div>
                            )}
                            <div>
                              <p className="text-sm font-bold text-slate-800">
                                {student.first_name || student.last_name ? `${student.first_name} ${student.last_name}` : "Pending Name"}
                              </p>
                              <p className="text-[11px] text-gray-500 font-mono mt-0.5">{student.email}</p>
                            </div>
                          </div>
                        </td>
                        <td className="px-4 py-5 text-sm font-medium text-slate-600 font-mono">
                          {student.enrollment_number || "N/A"}
                        </td>
                        <td className="px-4 py-5">
                          <div className="flex items-center justify-center space-x-2">
                            <button 
                              onClick={() => updateStatus(student.id, 'P')}
                              className={`w-12 py-2 rounded-lg font-bold text-xs transition-all ${student.status === 'P' ? 'bg-green-500 text-white shadow-md shadow-green-500/20' : 'bg-gray-100 text-gray-500 hover:bg-green-50 hover:text-green-600'}`}
                            >P</button>
                            <button 
                              onClick={() => updateStatus(student.id, 'A')}
                              className={`w-12 py-2 rounded-lg font-bold text-xs transition-all ${student.status === 'A' ? 'bg-red-500 text-white shadow-md shadow-red-500/20' : 'bg-gray-100 text-gray-500 hover:bg-red-50 hover:text-red-600'}`}
                            >A</button>
                            <button 
                              onClick={() => updateStatus(student.id, 'L')}
                              className={`w-12 py-2 rounded-lg font-bold text-xs transition-all ${student.status === 'L' ? 'bg-orange-500 text-white shadow-md shadow-orange-500/20' : 'bg-gray-100 text-gray-500 hover:bg-orange-50 hover:text-orange-600'}`}
                            >L</button>
                          </div>
                        </td>
                        <td className="px-8 py-5 flex justify-end">
                          <input 
                            type="text"
                            placeholder="Add remark..."
                            value={student.remark}
                            onChange={(e) => updateRemark(student.id, e.target.value)}
                            className="text-xs px-3 py-1.5 bg-gray-50 border border-transparent focus:border-[#0058be]/30 focus:bg-white rounded-md outline-none text-right w-32 placeholder:text-gray-400 transition-all text-slate-700"
                          />
                        </td>
                      </tr>
                    ))
                  )}
                </tbody>
              </table>
            </div>

            {/* Table Footer */}
            <div className="px-8 py-4 bg-[#f8f9ff] border-t border-gray-100 flex justify-between items-center text-sm font-medium text-gray-500">
              <span>Showing {students.length} students</span>
              <div className="flex space-x-2">
                <button className="px-3 py-1.5 rounded-lg bg-[#0058be] text-white font-bold shadow-sm">1</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
}
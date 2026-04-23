import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import MainLayout from "../../components/erp/teacher/MainLayout";
import Card from "../../components/erp/teacher/Card";

export default function EnterStudentGrades() {
  const navigate = useNavigate();

  // Core Data States
  const [students, setStudents] = useState([]);
  const [classLevels, setClassLevels] = useState([]);
  const [sections, setSections] = useState([]);
  const [subjects, setSubjects] = useState([]);
  const [exams, setExams] = useState([]); // Assuming you have an exams ViewSet

  // Payload Parameters
  const [selectedClass, setSelectedClass] = useState("");
  const [selectedSection, setSelectedSection] = useState("");
  const [selectedSubject, setSelectedSubject] = useState("");
  const [selectedExam, setSelectedExam] = useState("");
  const [maxMarks, setMaxMarks] = useState(100);

  // UI States
  const [loading, setLoading] = useState(true);
  const [fetchingStudents, setFetchingStudents] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState(null);
  const [successMsg, setSuccessMsg] = useState(null);

  // 1. Initial Load: Fetch Context Dropdowns
  useEffect(() => {
    const fetchContexts = async () => {
      setLoading(true);
      try {
        const baseUrl = import.meta.env?.VITE_API_BASE_URL || process.env?.REACT_APP_API_BASE_URL;
        const token = localStorage.getItem("accessToken");
        const headers = { "Authorization": `Bearer ${token}`, "Accept": "application/json" };

        const [classesRes, sectionsRes, subjectsRes, examsRes] = await Promise.all([
          fetch(`${baseUrl}v1/academics/class-levels/`, { headers }),
          fetch(`${baseUrl}v1/academics/sections/`, { headers }),
          fetch(`${baseUrl}v1/academics/subjects/`, { headers }),
          fetch(`${baseUrl}v1/academics/exams/`, { headers }).catch(() => ({ ok: false })) // Graceful fallback if exams endpoint isn't ready
        ]);

        if (classesRes.ok) {
          const data = await classesRes.json();
          setClassLevels(data.results || data);
        }
        if (sectionsRes.ok) {
          const data = await sectionsRes.json();
          setSections(data.results || data);
        }
        if (subjectsRes.ok) {
          const data = await subjectsRes.json();
          setSubjects(data.results || data);
        }
        if (examsRes && examsRes.ok) {
          const data = await examsRes.json();
          setExams(data.results || data);
        }
      } catch (err) {
        console.error("Fetch Contexts Error:", err);
        setError("Failed to load context variables.");
      } finally {
        setLoading(false);
      }
    };

    fetchContexts();
  }, []);

  // 2. Fetch Students based on Class & Section
  useEffect(() => {
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

        const queryParams = new URLSearchParams({
           class_level: selectedClass,
           section: selectedSection
        }).toString();

        const response = await fetch(`${baseUrl}v1/profiles/students/?${queryParams}`, { headers });
        
        if (!response.ok) throw new Error("Failed to load student roster.");

        const data = await response.json();
        const studentList = data.results || data;
        
        // Inject local grading state
        const rosterWithGrades = studentList.map(s => ({
          ...s,
          marks: '',
          grade: '--',
          remark: ''
        }));
        
        setStudents(rosterWithGrades);
      } catch (err) {
        console.error("Fetch Roster Error:", err);
        setError(err.message);
        setStudents([]);
      } finally {
        setFetchingStudents(false);
      }
    };

    fetchClassRoster();
  }, [selectedClass, selectedSection]);

  // Utility to auto-calculate grade based on percentage
  const calculateGrade = (marks, max) => {
    if (!marks || !max || max <= 0) return '--';
    const percentage = (parseFloat(marks) / parseFloat(max)) * 100;
    if (percentage >= 90) return 'A+';
    if (percentage >= 80) return 'A';
    if (percentage >= 70) return 'B';
    if (percentage >= 60) return 'C';
    return 'F';
  };

  const updateStudent = (id, field, value) => {
    setStudents(prev => prev.map(s => {
      if (s.id === id) {
        const updated = { ...s, [field]: value };
        // Auto-recalculate grade if marks change
        if (field === 'marks') {
          updated.grade = calculateGrade(value, maxMarks);
        }
        return updated;
      }
      return s;
    }));
  };

  // Submit all graded records to Django
  const handlePublishGrades = async () => {
    if (!selectedClass || !selectedSection || !selectedSubject || !selectedExam) {
      setError("Please ensure Class, Section, Subject, and Exam are selected before publishing.");
      window.scrollTo(0, 0);
      return;
    }

    const gradedStudents = students.filter(s => s.marks !== '');
    if (gradedStudents.length === 0) {
      setError("No grades have been entered. Please grade at least one student.");
      window.scrollTo(0, 0);
      return;
    }

    setSubmitting(true);
    setError(null);
    setSuccessMsg(null);

    try {
      const baseUrl = import.meta.env?.VITE_API_BASE_URL || process.env?.REACT_APP_API_BASE_URL;
      const token = localStorage.getItem("accessToken");

      // We use Promise.all to map over the array and post individual records.
      // This ensures strict adherence to the schema you provided.
      const gradePromises = gradedStudents.map(student => {
        const payload = {
          marks_obtained: student.marks.toString(),
          max_marks: maxMarks.toString(),
          remarks: student.remark || "",
          exam: selectedExam,
          student: student.id,
          subject: selectedSubject
        };

        return fetch(`${baseUrl}v1/operations/grades/`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`
          },
          body: JSON.stringify(payload)
        });
      });

      const results = await Promise.allSettled(gradePromises);
      const failed = results.filter(res => res.status === 'rejected' || (res.value && !res.value.ok));
      
      if (failed.length > 0) {
        throw new Error(`${failed.length} records failed to sync. Please check your network or inputs.`);
      }

      setSuccessMsg("Grades successfully published to the database!");
      window.scrollTo(0, 0);
      
      setTimeout(() => {
        navigate("/teacher/grades");
      }, 2000);

    } catch (err) {
      console.error(err);
      setError(err.message);
      window.scrollTo(0, 0);
    } finally {
      setSubmitting(false);
    }
  };

  const getInitials = (first, last) => {
    if (first && last) return `${first[0]}${last[0]}`.toUpperCase();
    if (first) return first.substring(0, 2).toUpperCase();
    return "ST";
  };

  const gradedCount = students.filter(s => s.marks !== '').length;

  if (loading) {
    return (
      <MainLayout title="Enter Grades">
        <div className="flex items-center justify-center min-h-[60vh]">
          <div className="flex flex-col items-center gap-3 text-[#0058be]">
            <span className="material-symbols-outlined animate-spin text-4xl">progress_activity</span>
            <p className="font-semibold tracking-wide">Loading grading infrastructure...</p>
          </div>
        </div>
      </MainLayout>
    );
  }

  return (
    <MainLayout title="Enter Grades">
      <div className="max-w-7xl mx-auto space-y-8 pb-12 relative">

        <Link
          to="/teacher/grades"
          className="flex items-center gap-2 text-primary font-semibold text-sm hover:-translate-x-1 transition-transform w-max"
        >
          <span className="material-symbols-outlined">arrow_back</span>
          Back to Grades Overview
        </Link>

        {/* Hero Title Section */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <h1 className="text-4xl font-extrabold text-on-surface tracking-tight font-display leading-none">Assessment Grading</h1>
            <p className="text-on-surface-variant mt-2 max-w-xl">
              Select the assessment context below and enter student performance data. Grades will automatically calculate based on the maximum marks defined.
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-3">
            <button 
              onClick={handlePublishGrades}
              disabled={submitting || gradedCount === 0}
              className="px-6 py-2.5 bg-gradient-to-br from-[#0058be] to-[#2170e4] text-white font-bold rounded-md text-sm shadow-md hover:shadow-lg active:scale-95 transition-all disabled:opacity-50 flex items-center gap-2"
            >
              {submitting ? (
                <span className="material-symbols-outlined animate-spin text-[18px]">progress_activity</span>
              ) : (
                <span className="material-symbols-outlined text-[18px]">publish</span>
              )}
              {submitting ? "Publishing..." : "Publish Results"}
            </button>
          </div>
        </div>

        {/* Alerts */}
        {error && (
          <div className="p-4 bg-red-50 text-red-700 rounded-md border border-red-200 flex gap-3 shadow-sm">
             <span className="material-symbols-outlined">error</span>
             <div>
               <p className="font-bold text-sm">Action Required</p>
               <p className="text-sm mt-1">{error}</p>
             </div>
          </div>
        )}

        {successMsg && (
          <div className="p-4 bg-green-50 text-green-800 rounded-md border border-green-200 flex gap-3 shadow-sm">
             <span className="material-symbols-outlined">check_circle</span>
             <div>
               <p className="font-bold text-sm">Success!</p>
               <p className="text-sm mt-1">{successMsg}</p>
             </div>
          </div>
        )}

        {/* Context Configuration Card */}
        <Card className="p-6 bg-surface-container-lowest border-outline-variant/20 shadow-sm">
          <h4 className="text-slate-800 font-bold mb-4 flex items-center">
            <span className="material-symbols-outlined mr-2 text-[#0058be]">database</span>
            Assessment Configuration
          </h4>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-4">
            
            <div className="flex flex-col gap-1.5">
              <label className="text-[10px] font-bold text-slate-500 uppercase tracking-wider">Class Level</label>
              <div className="relative">
                <select value={selectedClass} onChange={e => setSelectedClass(e.target.value)} className="w-full bg-surface-container-low border-transparent rounded-md py-2.5 px-3 text-sm font-medium focus:ring-2 focus:ring-primary/20 outline-none appearance-none text-slate-700">
                  <option value="">Select...</option>
                  {classLevels.map(c => <option key={c.id} value={c.id}>{c.name}</option>)}
                </select>
                <span className="material-symbols-outlined absolute right-2 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none text-sm">expand_more</span>
              </div>
            </div>

            <div className="flex flex-col gap-1.5">
              <label className="text-[10px] font-bold text-slate-500 uppercase tracking-wider">Section</label>
              <div className="relative">
                <select value={selectedSection} onChange={e => setSelectedSection(e.target.value)} className="w-full bg-surface-container-low border-transparent rounded-md py-2.5 px-3 text-sm font-medium focus:ring-2 focus:ring-primary/20 outline-none appearance-none text-slate-700">
                  <option value="">Select...</option>
                  {sections.map(s => <option key={s.id} value={s.id}>{s.name}</option>)}
                </select>
                <span className="material-symbols-outlined absolute right-2 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none text-sm">expand_more</span>
              </div>
            </div>

            <div className="flex flex-col gap-1.5">
              <label className="text-[10px] font-bold text-slate-500 uppercase tracking-wider">Subject</label>
              <div className="relative">
                <select value={selectedSubject} onChange={e => setSelectedSubject(e.target.value)} className="w-full bg-surface-container-low border-transparent rounded-md py-2.5 px-3 text-sm font-medium focus:ring-2 focus:ring-primary/20 outline-none appearance-none text-slate-700">
                  <option value="">Select...</option>
                  {subjects.map(s => <option key={s.id} value={s.id}>{s.name}</option>)}
                </select>
                <span className="material-symbols-outlined absolute right-2 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none text-sm">expand_more</span>
              </div>
            </div>

            <div className="flex flex-col gap-1.5">
              <label className="text-[10px] font-bold text-slate-500 uppercase tracking-wider">Exam</label>
              <div className="relative">
                <select value={selectedExam} onChange={e => setSelectedExam(e.target.value)} className="w-full bg-surface-container-low border-transparent rounded-md py-2.5 px-3 text-sm font-medium focus:ring-2 focus:ring-primary/20 outline-none appearance-none text-slate-700">
                  <option value="">Select Exam...</option>
                  {exams.length > 0 ? (
                    exams.map(e => <option key={e.id} value={e.id}>{e.name || 'Exam'}</option>)
                  ) : (
                    <option value="test-uuid" disabled>No exams available</option> // Graceful fallback
                  )}
                </select>
                <span className="material-symbols-outlined absolute right-2 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none text-sm">expand_more</span>
              </div>
            </div>

            <div className="flex flex-col gap-1.5">
              <label className="text-[10px] font-bold text-slate-500 uppercase tracking-wider">Max Marks</label>
              <input 
                type="number" 
                value={maxMarks} 
                onChange={e => {
                  const newMax = e.target.value;
                  setMaxMarks(newMax);
                  // Recalculate all grades when max marks change
                  setStudents(prev => prev.map(s => ({
                    ...s,
                    grade: calculateGrade(s.marks, newMax)
                  })));
                }}
                className="w-full bg-surface-container-low border-transparent rounded-md py-2.5 px-3 text-sm font-medium focus:ring-2 focus:ring-primary/20 outline-none text-slate-700" 
              />
            </div>

          </div>
        </Card>

        {/* Bento Layout Content */}
        <div className="grid grid-cols-12 gap-8">
          
          {/* Main Grading Table */}
          <div className="col-span-12 lg:col-span-9 space-y-6">
            
            {/* Quick Stats & Bulk Actions */}
            <div className="flex items-center justify-between bg-surface-container-low p-4 rounded-xl">
              <div className="flex gap-8 px-4">
                <div>
                  <p className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">Total Students</p>
                  <p className="text-xl font-bold text-on-surface text-center">{students.length}</p>
                </div>
                <div>
                  <p className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">Graded</p>
                  <p className="text-xl font-bold text-primary text-center">{gradedCount}/{students.length}</p>
                </div>
              </div>
              <button className="flex items-center gap-2 px-4 py-2 bg-amber-100 text-[#924700] font-bold rounded-md text-sm hover:bg-amber-200 transition-all group outline-none border-none cursor-pointer">
                <span className="material-symbols-outlined text-lg group-hover:rotate-12 duration-300">auto_awesome</span>
                Auto-Generate Remarks
              </button>
            </div>

            {/* Grading Card */}
            <Card className="p-0 overflow-hidden shadow-sm border border-outline-variant/10">
              <div className="overflow-x-auto">
                <table className="w-full border-collapse min-w-[700px]">
                  <thead>
                    <tr className="bg-surface-container-low/50 text-left border-b border-surface-container">
                      <th className="px-6 py-4 text-[10px] font-black text-slate-500 uppercase tracking-wider">Student</th>
                      <th className="px-6 py-4 text-[10px] font-black text-slate-500 uppercase tracking-wider">Enrollment No.</th>
                      <th className="px-6 py-4 text-[10px] font-black text-slate-500 uppercase tracking-wider text-center">Marks ({maxMarks})</th>
                      <th className="px-6 py-4 text-[10px] font-black text-slate-500 uppercase tracking-wider">Grade</th>
                      <th className="px-6 py-4 text-[10px] font-black text-slate-500 uppercase tracking-wider">Remarks</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-surface-container/50">
                    {fetchingStudents ? (
                      <tr>
                        <td colSpan="5" className="text-center py-16 text-gray-500">
                          <span className="material-symbols-outlined animate-spin text-3xl text-[#0058be] mb-3">progress_activity</span>
                          <p>Fetching student profiles...</p>
                        </td>
                      </tr>
                    ) : !selectedClass || !selectedSection ? (
                      <tr>
                        <td colSpan="5" className="text-center py-20 text-gray-400">
                           <span className="material-symbols-outlined text-5xl mb-4 text-gray-200">rule</span>
                           <h4 className="font-bold text-slate-700 text-lg mb-1">Awaiting Context</h4>
                           <p className="text-sm">Please configure the Class and Section above to begin grading.</p>
                        </td>
                      </tr>
                    ) : students.length === 0 ? (
                      <tr>
                        <td colSpan="5" className="text-center py-16 text-gray-500">
                          No students enrolled in this section.
                        </td>
                      </tr>
                    ) : (
                      students.map((student) => (
                        <tr key={student.id} className={`hover:bg-blue-50/30 transition-colors ${student.marks ? 'bg-blue-50/10' : ''}`}>
                          <td className="px-6 py-5">
                            <div className="flex items-center gap-3">
                              {student.profile_picture ? (
                                <img alt="Profile" className="w-10 h-10 rounded-full border border-slate-100 object-cover" src={student.profile_picture} />
                              ) : (
                                <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm bg-blue-50 text-[#0058be]`}>
                                  {getInitials(student.first_name, student.last_name)}
                                </div>
                              )}
                              <div>
                                <p className="font-bold text-on-surface text-sm">
                                  {student.first_name || student.last_name ? `${student.first_name} ${student.last_name}` : "Pending Name"}
                                </p>
                                <p className="text-xs text-slate-400">{student.email}</p>
                              </div>
                            </div>
                          </td>
                          <td className="px-6 py-5 text-sm font-medium text-slate-500 font-mono">{student.enrollment_number || "N/A"}</td>
                          <td className="px-6 py-5">
                            <div className="flex items-center justify-center">
                              <input 
                                className={`w-20 text-center py-2 border-none rounded-sm font-bold text-primary focus:ring-2 focus:ring-primary/20 outline-none ${student.marks ? 'bg-white shadow-sm ring-2 ring-primary/10' : 'bg-surface-container-low'}`} 
                                placeholder="--" 
                                type="number"
                                max={maxMarks}
                                min="0"
                                value={student.marks}
                                onChange={(e) => updateStudent(student.id, 'marks', e.target.value)}
                              />
                            </div>
                          </td>
                          <td className="px-6 py-5">
                            <span className={`inline-block text-center py-1.5 px-3 font-bold text-sm rounded ${student.marks ? 'bg-white text-primary shadow-sm ring-1 ring-primary/20' : 'text-slate-400'}`}>
                              {student.grade}
                            </span>
                          </td>
                          <td className="px-6 py-5">
                            <input 
                              className="w-full text-xs py-2 px-3 border-none bg-surface-container-low rounded focus:bg-white focus:ring-2 focus:ring-primary/20 placeholder:text-slate-400 italic outline-none transition-all" 
                              placeholder="Add optional remark..." 
                              type="text" 
                              value={student.remark}
                              onChange={(e) => updateStudent(student.id, 'remark', e.target.value)}
                            />
                          </td>
                        </tr>
                      ))
                    )}
                  </tbody>
                </table>
              </div>
            </Card>
          </div>

          {/* AI Sidebar / Insights */}
          <div className="col-span-12 lg:col-span-3 space-y-8">
            
            {/* AI Evaluation Panel */}
            <div className="bg-gradient-to-br from-[#6b38d4] to-[#8455ef] p-[1px] rounded-xl shadow-lg shadow-[#6b38d4]/10">
              <div className="bg-surface-container-lowest rounded-xl p-6 h-full space-y-4">
                <div className="flex items-center gap-2 text-[#6b38d4]">
                  <span className="material-symbols-outlined" style={{fontVariationSettings: "'FILL' 1"}}>psychology</span>
                  <h3 className="font-bold font-display text-lg tracking-tight">AI Evaluation</h3>
                </div>
                <div className="space-y-4">
                  <div className="p-4 bg-[#6b38d4]/5 rounded-lg border border-[#6b38d4]/10">
                    <p className="text-sm text-on-surface-variant leading-relaxed">
                      <span className="font-bold text-[#6b38d4]">Alert:</span> AI suggests a cluster of students struggling with <span className="bg-[#6b38d4]/10 px-1 rounded font-bold">Question 4</span> based on entry pacing.
                    </p>
                  </div>
                  <div className="p-4 bg-[#924700]/5 rounded-lg border border-[#924700]/10">
                    <p className="text-sm text-on-surface-variant leading-relaxed">
                      <span className="font-bold text-[#924700]">Suggestion:</span> Grade distribution for this section is currently skewed higher than historic average.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Grading Rules Card */}
            <div className="bg-surface-container-low p-6 rounded-xl space-y-4 shadow-sm border border-outline-variant/10">
              <h4 className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Grading Schema</h4>
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-bold text-on-surface">90% - 100%</span>
                  <span className="px-2 py-0.5 bg-green-100 text-green-700 text-[10px] font-black rounded">A+</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm font-bold text-on-surface">80% - 89%</span>
                  <span className="px-2 py-0.5 bg-blue-100 text-blue-700 text-[10px] font-black rounded">A</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm font-bold text-on-surface">70% - 79%</span>
                  <span className="px-2 py-0.5 bg-purple-100 text-purple-700 text-[10px] font-black rounded">B</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm font-bold text-on-surface">60% - 69%</span>
                  <span className="px-2 py-0.5 bg-orange-100 text-orange-700 text-[10px] font-black rounded">C</span>
                </div>
              </div>
            </div>

            {/* Deadline Card */}
            <div className="bg-red-50 p-6 rounded-xl border border-red-100 relative overflow-hidden shadow-sm">
              <div className="relative z-10">
                <div className="flex items-center gap-2 text-red-600 mb-2">
                  <span className="material-symbols-outlined text-lg">timer</span>
                  <span className="text-xs font-bold uppercase tracking-wider">Submission Goal</span>
                </div>
                <p className="text-2xl font-black text-red-800">24 Hours</p>
                <p className="text-xs text-red-800/70 mt-1">Remaining until portal closes.</p>
              </div>
              <span className="material-symbols-outlined absolute -bottom-4 -right-4 text-8xl text-red-600/5 rotate-12">schedule</span>
            </div>

          </div>
        </div>

      </div>
    </MainLayout>
  );
}
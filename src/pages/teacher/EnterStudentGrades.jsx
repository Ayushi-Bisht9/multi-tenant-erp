import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import MainLayout from "../../components/erp/teacher/MainLayout";
import Card from "../../components/erp/teacher/Card";

const studentsData = [
  {
    id: '10A-042',
    name: 'Aria Montgomery',
    email: 'aria.m@school.edu',
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC-AxOwPttVhheLtsSUp3xnRtomD7O6x9266QhOFZyu2rxhtfWAXQj1ZXv-BF_ASeiOpwKU2IhIf6ZVlOhNXToGJorlJmjd06zRrF_IWCTslgrPAh4MEz6aqbGy4dt8GP4yW5NuVe0hFaYSPqgcG3bDWem-DsQZX5YxATV_YaluLwt2fN-uJKTlBx2jElE7kJwZCaGfEOu8G1iRyl4naLyl04WtCyXHOCLiyNb79IO_EbBK3X20t68ZKVqnxkI9Z9azR__eq3SjZw',
    marks: '',
    grade: '--',
    remark: ''
  },
  {
    id: '10A-015',
    name: 'Benjamin White',
    email: 'b.white@school.edu',
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBSgYn267dOtL6wnXAm35WJVMTRqwOaaWw2JkGJMu5fWG8xMhWDxE4BMc_buJc5lbPFJz9KNLw7a1sbbRY5G1mZhJvhvVYQXZUz3nl7VhB_LTFBupm4s36pJOkLnxqxmBWlThsPZUw4bC13A9TSQ1TldM5XLY03MiU5QBGvZ9IwUGale0D15FwKeF_wCXngzHyUOJlYMkplunBze7y9gK4phfHFZBVsbHsFoMaa0nydlxrTOS0WY1pUWnROcK74XLD5iTgJVlPdEg',
    marks: '92',
    grade: 'A+',
    remark: 'Exhibited mastery in complex derivatives...'
  },
  {
    id: '10A-028',
    name: 'Chloe Kim',
    email: 'c.kim@school.edu',
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB2tAdc4ObpQaRc-BeWhqJ8lhSCjUMteZAuvR9xNEoy1N5G0JXnvBP2-lbS5HjW5iJwOuZAM5kum_JxB50bu_wa1V4vGS_BZDoGH_8XgrJM-3WkLz0rsA4Tb7vi2ohjzRMiB2JoFVqoJOttUosoGQYSxkLD6YSqC42bBuso5x266BoI4hVP6Q47jKSEDjDE5SFdLb4RZM4m6sqbFDMd-4aqjtaqjPrCjWRWnMC-jlwN0udQa2J2mZVMr1zJ4sgPGYIFuWYJPTjNSw',
    marks: '78',
    grade: 'B',
    remark: ''
  },
  {
    id: '10A-089',
    name: 'David Smith',
    email: 'd.smith@school.edu',
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAh6vHbvw_ycmkFRoKetGwbgU60AFt7vw1KThkGCJEBWMRl2JrwHVJSZNcb6mB2f0WDneS4U2MxLM00-3XOFgS1I_6fH6sOmn5ic5TNRIyapffPdCj2d1JV_CoqZZx545H4F12Sy1H2P7AmW3gwOxrUAQDoKiKKTvw92vbEzUWmdxR3TLauzFC0nXrmN_MqssEAlSXC4Ao-WS2Gi0-4otE0GZyNZBMd94gl7-48VchIiWt1bN9-e-_Q4AfYdqDqI5TfLE9oXKf9gA',
    marks: '',
    grade: '--',
    remark: ''
  }
];

const EnterStudentGrades = () => {
  const [students, setStudents] = useState(studentsData);

  const updateStudent = (id, field, value) => {
    setStudents(prev => prev.map(s => s.id === id ? { ...s, [field]: value } : s));
  };

  const gradedCount = students.filter(s => s.marks !== '').length;

  return (
    <MainLayout title="Enter Grades">
      <div className="max-w-7xl mx-auto space-y-8 pb-12 relative">

      <Link
to="/teacher/grades"
className="flex items-center gap-2 text-primary font-semibold text-sm hover:-translate-x-1 transition-transform w-max"
>

<span className="material-symbols-outlined">
arrow_back
</span>

Back to Grades Overview

</Link>

        {/* Hero Title Section */}


        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <div className="flex items-center gap-3 mb-2">
              <span className="px-3 py-1 bg-primary/10 text-primary text-xs font-bold rounded-full">Grade 10-A</span>
              <span className="text-slate-400 text-sm font-medium">Academic Year 2023-24</span>
            </div>
            <h1 className="text-4xl font-extrabold text-on-surface tracking-tight font-display leading-none">Midterm Assessment - Mathematics</h1>
            <p className="text-on-surface-variant mt-2 max-w-lg">Enter student performance data for the calculus and trigonometry module. Use AI triggers to assist with personalized feedback.</p>
          </div>
          <div className="flex flex-wrap items-center gap-3">
            <button className="px-5 py-2.5 bg-surface-container-high text-primary font-semibold rounded-md text-sm hover:bg-surface-container-highest transition-colors outline-none cursor-pointer border-none">Save Draft</button>
            <button className="px-6 py-2.5 bg-gradient-to-br from-primary to-primary-container text-white font-bold rounded-md text-sm shadow-md shadow-primary/20 hover:scale-[1.02] active:scale-95 transition-all outline-none cursor-pointer border-none">Publish Results</button>
          </div>
        </div>

        {/* Bento Layout Content */}
        <div className="grid grid-cols-12 gap-8">
          
          {/* Main Grading Table */}
          <div className="col-span-12 lg:col-span-9 space-y-6">
            
            {/* Quick Stats & Bulk Actions */}
            <div className="flex items-center justify-between bg-surface-container-low p-4 rounded-xl">
              <div className="flex gap-8 px-4">
                <div>
                  <p className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">Total Students</p>
                  <p className="text-xl font-bold text-on-surface text-center">32</p>
                </div>
                <div>
                  <p className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">Graded</p>
                  <p className="text-xl font-bold text-primary text-center">{gradedCount}/32</p>
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
                      <th className="px-6 py-4 text-[10px] font-black text-slate-500 uppercase tracking-wider">Roll No.</th>
                      <th className="px-6 py-4 text-[10px] font-black text-slate-500 uppercase tracking-wider text-center">Marks (100)</th>
                      <th className="px-6 py-4 text-[10px] font-black text-slate-500 uppercase tracking-wider">Grade</th>
                      <th className="px-6 py-4 text-[10px] font-black text-slate-500 uppercase tracking-wider">Remarks</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-surface-container/50">
                    {students.map((student, idx) => (
                      <tr key={student.id} className={`hover:bg-blue-50/30 transition-colors ${student.marks ? 'bg-blue-50/10' : ''}`}>
                        <td className="px-6 py-5">
                          <div className="flex items-center gap-3">
                            <img alt={student.name} className="w-10 h-10 rounded-full border border-slate-100 object-cover" src={student.img} />
                            <div>
                              <p className="font-bold text-on-surface text-sm">{student.name}</p>
                              <p className="text-xs text-slate-400">{student.email}</p>
                            </div>
                          </div>
                        </td>
                        <td className="px-6 py-5 text-sm font-medium text-slate-500">{student.id}</td>
                        <td className="px-6 py-5">
                          <div className="flex items-center justify-center">
                            <input 
                              className={`w-20 text-center py-2 border-none rounded-sm font-bold text-primary focus:ring-2 focus:ring-primary/20 outline-none ${student.marks ? 'bg-white shadow-sm ring-2 ring-primary/10' : 'bg-surface-container-low'}`} 
                              placeholder="--" 
                              type="number"
                              value={student.marks}
                              onChange={(e) => updateStudent(student.id, 'marks', e.target.value)}
                            />
                          </div>
                        </td>
                        <td className="px-6 py-5">
                          <select 
                            className={`border-none text-sm font-bold rounded-sm py-2 px-3 focus:ring-2 focus:ring-primary/20 outline-none w-[72px] ${student.marks ? 'bg-white shadow-sm ring-2 ring-primary/10' : 'bg-surface-container-low'}`}
                            value={student.grade}
                            onChange={(e) => updateStudent(student.id, 'grade', e.target.value)}
                          >
                            <option>--</option>
                            <option>A+</option>
                            <option>A</option>
                            <option>B</option>
                            <option>C</option>
                          </select>
                        </td>
                        <td className="px-6 py-5">
                          {student.remark ? (
                            <div className="flex items-center gap-2">
                              <div className="flex-1 bg-primary/5 px-3 py-2 rounded text-[11px] text-primary font-medium italic truncate max-w-[150px]">
                                {student.remark}
                              </div>
                              <button className="text-slate-300 hover:text-slate-500 transition-colors outline-none border-none cursor-pointer bg-transparent">
                                <span className="material-symbols-outlined text-lg block">edit</span>
                              </button>
                            </div>
                          ) : (
                            <div className="flex items-center gap-2">
                              <button className="w-10 h-10 flex items-center justify-center bg-blue-50 text-primary rounded-full hover:bg-primary hover:text-white transition-all shadow-sm outline-none border-none cursor-pointer shrink-0">
                                <span className="material-symbols-outlined text-xl block">auto_awesome</span>
                              </button>
                              <input className="min-w-[120px] flex-1 text-xs border-none bg-transparent placeholder:text-slate-400 italic focus:ring-0 outline-none" placeholder="Add remark..." type="text" />
                            </div>
                          )}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <div className="p-6 bg-surface-container-lowest text-center border-t border-surface-container block max-w-full">
                <button className="text-primary font-bold text-sm hover:underline outline-none border-none cursor-pointer bg-transparent block w-full">View All 32 Students</button>
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
                      <span className="font-bold text-[#6b38d4]">Alert:</span> AI suggests a cluster of students struggling with <span className="bg-[#6b38d4]/10 px-1 rounded font-bold">Question 4 (Calculus)</span>.
                    </p>
                    <button className="mt-3 text-xs font-bold text-[#6b38d4] hover:underline flex items-center gap-1 outline-none border-none cursor-pointer bg-transparent">
                      Analyze Item Difficulty <span className="material-symbols-outlined text-sm">arrow_forward</span>
                    </button>
                  </div>
                  <div className="p-4 bg-[#924700]/5 rounded-lg border border-[#924700]/10">
                    <p className="text-sm text-on-surface-variant leading-relaxed">
                      <span className="font-bold text-[#924700]">Suggestion:</span> Grade distribution for 10-A is currently skewed higher than historic average.
                    </p>
                  </div>
                </div>
                <button className="w-full py-3 bg-surface-container-high rounded-md text-sm font-bold text-on-surface hover:bg-surface-container-highest transition-colors outline-none border-none cursor-pointer">
                  Detailed AI Report
                </button>
              </div>
            </div>

            {/* Grading Rules Card */}
            <div className="bg-surface-container-low p-6 rounded-xl space-y-4 shadow-sm border border-outline-variant/10">
              <h4 className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Grading Schema</h4>
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-bold text-on-surface">90 - 100</span>
                  <span className="px-2 py-0.5 bg-green-100 text-green-700 text-[10px] font-black rounded">A+</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm font-bold text-on-surface">80 - 89</span>
                  <span className="px-2 py-0.5 bg-blue-100 text-blue-700 text-[10px] font-black rounded">A</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm font-bold text-on-surface">70 - 79</span>
                  <span className="px-2 py-0.5 bg-purple-100 text-purple-700 text-[10px] font-black rounded">B</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm font-bold text-on-surface">60 - 69</span>
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
        
        {/* Floating Action Button (Mobile) */}
        <div className="md:hidden fixed bottom-6 right-6 z-50">
          <button className="w-14 h-14 bg-primary text-white rounded-full shadow-2xl flex items-center justify-center hover:scale-110 active:scale-95 transition-all outline-none border-none cursor-pointer">
            <span className="material-symbols-outlined text-2xl block">save</span>
          </button>
        </div>

      </div>
    </MainLayout>
  );
};

export default EnterStudentGrades;

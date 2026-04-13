import React from 'react';
import DashboardLayout from "../../components/erp/parent/DashboardLayout";
const GradesAssessmentHub = () => {
  return (
    <DashboardLayout>
    <div className="p-8 max-w-7xl mx-auto space-y-8">
      {/* Hero Header Section */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8">
        <div>
          <h1 className="text-4xl font-extrabold text-on-surface tracking-tight mb-2">Grades &amp; Report Card</h1>
          <p className="text-on-surface-variant max-w-lg">Track academic progress, view detailed subject performance, and access formal evaluation reports.</p>
        </div>
        <button className="flex items-center gap-2 bg-gradient-to-br from-primary to-primary-container text-white px-6 py-3 rounded-xl font-bold shadow-lg shadow-primary/20 hover:scale-[1.02] transition-transform active:scale-95">
          <span className="material-symbols-outlined text-[20px]" data-icon="download">download</span>
          Download Full Report Card (PDF)
        </button>
      </div>

      {/* Bento Grid Layout */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
        {/* Average Grade Performance Card */}
        <div className="md:col-span-4 bg-surface-container-lowest rounded-lg p-8 flex flex-col items-center justify-center text-center relative overflow-hidden group shadow-sm">
          <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full -mr-16 -mt-16 transition-transform group-hover:scale-110"></div>
          <span className="text-sm font-bold text-primary uppercase tracking-widest mb-4">Overall Performance</span>
          <div className="relative">
            <svg className="w-40 h-40 transform -rotate-90">
              <circle className="text-surface-container-low" cx="80" cy="80" fill="transparent" r="70" stroke="currentColor" strokeWidth="8"></circle>
              <circle className="text-primary" cx="80" cy="80" fill="transparent" r="70" stroke="currentColor" strokeDasharray="440" strokeDashoffset="88" strokeWidth="8"></circle>
            </svg>
            <div className="absolute inset-0 flex flex-col items-center justify-center">
              <span className="text-5xl font-extrabold text-on-surface">B+</span>
              <span className="text-xs font-bold text-on-surface-variant">GPA 3.4</span>
            </div>
          </div>
          <p className="mt-6 text-on-surface-variant font-medium">Alex is in the top 15% of the class this term.</p>
        </div>

        {/* AI Insights Card */}
        <div className="md:col-span-8 bg-surface-container-lowest rounded-lg p-8 border border-transparent hover:border-surface-variant transition-all flex flex-col justify-between shadow-sm">
          <div className="flex items-start justify-between">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <span className="material-symbols-outlined text-tertiary" data-icon="psychology" style={{ fontVariationSettings: "'FILL' 1" }}>psychology</span>
                <h3 className="text-xl font-bold text-on-surface">AI Performance Insight</h3>
              </div>
              <p className="text-lg text-on-surface font-medium leading-relaxed max-w-2xl">
                "Alex is showing <span className="text-primary font-bold">strong improvement in Mathematics</span>, particularly in algebraic concepts. Consistent practice is yielding high accuracy in recent assessments."
              </p>
            </div>
            <div className="hidden sm:block">
              <div className="bg-tertiary-container/10 p-4 rounded-xl">
                <span className="material-symbols-outlined text-tertiary text-4xl" data-icon="trending_up">trending_up</span>
              </div>
            </div>
          </div>
          <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="bg-surface-container-low p-4 rounded-md">
              <span className="block text-xs font-bold text-on-surface-variant uppercase mb-1">Focus Area</span>
              <span className="text-on-surface font-semibold">Creative Writing</span>
            </div>
            <div className="bg-surface-container-low p-4 rounded-md">
              <span className="block text-xs font-bold text-on-surface-variant uppercase mb-1">Strength</span>
              <span className="text-on-surface font-semibold">Problem Solving</span>
            </div>
            <div className="bg-surface-container-low p-4 rounded-md">
              <span className="block text-xs font-bold text-on-surface-variant uppercase mb-1">Next Milestone</span>
              <span className="text-on-surface font-semibold">Science Fair Project</span>
            </div>
          </div>
        </div>

        {/* Subject-wise Table Section */}
        <div className="md:col-span-12 bg-surface-container-lowest rounded-lg overflow-hidden shadow-sm mt-4">
          <div className="p-8 flex flex-col sm:flex-row justify-between items-center gap-4">
            <h3 className="text-2xl font-bold text-on-surface">Detailed Assessment</h3>
            <div className="flex items-center bg-surface-container-low rounded-xl p-1">
              <button className="px-6 py-2 rounded-lg bg-white shadow-sm text-primary font-bold text-sm transition-all">Midterm</button>
              <button className="px-6 py-2 rounded-lg text-on-surface-variant font-semibold text-sm hover:text-primary transition-all">Final</button>
            </div>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-surface-container-low/50">
                  <th className="px-8 py-4 text-xs font-bold text-on-surface-variant uppercase tracking-wider">Subject</th>
                  <th className="px-8 py-4 text-xs font-bold text-on-surface-variant uppercase tracking-wider">Marks</th>
                  <th className="px-8 py-4 text-xs font-bold text-on-surface-variant uppercase tracking-wider">Grade</th>
                  <th className="px-8 py-4 text-xs font-bold text-on-surface-variant uppercase tracking-wider">Remarks</th>
                  <th className="px-8 py-4 text-xs font-bold text-on-surface-variant uppercase tracking-wider text-right">Progress</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-surface-container-low font-body">
                <tr className="hover:bg-surface-container-low/30 transition-colors group">
                  <td className="px-8 py-6">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-lg bg-blue-100 flex items-center justify-center text-blue-700">
                        <span className="material-symbols-outlined" data-icon="functions">functions</span>
                      </div>
                      <span className="font-bold text-on-surface">Mathematics</span>
                    </div>
                  </td>
                  <td className="px-8 py-6 text-on-surface font-semibold">92/100</td>
                  <td className="px-8 py-6">
                    <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-xs font-bold">A</span>
                  </td>
                  <td className="px-8 py-6 text-on-surface-variant italic text-sm">Excellent analytical skills displayed.</td>
                  <td className="px-8 py-6 text-right">
                    <span className="text-primary font-bold flex items-center justify-end gap-1">
                      <span className="material-symbols-outlined text-sm" data-icon="arrow_upward">arrow_upward</span> 4%
                    </span>
                  </td>
                </tr>
                <tr className="hover:bg-surface-container-low/30 transition-colors">
                  <td className="px-8 py-6">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-lg bg-purple-100 flex items-center justify-center text-purple-700">
                        <span className="material-symbols-outlined" data-icon="biotech">biotech</span>
                      </div>
                      <span className="font-bold text-on-surface">Science</span>
                    </div>
                  </td>
                  <td className="px-8 py-6 text-on-surface font-semibold">88/100</td>
                  <td className="px-8 py-6">
                    <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-xs font-bold">A-</span>
                  </td>
                  <td className="px-8 py-6 text-on-surface-variant italic text-sm">Strong grasp of experimental methods.</td>
                  <td className="px-8 py-6 text-right">
                    <span className="text-slate-400 font-bold flex items-center justify-end gap-1">
                      <span className="material-symbols-outlined text-sm" data-icon="horizontal_rule">horizontal_rule</span> 0%
                    </span>
                  </td>
                </tr>
                <tr className="hover:bg-surface-container-low/30 transition-colors">
                  <td className="px-8 py-6">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-lg bg-orange-100 flex items-center justify-center text-orange-700">
                        <span className="material-symbols-outlined" data-icon="translate">translate</span>
                      </div>
                      <span className="font-bold text-on-surface">English Literature</span>
                    </div>
                  </td>
                  <td className="px-8 py-6 text-on-surface font-semibold">78/100</td>
                  <td className="px-8 py-6">
                    <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-xs font-bold">B</span>
                  </td>
                  <td className="px-8 py-6 text-on-surface-variant italic text-sm">Needs focus on narrative structure.</td>
                  <td className="px-8 py-6 text-right">
                    <span className="text-error font-bold flex items-center justify-end gap-1">
                      <span className="material-symbols-outlined text-sm" data-icon="arrow_downward">arrow_downward</span> 2%
                    </span>
                  </td>
                </tr>
                <tr className="hover:bg-surface-container-low/30 transition-colors">
                  <td className="px-8 py-6">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-lg bg-teal-100 flex items-center justify-center text-teal-700">
                        <span className="material-symbols-outlined" data-icon="history_edu">history_edu</span>
                      </div>
                      <span className="font-bold text-on-surface">History</span>
                    </div>
                  </td>
                  <td className="px-8 py-6 text-on-surface font-semibold">85/100</td>
                  <td className="px-8 py-6">
                    <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-xs font-bold">B+</span>
                  </td>
                  <td className="px-8 py-6 text-on-surface-variant italic text-sm">Good understanding of global events.</td>
                  <td className="px-8 py-6 text-right">
                    <span className="text-primary font-bold flex items-center justify-end gap-1">
                      <span className="material-symbols-outlined text-sm" data-icon="arrow_upward">arrow_upward</span> 1%
                    </span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="p-8 bg-surface-container-low/30 text-center">
            <p className="text-sm text-on-surface-variant">Last updated on Oct 24, 2023. Grades are verified by the Academic Board.</p>
          </div>
        </div>

        {/* Recommendation Section */}

<div className="md:col-span-12 grid md:grid-cols-2 gap-6 mt-6">


{/* Teacher Note */}

<div className="relative overflow-hidden rounded-2xl p-8 text-white shadow-md
bg-gradient-to-br from-blue-700 to-blue-600">

<div className="relative z-10">

<h4 className="text-xl font-bold mb-3">
Teacher's Note
</h4>

<p className="opacity-95 leading-relaxed mb-8 max-w-lg">

"Alex has been a joy to have in class. His dedication to Science
projects is particularly noteworthy this semester. We recommend
encouraging more reading at home to support English scores."

</p>


<div className="flex items-center gap-3">

<img
className="w-11 h-11 rounded-full object-cover border-2 border-white/40"
src="https://lh3.googleusercontent.com/aida-public/AB6AXuBXfA36ulx0IuQ1qimhGASXgz-cS7MHQ1Mwtj5VLrES80f9YmN5-WHVqDgx2gYRoNX9drna_gfZBgqz5nUQ52ADFet1MrC1OSjfqCz2v9a7kZN3ulXU4qyo1n8IyK3hgqmyBSndDvoGRvg6PgTpkQajthTwjanSUpPHR-3-TxHlOmeszlG-InBIgau-Dmn3jA86zKkj3b8roDsOYG5wSemkxdhRsh9zdSAX8PqA4SHp5wEJt_Uho3V8zvVg_PDsyjq3Kwi8uAdicA"
alt="teacher"
/>

<div>

<p className="text-sm font-semibold">
Mr. David Sterling
</p>

<p className="text-xs text-blue-100">
Homeroom Teacher
</p>

</div>

</div>

</div>


{/* quote icon */}

<span className="material-symbols-outlined absolute bottom-2 right-4
text-white/10 text-[110px]">

format_quote

</span>

</div>



{/* Recommended Learning */}

<div className="relative overflow-hidden rounded-2xl p-8 text-white shadow-md
bg-gradient-to-br from-purple-600 to-indigo-600
flex items-center justify-between">

<div>

<h4 className="text-xl font-bold mb-3">
Recommended Learning
</h4>

<p className="opacity-95 leading-relaxed mb-6 max-w-xs">

Improve English scores with these curated narrative writing workshops.

</p>


<button
className="flex items-center gap-2 font-semibold hover:gap-3 transition-all">

View Materials

<span className="material-symbols-outlined">

arrow_forward

</span>

</button>

</div>


<span className="material-symbols-outlined text-white/20 text-[80px] hidden sm:block">

menu_book

</span>

</div>


</div>

      </div>
    </div>
    </DashboardLayout>
  );
};

export default GradesAssessmentHub;

export default function IntelligenceSection() {

return (

<section className="bg-[#eef2f7] py-28">

<div className="max-w-7xl mx-auto px-8">

{/* heading */}
<div className="text-center mb-20">

<h2 className="text-[34px] font-semibold text-[#0b1c30]">
Intelligence at Every Level
</h2>

<p className="text-[#6b7280] mt-4 max-w-2xl mx-auto">
Our AI-first approach doesn't just store data; it understands it,
helping your institution reach peak efficiency.
</p>

</div>



<div className="grid grid-cols-3 gap-8">

{/* ROW 1 */}

{/* AI Teacher */}
<div className="col-span-2 bg-white rounded-2xl p-10 shadow-[0_2px_12px_rgba(0,0,0,0.04)]">

<div className="w-12 h-12 bg-[#e8f0ff] rounded-xl flex items-center justify-center mb-6">

<svg width="22" height="22" fill="none" stroke="#2563eb" strokeWidth="2">
<circle cx="11" cy="11" r="9"/>
<path d="M11 7v4l3 2"/>
</svg>

</div>

<h3 className="font-semibold text-[18px] mb-3">
AI Teacher Assistant
</h3>

<p className="text-[#6b7280] mb-6 max-w-lg">
Generate high-quality lesson plans, interactive quizzes,
and specialized worksheets automatically. Save hours of prep time every week.
</p>

<div className="flex gap-3">

<span className="px-4 py-1 bg-[#e8f0ff] text-[#2563eb] rounded-full text-sm">
Lesson Gen
</span>

<span className="px-4 py-1 bg-[#e8f0ff] text-[#2563eb] rounded-full text-sm">
Quiz Master
</span>

</div>

</div>



{/* Student analytics */}
<div className="bg-white rounded-2xl p-10 shadow-[0_2px_12px_rgba(0,0,0,0.04)]">

<div className="w-12 h-12 bg-[#f0e8ff] rounded-xl flex items-center justify-center mb-6">

<svg width="22" height="22" fill="none" stroke="#7c3aed" strokeWidth="2">
<path d="M4 14l4-4 4 3 6-6"/>
</svg>

</div>

<h3 className="font-semibold text-[18px] mb-3">
Student Analytics
</h3>

<p className="text-[#6b7280]">
Deep-dive into performance trends and identify hidden weak areas before they become obstacles.
</p>

</div>



{/* ROW 2 */}

{/* Automated assessment */}
<div className="bg-white rounded-2xl p-10 shadow-[0_2px_12px_rgba(0,0,0,0.04)]">

<div className="w-12 h-12 bg-[#fff1e6] rounded-xl flex items-center justify-center mb-6">

<svg width="22" height="22" fill="none" stroke="#ea580c" strokeWidth="2">
<path d="M4 6h16M4 12h10M4 18h16"/>
</svg>

</div>

<h3 className="font-semibold text-[18px] mb-3">
Automated Assessment
</h3>

<p className="text-[#6b7280]">
AI evaluates open-ended answers and provides instant, constructive feedback to students.
</p>

</div>



{/* center faded text */}
<div className="flex items-center justify-center text-center">

<div>

<h3 className="text-[#d1d5db] font-semibold text-lg">
Unified ERP Platform
</h3>

<p className="text-[#d1d5db] text-sm mt-2 max-w-xs">
One source of truth for your entire school. Manage students, teachers, classes, attendance, and grades within a single, sleek interface built for the 21st century.
</p>

</div>

</div>

<div></div>



{/* ROW 3 */}

{/* speech */}
<div className="bg-white rounded-2xl p-10 shadow-[0_2px_12px_rgba(0,0,0,0.04)]">

<div className="w-12 h-12 bg-[#e8f0ff] rounded-xl flex items-center justify-center mb-6">

<svg width="22" height="22" fill="none" stroke="#2563eb" strokeWidth="2">
<path d="M4 4h16v12H7l-3 3V4z"/>
</svg>

</div>

<h3 className="font-semibold text-[18px] mb-3">
Speech & Multilingual AI
</h3>

<p className="text-[#6b7280]">
Voice-enabled interaction and seamless multilingual content support for diverse learning environments.
</p>

</div>



{/* recommendation */}
<div className="col-span-2 bg-white rounded-2xl p-10 shadow-[0_2px_12px_rgba(0,0,0,0.04)] relative overflow-hidden">

<h3 className="font-semibold text-[18px] mb-3">
Recommendation Engine
</h3>

<p className="text-[#6b7280] max-w-lg">
Personalized learning suggestions based on individual student performance, ensuring no one is left behind.
</p>


{/* decorative purple shape */}
<div className="absolute right-10 bottom-8 w-28 h-28 bg-[#f0e8ff] rounded-full">

<svg className="absolute top-6 left-6" width="20" height="20" fill="none" stroke="#7c3aed" strokeWidth="2">
<polygon points="10,2 12,8 18,8 13,12 15,18 10,14 5,18 7,12 2,8 8,8"/>
</svg>

</div>

</div>


</div>

</div>

</section>

)
}
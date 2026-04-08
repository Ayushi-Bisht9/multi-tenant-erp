import SchoolLayout from "../../components/erp/school/SchoolLayout";
import { useNavigate } from "react-router-dom";
export default function Dashboard(){
const navigate = useNavigate();
return(

<SchoolLayout>

{/* title */}

<div className="flex justify-between items-end mb-8">

<div>

<h2 className="text-3xl font-bold tracking-tight">
Academic Overview
</h2>

<p className="text-[#6b7280] mt-1">
Welcome back, Administrator. Here's what's happening today.
</p>

</div>

<button
onClick={() => navigate("/school-admin/create-class")}
className="px-5 py-2.5 bg-[#dce9ff] text-[#0058be] font-semibold rounded-md shadow-sm hover:bg-[#cfe0ff] transition"
>

Create Class

</button>

</div>



{/* stat cards */}

<div className="grid grid-cols-5 gap-6 mb-10">

{/* students */}

<div className="bg-white p-6 rounded-lg shadow-[0_8px_24px_rgba(0,0,0,0.04)] border-l-4 border-[#0058be]">

<div className="flex justify-between mb-4">

<div className="p-2 bg-[#d8e2ff] rounded-md">

<span className="material-symbols-outlined text-[#0058be]">
school
</span>

</div>

<span className="text-xs font-semibold bg-[#d8e2ff] px-1 py-1 rounded-semi">
+4%
</span>

</div>

<p className="text-sm text-[#6b7280]">
Total Students
</p>

<h3 className="text-3xl font-bold">
1,284
</h3>

</div>



{/* teachers */}

<div className="bg-white p-6 rounded-lg shadow-[0_8px_24px_rgba(0,0,0,0.04)] border-l-4 border-[#6b38d4]">

<div className="flex justify-between mb-4">

<div className="p-2 bg-[#e9ddff] rounded-md">

<span className="material-symbols-outlined text-[#6b38d4]">
supervisor_account
</span>

</div>

<span className="text-xs font-semibold bg-[#e9ddff] px-1 py-1 rounded-semi">
Stable
</span>

</div>

<p className="text-sm text-[#6b7280]">
Total Teachers
</p>

<h3 className="text-3xl font-bold">
86
</h3>

</div>



{/* classes */}

<div className="bg-white p-6 rounded-lg shadow-[0_8px_24px_rgba(0,0,0,0.04)] border-l-4 border-[#924700]">

<div className="p-2 bg-[#ffdcc6] rounded-md mb-4 w-fit">

<span className="material-symbols-outlined text-[#924700]">
meeting_room
</span>

</div>

<p className="text-sm text-[#6b7280]">
Total Classes
</p>

<h3 className="text-3xl font-bold">
42
</h3>

</div>



{/* year */}

<div className="bg-white p-6 rounded-lg shadow-[0_8px_24px_rgba(0,0,0,0.04)] border-l-4 border-[#c2c6d6]">

<div className="p-2 bg-[#e5eeff] rounded-md mb-4 w-fit">

<span className="material-symbols-outlined text-[#727785]">
calendar_today
</span>

</div>

<p className="text-sm text-[#6b7280]">
Active Year
</p>

<h3 className="text-3xl font-bold">
2024-25
</h3>

</div>



{/* attendance */}

<div className="bg-white p-6 rounded-lg shadow-[0_8px_24px_rgba(0,0,0,0.04)] border-l-4 border-[#ba1a1a]">

<div className="flex justify-between mb-4">

<div className="p-2 bg-[#ffdad6] rounded-md">

<span className="material-symbols-outlined text-[#ba1a1a]">
how_to_reg
</span>

</div>

<span className="text-xs font-semibold bg-[#ffdad6] px-1 py-1 rounded-semi">
-0.2%
</span>

</div>

<p className="text-sm text-[#6b7280]">
Attendance
</p>

<h3 className="text-3xl font-bold">
94.8%
</h3>

</div>

</div>



{/* charts */}

{/* charts */}
<div className="grid grid-cols-3 gap-8 mb-10">

{/* enrollment chart */}

<div className="col-span-2 bg-white p-8 rounded-lg shadow-[0_12px_32px_rgba(11,28,48,0.06)]">

<div className="flex justify-between items-center mb-8">

<div>

<h3 className="text-xl font-semibold">
Enrollment Growth
</h3>

<p className="text-sm text-[#6b7280]">
Annual student registration trends
</p>

</div>

<span className="text-xs font-semibold bg-[#eff4ff] px-3 py-1 rounded-md">
Last 6 Months
</span>

</div>


<div className="flex items-end gap-6 h-64 px-2">

{[
{h:"h-28",m:"SEP"},
{h:"h-40",m:"OCT"},
{h:"h-64",m:"NOV",active:true},
{h:"h-36",m:"DEC"},
{h:"h-48",m:"JAN"},
{h:"h-52",m:"FEB"}
].map((b,i)=>(

<div key={i} className="flex flex-col items-center gap-2 w-full">

<div
className={`${b.active
?"bg-[#0058be] shadow-lg shadow-[#0058be]/20"
:"bg-[#d3e4fe] hover:bg-[#0058be]"}
w-full ${b.h} rounded-t-sm transition`}
></div>

<span className={`text-[11px] font-semibold
${b.active?"text-[#0058be]":"text-[#727785]"}`}>

{b.m}

</span>

</div>

))}

</div>

</div>



{/* attendance */}

<div className="bg-white p-8 rounded-lg shadow-[0_12px_32px_rgba(11,28,48,0.06)]">

<h3 className="text-xl font-semibold mb-1">
Attendance Trend
</h3>

<p className="text-sm text-[#6b7280] mb-8">
Weekly average engagement
</p>


<div className="relative flex items-center justify-center">

<svg className="w-44 h-44 -rotate-90">

<circle
cx="88"
cy="88"
r="70"
stroke="#e5eeff"
strokeWidth="12"
fill="none"
/>

<circle
cx="88"
cy="88"
r="70"
stroke="#6b38d4"
strokeWidth="12"
fill="none"
strokeDasharray="440"
strokeDashoffset="44"
strokeLinecap="round"
/>

</svg>


<div className="absolute text-center">

<h3 className="text-3xl font-bold">
94.8%
</h3>

<p className="text-[11px] tracking-widest text-[#6b38d4] font-semibold">
EXCELLENT
</p>

</div>

</div>



<div className="mt-8 space-y-3 text-sm">

<div className="flex justify-between">

<p className="flex items-center gap-2 text-[#6b7280]">

<span className="w-2 h-2 rounded-full bg-[#6b38d4]"></span>

Present

</p>

<p className="font-semibold">
1,217
</p>

</div>


<div className="flex justify-between">

<p className="flex items-center gap-2 text-[#6b7280]">

<span className="w-2 h-2 rounded-full bg-[#d3e4fe]"></span>

Absent

</p>

<p className="font-semibold">
67
</p>

</div>

</div>

</div>

</div>



{/* activity */}

{/* activity */}

<div className="bg-white rounded-lg shadow-[0_12px_32px_rgba(11,28,48,0.06)] overflow-hidden">

<div className="px-8 py-6 flex justify-between items-center bg-[#f1f5ff]">

<h3 className="text-xl font-semibold">
Recent Activity
</h3>

<button className="text-[#0058be] font-semibold">
View All Logs
</button>

</div>



<div className="divide-y">


{/* item */}

<div className="px-8 py-5 flex justify-between items-center hover:bg-[#f8f9ff]">

<div className="flex gap-4 items-center">

<div className="w-10 h-10 rounded-full bg-[#d8e2ff] flex items-center justify-center">

<span className="material-symbols-outlined text-[#0058be]">

person_add

</span>

</div>

<div>

<p className="text-sm font-semibold">

<span className="text-[#0058be]">
Sarah Jenkins
</span>

was added as a new Student

</p>

<p className="text-xs text-[#6b7280]">
Class 10-B • 2 hours ago
</p>

</div>

</div>

<span className="text-xs text-[#727785]">
ID: #ST-9024
</span>

</div>



{/* item */}

<div className="px-8 py-5 flex justify-between items-center hover:bg-[#f8f9ff]">

<div className="flex gap-4 items-center">

<div className="w-10 h-10 rounded-full bg-[#e9ddff] flex items-center justify-center">

<span className="material-symbols-outlined text-[#6b38d4]">

assignment_ind

</span>

</div>

<div>

<p className="text-sm font-semibold">

<span className="text-[#6b38d4]">
Dr. Robert Miller
</span>

was assigned to Physics Dept.

</p>

<p className="text-xs text-[#6b7280]">
Senior Faculty • 5 hours ago
</p>

</div>

</div>

<span className="text-xs text-[#727785]">
ID: #TR-4412
</span>

</div>



{/* item */}

<div className="px-8 py-5 flex justify-between items-center hover:bg-[#f8f9ff]">

<div className="flex gap-4 items-center">

<div className="w-10 h-10 rounded-full bg-[#ffdcc6] flex items-center justify-center">

<span className="material-symbols-outlined text-[#924700]">

description

</span>

</div>

<div>

<p className="text-sm font-semibold">

New Enrollment:

<span className="text-[#924700]">
International Baccalaureate
</span>

</p>

<p className="text-xs text-[#6b7280]">
Curriculum Update • Yesterday
</p>

</div>

</div>

<span className="text-xs text-[#727785]">
CONF: #AC-2291
</span>

</div>



{/* item */}

<div className="px-8 py-5 flex justify-between items-center hover:bg-[#f8f9ff]">

<div className="flex gap-4 items-center">

<div className="w-10 h-10 rounded-full bg-[#ffdad6] flex items-center justify-center">

<span className="material-symbols-outlined text-[#ba1a1a]">

warning

</span>

</div>

<div>

<p className="text-sm font-semibold">

Absence Alert:

<span className="text-[#ba1a1a]">
High Rate in Class 8-A
</span>

</p>

<p className="text-xs text-[#6b7280]">
Automated Report • Yesterday
</p>

</div>

</div>

<span className="text-xs text-[#ba1a1a] font-semibold">
URGENT
</span>

</div>


</div>

</div>



{/* floating button */}

<div className="fixed bottom-8 right-8">

<button className="w-14 h-14 rounded-full bg-[#0058be] text-white text-2xl shadow-[0_12px_30px_rgba(0,88,190,0.35)]">
+
</button>

</div>



</SchoolLayout>

);

}
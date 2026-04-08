import SchoolLayout from "../../components/erp/school/SchoolLayout";
import { useNavigate } from "react-router-dom";

export default function TeacherAssignment(){

const navigate = useNavigate();

const assignments = [
{
name:"Elena Martinez",
email:"elena.m@school.edu",
initials:"EM",
subject:"Advanced Physics",
class:"Grade 12",
section:"Section A",
status:"Assigned",
color:"bg-[#e9ddff]",
subjectColor:"bg-[#d8e2ff] text-[#004395]"
},
{
name:"Julian Chen",
email:"j.chen@school.edu",
initials:"JC",
subject:"Mathematics",
class:"Grade 11",
section:"Section C",
status:"Assigned",
color:"bg-[#d8e2ff]",
subjectColor:"bg-[#e9ddff] text-[#5516be]"
},
{
name:"Sarah Al-Fayed",
email:"s.alfayed@school.edu",
initials:"SA",
subject:"Literature",
class:"Grade 10",
section:"Section B",
status:"Partial Load",
color:"bg-[#ffdcc6]",
subjectColor:"bg-[#d8e2ff] text-[#004395]"
},
{
name:"David Ross",
email:"d.ross@school.edu",
initials:"DR",
subject:"Computer Science",
class:"Grade 12",
section:"Lab 02",
status:"Assigned",
color:"bg-[#eff4ff]",
subjectColor:"bg-[#ffdcc6] text-[#924700]"
}
];

return(

<SchoolLayout title="Teacher Assignment">

<div className="max-w-6xl mx-auto">


{/* heading */}

<div className="flex justify-between items-end mb-8">

<div>

<h1 className="text-3xl font-bold">

Resource Allocation

</h1>


<p className="text-[#6b7280] mt-1">

Manage teaching staff roles across departments and grades.

</p>

</div>


<button
onClick={()=>navigate("/school-admin/teacher-assignment/create")}
className="flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-[#0058be] to-[#2170e4] text-white font-semibold rounded-md shadow"
>

<span className="material-symbols-outlined">
add
</span>

Assign Teacher

</button>

</div>



{/* stats */}

<div className="grid md:grid-cols-4 gap-6 mb-10">


<div className="md:col-span-2 bg-white p-6 rounded-lg border-l-4 border-[#0058be] shadow-sm">

<p className="text-xs font-bold text-[#0058be] uppercase tracking-wider">

Capacity Overview

</p>


<div className="flex items-end gap-3 mt-3">

<h3 className="text-5xl font-bold">

84%

</h3>

<p className="text-sm text-[#6b7280]">

Teaching Load Filled

</p>

</div>


<div className="h-2 bg-[#eff4ff] rounded-full mt-4">

<div className="bg-[#0058be] h-full w-[84%] rounded-full"></div>

</div>

</div>



<div className="bg-[#eff4ff] p-6 rounded-lg">

<span className="material-symbols-outlined text-[#6b38d4] text-3xl mb-3">
groups
</span>


<h3 className="text-2xl font-bold">

42

</h3>


<p className="text-sm text-[#6b7280]">

Active Teachers

</p>

</div>



<div className="bg-[#d3e4fe] p-6 rounded-lg">

<span className="material-symbols-outlined text-[#924700] text-3xl mb-3">
warning
</span>


<h3 className="text-2xl font-bold">

3

</h3>


<p className="text-sm text-[#6b7280]">

Pending Classes

</p>

</div>

</div>



{/* filters */}

<div className="bg-white rounded-lg shadow-sm overflow-hidden">


<div className="p-4 flex gap-4 items-center border-b bg-[#f8f9ff]">


<div className="relative flex-1">

<span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-[#6b7280]">
search
</span>


<input
placeholder="Search teacher or subject..."
className="w-full pl-10 pr-4 py-2 bg-[#eff4ff] rounded-md outline-none"
/>

</div>


<select className="bg-[#eff4ff] px-4 py-2 rounded-md text-sm">

<option>All Classes</option>

<option>Grade 10</option>

<option>Grade 11</option>

<option>Grade 12</option>

</select>


<select className="bg-[#eff4ff] px-4 py-2 rounded-md text-sm">

<option>Status</option>

<option>Full-time</option>

<option>Visiting</option>

</select>

</div>



{/* table */}

<table className="w-full">

<thead className="bg-[#eff4ff] text-xs uppercase text-[#6b7280]">

<tr>

<th className="px-6 py-4">Teacher Name</th>

<th className="px-6 py-4">Subject</th>

<th className="px-6 py-4">Class</th>

<th className="px-6 py-4">Section</th>

<th className="px-6 py-4">Status</th>

<th></th>

</tr>

</thead>



<tbody className="divide-y">

{assignments.map((t,i)=>(

<tr key={i} className="hover:bg-[#f8f9ff]">

<td className="px-6 py-5">

<div className="flex items-center gap-3">


<div className={`w-10 h-10 rounded-md flex items-center justify-center font-bold text-sm ${t.color}`}>

{t.initials}

</div>


<div>

<p className="font-semibold">

{t.name}

</p>

<p className="text-xs text-[#6b7280]">

{t.email}

</p>

</div>


</div>

</td>



<td className="px-6 py-5">

<span className={`px-3 py-1 rounded-full text-xs font-semibold ${t.subjectColor}`}>

{t.subject}

</span>

</td>



<td className="px-6 py-5 font-medium">

{t.class}

</td>



<td className="px-6 py-5 text-[#6b7280]">

{t.section}

</td>



<td className="px-6 py-5">

<span className={`text-xs font-semibold flex items-center gap-1 ${
t.status==="Assigned"
?"text-green-600"
:"text-orange-600"
}`}>

<span className="w-1.5 h-1.5 bg-current rounded-full"></span>

{t.status}

</span>

</td>



<td className="px-6 py-5 text-right">


<button className="p-2 hover:bg-[#eff4ff] rounded">

<span className="material-symbols-outlined text-sm">

edit

</span>

</button>


<button className="p-2 hover:bg-[#ffdad6] rounded">

<span className="material-symbols-outlined text-sm text-red-500">

delete

</span>

</button>


</td>

</tr>

))}

</tbody>

</table>



{/* pagination */}

<div className="flex justify-between items-center p-4 border-t bg-[#f8f9ff]">


<p className="text-sm text-[#6b7280]">

Showing 4 of 42 assignments

</p>


<div className="flex gap-2">


<button className="w-10 h-10 flex items-center justify-center border rounded-md">

<span className="material-symbols-outlined">
chevron_left
</span>

</button>


<span className="w-10 h-10 flex items-center justify-center bg-[#0058be] text-white rounded-md font-bold">

1

</span>


<span className="w-10 h-10 flex items-center justify-center border rounded-md">

2

</span>


<span className="w-10 h-10 flex items-center justify-center border rounded-md">

3

</span>


<button className="w-10 h-10 flex items-center justify-center border rounded-md">

<span className="material-symbols-outlined">
chevron_right
</span>

</button>


</div>


</div>


</div>



{/* insight section */}

<div className="mt-12 grid lg:grid-cols-3 gap-8">


{/* intelligent suggestion */}

<div className="lg:col-span-2 relative overflow-hidden rounded-xl p-8 bg-gradient-to-br from-[#f2edff] to-[#f8f9ff]">

{/* label */}

<div className="flex items-center gap-2 text-[#6b38d4] mb-4">

<span className="material-symbols-outlined">
auto_awesome
</span>

<span className="text-xs font-bold tracking-widest uppercase">
Intelligent Suggestions
</span>

</div>


<h3 className="text-2xl font-bold text-[#0b1c30] mb-4">

Optimized Schedule Found

</h3>


<p className="text-[#424754] max-w-xl mb-6 leading-relaxed">

Based on past performance and availability, we suggest assigning

<span className="text-[#0058be] font-semibold"> David Ross </span>

to the upcoming Web Development elective. This would resolve the conflict in Grade 11-B.

</p>


<div className="flex gap-4">

<button className="px-6 py-2.5 bg-[#6b38d4] text-white rounded-md font-semibold shadow-sm hover:opacity-95">

Review Changes

</button>


<button className="px-6 py-2.5 border border-[#6b38d4]/30 text-[#6b38d4] rounded-md font-semibold bg-white">

Dismiss

</button>

</div>


{/* decorative bulb */}

<div className="absolute right-10 bottom-6 opacity-10">

<span className="material-symbols-outlined text-[150px] text-[#6b38d4]">

lightbulb

</span>

</div>

</div>



{/* upcoming gaps */}

<div className="bg-[#eff4ff] p-8 rounded-xl">

<h4 className="font-semibold text-[#0b1c30] mb-6">

Upcoming Gaps

</h4>


<div className="space-y-5">


<div className="flex gap-3">

<div className="w-1.5 rounded-full bg-red-600"></div>


<div>

<p className="font-semibold text-[#0b1c30]">

Biology - Grade 11

</p>

<p className="text-sm text-[#6b7280]">

Vacancy starting next week

</p>

</div>


</div>



<div className="flex gap-3">

<div className="w-1.5 rounded-full bg-[#924700]"></div>


<div>

<p className="font-semibold text-[#0b1c30]">

History - Grade 10

</p>

<p className="text-sm text-[#6b7280]">

Teacher on medical leave

</p>

</div>


</div>


</div>



<button className="mt-8 flex items-center gap-1 text-[#0058be] font-semibold">

View Staffing Report

<span className="material-symbols-outlined text-sm">

arrow_forward

</span>

</button>


</div>


</div>


</div>

</SchoolLayout>

);

}
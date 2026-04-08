import SchoolLayout from "../../components/erp/school/SchoolLayout";
import { useNavigate } from "react-router-dom";

export default function Students(){

const navigate = useNavigate();

const students=[
{
name:"Julianne Davis",
email:"julianne.d@school.edu",
grade:"Grade 11",
section:"A",
id:"#STU-2024-001",
status:"Active",
img:"https://lh3.googleusercontent.com/aida-public/AB6AXuAbAPnew8xiijDRp1a0JLBdotkUREcEqT004rJd76iu9SqV1B7uO5LlV4KYqGNSe8YCuxJGo1GGRH2qNdGrp6Nvu2q9FsXdyXfpAW_4c09NGXOeVQHRIvY1x09gKI3Z2yCTD_fkF8evFKt8s3qay06WIsMjNY7dnogfMawAHWmWg_mQ83ds15X-VF-Krc-h4celWL0v99T0_YNqGxC_jaPamGz0WJUArkvZetbo0RQJa93zdq5psFVOqLDo2Mt2rnlDuYFzD1O7rw"
},

{
name:"Marcus Thompson",
email:"m.thompson@school.edu",
grade:"Grade 12",
section:"C",
id:"#STU-2024-002",
status:"Active",
img:"https://lh3.googleusercontent.com/aida-public/AB6AXuDfYEuerYDNb7XGwNSTM3KfFah5LGKc7I3gwq_oCMafJt5uPtR6WvT3646M0xwHZLbgOEmIO2fZyteS1KR3NtSVW3jb4sldDWaVtz3kMoHovBN7XMz2i9h5DPRVTfuNpNtO8_p_UdD-XiTSf7cZOVO9h5zZMbs8PcU91c-qaMOPp1591ijSTiUiEa-bjgXzAXoXV3rutbKj3GGZF_cgauRa6TUESHfG89q2SAFbpCk0Z5PHgr44Kl2B4Y5DcT-h-ARqwgK7XH186Q"
},

{
name:"Sarah Lin",
email:"s.lin@school.edu",
grade:"Grade 10",
section:"B",
id:"#STU-2024-003",
status:"Inactive",
img:"https://lh3.googleusercontent.com/aida-public/AB6AXuAwrh-Sgc0gl3KcybXt9PQJNTtqW4S5XDT-V9eVp9R_XjNGzr5-XOu9bY-NE-L5lgyZcpAD3pFqxqjYJ81f5U5ig3hhnH0vygipVS1j1p_fltV2lZGhK5fhm3yqTXgdccMtdmThO5ziT6T91vN7Y40fiW-O6_slso8g4_nZUP-P_bXL_4zctI08LZxVxxm4xhrD0X2dMYxQWO5IOSPZ41dP5xLM_UrdEqwKHKzliCyEvFjpccF5vdV0CiHa2tdpWMQ0s8dYAmXfFQ"
},

{
name:"Aaron Knight",
email:"aaron.k@school.edu",
grade:"Grade 11",
section:"A",
id:"#STU-2024-004",
status:"Active",
img:"https://lh3.googleusercontent.com/aida-public/AB6AXuDKnB1myt61Qy3pe1SlTSYnwMI8Mwd4_-djpWQiMYYw-WhsaiGQlJgT7cljFlU60PbBClAriaqD3LV_gj3gITjZf5dsRI89J-5XvHL0YqGlIeskHAxuxBKTNuZk-NdtcHritt5GQ-fSaANOFt2rVxMHkI4nmpCkoAKBZcoyScqar9kmDQyxoSs1WrSkKT4YAS773mtjYpxKdrUDHprfzjFO8VaPrbNx9V6LiBw7JEVfJJ6gWAutvMuX9gtjJ8r70pw3_fM6_PVoFQ"
}

];

return(

<SchoolLayout title="Students">

<div className="pt-6">

{/* header */}

<div className="flex justify-between items-end mb-8">

<div>

<h2 className="text-3xl font-bold">
Student Directory
</h2>

<p className="text-[#6b7280] mt-1">
Manage enrollments, track status, and view academic profiles.
</p>

</div>


<button
onClick={()=>navigate("/school-admin/add-student")}
className="bg-gradient-to-r from-[#0058be] to-[#2170e4] text-white px-6 py-3 rounded-md font-semibold flex items-center gap-2 shadow-lg"
>

<span className="material-symbols-outlined">
person_add
</span>

Add Student

</button>

</div>



{/* table */}

<div className="bg-white rounded-lg shadow-sm overflow-hidden">


{/* filters */}

<div className="p-6 flex justify-between">

<div className="flex gap-3">

<select className="bg-[#eff4ff] px-4 py-2 rounded-md text-sm">

<option>All Classes</option>
<option>Grade 10</option>
<option>Grade 11</option>

</select>


<button className="bg-[#eff4ff] px-4 py-2 rounded-md text-sm">
Recently Added
</button>

</div>


<div className="text-sm text-[#6b7280]">
Showing 48 Students
</div>

</div>



{/* table */}

<table className="w-full">

<thead className="bg-[#f3f6ff] text-xs text-[#727785]">

<tr>

<th className="px-6 py-4 text-left">
Student
</th>

<th>
Class
</th>

<th>
Section
</th>

<th>
Enrollment ID
</th>

<th className="text-center">
Status
</th>

<th>

</th>

</tr>

</thead>


<tbody className="divide-y">

{students.map((s,i)=>(

<tr
key={i}
onClick={()=>navigate("/school-admin/student-profile")}
className="hover:bg-[#f8f9ff] cursor-pointer"
>

<td className="px-6 py-5">

<div className="flex gap-4 items-center">

<img
src={s.img}
className="w-12 h-12 rounded-md object-cover"
/>


<div>

<p className="font-semibold">
{s.name}
</p>

<p className="text-xs text-[#6b7280]">
{s.email}
</p>

</div>

</div>

</td>


<td>
{s.grade}
</td>


<td>
{s.section}
</td>


<td className="text-xs text-[#727785]">
{s.id}
</td>


<td className="text-center">

<span className={`px-3 py-1 text-xs rounded-full font-semibold

${s.status==="Active"
?"bg-green-100 text-green-700"
:"bg-gray-200 text-gray-600"}

`}>

{s.status}

</span>

</td>


<td className="text-right pr-6">

<button>

<span className="material-symbols-outlined">
more_vert
</span>

</button>

</td>

</tr>

))}

</tbody>

</table>



{/* pagination */}

<div className="p-6 flex justify-between">

<button className="text-[#0058be] flex gap-1 items-center">

<span className="material-symbols-outlined text-sm">
arrow_back
</span>

Previous

</button>


<div className="flex gap-2">

<button className="w-8 h-8 bg-[#0058be] text-white rounded-full text-xs">
1
</button>

<button className="w-8 h-8 bg-[#eff4ff] rounded-full text-xs">
2
</button>

<button className="w-8 h-8 bg-[#eff4ff] rounded-full text-xs">
3
</button>

</div>


<button className="text-[#0058be] flex gap-1 items-center">

Next

<span className="material-symbols-outlined text-sm">
arrow_forward
</span>

</button>

</div>

</div>



{/* analytics cards */}

<div className="grid md:grid-cols-3 gap-6 mt-12">


<div className="md:col-span-2 bg-gradient-to-r from-[#6b38d4] to-[#8455ef] text-white p-8 rounded-xl">

<h3 className="text-xl font-bold mb-2">
Student Analytics Snapshot
</h3>

<p className="text-sm opacity-80 mb-6">
Attendance and academic performance trends show a 12% improvement in the Science department this semester.
</p>


<div className="flex gap-10">

<div>

<p className="text-xs opacity-70">
Avg Grade
</p>

<p className="text-3xl font-bold">
A- (3.7)
</p>

</div>


<div>

<p className="text-xs opacity-70">
Attendance
</p>

<p className="text-3xl font-bold">
94.2%
</p>

</div>

</div>

</div>



<div className="relative">

{/* card */}

<div className="bg-[#e7c6ad] p-8 rounded-2xl border border-[#d9b39a] max-w-md">

{/* icon */}

<div className="w-14 h-14 rounded-xl bg-[#f2dfd0] flex items-center justify-center mb-2">

<span className="material-symbols-outlined text-[#9a4d00] text-2xl">
auto_awesome
</span>

</div>


{/* title */}

<h3 className="text-xl font-semibold text-[#3a1f0b] mb-1">

AI Insight

</h3>


{/* text */}

<p className="text-[#6b3b13] leading-relaxed mb-1">

Grade 11 Section A has the highest engagement in extracurricular activities this month.

</p>


{/* link */}

<button className="text-[#8b4a00] font-semibold flex items-center gap-1 hover:gap-2 transition-all">

View Report

<span className="material-symbols-outlined text-base">
arrow_forward
</span>

</button>

</div>



{/* floating help button */}

<button className="absolute -bottom-3 -right-6 w-16 h-10 bg-[#0b1c30] text-white rounded-full shadow-xl flex items-center justify-center hover:scale-105 transition">

<span className="material-symbols-outlined">
help
</span>

</button>

</div>


</div>


</div>

</SchoolLayout>

);

}
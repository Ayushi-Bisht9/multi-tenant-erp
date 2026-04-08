import SchoolLayout from "../../components/erp/school/SchoolLayout";
import { useState } from "react";

export default function ParentStudentMapping(){

const [showModal,setShowModal]=useState(false);

const mappings=[
{
parent:"Julianne Smith",
email:"julianne@email.com",
student:"Leo Smith",
relation:"Mother",
status:"Verified",
initials:"JS",
color:"bg-[#d8e2ff]"
},
{
parent:"Marcus Aurelius",
email:"m.aurelius@hist.edu",
student:"Commodus Aurelius",
relation:"Father",
status:"Verified",
initials:"MA",
color:"bg-[#ffdcc6]"
},
{
parent:"Elena Thorne",
email:"elena@provider.net",
student:"Sophie Thorne",
relation:"Guardian",
status:"Pending",
initials:"ET",
color:"bg-[#e9ddff]"
},
{
parent:"Robert Baratheon",
email:"r.b@kingsway.edu",
student:"Gendry Waters",
relation:"Father",
status:"Verified",
initials:"RB",
color:"bg-[#d8e2ff]"
}
];

const createMapping=(e)=>{
e.preventDefault();
alert("Mapping created successfully");
setShowModal(false);
};

return(

<SchoolLayout title="Parent-Student Mapping">

<div className="max-w-6xl mx-auto">

{/* header */}

<div className="flex justify-between items-end mb-10">

<div>

<h2 className="text-3xl font-bold">

Relationship Management

</h2>

<p className="text-[#6b7280] mt-2 max-w-2xl">

Configure and manage the legal and academic connections between students and their guardians. Ensure accurate data flow for emergency contacts and academic reporting.

</p>

</div>



<button
onClick={()=>setShowModal(true)}
className="px-6 py-3 bg-gradient-to-r from-[#0058be] to-[#2170e4] text-white rounded-md font-semibold flex items-center gap-2 shadow">

<span className="material-symbols-outlined">
add
</span>

Add Mapping

</button>

</div>



{/* stats */}

<div className="grid md:grid-cols-4 gap-6 mb-10">


<div className="md:col-span-2 bg-white p-6 rounded-lg flex justify-between">

<div>

<p className="text-sm text-[#6b7280]">

Total Mappings

</p>

<h3 className="text-4xl font-bold text-[#0058be]">

1,284

</h3>

<p className="text-xs text-[#924700] mt-2">

+12 new this week

</p>

</div>


<div className="w-24 h-24 rounded-full bg-[#d8e2ff] flex items-center justify-center">

<span className="material-symbols-outlined text-[#0058be] text-4xl">

hub

</span>

</div>

</div>



<div className="bg-[#eff4ff] p-6 rounded-lg">

<p className="text-sm text-[#6b7280]">

Verification Rate

</p>

<h3 className="text-2xl font-bold">

98.2%

</h3>

<div className="h-1.5 bg-[#d8e2ff] rounded-full mt-4">

<div className="bg-[#6b38d4] w-[98%] h-full rounded-full"></div>

</div>

</div>



<div className="bg-[#eff4ff] p-6 rounded-lg">

<p className="text-sm text-[#6b7280]">

Pending Syncs

</p>

<h3 className="text-2xl font-bold text-red-600">

03

</h3>

<p className="text-xs mt-2">

Requiring review

</p>

</div>

</div>



{/* table */}

<div className="bg-white rounded-lg shadow-sm overflow-hidden">


<div className="p-6 flex justify-between items-center">


<div className="relative w-80">

<span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-[#6b7280]">

search

</span>

<input
placeholder="Search parent or student..."
className="w-full bg-[#eff4ff] pl-10 pr-4 py-2 rounded-md outline-none"
/>

</div>


<button className="flex items-center gap-2 px-4 py-2 bg-[#eff4ff] rounded-md">

<span className="material-symbols-outlined">
filter_list
</span>

Filter

</button>

</div>



<table className="w-full">

<thead className="bg-[#eff4ff] text-xs text-[#6b7280] uppercase">

<tr>

<th className="px-6 py-4">Parent</th>

<th className="px-6 py-4">Student</th>

<th className="px-6 py-4">Relationship</th>

<th className="px-6 py-4">Status</th>

<th></th>

</tr>

</thead>



<tbody className="divide-y">

{mappings.map((m,i)=>(

<tr key={i} className="hover:bg-[#f8f9ff] group">

<td className="px-6 py-5">

<div className="flex items-center gap-3">

<div className={`w-10 h-10 rounded-full flex items-center justify-center text-xs font-bold ${m.color}`}>

{m.initials}

</div>


<div>

<p className="font-semibold">

{m.parent}

</p>

<p className="text-xs text-[#6b7280]">

{m.email}

</p>

</div>

</div>

</td>



<td className="px-6 py-5 flex items-center gap-2">

<span className="material-symbols-outlined text-[#6b7280]">

school

</span>

{m.student}

</td>



<td className="px-6 py-5">

<span className="px-3 py-1 text-xs font-semibold rounded-full bg-[#e9ddff] text-[#6b38d4]">

{m.relation}

</span>

</td>



<td className="px-6 py-5">

<span className={`text-xs font-semibold flex items-center gap-1 ${
m.status==="Verified"
?"text-green-600"
:"text-[#924700]"
}`}>

<span className="w-1.5 h-1.5 rounded-full bg-current"></span>

{m.status}

</span>

</td>



<td className="px-6 py-5 text-right opacity-0 group-hover:opacity-100 transition">

<div className="flex justify-end gap-2">

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

</div>

</td>

</tr>

))}

</tbody>

</table>

</div>



{/* insight */}

<div className="mt-8 bg-[#ffdcc6]/40 p-6 rounded-lg flex gap-4">

<span className="material-symbols-outlined text-[#924700]">

lightbulb

</span>


<div>

<h4 className="font-semibold">

Mapping Intelligence

</h4>

<p className="text-sm text-[#924700]">

System detects duplicate guardians automatically.

</p>

</div>

</div>



{/* modal */}

{showModal &&(

<div className="fixed inset-0 bg-black/30 flex items-center justify-center">

<div className="bg-white w-[420px] rounded-xl shadow-xl">


<div className="p-6 border-b flex justify-between">

<h3 className="font-semibold">

Create Relationship

</h3>


<button onClick={()=>setShowModal(false)}>

<span className="material-symbols-outlined">

close

</span>

</button>

</div>



<form onSubmit={createMapping} className="p-6 space-y-4">

<input
placeholder="Search Parent"
className="w-full bg-[#eff4ff] px-4 py-3 rounded-md"
/>


<input
placeholder="Search Student"
className="w-full bg-[#eff4ff] px-4 py-3 rounded-md"
/>


<select className="w-full bg-[#eff4ff] px-4 py-3 rounded-md">

<option>Mother</option>
<option>Father</option>
<option>Guardian</option>

</select>


<div className="flex justify-end gap-3 pt-4">

<button
type="button"
onClick={()=>setShowModal(false)}
className="px-6 py-2 text-[#6b7280]">

Cancel

</button>


<button
type="submit"
className="px-6 py-2 bg-[#0058be] text-white rounded-md">

Create Mapping

</button>

</div>

</form>

</div>

</div>

)}


</div>

</SchoolLayout>

);

}
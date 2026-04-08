import SchoolLayout from "../../components/erp/school/SchoolLayout";
import { useNavigate } from "react-router-dom";

export default function RolesPermissions(){

const navigate = useNavigate();

return(

<SchoolLayout title="Roles & Permissions">

<div className="pt-6">

{/* summary */}

<div className="grid md:grid-cols-4 gap-6 mb-10">

<div className="bg-white p-6 rounded-lg">
<p className="text-xs font-semibold text-gray-500 uppercase">
Total Roles
</p>

<h3 className="text-3xl font-bold text-[#0058be]">
12
</h3>
</div>


<div className="bg-white p-6 rounded-lg border-l-4 border-[#6b38d4]">

<p className="text-xs font-semibold text-gray-500 uppercase">
Assigned Users
</p>

<h3 className="text-3xl font-bold">
1,402
</h3>

</div>


<div className="bg-white p-6 rounded-lg">

<p className="text-xs font-semibold text-gray-500 uppercase">
Pending Approvals
</p>

<h3 className="text-3xl font-bold text-[#924700]">
0
</h3>

</div>


<div className="flex justify-end items-center">

<button
onClick={()=>navigate("/school-admin/create-role")}
className="px-6 py-3 bg-gradient-to-r from-[#0058be] to-[#2170e4] text-white rounded-md font-semibold flex gap-2 items-center shadow-lg"
>

<span className="material-symbols-outlined">
add
</span>

Create Role

</button>

</div>

</div>



{/* table */}

<div className="bg-white rounded-xl shadow-sm overflow-hidden">

{/* search */}

<div className="p-6 flex justify-between items-center">

<div className="relative w-80">

<span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">

search

</span>

<input
placeholder="Search roles..."
className="w-full bg-[#eff4ff] rounded-md pl-10 pr-4 py-2 outline-none"
/>

</div>


<div className="flex gap-3">

<button className="flex items-center gap-2 px-4 py-2 hover:bg-[#eff4ff] rounded-md">

<span className="material-symbols-outlined text-sm">
filter_list
</span>

Filter

</button>


<button className="flex items-center gap-2 px-4 py-2 hover:bg-[#eff4ff] rounded-md">

<span className="material-symbols-outlined text-sm">
download
</span>

Export

</button>

</div>

</div>



{/* table */}

<table className="w-full text-left">

<thead className="bg-[#eff4ff] text-xs uppercase text-gray-500">

<tr>

<th className="px-6 py-4">
Role Name
</th>

<th className="text-center">
Users
</th>

<th>
Description
</th>

<th>
Status
</th>

<th className="text-right pr-6">
Action
</th>

</tr>

</thead>



<tbody className="divide-y">


{/* row */}

{[
{
name:"Super Admin",
icon:"admin_panel_settings",
users:3,
desc:"Full system access",
color:"#0058be"
},

{
name:"Teacher",
icon:"school",
users:142,
desc:"Manage classrooms",
color:"#6b38d4"
},

{
name:"Librarian",
icon:"menu_book",
users:4,
desc:"Manage books",
color:"#924700"
},

{
name:"Registrar",
icon:"how_to_reg",
users:8,
desc:"Enrollment records",
color:"#0058be"
},

{
name:"Content Editor",
icon:"edit_note",
users:0,
desc:"Portal content",
color:"#727785",
draft:true
}

].map((r,i)=>(

<tr key={i} className="hover:bg-[#f8f9ff]">

<td className="px-6 py-5">

<div className="flex items-center gap-3">

<div
className="w-10 h-10 rounded-md flex items-center justify-center"
style={{background:`${r.color}22`}}
>

<span
className="material-symbols-outlined"
style={{color:r.color}}
>

{r.icon}

</span>

</div>


<span className="font-semibold">
{r.name}
</span>

</div>

</td>


<td className="text-center">

<span className="px-3 py-1 bg-[#eff4ff] rounded-full text-sm">

{r.users}

</span>

</td>


<td className="text-sm text-gray-500">
{r.desc}
</td>


<td>

<span className={`px-3 py-1 rounded-full text-xs font-semibold

${r.draft
?"bg-gray-200 text-gray-600"
:"bg-green-100 text-green-700"}`}>

{r.draft?"Draft":"Active"}

</span>

</td>


<td className="text-right pr-6">

<button className="p-2 hover:bg-[#eff4ff] rounded-full">

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

<div className="px-6 py-4 flex justify-between bg-[#f8f9ff]">

<p className="text-sm text-gray-500">

Showing 5 of 12 roles

</p>


<div className="flex items-center gap-2">

<button className="p-2 rounded-md hover:bg-white">

<span className="material-symbols-outlined">
chevron_left
</span>

</button>


<span className="px-4 py-1 bg-[#0058be] text-white rounded-md text-sm">

1

</span>


<button className="px-3 py-1 hover:bg-white rounded-md">

2

</button>


<button className="p-2 rounded-md hover:bg-white">

<span className="material-symbols-outlined">
chevron_right
</span>

</button>

</div>

</div>

</div>



{/* insights */}

<div className="grid lg:grid-cols-3 gap-8 mt-10">


<div className="lg:col-span-2 bg-[#e5eeff] p-8 rounded-xl">

<h3 className="text-xl font-bold mb-4">

Security Insights

</h3>

<p className="text-sm text-gray-600 mb-6">

We detected that Librarian roles currently have access to Student Health Records. It is recommended to restrict this permission to comply with standard privacy policies.

</p>


<button className="px-5 py-2 bg-white rounded-md text-[#0058be] font-semibold">

Review Policy

</button>

</div>



<div className="bg-[#e9ddff] p-8 rounded-xl">

<h3 className="text-xl font-bold mb-4">

Role Audit

</h3>

<p className="text-sm">

Last global permission audit completed on October 24, 2023. Next scheduled audit in 14 days.

</p>

</div>


</div>

</div>

</SchoolLayout>

);

}
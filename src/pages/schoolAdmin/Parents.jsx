import SchoolLayout from "../../components/erp/school/SchoolLayout";
import { useNavigate } from "react-router-dom";

export default function Parents(){

const navigate = useNavigate();

const parents = [
{
name:"Elena Hernandez",
email:"e.hernandez@example.edu",
phone:"+1 (555) 012-3456",
students:"Julian, Mateo",
count:2,
status:"Active",
initials:"EH",
color:"bg-[#e9ddff]"
},
{
name:"Marcus Richardson",
email:"m.richardson@domain.com",
phone:"+1 (555) 098-7654",
students:"Sophia",
count:1,
status:"Active",
initials:"MR",
color:"bg-[#d8e2ff]"
},
{
name:"Sarah Chen",
email:"s.chen@techmail.net",
phone:"+1 (555) 456-7890",
students:"Li, Mei, Kevin",
count:3,
status:"Pending",
initials:"SC",
color:"bg-[#ffdcc6]"
},
{
name:"David Lawson",
email:"lawson.d@provider.com",
phone:"+1 (555) 765-4321",
students:"Emma",
count:1,
status:"Active",
initials:"DL",
color:"bg-[#eff4ff]"
},
{
name:"Amara Falade",
email:"amara.f@global.co",
phone:"+1 (555) 234-5678",
students:"Kofi, Nia",
count:2,
status:"Active",
initials:"AF",
color:"bg-[#e9ddff]"
}
];

return(

<SchoolLayout title="Parents">

<div className="max-w-6xl mx-auto">


{/* top intro */}

<div className="grid lg:grid-cols-12 gap-6 mb-8">

<div className="lg:col-span-8 bg-white border-l-4 border-[#0058be] p-6 rounded-lg shadow-sm flex justify-between items-center">

<div>

<h3 className="text-lg font-bold">

Guardian Directory

</h3>

<p className="text-sm text-[#6b7280]">

Manage emergency contacts and parental access for students.

</p>

</div>


<button
onClick={()=>navigate("/school-admin/parents/create")}
className="flex items-center gap-2 px-6 py-3 rounded-md bg-gradient-to-r from-[#0058be] to-[#2170e4] text-white font-semibold shadow">

<span className="material-symbols-outlined">
add
</span>

Add Parent

</button>

</div>



<div className="lg:col-span-4 bg-[#eff4ff] rounded-lg p-6 flex items-center gap-4">

<div className="w-12 h-12 rounded-full bg-white flex items-center justify-center text-[#0058be]">

<span className="material-symbols-outlined">

family_history

</span>

</div>


<div>

<p className="text-xs uppercase font-bold text-[#0058be]">

Active Links

</p>

<p className="text-2xl font-bold">

98.2%

</p>

</div>

</div>

</div>



{/* table */}

<div className="bg-white rounded-lg shadow-sm overflow-hidden">

<div className="p-6 flex justify-between items-center border-b">

<div className="flex gap-2">

<span className="px-3 py-1 text-xs font-bold bg-[#d8e2ff] text-[#0058be] rounded-full">

All (842)

</span>

<span className="px-3 py-1 text-xs text-[#6b7280]">

Active (830)

</span>

<span className="px-3 py-1 text-xs text-[#6b7280]">

Pending (12)

</span>

</div>


<div className="flex items-center gap-4 text-xs text-[#6b7280]">

Showing 10 of 842 records

<span className="material-symbols-outlined cursor-pointer">

filter_list

</span>

</div>

</div>



<table className="w-full text-left">

<thead className="bg-[#eff4ff] text-xs uppercase text-[#6b7280]">

<tr>

<th className="px-6 py-4">Parent Name</th>

<th className="px-6 py-4">Email</th>

<th className="px-6 py-4">Phone</th>

<th className="px-6 py-4">Linked Students</th>

<th className="px-6 py-4">Status</th>

<th></th>

</tr>

</thead>



<tbody className="divide-y">

{parents.map((p,i)=>(

<tr
key={i}
className="hover:bg-[#f8f9ff] cursor-pointer"
onClick={()=>navigate(`/school-admin/parents/${i}`)}
>

<td className="px-6 py-5">

<div className="flex items-center gap-3">

<div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-xs ${p.color}`}>

{p.initials}

</div>

<span className="font-semibold">

{p.name}

</span>

</div>

</td>



<td className="px-6 py-5 text-sm text-[#6b7280]">

{p.email}

</td>



<td className="px-6 py-5 text-sm text-[#6b7280]">

{p.phone}

</td>



<td className="px-6 py-5">

<div className="flex items-center gap-2">

<div className="w-7 h-7 rounded-full bg-[#d8e2ff] text-xs flex items-center justify-center font-bold">

{p.count}

</div>

<span className="text-xs text-[#6b7280]">

{p.students}

</span>

</div>

</td>



<td className="px-6 py-5">

<span className={`px-2 py-1 text-[11px] font-bold rounded-full flex items-center gap-1 w-fit ${
p.status==="Active"
?"bg-green-50 text-green-700"
:"bg-yellow-50 text-yellow-700"
}`}>

<span className={`w-1.5 h-1.5 rounded-full ${
p.status==="Active"
?"bg-green-500"
:"bg-yellow-500"
}`}></span>

{p.status}

</span>

</td>



<td className="px-6 py-5 text-right">

<span className="material-symbols-outlined text-[#c2c6d6]">

chevron_right

</span>

</td>

</tr>

))}

</tbody>

</table>



{/* pagination */}

<div className="flex justify-between items-center px-6 py-4 border-t">

<button className="flex items-center gap-1 text-sm text-[#6b7280]">

<span className="material-symbols-outlined text-sm">

arrow_back

</span>

Previous

</button>


<div className="flex gap-1">

<span className="w-8 h-8 flex items-center justify-center rounded bg-[#0058be] text-white text-xs font-bold">

1

</span>

<span className="w-8 h-8 flex items-center justify-center text-xs">

2

</span>

<span className="w-8 h-8 flex items-center justify-center text-xs">

3

</span>

<span className="w-8 h-8 flex items-center justify-center text-xs">

...

</span>

<span className="w-8 h-8 flex items-center justify-center text-xs">

85

</span>

</div>


<button className="flex items-center gap-1 text-sm text-[#0058be]">

Next

<span className="material-symbols-outlined text-sm">

arrow_forward

</span>

</button>

</div>

</div>



{/* insight */}

<div className="grid lg:grid-cols-12 gap-8 mt-12">


<div className="lg:col-span-5 bg-[#ffdcc6]/40 rounded-lg p-8 relative overflow-hidden">

<span className="material-symbols-outlined text-[#924700] text-3xl mb-4">

lightbulb

</span>


<h4 className="font-bold mb-2">

Smart Mapping Tip

</h4>


<p className="text-sm text-[#924700] mb-6">

Linking multiple students to a single guardian reduces duplicate data.

</p>


<button className="flex items-center gap-1 text-[#924700] font-semibold">

Review mappings

<span className="material-symbols-outlined text-sm">

east

</span>

</button>

</div>



<div className="lg:col-span-7 bg-white rounded-lg p-8 shadow-sm">

<div className="flex justify-between mb-8">

<div>

<h4 className="font-bold">

Verification Status

</h4>

<p className="text-xs text-[#6b7280]">

Quarterly audit of contact details

</p>

</div>


<div className="text-right">

<p className="text-3xl font-bold text-[#0058be]">

94%

</p>

<p className="text-xs text-[#6b7280]">

Verified

</p>

</div>

</div>


<div className="w-full bg-[#eff4ff] h-2 rounded-full mb-4">

<div className="bg-[#0058be] h-full w-[94%] rounded-full"></div>

</div>


<div className="flex justify-between text-xs text-[#6b7280]">

<span>Phone Verified: 88%</span>

<span>Email Bounced: 2%</span>

<span>Awaiting Update: 6%</span>

</div>

</div>

</div>



{/* floating button */}

<div className="fixed bottom-8 right-8">

<button className="w-14 h-14 rounded-full bg-[#0b1c30] text-white shadow-xl flex items-center justify-center">

<span className="material-symbols-outlined">

bolt

</span>

</button>

</div>


</div>

</SchoolLayout>

);

}
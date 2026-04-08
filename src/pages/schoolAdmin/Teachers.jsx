import SchoolLayout from "../../components/erp/school/SchoolLayout";
import { useNavigate } from "react-router-dom";

export default function Teachers(){

const navigate = useNavigate();

const teachers = [
{
name:"Dr. Sarah Jenkins",
email:"sarah.jenkins@architect.edu",
subject:"Advanced Physics",
phone:"+1 (555) 012-4492",
status:"Active",
img:"https://lh3.googleusercontent.com/aida-public/AB6AXuAaUJ-gpIlmqflxQr2m0H7kwu_TDuAkgothpvOv4uGCbCKkPNHJ9_8msLIqLcmhVXgrjJwOG_t4kFot8btsy-qQTG2r-C_IymF4Jzo66F1HBQ51DRlFTjLp02zf8k0lvCkuRq3KflOMxrFPUceK0cpkSd8Yq-Bjf375m5WlkS4jWxm26LT4IbGgh9wmP9LUCkxCeTBSTe7Jdzs3PaeoR4NYdvKCN8Wg6r9v1fNHUAbcWD8gpqHrnUht8vUEFnhXs-hNN1cgRXLx9A"
},
{
name:"Marcus Thorne",
email:"m.thorne@architect.edu",
subject:"Literature & Arts",
phone:"+1 (555) 012-8831",
status:"Active",
img:"https://lh3.googleusercontent.com/aida-public/AB6AXuBTp35KNPsM8WFNyNtaznNkX_s5_Aw8XOyRwuwWuVLl2wytkUXwLxFxSOEDAWoR3K-yx-hSRBd-k1F0_pRGiyMSd5-Qq9Vb79eDWyCVIzqTmkcp5aY55EYCVSAl3BusZSWKsCbQbHwoLElydr16GIXEmp-EjIHIKaIH3chSpiblTtoGt5U7Jw2QZ7kjR505q4SYRrWDgJOeG44tG8ZIBpy0saSWqZaZirlySfQMiA0FoxB4-rWUwqB4HrY7xXD_KPh8ZMX93oXf9A"
},
{
name:"Elena Rodriguez",
email:"elena.r@architect.edu",
subject:"Pure Mathematics",
phone:"+1 (555) 012-7720",
status:"On Leave",
img:"https://lh3.googleusercontent.com/aida-public/AB6AXuDmAgaoU60s9q1qeIc5rbj8aACfBVhzOLaMTB1whk7NFZfIN-2wqWxPyasyhk0PcR3t9entDi9MyDA5DSaucgyrfTDkUFtFMA-xZHTpN63lp5C0qdL3oDt4hcyFUpYhON_EulbfmDhuG-XThVQNYKoX5zpFGHpD0zdnHRngLeG1Nsu1HGjDvK_NXeEclEZ3h39UI7xLIpLrTB6e-jHUAmNEhb9XFVH0Y4DsZfOGwOgrD9Uox1kuVlkJIH9Ala9W6v77JPrx9yyuZQ"
},
{
name:"David Wu",
email:"david.wu@architect.edu",
subject:"Computer Science",
phone:"+1 (555) 012-3345",
status:"Active",
initials:"DW"
},
{
name:"Julian Vane",
email:"j.vane@architect.edu",
subject:"World History",
phone:"+1 (555) 012-9901",
status:"Active",
img:"https://lh3.googleusercontent.com/aida-public/AB6AXuAJATgBsJs5igmbLbph-z2DeGE_4eLJZzMzbszdFGweOimlC1mDgUvJNPLhSrOgtEAL_6ZgiQeDzCG5AWumdT1YswZXirQMh_6vi_HKj-qKj3xUWDszp6G5-5f0WIBPPhEk_qfpywKVsfLHjCosMnG7TlCV0EHTgxgi5b712MuFp-nFLdQAjBrMK1_hdsxM0wWchcj73t3CA2Ek1sQmw6qrmOqMDE8iStKYTbwK4aP8iVJ3LdRnB2n_NG8ukPLezZp4J0iT1LI6xw"
}
];

return(

<SchoolLayout title="Teachers">

{/* breadcrumb */}

<div className="mb-8 flex justify-between items-end">

<div>




<h2 className="text-3xl font-bold tracking-tight">

Faculty Directory

</h2>

<p className="text-[#6b7280] mt-1">

Manage and oversee all teaching staff across departments.

</p>

</div>



<button
onClick={()=>navigate("/school-admin/teachers/create")}
className="flex items-center gap-2 px-6 py-3 rounded-md bg-gradient-to-br from-[#0058be] to-[#2170e4] text-white font-semibold shadow-lg shadow-[#0058be]/20 hover:scale-[1.02] transition">

<span className="material-symbols-outlined">add</span>

Add Teacher

</button>

</div>



{/* table */}

<div className="bg-white rounded-lg overflow-hidden shadow-sm">

<table className="w-full">

<thead className="bg-[#eff4ff] text-left text-sm">

<tr>

<th className="px-8 py-5">Profile</th>

<th className="px-6 py-5">Name</th>

<th className="px-6 py-5">Specialization</th>

<th className="px-6 py-5">Phone Number</th>

<th className="px-6 py-5">Status</th>

<th></th>

</tr>

</thead>



<tbody className="divide-y">

{teachers.map((t,i)=>(

<tr key={i}
className="hover:bg-[#f8f9ff] cursor-pointer transition"
onClick={()=>navigate(`/school-admin/teachers/${i}`)}
>

<td className="px-8 py-6">

{t.img?

<img
src={t.img}
className="w-12 h-12 rounded-md object-cover"
/>

:

<div className="w-12 h-12 rounded-md bg-[#d8e2ff] flex items-center justify-center font-bold text-[#0058be]">

{t.initials}

</div>

}

</td>



<td className="px-6 py-6">

<div className="font-semibold">

{t.name}

</div>

<div className="text-xs text-[#6b7280]">

{t.email}

</div>

</td>



<td className="px-6 py-6">

<span className="px-3 py-1 rounded-full text-xs font-semibold bg-[#e9ddff] text-[#6b38d4]">

{t.subject}

</span>

</td>



<td className="px-6 py-6 text-sm text-[#6b7280]">

{t.phone}

</td>



<td className="px-6 py-6">

<div className="flex items-center gap-2">

<span className={`w-2 h-2 rounded-full ${
t.status==="Active"
?"bg-green-500"
:"bg-yellow-500"
}`}></span>

<span className="text-xs font-semibold">

{t.status}

</span>

</div>

</td>



<td className="px-6">

<span className="material-symbols-outlined text-[#6b7280]">

chevron_right

</span>

</td>

</tr>

))}

</tbody>

</table>



{/* pagination */}

<div className="flex justify-between items-center px-8 py-4 border-t text-sm">

<p className="text-[#6b7280]">

Showing 5 of 48 Teachers

</p>



<div className="flex items-center gap-1">

<button className="p-2">

<span className="material-symbols-outlined">

chevron_left

</span>

</button>


<button className="w-8 h-8 rounded-md bg-[#0058be] text-white text-xs font-bold">

1

</button>

<button className="w-8 h-8 rounded-md hover:bg-[#eff4ff] text-xs font-bold">

2

</button>

<button className="w-8 h-8 rounded-md hover:bg-[#eff4ff] text-xs font-bold">

3

</button>


<button className="p-2">

<span className="material-symbols-outlined">

chevron_right

</span>

</button>

</div>

</div>

</div>



{/* analytics */}

<div className="mt-12 grid lg:grid-cols-3 gap-6">

<div className="lg:col-span-2 bg-gradient-to-r from-[#0058be] to-[#2170e4] rounded-xl p-8 text-white relative overflow-hidden">

<h3 className="text-2xl font-bold mb-2">

Faculty Performance Analytics

</h3>

<p className="text-blue-100 text-sm mb-6 max-w-md">

Real-time engagement metrics and student feedback averages across all teaching departments.

</p>



<div className="flex gap-10">

<div>

<p className="text-3xl font-bold">

4.8

</p>

<p className="text-xs uppercase opacity-70">

Avg Rating

</p>

</div>



<div>

<p className="text-3xl font-bold">

92%

</p>

<p className="text-xs uppercase opacity-70">

Attendance

</p>

</div>



<div>

<p className="text-3xl font-bold">

12

</p>

<p className="text-xs uppercase opacity-70">

New Courses

</p>

</div>

</div>

</div>



{/* insight */}

<div className="bg-[#eff4ff] rounded-xl p-6 flex flex-col justify-between">

<div>

<span className="material-symbols-outlined text-[#924700] mb-4">

auto_awesome

</span>


<h4 className="font-semibold">

Intelligence Insight

</h4>


<p className="text-xs text-[#6b7280] mt-2">

Science department shows 15% higher student engagement after Teacher Jenkins' new curriculum update.

</p>

</div>



<button className="text-sm font-semibold text-[#924700] mt-4 flex items-center gap-1">

View full report

<span className="material-symbols-outlined text-[16px]">

arrow_forward

</span>

</button>

</div>

</div>

</SchoolLayout>

);

}
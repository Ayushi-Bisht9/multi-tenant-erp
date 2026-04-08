import SchoolLayout from "../../components/erp/school/SchoolLayout";
import { useNavigate } from "react-router-dom";

export default function AcademicYears(){

const navigate = useNavigate();

return(

<SchoolLayout title="Academic Years">

<div className="pt-6">

{/* header */}

<div className="flex justify-between items-end mb-10">

<div className="max-w-2xl">

<h1 className="text-4xl font-bold tracking-tight mb-2">

Cycle Management

</h1>

<p className="text-[#6b7280]">

Configure and monitor the lifecycle of your institution's academic periods. Ensure seamless transitions between terms.

</p>

</div>


<button
onClick={()=>navigate("/school-admin/create-academic-year")}
className="px-6 py-3 rounded-md text-white font-semibold bg-gradient-to-r from-[#0058be] to-[#2170e4] shadow-lg flex gap-2 items-center"
>

<span className="material-symbols-outlined">

add

</span>

Add Academic Year

</button>

</div>



{/* stats */}

<div className="grid md:grid-cols-3 gap-6 mb-10">


<div className="bg-white p-6 rounded-lg border-l-4 border-[#0058be] shadow-sm">

<p className="text-sm text-gray-500">

Current Active Year

</p>

<h3 className="text-2xl font-bold text-[#0058be]">

2024-2025

</h3>

<p className="text-xs text-green-600 mt-2 flex gap-1">

<span className="material-symbols-outlined text-sm">

check_circle

</span>

Live for all campuses

</p>

</div>



<div className="bg-white p-6 rounded-lg border-l-4 border-[#924700] shadow-sm">

<p className="text-sm text-gray-500">

Upcoming Cycle

</p>

<h3 className="text-2xl font-bold text-[#924700]">

2025-2026

</h3>

<p className="text-xs text-gray-500 mt-2">

Registration starts in 45 days

</p>

</div>



<div className="bg-white p-6 rounded-lg border-l-4 border-[#6b38d4] shadow-sm">

<p className="text-sm text-gray-500">

Archived Periods

</p>

<h3 className="text-2xl font-bold text-[#6b38d4]">

12 Years

</h3>

<p className="text-xs text-gray-500 mt-2">

Data retained since 2012

</p>

</div>

</div>



{/* table */}

<div className="bg-white rounded-xl shadow-sm overflow-hidden">

<div className="px-8 py-6 flex justify-between bg-[#eff4ff]">

<h3 className="font-bold">

Yearly Timeline

</h3>

<div className="flex gap-2">

<button className="p-2 hover:bg-white rounded-md">

<span className="material-symbols-outlined">

filter_list

</span>

</button>


<button className="p-2 hover:bg-white rounded-md">

<span className="material-symbols-outlined">

download

</span>

</button>

</div>

</div>



<table className="w-full text-left">

<thead>

<tr className="text-sm text-gray-500">

<th className="px-8 py-4">

Year

</th>

<th>

Start Date

</th>

<th>

End Date

</th>

<th>

Status

</th>

<th className="text-right pr-8">

Action

</th>

</tr>

</thead>



<tbody className="divide-y">

<tr className="hover:bg-[#f8f9ff]">

<td className="px-8 py-5 font-semibold">

2024-2025

</td>

<td>

Sep 01 2024

</td>

<td>

Jun 30 2025

</td>

<td>

<span className="px-3 py-1 text-xs bg-green-100 text-green-700 rounded-full">

Active

</span>

</td>

<td className="text-right pr-8">

<button className="text-[#0058be]">

Edit

</button>

</td>

</tr>



<tr className="hover:bg-[#f8f9ff]">

<td className="px-8 py-5 font-semibold">

2025-2026

</td>

<td>

Sep 01 2025

</td>

<td>

Jun 30 2026

</td>

<td>

<span className="px-3 py-1 text-xs bg-blue-100 text-blue-700 rounded-full">

Inactive

</span>

</td>

<td className="text-right pr-8">

<button className="px-3 py-1 bg-[#d8e2ff] rounded-md text-[#0058be]">

Set Active

</button>

</td>

</tr>



<tr className="hover:bg-[#f8f9ff] opacity-60">

<td className="px-8 py-5 font-semibold">

2023-2024

</td>

<td>

Sep 01 2023

</td>

<td>

Jun 30 2024

</td>

<td>

<span className="px-3 py-1 text-xs bg-gray-200 rounded-full">

Archived

</span>

</td>

<td className="text-right pr-8">

View

</td>

</tr>

</tbody>

</table>





{/* pagination */}

<div className="px-8 py-5 flex justify-between items-center text-sm bg-[#eff4ff]">

<p className="text-[#6b7280]">

Showing 1 to 3 of 12 years

</p>


<div className="flex items-center gap-2">

<button className="w-10 h-10 rounded-md border border-[#c2c6d6] flex items-center justify-center text-[#727785]">

<span className="material-symbols-outlined">
chevron_left
</span>

</button>


<button className="w-10 h-10 rounded-md bg-[#0058be] text-white font-semibold flex items-center justify-center">

1

</button>


<button className="w-10 h-10 rounded-md border border-[#c2c6d6] flex items-center justify-center">

2

</button>


<button className="w-10 h-10 rounded-md border border-[#c2c6d6] flex items-center justify-center">

3

</button>


<button className="w-10 h-10 rounded-md border border-[#c2c6d6] flex items-center justify-center">

<span className="material-symbols-outlined">
chevron_right
</span>

</button>

</div>

</div>

</div> {/* ❗ THIS WAS MISSING - closes table card */}



{/* insight section */}

<div className="grid lg:grid-cols-2 gap-8 mt-12">


<div className="bg-[#0b1c30] text-white rounded-xl p-8">

<h4 className="text-xl font-bold mb-4">

Prepare for 2025-2026 Shift

</h4>

<p className="text-sm text-blue-100">

15% growth expected in student enrollment.

</p>

</div>



<div className="bg-white rounded-xl p-8 border shadow-sm">

<h4 className="text-xl font-bold mb-2">

Automated Rollover

</h4>

<p className="text-sm text-gray-500 mb-6">

Student data auto transition to next year.

</p>


<button className="text-[#6b38d4] font-semibold">

Change Settings

</button>

</div>


</div>


</div>

</SchoolLayout>

);

}
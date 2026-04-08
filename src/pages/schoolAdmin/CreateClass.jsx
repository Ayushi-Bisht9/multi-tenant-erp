import SchoolLayout from "../../components/erp/school/SchoolLayout";
import { useNavigate } from "react-router-dom";
export default function CreateClass() {
const navigate = useNavigate();

const handleSave = (e) => {

e.preventDefault();

alert("Class created successfully");

navigate("/school-admin");

};

return (

<SchoolLayout title="Create Class">

<div className="px-8 py-10 max-w-6xl mx-auto">

<div className="flex flex-col lg:flex-row gap-8">

{/* LEFT SIDE FORM */}

<div className="flex-1 space-y-6">

<div className="bg-white rounded-lg p-8 shadow-sm">

{/* heading */}

<div className="mb-8">

<h3 className="text-2xl font-bold">

Class Details

</h3>

<p className="text-[#6b7280] mt-1">

Establish a new academic division for the current term.

</p>

</div>



<form className="space-y-8">

{/* class name */}

<div className="space-y-2">

<label className="text-sm font-semibold ml-1">

Class Name

</label>

<input
placeholder="e.g., Grade 10 - Section A"
className="w-full bg-[#eff4ff] rounded-md px-4 py-3.5 outline-none focus:ring-2 focus:ring-[#0058be]/20"
/>

</div>



{/* teacher */}

<div className="space-y-2">

<label className="text-sm font-semibold ml-1">

Class Teacher

</label>

<div className="relative">

<select
className="w-full bg-[#eff4ff] rounded-md px-4 py-3.5 outline-none appearance-none">

<option>

Select faculty member

</option>

<option>

Dr. Eleanor Shellstrop

</option>

<option>

Prof. Chidi Anagonye

</option>

<option>

Jason Mendoza

</option>

<option>

Tahani Al-Jamil

</option>

</select>


<span className="material-symbols-outlined absolute right-4 top-1/2 -translate-y-1/2 text-gray-400">

expand_more

</span>

</div>

</div>



{/* description */}

<div className="space-y-2">

<label className="text-sm font-semibold ml-1">

Description

</label>

<textarea
rows={5}
placeholder="Provide class details..."
className="w-full bg-[#eff4ff] rounded-md px-4 py-3.5 outline-none focus:ring-2 focus:ring-[#0058be]/20"
/>

</div>



{/* buttons */}

<div className="flex justify-end gap-4 pt-4">

<button
type="button"
onClick={()=>navigate("/school-admin")}
className="px-6 py-3 rounded-md text-gray-600 hover:bg-[#eff4ff]"
>

Cancel

</button>


<button
type="submit"
className="px-8 py-3 bg-[#0058be] text-white rounded-md font-semibold"
>

Save Class

</button>

</div>

</form>

</div>

</div>



{/* RIGHT SIDE PANEL */}

<div className="w-full lg:w-80 space-y-6">

{/* tips */}

<div className="bg-[#dce9ff] rounded-lg p-6 relative overflow-hidden">

<h4 className="font-bold text-[#0058be] mb-3 flex items-center gap-2">

<span className="material-symbols-outlined">

lightbulb

</span>

Quick Tips

</h4>


<ul className="space-y-4 text-xs text-[#374151]">

<li className="flex gap-3">

<span className="w-1.5 h-1.5 bg-[#0058be] rounded-full mt-2"></span>

<p>

Ensure class naming follows school convention.

</p>

</li>


<li className="flex gap-3">

<span className="w-1.5 h-1.5 bg-[#0058be] rounded-full mt-2"></span>

<p>

Assigned teachers get access to student records.

</p>

</li>

</ul>

</div>



{/* insight */}

<div className="bg-white rounded-lg p-6 shadow-sm border">

<div className="flex justify-between mb-6">

<h4 className="font-bold">

Faculty Availability

</h4>


<span className="bg-[#924700] text-white text-[10px] px-2 py-1 rounded-full">

AI Insight

</span>

</div>



<div className="space-y-4">

<div className="flex items-center gap-4">

<div className="w-8 h-8 rounded-full bg-[#e5eeff] flex items-center justify-center">

<span className="material-symbols-outlined text-[#0058be]">

person

</span>

</div>



<div className="flex-1">

<div className="h-1.5 bg-[#e5eeff] rounded-full">

<div className="h-full bg-[#0058be] w-3/4"></div>

</div>


<p className="text-[11px] mt-1 text-[#6b7280]">

Faculty Utilization 75%

</p>

</div>

</div>



<p className="text-[11px] italic border-l-2 border-[#924700] pl-3 text-[#6b7280]">

82% teachers already assigned to classes.

</p>

</div>

</div>



{/* image */}

<div className="rounded-lg overflow-hidden h-48 shadow-lg relative">

<img
src="https://lh3.googleusercontent.com/aida-public/AB6AXuBs653vpFwa05tDinomSI41zfeilzKYWW_7kH1dw-gCsKsUdImN8Sn8fmMhf9wvUHBXo1Nw0wyLcGycoi4K0LpeLioZ1s8HpJl1yMtNVHqBdfv-MM-A5ChlnwTjLbnLthAuf8NLUxCDzu8DCWTiCcX2NAhe2fPNBE7lavSURe0iMUgMI16Ah9ZkSMxaf6U27OyUUJ7KuKJZ5iVL2eo0r994gkaRzykz1G7BaCF5U9sF70py2SFdFI1Sn9lVFxsbqRZqf7eqQaDK_w"
/>


<div className="absolute bottom-0 w-full p-4 bg-gradient-to-t from-black/70 text-white text-xs">

Create environments where every student can excel.

</div>

</div>

</div>

</div>

</div>

</SchoolLayout>

);

}
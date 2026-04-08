import SchoolLayout from "../../components/erp/school/SchoolLayout";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

export default function AddMapping(){

const navigate = useNavigate();

const [relation,setRelation]=useState("father");

const save=(e)=>{
e.preventDefault();

alert("Mapping saved successfully");

navigate("/school-admin/mapping");
};

return(

<SchoolLayout title="Parent-Student Mapping">

<div className="max-w-6xl mx-auto">


{/* breadcrumb */}

<div className="flex justify-between items-start mb-10">


<div>

<div className="flex items-center gap-2 text-[11px] font-bold uppercase tracking-widest text-[#8b93a7] mb-3">

Dashboard

<span className="material-symbols-outlined text-[14px]">
chevron_right
</span>

Parent-Student Mapping

<span className="material-symbols-outlined text-[14px]">
chevron_right
</span>

<span className="text-[#0b1c30]">
Add Mapping
</span>

</div>


<h1 className="text-3xl font-bold text-[#0b1c30]">

Add Mapping

</h1>


<p className="text-[#6b7280] mt-1">

Establish a new relationship link between a legal guardian and a student.

</p>


</div>



<button
onClick={()=>navigate("/school-admin/mapping")}
className="flex items-center gap-2 px-4 py-2 bg-[#e5eeff] text-[#0058be] font-semibold rounded-md hover:bg-[#dce9ff] transition">

<span className="material-symbols-outlined text-[18px]">
arrow_back
</span>

Go Back

</button>


</div>



{/* main grid */}

<div className="grid lg:grid-cols-12 gap-8">


{/* LEFT FORM */}

<div className="lg:col-span-8 bg-white p-8 rounded-lg shadow-[0_8px_24px_rgba(0,0,0,0.04)]">


<form onSubmit={save} className="space-y-8">


{/* selects */}

<div className="grid md:grid-cols-2 gap-6">


<div>

<label className="text-sm font-semibold text-[#0b1c30]">

Select Parent

</label>


<div className="relative mt-2">

<span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-[#8b93a7]">
person_search
</span>


<select className="w-full pl-10 pr-4 py-3 bg-[#eff4ff] rounded-md text-sm outline-none">

<option>Search by name or email...</option>

<option>Robert Harrison</option>

<option>Sarah Jenkins</option>

<option>Michael Chen</option>

</select>


<span className="material-symbols-outlined absolute right-3 top-1/2 -translate-y-1/2 text-[#8b93a7]">
expand_more
</span>


</div>

</div>



<div>

<label className="text-sm font-semibold text-[#0b1c30]">

Select Student

</label>


<div className="relative mt-2">

<span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-[#8b93a7]">
school
</span>


<select className="w-full pl-10 pr-4 py-3 bg-[#eff4ff] rounded-md text-sm outline-none">

<option>Search by student ID or name...</option>

<option>Leo Harrison</option>

<option>Emily Jenkins</option>

<option>Chloe Chen</option>

</select>


<span className="material-symbols-outlined absolute right-3 top-1/2 -translate-y-1/2 text-[#8b93a7]">
expand_more
</span>

</div>

</div>


</div>



{/* relationship */}

<div>

<label className="text-sm font-semibold text-[#0b1c30]">

Relationship Type

</label>


<div className="grid grid-cols-3 gap-4 mt-3">


{[
{key:"father",icon:"man"},
{key:"mother",icon:"woman"},
{key:"guardian",icon:"shield"}
].map(item=>(

<div
key={item.key}
onClick={()=>setRelation(item.key)}
className={`p-5 rounded-md cursor-pointer flex flex-col items-center gap-2 bg-[#eff4ff] border transition ${
relation===item.key
?"border-[#0058be] bg-[#e5eeff]"
:"border-transparent"
}`}>

<span className="material-symbols-outlined text-[#424754]">
{item.icon}
</span>


<span className="text-xs font-semibold tracking-wider text-[#424754] uppercase">
{item.key}
</span>


</div>

))}


</div>

</div>



{/* buttons */}

<div className="flex justify-end gap-6 pt-6 border-t border-[#e5eeff]">


<button
type="button"
onClick={()=>navigate("/school-admin/mapping")}
className="text-[#6b7280] font-semibold">

Cancel

</button>


<button
type="submit"
className="px-8 py-2.5 bg-gradient-to-r from-[#0058be] to-[#2170e4] text-white font-semibold rounded-md shadow">

Save Mapping

</button>


</div>


</form>


</div>



{/* RIGHT PANEL */}

<div className="lg:col-span-4 space-y-6">


{/* insight */}

<div className="bg-[#dce9ff] p-6 rounded-lg relative">


<span className="absolute top-4 right-4 text-[10px] font-bold tracking-widest px-2 py-1 bg-white/70 text-[#0058be] rounded-full">

INSIGHT

</span>


<h3 className="text-lg font-bold text-[#0b1c30] mb-2">

Mapping Intelligence

</h3>


<p className="text-sm text-[#424754] mb-6">

Adding a parent-student mapping enables synchronized communication, grade reporting, and emergency contact workflows.

</p>



<div className="space-y-4 text-sm">


<div className="flex gap-3">

<div className="w-8 h-8 bg-[#e5eeff] rounded-full flex items-center justify-center">

<span className="material-symbols-outlined text-[#0058be] text-sm">
verified
</span>

</div>

System verifies that the parent is already registered in Users module.

</div>



<div className="flex gap-3">

<div className="w-8 h-8 bg-[#e9ddff] rounded-full flex items-center justify-center">

<span className="material-symbols-outlined text-[#6b38d4] text-sm">
auto_awesome
</span>

</div>

Notification will be sent once mapping confirmed.

</div>


</div>


</div>



{/* preview */}

<div className="bg-white border border-[#e5eeff] p-6 rounded-lg">


<p className="text-xs font-bold text-[#8b93a7] tracking-widest mb-5">

PREVIEW CONNECTION

</p>


<div className="flex items-center justify-center gap-4">


<div className="flex flex-col items-center gap-2">

<div className="w-12 h-12 rounded-full bg-[#eff4ff] flex items-center justify-center">

<span className="material-symbols-outlined text-[#8b93a7]">
person
</span>

</div>

<span className="text-[11px] text-[#8b93a7]">
Parent
</span>

</div>



<div className="flex-1 border-t border-dashed border-[#d1d7e5]"></div>


<div className="w-8 h-8 rounded-full bg-[#e5eeff] flex items-center justify-center">

<span className="material-symbols-outlined text-[#0058be] text-sm">
link
</span>

</div>


<div className="flex-1 border-t border-dashed border-[#d1d7e5]"></div>



<div className="flex flex-col items-center gap-2">

<div className="w-12 h-12 rounded-full bg-[#eff4ff] flex items-center justify-center">

<span className="material-symbols-outlined text-[#8b93a7]">
school
</span>

</div>

<span className="text-[11px] text-[#8b93a7]">
Student
</span>

</div>


</div>


</div>


</div>


</div>


</div>

</SchoolLayout>

);

}
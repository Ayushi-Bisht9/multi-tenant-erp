import SchoolLayout from "../../components/erp/school/SchoolLayout";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

export default function AddTeacher(){

const navigate = useNavigate();

const [subjects,setSubjects] = useState(["Mathematics","Advanced Physics"]);

const removeSubject=(s)=>{
setSubjects(subjects.filter(x=>x!==s));
};

const handleSave=(e)=>{
e.preventDefault();

alert("Teacher profile created successfully");

navigate("/school-admin/teachers");
};

return(

<SchoolLayout title="Teachers">

<div className="max-w-5xl mx-auto">

{/* breadcrumb + go back */}

<div className="flex justify-between items-center mb-8">

<div className="flex items-center gap-2 text-xs text-[#6b7280]">

<span>Dashboard</span>

<span className="material-symbols-outlined text-[12px]">
chevron_right
</span>

<span>Users</span>

<span className="material-symbols-outlined text-[12px]">
chevron_right
</span>

<span>Teachers</span>

<span className="material-symbols-outlined text-[12px]">
chevron_right
</span>

<span className="text-[#0058be] font-semibold">
Add Teacher
</span>

</div>


<button
onClick={()=>navigate("/school-admin/teachers")}
className="flex items-center gap-2 px-4 py-2 text-[#0058be] font-semibold hover:bg-[#eff4ff] rounded-md">

<span className="material-symbols-outlined">
arrow_back
</span>

Go Back

</button>

</div>



{/* heading */}

<div className="mb-10">

<h1 className="text-4xl font-bold mb-2">

Onboard New Faculty

</h1>

<p className="text-[#6b7280]">

Register a new educator into the academic system with departmental privileges.

</p>

</div>



<form onSubmit={handleSave}>

<div className="grid lg:grid-cols-12 gap-6">

{/* LEFT COLUMN */}

<div className="lg:col-span-4 space-y-6">


{/* photo */}

<div className="bg-white p-8 rounded-xl border border-[#e5eeff] text-center">

<div className="relative">

<div className="w-44 h-44 rounded-full mx-auto border-4 border-dashed border-[#c2c6d6] flex items-center justify-center bg-[#eff4ff]">

<span className="material-symbols-outlined text-5xl text-[#727785]">
add_a_photo
</span>

</div>


<button
type="button"
className="absolute bottom-2 right-6 bg-[#0058be] text-white p-3 rounded-full shadow-lg">

<span className="material-symbols-outlined">
edit
</span>

</button>

</div>


<h3 className="font-semibold mt-4">

Teacher Photo

</h3>


<p className="text-xs text-[#6b7280] mt-2">

Upload a high-resolution professional portrait for the faculty portal.

</p>

</div>



{/* AI card */}

<div className="bg-gradient-to-br from-[#0058be] to-[#2170e4] p-8 rounded-xl text-white relative overflow-hidden">

<span className="material-symbols-outlined text-4xl mb-8">
auto_awesome
</span>


<h3 className="text-xl font-bold mb-2">

Intelligent Mapping

</h3>


<p className="text-sm opacity-90">

Our system automatically suggests class assignments based on teacher qualifications and existing gaps.

</p>

</div>


</div>



{/* RIGHT COLUMN */}

<div className="lg:col-span-8 space-y-6">


{/* basic */}

<div className="bg-white p-8 rounded-xl border border-[#e5eeff]">

<div className="flex items-center gap-3 mb-8">

<div className="w-10 h-10 rounded-md bg-[#eff4ff] flex items-center justify-center">

<span className="material-symbols-outlined text-[#0058be]">

badge

</span>

</div>


<h2 className="text-xl font-semibold">

Basic Information

</h2>

</div>



<div className="grid md:grid-cols-2 gap-6">

<div className="space-y-2">

<label className="text-xs font-semibold uppercase text-[#6b7280]">

Full Name

</label>

<input
placeholder="Dr. Sarah Jenkins"
className="w-full bg-[#eff4ff] px-4 py-3 rounded-md outline-none"
/>

</div>


<div className="space-y-2">

<label className="text-xs font-semibold uppercase text-[#6b7280]">

Professional Email

</label>

<input
placeholder="s.jenkins@academy.edu"
className="w-full bg-[#eff4ff] px-4 py-3 rounded-md outline-none"
/>

</div>


<div className="space-y-2">

<label className="text-xs font-semibold uppercase text-[#6b7280]">

Phone Number

</label>

<input
placeholder="+1 (555) 000-0000"
className="w-full bg-[#eff4ff] px-4 py-3 rounded-md outline-none"
/>

</div>


<div className="space-y-2">

<label className="text-xs font-semibold uppercase text-[#6b7280]">

Highest Qualification

</label>

<select className="w-full bg-[#eff4ff] px-4 py-3 rounded-md outline-none">

<option>Select Qualification</option>
<option>PhD</option>
<option>Masters</option>

</select>

</div>

</div>

</div>



{/* department */}

<div className="bg-white p-8 rounded-xl border border-[#e5eeff]">

<div className="flex items-center gap-3 mb-8">

<div className="w-10 h-10 rounded-md bg-[#eff4ff] flex items-center justify-center">

<span className="material-symbols-outlined text-[#0058be]">

account_tree

</span>

</div>


<h2 className="text-xl font-semibold">

Department & Allocation

</h2>

</div>



{/* subjects */}

<div className="space-y-3 mb-8">

<label className="text-xs font-semibold uppercase text-[#6b7280]">

Subject Expertise

</label>


<div className="flex flex-wrap gap-2 p-3 bg-[#eff4ff] rounded-md">

{subjects.map(s=>(

<span
key={s}
className="flex items-center gap-2 px-3 py-1 bg-white text-[#0058be] text-sm font-semibold rounded-full shadow-sm">

{s}

<button
type="button"
onClick={()=>removeSubject(s)}
>

<span className="material-symbols-outlined text-[16px] text-red-500">

close

</span>

</button>

</span>

))}


<button
type="button"
className="text-[#2170e4] font-semibold flex items-center gap-1">

<span className="material-symbols-outlined text-sm">
add
</span>

Add Subject

</button>

</div>

</div>



{/* classes */}

<div className="space-y-3">

<label className="text-xs font-semibold uppercase text-[#6b7280]">

Assigned Classes

</label>


<div className="grid grid-cols-2 md:grid-cols-4 gap-3">

{["Grade 10A","Grade 11C","Grade 12B","Grade 9D"].map(c=>(

<label
key={c}
className="flex items-center gap-3 p-4 bg-[#eff4ff] rounded-md cursor-pointer hover:bg-[#e5eeff]">

<input type="checkbox" defaultChecked={c==="Grade 10A" || c==="Grade 11C"} />

<span className="text-sm font-medium">

{c}

</span>

</label>

))}

</div>

</div>

</div>



{/* footer buttons */}

<div className="flex justify-end gap-4 pt-4">

<button
type="button"
onClick={()=>navigate("/school-admin/teachers")}
className="px-8 py-3 font-semibold text-[#6b7280] hover:bg-[#eff4ff] rounded-md">

Cancel

</button>


<button
type="submit"
className="px-10 py-3 bg-gradient-to-r from-[#0058be] to-[#2170e4] text-white font-bold rounded-md shadow-lg shadow-[#0058be]/20">

Save Teacher Profile

</button>

</div>


</div>

</div>

</form>

</div>

</SchoolLayout>

);

}
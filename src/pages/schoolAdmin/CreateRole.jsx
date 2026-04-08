import SchoolLayout from "../../components/erp/school/SchoolLayout";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

export default function CreateRole(){

const navigate = useNavigate();

const [permissions,setPermissions] = useState({
users:false,
academics:true,
attendance:true,
grades:false,
finance:false,
ai:false
});

const toggle = (key)=>{
setPermissions({...permissions,[key]:!permissions[key]});
};

const handleSave=(e)=>{
e.preventDefault();

alert("Role created successfully");

navigate("/school-admin/roles");
};

return(

<SchoolLayout title="Roles & Permissions">

<div className="px-12 py-10 max-w-6xl mx-auto">

<div className="flex justify-between items-start mb-10">

{/* LEFT */}

<div>

<h1 className="text-3xl font-semibold tracking-tight text-[#0b1c30]">
Create New Role
</h1>

<p className="text-[#6b7280] mt-1 max-w-xl">
Define administrative access and feature scope for institutional staff.
</p>

</div>



{/* RIGHT */}

<button
onClick={()=>navigate("/school-admin/roles")}
className="flex items-center gap-2 px-4 py-2.5 bg-[#e5eeff] hover:bg-[#dce9ff] text-[#0058be] font-semibold rounded-md shadow-sm transition mt-1"
>

<span className="material-symbols-outlined text-[18px]">
arrow_back
</span>

Go Back

</button>

</div>



<div className="grid lg:grid-cols-3 gap-10">

{/* LEFT */}

<div className="lg:col-span-2 space-y-8">

{/* role info */}

<div className="bg-white p-8 rounded-lg shadow-sm">

<h2 className="text-xl font-bold mb-8 flex gap-3 items-center">

<span className="w-2 h-8 bg-[#0058be] rounded-full"></span>

Role Information

</h2>


<div className="space-y-6">

<div>

<label className="text-sm font-bold ml-1 block mb-2">
Role Name
</label>

<input
placeholder="Senior Department Head"
className="w-full bg-[#eff4ff] px-4 py-3 rounded-md outline-none"
/>

</div>


<div>

<label className="text-sm font-bold ml-1 block mb-2">
Description
</label>

<textarea
rows="4"
placeholder="Briefly describe the responsibilities associated with this role..."
className="w-full bg-[#eff4ff] px-4 py-3 rounded-md outline-none"
/>

</div>

</div>

</div>



{/* permissions */}

<div className="bg-white p-8 rounded-lg shadow-sm">

<div className="flex justify-between mb-8">

<h2 className="text-xl font-bold flex gap-3 items-center">

<span className="w-2 h-8 bg-[#6b38d4] rounded-full"></span>

Module Permissions

</h2>


<span className="text-xs font-bold text-[#6b38d4] bg-[#e9ddff] px-3 py-1 rounded-full">
Full Control
</span>

</div>


<div className="grid md:grid-cols-2 gap-4">

{[
{key:"users",name:"Users",icon:"group",color:"#0058be"},
{key:"academics",name:"Academics",icon:"school",color:"#6b38d4"},
{key:"attendance",name:"Attendance",icon:"fact_check",color:"#924700"},
{key:"grades",name:"Grades",icon:"grade",color:"#ba1a1a"},
{key:"finance",name:"Finance",icon:"account_balance",color:"#0f9d58"},
{key:"ai",name:"AI Insights",icon:"auto_awesome",color:"#6b38d4"}
].map(p=>(

<div
key={p.key}
className="p-6 rounded-lg bg-[#eff4ff] hover:bg-white border transition"
>

<div className="flex justify-between mb-4">

<div className="flex gap-3 items-center">

<div
className="w-10 h-10 rounded-md flex items-center justify-center"
style={{background:`${p.color}22`}}
>

<span
className="material-symbols-outlined"
style={{color:p.color}}
>

{p.icon}

</span>

</div>

<span className="font-bold">
{p.name}
</span>

</div>


<input
type="checkbox"
checked={permissions[p.key]}
onChange={()=>toggle(p.key)}
className="w-5 h-5"
/>

</div>


<p className="text-xs text-[#6b7280]">

Module access permission

</p>

</div>

))}

</div>

</div>

</div>



{/* RIGHT */}

<div className="space-y-8">


{/* tips */}

<div className="bg-gradient-to-br from-[#0058be] to-[#2170e4] p-8 rounded-lg text-white shadow-lg">

<h3 className="text-2xl font-bold mb-4">
Security Best Practices
</h3>


<ul className="space-y-4 text-sm">

<li className="flex gap-2">

<span className="material-symbols-outlined text-sm">
check_circle
</span>

Follow least privilege principle

</li>


<li className="flex gap-2">

<span className="material-symbols-outlined text-sm">
check_circle
</span>

Restrict finance modules

</li>


<li className="flex gap-2">

<span className="material-symbols-outlined text-sm">
check_circle
</span>

Roles editable anytime

</li>

</ul>

</div>



{/* summary */}

<div className="bg-[#e5eeff] p-8 rounded-lg">

<h4 className="font-bold mb-4">
Quick Summary
</h4>


<div className="space-y-4 text-sm">

<div className="flex justify-between">

<span>
Modules Selected
</span>

<span className="font-bold text-[#0058be]">

{Object.values(permissions).filter(Boolean).length} / 6

</span>

</div>


<div className="flex justify-between">

<span>
Access Type
</span>

<span className="font-bold">
Standard
</span>

</div>


<button
onClick={handleSave}
className="w-full py-4 bg-gradient-to-r from-[#0058be] to-[#2170e4] text-white rounded-md font-bold mt-4"
>

Save Role

</button>

</div>

</div>



{/* image */}

<div className="h-48 rounded-lg overflow-hidden relative">

<img
src="https://lh3.googleusercontent.com/aida-public/AB6AXuAzU8QYY-ri01FT5iCd265N_bDVZF5vK-A8iREV56KOXzqJeNF5Kl4vSo3CcBGRKQjem9nH-bq70BEk25SGIBd3TvilLHwWDhgGgwQ1kzkNGFSpJJf3SabXfpLiQcKvLCvKLeVMs8OfB-gK1As749xq6obwUiBA0GVakeZRqf_r7HnYRqbsBnfEUwkTiYDdfjfb6za0zcJZkC1jie9qh-2SLQ6xpIbNNYZ4DdcxiCZ6-QdvifvMMDyXvVIXVLkAwhGLfedMIjbhnw"
className="w-full h-full object-cover"
/>


<div className="absolute inset-0 bg-[#0058be]/40 flex items-center justify-center p-6">

<p className="text-white font-bold text-center">

Empowering Institutions through Intelligent Design

</p>

</div>

</div>


</div>

</div>

</div>

</SchoolLayout>

);

}
import SchoolLayout from "../../components/erp/school/SchoolLayout";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

export default function AddParent(){

const navigate = useNavigate();

const [form,setForm]=useState({
name:"",
relation:"Father",
email:"",
phone:"",
address:""
});

const handleChange=(e)=>{
setForm({...form,[e.target.name]:e.target.value});
};

const handleSave=(e)=>{
e.preventDefault();

alert("Parent profile created successfully");

navigate("/school-admin/parents");
};

return(

<SchoolLayout title="Parents">

<div className="max-w-6xl mx-auto space-y-10">


{/* breadcrumb */}

<div className="flex justify-between items-center">

<div className="flex items-center gap-3 text-sm text-[#6b7280]">

<span className="cursor-pointer hover:text-[#0058be]">
Dashboard
</span>

<span className="material-symbols-outlined text-[16px]">
chevron_right
</span>

<span>
Users
</span>

<span className="material-symbols-outlined text-[16px]">
chevron_right
</span>

<span
onClick={()=>navigate("/school-admin/parents")}
className="cursor-pointer hover:text-[#0058be]">

Parents

</span>

<span className="material-symbols-outlined text-[16px]">
chevron_right
</span>

<span className="text-[#0058be] font-semibold">
Add Parent
</span>

</div>


<button
onClick={()=>navigate("/school-admin/parents")}
className="flex items-center gap-2 px-4 py-2 text-[#0058be] font-semibold hover:bg-[#eff4ff] rounded-md transition">

<span className="material-symbols-outlined">
arrow_back
</span>

Go Back

</button>

</div>



{/* heading */}

<div>

<h1 className="text-4xl font-bold">

Register New Parent

</h1>

<p className="text-[#6b7280] mt-2 text-lg">

Onboard a new guardian to the institutional ecosystem.

</p>

</div>



<form onSubmit={handleSave}>

<div className="grid lg:grid-cols-12 gap-8">


{/* LEFT COLUMN */}

<div className="lg:col-span-4 space-y-8">


{/* photo */}

<div className="bg-white p-8 rounded-xl border border-[#e5eeff] shadow-sm text-center">

<div className="relative group">

<div className="w-48 h-48 rounded-full bg-[#eff4ff] border-4 border-dashed border-[#c2c6d6] flex items-center justify-center mx-auto">

<span className="material-symbols-outlined text-5xl text-[#727785]">
add_a_photo
</span>

</div>


<button
type="button"
className="absolute bottom-3 right-6 w-12 h-12 bg-[#0058be] text-white rounded-full flex items-center justify-center shadow-lg">

<span className="material-symbols-outlined">
edit
</span>

</button>

</div>


<h3 className="font-semibold mt-4">

Profile Photo

</h3>

<p className="text-sm text-[#6b7280] mt-1">

Upload a high-resolution portrait for identification.

</p>

</div>



{/* info card */}

<div className="bg-[#d8e2ff]/40 p-6 rounded-xl border border-[#0058be]/10 flex gap-4">

<span className="material-symbols-outlined text-[#0058be]">

info

</span>

<p className="text-sm text-[#0b1c30]">

Adding accurate photo enables automated pickup verification.

</p>

</div>

</div>



{/* RIGHT COLUMN */}

<div className="lg:col-span-8 space-y-10">


<div className="bg-white p-8 rounded-xl border border-[#e5eeff] shadow-sm space-y-10">


{/* personal */}

<div className="space-y-6">

<div className="flex items-center gap-3">

<div className="w-8 h-8 bg-[#eff4ff] rounded-md flex items-center justify-center">

<span className="material-symbols-outlined text-[#0058be]">

person

</span>

</div>

<h2 className="text-xl font-semibold">

Personal Identification

</h2>

</div>


<div className="grid md:grid-cols-2 gap-6">


<div className="flex flex-col gap-2">

<label className="text-xs font-semibold uppercase text-[#6b7280]">

Parent Full Name

</label>

<input
name="name"
onChange={handleChange}
placeholder="Jonathan Aris"
className="bg-[#eff4ff] px-4 py-3 rounded-md outline-none"
/>

</div>


<div className="flex flex-col gap-2">

<label className="text-xs font-semibold uppercase text-[#6b7280]">

Relationship

</label>

<select
name="relation"
onChange={handleChange}
className="bg-[#eff4ff] px-4 py-3 rounded-md outline-none">

<option>Father</option>
<option>Mother</option>
<option>Guardian</option>

</select>

</div>


</div>

</div>



{/* contact */}

<div className="space-y-6">

<div className="flex items-center gap-3">

<div className="w-8 h-8 bg-[#eff4ff] rounded-md flex items-center justify-center">

<span className="material-symbols-outlined text-[#0058be]">

contact_mail

</span>

</div>

<h2 className="text-xl font-semibold">

Contact Architecture

</h2>

</div>


<div className="grid md:grid-cols-2 gap-6">


<div className="flex flex-col gap-2">

<label className="text-xs font-semibold uppercase text-[#6b7280]">

Email Address

</label>


<div className="relative">

<span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-[#6b7280]">

alternate_email

</span>

<input
name="email"
onChange={handleChange}
placeholder="j.aris@email.com"
className="w-full bg-[#eff4ff] pl-10 pr-4 py-3 rounded-md outline-none"
/>

</div>

</div>


<div className="flex flex-col gap-2">

<label className="text-xs font-semibold uppercase text-[#6b7280]">

Phone Number

</label>


<div className="relative">

<span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-[#6b7280]">

call

</span>

<input
name="phone"
onChange={handleChange}
placeholder="+1 (555) 000-0000"
className="w-full bg-[#eff4ff] pl-10 pr-4 py-3 rounded-md outline-none"
/>

</div>

</div>


<div className="md:col-span-2 flex flex-col gap-2">

<label className="text-xs font-semibold uppercase text-[#6b7280]">

Physical Address

</label>


<div className="relative">

<span className="material-symbols-outlined absolute left-3 top-3 text-[#6b7280]">

location_on

</span>

<textarea
name="address"
onChange={handleChange}
rows="3"
placeholder="Street, City, Zip"
className="w-full bg-[#eff4ff] pl-10 pr-4 py-3 rounded-md outline-none"
/>

</div>

</div>


</div>

</div>



{/* buttons */}

<div className="flex justify-end gap-4 pt-6 border-t">

<button
type="button"
onClick={()=>navigate("/school-admin/parents")}
className="px-8 py-3 font-semibold text-[#6b7280] hover:bg-[#eff4ff] rounded-md">

Cancel

</button>


<button
type="submit"
className="px-10 py-3 bg-gradient-to-r from-[#0058be] to-[#2170e4] text-white font-bold rounded-md shadow-lg flex items-center gap-2">

<span className="material-symbols-outlined">

save

</span>

Save Parent Profile

</button>

</div>


</div>



{/* bottom cards */}

<div className="grid md:grid-cols-2 gap-6">


<div className="bg-[#eff4ff] p-6 rounded-lg border border-[#0058be]/10">

<h4 className="font-semibold text-[#0058be] flex items-center gap-2">

<span className="material-symbols-outlined">
family_history
</span>

Linked Students

</h4>

<p className="text-sm text-[#6b7280] mt-2">

After saving, parent can be mapped to students.

</p>

</div>



<div className="bg-[#eff4ff] p-6 rounded-lg border border-[#0058be]/10">

<h4 className="font-semibold text-[#0058be] flex items-center gap-2">

<span className="material-symbols-outlined">
notifications_active
</span>

Communication Preferences

</h4>

<p className="text-sm text-[#6b7280] mt-2">

Email & SMS alerts enabled by default.

</p>

</div>


</div>


</div>

</div>

</form>



{/* floating draft indicator */}

<div className="fixed bottom-8 right-8 bg-white px-6 py-4 rounded-full shadow-xl flex items-center gap-3">

<div className="w-2 h-2 bg-[#6b38d4] rounded-full animate-pulse"></div>

<p className="text-sm">

Draft Profile Created:
<span className="font-semibold text-[#6b38d4] ml-1">

Unsaved

</span>

</p>

</div>


</div>

</SchoolLayout>

);

}
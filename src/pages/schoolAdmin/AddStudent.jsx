import SchoolLayout from "../../components/erp/school/SchoolLayout";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

export default function AddStudent(){

const navigate = useNavigate();

const [form,setForm]=useState({
name:"",
gender:"",
dob:"",
blood:"",
phone:"",
email:"",
address:"",
grade:"Class 10",
section:"Section A",
roll:""
});

const handleChange=(e)=>{
setForm({...form,[e.target.name]:e.target.value});
};

const handleSave=(e)=>{
e.preventDefault();
alert("Student record saved successfully");
navigate("/school-admin/students");
};

return(

<SchoolLayout title="Students">

<div className="max-w-6xl mx-auto space-y-8">


{/* breadcrumb */}

<div className="flex justify-between items-center">







{/* heading */}

<div>

<h1 className="text-3xl font-semibold">
Add New Student
</h1>

<p className="text-[#6b7280] mt-1 max-w-2xl">
Register a new student to the academic system. Ensure all mandatory information is accurate for seamless records management.
</p>

</div>

<button
onClick={()=>navigate("/school-admin/students")}
className="flex items-center gap-2 px-4 py-2 bg-[#e5eeff] hover:bg-[#dce9ff] text-[#0058be] font-semibold rounded-md transition">

<span className="material-symbols-outlined text-[18px]">
arrow_back
</span>

Go Back

</button>

</div>

<form onSubmit={handleSave}>

<div className="grid lg:grid-cols-3 gap-8">


{/* LEFT COLUMN */}

<div className="lg:col-span-2 space-y-8">


{/* Basic Info */}

<div className="grid md:grid-cols-2 gap-6">

<div className="flex flex-col gap-2">

<label className="text-xs font-semibold text-[#6b7280] tracking-wider uppercase">
Full Name
</label>

<input
name="name"
placeholder="e.g. Julian Alexander"
onChange={handleChange}
className="bg-[#eff4ff] px-4 py-3 rounded-md outline-none focus:bg-white focus:ring-2 focus:ring-[#0058be]/10 transition"
/>

</div>


<div className="flex flex-col gap-2">

<label className="text-xs font-semibold text-[#6b7280] tracking-wider uppercase">
Gender
</label>

<select
name="gender"
onChange={handleChange}
className="bg-[#eff4ff] px-4 py-3 rounded-md outline-none">

<option>Select Gender</option>
<option>Male</option>
<option>Female</option>

</select>

</div>


<div className="flex flex-col gap-2">

<label className="text-xs font-semibold text-[#6b7280] tracking-wider uppercase">
Date of Birth
</label>

<input
type="date"
name="dob"
onChange={handleChange}
className="bg-[#eff4ff] px-4 py-3 rounded-md outline-none"
/>

</div>


<div className="flex flex-col gap-2">

<label className="text-xs font-semibold text-[#6b7280] tracking-wider uppercase">
Blood Group
</label>

<select
name="blood"
onChange={handleChange}
className="bg-[#eff4ff] px-4 py-3 rounded-md outline-none">

<option>Select Blood Group</option>
<option>A+</option>
<option>B+</option>
<option>O+</option>

</select>

</div>

</div>



{/* Contact */}

<div className="grid md:grid-cols-2 gap-6">

<div className="flex flex-col gap-2">

<label className="text-xs font-semibold text-[#6b7280] tracking-wider uppercase">
Mobile Number
</label>

<input
name="phone"
placeholder="+1 (555) 000-0000"
onChange={handleChange}
className="bg-[#eff4ff] px-4 py-3 rounded-md outline-none"
/>

</div>


<div className="flex flex-col gap-2">

<label className="text-xs font-semibold text-[#6b7280] tracking-wider uppercase">
Email Address
</label>

<input
name="email"
placeholder="student@academy.edu"
onChange={handleChange}
className="bg-[#eff4ff] px-4 py-3 rounded-md outline-none"
/>

</div>


<div className="md:col-span-2 flex flex-col gap-2">

<label className="text-xs font-semibold text-[#6b7280] tracking-wider uppercase">
Residential Address
</label>

<textarea
name="address"
placeholder="Street, City, Zip Code"
rows="3"
onChange={handleChange}
className="bg-[#eff4ff] px-4 py-3 rounded-md outline-none"
/>

</div>

</div>



{/* FOOTER aligned with left */}

<div className="flex justify-end gap-4 pt-16">

<button
type="button"
onClick={()=>navigate("/school-admin/students")}
className="px-8 py-3 text-[#6b7280] font-semibold hover:bg-[#eff4ff] rounded-md transition">

Cancel & Discard

</button>


<button
type="submit"
className="px-10 py-3 bg-gradient-to-r from-[#0058be] to-[#2170e4] text-white font-bold rounded-md shadow-lg shadow-[#0058be]/20 hover:scale-[1.02] active:scale-95 transition flex items-center gap-2">

<span className="material-symbols-outlined">
save
</span>

Save Student Record

</button>

</div>


</div>



{/* RIGHT COLUMN */}

<div className="space-y-8">


{/* Photo */}

<div className="bg-white p-8 rounded-xl border border-[#e5eeff] shadow-[0_6px_20px_rgba(0,0,0,0.04)] text-center">

<div className="w-32 h-32 mx-auto rounded-full bg-[#e5eeff] flex items-center justify-center overflow-hidden border-4 border-white shadow-lg">

<img
src="https://lh3.googleusercontent.com/aida-public/AB6AXuAYL2GdSdXkQF_QboAdnw1o3X0V4wiJr8LixmKIflH_kYptP3tutulTJLYiURi0vZw0lILetHS7GSH2aJiccAMub8Fxp8mPVnOZRc6Qdyum6vjihDfbb0IPPiLmnUJJCvlGRi6lWCTsHqANZh04Fc3KUvBRKkBb2tMljnL4a97MV8A5kzWvHcUn-mf-ZAj-TsmRqKKjQXk_QS2Q446UB5y8CnwB3BUwOMUbVJV7ZpsF7XenF_tYywih-ByZVbGArIlenpdiCMEwaw"
className="w-full h-full object-cover"
/>

</div>

<h4 className="mt-4 font-semibold">
Student Photograph
</h4>

<p className="text-xs text-[#6b7280]">
PNG, JPG up to 5MB
</p>

</div>



{/* Academic */}

<div className="bg-white p-6 rounded-xl border border-[#e5eeff] shadow-[0_6px_20px_rgba(0,0,0,0.04)]">

<h3 className="font-semibold mb-4">
Academic Record
</h3>


<div className="space-y-4">

<input
value="ADM-2024-0812"
disabled
className="bg-[#eff4ff] px-3 py-2 rounded-md text-sm"
/>


<div className="grid grid-cols-2 gap-3">

<select
name="grade"
onChange={handleChange}
className="bg-[#eff4ff] px-3 py-2 rounded-md text-sm">

<option>Class 10</option>
<option>Class 11</option>

</select>


<select
name="section"
onChange={handleChange}
className="bg-[#eff4ff] px-3 py-2 rounded-md text-sm">

<option>Section A</option>
<option>Section B</option>

</select>

</div>


<input
name="roll"
placeholder="e.g. 42"
onChange={handleChange}
className="bg-[#eff4ff] px-3 py-2 rounded-md text-sm"
/>

</div>

</div>



{/* Parent */}

<div className="bg-white p-6 rounded-xl border border-[#e5eeff] shadow-[0_6px_20px_rgba(0,0,0,0.04)]">

<h3 className="font-semibold mb-4">
Parental Connection
</h3>


<div className="relative mb-4">

<span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-[#6b7280] text-sm">
search
</span>

<input
placeholder="Search by name or ID..."
className="w-full bg-[#eff4ff] pl-10 pr-4 py-2 rounded-md outline-none"
/>

</div>


<div className="bg-[#eff4ff] p-3 rounded-lg flex justify-between items-center">

<div className="flex gap-3 items-center">

<div className="w-10 h-10 rounded bg-white flex items-center justify-center font-semibold text-[#6b38d4]">

RM

</div>

<div>

<p className="text-sm font-semibold">
Robert Miller
</p>

<p className="text-xs text-[#6b7280]">
Guardian ID: G-9021
</p>

</div>

</div>


<button>

<span className="material-symbols-outlined text-red-500">
close
</span>

</button>

</div>

</div>


</div>


</div>

</form>

</div>

</SchoolLayout>

);

}
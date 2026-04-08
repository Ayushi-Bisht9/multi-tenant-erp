import SchoolLayout from "../../components/erp/school/SchoolLayout";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

export default function AssignTeacher(){

const navigate = useNavigate();

const [form,setForm]=useState({
teacher:"",
subject:"",
classSection:""
});

const change=(e)=>{
setForm({...form,[e.target.name]:e.target.value});
};

const submit=(e)=>{
e.preventDefault();

alert("Teacher assigned successfully");

navigate("/school-admin/teacher-assignment");
};

const resetForm=()=>{
setForm({
teacher:"",
subject:"",
classSection:""
});
};

return(

<SchoolLayout title="Teacher Assignment">

<div className="max-w-6xl mx-auto">


{/* heading */}

<div className="flex justify-between items-center mb-8">

<div className="mb-10">

<h1 className="text-4xl font-bold mb-2">

Assign Teacher

</h1>

<p className="text-[#6b7280] text-lg">

Allocate faculty members to specific subjects and classrooms for the 2024-25 academic year.

</p>

</div>

<button
onClick={()=>navigate("/school-admin/teacher-assignment")}
className="flex items-center gap-2 px-4 py-2 bg-[#eff4ff] text-[#0058be] rounded-md font-semibold">

<span className="material-symbols-outlined text-sm">
arrow_back
</span>

Go Back

</button>

</div>



<div className="grid grid-cols-12 gap-8">


{/* form */}

<div className="col-span-12 lg:col-span-8 space-y-8">


<div className="bg-white p-8 rounded-lg shadow-sm">


<form onSubmit={submit} className="space-y-8">


{/* teacher */}

<div>

<label className="block text-sm font-semibold mb-3">

Select Teacher

</label>


<div className="relative">

<span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-[#6b7280]">
person_search
</span>


<select
name="teacher"
value={form.teacher}
onChange={change}
className="w-full pl-12 pr-4 py-4 bg-[#eff4ff] rounded-md outline-none">

<option value="">
Search by name or department...
</option>

<option>
Dr. Alistair Vance (Science Dept.)
</option>

<option>
Prof. Sarah Jenkins (Math Dept.)
</option>

<option>
Mr. Julian Thorne (History Dept.)
</option>

</select>


<span className="material-symbols-outlined absolute right-4 top-1/2 -translate-y-1/2 text-[#6b7280]">
expand_more
</span>


</div>

</div>



{/* subject + class */}

<div className="grid md:grid-cols-2 gap-6">


<div>

<label className="block text-sm font-semibold mb-3">

Subject Selection

</label>


<select
name="subject"
value={form.subject}
onChange={change}
className="w-full px-4 py-4 bg-[#eff4ff] rounded-md outline-none">

<option value="">
Choose Subject
</option>

<option>
Advanced Physics (PHY-401)
</option>

<option>
Calculus II (MTH-202)
</option>

<option>
World History
</option>

</select>

</div>



<div>

<label className="block text-sm font-semibold mb-3">

Class & Section

</label>


<select
name="classSection"
value={form.classSection}
onChange={change}
className="w-full px-4 py-4 bg-[#eff4ff] rounded-md outline-none">

<option value="">
Select Grade/Section
</option>

<option>
Grade 10 - Section A
</option>

<option>
Grade 11 - Section C
</option>

<option>
Grade 12 - Honors
</option>

</select>

</div>


</div>



{/* AI insight */}

<div className="bg-[#ffdcc6] p-4 rounded-md flex gap-3">

<span className="material-symbols-outlined text-[#924700]">
auto_awesome
</span>


<div>

<p className="text-sm font-semibold">

Intelligent Schedule Check

</p>

<p className="text-xs text-[#924700]">

No scheduling conflicts found for Dr. Alistair Vance. He currently has 14 hours available in the weekly roster.
</p>

</div>

</div>



{/* buttons */}

<div className="flex justify-end gap-4">


<button
type="button"
onClick={resetForm}
className="px-6 py-3 text-[#0058be] font-semibold">

Clear Form

</button>


<button
type="submit"
className="px-10 py-3 bg-gradient-to-r from-[#0058be] to-[#2170e4] text-white font-bold rounded-md shadow">

Assign Teacher

</button>


</div>


</form>


</div>



{/* capacity */}

<div className="grid md:grid-cols-2 gap-6">


<div className="bg-[#eff4ff] p-6 rounded-lg">


<h3 className="font-semibold mb-4">

Teaching Capacity

</h3>


<div className="space-y-4">


<div>

<div className="flex justify-between text-sm">

Science Department

<span className="font-semibold">

85% Assigned
</span>

</div>


<div className="h-2 bg-white rounded-full mt-2">

<div className="h-full w-[85%] bg-[#0058be] rounded-full"></div>

</div>


</div>



<div>

<div className="flex justify-between text-sm">

Math Department

<span className="font-semibold">

62% Assigned

</span>

</div>


<div className="h-2 bg-white rounded-full mt-2">

<div className="h-full w-[62%] bg-[#6b38d4] rounded-full"></div>

</div>


</div>


</div>


</div>



<div className="bg-[#eff4ff] p-6 rounded-lg">


<h3 className="font-semibold mb-4">

Upcoming Deadlines

</h3>


<div className="space-y-3 text-sm">


<div className="flex gap-3">

<div className="w-2 h-2 bg-red-500 rounded-full mt-1"></div>

Finalize Q1 electives

<span className="ml-auto text-[#6b7280]">

2d left

</span>

</div>



<div className="flex gap-3">

<div className="w-2 h-2 bg-[#0058be] rounded-full mt-1"></div>

Faculty orientation

<span className="ml-auto text-[#6b7280]">

Sep 12

</span>

</div>


</div>


</div>


</div>


</div>



{/* right panel */}

<div className="col-span-12 lg:col-span-4 space-y-8">


<div className="bg-white p-6 rounded-lg shadow-sm">


<h4 className="font-semibold mb-6">

Current Stats

</h4>


<div className="space-y-6">


<div>

<p className="text-3xl font-bold text-[#0058be]">

124

</p>

<p className="text-xs text-[#6b7280] uppercase">

Teachers Assigned

</p>

</div>



<div>

<p className="text-3xl font-bold text-[#6b38d4]">

08

</p>

<p className="text-xs text-[#6b7280] uppercase">

Unmapped Subjects

</p>

</div>


</div>


</div>



<div className="bg-[#eff4ff] p-6 rounded-lg">


<h4 className="font-semibold mb-4">

Assignment Tips

</h4>


<ul className="space-y-3 text-sm">


<li className="flex gap-3">

<span className="font-bold text-[#0058be]">
01
</span>

Ensure teacher is active

</li>



<li className="flex gap-3">

<span className="font-bold text-[#0058be]">
02
</span>

Check room capacity

</li>



<li className="flex gap-3">

<span className="font-bold text-[#0058be]">
03
</span>

Can revise within 24 hours

</li>


</ul>


</div>


</div>


</div>


</div>

</SchoolLayout>

);

}
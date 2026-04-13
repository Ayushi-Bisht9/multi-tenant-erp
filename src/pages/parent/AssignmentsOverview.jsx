import React from "react";
import DashboardLayout from "../../components/erp/parent/DashboardLayout";

const AssignmentsOverview = () => {

return (

<DashboardLayout>

<div className="p-8 max-w-7xl mx-auto space-y-8">


{/* HEADER */}

<div>

<h1 className="text-3xl font-bold text-gray-900">
Assignments
</h1>

<p className="text-gray-500 mt-1">
Track, review, and manage upcoming and completed coursework.
</p>

</div>



{/* AI INSIGHT */}

<div className="bg-gradient-to-r from-blue-700 to-blue-500 rounded-xl p-6 flex items-center justify-between shadow-md">

<div className="flex items-center gap-4">

<div className="bg-white/20 p-3 rounded-lg">

<span className="material-symbols-outlined text-white">
psychology
</span>

</div>

<div>

<p className="text-xs text-blue-100 uppercase tracking-wider">
AI Intelligence Insight
</p>

<p className="text-white font-semibold text-lg">
Physics lab report is due tomorrow.
</p>

</div>

</div>


<button className="bg-white text-blue-700 px-4 py-2 rounded-md text-sm font-semibold hover:bg-blue-50 transition">

Review Now

</button>

</div>



{/* METRICS */}

<div className="grid md:grid-cols-3 gap-6">


<div className="bg-white rounded-xl p-6 shadow-sm border flex justify-between">

<div>

<p className="text-gray-500 text-sm">
Total Assignments
</p>

<p className="text-3xl font-bold">
24
</p>

</div>

<div className="bg-gray-100 p-3 rounded-lg">

<span className="material-symbols-outlined text-blue-600">
analytics
</span>

</div>

</div>



<div className="bg-white rounded-xl p-6 shadow-sm border flex justify-between">

<div>

<p className="text-gray-500 text-sm">
Submitted
</p>

<p className="text-3xl font-bold text-purple-600">
22
</p>

</div>

<div className="bg-purple-100 p-3 rounded-lg">

<span className="material-symbols-outlined text-purple-600">
check_circle
</span>

</div>

</div>



<div className="bg-white rounded-xl p-6 shadow-sm border flex justify-between">

<div>

<p className="text-gray-500 text-sm">
Pending
</p>

<p className="text-3xl font-bold text-amber-700">
2
</p>

</div>

<div className="bg-amber-100 p-3 rounded-lg">

<span className="material-symbols-outlined text-amber-700">
pending_actions
</span>

</div>

</div>


</div>



{/* ROADMAP + SIDEBAR */}

<div className="grid lg:grid-cols-3 gap-6">


{/* ROADMAP */}

<div className="lg:col-span-2 space-y-4">


<div className="flex justify-between items-center">

<h3 className="text-lg font-semibold">
Assignment Roadmap
</h3>


<div className="flex gap-2">

<select className="border rounded-md px-3 py-1 text-sm bg-white">
<option>All Subjects</option>
</select>


<select className="border rounded-md px-3 py-1 text-sm bg-white">
<option>All Status</option>
</select>

</div>


</div>



{/* ITEM 1 */}

<div className="bg-white rounded-xl p-5 shadow-sm border flex items-center gap-5 hover:shadow-md transition">


<div className="bg-blue-50 p-3 rounded-lg">

<span className="material-symbols-outlined text-blue-600">
science
</span>

</div>


<div className="flex-1">

<p className="text-xs text-gray-400 uppercase">
Physics • Lab Experiment #4
</p>

<p className="font-semibold">
Quantum Mechanics Introduction Lab Report
</p>

</div>


<div className="text-right">

<p className="text-xs text-gray-400">
Deadline
</p>

<p className="text-red-500 text-sm font-semibold">
Tomorrow, 11:59 PM
</p>

</div>


<span className="bg-amber-100 text-amber-700 text-xs px-3 py-1 rounded-full font-semibold">
Pending
</span>


<span className="material-symbols-outlined text-gray-300">
chevron_right
</span>


</div>



{/* ITEM 2 */}

<div className="bg-white rounded-xl p-5 shadow-sm border flex items-center gap-5 hover:shadow-md transition">


<div className="bg-purple-50 p-3 rounded-lg">

<span className="material-symbols-outlined text-purple-600">
calculate
</span>

</div>


<div className="flex-1">

<p className="text-xs text-gray-400 uppercase">
Mathematics • Unit 3
</p>

<p className="font-semibold">
Advanced Calculus - Complex Integrals
</p>

</div>


<div className="text-right">

<p className="text-xs text-gray-400">
Completed
</p>

<p className="text-gray-700 text-sm font-semibold">
Oct 24, 2023
</p>

</div>


<span className="bg-purple-100 text-purple-700 text-xs px-3 py-1 rounded-full font-semibold">
Submitted
</span>


<span className="material-symbols-outlined text-gray-300">
chevron_right
</span>


</div>



{/* ITEM 3 */}

<div className="bg-white rounded-xl p-5 shadow-sm border flex items-center gap-5 hover:shadow-md transition">


<div className="bg-orange-50 p-3 rounded-lg">

<span className="material-symbols-outlined text-orange-600">
menu_book
</span>

</div>


<div className="flex-1">

<p className="text-xs text-gray-400 uppercase">
Literature • Weekly Essay
</p>

<p className="font-semibold">
Themes of Rebellion in 'The Great Gatsby'
</p>

</div>


<div className="text-right">

<p className="text-xs text-gray-400">
Grade
</p>

<p className="text-blue-600 font-semibold">
94 / 100
</p>

</div>


<span className="bg-blue-100 text-blue-700 text-xs px-3 py-1 rounded-full font-semibold">
Graded
</span>


<span className="material-symbols-outlined text-gray-300">
chevron_right
</span>


</div>


</div>



{/* SIDEBAR */}

<div className="bg-white rounded-xl p-6 shadow-sm border h-fit">


<h4 className="font-semibold mb-4">
Quick Statistics
</h4>


<div className="mb-4">

<div className="flex justify-between text-sm">

<span className="text-gray-500">
Submission Rate
</span>

<span className="font-semibold text-blue-600">
91.6%
</span>

</div>


<div className="h-2 bg-gray-100 rounded-full mt-2">

<div className="h-2 bg-blue-600 rounded-full w-[91%]"></div>

</div>

</div>



<div className="flex justify-between text-sm mb-4">

<span className="text-gray-500">
Avg. Grade (Overall)
</span>

<span className="text-purple-600 font-semibold">
A- (89%)
</span>

</div>



<div className="border-t pt-4">

<p className="text-xs text-gray-400 uppercase mb-2">
Upcoming Tests
</p>


<div className="flex gap-2 items-center text-sm">

<div className="w-2 h-2 bg-red-500 rounded-full"></div>

World History Midterm

</div>


<p className="text-xs text-gray-400 ml-4">
Oct 28, 2023
</p>

</div>


</div>


</div>


</div>

</DashboardLayout>

);

};

export default AssignmentsOverview;
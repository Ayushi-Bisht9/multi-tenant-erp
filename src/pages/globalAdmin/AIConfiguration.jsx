// src/pages/globalAdmin/AIConfiguration.jsx

import Layout from "../../components/erp/global/Layout";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

export default function AIConfiguration() {

const navigate = useNavigate();
const [temperature,setTemperature] = useState(0.7);

return(

<Layout>

<div className="min-h-screen bg-[#f8f9ff]">

<div className="max-w-6xl mx-auto px-8 py-10">

{/* header */}

<div className="flex items-start justify-between mb-10">

<div>

<h1 className="text-4xl font-extrabold text-[#0b1c30] leading-tight">
AI Configuration
</h1>

<p className="text-[#424754] mt-2 max-w-2xl">
Fine-tune the intelligence engine driving ScholarFlow Pro's automated workflows and student insights.
</p>

</div>


<button
onClick={()=>navigate("/global-admin/settings")}
className="flex items-center gap-2 px-4 py-2 rounded-md bg-[#dce9ff] text-[#0058be] font-semibold text-sm hover:bg-[#d3e4fe] transition-all active:scale-[0.98]"
>

<span className="material-symbols-outlined text-sm">
arrow_back
</span>

Go Back

</button>

</div>



<div className="grid lg:grid-cols-12 gap-8">

{/* LEFT */}

<div className="lg:col-span-8 space-y-8">

{/* model selection */}

<div className="bg-white rounded-xl p-8 shadow-sm">

<div className="flex items-center gap-3 mb-6">

<span className="material-symbols-outlined text-[#6b38d4]">
memory
</span>

<h3 className="text-xl font-bold">
Model Selection
</h3>

</div>



<label className="block mb-6">

<span className="text-sm font-semibold text-[#424754] block mb-2">
Primary Intelligence Engine
</span>


<select
className="w-full bg-[#eff4ff] rounded-md px-4 py-3 outline-none"
>

<option>
GPT-4o (Default - High Intelligence)
</option>

<option>
GPT-3.5 Turbo (Cost Optimized)
</option>

<option>
Claude 3.5 Sonnet (Nuanced Reasoning)
</option>

</select>

</label>



<div className="flex gap-3 bg-[#ffdcc6]/40 border-l-4 border-[#924700] p-4 rounded-md">

<span className="material-symbols-outlined text-[#924700]">
lightbulb
</span>


<p className="text-sm text-[#723600]">

<span className="font-bold">
AI Insight:
</span>

 GPT-4o is currently recommended for grading automation and complex administrative scheduling due to superior logic patterns.

</p>

</div>

</div>



{/* performance */}

<div className="bg-white rounded-xl p-8 shadow-sm">

<div className="flex items-center gap-3 mb-6">

<span className="material-symbols-outlined text-[#0058be]">
tune
</span>

<h3 className="text-xl font-bold">
Performance & Controls
</h3>

</div>



{/* temperature */}

<div className="mb-10">

<div className="flex justify-between items-center mb-4">

<div>

<p className="font-semibold text-[#424754]">
Creativity (Temperature)
</p>

<p className="text-sm text-gray-400">
Lower values are focused and deterministic.
</p>

</div>


<span className="bg-[#d8e2ff] text-[#0058be] px-3 py-1 rounded-full text-sm font-bold">
{temperature}
</span>

</div>



<input
type="range"
min="0"
max="1"
step="0.1"
value={temperature}

onChange={(e)=>setTemperature(e.target.value)}

className="w-full appearance-none bg-transparent"
/>


<style jsx>{`

input[type=range]::-webkit-slider-runnable-track{
background:#d3e4fe;
height:6px;
border-radius:3px;
}

input[type=range]::-webkit-slider-thumb{
appearance:none;
margin-top:-5px;
background:#0058be;
height:16px;
width:16px;
border-radius:50%;
cursor:pointer;
}

`}</style>


</div>



{/* tokens */}

<div>

<p className="text-sm font-semibold text-[#424754] mb-2">
Context Token Limit
</p>


<div className="relative">

<input
type="number"
defaultValue="4096"

className="w-full bg-[#eff4ff] rounded-md px-4 py-3 outline-none"
/>


<span className="absolute right-4 top-1/2 -translate-y-1/2 text-xs font-bold text-gray-400">

TOKENS

</span>

</div>


<p className="text-xs text-gray-400 mt-2 italic">

Maximum allowed: 128,000 tokens for GPT-4o.

</p>

</div>

</div>



{/* buttons */}

<div className="flex gap-4">

<button
onClick={()=>navigate("/global-admin/settings")}
className="px-8 py-3 bg-gradient-to-r from-[#0058be] to-[#2170e4] text-white font-bold rounded-md shadow hover:opacity-90"
>
Save Changes
</button>


<button
onClick={()=>navigate("/global-admin/settings")}
className="px-8 py-3 bg-[#dce9ff] text-gray-600 font-bold rounded-md"
>
Discard
</button>

</div>

</div>



{/* RIGHT */}

<div className="lg:col-span-4 space-y-8">

{/* usage */}

<div className="bg-white p-6 rounded-xl shadow-sm">

<div className="flex justify-between mb-6">

<h3 className="font-bold">
API Consumption
</h3>

<span className="material-symbols-outlined text-gray-400">
analytics
</span>

</div>



<p className="text-3xl font-black text-[#0058be]">
124.8k
</p>


<p className="text-xs uppercase text-gray-400 font-bold mb-6">
Tokens used today
</p>



<div className="flex items-end gap-1 h-28 mb-6">

<div className="bg-[#d3e4fe] w-full h-1/2 rounded-t"></div>

<div className="bg-[#d3e4fe] w-full h-2/3 rounded-t"></div>

<div className="bg-[#d3e4fe] w-full h-1/3 rounded-t"></div>

<div className="bg-[#d3e4fe] w-full h-3/4 rounded-t"></div>

<div className="bg-[#2170e4] w-full h-4/5 rounded-t"></div>

<div className="bg-[#2170e4] w-full h-full rounded-t"></div>

<div className="bg-[#2170e4] w-full h-5/6 rounded-t"></div>

</div>



<div className="pt-4 border-t">

<div className="flex justify-between text-sm mb-2">

Monthly Quota

<span className="font-bold">
62% used
</span>

</div>


<div className="w-full bg-[#eff4ff] h-2 rounded-full overflow-hidden">

<div className="bg-[#6b38d4] h-full w-[62%]"></div>

</div>

</div>

</div>



{/* status */}

<div className="bg-white/80 backdrop-blur p-6 rounded-xl border">

<div className="flex items-center gap-3 mb-3">

<div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>

<p className="font-bold">
System Status
</p>

</div>


<p className="text-sm text-gray-500">

All LLM endpoints are currently 

<span className="text-green-600 font-bold">
Operational
</span>

. Average latency for ScholarFlow queries is 1.2s.

</p>

</div>







</div>



</div>

</div>

</div>

</Layout>

);

}
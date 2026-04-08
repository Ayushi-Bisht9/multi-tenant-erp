import SchoolSidebar from "./SchoolSidebar";
import { useNavigate } from "react-router-dom";
export default function SchoolLayout({children,title="Dashboard"}){
const navigate = useNavigate();
return(

<div className="bg-[#f8f9ff] font-body text-[#0b1c30]">

<SchoolSidebar/>

<main className="ml-64 min-h-screen">

<header className="fixed top-0 right-0 w-[calc(100%-16rem)] h-20 bg-white/80 backdrop-blur-xl flex justify-between items-center px-8 z-40">

<div className="flex items-center gap-4">

<button className="hover:bg-slate-100 rounded-full p-2">

<span className="material-symbols-outlined text-[#0058be]">
menu
</span>

</button>

<h1 className="font-semibold text-lg text-[#0058be]">
{title}
</h1>

</div>



<div className="flex items-center gap-6">

<div className="relative">

<span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 text-sm">
search
</span>

<input
placeholder="Search records..."
className="pl-10 pr-4 py-2 bg-[#eff4ff] rounded-md text-sm w-64 outline-none"
/>

</div>


{/* 🔔 notification icon */}
<button
onClick={()=>navigate("/school-admin/notifications")}
className="p-2 rounded-full hover:bg-[#eff4ff] transition"
>

<span className="material-symbols-outlined text-[#0058be]">
notifications
</span>

</button>


<div className="w-10 h-10 rounded-full overflow-hidden border border-[#e5eeff]">

<img
src="https://lh3.googleusercontent.com/aida-public/AB6AXuCr-h68ZGUP34FUflv2mFF-gNJjT5N_6ytDAglZduyU7THcHTXquHtKCzW8pah1ZVvvgH2DwFQmNae7GnJLai44EeHTkxyJ7zBwpwQDu-gvnmEk4ZR9VvIQ42BaYW5Iv2e6IOltaThdGqNRbF3cqmGeYfEhWJShw9MZsTyFHM6ygEEHITElBL26bGg34Jsu79sL7xFoRsP1OthWVTv3qIia-yBCPlh5GqFFycTauUCcNk7mlY9MFiACpCeL5aUtTEaP1cd3-aT6LQ"
/>

</div>

</div>

</header>



<div className="pt-24 px-8 pb-16">

{children}

</div>

</main>

</div>

);

}
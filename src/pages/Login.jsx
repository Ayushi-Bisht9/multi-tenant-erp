import React from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export default function Login(){
const navigate = useNavigate();

const handleRoleLogin = (role) => {

if(role === "Global Admin"){
navigate("/global-admin");
}

else if(role === "School Admin"){
navigate("/school-admin");
}

else if(role === "Teacher"){
navigate("/teacher");
}

else if(role === "Student"){
navigate("/student");
}

else if(role === "Parent"){
navigate("/parent");
}

};

return (

<div className="min-h-screen bg-background font-body text-on-surface">

{/* HEADER */}

<header className="w-full flex justify-between items-center px-8 py-4">

<h1 className="text-xl font-headline font-bold text-primary">
Academic Architect
</h1>

<Link
to="/"
className="text-sm text-gray-500 flex items-center gap-1"
>

← Back to Home

</Link>

</header>



{/* MAIN SECTION */}

<main className="flex items-center justify-center px-6 py-12">

<div className="grid md:grid-cols-2 gap-12 max-w-6xl w-full items-center">



{/* LEFT SIDE */}

<div className="hidden md:block">

<h1 className="text-5xl font-headline font-extrabold leading-tight mb-6">

Elevating
<span className="text-primary"> Academic</span>

<br/>

Intelligence.

</h1>


<p className="text-on-surface-variant text-lg max-w-md mb-8">

Experience a high-end digital workspace designed
for the modern educational ecosystem.
Seamless, secure, and smart.

</p>


<div className="bg-surface-container-low p-6 rounded-xl">

<div className="flex gap-3 items-center">

<div className="bg-white p-2 rounded-md">

<span className="material-symbols-outlined text-primary">

verified_user

</span>

</div>

<div>

<p className="font-semibold">

Secure Access

</p>

<p className="text-sm text-on-surface-variant">

256-bit SSL Encryption Active

</p>

</div>

</div>

</div>

</div>



{/* LOGIN CARD */}

<div className="max-w-md w-full mx-auto">

<div className="bg-white p-10 rounded-lg ambient-shadow">



<h2 className="text-3xl font-headline font-bold mb-2">

Login to AI School ERP

</h2>


<p className="text-on-surface-variant mb-6">

Access your personalized dashboard securely.

</p>



{/* FORM */}

<div className="space-y-5">

<div>

<label className="text-sm font-semibold">

Email

</label>

<input

type="email"

placeholder="Enter your email"

className="w-full mt-2 px-4 py-3 rounded-md bg-surface-container-low outline-none"

/>

</div>



<div>

<div className="flex justify-between">

<label className="text-sm font-semibold">

Password

</label>


<span className="text-xs text-primary">

Forgot Password?

</span>

</div>


<input

type="password"

placeholder="Enter your password"

className="w-full mt-2 px-4 py-3 rounded-md bg-surface-container-low outline-none"

/>

</div>



<div className="flex items-center gap-2">

<input type="checkbox"/>

<span className="text-sm text-on-surface-variant">

Remember me

</span>

</div>



<button className="w-full py-4 primary-gradient text-white font-bold rounded-md shadow-lg">

Login

</button>

</div>



{/* ROLE BUTTONS */}

<div className="mt-10 pt-6 border-t text-center">

<p className="text-xs tracking-widest text-gray-400 mb-4">

SELECT ROLE (FOR PROTOTYPE DEMO)

</p>



<div className="grid grid-cols-2 gap-2">

<button

onClick={()=>handleRoleLogin("Global Admin")}

className="bg-surface-container-high text-primary text-sm py-2 rounded-md"

>

Login as Global Admin

</button>



<button

onClick={()=>handleRoleLogin("School Admin")}

className="bg-surface-container-high text-primary text-sm py-2 rounded-md"

>

Login as School Admin

</button>



<button

onClick={()=>handleRoleLogin("Teacher")}

className="bg-surface-container-high text-primary text-sm py-2 rounded-md"

>

Login as Teacher

</button>



<button

onClick={()=>handleRoleLogin("Student")}

className="bg-surface-container-high text-primary text-sm py-2 rounded-md"

>

Login as Student

</button>



<button

onClick={()=>handleRoleLogin("Parent")}

className="bg-surface-container-high text-primary text-sm py-2 rounded-md col-span-2"

>

Login as Parent

</button>



</div>

</div>



</div>

</div>



</div>

</main>



{/* FOOTER */}

<footer className="text-center text-xs text-gray-400 pb-8">

Secure login powered by encrypted authentication.

<br/>

© 2024 Academic Architect

</footer>



</div>

);

}
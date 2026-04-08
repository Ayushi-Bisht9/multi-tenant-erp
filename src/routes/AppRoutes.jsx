import { BrowserRouter, Routes, Route } from "react-router-dom";

/* COMMON */
import Landing from "../pages/Landing";
import Login from "../pages/Login";

/* GLOBAL ADMIN */
import GlobalDashboard from "../pages/globalAdmin/GlobalDashboard";
import Schools from "../pages/globalAdmin/Schools";
import GlobalNotifications from "../pages/globalAdmin/Notifications";
import AddSchool from "../pages/globalAdmin/AddSchool";
import AddDomain from "../pages/globalAdmin/AddDomain";
import Domains from "../pages/globalAdmin/Domains";
import Subscriptions from "../pages/globalAdmin/Subscriptions";
import CreatePlan from "../pages/globalAdmin/CreatePlan";
import AIConfiguration from "../pages/globalAdmin/AIConfiguration";
import PaymentInfrastructure from "../pages/globalAdmin/PaymentInfrastructure";
import EmailConfiguration from "../pages/globalAdmin/EmailConfiguration";
import SecurityAccess from "../pages/globalAdmin/SecurityAccess";
import GlobalSettings from "../pages/globalAdmin/Settings";

/* SCHOOL ADMIN */
import SchoolDashboard from "../pages/schoolAdmin/Dashboard";
import CreateClass from "../pages/schoolAdmin/CreateClass";
import AcademicYears from "../pages/schoolAdmin/AcademicYears";
import CreateAcademicYear from "../pages/schoolAdmin/CreateAcademicYear";
import RolesPermissions from "../pages/schoolAdmin/RolesPermissions";
import CreateRole from "../pages/schoolAdmin/CreateRole";
import Students from "../pages/schoolAdmin/Students";
import AddStudent from "../pages/schoolAdmin/AddStudent";
import Teachers from "../pages/schoolAdmin/Teachers";
import AddTeacher from "../pages/schoolAdmin/AddTeacher";
import Parents from "../pages/schoolAdmin/Parents";
import AddParent from "../pages/schoolAdmin/AddParent";
import ParentStudentMapping from "../pages/schoolAdmin/ParentStudentMapping";
import AddMapping from "../pages/schoolAdmin/AddMapping";
import TeacherAssignment from "../pages/schoolAdmin/TeacherAssignment";
import AssignTeacher from "../pages/schoolAdmin/AssignTeacher";
import SchoolSettings from "../pages/schoolAdmin/Settings";
import SchoolNotifications from "../pages/schoolAdmin/Notifications";


//student 




function AppRoutes(){

return(

<BrowserRouter>

<Routes>

{/* COMMON */}
<Route path="/" element={<Landing/>} />
<Route path="/login" element={<Login/>} />



{/* ================= GLOBAL ADMIN ================= */}

<Route path="/global-admin" element={<GlobalDashboard/>} />

<Route path="/global-admin/notifications" element={<GlobalNotifications/>}/>
<Route path="/global-admin/settings" element={<GlobalSettings/>}/>

<Route path="/global-admin/schools" element={<Schools/>}/>
<Route path="/global-admin/add-school" element={<AddSchool/>}/>

<Route path="/global-admin/domains" element={<Domains/>}/>
<Route path="/global-admin/add-domain" element={<AddDomain/>}/>

<Route path="/global-admin/subscriptions" element={<Subscriptions/>}/>
<Route path="/global-admin/create-plan" element={<CreatePlan/>}/>

<Route path="/global-admin/ai-config" element={<AIConfiguration />} />
<Route path="/global-admin/payment" element={<PaymentInfrastructure />} />
<Route path="/global-admin/email" element={<EmailConfiguration />} />
<Route path="/global-admin/security" element={<SecurityAccess />} />



{/* ================= SCHOOL ADMIN ================= */}

<Route path="/school-admin" element={<SchoolDashboard/>} />

<Route path="/school-admin/notifications" element={<SchoolNotifications/>}/>
<Route path="/school-admin/settings" element={<SchoolSettings/>}/>

<Route path="/school-admin/create-class" element={<CreateClass />} />

<Route path="/school-admin/academic-years" element={<AcademicYears />} />
<Route path="/school-admin/academic-years/create" element={<CreateAcademicYear />} />

<Route path="/school-admin/roles" element={<RolesPermissions />} />
<Route path="/school-admin/roles/create" element={<CreateRole />} />

<Route path="/school-admin/students" element={<Students/>} />
<Route path="/school-admin/students/add" element={<AddStudent/>} />

<Route path="/school-admin/teachers" element={<Teachers/>} />
<Route path="/school-admin/teachers/create" element={<AddTeacher/>} />

<Route path="/school-admin/parents" element={<Parents/>} />
<Route path="/school-admin/parents/create" element={<AddParent/>} />

<Route path="/school-admin/mapping" element={<ParentStudentMapping/>} />
<Route path="/school-admin/mapping/create" element={<AddMapping/>} />

<Route path="/school-admin/teacher-assignment" element={<TeacherAssignment/>} />
<Route path="/school-admin/teacher-assignment/create" element={<AssignTeacher/>} />


{/* ================= STUDENT ================= */}



</Routes>

</BrowserRouter>

);

}

export default AppRoutes;
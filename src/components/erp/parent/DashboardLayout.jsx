import Sidebar from "./Sidebar";
import Navbar from "./Navbar";
import BottomNav from "./BottomNav";

export default function DashboardLayout({ children }) {

  return (

    <div className="flex min-h-screen bg-background">

      {/* LEFT SIDEBAR */}
      <Sidebar />

      {/* RIGHT CONTENT */}
      <div className="flex-1 md:ml-72">

        {/* TOP NAVBAR */}
        <Navbar />

        {/* PAGE CONTENT */}
        <div className="p-8">
          {children}
        </div>

      </div>

      {/* MOBILE NAV */}
      <BottomNav />

    </div>

  );

}
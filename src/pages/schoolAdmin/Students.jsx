import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

// Mock layout for preview environment (uncomment your import locally)
// import SchoolLayout from "../../components/erp/school/SchoolLayout";
const SchoolLayout = ({ title, children }) => (
  <div className="min-h-screen bg-slate-50 font-sans text-slate-900">
    <header className="bg-white shadow-sm px-8 py-4 border-b border-slate-200">
      <h1 className="text-xl font-bold text-[#0058be]">{title}</h1>
    </header>
    <main>{children}</main>
  </div>
);

export default function Students() {
  const navigate = useNavigate();

  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [totalCount, setTotalCount] = useState(0);

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    setLoading(true);
    setError(null);

    try {
      const baseUrl = import.meta.env?.VITE_API_BASE_URL || process.env?.REACT_APP_API_BASE_URL;
      const token = localStorage.getItem("accessToken");

      const response = await fetch(`${baseUrl}v1/users/`, {
        method: "GET",
        headers: {
          "Authorization": `Bearer ${token}`,
          "Accept": "application/json"
        }
      });

      if (!response.ok) {
        throw new Error("Failed to fetch user directory.");
      }

      const data = await response.json();
      
      // Handle DRF pagination structure
      if (data.results) {
        setUsers(data.results);
        setTotalCount(data.count);
      } else {
        setUsers(data);
        setTotalCount(data.length);
      }
    } catch (err) {
      console.error("Fetch Users Error:", err);
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  // Helper to generate initials for avatar placeholder
  const getInitials = (first, last, email) => {
    if (first && last) return `${first[0]}${last[0]}`.toUpperCase();
    if (first) return first.substring(0, 2).toUpperCase();
    return email.substring(0, 2).toUpperCase();
  };

  return (
    <SchoolLayout title="User & Student Directory">
      <div className="pt-6 px-8 max-w-7xl mx-auto">
        {/* header */}
        <div className="flex justify-between items-end mb-8">
          <div>
            <h2 className="text-3xl font-bold">Institution Directory</h2>
            <p className="text-[#6b7280] mt-1">
              Manage system users, track status, and view basic profiles.
            </p>
          </div>

          <button
            onClick={() => navigate("/school-admin/students/add")}
            className="bg-gradient-to-r from-[#0058be] to-[#2170e4] text-white px-6 py-3 rounded-md font-semibold flex items-center gap-2 shadow-lg hover:shadow-xl transition-all"
          >
            <span className="material-symbols-outlined">person_add</span>
            Register User
          </button>
        </div>

        {error && (
          <div className="mb-6 p-4 bg-red-50 text-red-700 rounded-md border border-red-200">
            {error}
          </div>
        )}

        {/* table */}
        <div className="bg-white rounded-lg shadow-sm overflow-hidden border border-gray-100">
          {/* filters */}
          <div className="p-6 flex justify-between bg-[#eff4ff] border-b border-blue-50">
            <div className="flex gap-3">
              <div className="relative w-72">
                <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 text-sm">
                  search
                </span>
                <input
                  placeholder="Search by name or email..."
                  className="w-full bg-white pl-9 pr-4 py-2 rounded-md text-sm border-transparent focus:border-[#0058be]/30 focus:ring-2 focus:ring-[#0058be]/10 outline-none transition-all shadow-sm"
                />
              </div>
            </div>
            <div className="text-sm text-[#6b7280] font-medium flex items-center">
              Showing {users.length} of {totalCount} records
            </div>
          </div>

          {/* table */}
          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead className="bg-[#f8f9ff] text-xs text-[#727785] uppercase tracking-wider">
                <tr>
                  <th className="px-6 py-4">User Details</th>
                  <th>System ID</th>
                  <th className="text-center">Staff Access</th>
                  <th className="text-right pr-6">Action</th>
                </tr>
              </thead>

              <tbody className="divide-y divide-gray-100">
                {loading ? (
                  <tr>
                    <td colSpan="4" className="text-center py-12 text-gray-500">
                      <div className="flex flex-col items-center gap-2">
                        <span className="material-symbols-outlined animate-spin text-[#0058be]">progress_activity</span>
                        Loading directory...
                      </div>
                    </td>
                  </tr>
                ) : users.length === 0 ? (
                  <tr>
                    <td colSpan="4" className="text-center py-12 text-gray-500">
                      No users found in this institution.
                    </td>
                  </tr>
                ) : (
                  users.map((u) => (
                    <tr
                      key={u.id}
                      className="hover:bg-[#fcfdff] transition-colors"
                    >
                      <td className="px-6 py-4">
                        <div className="flex gap-4 items-center">
                          <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#e5eeff] to-[#cce0ff] text-[#0058be] flex items-center justify-center font-bold text-sm shadow-inner border border-white">
                            {getInitials(u.first_name, u.last_name, u.email)}
                          </div>
                          <div>
                            <p className="font-semibold text-gray-900">
                              {u.first_name || u.last_name ? `${u.first_name} ${u.last_name}` : "Pending Setup"}
                            </p>
                            <p className="text-xs text-[#6b7280] font-mono mt-0.5">
                              {u.email}
                            </p>
                          </div>
                        </div>
                      </td>

                      <td className="text-xs text-[#727785] font-mono">
                        {u.id.split('-')[0]}...
                      </td>

                      <td className="text-center">
                        {u.is_staff ? (
                           <span className="px-3 py-1 bg-[#e5eeff] text-[#0058be] rounded-full text-xs font-semibold flex items-center gap-1 w-max mx-auto border border-blue-100">
                             <span className="material-symbols-outlined text-[14px]">shield_person</span>
                             Staff
                           </span>
                        ) : (
                           <span className="px-3 py-1 bg-gray-100 text-gray-600 rounded-full text-xs font-semibold flex items-center gap-1 w-max mx-auto">
                             <span className="material-symbols-outlined text-[14px]">person</span>
                             Standard
                           </span>
                        )}
                      </td>

                      <td className="text-right pr-6">
                        <button className="text-[#0058be] hover:bg-[#e5eeff] p-2 rounded-full transition-colors">
                          <span className="material-symbols-outlined text-[20px]">more_vert</span>
                        </button>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>

          {/* pagination */}
          <div className="p-4 flex justify-between bg-gray-50 border-t border-gray-100 items-center">
            <button className="text-[#0058be] flex gap-1 items-center text-sm font-semibold hover:bg-blue-50 px-3 py-1.5 rounded-md transition-colors">
              <span className="material-symbols-outlined text-sm">arrow_back</span>
              Previous
            </button>

            <div className="flex gap-1">
              <button className="w-8 h-8 bg-[#0058be] text-white rounded-md text-sm font-semibold shadow-sm">
                1
              </button>
            </div>

            <button className="text-[#0058be] flex gap-1 items-center text-sm font-semibold hover:bg-blue-50 px-3 py-1.5 rounded-md transition-colors">
              Next
              <span className="material-symbols-outlined text-sm">arrow_forward</span>
            </button>
          </div>
        </div>

        {/* analytics cards */}
        <div className="grid md:grid-cols-3 gap-6 mt-12 mb-12">
          <div className="md:col-span-2 bg-gradient-to-r from-[#6b38d4] to-[#8455ef] text-white p-8 rounded-xl shadow-lg relative overflow-hidden">
            <div className="absolute right-0 top-0 opacity-10">
              <span className="material-symbols-outlined text-9xl">group</span>
            </div>
            <h3 className="text-xl font-bold mb-2 relative z-10">
              Institution User Analytics
            </h3>
            <p className="text-sm text-purple-100 mb-8 max-w-lg relative z-10">
              Your Django backend strictly isolates all these users to your tenant ID. The RBAC engine determines their individual access scope.
            </p>

            <div className="flex gap-12 relative z-10">
              <div>
                <p className="text-xs text-purple-200 uppercase tracking-wider font-semibold mb-1">
                  Total Accounts
                </p>
                <p className="text-4xl font-bold">
                  {totalCount}
                </p>
              </div>
              <div>
                <p className="text-xs text-purple-200 uppercase tracking-wider font-semibold mb-1">
                  Staff Members
                </p>
                <p className="text-4xl font-bold">
                  {users.filter(u => u.is_staff).length}
                </p>
              </div>
            </div>
          </div>

          <div className="relative">
            {/* card */}
            <div className="bg-[#e7c6ad] p-8 rounded-2xl border border-[#d9b39a] h-full flex flex-col justify-center">
              <div className="w-12 h-12 rounded-xl bg-[#f2dfd0] flex items-center justify-center mb-4">
                <span className="material-symbols-outlined text-[#9a4d00]">auto_awesome</span>
              </div>
              <h3 className="text-lg font-bold text-[#3a1f0b] mb-2">
                Identity Infrastructure
              </h3>
              <p className="text-[#6b3b13] text-sm leading-relaxed mb-4">
                Core `User` accounts form the base layer. Profiles (Student/Teacher) are linked later for domain-specific data.
              </p>
            </div>
          </div>
        </div>
      </div>
    </SchoolLayout>
  );
}
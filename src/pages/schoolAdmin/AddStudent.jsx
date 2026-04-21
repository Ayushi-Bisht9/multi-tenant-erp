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

export default function AddStudent() {
  const navigate = useNavigate();

  // Core User Model Fields
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  
  // Role Mapping Field
  const [selectedRole, setSelectedRole] = useState("");
  const [availableRoles, setAvailableRoles] = useState([]);

  // UI State
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [successMsg, setSuccessMsg] = useState(null);

  // Fetch available roles from the API so we can map the user
  useEffect(() => {
    const fetchRoles = async () => {
      try {
        const baseUrl = import.meta.env?.VITE_API_BASE_URL || process.env?.REACT_APP_API_BASE_URL;
        const token = localStorage.getItem("accessToken");
        
        const response = await fetch(`${baseUrl}v1/accounts/roles/`, {
          headers: { "Authorization": `Bearer ${token}` }
        });
        
        if (response.ok) {
          const data = await response.json();
          // Adjust based on if your API uses pagination
          setAvailableRoles(data.results || data);
        }
      } catch (err) {
        console.error("Could not fetch roles:", err);
      }
    };
    fetchRoles();
  }, []);

  const handleSave = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setSuccessMsg(null);

    try {
      const baseUrl = import.meta.env?.VITE_API_BASE_URL || process.env?.REACT_APP_API_BASE_URL;
      const token = localStorage.getItem("accessToken");

      // ==========================================
      // STEP 1: CREATE THE CORE IDENTITY (User)
      // ==========================================
      const userPayload = {
        email: email,
        password: password,
        first_name: firstName,
        last_name: lastName
      };

      const userResponse = await fetch(`${baseUrl}v1/users/`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json",
          "Authorization": `Bearer ${token}`
        },
        body: JSON.stringify(userPayload)
      });

      const userData = await userResponse.json();

      if (!userResponse.ok) {
        let errorMsg = "Failed to create user identity.";
        if (typeof userData === "object") {
          errorMsg = Object.entries(userData)
            .map(([field, msgs]) => `${field}: ${Array.isArray(msgs) ? msgs.join(" ") : msgs}`)
            .join(" | ");
        }
        throw new Error(errorMsg);
      }

      // ==========================================
      // STEP 2: ASSIGN THE RBAC ROLE (UserRole Mapping)
      // ==========================================
      if (selectedRole && userData.id) {
        const rolePayload = {
          user: userData.id,
          role: selectedRole
        };

        const roleResponse = await fetch(`${baseUrl}v1/accounts/user-roles/`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`
          },
          body: JSON.stringify(rolePayload)
        });

        if (!roleResponse.ok) {
          const roleError = await roleResponse.json();
          console.error("Role Assignment Error:", roleError);
          throw new Error("User created, but role assignment failed. You may need to assign it manually.");
        }
      }

      setSuccessMsg("Account identity and role established successfully!");
      
      // Delay navigation so they can see the success message
      setTimeout(() => {
        navigate("/school-admin/students");
      }, 1500);

    } catch (err) {
      console.error(err);
      setError(err.message);
      window.scrollTo(0, 0);
    } finally {
      setLoading(false);
    }
  };

  return (
    <SchoolLayout title="User Registration">
      <div className="max-w-6xl mx-auto space-y-8 px-8 py-10">
        
        {/* breadcrumb */}
        <div className="flex justify-between items-start">
          <div>
            <h1 className="text-3xl font-semibold text-slate-800">
              Register Core Identity
            </h1>
            <p className="text-[#6b7280] mt-1 max-w-2xl text-sm">
              Create the base `User` account for authentication. This creates the login credentials and links them to an RBAC role inside your multi-tenant Django architecture. Extended profiles (Student, Teacher) can be mapped later.
            </p>
          </div>

          <button
            type="button"
            onClick={() => navigate("/school-admin/students")}
            className="flex items-center gap-2 px-4 py-2 bg-[#e5eeff] hover:bg-[#dce9ff] text-[#0058be] font-semibold rounded-md transition border border-blue-100"
          >
            <span className="material-symbols-outlined text-[18px]">arrow_back</span>
            Directory
          </button>
        </div>

        {error && (
          <div className="p-4 bg-red-50 text-red-700 rounded-md border border-red-200 flex gap-3 shadow-sm">
             <span className="material-symbols-outlined">error</span>
             <div>
               <p className="font-bold text-sm">API Error Occurred</p>
               <p className="text-sm mt-1">{error}</p>
             </div>
          </div>
        )}

        {successMsg && (
          <div className="p-4 bg-green-50 text-green-800 rounded-md border border-green-200 flex gap-3 shadow-sm">
             <span className="material-symbols-outlined">check_circle</span>
             <div>
               <p className="font-bold text-sm">Success!</p>
               <p className="text-sm mt-1">{successMsg}</p>
             </div>
          </div>
        )}

        <form onSubmit={handleSave}>
          <div className="grid lg:grid-cols-3 gap-8">
            
            {/* LEFT COLUMN */}
            <div className="lg:col-span-2 space-y-8">

              {/* Basic Info */}
              <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
                <h3 className="text-lg font-bold text-slate-800 flex items-center gap-2 mb-6">
                   <span className="material-symbols-outlined text-[#0058be]">badge</span>
                   Identity Information
                </h3>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="flex flex-col gap-2">
                    <label className="text-xs font-semibold text-[#6b7280] tracking-wider uppercase">
                      First Name
                    </label>
                    <input
                      required
                      value={firstName}
                      onChange={(e) => setFirstName(e.target.value)}
                      placeholder="e.g. Julian"
                      className="bg-[#eff4ff] px-4 py-3 rounded-md outline-none focus:bg-white focus:border-[#0058be]/40 focus:ring-2 focus:ring-[#0058be]/10 border border-transparent transition-all"
                    />
                  </div>

                  <div className="flex flex-col gap-2">
                    <label className="text-xs font-semibold text-[#6b7280] tracking-wider uppercase">
                      Last Name
                    </label>
                    <input
                      required
                      value={lastName}
                      onChange={(e) => setLastName(e.target.value)}
                      placeholder="e.g. Alexander"
                      className="bg-[#eff4ff] px-4 py-3 rounded-md outline-none focus:bg-white focus:border-[#0058be]/40 focus:ring-2 focus:ring-[#0058be]/10 border border-transparent transition-all"
                    />
                  </div>
                </div>
              </div>

              {/* Authentication Credentials */}
              <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
                <h3 className="text-lg font-bold text-slate-800 flex items-center gap-2 mb-6">
                   <span className="material-symbols-outlined text-[#6b38d4]">lock</span>
                   Authentication Credentials
                </h3>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="flex flex-col gap-2">
                    <label className="text-xs font-semibold text-[#6b7280] tracking-wider uppercase">
                      Email Address (Login ID)
                    </label>
                    <input
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="student@academy.edu"
                      className="bg-[#eff4ff] px-4 py-3 rounded-md outline-none focus:bg-white focus:border-[#0058be]/40 focus:ring-2 focus:ring-[#0058be]/10 border border-transparent transition-all"
                    />
                  </div>

                  <div className="flex flex-col gap-2">
                    <label className="text-xs font-semibold text-[#6b7280] tracking-wider uppercase">
                      Temporary Password
                    </label>
                    <input
                      type="password"
                      required
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      placeholder="Minimum 8 characters"
                      className="bg-[#eff4ff] px-4 py-3 rounded-md outline-none focus:bg-white focus:border-[#0058be]/40 focus:ring-2 focus:ring-[#0058be]/10 border border-transparent transition-all"
                    />
                  </div>
                </div>
              </div>

              {/* System Mapping (Role) */}
              <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
                <div className="flex justify-between items-center mb-6">
                  <h3 className="text-lg font-bold text-slate-800 flex items-center gap-2">
                    <span className="material-symbols-outlined text-[#9a4d00]">account_tree</span>
                    System Access Mapping
                  </h3>
                  <span className="text-xs bg-[#e5eeff] text-[#0058be] font-bold px-2 py-1 rounded">RBAC API</span>
                </div>

                <div className="flex flex-col gap-2">
                  <label className="text-xs font-semibold text-[#6b7280] tracking-wider uppercase">
                    Assign Institutional Role
                  </label>
                  <select
                    value={selectedRole}
                    onChange={(e) => setSelectedRole(e.target.value)}
                    className="bg-[#eff4ff] px-4 py-3 rounded-md outline-none focus:bg-white focus:border-[#0058be]/40 focus:ring-2 focus:ring-[#0058be]/10 border border-transparent transition-all font-medium"
                  >
                    <option value="">Select a specific role (Optional)</option>
                    {availableRoles.map(role => (
                      <option key={role.id} value={role.id}>
                        {role.name} - {role.description ? role.description.substring(0,40) : "System Role"}
                      </option>
                    ))}
                  </select>
                  <p className="text-xs text-gray-500 mt-1">
                    Assigning a role will trigger the `user-roles/` API mapping to securely define this user's viewset limits.
                  </p>
                </div>
              </div>

              {/* FOOTER */}
              <div className="flex justify-end gap-4 pt-4">
                <button
                  type="button"
                  disabled={loading}
                  onClick={() => navigate("/school-admin/students")}
                  className="px-8 py-3 text-[#6b7280] font-semibold hover:bg-gray-100 rounded-md transition-colors disabled:opacity-50"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={loading}
                  className="px-10 py-3 bg-gradient-to-r from-[#0058be] to-[#2170e4] text-white font-bold rounded-md shadow-lg shadow-[#0058be]/20 hover:scale-[1.02] active:scale-95 transition flex items-center justify-center gap-2 min-w-[200px] disabled:opacity-70 disabled:scale-100"
                >
                  {loading ? (
                    <>
                      <span className="material-symbols-outlined animate-spin text-sm">progress_activity</span>
                      Syncing Database...
                    </>
                  ) : (
                    <>
                      <span className="material-symbols-outlined text-sm">save</span>
                      Initialize User
                    </>
                  )}
                </button>
              </div>

            </div>

            {/* RIGHT COLUMN */}
            <div className="space-y-6">
              
              <div className="bg-[#0b1c30] text-white p-6 rounded-xl shadow-lg relative overflow-hidden">
                 <div className="absolute top-0 right-0 p-4 opacity-10">
                   <span className="material-symbols-outlined text-8xl">data_object</span>
                 </div>
                 <h3 className="text-lg font-bold mb-3 relative z-10 text-blue-200">Database Context</h3>
                 <p className="text-sm text-slate-300 relative z-10 leading-relaxed mb-4">
                   This form targets your generic multi-tenant `User` model. Details like Blood Group, Roll Number, or Class assignment belong in the specific `StudentProfile` model which you'll implement next!
                 </p>
                 <div className="bg-[#1e3450] p-3 rounded-md border border-[#2b4b72] relative z-10">
                    <p className="text-xs font-mono text-blue-300">
                       POST /api/v1/users/<br/>
                       POST /api/v1/accounts/user-roles/
                    </p>
                 </div>
              </div>

              {/* Photo Placeholder */}
              <div className="bg-white p-8 rounded-xl border border-gray-100 shadow-sm text-center">
                <div className="w-32 h-32 mx-auto rounded-full bg-[#f8f9ff] flex items-center justify-center overflow-hidden border-4 border-white shadow-md">
                  <span className="material-symbols-outlined text-6xl text-gray-300">face</span>
                </div>
                <h4 className="mt-4 font-semibold text-slate-800">
                  Profile Asset
                </h4>
                <p className="text-xs text-[#6b7280]">
                  Image upload will be handled at the profile creation step.
                </p>
              </div>

            </div>
          </div>
        </form>
      </div>
    </SchoolLayout>
  );
}
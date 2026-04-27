import React, { useState, useEffect } from 'react';
import MainLayout from "../../components/erp/teacher/MainLayout";

export default function TeacherProfileManagement() {
  const [profile, setProfile] = useState(null);
  const [identity, setIdentity] = useState(null);
  
  // Form State
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  
  // UI State
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);

  useEffect(() => {
    const fetchProfileData = async () => {
      setLoading(true);
      setError(null);
      try {
        const baseUrl = import.meta.env?.VITE_API_BASE_URL || process.env?.REACT_APP_API_BASE_URL;
        const token = localStorage.getItem("accessToken");
        const headers = { "Authorization": `Bearer ${token}`, "Accept": "application/json" };

        // STEP 1: Get the current user's Base Identity & Profile IDs
        const meResponse = await fetch(`${baseUrl}v1/profiles/me/`, { headers });
        
        if (!meResponse.ok) {
          throw new Error("Session expired or failed to authenticate user identity.");
        }

        const meData = await meResponse.json();
        setIdentity(meData.identity);

        const teacherProfileId = meData.profiles?.teacher?.id;

        if (!meData.profiles?.teacher?.exists || !teacherProfileId) {
          throw new Error("Access Denied: No Teacher profile is linked to your account.");
        }

        // STEP 2: Fetch the specific Teacher Profile details using the extracted ID
        const teacherResponse = await fetch(`${baseUrl}v1/profiles/teachers/${teacherProfileId}/`, { headers });

        if (!teacherResponse.ok) {
          throw new Error("Failed to load teacher profile details.");
        }

        const teacherData = await teacherResponse.json();
        setProfile(teacherData);

        // Pre-fill the editable form fields
        setFirstName(teacherData.first_name || meData.identity.first_name || "");
        setLastName(teacherData.last_name || meData.identity.last_name || "");
        setPhone(teacherData.phone_number || "");

      } catch (err) {
        console.error("Profile Fetch Error:", err);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProfileData();
  }, []);

  const handleSave = async (e) => {
    e.preventDefault();
    setSaving(true);
    setError(null);
    setSuccess(null);

    try {
      const baseUrl = import.meta.env?.VITE_API_BASE_URL || process.env?.REACT_APP_API_BASE_URL;
      const token = localStorage.getItem("accessToken");
      const headers = { 
        "Authorization": `Bearer ${token}`, 
        "Content-Type": "application/json" 
      };

      const updatePromises = [];

      // 1. Update Core Identity (User)
      const userPayload = { first_name: firstName, last_name: lastName };
      if (password) userPayload.password = password;

      updatePromises.push(
        fetch(`${baseUrl}v1/users/${identity.id}/`, {
          method: 'PATCH',
          headers,
          body: JSON.stringify(userPayload)
        })
      );

      // 2. Update Teacher Profile
      const profilePayload = {
        first_name: firstName,
        last_name: lastName,
        phone_number: phone
      };

      updatePromises.push(
        fetch(`${baseUrl}v1/profiles/teachers/${profile.id}/`, {
          method: 'PATCH',
          headers,
          body: JSON.stringify(profilePayload)
        })
      );

      const results = await Promise.allSettled(updatePromises);
      const failed = results.filter(res => res.status === 'rejected' || (res.value && !res.value.ok));

      if (failed.length > 0) {
        throw new Error("Failed to fully synchronize profile changes. Please try again.");
      }

      setSuccess("Profile updated and synchronized successfully!");
      setPassword(""); // Clear password field after save

      // Update local state to reflect changes without reloading
      setProfile(prev => ({ ...prev, first_name: firstName, last_name: lastName, phone_number: phone }));
      setIdentity(prev => ({ ...prev, first_name: firstName, last_name: lastName }));

    } catch (err) {
      console.error(err);
      setError(err.message);
    } finally {
      setSaving(false);
    }
  };

  const getInitials = (first, last) => {
    if (first && last) return `${first[0]}${last[0]}`.toUpperCase();
    if (first) return first.substring(0, 2).toUpperCase();
    return "TR";
  };

  if (loading) {
    return (
      <MainLayout title="Teacher Profile">
        <div className="flex items-center justify-center min-h-[60vh]">
          <div className="flex flex-col items-center gap-3 text-[#0058be]">
            <span className="material-symbols-outlined animate-spin text-4xl">progress_activity</span>
            <p className="font-semibold tracking-wide">Syncing Profile Data...</p>
          </div>
        </div>
      </MainLayout>
    );
  }

  if (error && !profile) {
    return (
      <MainLayout title="Teacher Profile">
        <div className="max-w-4xl mx-auto mt-10 p-8 bg-white rounded-xl shadow-sm border border-red-100 text-center">
          <span className="material-symbols-outlined text-5xl text-red-500 mb-4">gpp_bad</span>
          <h2 className="text-2xl font-bold text-slate-800 mb-2">Profile Resolution Failed</h2>
          <p className="text-gray-500 mb-6">{error}</p>
        </div>
      </MainLayout>
    );
  }

  return (
    <MainLayout title="Teacher Profile">
      <div className="max-w-4xl mx-auto space-y-8 pb-24 md:pb-8">
        
        {/* Page Title */}
        <div className="mb-6 pl-4 md:pl-0">
          <p className="text-[#0058be] font-bold text-sm tracking-widest uppercase mb-1">Account Management</p>
          <h2 className="text-4xl font-extrabold font-display tracking-tight text-slate-800">My Profile</h2>
        </div>

        {error && (
          <div className="p-4 bg-red-50 text-red-700 rounded-md border border-red-200 flex gap-3 shadow-sm">
             <span className="material-symbols-outlined">error</span>
             <div>
               <p className="font-bold text-sm">Action Required</p>
               <p className="text-sm mt-1">{error}</p>
             </div>
          </div>
        )}

        {success && (
          <div className="p-4 bg-green-50 text-green-800 rounded-md border border-green-200 flex gap-3 shadow-sm">
             <span className="material-symbols-outlined">check_circle</span>
             <div>
               <p className="font-bold text-sm">Success!</p>
               <p className="text-sm mt-1">{success}</p>
             </div>
          </div>
        )}

        {/* Profile Identity Card */}
        <section className="bg-white rounded-xl p-8 flex flex-col md:flex-row gap-8 items-start relative overflow-hidden shadow-sm border border-gray-100">
          {/* Subtle Background Texture */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#0058be]/5 rounded-full -mr-20 -mt-20 blur-3xl"></div>
          
          <div className="relative group mx-auto md:mx-0">
            <div className="w-32 h-32 md:w-40 md:h-40 rounded-xl overflow-hidden shadow-lg border-4 border-white bg-blue-50 flex items-center justify-center text-[#0058be]">
              {profile?.profile_picture ? (
                <img alt="Profile" className="w-full h-full object-cover" src={profile.profile_picture} />
              ) : (
                <span className="text-5xl font-bold">{getInitials(profile?.first_name, profile?.last_name)}</span>
              )}
            </div>
            <button className="absolute -bottom-2 -right-2 p-3 bg-[#0058be] text-white rounded-xl shadow-xl hover:scale-105 active:scale-95 transition-transform outline-none border-none cursor-pointer">
              <span className="material-symbols-outlined text-lg block">photo_camera</span>
            </button>
          </div>
          
          <div className="flex-1 z-10 w-full">
            <div className="flex flex-col sm:flex-row justify-between items-start gap-4 mb-4">
              <div>
                <h3 className="text-3xl font-bold font-display text-slate-800 mb-1">
                  {profile?.first_name || profile?.last_name ? `${profile?.first_name} ${profile?.last_name}` : "Faculty Member"}
                </h3>
                <p className="text-[#0058be] font-semibold flex items-center gap-2">
                  <span className="material-symbols-outlined text-sm block">verified</span>
                  {profile?.qualification ? `${profile.qualification}` : "Registered Educator"}
                </p>
              </div>
              <span className="bg-[#eff4ff] border border-blue-100 px-4 py-1.5 rounded-full text-xs font-bold text-[#0058be] uppercase tracking-wider shadow-sm">Active Status</span>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-y-4 gap-x-12 mt-6">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-gray-50 flex items-center justify-center text-[#0058be] shrink-0 border border-gray-100">
                  <span className="material-symbols-outlined block">mail</span>
                </div>
                <div className="overflow-hidden">
                  <p className="text-xs text-gray-500 font-medium">Institutional Email</p>
                  <p className="text-sm font-semibold text-slate-800 truncate">{profile?.email || identity?.email}</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-gray-50 flex items-center justify-center text-[#0058be] shrink-0 border border-gray-100">
                  <span className="material-symbols-outlined block">badge</span>
                </div>
                <div>
                  <p className="text-xs text-gray-500 font-medium">Employee ID</p>
                  <p className="text-sm font-semibold text-slate-800 font-mono">{profile?.employee_id || "Pending"}</p>
                </div>
              </div>
            </div>
            
            <div className="mt-8 pt-6 border-t border-gray-100 flex flex-wrap gap-4 items-center">
              <p className="text-xs font-bold text-gray-500 uppercase tracking-widest">System Identifiers:</p>
              <span className="px-3 py-1 bg-gray-50 rounded-md text-[10px] font-mono text-[#0058be] font-bold border border-gray-200">User UUID: {identity?.id?.split('-')[0]}...</span>
              <span className="px-3 py-1 bg-purple-50 rounded-md text-[10px] font-mono text-purple-700 font-bold border border-purple-100">Teacher UUID: {profile?.id?.split('-')[0]}...</span>
            </div>
          </div>
        </section>

        {/* Edit Profile Section */}
        <section className="bg-white rounded-xl p-8 shadow-sm border border-gray-100">
          <div className="flex items-center gap-3 mb-8">
            <span className="material-symbols-outlined text-[#0058be] block">edit_note</span>
            <h4 className="text-xl font-bold font-display text-slate-800">Update Profile Information</h4>
          </div>
          
          <form onSubmit={handleSave} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              
              <div className="space-y-2">
                <label className="text-sm font-bold text-gray-600 ml-1">First Name</label>
                <div className="relative group">
                  <input 
                    className="w-full bg-[#f8f9ff] border border-transparent rounded-md px-4 py-3.5 text-slate-700 font-medium focus:ring-2 focus:ring-[#0058be]/20 focus:border-[#0058be]/40 focus:bg-white transition-all outline-none" 
                    placeholder="Enter first name" 
                    type="text" 
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                  />
                  <span className="absolute right-4 top-3.5 text-gray-400 group-focus-within:text-[#0058be] material-symbols-outlined text-sm block">person</span>
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-bold text-gray-600 ml-1">Last Name</label>
                <div className="relative group">
                  <input 
                    className="w-full bg-[#f8f9ff] border border-transparent rounded-md px-4 py-3.5 text-slate-700 font-medium focus:ring-2 focus:ring-[#0058be]/20 focus:border-[#0058be]/40 focus:bg-white transition-all outline-none" 
                    placeholder="Enter last name" 
                    type="text" 
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                  />
                  <span className="absolute right-4 top-3.5 text-gray-400 group-focus-within:text-[#0058be] material-symbols-outlined text-sm block">person</span>
                </div>
              </div>
              
              <div className="space-y-2">
                <label className="text-sm font-bold text-gray-600 ml-1">Verified Contact Phone</label>
                <div className="relative group">
                  <input 
                    className="w-full bg-[#f8f9ff] border border-transparent rounded-md px-4 py-3.5 text-slate-700 font-medium focus:ring-2 focus:ring-[#0058be]/20 focus:border-[#0058be]/40 focus:bg-white transition-all outline-none" 
                    placeholder="Enter phone number" 
                    type="tel" 
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                  />
                  <span className="absolute right-4 top-3.5 text-gray-400 group-focus-within:text-[#0058be] material-symbols-outlined text-sm block">call</span>
                </div>
              </div>
              
              <div className="space-y-2">
                <label className="text-sm font-bold text-gray-600 ml-1">Update Password</label>
                <div className="relative group">
                  <input 
                    className="w-full bg-[#f8f9ff] border border-transparent rounded-md px-4 py-3.5 text-slate-700 font-medium focus:ring-2 focus:ring-[#0058be]/20 focus:border-[#0058be]/40 focus:bg-white transition-all outline-none" 
                    placeholder="Enter new password (optional)" 
                    type="password" 
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                  <span className="absolute right-4 top-3.5 text-gray-400 group-focus-within:text-[#0058be] material-symbols-outlined text-sm block">lock</span>
                </div>
                <p className="text-[10px] text-gray-500 ml-1 font-medium">Leave blank if you do not wish to change your password.</p>
              </div>
              
              <div className="bg-amber-50 p-4 rounded-xl flex items-start gap-3 border border-amber-100 md:col-span-2 lg:col-span-1">
                <span className="material-symbols-outlined text-[#924700] text-xl block">auto_awesome</span>
                <div>
                  <p className="text-xs font-bold text-[#924700] uppercase">AI Security Insight</p>
                  <p className="text-xs text-amber-900 mt-1">Your password was last changed during onboarding. We recommend updating it quarterly for optimal account security.</p>
                </div>
              </div>

            </div>
            
            {/* Action Buttons */}
            <div className="flex flex-col-reverse sm:flex-row items-center sm:justify-end gap-4 mt-12 pt-8 border-t border-gray-100">
              <button 
                className="w-full sm:w-auto px-8 py-3.5 rounded-md text-sm font-bold text-gray-500 hover:bg-gray-50 hover:text-slate-800 transition-colors outline-none border border-transparent cursor-pointer" 
                type="button"
                onClick={() => {
                  setFirstName(profile?.first_name || identity?.first_name || "");
                  setLastName(profile?.last_name || identity?.last_name || "");
                  setPhone(profile?.phone_number || "");
                  setPassword("");
                }}
              >
                Reset Changes
              </button>
              <button 
                className="w-full sm:w-auto flex items-center justify-center gap-2 px-10 py-3.5 rounded-md text-sm font-bold text-white bg-gradient-to-r from-[#0058be] to-[#2170e4] shadow-lg shadow-[#0058be]/20 hover:scale-[1.02] active:scale-95 transition-all outline-none border-none cursor-pointer disabled:opacity-70 disabled:scale-100" 
                type="submit"
                disabled={saving}
              >
                {saving ? <span className="material-symbols-outlined animate-spin text-[18px]">progress_activity</span> : <span className="material-symbols-outlined text-[18px]">save</span>}
                {saving ? "Synchronizing..." : "Save Configuration"}
              </button>
            </div>
          </form>
        </section>

        {/* Footnote Information */}
        <div className="flex justify-center items-center gap-6 py-4 flex-wrap">
          <p className="text-xs text-gray-500 font-medium flex items-center gap-2">
            <span className="material-symbols-outlined text-sm block">verified_user</span>
            Data encrypted with AES-256
          </p>
          <div className="hidden sm:block h-1 w-1 bg-gray-300 rounded-full"></div>
          <p className="text-xs text-gray-500 font-medium">Verified Tenant: {identity?.school_id?.split('-')[0]}...</p>
        </div>

      </div>
    </MainLayout>
  );
}
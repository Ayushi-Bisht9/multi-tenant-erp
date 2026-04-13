import React from 'react';
import { useNavigate } from 'react-router-dom';
import DashboardLayout from "../../components/erp/parent/DashboardLayout";
const ParentPortalSettings = () => {
  const navigate = useNavigate();

  return (
    <DashboardLayout>
    <div className="max-w-5xl mx-auto p-8 pb-24">
      {/* Top Header Area */}
      <header className="flex justify-between items-center mb-10">
        <div>
          <h1 className="text-4xl font-extrabold text-on-surface headline-font tracking-tight">Settings</h1>
          <p className="text-on-surface-variant font-medium mt-1">Manage your account preferences and application configuration.</p>
        </div>
        {/* <button onClick={() => navigate(-1)} className="flex items-center gap-2 px-5 py-2.5 bg-surface-container-high text-primary font-semibold rounded-md hover:bg-surface-variant transition-colors group">
          <span className="material-symbols-outlined group-active:scale-90 transition-transform" data-icon="arrow_back">arrow_back</span>
          <span>Go Back</span>
        </button> */}
      </header>
      
      {/* Bento Grid Layout for Settings */}
      <div className="grid grid-cols-12 gap-6">
        
        {/* Account Profile Section */}
        <section className="col-span-12 lg:col-span-8 bg-surface-container-lowest rounded-lg p-8 shadow-sm">
          <div className="flex items-center gap-3 mb-8">
            <span className="p-2 bg-primary/10 text-primary rounded-lg material-symbols-outlined" data-icon="person">person</span>
            <h2 className="text-2xl font-bold headline-font">Account Profile</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label className="text-sm font-semibold text-on-surface-variant ml-1">Full Name</label>
              <input className="w-full bg-surface-container-low border-none rounded-md px-4 py-3 focus:ring-2 focus:ring-surface-tint focus:bg-surface-container-lowest transition-all" type="text" defaultValue="Alex Harrison"/>
            </div>
            <div className="space-y-2">
              <label className="text-sm font-semibold text-on-surface-variant ml-1">Email Address</label>
              <input className="w-full bg-surface-container-low border-none rounded-md px-4 py-3 focus:ring-2 focus:ring-surface-tint focus:bg-surface-container-lowest transition-all" type="email" defaultValue="alex.harrison@edu-mail.com"/>
            </div>
            <div className="space-y-2">
              <label className="text-sm font-semibold text-on-surface-variant ml-1">Phone Number</label>
              <input className="w-full bg-surface-container-low border-none rounded-md px-4 py-3 focus:ring-2 focus:ring-surface-tint focus:bg-surface-container-lowest transition-all" type="tel" defaultValue="+1 (555) 0123-4567"/>
            </div>
            <div className="space-y-2">
              <label className="text-sm font-semibold text-on-surface-variant ml-1">Relationship</label>
              <select className="w-full bg-surface-container-low border-none rounded-md px-4 py-3 focus:ring-2 focus:ring-surface-tint focus:bg-surface-container-lowest transition-all" defaultValue="Legal Guardian">
                <option>Mother</option>
                <option>Father</option>
                <option value="Legal Guardian">Legal Guardian</option>
              </select>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-outline-variant/15 flex justify-end">
            <button className="bg-gradient-to-br from-primary to-primary-container text-white px-8 py-3 rounded-md font-bold text-sm hover:opacity-90 transition-all shadow-lg shadow-primary/20 active:scale-95">Save Changes</button>
          </div>
        </section>

        {/* Language & Region */}
        <section className="col-span-12 lg:col-span-4 flex flex-col gap-6">
          <div className="bg-surface-container-lowest rounded-lg p-6 flex-1 shadow-sm">
            <div className="flex items-center gap-3 mb-6">
              <span className="p-2 bg-secondary/10 text-secondary rounded-lg material-symbols-outlined" data-icon="language">language</span>
              <h2 className="text-xl font-bold headline-font">Language &amp; Region</h2>
            </div>
            <div className="space-y-4">
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-wider text-outline ml-1">System Language</label>
                <div className="flex items-center justify-between p-3 bg-surface-container-low rounded-md group hover:bg-surface-container transition-colors cursor-pointer">
                  <span className="font-medium">English (US)</span>
                  <span className="material-symbols-outlined text-outline text-sm" data-icon="expand_more">expand_more</span>
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-wider text-outline ml-1">Timezone</label>
                <div className="flex items-center justify-between p-3 bg-surface-container-low rounded-md group hover:bg-surface-container transition-colors cursor-pointer">
                  <span className="font-medium">(GMT-05:00) Eastern Time</span>
                  <span className="material-symbols-outlined text-outline text-sm" data-icon="expand_more">expand_more</span>
                </div>
              </div>
            </div>
          </div>
          
{/* App Appearance */}
{/* App Appearance */}

<div className="bg-[#F8FAFC] rounded-xl p-6 shadow-sm">

<div className="flex items-center gap-3 mb-5">

<span className="p-2 rounded-lg bg-[#F5EFE6] text-[#8B5E3C] material-symbols-outlined">
palette
</span>

<h2 className="text-lg font-semibold text-gray-900">
App Appearance
</h2>

</div>


<div className="grid grid-cols-2 gap-4">


{/* LIGHT MODE */}

<button
className="flex flex-col items-center justify-center gap-2
p-6 rounded-xl
border-2 border-blue-600
bg-blue-50"
>

<span className="material-symbols-outlined text-blue-600 text-3xl">
light_mode
</span>

<span className="text-sm font-semibold text-blue-600">
Light Mode
</span>

</button>



{/* DARK MODE */}

<button
className="flex flex-col items-center justify-center gap-2
p-6 rounded-xl
bg-gray-200"
>

<span className="material-symbols-outlined text-gray-700 text-3xl">
dark_mode
</span>

<span className="text-sm font-semibold text-gray-700">
Dark Mode
</span>

</button>


</div>

</div>
</section>

        {/* Notification Preferences */}
        <section className="col-span-12 bg-surface-container-lowest rounded-lg p-8 shadow-sm">
          <div className="flex items-center gap-3 mb-10">
            <span className="p-2 bg-primary/10 text-primary rounded-lg material-symbols-outlined" data-icon="notifications_active">notifications_active</span>
            <h2 className="text-2xl font-bold headline-font">Notification Preferences</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="flex items-start gap-4 p-4 rounded-xl bg-surface-container-low hover:bg-surface-container transition-all">
              <div className="w-12 h-12 rounded-lg bg-white flex items-center justify-center shadow-sm">
                <span className="material-symbols-outlined text-primary" data-icon="mail">mail</span>
              </div>
              <div className="flex-1">
                <h3 className="font-bold text-on-surface leading-tight">Email Summaries</h3>
                <p className="text-sm text-on-surface-variant mt-1 mb-4">Weekly digests of child progress.</p>
                <div className="flex gap-3">
                  <div className="w-10 h-5 bg-primary rounded-full relative cursor-pointer">
                    <div className="absolute right-1 top-1 w-3 h-3 bg-white rounded-full"></div>
                  </div>
                  <span className="text-xs font-bold text-primary">ENABLED</span>
                </div>
              </div>
            </div>
            <div className="flex items-start gap-4 p-4 rounded-xl bg-surface-container-low hover:bg-surface-container transition-all">
              <div className="w-12 h-12 rounded-lg bg-white flex items-center justify-center shadow-sm">
                <span className="material-symbols-outlined text-primary" data-icon="smartphone">smartphone</span>
              </div>
              <div className="flex-1">
                <h3 className="font-bold text-on-surface leading-tight">Push Notifications</h3>
                <p className="text-sm text-on-surface-variant mt-1 mb-4">Real-time alerts for absences.</p>
                <div className="flex gap-3">
                  <div className="w-10 h-5 bg-primary rounded-full relative cursor-pointer">
                    <div className="absolute right-1 top-1 w-3 h-3 bg-white rounded-full"></div>
                  </div>
                  <span className="text-xs font-bold text-primary">ENABLED</span>
                </div>
              </div>
            </div>
            <div className="flex items-start gap-4 p-4 rounded-xl bg-surface-container-low hover:bg-surface-container transition-all">
              <div className="w-12 h-12 rounded-lg bg-white flex items-center justify-center shadow-sm">
                <span className="material-symbols-outlined text-on-surface-variant" data-icon="sms">sms</span>
              </div>
              <div className="flex-1">
                <h3 className="font-bold text-on-surface leading-tight">SMS Alerts</h3>
                <p className="text-sm text-on-surface-variant mt-1 mb-4">Emergency weather or security info.</p>
                <div className="flex gap-3">
                  <div className="w-10 h-5 bg-outline-variant/40 rounded-full relative cursor-pointer">
                    <div className="absolute left-1 top-1 w-3 h-3 bg-white rounded-full"></div>
                  </div>
                  <span className="text-xs font-bold text-on-surface-variant">DISABLED</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Danger Zone / AI Insights Tie-in */}
       {/* AI CONFIGURATION */}

<section className="col-span-12 lg:col-span-4 bg-[#FFF7ED] rounded-xl p-8 border-l-4 border-[#D97706]">

<div className="flex items-center gap-3 mb-4">

<span className="material-symbols-outlined text-[#D97706]">
auto_awesome
</span>

<h3 className="text-lg font-semibold text-gray-900">
AI Configuration
</h3>

</div>

<p className="text-sm text-gray-600 mb-6 leading-relaxed">
Customize how the intelligence engine analyzes child performance
and generates recommendations for you.
</p>

<button className="bg-[#B45309] text-white w-full py-3 rounded-md font-semibold text-sm hover:opacity-90">

Manage AI Models →

</button>

</section>



{/* ACCOUNT SECURITY */}

<section className="col-span-12 lg:col-span-8 bg-[#FEF2F2] rounded-xl p-8">

<div className="flex items-center gap-3 mb-4">

<span className="material-symbols-outlined text-red-600">
warning
</span>

<h3 className="text-lg font-semibold text-red-600">
Account Security
</h3>

</div>

<div className="flex flex-col sm:flex-row items-center justify-between gap-4">

<p className="text-sm text-gray-600">
Resetting your password or changing security keys will sign you out of all devices.
</p>

<button className="bg-red-500 text-white px-6 py-2.5 rounded-md font-semibold text-sm hover:bg-red-600">

Sign Out All Devices

</button>

</div>

</section>

      </div>
    </div>
    </DashboardLayout>
  );
};

export default ParentPortalSettings;

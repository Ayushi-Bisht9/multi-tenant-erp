import React from 'react';
import MainLayout from "../../components/erp/teacher/MainLayout";

const TeacherSystemSettings = () => {
  return (
    <MainLayout title="Settings">
      <div className="p-4 md:p-8 max-w-4xl mx-auto pb-28 md:pb-24 space-y-12 w-full">
        
        {/* Language & Appearance */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          
          {/* Language Settings */}
          <section className="bg-surface-container-lowest p-6 rounded-lg border border-outline-variant/15 flex flex-col gap-4 shadow-sm">
            <div className="flex items-center gap-3 mb-2">
              <span className="material-symbols-outlined text-primary block">language</span>
              <h2 className="text-lg font-bold font-display text-on-surface">Language Settings</h2>
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-xs font-semibold uppercase tracking-wider text-slate-500">Interface Language</label>
              <div className="relative">
                <select className="w-full bg-surface-container-low border-none rounded-md py-3 px-4 appearance-none focus:ring-2 focus:ring-primary/40 text-sm font-medium outline-none cursor-pointer">
                  <option>English (United States)</option>
                  <option>Spanish (ES)</option>
                  <option>French (FR)</option>
                  <option>German (DE)</option>
                </select>
                <span className="material-symbols-outlined absolute right-3 top-3 text-slate-400 pointer-events-none block">expand_more</span>
              </div>
            </div>
          </section>

          {/* Appearance Settings */}
          <section className="bg-surface-container-lowest p-6 rounded-lg border border-outline-variant/15 flex flex-col gap-4 shadow-sm">
            <div className="flex items-center gap-3 mb-2">
              <span className="material-symbols-outlined text-[#6b38d4] block">palette</span>
              <h2 className="text-lg font-bold font-display text-on-surface">Appearance Settings</h2>
            </div>
            <div className="flex gap-4">
              <button className="flex-1 p-3 rounded-xl border-2 border-primary bg-primary/10 flex flex-col items-center gap-2 hover:bg-primary/20 transition-colors outline-none cursor-pointer">
                <span className="material-symbols-outlined text-primary block">light_mode</span>
                <span className="text-xs font-bold text-primary">Light</span>
              </button>
              <button className="flex-1 p-3 rounded-xl border-2 border-transparent bg-slate-100 flex flex-col items-center gap-2 hover:bg-slate-200 transition-colors outline-none cursor-pointer text-slate-500">
                <span className="material-symbols-outlined block">dark_mode</span>
                <span className="text-xs font-bold">Dark</span>
              </button>
            </div>
          </section>

        </div>

        {/* Notification Settings */}
        <section className="bg-surface-container-lowest p-8 rounded-lg border border-outline-variant/15 shadow-sm">
          <div className="flex items-center gap-3 mb-8">
            <span className="material-symbols-outlined text-[#924700] block">notifications_active</span>
            <div>
              <h2 className="text-lg font-bold font-display text-on-surface">Notification Settings</h2>
              <p className="text-sm text-on-surface-variant font-body mt-1">Manage how you receive alerts and updates.</p>
            </div>
          </div>
          
          <div className="space-y-6">
            <div className="flex items-center justify-between pb-6 border-b border-outline-variant/15">
              <div className="flex flex-col">
                <span className="font-semibold text-on-surface">Email Notifications</span>
                <span className="text-sm text-on-surface-variant">Receive daily summaries and digest emails</span>
              </div>
              <label className="relative inline-flex items-center cursor-pointer">
                <input defaultChecked className="sr-only peer" type="checkbox" />
                <div className="w-11 h-6 bg-slate-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary"></div>
              </label>
            </div>
            
            <div className="flex items-center justify-between pb-6 border-b border-outline-variant/15">
              <div className="flex flex-col">
                <span className="font-semibold text-on-surface">Assignments Alerts</span>
                <span className="text-sm text-on-surface-variant">Notify when students submit new coursework</span>
              </div>
              <label className="relative inline-flex items-center cursor-pointer">
                <input defaultChecked className="sr-only peer" type="checkbox" />
                <div className="w-11 h-6 bg-slate-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary"></div>
              </label>
            </div>
            
            <div className="flex items-center justify-between pb-6 border-b border-outline-variant/15">
              <div className="flex flex-col">
                <span className="font-semibold text-on-surface">Attendance Reports</span>
                <span className="text-sm text-on-surface-variant">Alert when student attendance drops below 75%</span>
              </div>
              <label className="relative inline-flex items-center cursor-pointer">
                <input className="sr-only peer" type="checkbox" />
                <div className="w-11 h-6 bg-slate-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary"></div>
              </label>
            </div>
            
            <div className="flex items-center justify-between">
              <div className="flex flex-col">
                <span className="font-semibold text-on-surface">Exams & Grading</span>
                <span className="text-sm text-on-surface-variant">Reminders for pending grading and exam schedules</span>
              </div>
              <label className="relative inline-flex items-center cursor-pointer">
                <input defaultChecked className="sr-only peer" type="checkbox" />
                <div className="w-11 h-6 bg-slate-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary"></div>
              </label>
            </div>
          </div>
        </section>

        {/* Privacy & Security */}
        <section className="bg-surface-container-lowest p-8 rounded-lg border border-outline-variant/15 shadow-sm">
          <div className="flex items-center gap-3 mb-8">
            <span className="material-symbols-outlined text-primary block">security</span>
            <h2 className="text-lg font-bold font-display text-on-surface">Privacy & Security</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-5 rounded-xl bg-slate-50 border border-slate-100 flex flex-col gap-4">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center shadow-sm text-primary">
                  <span className="material-symbols-outlined text-sm block">lock</span>
                </div>
                <span className="font-bold text-sm text-on-surface">Update Password</span>
              </div>
              <p className="text-xs text-on-surface-variant">It's recommended to change your password every 6 months for optimal security.</p>
              <button className="text-primary text-xs font-bold text-left hover:underline outline-none border-none cursor-pointer bg-transparent mt-auto">Change Password →</button>
            </div>
            <div className="p-5 rounded-xl bg-slate-50 border border-slate-100 flex flex-col gap-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center shadow-sm text-primary">
                    <span className="material-symbols-outlined text-sm block">phonelink_lock</span>
                  </div>
                  <span className="font-bold text-sm text-on-surface">Two-Factor Auth</span>
                </div>
                <span className="px-2 py-0.5 bg-green-100 text-green-700 text-[10px] font-black rounded-full uppercase">Enabled</span>
              </div>
              <p className="text-xs text-on-surface-variant">Your account is currently protected by an extra layer of security via SMS/App.</p>
              <button className="text-primary text-xs font-bold text-left hover:underline outline-none border-none cursor-pointer bg-transparent mt-auto">Manage 2FA →</button>
            </div>
          </div>
        </section>

      </div>
      
      {/* Sticky Actions Footer */}
      <div className="fixed bottom-0 left-0 md:left-72 right-0 p-4 md:p-6 bg-white/80 backdrop-blur-md border-t border-outline-variant/10 flex items-center justify-end gap-4 z-40">
        <button className="px-6 py-2.5 text-sm font-bold text-slate-500 hover:bg-slate-100 rounded-md transition-colors outline-none border-none cursor-pointer bg-transparent">
          Reset Defaults
        </button>
        <button className="px-8 py-2.5 text-sm font-bold text-white bg-gradient-to-br from-primary to-primary-container rounded-md shadow-lg shadow-primary/20 active:scale-95 transition-all outline-none border-none cursor-pointer">
          Save Settings
        </button>
      </div>
    </MainLayout>
  );
};

export default TeacherSystemSettings;

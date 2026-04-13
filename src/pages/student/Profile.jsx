import React from 'react';
import MainLayout from '../../layouts/MainLayout';

export default function Profile() {
  return (
    <MainLayout title="Student Profile - ScholarFlow Pro">
      <div className="max-w-5xl mx-auto">

<div className="grid grid-cols-1 md:grid-cols-12 gap-6 mb-12">

<div className="md:col-span-8 bg-surface-container-lowest rounded-xl p-8 flex flex-col md:flex-row items-center md:items-start gap-8 transition-all hover:bg-surface-bright">
<div className="relative group">
<img alt="Profile Photo" className="w-40 h-40 md:w-48 md:h-48 rounded-2xl object-cover shadow-xl" data-alt="High-resolution professional headshot of a student with a neutral background, cinematic lighting, and sharp focus" src="https://lh3.googleusercontent.com/aida-public/AB6AXuD37owkQXJ1xjWAiqK-c5Kwj2iMCmEfxLOu-7aygGDTMeumPwi-2zjT274CwQR9o3Kr-uaPqspo7EDsiOcPGKwi1KHzNOfCsYJFJSCTB7-hFT1T57JNKzzIucOsNnSdSuBP4cARbyzC7KOckMWe6GSYlAM_A3dDECi6Fl576nLCAaZXxRgaa9pSHQ3L03eV2PnbJLB_TIjfLCEDCaSOlH3f9NitRFRrqWzXDRngwtsJ8DPTYRuj4olG4Qvf50k7md8WyTFkZ0wZ3A"/>
<button className="absolute -bottom-3 -right-3 bg-primary-container text-white p-3 rounded-full shadow-lg hover:scale-110 transition-transform">
<span className="material-symbols-outlined text-lg" data-icon="photo_camera">photo_camera</span>
</button>
</div>
<div className="flex-1 text-center md:text-left">
<div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-4">
<h1 className="text-4xl font-extrabold font-headline text-on-surface">Alex Rivera</h1>
<span className="px-4 py-1.5 bg-surface-container-highest text-primary text-xs font-bold rounded-full self-center md:self-auto backdrop-blur-md bg-opacity-80">ACTIVE STUDENT</span>
</div>
<p className="text-on-surface-variant font-medium text-lg mb-6">Pursuing Excellence in Science &amp; Technology</p>
<div className="flex flex-wrap justify-center md:justify-start gap-3">
<button className="bg-gradient-to-br from-primary to-primary-container text-white px-8 py-3 rounded-xl font-bold flex items-center gap-2 shadow-lg shadow-blue-100 hover:translate-y-[-2px] transition-all">
<span className="material-symbols-outlined" data-icon="edit">edit</span>
                                    Edit Profile
                                </button>
<button className="bg-surface-container-high text-primary px-8 py-3 rounded-xl font-bold hover:bg-surface-variant transition-all">
                                    Download ID
                                </button>
</div>
</div>
</div>

<div className="md:col-span-4 grid grid-cols-1 gap-6">
<div className="bg-surface-container-lowest rounded-xl p-6 flex items-center justify-between group transition-all">
<div>
<p className="text-xs font-bold text-on-surface-variant uppercase tracking-widest mb-1">GPA Score</p>
<p className="text-3xl font-black text-on-surface font-headline">3.85</p>
</div>
<div className="w-12 h-12 rounded-lg bg-blue-50 flex items-center justify-center text-primary">
<span className="material-symbols-outlined text-3xl" data-icon="grade">grade</span>
</div>
</div>
<div className="bg-surface-container-lowest rounded-xl p-6 flex items-center justify-between group transition-all">
<div>
<p className="text-xs font-bold text-on-surface-variant uppercase tracking-widest mb-1">Attendance</p>
<p className="text-3xl font-black text-on-surface font-headline">96%</p>
</div>
<div className="w-12 h-12 rounded-lg bg-blue-50 flex items-center justify-center text-primary">
<span className="material-symbols-outlined text-3xl" data-icon="event_available">event_available</span>
</div>
</div>
</div>
</div>

<div className="grid grid-cols-1 md:grid-cols-2 gap-8">

<section className="space-y-6">
<div className="flex items-center gap-3 px-2">
<span className="material-symbols-outlined text-primary" data-icon="school">school</span>
<h2 className="text-xl font-bold font-headline">Academic Information</h2>
</div>
<div className="bg-surface-container-lowest rounded-xl overflow-hidden">
<div className="p-6 space-y-6">
<div className="flex justify-between items-start">
<div>
<label className="text-xs font-bold text-slate-400 uppercase font-label">Class / Grade</label>
<p className="text-on-surface font-semibold text-lg">Grade 11 - Section B</p>
</div>
<span className="material-symbols-outlined text-slate-300" data-icon="chevron_right">chevron_right</span>
</div>
<div className="flex justify-between items-start">
<div>
<label className="text-xs font-bold text-slate-400 uppercase font-label">Roll Number</label>
<p className="text-on-surface font-semibold text-lg">SR-2024-4492</p>
</div>
</div>
<div className="flex justify-between items-start">
<div>
<label className="text-xs font-bold text-slate-400 uppercase font-label">Major Subject</label>
<p className="text-on-surface font-semibold text-lg">Physics &amp; Computer Science</p>
</div>
</div>
<div className="flex justify-between items-start">
<div>
<label className="text-xs font-bold text-slate-400 uppercase font-label">Scholarship Status</label>
<p className="text-tertiary font-bold text-lg">Academic Merit Plus</p>
</div>
</div>
</div>
</div>
</section>

<section className="space-y-6">
<div className="flex items-center gap-3 px-2">
<span className="material-symbols-outlined text-primary" data-icon="contact_page">contact_page</span>
<h2 className="text-xl font-bold font-headline">Personal Contact</h2>
</div>
<div className="bg-surface-container-lowest rounded-xl overflow-hidden">
<div className="p-6 space-y-6">
<div className="flex items-center gap-4">
<div className="w-10 h-10 rounded-full bg-surface-container-low flex items-center justify-center">
<span className="material-symbols-outlined text-primary" data-icon="mail">mail</span>
</div>
<div className="flex-1">
<label className="text-xs font-bold text-slate-400 uppercase font-label">Email Address</label>
<p className="text-on-surface font-semibold">alex.rivera@scholarflow.edu</p>
</div>
</div>
<div className="flex items-center gap-4">
<div className="w-10 h-10 rounded-full bg-surface-container-low flex items-center justify-center">
<span className="material-symbols-outlined text-primary" data-icon="call">call</span>
</div>
<div className="flex-1">
<label className="text-xs font-bold text-slate-400 uppercase font-label">Phone Number</label>
<p className="text-on-surface font-semibold">+1 (555) 012-4492</p>
</div>
</div>
<div className="flex items-center gap-4">
<div className="w-10 h-10 rounded-full bg-surface-container-low flex items-center justify-center">
<span className="material-symbols-outlined text-primary" data-icon="location_on">location_on</span>
</div>
<div className="flex-1">
<label className="text-xs font-bold text-slate-400 uppercase font-label">Residence</label>
<p className="text-on-surface font-semibold">Seattle, WA - Campus Block C</p>
</div>
</div>
<div className="flex items-center gap-4">
<div className="w-10 h-10 rounded-full bg-surface-container-low flex items-center justify-center">
<span className="material-symbols-outlined text-primary" data-icon="emergency_share">emergency_share</span>
</div>
<div className="flex-1">
<label className="text-xs font-bold text-slate-400 uppercase font-label">Emergency Contact</label>
<p className="text-on-surface font-semibold">Elena Rivera (Mother) &#x2022; 012-4493</p>
</div>
</div>
</div>
</div>
</section>
</div>
</div>

    </MainLayout>
  );
}


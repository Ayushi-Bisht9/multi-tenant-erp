import React from 'react';
import MainLayout from '../../layouts/MainLayout';

export default function FeesPayments() {
  return (
    <MainLayout title="Financials">
      <div className="grid grid-cols-12 gap-6 items-start">

<div className="col-span-12 lg:col-span-8 space-y-6">

<section className="relative overflow-hidden bg-gradient-to-br from-primary to-primary-container rounded-lg p-8 text-on-primary shadow-xl flex justify-between items-center">
<div className="relative z-10">
<p className="text-primary-fixed text-sm font-semibold mb-1 uppercase tracking-widest opacity-80">Outstanding Balance</p>
<h2 className="text-5xl font-extrabold font-headline leading-none">&#x24;2,450.00</h2>
<div className="mt-6 flex gap-4">
<button className="bg-surface-container-lowest text-primary px-8 py-3 rounded-md font-bold text-sm hover:bg-opacity-90 transition-all active:scale-95">
                                Pay Now
                            </button>
<button className="bg-white/10 backdrop-blur-md text-white border border-white/20 px-6 py-3 rounded-md font-semibold text-sm hover:bg-white/20 transition-all">
                                Download Invoice
                            </button>
</div>
</div>

<div className="hidden md:block glass-panel px-6 py-4 rounded-xl border border-white/10 rotate-3">
<p className="text-primary text-[10px] font-bold uppercase mb-1">Status</p>
<div className="flex items-center gap-2">
<span className="w-2 h-2 rounded-full bg-error animate-pulse"/>
<span className="text-on-surface font-bold text-sm">Action Required</span>
</div>
</div>

<div className="absolute -right-20 -top-20 w-64 h-64 bg-white/10 rounded-full blur-3xl"/>
</section>

<section className="bg-surface-container-lowest rounded-lg p-8">
<div className="flex items-center justify-between mb-8">
<h3 className="text-xl font-bold font-headline">Academic Year Breakdown</h3>
<span className="text-xs font-semibold text-on-surface-variant bg-surface-container p-2 rounded-md">Fall Semester 2024</span>
</div>
<div className="space-y-6">

<div className="grid grid-cols-12 text-[10px] font-bold text-slate-400 uppercase tracking-widest px-4">
<div className="col-span-6">Description</div>
<div className="col-span-3 text-right">Amount</div>
<div className="col-span-3 text-right">Due Date</div>
</div>

<div className="group bg-surface-container-low hover:bg-surface-container-high transition-colors p-4 rounded-md grid grid-cols-12 items-center">
<div className="col-span-6 flex items-center gap-3">
<div className="w-10 h-10 rounded-md bg-primary-fixed flex items-center justify-center text-primary">
<span className="material-symbols-outlined">menu_book</span>
</div>
<div>
<p className="font-bold text-on-surface">Tuition Fees</p>
<p className="text-xs text-on-surface-variant">Core Academic Program</p>
</div>
</div>
<div className="col-span-3 text-right font-headline font-bold">&#x24;1,800.00</div>
<div className="col-span-3 text-right text-sm text-slate-500">Oct 15, 2024</div>
</div>
<div className="group bg-surface-container-low hover:bg-surface-container-high transition-colors p-4 rounded-md grid grid-cols-12 items-center">
<div className="col-span-6 flex items-center gap-3">
<div className="w-10 h-10 rounded-md bg-secondary-fixed flex items-center justify-center text-secondary">
<span className="material-symbols-outlined">local_library</span>
</div>
<div>
<p className="font-bold text-on-surface">Library Membership</p>
<p className="text-xs text-on-surface-variant">Annual Access &amp; Resource Fund</p>
</div>
</div>
<div className="col-span-3 text-right font-headline font-bold">&#x24;350.00</div>
<div className="col-span-3 text-right text-sm text-slate-500">Oct 15, 2024</div>
</div>
<div className="group bg-surface-container-low hover:bg-surface-container-high transition-colors p-4 rounded-md grid grid-cols-12 items-center">
<div className="col-span-6 flex items-center gap-3">
<div className="w-10 h-10 rounded-md bg-tertiary-fixed flex items-center justify-center text-tertiary">
<span className="material-symbols-outlined">science</span>
</div>
<div>
<p className="font-bold text-on-surface">Science Lab Fee</p>
<p className="text-xs text-on-surface-variant">Laboratory Equipment &amp; Materials</p>
</div>
</div>
<div className="col-span-3 text-right font-headline font-bold">&#x24;300.00</div>
<div className="col-span-3 text-right text-sm text-slate-500">Oct 15, 2024</div>
</div>
</div>
</section>
</div>

<div className="col-span-12 lg:col-span-4 space-y-6">

<section className="bg-tertiary text-on-tertiary rounded-lg p-6 shadow-lg shadow-tertiary/10">
<div className="flex items-center gap-3 mb-4">
<span className="material-symbols-outlined">lightbulb</span>
<h4 className="font-bold text-sm tracking-tight">Financial Insight</h4>
</div>
<p className="text-sm leading-relaxed opacity-90">
                        Alex, you&apos;re eligible for a **5% Early Bird discount** if you clear the remaining tuition balance by September 30th.
                    </p>
</section>

<section className="bg-surface-container-lowest rounded-lg p-6 flex flex-col h-full">
<h3 className="text-lg font-bold font-headline mb-6">Recent History</h3>
<div className="space-y-4 flex-grow overflow-y-auto max-h-[400px] pr-2">

<div className="flex items-start justify-between p-3 rounded-md hover:bg-surface-container transition-colors">
<div className="flex gap-4">
<div className="p-2 rounded bg-green-50 text-green-600">
<span className="material-symbols-outlined">check_circle</span>
</div>
<div>
<p className="text-sm font-bold text-on-surface">Registration Fee</p>
<p className="text-[11px] text-on-surface-variant">Paid via Credit Card</p>
<p className="text-[10px] text-slate-400 mt-1">Aug 12, 2024 &#x2022; #TXN-9021</p>
</div>
</div>
<p className="text-sm font-bold text-green-700">+&#x24;500.00</p>
</div>

<div className="flex items-start justify-between p-3 rounded-md hover:bg-surface-container transition-colors">
<div className="flex gap-4">
<div className="p-2 rounded bg-green-50 text-green-600">
<span className="material-symbols-outlined">check_circle</span>
</div>
<div>
<p className="text-sm font-bold text-on-surface">Uniform Deposit</p>
<p className="text-[11px] text-on-surface-variant">Bank Transfer</p>
<p className="text-[10px] text-slate-400 mt-1">Aug 05, 2024 &#x2022; #TXN-8842</p>
</div>
</div>
<p className="text-sm font-bold text-green-700">+&#x24;150.00</p>
</div>

<div className="flex items-start justify-between p-3 rounded-md hover:bg-surface-container transition-colors">
<div className="flex gap-4">
<div className="p-2 rounded bg-amber-50 text-amber-600">
<span className="material-symbols-outlined">pending</span>
</div>
<div>
<p className="text-sm font-bold text-on-surface">Sports Equipment</p>
<p className="text-[11px] text-on-surface-variant">Awaiting Settlement</p>
<p className="text-[10px] text-slate-400 mt-1">Jul 28, 2024 &#x2022; #TXN-8711</p>
</div>
</div>
<p className="text-sm font-bold text-amber-600">-&#x24;200.00</p>
</div>
</div>
<button className="w-full mt-6 py-3 border border-outline-variant/30 text-on-surface-variant rounded-md text-xs font-bold uppercase tracking-widest hover:bg-surface-container-low transition-colors">
                        View Full Ledger
                    </button>
</section>

<div className="rounded-lg overflow-hidden bg-slate-200 h-48 relative group">
<img className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" data-alt="close-up of a high-end leather wallet on a minimalist white desk with architectural drawings and a luxury pen in soft focus" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDZkrz06BX_C431plviXxaz-Ys4f9SMnEw8-Dsk8MGYOekUy6ELy-z9vcmtFvFD-WPbvvsoUTluu2rzdR5xAQHYs3LrNaSutFL4dVjLfcC2j6Z5KyDFOgvI46cFsWfuA2aBn-IiN2B4CZGIHFrmQIZjZa4QoUgXUPRPW9qLWi7xhTlFL9nh_Po31b4iWgJzZnQdy4XWAxykYD5bWbmL1plCyWOTsk42oGDGQ2Ns8IqtxFKKBcMSw3hj2Fo42DCqAaEPWC5laVIojQ"/>
<div className="absolute inset-0 bg-gradient-to-t from-on-surface/60 to-transparent flex items-end p-6">
<p className="text-white text-xs font-medium">Safe &amp; Encrypted Payments</p>
</div>
</div>
</div>
</div>

    </MainLayout>
  );
}


import React from 'react';
import MainLayout from '../../layouts/MainLayout';

export default function Subjects() {
  return (
    <MainLayout title="The Academic Architect">
      <div className="px-8 py-8 max-w-7xl mx-auto">

<div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-6">
<div>
<h2 className="text-3xl font-headline font-extrabold text-on-surface tracking-tight">My Subjects</h2>
<p className="text-on-surface-variant mt-1 font-medium">Manage your academic curriculum and performance</p>
</div>
<div className="flex items-center gap-3">
<div className="flex flex-col gap-1">
<label className="text-[10px] font-bold uppercase tracking-wider text-outline px-1">Academic Year</label>
<select className="bg-surface-container-lowest border-none rounded-md px-4 py-2 text-sm font-semibold shadow-sm focus:ring-primary">
<option>2023-2024</option>
<option>2022-2023</option>
</select>
</div>
<div className="flex flex-col gap-1">
<label className="text-[10px] font-bold uppercase tracking-wider text-outline px-1">Semester</label>
<select className="bg-surface-container-lowest border-none rounded-md px-4 py-2 text-sm font-semibold shadow-sm focus:ring-primary">
<option>Spring Semester</option>
<option>Fall Semester</option>
</select>
</div>
</div>
</div>

<div className="bg-surface-container-lowest rounded-lg shadow-[0px_12px_32px_rgba(11,28,48,0.04)] overflow-hidden">
<table className="w-full text-left border-collapse">
<thead>
<tr className="bg-surface-container-low/50">
<th className="px-6 py-4 text-xs font-bold text-outline uppercase tracking-widest">Subject Name</th>
<th className="px-6 py-4 text-xs font-bold text-outline uppercase tracking-widest">Teacher</th>
<th className="px-6 py-4 text-xs font-bold text-outline uppercase tracking-widest text-center">Grade</th>
<th className="px-6 py-4 text-xs font-bold text-outline uppercase tracking-widest">Performance</th>
<th className="px-6 py-4 text-xs font-bold text-outline uppercase tracking-widest text-right">Action</th>
</tr>
</thead>
<tbody className="divide-y divide-surface-container-low">

<tr className="hover:bg-surface-container-low/30 transition-colors group">
<td className="px-6 py-6">
<div className="flex items-center gap-4">
<div className="w-10 h-10 rounded-md bg-primary/10 flex items-center justify-center text-primary">
<span className="material-symbols-outlined" data-icon="functions">functions</span>
</div>
<div>
<p className="font-headline font-bold text-on-surface">Advanced Physics</p>
<p className="text-xs text-outline">PHY-402 &#x2022; Credits: 4.0</p>
</div>
</div>
</td>
<td className="px-6 py-6">
<div className="flex items-center gap-3">
<img className="w-8 h-8 rounded-full object-cover" data-alt="portrait of a middle-aged female teacher with glasses and a friendly professional look in a clean office" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCZarM7yf_aE4DdpnRXuhJIY9ccEpqSSWLPVS-gXe5342JgoIP55Z4Nwo5Kh_KNYIwNKq3ez-MsIpUWJplCLISrT21iy-hqJUxqhyFJPggYUL9YyCHe0c8MJT7KtbaMyl0DucbboJ7UsYXAQsFmUN1Cp4FTr6J63QccphtcViUzE9_k1doo4ATUN58Txqt2SOvA_GnVMtnnYi4PzMWC29WY20SRhrbCdhHg16lSiFfJKIxwmrFr0QKHKTWEy1PScomidu7xkwUl0A"/>
<span className="text-sm font-medium text-on-surface-variant">Dr. Sarah Miller</span>
</div>
</td>
<td className="px-6 py-6 text-center">
<span className="text-lg font-headline font-extrabold text-primary">A-</span>
<p className="text-[10px] text-outline font-bold">92.4%</p>
</td>
<td className="px-6 py-6">
<div className="flex items-center gap-2">
<div className="w-24 h-2 bg-surface-container-high rounded-full overflow-hidden">
<div className="h-full bg-primary rounded-full" style={{ width: `88%` }}/>
</div>
<span className="text-xs font-bold text-on-surface-variant">Excellent</span>
</div>
</td>
<td className="px-6 py-6 text-right">
<button className="bg-surface-container-high text-primary px-4 py-2 rounded-md text-xs font-bold group-hover:bg-primary group-hover:text-white transition-all">
                                    View Subject
                                </button>
</td>
</tr>

<tr className="hover:bg-surface-container-low/30 transition-colors group">
<td className="px-6 py-6">
<div className="flex items-center gap-4">
<div className="w-10 h-10 rounded-md bg-secondary/10 flex items-center justify-center text-secondary">
<span className="material-symbols-outlined" data-icon="science">science</span>
</div>
<div>
<p className="font-headline font-bold text-on-surface">Organic Chemistry</p>
<p className="text-xs text-outline">CHM-305 &#x2022; Credits: 4.0</p>
</div>
</div>
</td>
<td className="px-6 py-6">
<div className="flex items-center gap-3">
<img className="w-8 h-8 rounded-full object-cover" data-alt="portrait of a male professor in a white lab coat with a thoughtful expression in a laboratory setting" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAbyIVRcU-NQ0OhG24VTHSfN6gTtsB5m8RzthCnVtxwS0ZUZf_lbo1-705MGTSO7ylwVUeLaEms5EaZSo2A84suzHBlATLPW0GHcX1Ubige5U3PpHAdW5riXuJGGyYPoS4L_-WNdwl0kQRTJY7f6JdSAJrxg2uOINqlH6e2M9-29xJXT7aIfBLjpFboBpyFKwnvUsh2Bljqs4vzTDogPEElY6qtYuyocqqfUX_w_pK3ICbEtDs_VPQKwKA26tWPwnyKbDKkUnJAzA"/>
<span className="text-sm font-medium text-on-surface-variant">Prof. James Wilson</span>
</div>
</td>
<td className="px-6 py-6 text-center">
<span className="text-lg font-headline font-extrabold text-secondary">B+</span>
<p className="text-[10px] text-outline font-bold">88.7%</p>
</td>
<td className="px-6 py-6">
<div className="flex items-center gap-2">
<div className="w-24 h-2 bg-surface-container-high rounded-full overflow-hidden">
<div className="h-full bg-secondary rounded-full" style={{ width: `75%` }}/>
</div>
<span className="text-xs font-bold text-on-surface-variant">Steadily Rising</span>
</div>
</td>
<td className="px-6 py-6 text-right">
<button className="bg-surface-container-high text-primary px-4 py-2 rounded-md text-xs font-bold group-hover:bg-primary group-hover:text-white transition-all">
                                    View Subject
                                </button>
</td>
</tr>

<tr className="hover:bg-surface-container-low/30 transition-colors group">
<td className="px-6 py-6">
<div className="flex items-center gap-4">
<div className="w-10 h-10 rounded-md bg-tertiary/10 flex items-center justify-center text-tertiary">
<span className="material-symbols-outlined" data-icon="calculate">calculate</span>
</div>
<div>
<p className="font-headline font-bold text-on-surface">Calculus BC</p>
<p className="text-xs text-outline">MTH-501 &#x2022; Credits: 5.0</p>
</div>
</div>
</td>
<td className="px-6 py-6">
<div className="flex items-center gap-3">
<img className="w-8 h-8 rounded-full object-cover" data-alt="smiling female academic professional with short dark hair in a bright modern office workspace" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDhuD2l6NdnGdtpiu7RchiPxuUEEheKlqCW4r76XeJvnRDVoj6iIDNJNkGY6tpBXth8S1QsP0HvrfSUKs0QA041h993xSee8-DGwAe38fy8bUWxPcj71_bLkXnbgRRAxKoGIPCYMXDsnwJyotJHRHIVHpG21jg0n-5OC9RyNoZ0XGRRl4Wgub_CWm-TEDz64-1hPJeXkih2QgJ4nOrAGU1HiA9uIj7VG-M6tzZONMbIRpmI51gooonBfjvrHhnkYqCJ5XRFKr2uiQ"/>
<span className="text-sm font-medium text-on-surface-variant">Ms. Elena Rodriguez</span>
</div>
</td>
<td className="px-6 py-6 text-center">
<span className="text-lg font-headline font-extrabold text-tertiary">A+</span>
<p className="text-[10px] text-outline font-bold">98.2%</p>
</td>
<td className="px-6 py-6">
<div className="flex items-center gap-2">
<div className="w-24 h-2 bg-surface-container-high rounded-full overflow-hidden">
<div className="h-full bg-tertiary rounded-full" style={{ width: `98%` }}/>
</div>
<span className="text-xs font-bold text-on-surface-variant">Top Performer</span>
</div>
</td>
<td className="px-6 py-6 text-right">
<button className="bg-surface-container-high text-primary px-4 py-2 rounded-md text-xs font-bold group-hover:bg-primary group-hover:text-white transition-all">
                                    View Subject
                                </button>
</td>
</tr>

<tr className="hover:bg-surface-container-low/30 transition-colors group">
<td className="px-6 py-6">
<div className="flex items-center gap-4">
<div className="w-10 h-10 rounded-md bg-on-surface-variant/10 flex items-center justify-center text-on-surface-variant">
<span className="material-symbols-outlined" data-icon="auto_stories">auto_stories</span>
</div>
<div>
<p className="font-headline font-bold text-on-surface">English Literature</p>
<p className="text-xs text-outline">ENG-210 &#x2022; Credits: 3.0</p>
</div>
</div>
</td>
<td className="px-6 py-6">
<div className="flex items-center gap-3">
<img className="w-8 h-8 rounded-full object-cover" data-alt="friendly older male teacher with a white beard and glasses wearing a column blazer" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBvddi333f6XWV4JT0qZ10Ufxi6BRUCZWAGcIQ3RFc4KfVvuf3Vyq36o9qUTlr1-uIJPHLtOlYIa_FRS9o5XBL88aP6-EOckXcOYrmKCkn2vMBhc8ORk4ZqRRNC-5V35b6R8n3WxQMGsZc0PlZ3PVc32VFnJ_-tf46O_Bno07yC08B_bhhjJDJmP9Ozuz8k7yhUBdE58ZIesgFhQ4PbJYIKaeAMWm5Sqi4GwQHh1BkPXrbSkjPRTF_eq_EHV-MknYQj3Gnpo466Nw"/>
<span className="text-sm font-medium text-on-surface-variant">Dr. Robert Chen</span>
</div>
</td>
<td className="px-6 py-6 text-center">
<span className="text-lg font-headline font-extrabold text-on-surface">B</span>
<p className="text-[10px] text-outline font-bold">84.5%</p>
</td>
<td className="px-6 py-6">
<div className="flex items-center gap-2">
<div className="w-24 h-2 bg-surface-container-high rounded-full overflow-hidden">
<div className="h-full bg-outline rounded-full" style={{ width: `65%` }}/>
</div>
<span className="text-xs font-bold text-on-surface-variant">Consistent</span>
</div>
</td>
<td className="px-6 py-6 text-right">
<button className="bg-surface-container-high text-primary px-4 py-2 rounded-md text-xs font-bold group-hover:bg-primary group-hover:text-white transition-all">
                                    View Subject
                                </button>
</td>
</tr>
</tbody>
</table>
</div>

<div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
<div className="md:col-span-2 bg-primary-container text-on-primary-container p-8 rounded-lg relative overflow-hidden flex flex-col justify-between min-h-[240px]">
<div className="relative z-10">
<span className="material-symbols-outlined text-4xl mb-4" data-icon="auto_awesome">auto_awesome</span>
<h3 className="text-2xl font-headline font-extrabold leading-tight">Your semester performance is <br/>up by 12% from last year.</h3>
<p className="mt-2 text-primary-fixed opacity-90 text-sm max-w-md">Great job! You&apos;re showing significant improvement in STEM subjects. Your current GPA projection is 3.85.</p>
</div>
<div className="relative z-10 mt-6">
<button className="bg-white/20 backdrop-blur-md text-white px-6 py-3 rounded-md text-sm font-bold hover:bg-white/30 transition-all">
                            View Detailed Analysis
                        </button>
</div>

<div className="absolute -right-12 -bottom-12 w-64 h-64 bg-white/10 rounded-full blur-3xl"/>
</div>
<div className="bg-surface-container-low p-6 rounded-lg border-l-4 border-tertiary">
<h4 className="text-xs font-bold text-tertiary uppercase tracking-widest mb-4">Upcoming Subject Tasks</h4>
<ul className="space-y-4">
<li className="flex gap-4">
<div className="bg-white w-10 h-10 rounded flex-shrink-0 flex items-center justify-center text-tertiary shadow-sm">
<span className="material-symbols-outlined text-xl" data-icon="lab_profile">lab_profile</span>
</div>
<div>
<p className="text-xs font-bold text-on-surface">Physics Lab Report</p>
<p className="text-[10px] text-outline">Due in 2 days</p>
</div>
</li>
<li className="flex gap-4">
<div className="bg-white w-10 h-10 rounded flex-shrink-0 flex items-center justify-center text-secondary shadow-sm">
<span className="material-symbols-outlined text-xl" data-icon="history_edu">history_edu</span>
</div>
<div>
<p className="text-xs font-bold text-on-surface">Chem Quiz 4 Prep</p>
<p className="text-[10px] text-outline">Due tomorrow</p>
</div>
</li>
</ul>
</div>
</div>
</div>

    </MainLayout>
  );
}


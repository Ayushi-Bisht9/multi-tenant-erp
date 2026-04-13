import React from 'react';
import MainLayout from '../../layouts/MainLayout';
import { Card } from '../../components/ui/Card';
export default function Attendance() {
  return (
    <MainLayout title="Attendance">
      <div className="space-y-8 max-w-7xl mx-auto">
        <section className="flex flex-wrap items-center gap-4">
          <div className="flex-1 flex gap-4">
            <select className="bg-surface-container-low border-none rounded-md px-4 py-2.5 text-sm font-body outline-none">
              <option>Academic Year 2023-24</option>
            </select>
            <select className="bg-surface-container-low border-none rounded-md px-4 py-2.5 text-sm font-body outline-none">
              <option>All Subjects</option>
            </select>
          </div>
          <button className="bg-surface-container-high text-primary px-6 py-2.5 rounded-md font-body font-semibold text-sm hover:bg-blue-200 transition-colors">
            Apply Filters
          </button>
        </section>

        <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card elevated>
            <div className="flex justify-between items-start mb-4">
              <span className="p-2 bg-blue-50 text-primary rounded-lg">
                <span className="material-symbols-outlined">analytics</span>
              </span>
              <span className="text-xs font-bold text-green-600 bg-green-50 px-2 py-1 rounded-full">+2% vs last month</span>
            </div>
            <p className="text-on-surface-variant text-sm">Overall Attendance</p>
            <h2 className="text-4xl font-extrabold font-headline text-on-surface mt-1">96%</h2>
            <div className="w-full bg-surface-container rounded-full h-1.5 mt-4">
              <div className="bg-primary h-1.5 rounded-full" style={{ width: '96%' }}></div>
            </div>
          </Card>

          <div className="md:col-span-2 bg-gradient-primary p-6 rounded-xl text-white custom-shadow relative overflow-hidden">
            <div className="absolute -right-8 -top-8 w-32 h-32 bg-white/10 rounded-full blur-2xl"></div>
            <div className="relative z-10 space-y-4">
              <div className="flex items-center gap-2">
                <span className="material-symbols-outlined">auto_awesome</span>
                <h4 className="font-bold font-headline mt-0.5">Attendance Insight</h4>
              </div>
              <p className="text-sm font-body leading-relaxed opacity-90">
                You have maintained 96% attendance this semester. This is 5% higher than the class average. Keep this up to qualify for the <span className="font-bold">Excellent Academic Conduct</span> award.
              </p>
            </div>
          </div>
        </section>
      </div>
    </MainLayout>
  );
}

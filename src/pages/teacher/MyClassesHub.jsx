import React from 'react';
import { useNavigate } from "react-router-dom";
import MainLayout from "../../components/erp/teacher/MainLayout";
import Button from "../../components/erp/teacher/Button";
import Card from "../../components/erp/teacher/Card";
import Input from "../../components/erp/teacher/Input";
import Select from "../../components/erp/teacher/Select";

const mockClasses = [
  {
    id: 1,
    name: 'Mathematics 10-A',
    description: 'Core Mathematics & Algebra II',
    status: 'Active',
    statusColor: 'primary',
    icon: 'functions',
    students: 32,
    performance: '84%',
    performanceIcon: 'trending_up',
    performanceColor: 'tertiary',
  },
  {
    id: 2,
    name: 'Physics 11-B',
    description: 'Quantum Mechanics & Motion',
    status: 'Active',
    statusColor: 'secondary',
    icon: 'biotech',
    students: 28,
    performance: '79%',
    performanceIcon: 'trending_up',
    performanceColor: 'tertiary',
  },
  {
    id: 3,
    name: 'Modern History 12-C',
    description: 'World Wars and Cold War Era',
    status: 'Upcoming',
    statusColor: 'on-surface-variant',
    icon: 'history_edu',
    students: 35,
    performance: 'N/A',
    performanceIcon: 'horizontal_rule',
    performanceColor: 'slate-400',
  },
];

const MyClassesHub = () => {
  const navigate = useNavigate();
  return (
    <MainLayout title="My Classes">
      {/* Filter Section */}
      <section className="mb-10 flex flex-col md:flex-row gap-4 items-end justify-between">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 w-full md:w-2/3">
          <Input label="Search Directory" icon="search" placeholder="Search by name or code..." />
          <Select label="Subject" options={['All Subjects', 'Mathematics', 'Physics', 'Social Sciences']} />
          <Select label="Class/Section" options={['All Sections', '10-A', '11-B', '12-C']} />
        </div>
        <div className="flex gap-2">
          <Button variant="secondary">Reset</Button>
          <Button variant="primary">Apply Filters</Button>
        </div>
      </section>

      {/* Classes Bento Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {mockClasses.map((cls) => (
          <Card key={cls.id} hoverable>
            <div className="flex justify-between items-start mb-6">
              <div className={`bg-${cls.statusColor === 'primary' ? 'primary' : cls.statusColor === 'secondary' ? 'secondary' : 'tertiary'}/5 p-3 rounded-xl`}>
                <span className={`material-symbols-outlined text-${cls.statusColor === 'primary' ? 'primary' : cls.statusColor === 'secondary' ? 'secondary' : 'tertiary'} text-3xl`}>
                  {cls.icon}
                </span>
              </div>
              <div className={`glass-card px-3 py-1 rounded-full text-[10px] font-bold tracking-widest uppercase border border-${cls.statusColor}/20 text-${cls.statusColor}`}>
                {cls.status}
              </div>
            </div>
            
            <div className="mb-8">
              <h2 className="font-display text-xl font-bold text-on-surface mb-1">{cls.name}</h2>
              <p className="text-on-surface-variant text-sm font-medium">{cls.description}</p>
            </div>
            
            <div className="grid grid-cols-2 gap-4 mb-8">
              <div className="bg-surface-container-low p-4 rounded-md">
                <p className="text-[10px] uppercase font-bold text-outline tracking-wider mb-1">Students</p>
                <div className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-sm text-primary">groups</span>
                  <span className="text-lg font-bold font-display">{cls.students}</span>
                </div>
              </div>
              <div className="bg-surface-container-low p-4 rounded-md">
                <p className="text-[10px] uppercase font-bold text-outline tracking-wider mb-1">Avg. Performance</p>
                <div className="flex items-center gap-2">
                  <span className={`material-symbols-outlined text-sm text-${cls.performanceColor}`}>{cls.performanceIcon}</span>
                  <span className={`text-lg font-bold font-display text-${cls.performanceColor}`}>{cls.performance}</span>
                </div>
              </div>
            </div>
            
            <button
onClick={() => navigate(`/teacher/classes/${cls.id}/performance`)}
className="mt-auto flex items-center justify-center gap-2 w-full py-3 bg-surface-container-high text-primary font-bold rounded-md hover:bg-primary hover:text-white transition-all duration-200"
>

View Class Details

<span className="material-symbols-outlined text-sm">
arrow_forward
</span>

</button>
          </Card>
        ))}

        {/* AI Insight Card */}
        <Card className="md:col-span-2 lg:col-span-1" hoverable>
          <div className="flex justify-between items-start mb-6">
            <div className="bg-blue-600/5 p-3 rounded-xl">
              <span className="material-symbols-outlined text-blue-600 text-3xl">calculate</span>
            </div>
            <div className="bg-tertiary/10 px-3 py-1 rounded-full text-[10px] font-bold text-tertiary tracking-widest uppercase flex items-center gap-1">
              <span className="material-symbols-outlined text-[12px]" style={{ fontVariationSettings: "'FILL' 1" }}>auto_awesome</span>
              High Priority
            </div>
          </div>
          
          <div className="mb-8">
            <h2 className="font-display text-xl font-bold text-on-surface mb-1">Calculus AP</h2>
            <p className="text-on-surface-variant text-sm font-medium">Advanced Placement Mathematics</p>
          </div>
          
          <div className="grid grid-cols-2 gap-4 mb-8">
            <div className="bg-surface-container-low p-4 rounded-md">
              <p className="text-[10px] uppercase font-bold text-outline tracking-wider mb-1">Students</p>
              <div className="flex items-center gap-2">
                <span className="material-symbols-outlined text-sm text-primary">groups</span>
                <span className="text-lg font-bold font-display">22</span>
              </div>
            </div>
            <div className="bg-surface-container-low p-4 rounded-md">
              <p className="text-[10px] uppercase font-bold text-outline tracking-wider mb-1">Avg. Performance</p>
              <div className="flex items-center gap-2">
                <span className="material-symbols-outlined text-sm text-red-600">trending_down</span>
                <span className="text-lg font-bold font-display text-red-600">68%</span>
              </div>
            </div>
          </div>
          
          <div className="mb-6 p-3 bg-amber-50 text-amber-900 rounded-md flex items-center gap-3">
            <span className="material-symbols-outlined text-tertiary">psychology</span>
            <p className="text-xs font-medium">AI predicts a 12% drop in engagement for the next module.</p>
          </div>
          
          <button
onClick={() => navigate("/teacher/analytics")}
className="mt-auto flex items-center justify-center gap-2 w-full py-3 bg-gradient-to-br from-primary to-primary-container text-white font-bold rounded-md hover:opacity-90 transition-all duration-200 shadow-md"
>
Review AI Insights
<span className="material-symbols-outlined text-sm">arrow_forward</span>
</button>
        </Card>
      </div>
      
      {/* Empty State / Callout */}
      <div className="mt-16 flex flex-col items-center justify-center py-12 px-6 bg-surface-container-low rounded-xl border-2 border-dashed border-outline-variant/30 text-center">
        <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center text-outline-variant mb-4 shadow-sm">
          <span className="material-symbols-outlined text-3xl">add</span>
        </div>
        <h3 className="font-display text-lg font-bold mb-2">Assign New Class?</h3>
        <p className="text-on-surface-variant max-w-sm text-sm mb-6">Manage your teaching load or request additional sections for the upcoming semester.</p>
        <button className="bg-white border border-outline-variant text-on-surface font-semibold px-8 py-3 rounded-md hover:bg-surface-container-highest transition-all">
          Request Assignment
        </button>
      </div>
    </MainLayout>
  );
};

export default MyClassesHub;

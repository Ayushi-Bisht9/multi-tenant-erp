import React from 'react';
import { Link } from 'react-router-dom';
import MainLayout from "../../components/erp/teacher/MainLayout";
import Button from "../../components/erp/teacher/Button";
import Card from "../../components/erp/teacher/Card";
import Input from "../../components/erp/teacher/Input";
import Select from "../../components/erp/teacher/Select";

const CreateAssignmentPage = () => {
  return (
    <MainLayout title="Teacher Portal">
      {/* Breadcrumb & Title Section */}
      <div className="mb-8 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <Link
to="/teacher/assignments"
className="flex items-center gap-2 text-primary font-semibold text-sm mb-4 hover:-translate-x-1 transition-transform w-max"
>

<span className="material-symbols-outlined">
arrow_back
</span>

Back to Assignments

</Link>
          <h2 className="text-3xl font-bold font-display text-on-surface tracking-tight">Create Assignment</h2>
        </div>
        <div className="flex gap-3">
          <Button variant="secondary">Cancel</Button>
          <Button variant="secondary">Save Draft</Button>
          <Button variant="primary">Publish Assignment</Button>
        </div>
      </div>

      {/* Two Column Layout: Main Form & AI Assistant */}
      <div className="grid grid-cols-12 gap-8 mb-16">
        
        {/* Left Column: Assignment Details */}
        <div className="col-span-12 lg:col-span-8 space-y-8">
          
          {/* Section 1: Core Logistics */}
          <Card className="p-8 border-transparent" shadow="sm">
            <h3 className="text-xl font-display font-bold mb-6 flex items-center">
              <span className="material-symbols-outlined mr-2 text-primary">info</span>
              Assignment Details
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="md:col-span-1">
                <Select label="Class" options={['Grade 10', 'Grade 11', 'Grade 12']} />
              </div>
              <div className="md:col-span-1">
                <Select label="Section" options={['Section A', 'Section B', 'Section C']} />
              </div>
              <div className="md:col-span-1">
                <Select label="Subject" options={['Advanced Mathematics', 'Theoretical Physics', 'Organic Chemistry']} />
              </div>
              <div className="md:col-span-3">
                <Input label="Assignment Title" placeholder="e.g., Calculus Mid-Term Problem Set" />
              </div>
              <div className="md:col-span-3 space-y-2">
                <label className="text-xs font-bold text-on-surface-variant uppercase tracking-wider ml-1">Description</label>
                <textarea className="w-full bg-surface-container-low border-none rounded-md p-3 focus:ring-2 focus:ring-surface-tint focus:bg-surface-container-lowest transition-all outline-none" placeholder="Brief overview of the assignment objectives..." rows="3"></textarea>
              </div>
              <div className="md:col-span-3 space-y-2">
                <label className="text-xs font-bold text-on-surface-variant uppercase tracking-wider ml-1">Instructions</label>
                <textarea className="w-full bg-surface-container-low border-none rounded-md p-3 focus:ring-2 focus:ring-surface-tint focus:bg-surface-container-lowest transition-all outline-none" placeholder="Step-by-step instructions for students..." rows="4"></textarea>
              </div>
            </div>
          </Card>

          {/* Section 2: Submission & Files */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="p-8">
              <h3 className="text-xl font-display font-bold mb-6 flex items-center">
                <span className="material-symbols-outlined mr-2 text-primary">cloud_upload</span>
                Resources
              </h3>
              <div className="border-2 border-dashed border-outline-variant/30 rounded-xl p-8 flex flex-col items-center justify-center text-center hover:bg-surface-container-low transition-colors cursor-pointer group">
                <span className="material-symbols-outlined text-4xl text-outline mb-3 group-hover:text-primary transition-colors">upload_file</span>
                <p className="text-sm font-medium text-on-surface mb-1">Upload Reference Materials</p>
                <p className="text-xs text-on-surface-variant">PDF, DOCX, or JPG (Max 20MB)</p>
                <button className="mt-4 text-sm font-semibold text-primary">Browse Files</button>
              </div>
            </Card>

            <Card className="p-8">
              <h3 className="text-xl font-display font-bold mb-6 flex items-center">
                <span className="material-symbols-outlined mr-2 text-primary">event_available</span>
                Settings
              </h3>
              <div className="space-y-4">
                <Input label="Due Date" type="date" />
                <div className="grid grid-cols-2 gap-4">
                  <Input label="Max Marks" type="number" placeholder="100" />
                  <Select label="Grading Type" options={['Marks', 'Grade', 'Rubric']} />
                </div>
              </div>
            </Card>
          </div>
        </div>

        {/* Right Column: AI Panel */}
        <div className="col-span-12 lg:col-span-4 space-y-8">
          <div className="bg-surface-container-low rounded-xl p-8 border-l-4 border-tertiary shadow-sm relative overflow-hidden">
            <div className="absolute -top-12 -right-12 w-32 h-32 bg-tertiary/10 blur-3xl rounded-full"></div>
            <div className="flex items-center gap-3 mb-6">
              <div className="bg-tertiary text-white p-2 rounded-lg flex items-center justify-center">
                <span className="material-symbols-outlined block">auto_awesome</span>
              </div>
              <h3 className="text-xl font-display font-bold">AI Question Generator</h3>
            </div>
            <p className="text-sm text-on-surface-variant mb-6 leading-relaxed relative z-10">
              Leverage our advanced pedagogical AI to curate assessment questions based on your specific curriculum goals.
            </p>
            
            <div className="space-y-5 relative z-10">
              <div className="space-y-1.5">
                <label className="text-sm font-medium text-on-surface-variant">Topic or Keywords</label>
                <input className="w-full bg-surface-container-lowest border-none rounded-md p-3 shadow-sm focus:ring-2 focus:ring-tertiary/40 outline-none" placeholder="e.g., Vector Calculus, Newton's Laws" type="text" />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label className="text-sm font-medium text-on-surface-variant">Difficulty</label>
                  <select className="w-full bg-surface-container-lowest border-none rounded-md shadow-sm p-3 focus:ring-2 focus:ring-tertiary/40 outline-none">
                    <option>Easy</option>
                    <option>Medium</option>
                    <option>Hard</option>
                  </select>
                </div>
                <div className="space-y-1.5">
                  <label className="text-sm font-medium text-on-surface-variant">Type</label>
                  <select className="w-full bg-surface-container-lowest border-none rounded-md shadow-sm p-3 focus:ring-2 focus:ring-tertiary/40 outline-none">
                    <option>MCQ</option>
                    <option>Short Answer</option>
                    <option>Long Answer</option>
                  </select>
                </div>
              </div>
              <button className="w-full bg-tertiary hover:opacity-90 text-white py-3 rounded-md font-bold transition-all flex items-center justify-center gap-2">
                <span className="material-symbols-outlined text-sm">bolt</span>
                Generate Questions
              </button>
            </div>

            {/* AI Preview Canvas */}
            <div className="mt-8 pt-8 border-t border-outline-variant/20 relative z-10">
              <div className="flex items-center justify-between mb-4">
                <h4 className="text-xs font-bold uppercase tracking-widest text-on-surface-variant">Preview Output</h4>
                <span className="text-[10px] bg-orange-100 px-2 py-0.5 rounded text-amber-900 font-bold">2 Generated</span>
              </div>
              <div className="space-y-4">
                <div className="bg-white/60 p-4 rounded-lg border border-white backdrop-blur-sm">
                  <div className="flex justify-between items-start mb-2">
                    <span className="text-[10px] font-bold text-tertiary">Q1 • MCQ</span>
                    <button className="text-on-surface-variant hover:text-primary"><span className="material-symbols-outlined text-sm">add_circle</span></button>
                  </div>
                  <p className="text-xs text-on-surface font-medium leading-relaxed">Define the relationship between a line integral and a surface integral as per Stokes' Theorem.</p>
                </div>
                <div className="bg-white/60 p-4 rounded-lg border border-white backdrop-blur-sm opacity-60">
                  <div className="flex justify-between items-start mb-2">
                    <span className="text-[10px] font-bold text-tertiary">Q2 • SHORT</span>
                    <button className="text-on-surface-variant hover:text-primary"><span className="material-symbols-outlined text-sm">add_circle</span></button>
                  </div>
                  <p className="text-xs text-on-surface font-medium leading-relaxed">Calculate the flux of the vector field F through the upper hemisphere...</p>
                </div>
              </div>
              <button className="w-full mt-4 py-2 text-xs font-bold text-tertiary hover:underline">View All Suggestions</button>
            </div>
          </div>
          
          {/* Guidance Note */}
          <div className="bg-blue-50 p-6 rounded-xl">
            <div className="flex gap-3">
              <span className="material-symbols-outlined text-primary">lightbulb</span>
              <div>
                <p className="text-sm font-bold text-primary-fixed-variant mb-1">Teacher Pro Tip</p>
                <p className="text-xs text-blue-900/70 leading-relaxed">You can link this assignment to the 'End of Term' Exam to automatically aggregate scores for final reports.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default CreateAssignmentPage;

import React from 'react';
import { Link } from 'react-router-dom';
import MainLayout from "../../components/erp/teacher/MainLayout";

const AIToolWorkspaceLessonPlan = () => {
  return (
    <MainLayout title="Lesson Plan Generator">
      {/* We overwrite title above by ignoring it and building custom header inside MainLayout or just building header below if we wanted, but MainLayout handles TopAppBar for this app structure. So we just build the content body. */}
      
      <div className="max-w-7xl mx-auto w-full px-0 sm:px-4 md:px-8">
        
        {/* Back Button & Breadcrumb */}
        <div className="mb-6 flex items-center justify-between">
          <Link
to="/teacher/ai-tools"
className="flex items-center gap-2 text-primary font-semibold text-sm mb-6 hover:-translate-x-1 transition-transform w-max"
>

<span className="material-symbols-outlined">
arrow_back
</span>

Back to AI Tools

</Link>
          <span className="bg-[#ffdcc6] text-[#311400] px-3 py-1 rounded-full text-xs font-bold flex items-center gap-1">
            <span className="material-symbols-outlined text-sm">psychology</span>
            AI POWERED
          </span>
        </div>

        {/* Header Section */}
        <div className="mb-8 pl-3 md:pl-0">
          <h2 className="text-3xl font-extrabold font-display tracking-tight text-on-surface mb-2">Lesson Plan Generator</h2>
          <p className="text-on-surface-variant font-medium">Design comprehensive, curriculum-aligned lesson plans in seconds with AI-driven insights.</p>
        </div>

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-12">
          
          {/* Input Configuration Column */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            
            {/* Main Form Card */}
            <div className="bg-surface-container-lowest p-6 rounded-lg shadow-sm border border-outline-variant/10">
              <h3 className="text-lg font-bold font-display mb-4 flex items-center gap-2 text-on-surface">
                <span className="material-symbols-outlined text-primary">tune</span>
                Configuration
              </h3>
              <form className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="flex flex-col gap-1.5">
                    <label className="text-xs font-bold text-on-surface-variant px-1 uppercase tracking-wider">Subject</label>
                    <select className="bg-surface-container-low border-none rounded-md py-3 px-4 text-sm focus:ring-2 focus:ring-primary/40 outline-none cursor-pointer">
                      <option>General Science</option>
                      <option>Physics</option>
                      <option>Biology</option>
                      <option>Chemistry</option>
                    </select>
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <label className="text-xs font-bold text-on-surface-variant px-1 uppercase tracking-wider">Class</label>
                    <select className="bg-surface-container-low border-none rounded-md py-3 px-4 text-sm focus:ring-2 focus:ring-primary/40 outline-none cursor-pointer">
                      <option>Grade 9-A</option>
                      <option>Grade 9-B</option>
                      <option>Grade 10-C</option>
                    </select>
                  </div>
                </div>
                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-bold text-on-surface-variant px-1 uppercase tracking-wider">Topic</label>
                  <input className="bg-surface-container-low border-none rounded-md py-3 px-4 text-sm focus:ring-2 focus:ring-primary/40 outline-none" placeholder="e.g., Photosynthesis and Respiration" type="text" />
                </div>
                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-bold text-on-surface-variant px-1 uppercase tracking-wider">Brief Description</label>
                  <textarea className="bg-surface-container-low border-none rounded-md py-3 px-4 text-sm focus:ring-2 focus:ring-primary/40 outline-none resize-none" placeholder="Specific focus areas, context, or student needs..." rows="3"></textarea>
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                  <div className="flex flex-col gap-1.5">
                    <label className="text-xs font-bold text-on-surface-variant px-1 uppercase tracking-wider">Difficulty</label>
                    <select className="bg-surface-container-low border-none rounded-md py-3 px-4 text-sm focus:ring-2 focus:ring-primary/40 outline-none cursor-pointer">
                      <option>Intermediate</option>
                      <option>Foundational</option>
                      <option>Advanced</option>
                    </select>
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <label className="text-xs font-bold text-on-surface-variant px-1 uppercase tracking-wider">Language</label>
                    <select className="bg-surface-container-low border-none rounded-md py-3 px-4 text-sm focus:ring-2 focus:ring-primary/40 outline-none cursor-pointer">
                      <option>English</option>
                      <option>Spanish</option>
                      <option>French</option>
                    </select>
                  </div>
                </div>
                
                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-bold text-on-surface-variant px-1 uppercase tracking-wider">Content Type</label>
                  <div className="flex gap-2 flex-wrap sm:flex-nowrap">
                    <button className="flex-1 py-2 px-3 rounded-md bg-primary text-white text-xs font-bold outline-none border-none cursor-pointer whitespace-nowrap min-w-[100px]" type="button">Comprehensive</button>
                    <button className="flex-1 py-2 px-3 rounded-md bg-surface-container-high text-primary text-xs font-bold outline-none border-none cursor-pointer whitespace-nowrap min-w-[100px]" type="button">Visual Aids</button>
                    <button className="flex-1 py-2 px-3 rounded-md bg-surface-container-high text-primary text-xs font-bold outline-none border-none cursor-pointer whitespace-nowrap min-w-[100px]" type="button">Quiz Based</button>
                  </div>
                </div>
                
                <div className="pt-4 space-y-4 border-t border-outline-variant/15">
                  <h4 className="text-xs font-black text-primary uppercase">Advanced Options</h4>
                  <div className="flex flex-col gap-3">
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium text-on-surface">Learning Objectives</span>
                      <input defaultChecked className="rounded text-primary focus:ring-primary h-4 w-4 outline-none cursor-pointer" type="checkbox" />
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium text-on-surface">Quiz Questions</span>
                      <div className="flex items-center gap-2">
                        <button className="w-8 h-8 flex items-center justify-center bg-surface-container-high hover:bg-surface-container-highest transition-colors rounded-md border-none outline-none cursor-pointer text-on-surface font-bold" type="button">-</button>
                        <span className="w-6 text-center text-sm font-bold text-on-surface">5</span>
                        <button className="w-8 h-8 flex items-center justify-center bg-surface-container-high hover:bg-surface-container-highest transition-colors rounded-md border-none outline-none cursor-pointer text-on-surface font-bold" type="button">+</button>
                      </div>
                    </div>
                    <div className="flex flex-col gap-1.5">
                      <label className="text-xs font-medium text-on-surface">Session Duration (min)</label>
                      <input className="w-full accent-primary outline-none cursor-pointer" type="range" min="30" max="90" step="15" defaultValue="45" />
                      <div className="flex justify-between text-[10px] text-on-surface-variant font-bold">
                        <span>30m</span>
                        <span>60m</span>
                        <span>90m</span>
                      </div>
                    </div>
                  </div>
                </div>
                
                <button className="w-full py-4 bg-gradient-to-br from-primary to-primary-container text-white rounded-md font-bold text-lg shadow-lg flex items-center justify-center gap-2 mt-4 hover:scale-[0.98] transition-all outline-none border-none cursor-pointer" type="button">
                  <span className="material-symbols-outlined">auto_awesome</span>
                  Generate Content
                </button>
              </form>
            </div>

            {/* AI Suggestion Panel */}
            <div className="bg-[#ffdcc6]/30 p-5 rounded-lg border-l-4 border-[#924700]">
              <h4 className="text-sm font-bold text-[#924700] flex items-center gap-2 mb-2">
                <span className="material-symbols-outlined">lightbulb</span>
                Intelligent Tip
              </h4>
              <p className="text-sm text-[#723600] leading-relaxed">
                For <span className="font-bold text-[#924700]">Grade 9</span> Biology, adding a "Practical Observation" section typically increases student engagement by <span className="font-bold">24%</span> based on department analytics.
              </p>
            </div>

          </div>

          {/* Output & Preview Column */}
          <div className="lg:col-span-7 flex flex-col gap-6">
            
            {/* Preview Panel */}
            <div className="bg-surface-container-lowest rounded-lg shadow-sm overflow-hidden flex flex-col h-full min-h-[600px] border border-outline-variant/10">
              <div className="bg-surface-container-high p-4 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-primary block">description</span>
                  <span className="font-bold font-display text-on-surface">Lesson Preview</span>
                </div>
                <div className="flex gap-2">
                  <button className="bg-white/80 p-2 rounded-md hover:bg-white transition-colors border-none outline-none cursor-pointer shadow-sm">
                    <span className="material-symbols-outlined text-on-surface-variant text-sm block">edit</span>
                  </button>
                  <button className="bg-white/80 p-2 rounded-md hover:bg-white transition-colors border-none outline-none cursor-pointer shadow-sm">
                    <span className="material-symbols-outlined text-on-surface-variant text-sm block">fullscreen</span>
                  </button>
                </div>
              </div>
              
              <div className="p-8 flex-1 overflow-y-auto">
                <div className="max-w-2xl mx-auto space-y-8">
                  
                  <header className="text-center pb-8 border-b border-outline-variant/15">
                    <h1 className="text-4xl font-extrabold font-display mb-4 text-on-surface tracking-tight">Photosynthesis: The Engine of Life</h1>
                    <div className="flex justify-center gap-6 text-sm text-on-surface-variant flex-wrap">
                      <span className="flex items-center gap-1 font-medium"><span className="material-symbols-outlined text-base">timer</span> 45 mins</span>
                      <span className="flex items-center gap-1 font-medium"><span className="material-symbols-outlined text-base">group</span> Grade 9</span>
                      <span className="flex items-center gap-1 font-medium"><span className="material-symbols-outlined text-base">star</span> Intermediate</span>
                    </div>
                  </header>

                  <section className="space-y-4">
                    <div className="flex items-center justify-between group">
                      <h2 className="text-xl font-bold font-display text-primary">1. Learning Objectives</h2>
                      <div className="flex gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                        <button className="text-red-500 hover:text-red-700 hover:bg-red-50 p-1 rounded transition-colors outline-none border-none bg-transparent cursor-pointer">
                          <span className="material-symbols-outlined text-sm block">delete</span>
                        </button>
                      </div>
                    </div>
                    <ul className="space-y-2 list-disc pl-5 text-on-surface-variant font-medium">
                      <li>Define photosynthesis and identify its essential reactants and products.</li>
                      <li>Analyze the role of chlorophyll in capturing solar energy.</li>
                      <li>Contrast the light-dependent and light-independent reactions.</li>
                    </ul>
                  </section>

                  <section className="space-y-4">
                    <div className="flex items-center justify-between group">
                      <h2 className="text-xl font-bold font-display text-primary">2. Conceptual Framework</h2>
                      <div className="flex gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                        <button className="text-red-500 hover:text-red-700 hover:bg-red-50 p-1 rounded transition-colors outline-none border-none bg-transparent cursor-pointer">
                          <span className="material-symbols-outlined text-sm block">delete</span>
                        </button>
                      </div>
                    </div>
                    <div className="p-5 bg-surface-container-low rounded-xl">
                      <p className="text-on-surface font-medium leading-relaxed italic">
                        "How do plants eat light?" Start with this provocative question to bridge the gap between abstract chemical equations and real-world biological processes.
                      </p>
                    </div>
                    <p className="text-on-surface-variant leading-relaxed">
                      Photosynthesis is the process by which green plants and some other organisms use sunlight to synthesize foods with the help of chlorophyll. It primarily involves the conversion of light energy into chemical energy stored in glucose molecules.
                    </p>
                  </section>

                  <section className="space-y-4">
                    <div className="flex items-center justify-between group">
                      <h2 className="text-xl font-bold font-display text-primary">3. Formative Assessment</h2>
                      <div className="flex gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                        <button className="text-red-500 hover:text-red-700 hover:bg-red-50 p-1 rounded transition-colors outline-none border-none bg-transparent cursor-pointer">
                          <span className="material-symbols-outlined text-sm block">delete</span>
                        </button>
                      </div>
                    </div>
                    <div className="space-y-3">
                      <div className="p-4 border-l-4 border-primary-container bg-surface-container-low/50 rounded-r-lg">
                        <p className="text-sm font-bold mb-1 text-on-surface">Q1: Which organelle is the site of photosynthesis?</p>
                        <p className="text-xs text-on-surface-variant mt-2 font-medium">A) Mitochondria B) Chloroplast C) Ribosome</p>
                      </div>
                    </div>
                    <button className="w-full py-3 border-2 border-dashed border-outline-variant/60 rounded-xl text-on-surface-variant text-sm font-bold flex items-center justify-center gap-2 hover:border-primary hover:text-primary transition-all bg-transparent cursor-pointer outline-none">
                      <span className="material-symbols-outlined block">add_circle</span>
                      Add New Section
                    </button>
                  </section>

                </div>
              </div>

              {/* Action Bar */}
              <div className="p-6 bg-surface-container-lowest border-t border-outline-variant/10 grid grid-cols-2 md:grid-cols-4 gap-3">
                <button className="flex items-center justify-center gap-2 py-3 px-4 bg-primary text-white rounded-md font-bold text-sm shadow-sm hover:opacity-90 transition-opacity border-none cursor-pointer outline-none w-full">
                  <span className="material-symbols-outlined text-lg block" style={{fontVariationSettings: "'FILL' 1"}}>save</span>
                  Save
                </button>
                <button className="flex items-center justify-center gap-2 py-3 px-4 bg-surface-container-high hover:bg-surface-container-highest text-primary rounded-md font-bold text-sm transition-colors border-none cursor-pointer outline-none w-full">
                  <span className="material-symbols-outlined text-lg block">download</span>
                  Export
                </button>
                <button className="flex items-center justify-center gap-2 py-3 px-4 bg-surface-container-high hover:bg-surface-container-highest text-primary rounded-md font-bold text-sm transition-colors border-none cursor-pointer outline-none w-full">
                  <span className="material-symbols-outlined text-lg block">share</span>
                  Share
                </button>
                <button className="flex items-center justify-center gap-2 py-3 px-4 bg-[#6b38d4] hover:bg-[#8455ef] text-white rounded-md font-bold text-sm transition-colors shadow-sm border-none cursor-pointer outline-none w-full">
                  <span className="material-symbols-outlined text-lg block">assignment_add</span>
                  Assign
                </button>
              </div>

            </div>
          </div>
        </div>

      </div>
    </MainLayout>
  );
};

export default AIToolWorkspaceLessonPlan;

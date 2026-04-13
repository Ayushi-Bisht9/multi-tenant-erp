import React from 'react';
import Sidebar from "./Sidebar";
import TopAppBar from "./TopAppBar";
import MobileNav from "./MobileNav";
const MainLayout = ({ children, title }) => {
  return (
    <div className="bg-surface font-body text-on-surface antialiased min-h-screen">
      <Sidebar />
      <main className="md:ml-72 min-h-screen flex flex-col pb-20 md:pb-0">
        <TopAppBar title={title} />
        <div className="p-4 md:p-8 max-w-7xl mx-auto w-full flex-grow">
          {children}
        </div>
      </main>
      
      <MobileNav />
    </div>
  );
};

export default MainLayout;

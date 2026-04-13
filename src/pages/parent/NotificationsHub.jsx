import React from "react";
import { useNavigate } from "react-router-dom";
import DashboardLayout from "../../components/erp/parent/DashboardLayout";

const NotificationsHub = () => {
  const navigate = useNavigate();

  return (
    <DashboardLayout>
      <div className="p-8 max-w-5xl mx-auto w-full">

        {/* HEADER */}
        <div className="flex justify-between items-end mb-10">
          <div>
            <h1 className="text-4xl font-extrabold mb-2 text-gray-900">
              Notifications
            </h1>

            <p className="text-gray-500">
              Stay updated with your child's latest academic progress and school alerts.
            </p>
          </div>

          <button
            onClick={() => navigate(-1)}
            className="flex items-center gap-2 px-4 py-2 text-blue-600 font-semibold hover:bg-blue-50 rounded-md transition"
          >
            <span className="material-symbols-outlined">
              arrow_back
            </span>

            Go Back
          </button>
        </div>


        {/* FILTER BAR */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 mb-8">

          <div className="flex bg-gray-100 p-1 rounded-xl">

            <button className="px-6 py-2 rounded-lg bg-white shadow-sm text-blue-600 font-semibold text-sm">
              All
            </button>

            <button className="px-6 py-2 rounded-lg text-gray-500 hover:text-gray-800 text-sm font-medium">
              Academic
            </button>

            <button className="px-6 py-2 rounded-lg text-gray-500 hover:text-gray-800 text-sm font-medium">
              Attendance
            </button>

            <button className="px-6 py-2 rounded-lg text-gray-500 hover:text-gray-800 text-sm font-medium">
              System
            </button>

          </div>


          <button className="px-5 py-2.5 bg-blue-50 text-blue-600 font-semibold rounded-md flex items-center gap-2 hover:bg-blue-100 transition">

            <span className="material-symbols-outlined">
              done_all
            </span>

            Mark all as read

          </button>

        </div>


        {/* NOTIFICATION LIST */}
        <div className="space-y-6">


          {/* AI INSIGHT */}
          <div className="relative bg-white rounded-xl p-6 flex gap-5 items-start border-l-4 border-orange-400 shadow-sm hover:translate-x-1 transition">

            <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center">

              <span className="material-symbols-outlined text-orange-600">
                psychology
              </span>

            </div>


            <div className="flex-1">

              <div className="flex justify-between mb-1">

                <h3 className="font-bold text-lg text-gray-900">
                  AI Insight generated
                </h3>

                <span className="text-xs text-gray-400 font-medium uppercase">
                  2m ago
                </span>

              </div>


              <p className="text-gray-500 mb-3">
                Based on recent math quizzes, Ethan shows a 15% improvement in spatial reasoning. We've updated his learning path.
              </p>


              <button className="text-sm font-semibold text-orange-600 hover:underline">
                View Analysis
              </button>

            </div>


            <div className="absolute top-6 right-6 w-2 h-2 bg-orange-500 rounded-full"></div>

          </div>



          {/* ASSIGNMENT */}
          <div className="relative bg-white rounded-xl p-6 flex gap-5 items-start shadow-sm hover:translate-x-1 transition">

            <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">

              <span className="material-symbols-outlined text-blue-600">
                assignment
              </span>

            </div>


            <div className="flex-1">

              <div className="flex justify-between mb-1">

                <h3 className="font-bold text-lg text-gray-900">
                  New Assignment Posted
                </h3>

                <span className="text-xs text-gray-400 uppercase font-medium">
                  1h ago
                </span>

              </div>


              <p className="text-gray-500 mb-3">
                Biology: "Micro-ecosystems Project" is now available for submission. Due date: Oct 24th.
              </p>


              <button className="text-sm font-semibold text-blue-600 hover:underline">
                Open Assignment
              </button>

            </div>


            <div className="absolute top-6 right-6 w-2 h-2 bg-blue-600 rounded-full"></div>

          </div>



          {/* GRADE */}
          <div className="bg-white rounded-xl p-6 flex gap-5 items-start shadow-sm hover:translate-x-1 transition">

            <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center">

              <span className="material-symbols-outlined text-purple-600">
                assessment
              </span>

            </div>


            <div className="flex-1">

              <div className="flex justify-between mb-1">

                <h3 className="font-bold text-lg text-gray-900">
                  Grade Published
                </h3>

                <span className="text-xs text-gray-400 uppercase font-medium">
                  4h ago
                </span>

              </div>


              <p className="text-gray-500 mb-3">
                Final marks for the Mid-term History Exam have been released. Ethan achieved an A-.
              </p>


              <button className="text-sm font-semibold text-blue-600 hover:underline">
                View Report Card
              </button>

            </div>

          </div>



          {/* ATTENDANCE ALERT */}
          <div className="relative bg-red-50 rounded-xl p-6 flex gap-5 items-start border-l-4 border-red-400 shadow-sm hover:translate-x-1 transition">

            <div className="w-12 h-12 bg-red-100 rounded-xl flex items-center justify-center">

              <span className="material-symbols-outlined text-red-600">
                calendar_today
              </span>

            </div>


            <div className="flex-1">

              <div className="flex justify-between mb-1">

                <h3 className="font-bold text-lg text-gray-900">
                  Attendance Alert
                </h3>

                <span className="text-xs text-gray-400 uppercase font-medium">
                  yesterday
                </span>

              </div>


              <p className="text-gray-600">
                Ethan was marked absent for the afternoon Physics session without prior notification.
              </p>

            </div>


            <div className="absolute top-6 right-6 w-2 h-2 bg-red-500 rounded-full"></div>

          </div>



          {/* REMARK */}
          <div className="bg-white rounded-xl p-6 flex gap-5 items-start shadow-sm hover:translate-x-1 transition">

            <div className="w-12 h-12 bg-gray-100 rounded-xl flex items-center justify-center">

              <span className="material-symbols-outlined text-gray-600">
                forum
              </span>

            </div>


            <div className="flex-1">

              <div className="flex justify-between mb-1">

                <h3 className="font-bold text-lg text-gray-900">
                  Teacher Remark added
                </h3>

                <span className="text-xs text-gray-400 uppercase font-medium">
                  yesterday
                </span>

              </div>


              <p className="text-gray-500 mb-3">
                Mrs. Gable left a comment on the English Literature essay: "Excellent use of metaphor in the opening paragraph."
              </p>


              <button className="text-sm font-semibold text-blue-600 hover:underline">
                Read Full Remark
              </button>

            </div>

          </div>


        </div>



        {/* LOAD MORE */}
        <div className="pt-8 pb-20 flex justify-center">

          <button className="bg-blue-600 text-white px-8 py-3 rounded-md font-semibold shadow hover:shadow-lg transition active:scale-95">

            Load previous notifications

          </button>

        </div>

      </div>
    </DashboardLayout>
  );
};

export default NotificationsHub;
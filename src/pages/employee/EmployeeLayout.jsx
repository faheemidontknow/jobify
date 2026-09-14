// pages/employee/EmployeeLayout.jsx

import React from "react";
import { Outlet, NavLink } from "react-router";

import {
  BriefcaseBusiness,
  LayoutDashboard,
  Search,
  ClipboardList,
  Heart,
  Star,
  CalendarDays,
  MessageSquare,
  UserRound,
  FileText,
  Settings,
  LogOut,
} from "lucide-react";

const EmployeeLayout = () => {
  const sidebarItems = [
    {
      name: "Dashboard",
      icon: <LayoutDashboard size={18} />,
      path: "/employee",
    },
    {
      name: "Find Jobs",
      icon: <Search size={18} />,
      path: "/employee/find-jobs",
    },
    {
      name: "My Applications",
      icon: <ClipboardList size={18} />,
      path: "/employee/my-applications",
      count: 8,
    },
    {
      name: "Saved Jobs",
      icon: <Heart size={18} />,
      path: "/employee/saved-jobs",
      count: 5,
    },
    {
      name: "Recommended",
      icon: <Star size={18} />,
      path: "/employee/recommended",
    },
    {
      name: "Interviews",
      icon: <CalendarDays size={18} />,
      path: "/employee/interviews",
      count: 2,
    },
    {
      name: "Messages",
      icon: <MessageSquare size={18} />,
      path: "/employee/messages",
      count: 3,
    },
    {
      name: "Profile",
      icon: <UserRound size={18} />,
      path: "/employee/profile",
    },
    {
      name: "Resume",
      icon: <FileText size={18} />,
      path: "/employee/resume",
    },
    {
      name: "Settings",
      icon: <Settings size={18} />,
      path: "/employee/settings",
    },
  ];

  return (
    <div className="min-h-screen bg-[#f8f8fc] flex">
      {/* SIDEBAR */}

      <aside className="w-64 bg-white border-r p-4 hidden lg:flex flex-col">
        <div className="flex items-center gap-2 mb-8">
          <BriefcaseBusiness size={30} className="text-purple-600" />

          <h1 className="text-2xl font-bold">Jobify</h1>
        </div>

        <nav className="flex flex-col gap-2">
          {sidebarItems.map((item, index) => (
            <NavLink
              key={index}
              to={item.path}
              end={item.path === "/employee"}
              className={({ isActive }) =>
                `flex items-center justify-between px-3 py-3 rounded-lg transition ${
                  isActive
                    ? "bg-purple-100 text-purple-700"
                    : "hover:bg-gray-100"
                }`
              }
            >
              <div className="flex items-center gap-3">
                {item.icon}

                <span className="text-sm">{item.name}</span>
              </div>

              {item.count && (
                <span className="text-xs bg-purple-100 text-purple-700 px-2 py-1 rounded-full">
                  {item.count}
                </span>
              )}
            </NavLink>
          ))}
        </nav>

        <div className="mt-auto">
          <div className="border rounded-xl p-4">
            <p className="font-semibold text-sm">Complete your profile</p>

            <p className="text-xs text-gray-500 mt-1">
              Increase your chances of getting hired
            </p>

            <div className="w-full h-2 bg-gray-200 rounded-full mt-4">
              <div className="w-3/4 h-full bg-purple-600 rounded-full" />
            </div>

            <p className="text-xs text-right mt-1">75%</p>

            <button className="w-full border border-purple-600 text-purple-600 py-2 rounded-lg mt-2">
              Complete Profile
            </button>
          </div>

          <div className="flex items-center gap-2 text-red-500 mt-6">
            <LogOut size={18} />
            <span>Logout</span>
          </div>
        </div>
      </aside>

      {/* PAGE CONTENT */}

      <main className="flex-1 p-4 md:p-7">
        <Outlet />
      </main>
    </div>
  );
};

export default EmployeeLayout;

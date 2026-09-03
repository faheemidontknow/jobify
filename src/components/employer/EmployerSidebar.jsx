import {
  LayoutDashboard,
  BriefcaseBusiness,
  PlusSquare,
  Users,
  CalendarDays,
  Building2,
  MessageSquare,
  BarChart3,
  UserCircle,
  Settings,
  LogOut,
} from "lucide-react";

import { Link, useLocation } from "react-router-dom";

const menuItems = [
  {
    name: "Dashboard",
    path: "/employer/dashboard",
    icon: LayoutDashboard,
  },
  {
    name: "My Jobs",
    path: "/employer/jobs",
    icon: BriefcaseBusiness,
  },
  {
    name: "Post New Job",
    path: "/employer/post-job",
    icon: PlusSquare,
  },
  {
    name: "Applicants",
    path: "/employer/applicants",
    icon: Users,
  },
  {
    name: "Interviews",
    path: "/employer/interviews",
    icon: CalendarDays,
  },
  {
    name: "Companies",
    path: "/employer/companies",
    icon: Building2,
  },
  {
    name: "Messages",
    path: "/employer/messages",
    icon: MessageSquare,
  },
  {
    name: "Analytics",
    path: "/employer/analytics",
    icon: BarChart3,
  },
  {
    name: "Profile",
    path: "/employer/profile",
    icon: UserCircle,
  },
  {
    name: "Settings",
    path: "/employer/settings",
    icon: Settings,
  },
];

export default function EmployerSidebar() {
  const location = useLocation();

  return (
    <aside className="fixed left-0 top-0 flex h-screen w-64 flex-col border-r border-slate-200 bg-white">
      {/* Logo */}
      <div className="flex h-20 items-center gap-3 border-b border-slate-100 px-6">
        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#5146e5] text-white">
          <BriefcaseBusiness size={22} />
        </div>

        <span className="text-2xl font-bold text-slate-900">Jobify</span>
      </div>

      {/* Navigation */}
      <nav className="flex-1 space-y-1 px-4 py-6">
        {menuItems.map((item) => {
          const Icon = item.icon;

          const active = location.pathname === item.path;

          return (
            <Link
              key={item.name}
              to={item.path}
              className={`flex items-center gap-3 rounded-xl px-4 py-3 text-sm font-medium transition ${
                active
                  ? "bg-[#f0efff] text-[#5146e5]"
                  : "text-slate-600 hover:bg-slate-50 hover:text-slate-900"
              }`}
            >
              <Icon size={19} />

              <span>{item.name}</span>
            </Link>
          );
        })}
      </nav>

      {/* Company */}
      <div className="border-t border-slate-100 p-4">
        <div className="rounded-xl border border-slate-200 p-3">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#5146e5] font-semibold text-white">
              AC
            </div>

            <div className="min-w-0">
              <p className="truncate text-sm font-semibold text-slate-900">
                ABC Technologies
              </p>

              <p className="text-xs text-slate-500">Employer</p>
            </div>
          </div>

          <Link
            to="/employer/profile"
            className="mt-3 block rounded-lg border border-[#5146e5] py-2 text-center text-xs font-semibold text-[#5146e5]"
          >
            View Company Profile
          </Link>
        </div>

        <button className="mt-4 flex w-full items-center gap-3 px-3 py-2 text-sm font-medium text-red-500">
          <LogOut size={19} />
          Logout
        </button>
      </div>
    </aside>
  );
}

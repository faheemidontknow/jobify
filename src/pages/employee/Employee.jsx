import { useState } from "react";
import {
  LayoutDashboard,
  Search,
  BriefcaseBusiness,
  Bookmark,
  Star,
  Video,
  MessageSquare,
  User,
  Settings,
  Bell,
  Menu,
  X,
  Plus,
  FileText,
  UserRound,
  ChevronRight,
  Clock3,
  Eye,
} from "lucide-react";

const recommendedJobs = [
  {
    id: 1,
    title: "Frontend Developer",
    company: "ABC Technologies",
    location: "Lagos, Nigeria",
    type: "Full Time",
    logo: "AG",
    logoStyle: "bg-blue-100 text-blue-700",
  },
  {
    id: 2,
    title: "UI/UX Designer",
    company: "Innovatech Ltd.",
    location: "Abuja, Nigeria",
    type: "Full Time",
    logo: "G",
    logoStyle: "bg-gray-100 text-gray-700",
  },
  {
    id: 3,
    title: "Backend Developer",
    company: "ByteWorks",
    location: "Lagos, Nigeria",
    type: "Full Time",
    logo: "Y",
    logoStyle: "bg-green-100 text-green-600",
  },
];

const recentJobs = [
  {
    id: 1,
    title: "Product Designer",
    company: "DesignHub",
    location: "Remote",
    type: "Full Time",
    time: "2h ago",
    logo: "D",
    logoStyle: "bg-purple-100 text-purple-600",
  },
  {
    id: 2,
    title: "Mobile App Developer",
    company: "TechSolutions",
    location: "Lagos, Nigeria",
    type: "Full Time",
    time: "5h ago",
    logo: "M",
    logoStyle: "bg-blue-100 text-blue-600",
  },
  {
    id: 3,
    title: "Frontend Developer",
    company: "ABC Technologies",
    location: "Abuja, Nigeria",
    type: "Full Time",
    time: "1d ago",
    logo: "AG",
    logoStyle: "bg-blue-100 text-blue-700",
  },
];

function Dashboard() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#f8faff] text-[#111827]">
      {/* =====================================================
          MAIN
      ===================================================== */}

      <main className="">
        {/* ===================================================
            HEADER
        =================================================== */}

        <header className="flex  items-center border-b border-[#e5e7eb] bg-white px-4 md:px-8">
          {/* Mobile menu */}
          <button
            onClick={() => setSidebarOpen(true)}
            className="mr-3 rounded-lg p-2 text-gray-500 hover:bg-gray-50 md:hidden"
          >
            <Menu size={20} />
          </button>

          {/* Search */}
          <div className="relative hidden w-97.5 md:block">
            <Search
              size={15}
              className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
            />

            <input
              placeholder="Search for jobs, companies..."
              className="
                h-9 w-full
                rounded-lg
                border border-[#e5e7eb]
                bg-white
                pl-9 pr-4
                text-[11px]
                outline-none
                focus:border-[#4935ff]
              "
            />
          </div>

          {/* Header right */}
          <div className="ml-auto flex items-center gap-4">
            <button className="relative rounded-lg p-2 text-gray-500">
              <Bell size={18} />

              <span className="absolute right-1 top-1 h-2 w-2 rounded-full bg-red-500" />
            </button>

            <div className="flex items-center gap-2">
              <img
                src="https://i.pravatar.cc/100?img=12"
                alt="John Doe"
                className="h-8 w-8 rounded-full object-cover"
              />

              <div className="hidden leading-tight sm:block">
                <p className="text-[11px] font-semibold text-gray-800">
                  John Doe
                </p>

                <p className="text-[9px] text-gray-400">Job Seeker</p>
              </div>

              <span className="hidden text-[12px] text-gray-400 sm:block">
                ⌄
              </span>
            </div>
          </div>
        </header>

        {/* ===================================================
            DASHBOARD CONTENT
        =================================================== */}

        <section className="px-4 py-6 md:px-7 md:py-7">
          {/* Welcome */}
          <div className="mb-5">
            <h1 className="text-[21px] font-bold tracking-tight text-[#17172c]">
              Welcome back, John! 👋
            </h1>

            <p className="mt-1 text-[11px] text-gray-400">
              Here's your job search summary and latest opportunities.
            </p>
          </div>

          {/* =================================================
              STAT CARDS
          ================================================= */}

          <div className="mb-5 grid grid-cols-2 gap-3 xl:grid-cols-4">
            <DashboardStat
              icon={<BriefcaseBusiness size={17} />}
              title="Applications"
              value="8"
              text="+2 this week"
              iconStyle="bg-purple-50 text-[#4935ff]"
              positive
            />

            <DashboardStat
              icon={<Bookmark size={17} />}
              title="Saved Jobs"
              value="5"
              text="+1 this week"
              iconStyle="bg-green-50 text-green-500"
              positive
            />

            <DashboardStat
              icon={<Clock3 size={17} />}
              title="Interviews"
              value="2"
              text="Upcoming"
              iconStyle="bg-orange-50 text-orange-500"
            />

            <DashboardStat
              icon={<Eye size={17} />}
              title="Job Views"
              value="12"
              text="In the last 7 days"
              iconStyle="bg-blue-50 text-blue-500"
            />
          </div>

          {/* =================================================
              MAIN GRID
          ================================================= */}

          <div className="grid gap-5 xl:grid-cols-[1fr_1fr]">
            {/* =================================================
                LEFT COLUMN
            ================================================= */}

            <div className="space-y-5">
              {/* Profile Progress */}
              <div className="rounded-xl border border-[#e5e9f0] bg-white p-5">
                <div className="mb-4 flex items-center justify-between">
                  <div>
                    <h2 className="text-[12px] font-semibold text-[#17172c]">
                      Your Job Search Progress
                    </h2>

                    <p className="mt-1 text-[9px] text-gray-400">
                      Complete your profile to get more job matches.
                    </p>
                  </div>

                  <button className="text-[9px] font-medium text-[#4935ff]">
                    View Profile
                  </button>
                </div>

                <div className="flex items-center gap-6">
                  {/* Circle */}
                  <div className="relative flex h-25 w-25 shrink-0 items-center justify-center">
                    <svg
                      className="absolute h-full w-full -rotate-90"
                      viewBox="0 0 100 100"
                    >
                      <circle
                        cx="50"
                        cy="50"
                        r="42"
                        fill="none"
                        stroke="#eeeef8"
                        strokeWidth="8"
                      />

                      <circle
                        cx="50"
                        cy="50"
                        r="42"
                        fill="none"
                        stroke="#4935ff"
                        strokeWidth="8"
                        strokeLinecap="round"
                        strokeDasharray="264"
                        strokeDashoffset="66"
                      />
                    </svg>

                    <div className="text-center">
                      <p className="text-[19px] font-bold text-[#17172c]">
                        75%
                      </p>

                      <p className="text-[8px] text-gray-400">Complete</p>
                    </div>
                  </div>

                  <div className="flex-1">
                    <p className="mb-3 text-[10px] text-gray-500">
                      You're almost there! Complete your profile to increase
                      your chances of getting noticed.
                    </p>

                    <button
                      className="
                        rounded-md
                        bg-[#4935ff]
                        px-4 py-2
                        text-[9px]
                        font-semibold
                        text-white
                        transition
                        hover:bg-[#3925e6]
                      "
                    >
                      Complete Profile
                    </button>
                  </div>
                </div>
              </div>

              {/* Recent Jobs */}
              <div className="rounded-xl border border-[#e5e9f0] bg-white">
                <div className="flex items-center justify-between border-b border-[#edf0f4] px-5 py-4">
                  <h2 className="text-[12px] font-semibold text-[#17172c]">
                    Recent Jobs
                  </h2>

                  <button className="text-[9px] font-medium text-[#4935ff]">
                    View All
                  </button>
                </div>

                <div className="px-5">
                  {recentJobs.map((job) => (
                    <div
                      key={job.id}
                      className="
                        flex items-center
                        gap-3
                        border-b border-[#f0f1f4]
                        py-3
                        last:border-0
                      "
                    >
                      <div
                        className={`
                          flex h-9 w-9
                          shrink-0
                          items-center justify-center
                          rounded-lg
                          text-[9px]
                          font-bold
                          ${job.logoStyle}
                        `}
                      >
                        {job.logo}
                      </div>

                      <div className="min-w-0 flex-1">
                        <p className="truncate text-[10px] font-semibold text-gray-800">
                          {job.title}
                        </p>

                        <p className="mt-0.5 text-[8px] text-gray-400">
                          {job.company} • {job.location} • {job.type}
                        </p>
                      </div>

                      <span className="whitespace-nowrap text-[8px] text-gray-400">
                        {job.time}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* =================================================
                RIGHT COLUMN
            ================================================= */}

            <div className="space-y-5">
              {/* Recommended Jobs */}
              <div className="rounded-xl border border-[#e5e9f0] bg-white">
                <div className="flex items-center justify-between border-b border-[#edf0f4] px-5 py-4">
                  <div>
                    <h2 className="text-[12px] font-semibold text-[#17172c]">
                      Recommended Jobs
                    </h2>

                    <p className="mt-0.5 text-[8px] text-gray-400">
                      Jobs picked for you based on your profile.
                    </p>
                  </div>

                  <button className="text-[9px] font-medium text-[#4935ff]">
                    View All
                  </button>
                </div>

                <div className="px-5">
                  {recommendedJobs.map((job) => (
                    <div
                      key={job.id}
                      className="
                        flex items-center
                        gap-3
                        border-b border-[#f0f1f4]
                        py-3
                        last:border-0
                      "
                    >
                      {/* Logo */}
                      <div
                        className={`
                          flex h-9 w-9
                          shrink-0
                          items-center justify-center
                          rounded-lg
                          text-[9px]
                          font-bold
                          ${job.logoStyle}
                        `}
                      >
                        {job.logo}
                      </div>

                      {/* Job info */}
                      <div className="min-w-0 flex-1">
                        <p className="truncate text-[10px] font-semibold text-gray-800">
                          {job.title}
                        </p>

                        <p className="mt-0.5 text-[8px] text-gray-400">
                          {job.company} • {job.location} • {job.type}
                        </p>
                      </div>

                      {/* Apply */}
                      <button
                        className="
                          shrink-0
                          rounded-md
                          bg-[#4935ff]
                          px-3 py-1.5
                          text-[8px]
                          font-semibold
                          text-white
                          transition
                          hover:bg-[#3925e6]
                        "
                      >
                        Apply
                      </button>
                    </div>
                  ))}
                </div>
              </div>

              {/* Quick Actions */}
              <div className="rounded-xl border border-[#e5e9f0] bg-white p-5">
                <h2 className="mb-4 text-[12px] font-semibold text-[#17172c]">
                  Quick Actions
                </h2>

                <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
                  <QuickAction
                    icon={<Search size={18} />}
                    label="Search Jobs"
                  />

                  <QuickAction
                    icon={<Bookmark size={18} />}
                    label="Saved Jobs"
                  />

                  <QuickAction
                    icon={<BriefcaseBusiness size={18} />}
                    label="My Applications"
                  />

                  <QuickAction
                    icon={<UserRound size={18} />}
                    label="Update Profile"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

/* ============================================================
   SIDEBAR ITEM
============================================================ */

function SidebarItem({ icon, label, active = false, notification = false }) {
  return (
    <button
      className={`
        mb-1 flex w-full
        items-center gap-3
        rounded-lg
        px-3 py-2.5
        text-left
        text-[11px]
        transition
        ${
          active
            ? "bg-[#f0efff] font-medium text-[#4935ff]"
            : "text-gray-500 hover:bg-gray-50 hover:text-gray-800"
        }
      `}
    >
      {icon}

      <span>{label}</span>

      {notification && (
        <span className="ml-auto h-2 w-2 rounded-full bg-red-500" />
      )}
    </button>
  );
}

/* ============================================================
   DASHBOARD STAT
============================================================ */

function DashboardStat({ icon, title, value, text, iconStyle, positive }) {
  return (
    <div className="rounded-xl border border-[#e5e9f0] bg-white p-4">
      <div className="flex items-center gap-3">
        <div
          className={`
            flex h-9 w-9
            shrink-0
            items-center justify-center
            rounded-full
            ${iconStyle}
          `}
        >
          {icon}
        </div>

        <div className="min-w-0">
          <p className="text-[9px] text-gray-400">{title}</p>

          <p className="mt-1 text-[17px] font-bold text-[#17172c]">{value}</p>

          <p
            className={`
              mt-0.5 text-[8px]
              ${positive ? "text-green-500" : "text-gray-400"}
            `}
          >
            {positive && "↗ "}
            {text}
          </p>
        </div>
      </div>
    </div>
  );
}

/* ============================================================
   QUICK ACTION
============================================================ */

function QuickAction({ icon, label }) {
  return (
    <button
      className="
        flex
        flex-col
        items-center
        justify-center
        gap-2
        rounded-lg
        border border-[#edf0f4]
        bg-white
        px-2
        py-4
        text-gray-500
        transition
        hover:border-[#4935ff]/20
        hover:bg-[#f8f7ff]
        hover:text-[#4935ff]
      "
    >
      {icon}

      <span className="text-[8px] font-medium">{label}</span>
    </button>
  );
}

export default Dashboard;

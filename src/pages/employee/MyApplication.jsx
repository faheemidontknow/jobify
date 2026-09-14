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
  MoreVertical,
  Eye,
} from "lucide-react";

const applications = [
  {
    id: 1,
    title: "Frontend Developer",
    company: "ABC Technologies",
    location: "Lagos, Nigeria",
    appliedOn: "2 days ago",
    status: "Interview",
    logo: "AG",
    logoColor: "bg-blue-100 text-blue-700",
  },
  {
    id: 2,
    title: "UI/UX Designer",
    company: "Innovatech Ltd.",
    location: "Abuja, Nigeria",
    appliedOn: "5 days ago",
    status: "Shortlisted",
    logo: "G",
    logoColor: "bg-gray-100 text-gray-700",
  },
  {
    id: 3,
    title: "Backend Developer",
    company: "ByteWorks",
    location: "Lagos, Nigeria",
    appliedOn: "1 week ago",
    status: "Pending",
    logo: "Y",
    logoColor: "bg-green-100 text-green-600",
  },
  {
    id: 4,
    title: "Product Manager",
    company: "DesignHub",
    location: "Remote",
    appliedOn: "1 week ago",
    status: "Pending",
    logo: "D",
    logoColor: "bg-purple-100 text-purple-600",
  },
  {
    id: 5,
    title: "Mobile App Developer",
    company: "TechSolutions",
    location: "Lagos, Nigeria",
    appliedOn: "2 weeks ago",
    status: "Rejected",
    logo: "M",
    logoColor: "bg-gray-100 text-gray-800",
  },
  {
    id: 6,
    title: "Full Stack Developer",
    company: "SoftWave",
    location: "Abuja, Nigeria",
    appliedOn: "2 weeks ago",
    status: "Shortlisted",
    logo: "S",
    logoColor: "bg-blue-100 text-blue-700",
  },
  {
    id: 7,
    title: "Graphic Designer",
    company: "NextGen Media",
    location: "Lagos, Nigeria",
    appliedOn: "3 weeks ago",
    status: "Pending",
    logo: "N",
    logoColor: "bg-purple-100 text-purple-700",
  },
  {
    id: 8,
    title: "DevOps Engineer",
    company: "RiseTech",
    location: "Remote",
    appliedOn: "3 weeks ago",
    status: "Interview",
    logo: "R",
    logoColor: "bg-teal-100 text-teal-700",
  },
];

const tabs = [
  { name: "All", value: "All" },
  { name: "Pending", value: "Pending" },
  { name: "Shortlisted", value: "Shortlisted" },
  { name: "Interview", value: "Interview" },
  { name: "Rejected", value: "Rejected" },
];

function MyApplications() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("All");
  const [search, setSearch] = useState("");

  const filteredApplications = applications.filter((job) => {
    const matchesTab = activeTab === "All" || job.status === activeTab;

    const matchesSearch =
      job.title.toLowerCase().includes(search.toLowerCase()) ||
      job.company.toLowerCase().includes(search.toLowerCase());

    return matchesTab && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-[#f8faff] text-[#111827]">
      {/* =====================================================
          MAIN CONTENT
      ===================================================== */}

      <main className="">
        {/* ===================================================
            HEADER
        =================================================== */}

        <header className="flex  items-center border-b border-[#e6e9ef] bg-white px-4 md:px-8">
          {/* Mobile Menu */}
          <button
            onClick={() => setSidebarOpen(true)}
            className="mr-3 rounded-lg p-2 text-gray-500 md:hidden"
          >
            <Menu size={20} />
          </button>

          {/* Search */}
          <div className="relative hidden w-[390px] md:block">
            <Search
              size={15}
              className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
            />

            <input
              type="text"
              placeholder="Search for jobs, companies..."
              className="
                h-9 w-full
                rounded-lg
                border border-[#e5e7eb]
                bg-white
                pl-9 pr-4
                text-[11px]
                text-gray-700
                outline-none
                focus:border-[#4935ff]
              "
            />
          </div>

          {/* Right */}
          <div className="ml-auto flex items-center gap-4">
            {/* Notification */}
            <button className="relative text-gray-500">
              <Bell size={18} />

              <span className="absolute -right-0.5 -top-0.5 h-2 w-2 rounded-full bg-red-500" />
            </button>

            {/* Profile */}
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
            CONTENT
        =================================================== */}

        <section className="px-4 py-6 md:px-7 md:py-7">
          {/* Page heading */}
          <div className="mb-6">
            <h1 className="text-[21px] font-bold tracking-tight text-[#17172c]">
              My Applications
            </h1>

            <p className="mt-1 text-[11px] text-gray-400">
              Track and manage your job applications.
            </p>
          </div>

          {/* =================================================
              APPLICATION SUMMARY
          ================================================= */}

          <div className="mb-5 grid grid-cols-2 gap-3 lg:grid-cols-4">
            <StatCard
              title="Total Applications"
              value="8"
              text="+2 this week"
              icon={<BriefcaseBusiness size={18} />}
              iconBg="bg-purple-50"
              iconColor="text-[#4935ff]"
              positive
            />

            <StatCard
              title="Pending"
              value="3"
              text="37.5% of total"
              icon={<div className="text-[18px]">◷</div>}
              iconBg="bg-orange-50"
              iconColor="text-orange-500"
            />

            <StatCard
              title="Shortlisted"
              value="2"
              text="25% of total"
              icon={<Star size={18} />}
              iconBg="bg-green-50"
              iconColor="text-green-500"
            />

            <StatCard
              title="Interviews"
              value="2"
              text="25% of total"
              icon={<Video size={18} />}
              iconBg="bg-blue-50"
              iconColor="text-blue-500"
            />
          </div>

          {/* =================================================
              APPLICATIONS CARD
          ================================================= */}

          <div className="rounded-xl border border-[#e5e9f0] bg-white">
            {/* Tabs + Search */}
            <div className="flex flex-col gap-4 border-b border-[#edf0f4] px-4 py-4 lg:flex-row lg:items-center lg:justify-between">
              {/* Tabs */}
              <div className="flex gap-2 overflow-x-auto">
                {tabs.map((tab) => {
                  const count =
                    tab.value === "All"
                      ? applications.length
                      : applications.filter((job) => job.status === tab.value)
                          .length;

                  return (
                    <button
                      key={tab.value}
                      onClick={() => setActiveTab(tab.value)}
                      className={`
                        whitespace-nowrap
                        rounded-md
                        px-3 py-2
                        text-[10px]
                        font-medium
                        transition
                        ${
                          activeTab === tab.value
                            ? "bg-[#4935ff] text-white"
                            : "bg-white text-gray-400 hover:bg-gray-50"
                        }
                      `}
                    >
                      {tab.name} ({count})
                    </button>
                  );
                })}
              </div>

              {/* Search */}
              <div className="flex gap-2">
                <div className="relative flex-1 lg:w-[230px]">
                  <Search
                    size={14}
                    className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
                  />

                  <input
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    placeholder="Search applications..."
                    className="
                      h-8 w-full
                      rounded-md
                      border border-[#e4e7ec]
                      pl-8 pr-3
                      text-[10px]
                      outline-none
                      focus:border-[#4935ff]
                    "
                  />
                </div>

                <select
                  className="
                    h-8
                    rounded-md
                    border border-[#e4e7ec]
                    bg-white
                    px-3
                    text-[10px]
                    text-gray-500
                    outline-none
                  "
                >
                  <option>All Jobs</option>
                  <option>Frontend</option>
                  <option>Backend</option>
                  <option>Design</option>
                </select>
              </div>
            </div>

            {/* =================================================
                DESKTOP TABLE
            ================================================= */}

            <div className="hidden overflow-x-auto md:block">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-[#edf0f4]">
                    <th className="px-5 py-3 text-left text-[10px] font-semibold text-gray-400">
                      Job Title
                    </th>

                    <th className="px-4 py-3 text-left text-[10px] font-semibold text-gray-400">
                      Company
                    </th>

                    <th className="px-4 py-3 text-left text-[10px] font-semibold text-gray-400">
                      Applied On
                    </th>

                    <th className="px-4 py-3 text-left text-[10px] font-semibold text-gray-400">
                      Status
                    </th>

                    <th className="px-5 py-3 text-right text-[10px] font-semibold text-gray-400">
                      Action
                    </th>
                  </tr>
                </thead>

                <tbody>
                  {filteredApplications.map((job) => (
                    <ApplicationRow key={job.id} job={job} />
                  ))}
                </tbody>
              </table>
            </div>

            {/* =================================================
                MOBILE APPLICATION CARDS
            ================================================= */}

            <div className="divide-y divide-[#edf0f4] md:hidden">
              {filteredApplications.map((job) => (
                <div key={job.id} className="p-4">
                  <div className="flex gap-3">
                    {/* Logo */}
                    <div
                      className={`
                        flex h-10 w-10
                        shrink-0
                        items-center
                        justify-center
                        rounded-lg
                        text-[10px]
                        font-bold
                        ${job.logoColor}
                      `}
                    >
                      {job.logo}
                    </div>

                    {/* Details */}
                    <div className="min-w-0 flex-1">
                      <div className="flex justify-between gap-2">
                        <div>
                          <h3 className="text-[12px] font-semibold text-gray-800">
                            {job.title}
                          </h3>

                          <p className="mt-0.5 text-[10px] text-gray-400">
                            {job.company}
                          </p>
                        </div>

                        <MoreVertical
                          size={16}
                          className="shrink-0 text-gray-400"
                        />
                      </div>

                      <div className="mt-2">
                        <p className="text-[9px] text-gray-400">
                          {job.location}
                        </p>

                        <p className="mt-1 text-[9px] text-gray-400">
                          Applied {job.appliedOn}
                        </p>
                      </div>

                      <div className="mt-3 flex items-center justify-between">
                        <StatusBadge status={job.status} />

                        <button
                          className="
                            flex items-center gap-1
                            rounded-md
                            border border-[#4935ff]/30
                            px-3 py-1.5
                            text-[9px]
                            font-medium
                            text-[#4935ff]
                            hover:bg-[#f5f3ff]
                          "
                        >
                          <Eye size={12} />
                          View
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Empty state */}
            {filteredApplications.length === 0 && (
              <div className="py-16 text-center">
                <BriefcaseBusiness
                  size={28}
                  className="mx-auto mb-3 text-gray-300"
                />

                <p className="text-sm font-medium text-gray-600">
                  No applications found
                </p>

                <p className="mt-1 text-xs text-gray-400">
                  Try another search or filter.
                </p>
              </div>
            )}
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
            ? "bg-[#f0efff] text-[#4935ff]"
            : "text-gray-500 hover:bg-gray-50 hover:text-gray-800"
        }
      `}
    >
      {icon}

      <span className={active ? "font-medium" : ""}>{label}</span>

      {notification && (
        <span className="ml-auto h-2 w-2 rounded-full bg-red-500" />
      )}
    </button>
  );
}

/* ============================================================
   STAT CARD
============================================================ */

function StatCard({ title, value, text, icon, iconBg, iconColor, positive }) {
  return (
    <div className="rounded-xl border border-[#e5e9f0] bg-white p-4">
      <div className="flex items-center gap-3">
        <div
          className={`
            flex h-9 w-9
            items-center justify-center
            rounded-full
            ${iconBg}
            ${iconColor}
          `}
        >
          {icon}
        </div>

        <div>
          <p className="text-[9px] text-gray-400">{title}</p>

          <p className="mt-1 text-[17px] font-bold text-[#15152b]">{value}</p>

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
   APPLICATION ROW
============================================================ */

function ApplicationRow({ job }) {
  return (
    <tr className="border-b border-[#edf0f4] last:border-0 hover:bg-[#fcfcff]">
      {/* Job */}
      <td className="px-5 py-3">
        <div className="flex items-center gap-3">
          <div
            className={`
              flex h-9 w-9
              shrink-0
              items-center
              justify-center
              rounded-lg
              text-[10px]
              font-bold
              ${job.logoColor}
            `}
          >
            {job.logo}
          </div>

          <div>
            <p className="text-[10px] font-semibold text-gray-800">
              {job.title}
            </p>

            <p className="mt-0.5 text-[9px] text-gray-400">{job.location}</p>
          </div>
        </div>
      </td>

      {/* Company */}
      <td className="px-4 py-3">
        <p className="text-[10px] font-medium text-gray-700">{job.company}</p>

        <p className="mt-0.5 text-[8px] text-gray-400">Technology</p>
      </td>

      {/* Applied */}
      <td className="px-4 py-3">
        <p className="text-[10px] text-gray-500">{job.appliedOn}</p>
      </td>

      {/* Status */}
      <td className="px-4 py-3">
        <StatusBadge status={job.status} />
      </td>

      {/* Action */}
      <td className="px-5 py-3">
        <div className="flex items-center justify-end gap-3">
          <button
            className="
              rounded-md
              border border-[#4935ff]/30
              px-4 py-1.5
              text-[9px]
              font-medium
              text-[#4935ff]
              transition
              hover:bg-[#f5f3ff]
            "
          >
            View Details
          </button>

          <button className="text-gray-400 hover:text-gray-700">
            <MoreVertical size={15} />
          </button>
        </div>
      </td>
    </tr>
  );
}

/* ============================================================
   STATUS BADGE
============================================================ */

function StatusBadge({ status }) {
  const styles = {
    Pending: "bg-orange-50 text-orange-500",
    Shortlisted: "bg-green-50 text-green-600",
    Interview: "bg-purple-50 text-purple-600",
    Rejected: "bg-red-50 text-red-500",
  };

  return (
    <span
      className={`
        inline-flex
        rounded-full
        px-2.5 py-1
        text-[8px]
        font-medium
        ${styles[status]}
      `}
    >
      {status}
    </span>
  );
}

export default MyApplications;

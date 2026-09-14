import React from "react";
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
  Trash2,
  ExternalLink,
  MapPin,
  ChevronDown,
} from "lucide-react";

import { useState } from "react";

const savedJobs = [
  {
    id: 1,
    title: "Frontend Developer",
    company: "ABC Technologies",
    location: "Lagos, Nigeria",
    savedOn: "2 days ago",
    logo: "AG",
    logoStyle: "bg-blue-100 text-blue-700",
  },
  {
    id: 2,
    title: "UI/UX Designer",
    company: "Innovatech Ltd.",
    location: "Abuja, Nigeria",
    savedOn: "4 days ago",
    logo: "G",
    logoStyle: "bg-gray-100 text-gray-700",
  },
  {
    id: 3,
    title: "Backend Developer",
    company: "ByteWorks",
    location: "Lagos, Nigeria",
    savedOn: "1 week ago",
    logo: "Y",
    logoStyle: "bg-green-100 text-green-600",
  },
  {
    id: 4,
    title: "Product Manager",
    company: "DesignHub",
    location: "Remote",
    savedOn: "1 week ago",
    logo: "D",
    logoStyle: "bg-purple-100 text-purple-600",
  },
  {
    id: 5,
    title: "Mobile App Developer",
    company: "TechSolutions",
    location: "Lagos, Nigeria",
    savedOn: "2 weeks ago",
    logo: "M",
    logoStyle: "bg-gray-100 text-gray-800",
  },
];

function SavedJobs() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#f8faff] text-[#111827]">
      {/* ================= MAIN ================= */}
      <main className="">
        {/* ================= HEADER ================= */}
        <header className="flex items-center justify-between border-b border-[#e5e7eb] bg-white px-5 md:px-8">
          {/* Mobile menu */}
          <button
            onClick={() => setSidebarOpen(true)}
            className="rounded-lg p-2 text-gray-600 hover:bg-gray-100 md:hidden"
          >
            <Menu size={21} />
          </button>

          {/* Search */}
          <div className="relative hidden w-[380px] md:block">
            <Search
              size={15}
              className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
            />

            <input
              type="text"
              placeholder="Search for jobs, companies..."
              className="
                h-9 w-full rounded-lg
                border border-[#e5e7eb]
                bg-white
                pl-9 pr-4
                text-xs
                outline-none
                transition
                focus:border-[#4935ff]
              "
            />
          </div>

          {/* Right side */}
          <div className="ml-auto flex items-center gap-4">
            <button className="relative rounded-lg p-2 text-gray-500 hover:bg-gray-50">
              <Bell size={18} />

              <span className="absolute right-1 top-1 h-2 w-2 rounded-full bg-red-500" />
            </button>

            <div className="flex items-center gap-2">
              <div className="h-8 w-8 overflow-hidden rounded-full bg-[#d8d8d8]">
                <img
                  src="https://i.pravatar.cc/100?img=12"
                  alt="John Doe"
                  className="h-full w-full object-cover"
                />
              </div>

              <div className="hidden leading-tight sm:block">
                <p className="text-[11px] font-semibold text-gray-800">
                  John Doe
                </p>

                <p className="text-[9px] text-gray-400">Job Seeker</p>
              </div>

              <ChevronDown
                size={13}
                className="hidden text-gray-400 sm:block"
              />
            </div>
          </div>
        </header>

        {/* ================= PAGE CONTENT ================= */}
        <section className="px-4 py-6 md:px-8 md:py-8">
          {/* Page heading */}
          <div className="mb-6">
            <h1 className="text-[20px] font-bold tracking-tight text-[#15152b] md:text-[22px]">
              Saved Jobs
            </h1>

            <p className="mt-1 text-xs text-gray-400">
              Jobs you've saved for later.
            </p>
          </div>

          {/* ================= TABLE CARD ================= */}
          <div className="overflow-hidden rounded-xl border border-[#e7eaf0] bg-white shadow-[0_2px_12px_rgba(20,30,60,0.02)]">
            {/* Desktop table */}
            <div className="hidden overflow-x-auto md:block">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="border-b border-[#edf0f4]">
                    <th className="px-6 py-4 text-left text-[10px] font-medium text-gray-400">
                      Job Title
                    </th>

                    <th className="px-4 py-4 text-left text-[10px] font-medium text-gray-400">
                      Company
                    </th>

                    <th className="px-4 py-4 text-left text-[10px] font-medium text-gray-400">
                      Location
                    </th>

                    <th className="px-4 py-4 text-left text-[10px] font-medium text-gray-400">
                      Saved On
                    </th>

                    <th className="px-6 py-4 text-right text-[10px] font-medium text-gray-400">
                      Action
                    </th>
                  </tr>
                </thead>

                <tbody>
                  {savedJobs.map((job) => (
                    <JobRow key={job.id} job={job} />
                  ))}
                </tbody>
              </table>
            </div>

            {/* ================= MOBILE CARDS ================= */}
            <div className="divide-y divide-[#edf0f4] md:hidden">
              {savedJobs.map((job) => (
                <div key={job.id} className="p-4">
                  <div className="flex items-start gap-3">
                    {/* Logo */}
                    <div
                      className={`
                        flex h-10 w-10 shrink-0
                        items-center justify-center
                        rounded-lg
                        text-xs font-bold
                        ${job.logoStyle}
                      `}
                    >
                      {job.logo}
                    </div>

                    {/* Job information */}
                    <div className="min-w-0 flex-1">
                      <div className="flex items-start justify-between gap-2">
                        <div>
                          <h3 className="text-sm font-semibold text-gray-800">
                            {job.title}
                          </h3>

                          <p className="mt-0.5 text-[11px] text-gray-400">
                            {job.company}
                          </p>
                        </div>

                        <button className="rounded-md p-1.5 text-[#4935ff] hover:bg-[#f2f0ff]">
                          <Bookmark size={15} fill="currentColor" />
                        </button>
                      </div>

                      <div className="mt-3 flex flex-wrap items-center gap-x-4 gap-y-2">
                        <div className="flex items-center gap-1 text-[10px] text-gray-400">
                          <MapPin size={12} />
                          {job.location}
                        </div>

                        <div className="text-[10px] text-gray-400">
                          {job.savedOn}
                        </div>
                      </div>

                      <div className="mt-4 flex items-center gap-2">
                        <button
                          className="
                            flex-1 rounded-md
                            bg-[#4935ff]
                            px-4 py-2
                            text-[10px]
                            font-semibold
                            text-white
                            transition
                            hover:bg-[#3925e6]
                          "
                        >
                          Apply
                        </button>

                        <button
                          className="
                            flex h-8 w-8
                            items-center justify-center
                            rounded-md
                            border border-gray-200
                            text-gray-400
                            hover:bg-red-50
                            hover:text-red-500
                          "
                        >
                          <Trash2 size={14} />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

/* =========================================================
   SIDEBAR ITEM
========================================================= */

function SidebarItem({ icon, label, active = false, notification = false }) {
  return (
    <button
      className={`
        relative mb-1 flex w-full items-center gap-3
        rounded-lg px-3 py-2.5
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

/* =========================================================
   DESKTOP JOB ROW
========================================================= */

function JobRow({ job }) {
  return (
    <tr className="border-b border-[#f0f1f4] last:border-b-0 hover:bg-[#fcfcff]">
      {/* Job title */}
      <td className="px-6 py-4">
        <div className="flex items-center gap-3">
          <div
            className={`
              flex h-9 w-9 shrink-0
              items-center justify-center
              rounded-lg
              text-[10px] font-bold
              ${job.logoStyle}
            `}
          >
            {job.logo}
          </div>

          <div>
            <p className="text-[11px] font-semibold text-gray-800">
              {job.title}
            </p>

            <p className="mt-0.5 text-[9px] text-gray-400">{job.company}</p>
          </div>
        </div>
      </td>

      {/* Company */}
      <td className="px-4 py-4">
        <p className="text-[10px] text-gray-500">{job.company}</p>
      </td>

      {/* Location */}
      <td className="px-4 py-4">
        <div className="flex items-center gap-1 text-[10px] text-gray-500">
          <MapPin size={11} />
          {job.location}
        </div>
      </td>

      {/* Saved on */}
      <td className="px-4 py-4">
        <p className="text-[10px] text-gray-400">{job.savedOn}</p>
      </td>

      {/* Actions */}
      <td className="px-6 py-4">
        <div className="flex items-center justify-end gap-2">
          {/* Apply */}
          <button
            className="
              rounded-md
              bg-[#4935ff]
              px-4 py-1.5
              text-[10px]
              font-semibold
              text-white
              transition
              hover:bg-[#3925e6]
            "
          >
            Apply
          </button>

          {/* Remove */}
          <button
            className="
              rounded-md
              p-1.5
              text-gray-300
              transition
              hover:bg-red-50
              hover:text-red-500
            "
            title="Remove saved job"
          >
            <Trash2 size={14} />
          </button>

          {/* Bookmark */}
          <button
            className="
              rounded-md
              p-1.5
              text-[#4935ff]
              transition
              hover:bg-[#f2f0ff]
            "
            title="Saved"
          >
            <Bookmark size={14} fill="currentColor" />
          </button>
        </div>
      </td>
    </tr>
  );
}

export default SavedJobs;

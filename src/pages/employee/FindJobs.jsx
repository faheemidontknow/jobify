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
  MapPin,
  Clock3,
  ChevronDown,
} from "lucide-react";

const FindJobs = () => {
  const jobTypes = [
    "Full Time (94)",
    "Part Time (32)",
    "Remote (28)",
    "Contract (18)",
    "Internship (9)",
  ];

  const experienceLevels = [
    "Entry Level (45)",
    "Mid Level (42)",
    "Senior Level (28)",
  ];

  const locations = [
    "Lagos (64)",
    "Abuja (41)",
    "Port Harcourt (18)",
    "Remote (23)",
  ];

  const jobs = [
    {
      id: 1,
      title: "Frontend Developer",
      company: "ABC Technologies",
      location: "Lagos, Nigeria",
      salary: "₦250,000 - ₦400,000",
      experience: "2-5 years",
      type: "Full Time",
      logo: "AG",
      logoClass: "bg-blue-100 text-blue-700",
      badge: "Featured",
      badgeClass: "bg-purple-50 text-[#4935ff]",
    },
    {
      id: 2,
      title: "UI/UX Designer",
      company: "Innovatech Ltd.",
      location: "Abuja, Nigeria",
      salary: "₦200,000 - ₦350,000",
      experience: "1-3 years",
      type: "Full Time",
      logo: "G",
      logoClass: "bg-gray-100 text-gray-700",
      badge: "New",
      badgeClass: "bg-green-50 text-green-600",
    },
    {
      id: 3,
      title: "Backend Developer",
      company: "ByteWorks",
      location: "Lagos, Nigeria",
      salary: "₦300,000 - ₦500,000",
      experience: "2-4 years",
      type: "Full Time",
      logo: "Y",
      logoClass: "bg-green-100 text-green-700",
      badge: "Featured",
      badgeClass: "bg-purple-50 text-[#4935ff]",
    },
    {
      id: 4,
      title: "Product Manager",
      company: "DesignHub",
      location: "Remote",
      salary: "₦400,000 - ₦700,000",
      experience: "4-7 years",
      type: "Full Time",
      logo: "D",
      logoClass: "bg-purple-100 text-purple-700",
      badge: null,
      badgeClass: "",
    },
    {
      id: 5,
      title: "Mobile App Developer",
      company: "TechSolutions",
      location: "Lagos, Nigeria",
      salary: "₦250,000 - ₦450,000",
      experience: "2-5 years",
      type: "Full Time",
      logo: "M",
      logoClass: "bg-gray-100 text-gray-700",
      badge: null,
      badgeClass: "",
    },
  ];

  return (
    <div className="min-h-screen bg-[#f8faff] text-[#111827]">
      {/* ================= MAIN ================= */}

      <main className="">
        {/* Header */}
        <header className="flex h-[72px] items-center border-b border-[#e5e7eb] bg-white px-4 md:px-8">
          <div className="relative hidden w-[390px] md:block">
            <Search
              size={15}
              className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
            />

            <input
              placeholder="Search for jobs, companies..."
              className="h-9 w-full rounded-lg border border-[#e5e7eb] pl-9 pr-4 text-[11px] outline-none"
            />
          </div>

          <div className="ml-auto flex items-center gap-4">
            <div className="relative">
              <Bell size={18} className="text-gray-500" />
              <span className="absolute -right-1 -top-1 h-2 w-2 rounded-full bg-red-500" />
            </div>

            <div className="flex items-center gap-2">
              <img
                src="https://i.pravatar.cc/100?img=12"
                alt="John Doe"
                className="h-8 w-8 rounded-full"
              />

              <div className="hidden sm:block">
                <p className="text-[11px] font-semibold">John Doe</p>

                <p className="text-[9px] text-gray-400">Job Seeker</p>
              </div>

              <ChevronDown
                size={13}
                className="hidden text-gray-400 sm:block"
              />
            </div>
          </div>
        </header>

        {/* Page */}
        <section className="px-4 py-6 md:px-7 md:py-7">
          {/* Heading */}
          <div className="mb-5">
            <h1 className="text-[21px] font-bold text-[#17172c]">
              Find Your Next Opportunity
            </h1>

            <p className="mt-1 text-[11px] text-gray-400">
              Explore thousands of job opportunities from top companies.
            </p>
          </div>

          {/* Search */}
          <div className="mb-5 rounded-xl border border-[#e5e9f0] bg-white p-4">
            <div className="grid gap-2 md:grid-cols-[1.5fr_1fr_1fr_auto]">
              <div className="relative">
                <Search
                  size={14}
                  className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
                />

                <input
                  placeholder="Job title, company, or keyword..."
                  className="h-9 w-full rounded-md border border-[#e4e7ec] pl-9 pr-3 text-[10px] outline-none"
                />
              </div>

              <div className="relative">
                <MapPin
                  size={14}
                  className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
                />

                <select className="h-9 w-full appearance-none rounded-md border border-[#e4e7ec] bg-white pl-9 pr-7 text-[10px] text-gray-500">
                  <option>Location</option>
                  <option>Lagos</option>
                  <option>Abuja</option>
                  <option>Remote</option>
                </select>

                <ChevronDown
                  size={13}
                  className="absolute right-2.5 top-1/2 -translate-y-1/2 text-gray-400"
                />
              </div>

              <div className="relative">
                <select className="h-9 w-full appearance-none rounded-md border border-[#e4e7ec] bg-white px-3 pr-7 text-[10px] text-gray-500">
                  <option>Job Type</option>
                  <option>Full Time</option>
                  <option>Part Time</option>
                  <option>Remote</option>
                  <option>Contract</option>
                </select>

                <ChevronDown
                  size={13}
                  className="absolute right-2.5 top-1/2 -translate-y-1/2 text-gray-400"
                />
              </div>

              <div className="flex h-9 items-center justify-center rounded-md bg-[#4935ff] px-6 text-[10px] font-semibold text-white">
                Search Jobs
              </div>
            </div>
          </div>

          {/* Main grid */}
          <div className="grid gap-5 md:grid-cols-[210px_1fr]">
            {/* ================= FILTERS ================= */}

            <aside className="rounded-xl border border-[#e5e9f0] bg-white p-4">
              <div className="mb-5 flex items-center justify-between">
                <h2 className="text-[11px] font-semibold">Filter Jobs</h2>

                <span className="text-[8px] text-[#4935ff]">Clear all</span>
              </div>

              {/* Job Type */}
              <div className="mb-6">
                <h3 className="mb-3 text-[9px] font-semibold text-gray-700">
                  Job Type
                </h3>

                <div className="space-y-2.5">
                  {jobTypes.map((type) => (
                    <label key={type} className="flex items-center gap-2">
                      <input
                        type="checkbox"
                        className="h-3 w-3 accent-[#4935ff]"
                      />

                      <span className="text-[9px] text-gray-500">{type}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Experience */}
              <div className="mb-6">
                <h3 className="mb-3 text-[9px] font-semibold text-gray-700">
                  Experience Level
                </h3>

                <div className="space-y-2.5">
                  {experienceLevels.map((level) => (
                    <label key={level} className="flex items-center gap-2">
                      <input
                        type="checkbox"
                        className="h-3 w-3 accent-[#4935ff]"
                      />

                      <span className="text-[9px] text-gray-500">{level}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Location */}
              <div>
                <h3 className="mb-3 text-[9px] font-semibold text-gray-700">
                  Location
                </h3>

                <div className="space-y-2.5">
                  {locations.map((location) => (
                    <label key={location} className="flex items-center gap-2">
                      <input
                        type="checkbox"
                        className="h-3 w-3 accent-[#4935ff]"
                      />

                      <span className="text-[9px] text-gray-500">
                        {location}
                      </span>
                    </label>
                  ))}
                </div>
              </div>
            </aside>

            {/* ================= JOBS ================= */}

            <div>
              {/* Results header */}
              <div className="mb-3 flex items-center justify-between">
                <p className="text-[10px] text-gray-400">
                  Showing{" "}
                  <span className="font-semibold text-gray-600">12</span> jobs
                </p>

                <select className="rounded-md border border-[#e4e7ec] bg-white px-3 py-2 text-[9px] text-gray-500">
                  <option>Most Relevant</option>
                  <option>Newest</option>
                  <option>Highest Salary</option>
                </select>
              </div>

              {/* Job cards */}
              <div className="space-y-3">
                {jobs.map((job) => (
                  <div
                    key={job.id}
                    className="rounded-xl border border-[#e5e9f0] bg-white p-4"
                  >
                    <div className="flex gap-3">
                      {/* Company logo */}
                      <div
                        className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl text-[11px] font-bold ${job.logoClass}`}
                      >
                        {job.logo}
                      </div>

                      {/* Content */}
                      <div className="min-w-0 flex-1">
                        <div className="flex items-start justify-between">
                          <div>
                            <div className="flex flex-wrap items-center gap-2">
                              <h2 className="text-[12px] font-semibold text-[#17172c]">
                                {job.title}
                              </h2>

                              {job.badge && (
                                <span
                                  className={`rounded-full px-2 py-0.5 text-[7px] font-medium ${job.badgeClass}`}
                                >
                                  {job.badge}
                                </span>
                              )}
                            </div>

                            <p className="mt-1 text-[9px] text-gray-400">
                              {job.company}
                            </p>
                          </div>

                          <Bookmark
                            size={15}
                            className="shrink-0 text-gray-300"
                          />
                        </div>

                        {/* Details */}
                        <div className="mt-3 flex flex-wrap gap-x-4 gap-y-2">
                          <div className="flex items-center gap-1 text-[8px] text-gray-400">
                            <MapPin size={11} />
                            {job.location}
                          </div>

                          <div className="flex items-center gap-1 text-[8px] text-gray-400">
                            <BriefcaseBusiness size={11} />
                            {job.type}
                          </div>

                          <div className="flex items-center gap-1 text-[8px] text-gray-400">
                            <Clock3 size={11} />
                            {job.experience}
                          </div>
                        </div>

                        {/* Bottom */}
                        <div className="mt-4 flex items-center justify-between border-t border-[#f0f1f4] pt-3">
                          <span className="text-[9px] font-medium text-gray-600">
                            {job.salary}
                          </span>

                          <div className="rounded-md bg-[#4935ff] px-4 py-2 text-[8px] font-semibold text-white">
                            Apply
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default FindJobs;

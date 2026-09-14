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

const Recommended = () => {
  // ================= JOBS =================

  const recommendedJobs = [
    {
      id: 1,
      title: "Frontend Developer",
      company: "ABC Technologies",
      location: "Lagos, Nigeria",
      type: "Full Time",
      experience: "2-5 years",
      salary: "₦250,000 - ₦400,000",
      match: "95%",
      logo: "AG",
      logoClass: "bg-blue-100 text-blue-700",
      tag: "Best Match",
      tagClass: "bg-purple-50 text-[#4935ff]",
      posted: "2 days ago",
    },
    {
      id: 2,
      title: "UI/UX Designer",
      company: "Innovatech Ltd.",
      location: "Abuja, Nigeria",
      type: "Full Time",
      experience: "1-3 years",
      salary: "₦200,000 - ₦350,000",
      match: "91%",
      logo: "G",
      logoClass: "bg-gray-100 text-gray-700",
      tag: "Great Match",
      tagClass: "bg-green-50 text-green-600",
      posted: "3 days ago",
    },
    {
      id: 3,
      title: "Backend Developer",
      company: "ByteWorks",
      location: "Lagos, Nigeria",
      type: "Full Time",
      experience: "2-4 years",
      salary: "₦300,000 - ₦500,000",
      match: "88%",
      logo: "Y",
      logoClass: "bg-green-100 text-green-700",
      tag: "Great Match",
      tagClass: "bg-green-50 text-green-600",
      posted: "1 day ago",
    },
    {
      id: 4,
      title: "Product Manager",
      company: "DesignHub",
      location: "Remote",
      type: "Full Time",
      experience: "4-7 years",
      salary: "₦400,000 - ₦700,000",
      match: "84%",
      logo: "D",
      logoClass: "bg-purple-100 text-purple-700",
      tag: null,
      tagClass: "",
      posted: "4 days ago",
    },
    {
      id: 5,
      title: "Mobile App Developer",
      company: "TechSolutions",
      location: "Lagos, Nigeria",
      type: "Full Time",
      experience: "2-5 years",
      salary: "₦250,000 - ₦450,000",
      match: "82%",
      logo: "M",
      logoClass: "bg-gray-100 text-gray-700",
      tag: null,
      tagClass: "",
      posted: "5 days ago",
    },
    {
      id: 6,
      title: "Frontend Engineer",
      company: "Creative Labs",
      location: "Abuja, Nigeria",
      type: "Remote",
      experience: "2-4 years",
      salary: "₦280,000 - ₦450,000",
      match: "80%",
      logo: "CL",
      logoClass: "bg-indigo-100 text-indigo-700",
      tag: null,
      tagClass: "",
      posted: "1 week ago",
    },
  ];

  return (
    <div className="min-h-screen bg-[#f8faff] text-[#111827]">
      {/* =====================================================
          MAIN CONTENT
      ===================================================== */}

      <main className="">
        {/* ===================================================
            HEADER
        =================================================== */}

        <header className="flex h-[72px] items-center border-b border-[#e5e7eb] bg-white px-4 md:px-8">
          {/* Search */}
          <div className="relative hidden w-[390px] md:block">
            <Search
              size={15}
              className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
            />

            <input
              placeholder="Search for jobs, companies..."
              className="h-9 w-full rounded-lg border border-[#e5e7eb] bg-white pl-9 pr-4 text-[11px] outline-none"
            />
          </div>

          {/* Right side */}
          <div className="ml-auto flex items-center gap-4">
            {/* Notification */}
            <div className="relative">
              <Bell size={18} className="text-gray-500" />

              <span className="absolute -right-1 -top-1 h-2 w-2 rounded-full bg-red-500" />
            </div>

            {/* User */}
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

              <ChevronDown
                size={13}
                className="hidden text-gray-400 sm:block"
              />
            </div>
          </div>
        </header>

        {/* ===================================================
            PAGE CONTENT
        =================================================== */}

        <section className="px-4 py-6 md:px-7 md:py-7">
          {/* Page heading */}
          <div className="mb-6">
            <div className="flex items-start justify-between">
              <div>
                <h1 className="text-[21px] font-bold tracking-tight text-[#17172c]">
                  Recommended Jobs
                </h1>

                <p className="mt-1 text-[11px] text-gray-400">
                  Jobs picked for you based on your profile and preferences.
                </p>
              </div>

              <div className="hidden items-center gap-2 rounded-lg border border-[#e5e7eb] bg-white px-3 py-2 md:flex">
                <Star size={13} className="fill-[#4935ff] text-[#4935ff]" />

                <span className="text-[9px] font-medium text-gray-600">
                  Personalized for you
                </span>
              </div>
            </div>
          </div>

          {/* =================================================
              PROFILE MATCH BANNER
          ================================================= */}

          <div className="mb-5 rounded-xl border border-[#e4e1ff] bg-[#f7f5ff] p-4">
            <div className="flex items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white">
                  <Star size={18} className="fill-[#4935ff] text-[#4935ff]" />
                </div>

                <div>
                  <h2 className="text-[11px] font-semibold text-[#17172c]">
                    Your job recommendations are ready
                  </h2>

                  <p className="mt-1 text-[9px] text-gray-400">
                    We found jobs that match your skills and experience.
                  </p>
                </div>
              </div>

              <span className="hidden rounded-full bg-white px-3 py-1.5 text-[9px] font-semibold text-[#4935ff] sm:block">
                12 Matches
              </span>
            </div>
          </div>

          {/* =================================================
              RESULTS HEADER
          ================================================= */}

          <div className="mb-3 flex items-center justify-between">
            <div>
              <p className="text-[10px] text-gray-400">
                Showing <span className="font-semibold text-gray-600">12</span>{" "}
                recommended jobs
              </p>
            </div>

            <select className="rounded-md border border-[#e4e7ec] bg-white px-3 py-2 text-[9px] text-gray-500 outline-none">
              <option>Best Match</option>

              <option>Newest</option>

              <option>Highest Salary</option>
            </select>
          </div>

          {/* =================================================
              JOB CARDS
          ================================================= */}

          <div className="grid gap-3 xl:grid-cols-2">
            {recommendedJobs.map((job) => (
              <div
                key={job.id}
                className="rounded-xl border border-[#e5e9f0] bg-white p-4 transition hover:border-[#d8d3ff]"
              >
                {/* Top */}
                <div className="flex gap-3">
                  {/* Logo */}
                  <div
                    className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl text-[11px] font-bold ${job.logoClass}`}
                  >
                    {job.logo}
                  </div>

                  {/* Main */}
                  <div className="min-w-0 flex-1">
                    <div className="flex items-start justify-between gap-3">
                      <div>
                        <div className="flex flex-wrap items-center gap-2">
                          <h2 className="text-[12px] font-semibold text-[#17172c]">
                            {job.title}
                          </h2>

                          {job.tag && (
                            <span
                              className={`rounded-full px-2 py-0.5 text-[7px] font-medium ${job.tagClass}`}
                            >
                              {job.tag}
                            </span>
                          )}
                        </div>

                        <p className="mt-1 text-[9px] text-gray-400">
                          {job.company}
                        </p>
                      </div>

                      {/* Match */}
                      <div className="shrink-0 text-right">
                        <p className="text-[13px] font-bold text-[#4935ff]">
                          {job.match}
                        </p>

                        <p className="text-[7px] text-gray-400">match</p>
                      </div>
                    </div>

                    {/* Job details */}
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
                      <div>
                        <p className="text-[9px] font-semibold text-gray-600">
                          {job.salary}
                        </p>

                        <p className="mt-1 text-[7px] text-gray-400">
                          Posted {job.posted}
                        </p>
                      </div>

                      <div className="flex items-center gap-2">
                        <div className="flex h-8 w-8 items-center justify-center rounded-md border border-[#e5e7eb]">
                          <Bookmark size={13} className="text-gray-400" />
                        </div>

                        <div className="rounded-md bg-[#4935ff] px-4 py-2 text-[8px] font-semibold text-white">
                          Apply
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
};

export default Recommended;

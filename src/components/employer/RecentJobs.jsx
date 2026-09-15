import { useEffect, useState } from "react";
import {
  Search,
  ChevronDown,
  MoreVertical,
  Eye,
  BriefcaseBusiness,
  MapPin,
  Plus,
} from "lucide-react";

import { getEmployerJobs } from "../../api/axios";

export default function MyJobs() {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);

  const [search, setSearch] = useState("");
  const [status, setStatus] = useState("All Status");
  const [time, setTime] = useState("All Time");

  useEffect(() => {
    const loadJobs = async () => {
      try {
        const data = await getEmployerJobs();

        setJobs(data);
      } catch (error) {
        console.error("Error loading jobs:", error);
      } finally {
        setLoading(false);
      }
    };

    loadJobs();
  }, []);

  const filteredJobs = jobs.filter((job) => {
    const matchesSearch = job.title
      .toLowerCase()
      .includes(search.toLowerCase());

    const matchesStatus = status === "All Status" || job.status === status;

    return matchesSearch && matchesStatus;
  });

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="mb-8 flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-[#111936]">My Jobs</h1>

            <p className="mt-1 text-sm text-gray-500">
              Manage and track all your posted jobs.
            </p>
          </div>

          <button
            onClick={() => {
              window.location.href = "/employer/post-job";
            }}
            className="flex items-center gap-2 rounded-lg bg-[#5B3DF5] px-5 py-3 text-sm font-medium text-white transition hover:bg-[#4b30d4]"
          >
            <Plus size={18} />
            Post New Job
          </button>
        </div>

        {/* Search + Filters */}
        <div className="mb-6 rounded-xl border border-gray-200 bg-white p-4">
          <div className="flex gap-4">
            {/* Search */}
            <div className="relative flex-1">
              <Search
                size={18}
                className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
              />

              <input
                type="text"
                placeholder="Search jobs..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full rounded-lg border border-gray-200 py-3 pl-11 pr-4 text-sm outline-none transition focus:border-[#5B3DF5]"
              />
            </div>

            {/* Status */}
            <div className="relative">
              <select
                value={status}
                onChange={(e) => setStatus(e.target.value)}
                className="appearance-none rounded-lg border border-gray-200 bg-white px-4 py-3 pr-10 text-sm text-gray-600 outline-none focus:border-[#5B3DF5]"
              >
                <option>All Status</option>
                <option>Active</option>
                <option>Paused</option>
                <option>Closed</option>
              </select>

              <ChevronDown
                size={16}
                className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-gray-400"
              />
            </div>

            {/* Time */}
            <div className="relative">
              <select
                value={time}
                onChange={(e) => setTime(e.target.value)}
                className="appearance-none rounded-lg border border-gray-200 bg-white px-4 py-3 pr-10 text-sm text-gray-600 outline-none focus:border-[#5B3DF5]"
              >
                <option>All Time</option>
                <option>Today</option>
                <option>This Week</option>
                <option>This Month</option>
              </select>

              <ChevronDown
                size={16}
                className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-gray-400"
              />
            </div>
          </div>
        </div>

        {/* Jobs */}
        <div className="rounded-xl border border-gray-200 bg-white">
          {/* Table Header */}
          <div className="grid grid-cols-[2fr_1fr_1fr_1fr_80px] gap-4 border-b border-gray-200 px-6 py-4 text-xs font-semibold uppercase text-gray-400">
            <span>Job Title</span>
            <span>Applications</span>
            <span>Status</span>
            <span>Posted</span>
            <span>Actions</span>
          </div>

          {/* Loading */}
          {loading && (
            <div className="p-10 text-center text-sm text-gray-500">
              Loading jobs...
            </div>
          )}

          {/* Empty */}
          {!loading && filteredJobs.length === 0 && (
            <div className="p-10 text-center">
              <BriefcaseBusiness
                size={40}
                className="mx-auto mb-3 text-gray-300"
              />

              <h3 className="font-semibold text-gray-700">No jobs found</h3>

              <p className="mt-1 text-sm text-gray-400">
                Try changing your search or filters.
              </p>
            </div>
          )}

          {/* Job Rows */}
          {!loading &&
            filteredJobs.map((job) => (
              <div
                key={job.id}
                className="grid grid-cols-[2fr_1fr_1fr_1fr_80px] items-center gap-4 border-b border-gray-100 px-6 py-5 last:border-none"
              >
                {/* Job */}
                <div className="flex items-center gap-4">
                  <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-[#F0EDFF]">
                    <BriefcaseBusiness size={21} className="text-[#5B3DF5]" />
                  </div>

                  <div>
                    <h3 className="font-semibold text-[#111936]">
                      {job.title}
                    </h3>

                    <div className="mt-1 flex items-center gap-3 text-xs text-gray-400">
                      <span className="flex items-center gap-1">
                        <MapPin size={13} />
                        {job.location}
                      </span>

                      <span>•</span>

                      <span>{job.jobType}</span>
                    </div>
                  </div>
                </div>

                {/* Applications */}
                <div className="text-sm text-gray-600">
                  {job.applicationCount} applications
                </div>

                {/* Status */}
                <div>
                  <span
                    className={`rounded-full px-3 py-1 text-xs font-medium ${
                      job.status === "Active"
                        ? "bg-green-100 text-green-600"
                        : job.status === "Paused"
                          ? "bg-orange-100 text-orange-600"
                          : "bg-red-100 text-red-600"
                    }`}
                  >
                    {job.status}
                  </span>
                </div>

                {/* Posted */}
                <div className="text-sm text-gray-500">{job.posted}</div>

                {/* Actions */}
                <div className="flex items-center gap-2">
                  <button
                    title="View Job"
                    className="rounded-lg p-2 text-gray-400 transition hover:bg-[#F0EDFF] hover:text-[#5B3DF5]"
                  >
                    <Eye size={18} />
                  </button>

                  <button
                    title="More"
                    className="rounded-lg p-2 text-gray-400 transition hover:bg-gray-100"
                  >
                    <MoreVertical size={18} />
                  </button>
                </div>
              </div>
            ))}
        </div>

        {/* Bottom */}
        {!loading && filteredJobs.length > 0 && (
          <div className="mt-5 flex items-center justify-between text-sm text-gray-400">
            <span>
              Showing {filteredJobs.length} of {jobs.length} jobs
            </span>

            <div className="flex gap-2">
              <button className="rounded-lg border border-gray-200 px-3 py-2 hover:bg-white">
                ←
              </button>

              <button className="rounded-lg bg-[#5B3DF5] px-3 py-2 text-white">
                1
              </button>

              <button className="rounded-lg border border-gray-200 px-3 py-2 hover:bg-white">
                2
              </button>

              <button className="rounded-lg border border-gray-200 px-3 py-2 hover:bg-white">
                →
              </button>
            </div>
          </div>
        )}
    </div>
  );
}

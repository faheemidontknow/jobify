import { useEffect, useState } from "react";
import {
  Search,
  MoreVertical,
  Eye,
  MapPin,
  BriefcaseBusiness,
} from "lucide-react";

import { getEmployerApplicants } from "../../api/axios";

export default function Applicants() {
  const [applicants, setApplicants] = useState([]);
  const [loading, setLoading] = useState(true);

  const [search, setSearch] = useState("");
  const [status, setStatus] = useState("All");

  useEffect(() => {
    const loadApplicants = async () => {
      try {
        const data = await getEmployerApplicants();

        console.log("APPLICANTS FROM BACKEND:", data);

        setApplicants(data);
      } catch (error) {
        console.error("ERROR LOADING APPLICANTS:", error);
      } finally {
        setLoading(false);
      }
    };

    loadApplicants();
  }, []);

  const filteredApplicants = applicants.filter((applicant) => {
    const matchesSearch =
      applicant.name.toLowerCase().includes(search.toLowerCase()) ||
      applicant.jobTitle.toLowerCase().includes(search.toLowerCase());

    const matchesStatus = status === "All" || applicant.status === status;

    return matchesSearch && matchesStatus;
  });

  return (
    <div className="min-w-0">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-[#111936]">Applicants</h1>

        <p className="mt-1 text-sm text-gray-500">
          Manage and review applicants for your job openings.
        </p>
      </div>

      {/* Search + Filter */}
      <div className="mb-6 flex gap-4 rounded-xl border border-gray-200 bg-white p-4">
        {/* Search */}
        <div className="relative flex-1">
          <Search
            size={18}
            className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
          />

          <input
            type="text"
            placeholder="Search applicants or jobs..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full rounded-lg border border-gray-200 py-3 pl-11 pr-4 text-sm outline-none focus:border-[#5B3DF5]"
          />
        </div>

        {/* Status */}
        <select
          value={status}
          onChange={(e) => setStatus(e.target.value)}
          className="rounded-lg border border-gray-200 bg-white px-5 py-3 text-sm text-gray-600 outline-none focus:border-[#5B3DF5]"
        >
          <option value="All">All Status</option>
          <option value="Pending">Pending</option>
          <option value="Shortlisted">Shortlisted</option>
          <option value="Hired">Hired</option>
          <option value="Rejected">Rejected</option>
        </select>
      </div>

      {/* Applicants Table */}
      <div className="overflow-hidden rounded-xl border border-gray-200 bg-white">
        {/* Table Header */}
        <div className="grid grid-cols-[2fr_2fr_1.5fr_1fr_80px] gap-4 border-b border-gray-200 px-6 py-4 text-xs font-semibold uppercase text-gray-400">
          <span>Applicant</span>
          <span>Job</span>
          <span>Applied</span>
          <span>Status</span>
          <span>Action</span>
        </div>

        {/* Loading */}
        {loading && (
          <div className="p-10 text-center text-sm text-gray-500">
            Loading applicants...
          </div>
        )}

        {/* Empty */}
        {!loading && filteredApplicants.length === 0 && (
          <div className="p-10 text-center">
            <BriefcaseBusiness
              size={40}
              className="mx-auto mb-3 text-gray-300"
            />

            <h3 className="font-semibold text-gray-700">No applicants found</h3>

            <p className="mt-1 text-sm text-gray-400">
              Try changing your search or filter.
            </p>
          </div>
        )}

        {/* Applicant Rows */}
        {!loading &&
          filteredApplicants.map((applicant) => (
            <div
              key={applicant.id}
              className="grid grid-cols-[2fr_2fr_1.5fr_1fr_80px] items-center gap-4 border-b border-gray-100 px-6 py-5 last:border-none"
            >
              {/* Applicant */}
              <div className="flex items-center gap-4">
                <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#EDE9FE] font-semibold text-[#5B3DF5]">
                  {applicant.name.charAt(0)}
                </div>

                <div>
                  <h3 className="font-semibold text-[#111936]">
                    {applicant.name}
                  </h3>

                  <p className="text-xs text-gray-400">{applicant.email}</p>
                </div>
              </div>

              {/* Job */}
              <div>
                <p className="font-medium text-gray-700">
                  {applicant.jobTitle}
                </p>

                <p className="mt-1 flex items-center gap-1 text-xs text-gray-400">
                  <MapPin size={13} />
                  {applicant.location}
                </p>
              </div>

              {/* Applied */}
              <div className="text-sm text-gray-500">
                {applicant.appliedDate}
              </div>

              {/* Status */}
              <div>
                <span
                  className={`rounded-full px-3 py-1 text-xs font-medium ${
                    applicant.status === "Pending"
                      ? "bg-yellow-100 text-yellow-600"
                      : applicant.status === "Shortlisted"
                        ? "bg-blue-100 text-blue-600"
                        : applicant.status === "Hired"
                          ? "bg-green-100 text-green-600"
                          : "bg-red-100 text-red-600"
                  }`}
                >
                  {applicant.status}
                </span>
              </div>

              {/* Actions */}
              <div className="flex items-center gap-1">
                <button
                  title="View Applicant"
                  className="rounded-lg p-2 text-gray-400 hover:bg-[#F0EDFF] hover:text-[#5B3DF5]"
                >
                  <Eye size={18} />
                </button>

                <button
                  title="More"
                  className="rounded-lg p-2 text-gray-400 hover:bg-gray-100"
                >
                  <MoreVertical size={18} />
                </button>
              </div>
            </div>
          ))}
      </div>

      {/* Results */}
      {!loading && filteredApplicants.length > 0 && (
        <div className="mt-5 text-sm text-gray-400">
          Showing {filteredApplicants.length} of {applicants.length} applicants
        </div>
      )}
    </div>
  );
}

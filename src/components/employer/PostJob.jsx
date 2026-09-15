import { useState } from "react";
import {
  BriefcaseBusiness,
  MapPin,
  DollarSign,
  FileText,
  Plus,
} from "lucide-react";

import api from "../../api/axios";

export default function PostJob() {
  const [formData, setFormData] = useState({
    title: "",
    location: "",
    jobType: "Full Time",
    category: "",
    salary: "",
    description: "",
    requirements: "",
  });

  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);
    setMessage("");

    try {
      const response = await api.post("/employer/jobs", formData);

      console.log("JOB CREATED:", response.data);

      setMessage("Job posted successfully!");

      setFormData({
        title: "",
        location: "",
        jobType: "Full Time",
        category: "",
        salary: "",
        description: "",
        requirements: "",
      });
    } catch (error) {
      console.error("ERROR POSTING JOB:", error);

      setMessage("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-w-0">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-[#111936]">Post a Job</h1>

        <p className="mt-1 text-sm text-gray-500">
          Create a new job opening and find the right candidate.
        </p>
      </div>

      {/* Form */}
      <form
        onSubmit={handleSubmit}
        className="max-w-4xl rounded-2xl border border-gray-200 bg-white p-8 shadow-sm"
      >
        {/* Job Information */}
        <div className="mb-8">
          <div className="mb-6 flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#F0EDFF]">
              <BriefcaseBusiness size={20} className="text-[#5B3DF5]" />
            </div>

            <div>
              <h2 className="font-semibold text-[#111936]">Job Information</h2>

              <p className="text-xs text-gray-400">
                Basic information about the job.
              </p>
            </div>
          </div>

          {/* Job Title */}
          <div className="mb-5">
            <label className="mb-2 block text-sm font-medium text-gray-700">
              Job Title
            </label>

            <input
              type="text"
              name="title"
              value={formData.title}
              onChange={handleChange}
              placeholder="e.g. Frontend Developer"
              required
              className="w-full rounded-lg border border-gray-200 px-4 py-3 text-sm outline-none transition focus:border-[#5B3DF5]"
            />
          </div>

          {/* Location + Job Type */}
          <div className="grid gap-5 md:grid-cols-2">
            <div>
              <label className="mb-2 block text-sm font-medium text-gray-700">
                Location
              </label>

              <div className="relative">
                <MapPin
                  size={17}
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
                />

                <input
                  type="text"
                  name="location"
                  value={formData.location}
                  onChange={handleChange}
                  placeholder="e.g. Lagos, Nigeria"
                  required
                  className="w-full rounded-lg border border-gray-200 py-3 pl-11 pr-4 text-sm outline-none focus:border-[#5B3DF5]"
                />
              </div>
            </div>

            <div>
              <label className="mb-2 block text-sm font-medium text-gray-700">
                Job Type
              </label>

              <select
                name="jobType"
                value={formData.jobType}
                onChange={handleChange}
                className="w-full rounded-lg border border-gray-200 bg-white px-4 py-3 text-sm outline-none focus:border-[#5B3DF5]"
              >
                <option>Full Time</option>
                <option>Part Time</option>
                <option>Contract</option>
                <option>Internship</option>
                <option>Remote</option>
              </select>
            </div>
          </div>

          {/* Category + Salary */}
          <div className="mt-5 grid gap-5 md:grid-cols-2">
            <div>
              <label className="mb-2 block text-sm font-medium text-gray-700">
                Category
              </label>

              <select
                name="category"
                value={formData.category}
                onChange={handleChange}
                required
                className="w-full rounded-lg border border-gray-200 bg-white px-4 py-3 text-sm outline-none focus:border-[#5B3DF5]"
              >
                <option value="">Select category</option>
                <option>Technology</option>
                <option>Design</option>
                <option>Marketing</option>
                <option>Finance</option>
                <option>Engineering</option>
                <option>Sales</option>
                <option>Healthcare</option>
                <option>Education</option>
              </select>
            </div>

            <div>
              <label className="mb-2 block text-sm font-medium text-gray-700">
                Salary
              </label>

              <div className="relative">
                <DollarSign
                  size={17}
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
                />

                <input
                  type="text"
                  name="salary"
                  value={formData.salary}
                  onChange={handleChange}
                  placeholder="e.g. ₦300,000 - ₦500,000"
                  className="w-full rounded-lg border border-gray-200 py-3 pl-11 pr-4 text-sm outline-none focus:border-[#5B3DF5]"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Description */}
        <div className="mb-8 border-t border-gray-100 pt-8">
          <div className="mb-6 flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#F0EDFF]">
              <FileText size={20} className="text-[#5B3DF5]" />
            </div>

            <div>
              <h2 className="font-semibold text-[#111936]">Job Description</h2>

              <p className="text-xs text-gray-400">
                Tell applicants what the job is about.
              </p>
            </div>
          </div>

          {/* Description */}
          <div className="mb-5">
            <label className="mb-2 block text-sm font-medium text-gray-700">
              Description
            </label>

            <textarea
              name="description"
              value={formData.description}
              onChange={handleChange}
              placeholder="Describe the role, responsibilities and what the candidate will do..."
              required
              rows={6}
              className="w-full resize-none rounded-lg border border-gray-200 px-4 py-3 text-sm outline-none focus:border-[#5B3DF5]"
            />
          </div>

          {/* Requirements */}
          <div>
            <label className="mb-2 block text-sm font-medium text-gray-700">
              Requirements
            </label>

            <textarea
              name="requirements"
              value={formData.requirements}
              onChange={handleChange}
              placeholder="Enter the skills, experience and qualifications required..."
              required
              rows={6}
              className="w-full resize-none rounded-lg border border-gray-200 px-4 py-3 text-sm outline-none focus:border-[#5B3DF5]"
            />
          </div>
        </div>

        {/* Message */}
        {message && (
          <div className="mb-5 rounded-lg bg-[#F0EDFF] p-4 text-sm text-[#5B3DF5]">
            {message}
          </div>
        )}

        {/* Buttons */}
        <div className="flex justify-end gap-3 border-t border-gray-100 pt-6">
          <button
            type="button"
            onClick={() =>
              setFormData({
                title: "",
                location: "",
                jobType: "Full Time",
                category: "",
                salary: "",
                description: "",
                requirements: "",
              })
            }
            className="rounded-lg border border-gray-200 px-5 py-3 text-sm font-medium text-gray-600 hover:bg-gray-50"
          >
            Clear
          </button>

          <button
            type="submit"
            disabled={loading}
            className="flex items-center gap-2 rounded-lg bg-[#5B3DF5] px-6 py-3 text-sm font-medium text-white hover:bg-[#4b30d4] disabled:cursor-not-allowed disabled:opacity-60"
          >
            <Plus size={18} />

            {loading ? "Posting..." : "Post Job"}
          </button>
        </div>
      </form>
    </div>
  );
}

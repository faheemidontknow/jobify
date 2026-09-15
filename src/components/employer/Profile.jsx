import { useState } from "react";
import {
  Building2,
  MapPin,
  Globe,
  Mail,
  Phone,
  Users,
  Pencil,
  Save,
} from "lucide-react";

export default function CompanyProfile() {
  const [editing, setEditing] = useState(false);

  const [company, setCompany] = useState({
    name: "ABC Technologies",
    industry: "Technology",
    location: "Lagos, Nigeria",
    website: "www.abctech.com",
    email: "contact@abctech.com",
    phone: "+234 801 234 5678",
    employees: "50 - 100",
    description:
      "ABC Technologies is a growing technology company focused on building modern digital solutions for businesses and individuals.",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setCompany((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSave = () => {
    setEditing(false);

    console.log("COMPANY PROFILE:", company);
  };

  return (
    <div className="min-w-0">
      {/* Header */}
      <div className="mb-8 flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-[#111936]">Company Profile</h1>

          <p className="mt-1 text-sm text-gray-500">
            Manage your company information and profile.
          </p>
        </div>

        {!editing ? (
          <button
            onClick={() => setEditing(true)}
            className="flex items-center gap-2 rounded-lg bg-[#5B3DF5] px-5 py-3 text-sm font-medium text-white hover:bg-[#4B30D4]"
          >
            <Pencil size={17} />
            Edit Profile
          </button>
        ) : (
          <button
            onClick={handleSave}
            className="flex items-center gap-2 rounded-lg bg-[#5B3DF5] px-5 py-3 text-sm font-medium text-white hover:bg-[#4B30D4]"
          >
            <Save size={17} />
            Save Changes
          </button>
        )}
      </div>

      {/* Company Header Card */}
      <div className="mb-6 rounded-2xl border border-gray-200 bg-white p-6">
        <div className="flex items-center gap-5">
          {/* Logo */}
          <div className="flex h-20 w-20 items-center justify-center rounded-2xl bg-[#5B3DF5] text-2xl font-bold text-white">
            {company.name.charAt(0)}
          </div>

          <div>
            <h2 className="text-xl font-bold text-[#111936]">{company.name}</h2>

            <p className="mt-1 text-sm text-gray-500">{company.industry}</p>

            <div className="mt-2 flex items-center gap-2 text-sm text-gray-400">
              <MapPin size={15} />
              {company.location}
            </div>
          </div>
        </div>
      </div>

      {/* Company Information */}
      <div className="rounded-2xl border border-gray-200 bg-white p-8">
        <h2 className="mb-6 text-lg font-semibold text-[#111936]">
          Company Information
        </h2>

        <div className="grid gap-6 md:grid-cols-2">
          {/* Company Name */}
          <div>
            <label className="mb-2 block text-sm font-medium text-gray-700">
              Company Name
            </label>

            <div className="relative">
              <Building2
                size={17}
                className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
              />

              <input
                type="text"
                name="name"
                value={company.name}
                onChange={handleChange}
                disabled={!editing}
                className="w-full rounded-lg border border-gray-200 py-3 pl-11 pr-4 text-sm outline-none disabled:bg-gray-50 disabled:text-gray-500 focus:border-[#5B3DF5]"
              />
            </div>
          </div>

          {/* Industry */}
          <div>
            <label className="mb-2 block text-sm font-medium text-gray-700">
              Industry
            </label>

            <select
              name="industry"
              value={company.industry}
              onChange={handleChange}
              disabled={!editing}
              className="w-full rounded-lg border border-gray-200 bg-white px-4 py-3 text-sm outline-none disabled:bg-gray-50 disabled:text-gray-500 focus:border-[#5B3DF5]"
            >
              <option>Technology</option>
              <option>Finance</option>
              <option>Healthcare</option>
              <option>Education</option>
              <option>Marketing</option>
              <option>Engineering</option>
              <option>Retail</option>
            </select>
          </div>

          {/* Location */}
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
                value={company.location}
                onChange={handleChange}
                disabled={!editing}
                className="w-full rounded-lg border border-gray-200 py-3 pl-11 pr-4 text-sm outline-none disabled:bg-gray-50 disabled:text-gray-500 focus:border-[#5B3DF5]"
              />
            </div>
          </div>

          {/* Website */}
          <div>
            <label className="mb-2 block text-sm font-medium text-gray-700">
              Website
            </label>

            <div className="relative">
              <Globe
                size={17}
                className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
              />

              <input
                type="text"
                name="website"
                value={company.website}
                onChange={handleChange}
                disabled={!editing}
                className="w-full rounded-lg border border-gray-200 py-3 pl-11 pr-4 text-sm outline-none disabled:bg-gray-50 disabled:text-gray-500 focus:border-[#5B3DF5]"
              />
            </div>
          </div>

          {/* Email */}
          <div>
            <label className="mb-2 block text-sm font-medium text-gray-700">
              Email Address
            </label>

            <div className="relative">
              <Mail
                size={17}
                className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
              />

              <input
                type="email"
                name="email"
                value={company.email}
                onChange={handleChange}
                disabled={!editing}
                className="w-full rounded-lg border border-gray-200 py-3 pl-11 pr-4 text-sm outline-none disabled:bg-gray-50 disabled:text-gray-500 focus:border-[#5B3DF5]"
              />
            </div>
          </div>

          {/* Phone */}
          <div>
            <label className="mb-2 block text-sm font-medium text-gray-700">
              Phone Number
            </label>

            <div className="relative">
              <Phone
                size={17}
                className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
              />

              <input
                type="text"
                name="phone"
                value={company.phone}
                onChange={handleChange}
                disabled={!editing}
                className="w-full rounded-lg border border-gray-200 py-3 pl-11 pr-4 text-sm outline-none disabled:bg-gray-50 disabled:text-gray-500 focus:border-[#5B3DF5]"
              />
            </div>
          </div>

          {/* Employees */}
          <div>
            <label className="mb-2 block text-sm font-medium text-gray-700">
              Company Size
            </label>

            <div className="relative">
              <Users
                size={17}
                className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
              />

              <select
                name="employees"
                value={company.employees}
                onChange={handleChange}
                disabled={!editing}
                className="w-full rounded-lg border border-gray-200 bg-white py-3 pl-11 pr-4 text-sm outline-none disabled:bg-gray-50 disabled:text-gray-500 focus:border-[#5B3DF5]"
              >
                <option>1 - 10</option>
                <option>11 - 50</option>
                <option>50 - 100</option>
                <option>100 - 500</option>
                <option>500+</option>
              </select>
            </div>
          </div>
        </div>

        {/* Description */}
        <div className="mt-6">
          <label className="mb-2 block text-sm font-medium text-gray-700">
            Company Description
          </label>

          <textarea
            name="description"
            value={company.description}
            onChange={handleChange}
            disabled={!editing}
            rows={6}
            className="w-full resize-none rounded-lg border border-gray-200 px-4 py-3 text-sm outline-none disabled:bg-gray-50 disabled:text-gray-500 focus:border-[#5B3DF5]"
          />
        </div>
      </div>

      {/* Bottom Stats */}
      <div className="mt-6 grid gap-5 md:grid-cols-3">
        <div className="rounded-xl border border-gray-200 bg-white p-6">
          <p className="text-sm text-gray-400">Active Jobs</p>

          <h3 className="mt-2 text-2xl font-bold text-[#111936]">20</h3>
        </div>

        <div className="rounded-xl border border-gray-200 bg-white p-6">
          <p className="text-sm text-gray-400">Total Applicants</p>

          <h3 className="mt-2 text-2xl font-bold text-[#111936]">128</h3>
        </div>

        <div className="rounded-xl border border-gray-200 bg-white p-6">
          <p className="text-sm text-gray-400">Employees</p>

          <h3 className="mt-2 text-2xl font-bold text-[#111936]">76</h3>
        </div>
      </div>
    </div>
  );
}

import {
  BriefcaseBusiness,
  Users,
  Clock3,
  CheckCircle2,
  Bell,
  Plus,
} from "lucide-react";

import EmployerSidebar from "../../components/employer/EmployerSidebar";
import StatCard from "../../components/employer/StatsCard";
import RecentApplicants from "../../components/employer/RecentApplicants";
import RecentJobs from "../../components/employer/RecentJobs";

import { useEffect, useState } from "react";
import { getEmployerDashboard } from "../../api/axios.js";

export default function EmployerDashboard() {
  const [dashboard, setDashboard] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadDashboard() {
      try {
        const data = await getEmployerDashboard();
        setDashboard(data);
      } catch (error) {
        console.error("Failed to load dashboard:", error);
      } finally {
        setLoading(false);
      }
    }

    loadDashboard();
  }, []);

  if (loading) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <p className="text-slate-500">Loading dashboard...</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#f8f9fc]">
      <EmployerSidebar />

      {/* Main Content */}
      <main className="ml-64 p-8">
        {/* Header */}
        <header className="mb-8 flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-slate-900">
              Welcome back, {dashboard?.companyName}! 👋
            </h1>

            <p className="mt-1 text-slate-500">
              Here's an overview of your hiring activity.
            </p>
          </div>

          <div className="flex items-center gap-4">
            <button className="relative rounded-full p-2 text-slate-600 hover:bg-white">
              <Bell size={22} />

              <span className="absolute right-0 top-0 flex h-4 w-4 items-center justify-center rounded-full bg-red-500 text-[9px] text-white">
                3
              </span>
            </button>

            <button className="flex items-center gap-2 rounded-xl bg-[#5146e5] px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-purple-200 transition hover:bg-[#453bd0]">
              <Plus size={18} />
              Post New Job
            </button>

            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#5146e5] font-semibold text-white">
                AC
              </div>

              <div>
                <p className="text-sm font-semibold text-slate-900">
                  {dashboard?.companyName}
                </p>

                <p className="text-xs text-slate-500">Employer</p>
              </div>
            </div>
          </div>
        </header>

        {/* Statistics */}
        <section className="mb-6 grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-4">
          <StatCard
            icon={BriefcaseBusiness}
            value={dashboard?.stats?.activeJobs || 0}
            title="Active Jobs"
            description="+3 this week"
          />

          <StatCard
            icon={Users}
            value={dashboard?.stats?.totalApplicants || 0}
            title="Total Applicants"
            description="+18 this week"
            iconBg="bg-green-100"
            iconColor="text-green-600"
          />

          <StatCard
            icon={Clock3}
            value={dashboard?.stats?.pendingApplications || 0}
            title="Pending Applications"
            description="+8 this week"
            iconBg="bg-orange-100"
            iconColor="text-orange-500"
          />

          <StatCard
            icon={CheckCircle2}
            value={dashboard?.stats?.hired || 0}
            title="Hired"
            description="+4 this week"
            iconBg="bg-blue-100"
            iconColor="text-blue-600"
          />
        </section>

        {/* Middle Section */}
        <section className="mb-6 grid grid-cols-1 gap-6 xl:grid-cols-3">
          {/* Chart */}
          <div className="rounded-2xl border border-slate-200 bg-white p-6 xl:col-span-2">
            <div className="mb-6 flex items-center justify-between">
              <h2 className="font-semibold text-slate-900">
                Applications Overview
              </h2>

              <select className="rounded-lg border border-slate-200 px-3 py-2 text-sm outline-none">
                <option>This Week</option>
                <option>This Month</option>
                <option>This Year</option>
              </select>
            </div>

            {/* Simple chart */}
            <div className="flex h-64 items-end gap-4 border-b border-slate-100 px-4">
              {(dashboard?.applicationsOverview || []).map((item, index) => (
                <div
                  key={index}
                  className="flex flex-1 flex-col items-center gap-2"
                >
                  <div
                    className="w-full max-w-10 rounded-t-lg bg-[#5146e5]"
                    style={{
                      height: `${Math.max(item.count * 4, 10)}px`,
                    }}
                  />

                  <span className="text-xs text-slate-400">{item.day}</span>
                </div>
              ))}
            </div>

            {/* Chart stats */}
            <div className="mt-5 grid grid-cols-4 gap-3">
              <div className="rounded-xl bg-slate-50 p-3 text-center">
                <p className="text-xs text-slate-500">Total</p>
                <p className="mt-1 text-xl font-bold text-[#5146e5]">
                  {dashboard?.stats?.totalApplicants || 0}
                </p>
              </div>

              <div className="rounded-xl bg-orange-50 p-3 text-center">
                <p className="text-xs text-orange-500">Pending</p>
                <p className="mt-1 text-xl font-bold text-orange-500">
                  {dashboard?.stats?.pendingApplications || 0}
                </p>
              </div>

              <div className="rounded-xl bg-green-50 p-3 text-center">
                <p className="text-xs text-green-600">Shortlisted</p>
                <p className="mt-1 text-xl font-bold text-green-600">
                  {dashboard?.stats?.shortlisted || 0}
                </p>
              </div>

              <div className="rounded-xl bg-red-50 p-3 text-center">
                <p className="text-xs text-red-500">Rejected</p>
                <p className="mt-1 text-xl font-bold text-red-500">
                  {dashboard?.stats?.rejected || 0}
                </p>
              </div>
            </div>
          </div>

          {/* Applicants */}
          <RecentApplicants applicants={dashboard?.recentApplicants || []} />
        </section>

        {/* Bottom Section */}
        <section className="grid grid-cols-1 gap-6 xl:grid-cols-3">
          <div className="xl:col-span-2">
            <RecentJobs jobs={dashboard?.recentJobs || []} />
          </div>

          {/* Applications by status */}
          <div className="rounded-2xl border border-slate-200 bg-white p-6">
            <h2 className="mb-6 font-semibold text-slate-900">
              Applications by Status
            </h2>

            <div className="space-y-5">
              <StatusRow
                name="Pending"
                value={dashboard?.stats?.pendingApplications || 0}
                color="bg-orange-500"
              />

              <StatusRow
                name="Shortlisted"
                value={dashboard?.stats?.shortlisted || 0}
                color="bg-green-500"
              />

              <StatusRow
                name="Rejected"
                value={dashboard?.stats?.rejected || 0}
                color="bg-red-500"
              />

              <StatusRow
                name="Hired"
                value={dashboard?.stats?.hired || 0}
                color="bg-[#5146e5]"
              />
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

function StatusRow({ name, value, color }) {
  return (
    <div>
      <div className="mb-2 flex justify-between text-sm">
        <div className="flex items-center gap-2">
          <span className={`h-2.5 w-2.5 rounded-full ${color}`} />
          <span className="text-slate-600">{name}</span>
        </div>

        <span className="font-semibold text-slate-900">{value}</span>
      </div>

      <div className="h-2 rounded-full bg-slate-100">
        <div
          className={`h-2 rounded-full ${color}`}
          style={{ width: `${Math.min(value * 2, 100)}%` }}
        />
      </div>
    </div>
  );
}

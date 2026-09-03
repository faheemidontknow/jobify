export default function RecentJobs({ jobs = [] }) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white">
      <div className="flex items-center justify-between border-b border-slate-100 p-5">
        <h2 className="font-semibold text-slate-900">Recent Jobs</h2>

        <button className="text-sm font-medium text-[#5146e5]">
          View All Jobs
        </button>
      </div>

      <div className="divide-y divide-slate-100">
        {jobs.map((job) => (
          <div key={job.id} className="flex items-center justify-between p-4">
            <div>
              <h3 className="text-sm font-semibold text-slate-900">
                {job.title}
              </h3>

              <p className="mt-1 text-xs text-slate-500">
                {job.location} • {job.jobType}
              </p>
            </div>

            <div className="hidden text-center sm:block">
              <p className="text-sm font-semibold text-slate-900">
                {job.applicationCount}
              </p>

              <p className="text-xs text-slate-400">Applications</p>
            </div>

            <span className="rounded-full bg-green-50 px-3 py-1 text-xs font-medium text-green-600">
              {job.status}
            </span>

            <button className="text-sm font-medium text-[#5146e5]">View</button>
          </div>
        ))}
      </div>
    </div>
  );
}

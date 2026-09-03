export default function RecentApplicants({ applicants = [] }) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white">
      <div className="flex items-center justify-between border-b border-slate-100 p-5">
        <h2 className="font-semibold text-slate-900">Recent Applicants</h2>

        <button className="text-sm font-medium text-[#5146e5]">View All</button>
      </div>

      <div className="divide-y divide-slate-100">
        {applicants.map((applicant) => (
          <div
            key={applicant.id}
            className="flex items-center justify-between p-4"
          >
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-100 font-semibold text-slate-600">
                {applicant.name?.charAt(0)}
              </div>

              <div>
                <p className="text-sm font-semibold text-slate-900">
                  {applicant.name}
                </p>

                <p className="text-xs text-slate-500">{applicant.jobTitle}</p>
              </div>
            </div>

            <div className="text-right">
              <span
                className={`rounded-full px-3 py-1 text-xs font-medium ${
                  applicant.status === "accepted"
                    ? "bg-green-50 text-green-600"
                    : applicant.status === "rejected"
                      ? "bg-red-50 text-red-500"
                      : "bg-orange-50 text-orange-500"
                }`}
              >
                {applicant.status}
              </span>

              <p className="mt-1 text-[11px] text-slate-400">
                {applicant.createdAt}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

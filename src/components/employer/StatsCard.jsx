export default function StatCard({
  icon: Icon,
  value,
  title,
  description,
  iconBg = "bg-purple-100",
  iconColor = "text-[#5146e5]",
}) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
      <div className="flex items-center gap-4">
        <div
          className={`flex h-14 w-14 items-center justify-center rounded-2xl ${iconBg} ${iconColor}`}
        >
          <Icon size={25} />
        </div>

        <div>
          <h3 className="text-2xl font-bold text-slate-900">{value}</h3>

          <p className="text-sm font-medium text-slate-700">{title}</p>

          <p className="mt-1 text-xs text-green-600">{description}</p>
        </div>
      </div>
    </div>
  );
}

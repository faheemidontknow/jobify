import { CalendarDays, Building2, MessageSquare, Settings } from "lucide-react";

const sectionConfig = {
  interviews: {
    title: "Interviews",
    description: "Schedule and manage candidate interviews.",
    icon: CalendarDays,
  },
  messages: {
    title: "Messages",
    description: "Communicate with candidates and your hiring team.",
    icon: MessageSquare,
  },
  profile: {
    title: "Company Profile",
    description: "Manage your company information and public profile.",
    icon: Building2,
  },
  settings: {
    title: "Settings",
    description: "Manage your employer account preferences.",
    icon: Settings,
  },
};

export default function EmployerSection({ section }) {
  const content = sectionConfig[section];
  const Icon = content.icon;

  return (
    <section className="min-w-0">
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-[#111936]">{content.title}</h1>
        <p className="mt-1 text-sm text-gray-500">{content.description}</p>
      </div>

      <div className="flex min-h-64 items-center justify-center rounded-2xl border border-gray-200 bg-white p-8">
        <div className="text-center">
          <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-[#F0EDFF]">
            <Icon size={24} className="text-[#5B3DF5]" />
          </div>
          <h2 className="font-semibold text-[#111936]">{content.title}</h2>
          <p className="mt-1 text-sm text-gray-400">
            This section is ready to be configured.
          </p>
        </div>
      </div>
    </section>
  );
}

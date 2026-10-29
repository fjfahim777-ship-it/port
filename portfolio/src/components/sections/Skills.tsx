import { Code2, Database, LayoutTemplate, Sparkles, Wrench } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import Badge from "@/components/ui/Badge";
import Section from "@/components/ui/Section";
import { skillGroups } from "@/data/portfolio";

// Simple lookup: group title -> icon
const groupIcons: Record<string, LucideIcon> = {
  Languages: Code2,
  "Frontend Development": LayoutTemplate,
  "Backend and Database": Database,
  "APIs and AI": Sparkles,
  "Tools and Platforms": Wrench,
};

export default function Skills() {
  return (
    <Section id="skills" eyebrow="Skills" title="Technologies I work with">
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {skillGroups.map((group) => {
          const Icon = groupIcons[group.title] ?? Code2;
          return (
            <div key={group.title} className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
              <h3 className="flex items-center gap-2 text-lg font-semibold text-slate-900">
                <Icon size={20} className="text-indigo-600" aria-hidden="true" />
                {group.title}
              </h3>
              <ul className="mt-4 flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <li key={item}>
                    <Badge>{item}</Badge>
                  </li>
                ))}
              </ul>
            </div>
          );
        })}
      </div>
    </Section>
  );
}

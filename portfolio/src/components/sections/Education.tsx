import { GraduationCap } from "lucide-react";
import Section from "@/components/ui/Section";
import { education } from "@/data/portfolio";

export default function Education() {
  return (
    <Section id="education" eyebrow="Education" title="Academic background" tinted>
      <ol className="space-y-6 border-l-2 border-indigo-200 pl-6">
        {education.map((item) => (
          <li key={item.institution} className="relative">
            <span className="absolute -left-[2.15rem] top-1 flex h-7 w-7 items-center justify-center rounded-full bg-indigo-600 text-white">
              <GraduationCap size={16} aria-hidden="true" />
            </span>
            <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
              <h3 className="text-lg font-semibold text-slate-900">{item.institution}</h3>
              <p className="mt-1 font-medium text-indigo-700">{item.title}</p>
              <ul className="mt-3 space-y-1 text-slate-600">
                {item.details.map((detail) => (
                  <li key={detail}>{detail}</li>
                ))}
              </ul>
            </div>
          </li>
        ))}
      </ol>
    </Section>
  );
}

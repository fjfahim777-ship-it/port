import { Trophy } from "lucide-react";
import ButtonLink from "@/components/ui/ButtonLink";
import Section from "@/components/ui/Section";
import { hackathon } from "@/data/portfolio";

export default function Achievements() {
  const facts = [
    ["Result", hackathon.result],
    ["Category", hackathon.category],
    ["Team", hackathon.team],
    ["Role", hackathon.role],
    ["Project", hackathon.project],
  ];

  return (
    <Section id="achievements" eyebrow="Achievements" title="Hackathon recognition" tinted>
      <div className="rounded-xl border border-amber-200 bg-white p-6 shadow-sm sm:p-8">
        <div className="flex items-start gap-4">
          <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-amber-100 text-amber-700">
            <Trophy size={24} aria-hidden="true" />
          </span>
          <div>
            <h3 className="text-xl font-semibold text-slate-900">{hackathon.name}</h3>
            <p className="mt-2 max-w-2xl leading-7 text-slate-600">{hackathon.story}</p>
          </div>
        </div>
        <dl className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {facts.map(([label, value]) => (
            <div key={label} className="rounded-lg bg-slate-50 p-4">
              <dt className="text-xs font-semibold uppercase tracking-wider text-slate-500">{label}</dt>
              <dd className="mt-1 font-medium text-slate-900">{value}</dd>
            </div>
          ))}
        </dl>
        <div className="mt-6">
          <ButtonLink href={`/projects/${hackathon.projectSlug}`} variant="secondary">
            View Anti-Kuddus Protocol
          </ButtonLink>
        </div>
      </div>
    </Section>
  );
}

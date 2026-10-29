import { Github, Linkedin, Mail, Phone, Twitter } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import Section from "@/components/ui/Section";
import { person } from "@/data/portfolio";

interface ContactItem {
  label: string;
  value: string;
  href: string;
  Icon: LucideIcon;
  external: boolean;
}

const items: ContactItem[] = [
  { label: "Email", value: person.email, href: `mailto:${person.email}`, Icon: Mail, external: false },
  { label: "Phone", value: person.phone, href: person.phoneLink, Icon: Phone, external: false },
  { label: "GitHub", value: "fjfahim74", href: person.github, Icon: Github, external: true },
  { label: "LinkedIn", value: "fjfahim74", href: person.linkedin, Icon: Linkedin, external: true },
  { label: "X", value: "@FJFahim3", href: person.x, Icon: Twitter, external: true },
];

export default function Contact() {
  return (
    <Section id="contact" eyebrow="Contact" title="Let's connect">
      <p className="max-w-2xl text-lg leading-8 text-slate-600">
        I&apos;d be happy to connect about development, collaboration, or interesting projects. Feel free to reach out through any of these.
      </p>
      <ul className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {items.map(({ label, value, href, Icon, external }) => (
          <li key={label}>
            <a
              href={href}
              {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
              className="flex items-center gap-4 rounded-xl border border-slate-200 bg-white p-5 shadow-sm transition-colors hover:border-indigo-300 hover:bg-indigo-50"
            >
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-indigo-50 text-indigo-600">
                <Icon size={22} aria-hidden="true" />
              </span>
              <span className="min-w-0">
                <span className="block text-sm text-slate-500">{label}</span>
                <span className="block break-words font-medium text-slate-900">{value}</span>
              </span>
            </a>
          </li>
        ))}
      </ul>
    </Section>
  );
}

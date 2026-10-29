import { Github, Linkedin, Twitter } from "lucide-react";
import { person } from "@/data/portfolio";

const socials = [
  { label: "GitHub", href: person.github, Icon: Github },
  { label: "LinkedIn", href: person.linkedin, Icon: Linkedin },
  { label: "X", href: person.x, Icon: Twitter },
];

export default function Footer() {
  // Year is calculated when the page is built, so it stays current with each deployment
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-slate-200 bg-white">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-4 py-8 text-center sm:flex-row sm:px-6 sm:text-left lg:px-8">
        <div>
          <p className="font-semibold text-slate-900">{person.name}</p>
          <p className="text-sm text-slate-600">Learning, building, and improving one project at a time.</p>
        </div>
        <ul className="flex items-center gap-2">
          {socials.map(({ label, href, Icon }) => (
            <li key={label}>
              <a
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="inline-flex h-10 w-10 items-center justify-center rounded-md text-slate-600 hover:bg-indigo-50 hover:text-indigo-700"
              >
                <Icon size={20} aria-hidden="true" />
              </a>
            </li>
          ))}
        </ul>
        <p className="text-sm text-slate-500">© {year} {person.name}. All rights reserved.</p>
      </div>
    </footer>
  );
}

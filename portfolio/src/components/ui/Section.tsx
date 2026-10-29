import type { ReactNode } from "react";

interface SectionProps {
  id: string;
  title: string;
  eyebrow?: string;
  tinted?: boolean;
  children: ReactNode;
}

// Shared wrapper: consistent spacing, heading and anchor offset for the navbar.
export default function Section({ id, title, eyebrow, tinted = false, children }: SectionProps) {
  return (
    <section id={id} className={`scroll-mt-16 py-20 ${tinted ? "bg-slate-50" : "bg-white"}`}>
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10">
          {eyebrow && (
            <p className="mb-2 text-sm font-semibold uppercase tracking-wider text-indigo-600">
              {eyebrow}
            </p>
          )}
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">{title}</h2>
        </div>
        {children}
      </div>
    </section>
  );
}

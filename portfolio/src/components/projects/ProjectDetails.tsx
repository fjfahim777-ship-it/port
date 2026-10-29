import Link from "next/link";
import { ArrowLeft, ExternalLink, Github, Trophy } from "lucide-react";
import Badge from "@/components/ui/Badge";
import ButtonLink from "@/components/ui/ButtonLink";
import ProjectImage from "./ProjectImage";
import type { Project } from "@/types/project";

interface ProjectDetailsProps {
  project: Project;
  otherProjects: Project[];
}

function BulletList({ items }: { items: string[] }) {
  return (
    <ul className="list-disc space-y-2 pl-5 text-slate-600 marker:text-indigo-400">
      {items.map((item) => (
        <li key={item} className="leading-7">
          {item}
        </li>
      ))}
    </ul>
  );
}

function DetailBlock({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
      <h2 className="mb-3 text-xl font-semibold text-slate-900">{title}</h2>
      {children}
    </section>
  );
}

export default function ProjectDetails({ project, otherProjects }: ProjectDetailsProps) {
  return (
    <article className="mx-auto max-w-5xl px-4 py-10 sm:px-6 lg:px-8">
      {/* Way back */}
      <nav aria-label="Project navigation" className="mb-6 flex flex-wrap items-center gap-x-6 gap-y-2 text-sm font-medium">
        <Link href="/#projects" className="inline-flex items-center gap-1 text-indigo-700 hover:underline">
          <ArrowLeft size={16} aria-hidden="true" /> Back to Projects
        </Link>
        <Link href="/" className="text-slate-600 hover:underline">
          Home
        </Link>
      </nav>

      <header>
        <h1 className="text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
          {project.name}
          {project.nameBn && <span className="ml-3 text-2xl font-normal text-slate-500">{project.nameBn}</span>}
        </h1>
        <p className="mt-4 max-w-3xl text-lg leading-8 text-slate-600">{project.description}</p>

        {project.award && (
          <p className="mt-5 inline-flex items-center gap-2 rounded-lg border border-amber-200 bg-amber-50 px-4 py-2 text-sm text-amber-900">
            <Trophy size={18} aria-hidden="true" />
            <span>
              <strong>{project.award.title}</strong> · {project.award.details}
            </span>
          </p>
        )}

        <div className="mt-6 flex flex-wrap gap-3">
          <ButtonLink href={project.liveUrl} external>
            Live Website <ExternalLink size={16} aria-hidden="true" />
          </ButtonLink>
          <ButtonLink href={project.repoUrl} external variant="secondary">
            <Github size={16} aria-hidden="true" /> GitHub Repository
          </ButtonLink>
        </div>
      </header>

      <div className="mt-10 overflow-hidden rounded-xl border border-slate-200 shadow-sm">
        <ProjectImage project={project} priority />
      </div>

      <div className="mt-10 grid gap-6 md:grid-cols-2">
        <div className="md:col-span-2">
          <DetailBlock title="Project overview">
            <p className="leading-7 text-slate-600">{project.overview}</p>
          </DetailBlock>
        </div>

        <DetailBlock title="Problem or purpose">
          <p className="leading-7 text-slate-600">{project.purpose}</p>
        </DetailBlock>

        <DetailBlock title="My role and contributions">
          <p className="leading-7 text-slate-600">{project.role}</p>
        </DetailBlock>

        <DetailBlock title="Key features">
          <BulletList items={project.features} />
        </DetailBlock>

        <DetailBlock title="Technology stack">
          <ul className="flex flex-wrap gap-2">
            {project.technologies.map((tech) => (
              <li key={tech}>
                <Badge>{tech}</Badge>
              </li>
            ))}
          </ul>
        </DetailBlock>

        <DetailBlock title="Development challenges and areas explored">
          <BulletList items={project.challenges} />
        </DetailBlock>

        <DetailBlock title="Learning outcomes">
          <BulletList items={project.learningOutcomes} />
        </DetailBlock>

        <div className="md:col-span-2">
          <DetailBlock title="Potential improvements and future plans">
            <BulletList items={project.futureImprovements} />
          </DetailBlock>
        </div>
      </div>

      {/* Links to the other projects */}
      <section aria-labelledby="more-projects" className="mt-12 border-t border-slate-200 pt-8">
        <h2 id="more-projects" className="text-xl font-semibold text-slate-900">
          More projects
        </h2>
        <ul className="mt-4 grid gap-4 sm:grid-cols-2">
          {otherProjects.map((other) => (
            <li key={other.slug}>
              <Link
                href={`/projects/${other.slug}`}
                className="block rounded-xl border border-slate-200 bg-white p-5 transition-colors hover:border-indigo-300 hover:bg-indigo-50"
              >
                <span className="font-semibold text-slate-900">{other.name}</span>
                <span className="mt-1 block text-sm text-slate-600">{other.placeholderLabel}</span>
              </Link>
            </li>
          ))}
        </ul>
      </section>
    </article>
  );
}

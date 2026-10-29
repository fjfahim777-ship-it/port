import Link from "next/link";
import { ExternalLink } from "lucide-react";
import Badge from "@/components/ui/Badge";
import ButtonLink from "@/components/ui/ButtonLink";
import ProjectImage from "./ProjectImage";
import type { Project } from "@/types/project";

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="flex h-full flex-col overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm transition-shadow hover:shadow-md">
      <ProjectImage project={project} />
      <div className="flex flex-1 flex-col p-6">
        <h3 className="text-xl font-semibold text-slate-900">
          <Link href={`/projects/${project.slug}`} className="hover:text-indigo-700">
            {project.name}
          </Link>
          {project.nameBn && <span className="ml-2 text-base font-normal text-slate-500">{project.nameBn}</span>}
        </h3>
        <p className="mt-3 text-sm leading-6 text-slate-600">{project.description}</p>
        <ul className="mt-4 flex flex-wrap gap-2" aria-label={`${project.name} technologies`}>
          {project.technologies.map((tech) => (
            <li key={tech}>
              <Badge>{tech}</Badge>
            </li>
          ))}
        </ul>
        <div className="mt-6 flex flex-wrap gap-3 pt-2 sm:mt-auto">
          <ButtonLink href={`/projects/${project.slug}`}>View Details</ButtonLink>
          <ButtonLink href={project.liveUrl} external variant="secondary">
            Live Project <ExternalLink size={16} aria-hidden="true" />
          </ButtonLink>
        </div>
      </div>
    </article>
  );
}

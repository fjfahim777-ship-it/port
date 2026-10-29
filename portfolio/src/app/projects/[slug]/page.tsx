import type { Metadata } from "next";
import { notFound } from "next/navigation";
import ProjectDetails from "@/components/projects/ProjectDetails";
import { getProject, projects } from "@/data/projects";

// Only the three known slugs exist; anything else becomes a 404.
export const dynamicParams = false;

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) return { title: "Project not found" };

  return {
    title: project.name,
    description: project.description,
    openGraph: { title: `${project.name} | Fatiuzzaman Fahim`, description: project.description },
  };
}

export default async function ProjectPage({ params }: PageProps) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();

  const otherProjects = projects.filter((item) => item.slug !== project.slug);
  return <ProjectDetails project={project} otherProjects={otherProjects} />;
}

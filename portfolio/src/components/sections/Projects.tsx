import ProjectCard from "@/components/projects/ProjectCard";
import Section from "@/components/ui/Section";
import { projects } from "@/data/projects";

export default function Projects() {
  return (
    <Section id="projects" eyebrow="Projects" title="Things I've built">
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </div>
    </Section>
  );
}

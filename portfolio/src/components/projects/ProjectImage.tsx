import Image from "next/image";
import { publicImageExists } from "@/lib/images";
import type { Project } from "@/types/project";

interface ProjectImageProps {
  project: Project;
  priority?: boolean;
}

// Shows the real screenshot if the file exists in /public, otherwise a CSS placeholder.
export default function ProjectImage({ project, priority = false }: ProjectImageProps) {
  if (publicImageExists(project.imageSrc)) {
    return (
      <div className="relative aspect-[16/10] w-full overflow-hidden bg-slate-100">
        <Image
          src={project.imageSrc}
          alt={project.imageAlt}
          fill
          priority={priority}
          sizes="(min-width: 1024px) 50vw, 100vw"
          className="object-cover object-top"
        />
      </div>
    );
  }

  return (
    <div
      role="img"
      aria-label={`${project.name} preview placeholder`}
      className={`flex aspect-[16/10] w-full flex-col overflow-hidden ${project.placeholderTone}`}
    >
      {/* Fake browser bar */}
      <div className="flex items-center gap-1.5 border-b border-black/5 bg-white/60 px-3 py-2">
        <span className="h-2.5 w-2.5 rounded-full bg-slate-300" />
        <span className="h-2.5 w-2.5 rounded-full bg-slate-300" />
        <span className="h-2.5 w-2.5 rounded-full bg-slate-300" />
      </div>
      <div className="flex flex-1 flex-col items-center justify-center gap-2 px-4 text-center">
        <span className="text-2xl font-bold sm:text-3xl">{project.name}</span>
        <span className="rounded-full border border-current/20 bg-white/70 px-3 py-1 text-xs font-medium">
          {project.placeholderLabel}
        </span>
      </div>
    </div>
  );
}

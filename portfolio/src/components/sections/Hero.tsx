import Image from "next/image";
import { ChevronDown, Github, Linkedin } from "lucide-react";
import ButtonLink from "@/components/ui/ButtonLink";
import { person } from "@/data/portfolio";
import { publicImageExists } from "@/lib/images";

function ProfilePhoto() {
  if (publicImageExists(person.photoSrc)) {
    return (
      <Image
        src={person.photoSrc}
        alt={`Portrait of ${person.name}`}
        width={400}
        height={400}
        priority
        className="h-full w-full object-cover"
      />
    );
  }
  // Fallback shown until public/images/profile.jpg is added
  return (
    <div role="img" aria-label={`${person.name} profile placeholder`} className="flex h-full w-full items-center justify-center bg-indigo-50 text-6xl font-bold text-indigo-600">
      FF
    </div>
  );
}

export default function Hero() {
  return (
    <section id="home" className="scroll-mt-16 bg-white pt-16 pb-12 sm:pt-24">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-4 sm:px-6 md:grid-cols-[1fr_auto] lg:px-8">
        <div>
          <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-indigo-600">
            {person.designation} · {person.status}
          </p>
          <h1 className="text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">{person.name}</h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">{person.intro}</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <ButtonLink href="/#projects">Explore My Work</ButtonLink>
            <ButtonLink href={person.resume} external variant="secondary">
              View Resume
            </ButtonLink>
          </div>
          <ul className="mt-6 flex items-center gap-2">
            <li>
              <a href={person.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub profile" className="inline-flex h-10 w-10 items-center justify-center rounded-md text-slate-600 hover:bg-indigo-50 hover:text-indigo-700">
                <Github size={22} aria-hidden="true" />
              </a>
            </li>
            <li>
              <a href={person.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn profile" className="inline-flex h-10 w-10 items-center justify-center rounded-md text-slate-600 hover:bg-indigo-50 hover:text-indigo-700">
                <Linkedin size={22} aria-hidden="true" />
              </a>
            </li>
          </ul>
        </div>

        <div className="mx-auto h-56 w-56 overflow-hidden rounded-2xl border border-slate-200 shadow-sm sm:h-72 sm:w-72 md:mx-0">
          <ProfilePhoto />
        </div>
      </div>

      <div className="mt-12 flex justify-center">
        <a href="/#about" aria-label="Scroll to About section" className="text-slate-400 hover:text-indigo-600">
          <ChevronDown size={28} aria-hidden="true" className="motion-safe:animate-bounce" />
        </a>
      </div>
    </section>
  );
}

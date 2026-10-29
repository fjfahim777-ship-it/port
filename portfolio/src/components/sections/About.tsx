import Section from "@/components/ui/Section";
import { aboutParagraphs } from "@/data/portfolio";

export default function About() {
  return (
    <Section id="about" eyebrow="About" title="A bit about me" tinted>
      <div className="max-w-3xl space-y-4 text-lg leading-8 text-slate-600">
        {aboutParagraphs.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
      </div>
    </Section>
  );
}

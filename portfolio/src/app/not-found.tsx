import ButtonLink from "@/components/ui/ButtonLink";

export default function NotFound() {
  return (
    <section className="mx-auto max-w-2xl px-4 py-24 text-center">
      <p className="text-sm font-semibold uppercase tracking-wider text-indigo-600">404</p>
      <h1 className="mt-2 text-3xl font-bold text-slate-900">Page not found</h1>
      <p className="mt-4 text-slate-600">That page or project does not exist. Try heading back to the homepage or the projects list.</p>
      <div className="mt-8 flex justify-center gap-3">
        <ButtonLink href="/">Go Home</ButtonLink>
        <ButtonLink href="/#projects" variant="secondary">
          View Projects
        </ButtonLink>
      </div>
    </section>
  );
}

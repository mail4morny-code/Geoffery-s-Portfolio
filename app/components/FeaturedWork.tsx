import Image from "next/image";
import Link from "next/link";
import { SectionHeading } from "./SectionHeading";
import { Reveal } from "./Reveal";
import { featuredWork } from "../data/cv";

export function FeaturedWork() {
  return (
    <section id="work" className="mx-auto w-full max-w-6xl px-6 py-20">
      <Reveal>
        <SectionHeading
          eyebrow="Selected Work"
          title="A short list of featured initiatives."
          subtitle={<p>Each project includes a clear path to a full case study.</p>}
        />
      </Reveal>

      <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {featuredWork.map((project) => (
          <Reveal key={project.id}>
            <div className="group flex h-full flex-col overflow-hidden rounded-[22px] border border-[color:var(--border)] bg-[color:var(--card)] transition hover:-translate-y-1">
              <div className="relative aspect-[4/3] overflow-hidden bg-[#e9e7e0]">
                <Image
                  src={project.cover}
                  alt={`${project.name} project image`}
                  fill
                  className={`object-cover ${project.coverPosition ?? "object-top"} transition duration-500 group-hover:scale-[1.03]`}
                />
              </div>
              <div className="flex flex-1 flex-col gap-4 p-6">
                <p className="text-xs uppercase tracking-[0.2em] text-[color:var(--muted)]">
                  {project.role}
                </p>
                <h3 className="text-2xl font-semibold text-[color:var(--text)]">
                  {project.name}
                </h3>
                <p className="text-base text-[color:var(--muted)]">
                  {project.summary}
                </p>
                <div className="flex flex-wrap gap-2 text-[10px] uppercase tracking-[0.2em] text-[color:var(--muted)]">
                  {project.tags.slice(0, 3).map((tag) => (
                    <span key={tag}>{tag}</span>
                  ))}
                </div>
                <Link
                  href={`/case-studies/${project.id}`}
                  className="mt-auto inline-flex w-fit items-center justify-center rounded-full bg-black px-5 py-2 text-xs uppercase tracking-[0.2em] text-white transition hover:-translate-y-0.5"
                >
                  View Case Study
                </Link>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

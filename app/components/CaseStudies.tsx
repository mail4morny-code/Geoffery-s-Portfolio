import Image from "next/image";
import { SectionHeading } from "./SectionHeading";
import { Reveal } from "./Reveal";
import { caseStudies } from "../data/cv";

const strategyTabs = [
  {
    year: "2025",
    title: "Strategy and Tactics",
    body:
      "Placeholder: add 2025 strategy, content pillars, distribution plan, and performance notes.",
  },
  {
    year: "2026",
    title: "Strategy and Tactics",
    body:
      "Placeholder: add 2026 strategy updates, campaign experimentation, and results summaries.",
  },
];

export function CaseStudies() {
  return (
    <section id="case-studies" className="mx-auto w-full max-w-6xl px-6 py-20">
      <Reveal>
        <SectionHeading
          eyebrow="Case Studies"
          title="Editorial layouts with clear placeholders."
          subtitle={<p>Replace each placeholder with campaign visuals and metrics.</p>}
        />
      </Reveal>

      <div className="mt-12 flex flex-col gap-16">
        {caseStudies.map((caseStudy) => (
          <Reveal key={caseStudy.id}>
            <div id={`case-${caseStudy.id}`} className="border-t border-[color:var(--border)] pt-10">
              <div className="flex flex-wrap items-baseline justify-between gap-4">
                <div>
                  <p className="text-xs uppercase tracking-[0.2em] text-[color:var(--muted)]">
                    Case Study
                  </p>
                  <h3 className="mt-2 text-3xl font-semibold text-[color:var(--text)]">
                    {caseStudy.title}
                  </h3>
                </div>
                <p className="text-sm text-[color:var(--muted)]">Role: {caseStudy.role}</p>
              </div>

              <div className="mt-6 grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
                <div className="space-y-6">
                  <div>
                    <h4 className="text-xs uppercase tracking-[0.2em] text-[color:var(--muted)]">
                      Overview
                    </h4>
                    <p className="mt-2 text-base text-[color:var(--text)]">
                      {caseStudy.overview}
                    </p>
                  </div>
                  {caseStudy.writeup ? (
                    <div>
                      <h4 className="text-xs uppercase tracking-[0.2em] text-[color:var(--muted)]">
                        Case Study
                      </h4>
                      <p className="mt-2 text-base text-[color:var(--muted)]">
                        {caseStudy.writeup}
                      </p>
                    </div>
                  ) : null}
                  <div>
                    <h4 className="text-xs uppercase tracking-[0.2em] text-[color:var(--muted)]">
                      What I Did
                    </h4>
                    <ul className="mt-3 list-disc space-y-2 pl-5 text-sm text-[color:var(--muted)]">
                      {caseStudy.responsibilities.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-xs uppercase tracking-[0.2em] text-[color:var(--muted)]">
                      Strategy / Approach
                    </h4>
                    <p className="mt-2 text-sm text-[color:var(--muted)]">
                      {caseStudy.strategy}
                    </p>
                  </div>
                  <div>
                    <h4 className="text-xs uppercase tracking-[0.2em] text-[color:var(--muted)]">
                      Outcomes / Impact
                    </h4>
                    <p className="mt-2 text-sm text-[color:var(--muted)]">
                      {caseStudy.outcomes}
                    </p>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="grid gap-4 sm:grid-cols-2">
                    {caseStudy.gallery.map((image, index) => (
                      <div
                        key={`${caseStudy.id}-${image}-${index}`}
                        className="relative aspect-[4/3] overflow-hidden rounded-[18px] border border-[color:var(--border)] bg-[#e9e7e0]"
                      >
                        <Image
                          src={image}
                          alt="Gallery image"
                          fill
                          className="object-cover object-top"
                        />
                      </div>
                    ))}
                  </div>
                  <p className="text-xs text-[color:var(--muted)]">
                    {caseStudy.placeholderNote ??
                      "More visuals can be added here later. Replace placeholder images with real campaign assets."}
                  </p>
                </div>
              </div>

              {caseStudy.hasStrategyTabs ? (
                <div className="mt-6 grid gap-4 md:grid-cols-2">
                  {strategyTabs.map((tab) => (
                    <details
                      key={tab.year}
                      className="group rounded-[18px] border border-[color:var(--border)] bg-[color:var(--card)] p-4"
                    >
                      <summary className="cursor-pointer text-sm font-semibold text-[color:var(--text)]">
                        {tab.year} {tab.title}
                      </summary>
                      <p className="mt-3 text-sm text-[color:var(--muted)]">
                        {tab.body}
                      </p>
                    </details>
                  ))}
                </div>
              ) : null}
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

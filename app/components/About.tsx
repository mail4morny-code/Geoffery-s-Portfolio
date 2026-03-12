import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";
import { profile } from "../data/cv";

const valuePillars = [
  {
    title: "Strategy",
    detail: "Social media strategy, branding strategy, performance analysis.",
  },
  {
    title: "Content",
    detail: "Content creation, storytelling, campaign planning, promotional media.",
  },
  {
    title: "Media / PR",
    detail: "Public relations, media outreach, community engagement.",
  },
];

export function About() {
  return (
    <section id="about" className="mx-auto w-full max-w-5xl px-6 py-20">
      <Reveal>
        <SectionHeading
          eyebrow="About"
          title="Focused on trust, clarity, and momentum in digital communication."
          subtitle={<p>{profile.summary}</p>}
        />
      </Reveal>

      <div className="mt-10 grid gap-8 md:grid-cols-3">
        {valuePillars.map((pillar) => (
          <Reveal key={pillar.title}>
            <div className="border-t border-[color:var(--border)] pt-6">
              <h3 className="text-base font-semibold text-[color:var(--text)]">
                {pillar.title}
              </h3>
              <p className="mt-2 text-sm text-[color:var(--muted)]">
                {pillar.detail}
              </p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

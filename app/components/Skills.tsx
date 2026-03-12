import { SectionHeading } from "./SectionHeading";
import { Reveal } from "./Reveal";
import { skills } from "../data/cv";

const keepGroups = ["Strategy", "Content", "Media / Tools"];

export function Skills() {
  const trimmed = skills.filter((group) => keepGroups.includes(group.category));

  return (
    <section id="skills" className="mx-auto w-full max-w-5xl px-6 py-20">
      <Reveal>
        <SectionHeading
          eyebrow="Skills"
          title="Capabilities"
          subtitle={<p>Focused list of core strengths.</p>}
        />
      </Reveal>

      <div className="mt-10 space-y-8">
        {trimmed.map((group) => (
          <Reveal key={group.category}>
            <div className="grid gap-3 border-t border-[color:var(--border)] pt-6 md:grid-cols-[160px_1fr]">
              <h3 className="text-xs uppercase tracking-[0.2em] text-[color:var(--muted)]">
                {group.category}
              </h3>
              <ul className="list-disc space-y-2 pl-5 text-base text-[color:var(--muted)]">
                {group.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

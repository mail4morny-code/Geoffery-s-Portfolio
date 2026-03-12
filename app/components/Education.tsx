import { SectionHeading } from "./SectionHeading";
import { Reveal } from "./Reveal";
import { certifications, education } from "../data/cv";

export function Education() {
  return (
    <section id="education" className="mx-auto w-full max-w-5xl px-6 py-20">
      <Reveal>
        <SectionHeading
          eyebrow="Education"
          title="Education and Certifications"
          subtitle={<p>Academic and professional development.</p>}
        />
      </Reveal>

      <div className="mt-10 grid gap-10 lg:grid-cols-2">
        <div className="space-y-8">
          {education.map((item) => (
            <Reveal key={item.credential}>
              <div className="border-t border-[color:var(--border)] pt-6">
                <div className="flex flex-wrap items-baseline justify-between gap-3">
                  <div>
                    <h3 className="text-lg font-semibold text-[color:var(--text)]">
                      {item.credential}
                    </h3>
                    <p className="text-sm text-[color:var(--muted)]">
                      {item.institution}
                    </p>
                  </div>
                  <span className="text-xs uppercase tracking-[0.2em] text-[color:var(--muted)]">
                    {item.dates}
                  </span>
                </div>
                <ul className="mt-4 list-disc space-y-2 pl-5 text-sm text-[color:var(--muted)]">
                  {item.details.map((detail) => (
                    <li key={detail}>{detail}</li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal>
          <div className="space-y-6">
            <h3 className="text-xs uppercase tracking-[0.2em] text-[color:var(--muted)]">
              Certifications
            </h3>
            {certifications.map((cert) => (
              <div key={cert.credential} className="border-t border-[color:var(--border)] pt-4">
                <p className="text-base font-semibold text-[color:var(--text)]">
                  {cert.credential}
                </p>
                <p className="text-sm text-[color:var(--muted)]">
                  {cert.institution}
                </p>
                <p className="text-xs text-[color:var(--muted)]">{cert.dates}</p>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

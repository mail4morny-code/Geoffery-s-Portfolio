import { SectionHeading } from "./SectionHeading";
import { Reveal } from "./Reveal";
import { profile } from "../data/cv";

const IconMail = () => (
  <svg viewBox="0 0 24 24" className="h-4 w-4" aria-hidden="true">
    <path
      fill="currentColor"
      d="M4 5h16a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2zm0 2v.2l8 5 8-5V7H4zm16 10V9.3l-8 5-8-5V17h16z"
    />
  </svg>
);

const IconPhone = () => (
  <svg viewBox="0 0 24 24" className="h-4 w-4" aria-hidden="true">
    <path
      fill="currentColor"
      d="M6.6 10.8a15.6 15.6 0 0 0 6.6 6.6l2.2-2.2a1 1 0 0 1 1-.2 11.3 11.3 0 0 0 3.6.6 1 1 0 0 1 1 1V20a1 1 0 0 1-1 1C9.3 21 3 14.7 3 7a1 1 0 0 1 1-1h3.6a1 1 0 0 1 1 1 11.3 11.3 0 0 0 .6 3.6 1 1 0 0 1-.2 1l-2.2 2.2z"
    />
  </svg>
);

export function Contact() {
  return (
    <section id="contact" className="mx-auto w-full max-w-5xl px-6 py-20">
      <Reveal>
        <div className="border-t border-[color:var(--border)] pt-10">
          <SectionHeading
            eyebrow="Contact"
            title="Open to collaborations and communication leadership roles."
            subtitle={<p>Let us connect to discuss PR, digital communication, or media initiatives.</p>}
          />

          <div className="mt-8 grid gap-6 md:grid-cols-2">
            <div className="space-y-4 text-base">
              <a
                href={`mailto:${profile.email}`}
                className="flex items-center gap-3 text-[color:var(--text)]"
              >
                <span className="flex h-8 w-8 items-center justify-center rounded-full border border-[color:var(--border)] text-[color:var(--text)]">
                  <IconMail />
                </span>
                {profile.email}
              </a>
              {profile.phones.map((phone) => (
                <a
                  key={phone}
                  href={`tel:${phone}`}
                  className="flex items-center gap-3 text-[color:var(--text)]"
                >
                  <span className="flex h-8 w-8 items-center justify-center rounded-full border border-[color:var(--border)] text-[color:var(--text)]">
                    <IconPhone />
                  </span>
                  {phone}
                </a>
              ))}
            </div>

            <div className="text-sm text-[color:var(--muted)]">
              <p className="text-xs uppercase tracking-[0.2em]">Add social links</p>
              <p className="mt-2">
                Placeholder area for LinkedIn, portfolio reels, or media kit links.
              </p>
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}

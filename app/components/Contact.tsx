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

const IconFacebook = () => (
  <svg viewBox="0 0 24 24" className="h-4 w-4" aria-hidden="true">
    <path
      fill="currentColor"
      d="M13.5 21v-7h2.3l.3-2.7h-2.6V9.6c0-.8.2-1.3 1.4-1.3H16V5.9c-.2 0-.9-.1-1.8-.1-1.8 0-3.1 1.1-3.1 3.2v2.3H9v2.7h2.3v7h2.2Z"
    />
  </svg>
);

const IconTikTok = () => (
  <svg viewBox="0 0 24 24" className="h-4 w-4" aria-hidden="true">
    <path
      fill="currentColor"
      d="M14.7 3c.2 1.6 1.1 3 2.5 3.8.8.5 1.7.8 2.7.8v2.4c-1.4 0-2.8-.4-4-1.2v5.4c0 2.9-2.3 5.2-5.2 5.2S5.5 17.1 5.5 14.2 7.8 9 10.7 9c.2 0 .4 0 .6.1v2.5c-.2-.1-.4-.1-.6-.1-1.5 0-2.7 1.2-2.7 2.7S9.2 17 10.7 17s2.7-1.2 2.7-2.7V3h1.3Z"
    />
  </svg>
);

const IconLinkedIn = () => (
  <svg viewBox="0 0 24 24" className="h-4 w-4" aria-hidden="true">
    <path
      fill="currentColor"
      d="M6.4 8.8H3.8V20h2.6V8.8Zm.2-3.5A1.5 1.5 0 1 0 3.5 5.3a1.5 1.5 0 0 0 3.1 0ZM20.5 20v-6.1c0-3-1.6-4.4-3.8-4.4-1.8 0-2.6 1-3 1.7V8.8h-2.6V20h2.6v-6c0-1.6.8-2.6 2.2-2.6 1.3 0 2 1 2 2.6v6h2.6Z"
    />
  </svg>
);

const socialIcons: Record<string, () => JSX.Element> = {
  Facebook: IconFacebook,
  TikTok: IconTikTok,
  LinkedIn: IconLinkedIn,
};

export function Contact() {
  const contactItems = [
    {
      key: "email",
      href: `mailto:${profile.email}`,
      label: profile.email,
      Icon: IconMail,
    },
    ...profile.phones.map((phone) => ({
      key: phone,
      href: `tel:${phone}`,
      label: phone,
      Icon: IconPhone,
    })),
  ];
  const leftColumnItems = contactItems;
  const rightColumnItems = profile.socials.map((social) => ({
    key: social.label,
    href: social.href,
    label: social.label,
    Icon: socialIcons[social.label],
    external: true,
  }));

  return (
    <section id="contact" className="mx-auto w-full max-w-5xl px-6 py-20">
      <Reveal>
        <div className="border-t border-[color:var(--border)] pt-10">
          <SectionHeading
            eyebrow="Contact"
            title="Open to collaborations and communication leadership roles."
            subtitle={<p>Let us connect to discuss PR, digital communication, or media initiatives.</p>}
          />

          <div className="mt-8 space-y-4">
            <p className="text-xs uppercase tracking-[0.2em] text-[color:var(--muted)]">
              Contact and Social
            </p>
            <div className="grid gap-4 text-base md:grid-cols-2">
              <div className="space-y-4">
                {leftColumnItems.map((item) => {
                  const isExternal = "external" in item && item.external;
                  return (
                    <a
                      key={item.key}
                      href={item.href}
                      target={isExternal ? "_blank" : undefined}
                      rel={isExternal ? "noreferrer" : undefined}
                      className="flex items-center gap-3 text-[color:var(--text)] transition hover:underline"
                    >
                      <span className="flex h-8 w-8 items-center justify-center rounded-full border border-[color:var(--border)] text-[color:var(--text)]">
                        <item.Icon />
                      </span>
                      {item.label}
                    </a>
                  );
                })}
              </div>
              <div className="space-y-4">
                {rightColumnItems.map((item) => {
                  return (
                    <a
                      key={item.key}
                      href={item.href}
                      target={item.external ? "_blank" : undefined}
                      rel={item.external ? "noreferrer" : undefined}
                      className="flex items-center gap-3 text-[color:var(--text)] transition hover:underline"
                    >
                      <span className="flex h-8 w-8 items-center justify-center rounded-full border border-[color:var(--border)] text-[color:var(--text)]">
                        <item.Icon />
                      </span>
                      {item.label}
                    </a>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}

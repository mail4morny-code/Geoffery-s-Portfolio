import type { ReactNode } from "react";

type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  subtitle?: ReactNode;
};

export function SectionHeading({ eyebrow, title, subtitle }: SectionHeadingProps) {
  return (
    <div className="flex flex-col gap-5">
      {eyebrow ? (
        <p className="text-xs font-semibold uppercase tracking-[0.35em] text-[color:var(--muted)]">
          {eyebrow}
        </p>
      ) : null}
      <h2 className="text-4xl font-semibold leading-tight text-[color:var(--text)] sm:text-5xl lg:text-6xl">
        {title}
      </h2>
      {subtitle ? (
        <div className="max-w-3xl text-lg text-[color:var(--muted)] sm:text-xl">
          {subtitle}
        </div>
      ) : null}
    </div>
  );
}

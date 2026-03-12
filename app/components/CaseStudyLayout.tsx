"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import type { CaseStudy } from "../data/case-studies";

const section = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

export function CaseStudyLayout({ study }: { study: CaseStudy }) {
  return (
    <div className="min-h-screen bg-[color:var(--bg)] text-[color:var(--text)]">
      <div className="pointer-events-none fixed bottom-8 right-8 z-50 hidden md:block">
        <Link
          href="/#work"
          className="pointer-events-auto rounded-full border border-[color:var(--border)] bg-[color:var(--card)] px-4 py-2 text-xs uppercase tracking-[0.2em] text-[color:var(--text)] shadow-[0_12px_30px_rgba(0,0,0,0.12)] transition hover:-translate-y-0.5"
        >
          Back to work
        </Link>
      </div>
      <motion.main
        initial="hidden"
        animate="show"
        className="mx-auto w-full max-w-5xl px-6 pb-24 pt-24"
      >
        <motion.div variants={section} className="mb-10">
          <Link
            href="/#work"
            className="text-xs uppercase tracking-[0.35em] text-[color:var(--muted)]"
          >
            Back to work
          </Link>
        </motion.div>

        <motion.section variants={section} className="space-y-6">
          <p className="text-xs uppercase tracking-[0.35em] text-[color:var(--muted)]">
            Case Study
          </p>
          <h1 className="text-[56px] font-semibold leading-[1.05] text-[color:var(--text)] sm:text-[72px] lg:text-[88px]">
            {study.title}
          </h1>
          <p className="text-lg text-[color:var(--muted)] sm:text-xl">
            {study.overview}
          </p>
        </motion.section>

        <motion.section
          variants={section}
          className="mt-12 overflow-hidden rounded-[28px] border border-[color:var(--border)] bg-[color:var(--card)]"
        >
          {/* Replace the banner image below with a real project hero when available. */}
          <div className="relative aspect-[16/9] bg-[#e9e7e0]">
            <Image
              src={study.banner}
              alt={`${study.title} banner`}
              fill
              className="object-contain"
            />
          </div>
        </motion.section>

        <motion.section variants={section} className="mt-14 space-y-10">
          <div className="grid gap-6 md:grid-cols-[200px_1fr]">
            <h2 className="text-sm uppercase tracking-[0.3em] text-[color:var(--muted)]">
              Project Overview
            </h2>
            <p className="text-base text-[color:var(--text)]">
              {study.overview}
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-[200px_1fr]">
            <h2 className="text-sm uppercase tracking-[0.3em] text-[color:var(--muted)]">
              My Role
            </h2>
            <p className="text-base text-[color:var(--text)]">{study.role}</p>
          </div>

          <div className="grid gap-6 md:grid-cols-[200px_1fr]">
            <h2 className="text-sm uppercase tracking-[0.3em] text-[color:var(--muted)]">
              {study.responsibilitiesTitle}
            </h2>
            <ul className="list-disc space-y-2 pl-5 text-base text-[color:var(--muted)]">
              {study.responsibilities.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>

          <div className="grid gap-6 md:grid-cols-[200px_1fr]">
            <h2 className="text-sm uppercase tracking-[0.3em] text-[color:var(--muted)]">
              The Challenge
            </h2>
            <p className="text-base text-[color:var(--muted)]">{study.challenge}</p>
          </div>

          <div className="grid gap-6 md:grid-cols-[200px_1fr]">
            <h2 className="text-sm uppercase tracking-[0.3em] text-[color:var(--muted)]">
              {study.strategyTitle}
            </h2>
            <div className="space-y-4">
              {study.strategySections.map((sectionItem) => (
                <div key={sectionItem.title}>
                  <h3 className="text-base font-semibold text-[color:var(--text)]">
                    {sectionItem.title}
                  </h3>
                  <p className="mt-2 text-base text-[color:var(--muted)]">
                    {sectionItem.body}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="grid gap-6 md:grid-cols-[200px_1fr]">
            <h2 className="text-sm uppercase tracking-[0.3em] text-[color:var(--muted)]">
              Impact
            </h2>
            <p className="text-base text-[color:var(--muted)]">{study.impact}</p>
          </div>

          <div className="grid gap-6 md:grid-cols-[200px_1fr]">
            <h2 className="text-sm uppercase tracking-[0.3em] text-[color:var(--muted)]">
              Key Contributions
            </h2>
            <ul className="list-disc space-y-2 pl-5 text-base text-[color:var(--muted)]">
              {study.contributions.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>

          <div className="grid gap-6 md:grid-cols-[200px_1fr]">
            <h2 className="text-sm uppercase tracking-[0.3em] text-[color:var(--muted)]">
              Visual Gallery
            </h2>
            <div className="space-y-4">
              <p className="text-base text-[color:var(--muted)]">
                {study.visualsTitle}
              </p>
              <ul className="list-disc space-y-2 pl-5 text-base text-[color:var(--muted)]">
                {study.visuals.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                {Array.from({ length: 4 }).map((_, index) => (
                  <div
                    key={`gallery-${study.slug}-${index}`}
                    className="relative aspect-[4/3] overflow-hidden rounded-[18px] border border-[color:var(--border)] bg-[#e9e7e0]"
                  >
                    <Image
                      src="/placeholders/gallery-1.svg"
                      alt="Placeholder gallery item"
                      fill
                      className="object-cover"
                    />
                  </div>
                ))}
              </div>
              {/* Replace the gallery placeholders above with real project visuals. */}
            </div>
          </div>
        </motion.section>
      </motion.main>
    </div>
  );
}

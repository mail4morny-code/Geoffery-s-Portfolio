"use client";

import { motion } from "framer-motion";
import type { Variants } from "framer-motion";
import { SectionHeading } from "./SectionHeading";
import { experience } from "../data/cv";

const container: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.12 },
  },
};

const item: Variants = {
  hidden: { opacity: 0, y: 16 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
  },
};

export function Experience() {
  return (
    <section id="experience" className="mx-auto w-full max-w-5xl px-6 py-20">
      <SectionHeading
        eyebrow="Resume"
        title="Experience"
        subtitle={<p>Selected roles from 2018 to present.</p>}
      />

      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        className="mt-12 space-y-10"
      >
        {experience.map((role) => (
          <motion.div
            key={`${role.title}-${role.organization}`}
            variants={item}
            className="grid gap-4 border-t border-[color:var(--border)] pt-8 md:grid-cols-[140px_1fr]"
          >
            <div className="text-xs uppercase tracking-[0.2em] text-[color:var(--muted)]">
              {role.dates}
            </div>
            <div>
              <h3 className="text-2xl font-semibold text-[color:var(--text)]">
                {role.title}
              </h3>
              <p className="text-sm text-[color:var(--muted)]">
                {role.organization}
              </p>
              <p className="mt-3 text-base text-[color:var(--muted)]">
                {role.description}
              </p>
              <ul className="mt-4 list-disc space-y-2 pl-5 text-sm text-[color:var(--muted)]">
                {role.highlights.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}

"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Reveal } from "./Reveal";
import { profile } from "../data/cv";

export function Hero() {
  return (
    <section id="home" className="relative overflow-hidden">
      <div className="mx-auto grid w-full max-w-6xl items-stretch gap-14 px-6 pb-28 pt-28 md:grid-cols-[1.1fr_0.9fr]">
        <Reveal className="flex h-full flex-col gap-10">
          <p className="text-xs uppercase tracking-[0.35em] text-[color:var(--muted)]">
            {profile.title}
          </p>
          <h1 className="text-[60px] font-semibold leading-[1.02] text-[color:var(--text)] sm:text-[84px] lg:text-[96px]">
            {profile.name}
          </h1>
          <p className="max-w-xl text-xl text-[color:var(--muted)] sm:text-2xl">
            {profile.summary}
          </p>
          <div className="flex flex-wrap gap-4">
            <a
              href="#work"
              className="rounded-full bg-black px-7 py-3 text-xs uppercase tracking-[0.2em] text-white transition hover:-translate-y-0.5"
            >
              View Work
            </a>
            <a
              href="/Geoffrey-Kwadzo-Alomatu-CV.pdf"
              className="rounded-full border border-[color:var(--border)] px-7 py-3 text-xs uppercase tracking-[0.2em] text-[color:var(--text)] transition hover:-translate-y-0.5"
            >
              Download CV
            </a>
            {/* Replace the href above with a new file in /public when needed. */}
          </div>
        </Reveal>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative flex h-full w-full"
        >
          <div className="relative h-full w-full overflow-hidden rounded-[28px] border border-[color:var(--border)] bg-[color:var(--card)] shadow-[0_30px_80px_rgba(0,0,0,0.12)]">
            <Image
              src="/Alomatu.jpeg"
              alt="Geoffrey Kwadzo Alomatu portrait"
              fill
              className="object-cover"
              priority
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}

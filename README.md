# Geoffrey Kwadzo Alomatu — Portfolio

Premium, modern portfolio built with Next.js (App Router), TypeScript, Tailwind CSS, and Framer Motion.

## Getting Started

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Replace Placeholder Assets

- Profile image: `public/placeholders/profile.svg`
- Project covers: `public/placeholders/project-ghnews.svg`, `public/placeholders/project-creatorpreneur.svg`, `public/placeholders/project-dzata.svg`
- Gallery images: `public/placeholders/gallery-1.svg` through `public/placeholders/gallery-6.svg`

Swap these with your real images (same filenames for zero-code changes).

## Update Downloadable CV

- Replace `public/placeholders/placeholder-cv.pdf` with your real CV file.
- If you change the filename, update the link in `app/components/Hero.tsx`.

## Edit Project Case Studies

- Structured data lives in `app/data/cv.ts`.
- Update the `caseStudies` array with real descriptions, tactics, and metrics.
- Expand the 2025/2026 GhNewsToday strategy blocks when ready.

## Update Colors / Theme

- Global theme variables are defined in `app/globals.css` under `:root`.
- Adjust `--bg`, `--card`, `--text`, `--muted`, and `--accent` to change the palette.

## Content Source of Truth

All real content in this project is sourced directly from the provided CV. Any missing details are clearly labeled as placeholders for easy replacement.

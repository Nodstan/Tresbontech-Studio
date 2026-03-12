# Tresbontech

Marketing site for Tresbontech’s hybrid brand model:
- **Tresbontech Academy** (B2C education & mentorship)
- **Tresbontech Studio** (B2B technology solutions)

Built with Vite + React + TypeScript, styled with Tailwind CSS, and animated with Motion.

## Pages / Routes

- `/` — Home (Hero + divisions + value props + testimonials)
- `/academy` — Academy landing page (two-track program, philosophy, roadmap)

Note: the header currently links to `/about`, `/studio`, and `/contact`, but those routes are not implemented yet and fall back to the home content.

## Tech Stack

- Vite 6 + React 19 + TypeScript
- React Router
- Tailwind CSS v4 (theme tokens defined in `src/index.css` via `@theme`)
- Motion + Lucide icons

## Getting Started

```bash
npm install
npm run dev
```

Vite serves on `http://localhost:3000`.

## Scripts

- `npm run dev` — Start dev server (port 3000)
- `npm run build` — Production build
- `npm run preview` — Preview production build locally
- `npm run lint` — Type-check (`tsc --noEmit`)
- `npm run clean` — Remove `dist` (uses `rm -rf`, which may not work on Windows shells)

On Windows, you can remove `dist` manually or run:

```powershell
Remove-Item -Recurse -Force dist
```

## Environment Variables

See [.env.example](./.env.example).

- `GEMINI_API_KEY` — injected into the Vite build via `vite.config.ts` (`process.env.GEMINI_API_KEY`)
- `APP_URL` — documented for deployment environments

## Project Structure

- `src/App.tsx` — Router and page composition
- `src/pages/` — Route-level pages (`HomePage`, `AcademyPage`)
- `src/components/` — Reusable UI sections (Header, Footer, cards, etc.)
- `src/index.css` — Tailwind import, theme tokens, and custom fonts
- `public/` — Static assets (logo, background pattern)

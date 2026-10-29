# Fatiuzzaman Fahim: Developer Portfolio

Next.js (App Router) + React + TypeScript + Tailwind CSS v4. Static, no backend.

## Run locally
```bash
npm install
npm run dev          # http://localhost:3000
```

## Checks and production build
```bash
npm run typecheck
npm run lint
npm run build
npm run start        # serve the production build
```

## Add your images
- Profile photo: `public/images/profile.jpg`
- Screenshots: `public/images/projects/bazar-dor.png`, `anti-kuddus-protocol.png`, `fitlog.png`

Until the files exist, the site shows placeholders. The check happens at build/render time, so restart `npm run dev` (or rebuild) after adding images.

## Edit content
- Personal info, skills, education, achievement: `src/data/portfolio.ts`
- Projects and their detail pages: `src/data/projects.ts`

## Favicon
`src/app/icon.svg` is a simple "FF" placeholder. Replace it with your own `icon.svg`, or drop a `favicon.ico` into `src/app/`.

## Deploy to Vercel
1. `git init && git add . && git commit -m "Initial portfolio"`
2. Create an empty repository on GitHub, then `git remote add origin <url> && git push -u origin main`
3. On vercel.com choose **Add New, Project**, import the repo, and click **Deploy** (defaults work).
4. Optional: set `NEXT_PUBLIC_SITE_URL` to your live URL for correct social-preview links.

## Notes
- Resume button opens the Google Drive link in a new tab.
- `package-lock.json` is not included because it was generated without network access; `npm install` creates it.

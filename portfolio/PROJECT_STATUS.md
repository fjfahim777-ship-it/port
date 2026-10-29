# PROJECT_STATUS

## Checkpoint 2 (all pages written)
Done: config, styles, navbar with mobile menu, footer, all homepage sections, project data, project cards, shared detail page, dynamic route with static params, 404 page, image fallbacks, README.
Verification: NOT run. The build environment had no network, so `npm install`, `npm run typecheck`, `npm run lint` and `npm run build` have not been executed. No browser testing was done.
Known risks: dependency versions are caret ranges and unverified together; no lockfile.
Next steps:
1. `npm install`
2. `npm run typecheck && npm run lint && npm run build`
3. Fix any reported errors, then view `/` and the three `/projects/...` pages at mobile and desktop widths.
4. Add images, push to GitHub, deploy on Vercel.

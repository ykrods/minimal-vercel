# minimal-vercel

A minimal example that deploys static site and function

## note

- `public/` is treated as `outputDirectory` by default.
- Files under `api/` are deployed as Vercel Functions.
- Vercel Functions are built by `vercel build` on the deploy workflow, so we can use `.ts` without builder or bundler.

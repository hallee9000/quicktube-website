# QuickTube Organizer Website

A static marketing site for the QuickTube Organizer Chrome extension, built with Vite, React, and Tailwind CSS.

## Scripts

- `npm install`
- `npm run dev`
- `npm run build`
- `npm run preview`

## GitHub Pages

This project uses `base: './'` in [vite.config.js](/Users/hal/projects/quicktube-website/vite.config.js), which keeps asset paths portable for GitHub Pages project deployments.

To deploy manually:

1. Install dependencies with `npm install`.
2. Build the site with `npm run build`.
3. Publish the contents of `dist/` to GitHub Pages.

To deploy with GitHub Actions, use the workflow in `.github/workflows/deploy.yml`.

## Configuration

Update the store URL and support link in [src/content/siteContent.js](/Users/hal/projects/quicktube-website/src/content/siteContent.js).

The default support link is a placeholder mailto address. Replace it before publishing the site.

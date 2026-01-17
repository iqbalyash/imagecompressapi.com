# Cloudflare Pages Deployment Guide

## Build Settings

Configure the following in your Cloudflare Pages dashboard:

- **Build command**: `npm run build`
- **Build output directory**: `.next`
- **Root directory**: `/` (or leave empty)
- **Node.js version**: 20

## Environment Variables

No environment variables are required for basic deployment.

## Framework Preset

Select **Next.js** as the framework preset, or leave as "None" and use the settings above.

## Notes

- Cloudflare Pages will automatically detect Next.js and configure accordingly
- The build command `npm run build` will create the `.next` directory
- Cloudflare Pages will handle static asset optimization automatically

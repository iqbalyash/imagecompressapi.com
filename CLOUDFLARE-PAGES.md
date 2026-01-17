# Cloudflare Pages Deployment Guide

## Build Settings

Configure the following in your Cloudflare Pages dashboard:

- **Build command**: `CF_PAGES=1 npm run build`
- **Build output directory**: `out`
- **Root directory**: `/` (or leave empty)
- **Node.js version**: 20

## Environment Variables

Add the following environment variable in Cloudflare Pages:
- `CF_PAGES=1` (or add `CF_PAGES` to your build command)

## Framework Preset

Select **None** or **Static** (not Next.js preset, as we're using static export).

## Notes

- The `CF_PAGES=1` environment variable triggers static export mode in next.config.ts
- This creates an `/out` directory which Cloudflare Pages expects
- All pages are statically generated for fast performance
- No server-side features are used (perfect for Cloudflare Pages)

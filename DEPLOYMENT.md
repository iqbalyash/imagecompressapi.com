# Deployment Guide

## Netlify

### Build Settings
The `netlify.toml` file is configured with the correct build command. 

**Important:** In your Netlify dashboard:
1. Go to Site settings → Build & deploy → Build settings
2. Set **Build command** to: `npm run build` (or leave empty to use netlify.toml)
3. Set **Publish directory** to: `.next` (or leave empty - Next.js plugin handles this)
4. Ensure **Node version** is set to **20**

The build command should NOT be:
- ❌ `build`
- ❌ `npx run build`
- ✅ `npm run build`

### Environment Variables
No environment variables are required for basic deployment.

## Cloudflare Pages

### Build Settings (configure in dashboard):
- **Build command**: `npm run build`
- **Build output directory**: `.next`
- **Root directory**: `/` (or leave empty)
- **Node.js version**: 20
- **Framework preset**: Next.js (or None)

See `CLOUDFLARE-PAGES.md` for more details.

## Verification

After deployment, verify the build works by:
1. Checking build logs show `npm run build`
2. Build completes successfully with Next.js output
3. Site deploys and pages load correctly

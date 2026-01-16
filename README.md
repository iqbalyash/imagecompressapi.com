# Image Compress API

A Next.js 14 application with TypeScript, Tailwind CSS, and SEO-first configuration.

## Features

- ⚡ Next.js 14 with App Router
- 🔷 TypeScript for type safety
- 🎨 Tailwind CSS for styling
- 🔍 SEO-optimized with proper metadata
- 🌙 Dark mode support
- 📱 Responsive design

## Getting Started

First, install the dependencies:

```bash
npm install
```

Then, run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Project Structure

```
.
├── app/
│   ├── layout.tsx      # Root layout with SEO metadata
│   ├── page.tsx        # Home page
│   └── globals.css     # Global styles with Tailwind
├── public/             # Static assets
├── package.json
├── tsconfig.json
├── tailwind.config.ts
└── next.config.js
```

## SEO Configuration

The app includes comprehensive SEO setup in `app/layout.tsx`:

- Dynamic title with template
- Meta descriptions
- Open Graph tags
- Twitter Card tags
- Structured metadata
- Robots configuration

## Build

To create a production build:

```bash
npm run build
```

To start the production server:

```bash
npm start
```

## Learn More

- [Next.js Documentation](https://nextjs.org/docs)
- [TypeScript Documentation](https://www.typescriptlang.org/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)

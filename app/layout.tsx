import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: "Bulk image compression API",
    template: "%s | Bulk image compression API",
  },
  description:
    "Image compression and resize API for developers. Compress images in bulk, convert to AVIF and WebP, and define custom image sizes using a fast API.",
  keywords: [
    "image compression",
    "image optimization",
    "API",
    "image resize",
    "bulk image compression",
    "AVIF conversion",
    "WebP conversion",
    "custom image sizes",
    "web performance",
    "developer tools",
  ],
  authors: [{ name: "ImageCompressAPI" }],
  creator: "ImageCompressAPI",
  publisher: "ImageCompressAPI",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://imagecompressapi.com"),
  alternates: {
    canonical: "/",
  },
  icons: {
    icon: "/Image_compress_api.png",
    shortcut: "/Image_compress_api.png",
    apple: "/Image_compress_api.png",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://imagecompressapi.com",
    siteName: "ImageCompressAPI",
    title: "Bulk Image Compression API with Custom Sizes | ImageCompressAPI",
    description:
      "Image compression and resize API for developers. Compress images in bulk, convert to AVIF and WebP, and define custom image sizes using a fast API.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "ImageCompressAPI - Bulk Image Compression API",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Bulk Image Compression API with Custom Sizes | ImageCompressAPI",
    description:
      "Image compression and resize API for developers. Compress images in bulk, convert to AVIF and WebP, and define custom image sizes using a fast API.",
    images: ["/og-image.jpg"],
    creator: "@imagecompressapi",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // Structured Data (JSON-LD) for better SEO and indexing
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "ImageCompressAPI",
    "url": "https://imagecompressapi.com",
    "logo": "https://imagecompressapi.com/image_compress_api_logo1.png",
    "description": "Bulk image compression API for developers. Compress, resize, and convert images at scale using an API. Supports AVIF, WebP, JPG, and PNG.",
    "sameAs": [
      "https://twitter.com/imagecompressapi"
    ],
    "contactPoint": {
      "@type": "ContactPoint",
      "contactType": "Customer Support",
      "email": "support@imagecompressapi.com"
    }
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "ImageCompressAPI",
    "url": "https://imagecompressapi.com",
    "description": "Image compression and resize API for developers. Compress images in bulk, convert to AVIF and WebP, and define custom image sizes using a fast API.",
    "potentialAction": {
      "@type": "SearchAction",
      "target": {
        "@type": "EntryPoint",
        "urlTemplate": "https://imagecompressapi.com/docs?q={search_term_string}"
      },
      "query-input": "required name=search_term_string"
    }
  };

  const softwareApplicationSchema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "ImageCompressAPI",
    "applicationCategory": "DeveloperApplication",
    "operatingSystem": "Web",
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "USD",
      "description": "Free tier available with 500 images/month"
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.8",
      "ratingCount": "150"
    },
    "description": "Bulk image compression API with custom sizes. Supports AVIF, WebP, JPG, and PNG formats. Fast CDN delivery and privacy-first auto deletion."
  };

  return (
    <html lang="en">
      <head>
        <meta name="google-site-verification" content="DFLnzq2xOJB4Ck2HxzSRwXPlaccGzDrZCe7bTUAolKM" />
        <link rel="icon" href="/Image_compress_api.png" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareApplicationSchema) }}
        />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}

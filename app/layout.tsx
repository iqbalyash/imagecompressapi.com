import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: "Bulk Image Compression API with Custom Sizes | ImageCompressAPI",
    template: "%s | ImageCompressAPI",
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
  return (
    <html lang="en">
      <head>
        <meta name="google-site-verification" content="DFLnzq2xOJB4Ck2HxzSRwXPlaccGzDrZCe7bTUAolKM" />
        <link rel="icon" href="/Image_compress_api.png" />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}

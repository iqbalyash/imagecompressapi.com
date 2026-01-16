import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: "Image Compress API - Fast & Reliable Image Compression",
    template: "%s | Image Compress API",
  },
  description:
    "High-performance image compression API. Compress images quickly and efficiently with our developer-friendly API. Fast, reliable, and easy to integrate.",
  keywords: [
    "image compression",
    "image optimization",
    "API",
    "image resize",
    "web performance",
    "developer tools",
  ],
  authors: [{ name: "Image Compress API" }],
  creator: "Image Compress API",
  publisher: "Image Compress API",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://imagecompressapi.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://imagecompressapi.com",
    siteName: "Image Compress API",
    title: "Image Compress API - Fast & Reliable Image Compression",
    description:
      "High-performance image compression API. Compress images quickly and efficiently with our developer-friendly API.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Image Compress API",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Image Compress API - Fast & Reliable Image Compression",
    description:
      "High-performance image compression API. Compress images quickly and efficiently with our developer-friendly API.",
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
  verification: {
    // Add your verification codes here when available
    // google: "your-google-verification-code",
    // yandex: "your-yandex-verification-code",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}

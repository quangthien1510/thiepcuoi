import type { Metadata, Viewport } from "next";
import {
  Be_Vietnam_Pro,
  Great_Vibes,
  Playfair_Display,
} from "next/font/google";

import "./globals.css";

import {
  SITE_URL,
  PREVIEW_IMAGE,
  SITE_TITLE,
  SITE_DESCRIPTION,
  SITE_NAME,
  PREVIEW_IMAGE_ALT,
} from "@/lib/site-metadata";

const bodyFont = Be_Vietnam_Pro({
  subsets: ["latin", "vietnamese"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-be-vietnam-pro",
  display: "swap",
});

const displayFont = Playfair_Display({
  subsets: ["latin", "vietnamese"],
  weight: ["500", "600", "700", "900"],
  style: ["normal", "italic"],
  variable: "--font-playfair-display",
  display: "swap",
});

const scriptFont = Great_Vibes({
  subsets: ["latin", "vietnamese"],
  weight: "400",
  variable: "--font-great-vibes",
  display: "swap",
});

const siteUrl = new URL(SITE_URL);

export const metadata: Metadata = {
  metadataBase: siteUrl,

  title: SITE_TITLE,

  description: SITE_DESCRIPTION,

  openGraph: {
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,

    url: SITE_URL,

    siteName: SITE_NAME,

    type: "website",
    locale: "vi_VN",

    images: [
      {
        url: PREVIEW_IMAGE,
        width: 1200,
        height: 630,
        type: "image/png",
        alt: PREVIEW_IMAGE_ALT,
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    images: [PREVIEW_IMAGE],
  },

  icons: {
    icon: "/favicon.ico",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  minimumScale: 1,
  maximumScale: 1,
  userScalable: false,
  themeColor: "#234b35",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="vi" className={`${bodyFont.variable} ${displayFont.variable} ${scriptFont.variable}`}>

      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
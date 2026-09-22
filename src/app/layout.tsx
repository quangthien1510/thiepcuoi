import type { Metadata, Viewport } from "next";
import "./globals.css";

const siteUrl = "https://thiepcuoi-phi.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),

  title: "Ngọc Hân & Quang Thiện - Thiệp cưới online",

  description:
    "Thân mời bạn đến chung vui cùng Ngọc Hân & Quang Thiện trong hai ngày 17 & 18.10.2026",

  openGraph: {
    title: "Ngọc Hân & Quang Thiện - Thiệp cưới online",
    description:
      "Thân mời bạn đến chung vui cùng Ngọc Hân & Quang Thiện trong hai ngày 17 & 18.10.2026",
    url: siteUrl,
    siteName: "Ngọc Hân & Quang Thiện - Thiệp cưới online",
    type: "website",
    locale: "vi_VN",

    images: [
      {
        url: `${siteUrl}/images/og-image.jpg`,
        width: 4672,
        height: 2453,
        type: "image/jpeg",
        alt: "Ảnh cưới Ngọc Hân và Quang Thiện",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Ngọc Hân & Quang Thiện - Thiệp cưới online",
    description:
      "Thân mời bạn đến chung vui cùng Ngọc Hân & Quang Thiện trong hai ngày 17 & 18.10.2026",
    images: [`${siteUrl}/images/og-image.jpg`],
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
    <html lang="vi">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        {/* eslint-disable-next-line @next/next/no-page-custom-font */}
        <link
          href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,500;0,600;0,700;0,900;1,600&family=Great+Vibes&family=Be+Vietnam+Pro:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>

      <body className="antialiased">{children}</body>
    </html>
  );
}
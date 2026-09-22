import type { Metadata, Viewport } from "next";
import { headers } from "next/headers";
import "./globals.css";

const configuredSiteUrl = process.env.NEXT_PUBLIC_SITE_URL
  ? new URL(process.env.NEXT_PUBLIC_SITE_URL)
  : process.env.VERCEL_URL
    ? new URL(`https://${process.env.VERCEL_URL}`)
    : new URL("http://localhost:3000");

const siteTitle = "Ngọc Hân & Quang Thiện - Thiệp cưới online";
const siteDescription =
  "Thân mời bạn đến chung vui cùng Ngọc Hân & Quang Thiện trong hai ngày 17 & 18.10.2026";
const facebookAppId = process.env.NEXT_PUBLIC_FACEBOOK_APP_ID;

export async function generateMetadata(): Promise<Metadata> {
  const requestHeaders = await headers();
  const host = requestHeaders.get("x-forwarded-host") ?? requestHeaders.get("host");
  const protocol = requestHeaders.get("x-forwarded-proto") ?? "https";
  const siteUrl = host ? new URL(`${protocol}://${host}`) : configuredSiteUrl;

  return {
    metadataBase: siteUrl,
    title: siteTitle,
    description: siteDescription,
    openGraph: {
      title: siteTitle,
      description: siteDescription,
      url: siteUrl.toString(),
      siteName: siteTitle,
      type: "website",
      locale: "vi_VN",
      images: [
        {
          url: new URL(
            "/images/CND018332.jpg",
            siteUrl
          ).toString(),
          type: "image/jpeg",
          width: 1200,
          height: 630,
          alt: "Ảnh cưới Ngọc Hân và Quang Thiện",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: siteTitle,
      description: siteDescription,
      images: [
        new URL(
          "/images/CND018332.jpg",
          siteUrl
        ).toString(),
      ],
    },
  };
}

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
        {facebookAppId ? <meta property="fb:app_id" content={facebookAppId} /> : null}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
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

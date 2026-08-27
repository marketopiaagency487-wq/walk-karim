import type { Metadata, Viewport } from "next";
import Script from "next/script";
import "./globals.css";
import { site, faqs } from "@/lib/site";

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: "مول ووك إن أكتوبر WALK'N Mall | أسعار ومساحات دبي للتطوير العقاري",
  description:
    "مول WALK'N أكتوبر من شركة دبي للتطوير العقاري على المحور المركزي — محلات ومكاتب وعيادات ووحدات فندقية على 10 أفدنة، تبدأ من 1,800,000 جنيه بمقدم 10% وتقسيط 10 سنوات.",
  keywords: [
    "مول ووك ان اكتوبر",
    "WALK'N Mall October",
    "دبي للتطوير العقاري",
    "محلات للبيع 6 أكتوبر",
    "عيادات للبيع اكتوبر",
    "مكاتب ادارية المحور المركزي",
    "مولات 6 أكتوبر",
  ],
  alternates: { canonical: site.url },
  openGraph: {
    type: "website",
    locale: "ar_EG",
    url: site.url,
    siteName: "WALK'N Mall October",
    title: "مول ووك إن أكتوبر — استثمار تجاري وإداري وطبي على المحور المركزي",
    description:
      "10 أفدنة على المحور المركزي بالسادس من أكتوبر. وحدات تبدأ من 1,800,000 جنيه، مقدم 10% وتقسيط على 10 سنوات.",
    images: [{ url: "/images/hotel-night.webp", width: 1600, height: 900 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "مول ووك إن أكتوبر WALK'N Mall",
    description: "استثمار تجاري وإداري وطبي وفندقي على المحور المركزي — 6 أكتوبر.",
    images: ["/images/hotel-night.webp"],
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: "#0b1420",
  width: "device-width",
  initialScale: 1,
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "RealEstateAgent",
      name: site.agency,
      url: site.url,
      telephone: site.phoneIntl,
      email: site.email,
      areaServed: "6th of October City, Egypt",
      address: {
        "@type": "PostalAddress",
        addressLocality: "السادس من أكتوبر",
        addressRegion: "الجيزة",
        addressCountry: "EG",
      },
    },
    {
      "@type": "Place",
      name: "WALK'N Mall October",
      description:
        "مشروع متعدد الاستخدامات على مساحة 10 أفدنة بالمحور المركزي في السادس من أكتوبر، يضم محلات ومكاتب وعيادات ووحدات فندقية.",
      address: {
        "@type": "PostalAddress",
        streetAddress: "المحور المركزي، الحي الأول",
        addressLocality: "السادس من أكتوبر",
        addressCountry: "EG",
      },
    },
    {
      "@type": "FAQPage",
      mainEntity: faqs.map((f) => ({
        "@type": "Question",
        name: f.q,
        acceptedAnswer: { "@type": "Answer", text: f.a },
      })),
    },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ar" dir="rtl">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          href="https://fonts.googleapis.com/css2?family=Noto+Kufi+Arabic:wght@500;700;800&family=IBM+Plex+Sans+Arabic:wght@400;500;600&family=Archivo:wght@500;600;700&display=swap"
          rel="stylesheet"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>
        {children}

        {/* Google Ads / GA4 — استبدل المعرف في lib/site.ts قبل الرفع */}
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${site.gtagId}`}
          strategy="afterInteractive"
        />
        <Script id="gtag-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${site.gtagId}');
          `}
        </Script>
      </body>
    </html>
  );
}

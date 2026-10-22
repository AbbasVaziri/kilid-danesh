import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import MobileCallBar from "@/components/layout/MobileCallBar";
import JsonLd from "@/components/ui/JsonLd";
import { localBusinessSchema, websiteSchema } from "@/lib/seo";
import { site } from "@/lib/site";

const modam = localFont({
  variable: "--font-modam",
  display: "swap",
  src: [
    { path: "../fonts/Modam-Light.woff2", weight: "300" },
    { path: "../fonts/Modam-Regular.woff2", weight: "400" },
    { path: "../fonts/Modam-Medium.woff2", weight: "500" },
    { path: "../fonts/Modam-Bold.woff2", weight: "700" },
    { path: "../fonts/Modam-ExtraBold.woff2", weight: "800" },
    { path: "../fonts/Modam-Black.woff2", weight: "900" },
  ],
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: "کلیدسازی فوری تهران | کلیدسازی دانش",
    template: "%s | کلیدسازی دانش",
  },
  description: site.description,
  applicationName: site.name,
  formatDetection: { telephone: true },
  robots: { index: true, follow: true },
  // Search Console / Bing Webmaster verification codes, set as env vars at build time.
  verification: {
    google: process.env.GOOGLE_SITE_VERIFICATION,
    other: process.env.BING_SITE_VERIFICATION
      ? { "msvalidate.01": process.env.BING_SITE_VERIFICATION }
      : undefined,
  },
};

export const viewport: Viewport = {
  themeColor: "#0e0f11",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="fa" dir="rtl" className={`${modam.variable} antialiased`}>
      <body className="flex min-h-screen flex-col pb-[72px] lg:pb-0">
        <JsonLd data={[localBusinessSchema(), websiteSchema()]} />
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <MobileCallBar />
      </body>
    </html>
  );
}

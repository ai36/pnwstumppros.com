import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import { GoogleAnalytics } from "@next/third-parties/google";
import { COMPANY_NAME } from "./constants";
import "./globals.css";

const sans = Outfit({
  variable: "--font-body",
  subsets: ["latin"],
});

const title = `${COMPANY_NAME} — Stump Grinding Portland OR & Vancouver WA`;
const description =
  "Affordable stump grinding in Portland, OR and Vancouver, WA. Free estimates. Same-week service available. Call for a quote.";

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL ?? "https://localhost:3000",
  ),
  title,
  description,
  icons: { icon: "/favicon.svg" },
  openGraph: {
    title,
    description,
    url: process.env.NEXT_PUBLIC_SITE_URL,
    siteName: COMPANY_NAME,
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
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
        <meta
          name="google-site-verification"
          content="9m21iS8l66LT5GGhFN_-H8hHEkP-f4ekCkIpCaqUs9I"
        />
      </head>
      <body className={`${sans.variable} font-sans antialiased`}>
        {children}
      </body>
      {process.env.NEXT_PUBLIC_GA_ID ? (
        <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GA_ID} />
      ) : null}
    </html>
  );
}

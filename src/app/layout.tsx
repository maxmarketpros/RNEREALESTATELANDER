import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "RNE Real Estate Media | Premium Photography & Video",
  description:
    "Premium real estate photography, videography, drone media, 3D tours, floor plans, and virtual staging for agents and builders across the DFW area. MLS-ready deliverables with fast turnaround.",
  keywords: [
    "real estate photography",
    "real estate videography",
    "drone photography",
    "3D tours",
    "floor plans",
    "virtual staging",
    "DFW",
    "Dallas Fort Worth",
    "real estate media",
  ],
  authors: [{ name: "RNE Real Estate Media" }],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://rnerealestate.com",
    siteName: "RNE Real Estate Media",
    title: "RNE Real Estate Media | Premium Photography & Video",
    description:
      "Premium real estate photography, videography, drone media, 3D tours, floor plans, and virtual staging for agents and builders across the DFW area.",
    images: [
      {
        url: "/images/logo.webp",
        width: 800,
        height: 600,
        alt: "RNE Real Estate Media",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "RNE Real Estate Media | Premium Photography & Video",
    description:
      "Premium real estate photography, videography, drone media, 3D tours, floor plans, and virtual staging for agents and builders across the DFW area.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.className} bg-[#0A0A0A] text-white`}>
        {children}
      </body>
    </html>
  );
}

import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#D07A2D",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  title: {
    default: "RNE Real Estate Media | Premium Photography & Video | DFW",
    template: "%s | RNE Real Estate Media",
  },
  description:
    "Premium real estate photography, drone media, 3D tours, floor plans, and virtual staging for Agents, Contractors & Investors across the DFW area. Serving Parker, Tarrant, Wise & Palo Pinto counties. MLS-ready deliverables with fast turnaround.",
  keywords: [
    "real estate photography",
    "real estate photography DFW",
    "real estate photography Dallas",
    "real estate photography Fort Worth",
    "drone photography",
    "aerial photography",
    "3D tours",
    "Matterport tours",
    "floor plans",
    "virtual staging",
    "real estate media",
    "property photography",
    "commercial photography",
    "residential photography",
    "Parker County photographer",
    "Tarrant County photographer",
    "Weatherford real estate photography",
  ],
  authors: [{ name: "RNE Real Estate Media" }],
  creator: "RNE Real Estate Media",
  publisher: "RNE Real Estate Media",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://rnerealestate.com"),
  alternates: {
    canonical: "/",
  },
  icons: {
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml" },
    ],
    apple: "/apple-touch-icon.png",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://rnerealestate.com",
    siteName: "RNE Real Estate Media",
    title: "RNE Real Estate Media | Premium Real Estate Photography & Media",
    description:
      "Premium real estate photography, drone media, 3D tours, floor plans, and virtual staging for Agents, Contractors & Investors across the DFW area.",
    images: [
      {
        url: "/images/residential-exterior-gallery/1.webp",
        width: 1200,
        height: 630,
        alt: "RNE Real Estate Media - Premium Property Photography",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "RNE Real Estate Media | Premium Photography & Video",
    description:
      "Premium real estate photography, drone media, 3D tours, floor plans, and virtual staging for Agents, Contractors & Investors across the DFW area.",
    images: ["/images/residential-exterior-gallery/1.webp"],
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
  category: "Real Estate Photography",
};

// JSON-LD structured data for local business
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "RNE Real Estate Media",
  description:
    "Premium real estate photography, drone media, 3D tours, floor plans, and virtual staging for Agents, Contractors & Investors across the DFW area.",
  url: "https://rnerealestate.com",
  telephone: "+1-940-327-9977",
  email: "RNEMedia@outlook.com",
  image: "https://rnerealestate.com/images/logo.webp",
  priceRange: "$$",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Weatherford",
    addressRegion: "TX",
    addressCountry: "US",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 32.7593,
    longitude: -97.7973,
  },
  areaServed: [
    {
      "@type": "County",
      name: "Parker County",
      containedInPlace: { "@type": "State", name: "Texas" },
    },
    {
      "@type": "County",
      name: "Tarrant County",
      containedInPlace: { "@type": "State", name: "Texas" },
    },
    {
      "@type": "County",
      name: "Wise County",
      containedInPlace: { "@type": "State", name: "Texas" },
    },
    {
      "@type": "County",
      name: "Palo Pinto County",
      containedInPlace: { "@type": "State", name: "Texas" },
    },
  ],
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "08:00",
      closes: "18:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Saturday"],
      opens: "09:00",
      closes: "17:00",
    },
  ],
  sameAs: [],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Real Estate Media Services",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Real Estate Photography",
          description: "Professional interior and exterior property photography",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Drone Photography",
          description: "Aerial photography and videography services",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "3D Tours",
          description: "Interactive 3D virtual tours for properties",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Floor Plans",
          description: "Professional property floor plan creation",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Virtual Staging",
          description: "Digital furniture staging for empty properties",
        },
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={`${inter.className} bg-[#0A0A0A] text-white`}>
        {children}
      </body>
    </html>
  );
}

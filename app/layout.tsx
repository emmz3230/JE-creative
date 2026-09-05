import type { Metadata } from "next";
import { Space_Grotesk, Inter } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-space-grotesk",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://thejecreative.com"),
  title: {
    default: "The JE Creative | Digital Design Studio",
    template: "%s | The JE Creative",
  },
  description:
    "The JE Creative is a senior-led digital design studio creating high-performing websites, digital products, brands, and interactive 3D experiences.",
  applicationName: "The JE Creative",
  keywords: [
    "digital design studio",
    "UI/UX design",
    "web development",
    "brand identity",
    "design systems",
    "3D web experiences",
    "technical writing",
  ],
  authors: [{ name: "The JE Creative" }],
  creator: "The JE Creative",
  publisher: "The JE Creative",
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    url: "/",
    siteName: "The JE Creative",
    title: "The JE Creative | Digital Design Studio",
    description:
      "Senior-led design and development for ambitious digital brands.",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "The JE Creative | Digital Design Studio",
    description:
      "Senior-led design and development for ambitious digital brands.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={`${spaceGrotesk.variable} ${inter.variable} font-body bg-charcoal text-offwhite`}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "ProfessionalService",
              name: "The JE Creative",
              url: process.env.NEXT_PUBLIC_SITE_URL || "https://thejecreative.com",
              description: metadata.description,
              email: "mailto:emmz3230@gmail.com",
              areaServed: "Worldwide",
              knowsAbout: [
                "UI/UX design",
                "web development",
                "brand identity",
                "design systems",
                "3D for the web",
                "technical writing",
              ],
              serviceType: [
                "Digital product design",
                "Web development",
                "Brand identity",
                "Design systems",
              ],
            }),
          }}
        />
        {children}
      </body>
    </html>
  );
}

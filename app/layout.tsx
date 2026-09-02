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
  title: "The JE Creative — Design Studio",
  description: "A two-person creative studio crafting premium digital experiences.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={`spaceGrotesk.variable{spaceGrotesk.variable}spaceGrotesk.variable{inter.variable} font-body bg-charcoal text-offwhite`}>
        {children}
      </body>
    </html>
  );
}

import type { Metadata } from "next";
import { Geist, Geist_Mono, Urbanist } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const urbanist = Urbanist({
  variable: "--font-urbanist",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Dibyanshu Mohanty | Product Engineer",
  description:
    "I am a Mobile Engineer currently working as a Founding engineer at MoMoney and I love building quality problem-driven scalable software products. Entrepreneur by spirit, love talking reading discussing about startups and ideas.",
  authors: [{ name: "Dibyanshu Mohanty" }],
  openGraph: {
    title: "Dibyanshu Mohanty | Product Engineer",
    description:
      "Full Stack Mobile Engineer / Product Thinker. Building quality problem-driven scalable software products.",
    url: "https://diby.xyz",
    siteName: "Dibyanshu Mohanty",
    images: [
      {
        url: "/images/preview.png",
        width: 1200,
        height: 630,
        alt: "Dibyanshu Mohanty - Product Engineer",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Dibyanshu Mohanty | Product Engineer",
    description: "Full Stack Mobile Engineer / Product Thinker",
    images: ["/images/preview.png"],
    creator: "@DcodeM",
  },
  icons: {
    icon: [
      { url: "/images/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/images/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${urbanist.variable} antialiased bg-black text-white`}
      >
        {/* Noise overlay for texture */}
        <div className="noise-overlay" />
        {children}
      </body>
    </html>
  );
}

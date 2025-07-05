import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Vortica.in - Innovation & Technology Solutions",
  description: "Vortica.in is at the forefront of innovation, delivering cutting-edge technology solutions for the future. Explore our innovative services and solutions.",
  keywords: "innovation, technology, digital solutions, vortica, future technology",
  openGraph: {
    title: "Vortica.in - Innovation & Technology Solutions",
    description: "Vortica.in is at the forefront of innovation, delivering cutting-edge technology solutions for the future.",
    url: "https://vortica.in",
    siteName: "Vortica.in",
    images: [
      {
        url: "/world-map.jpg",
        width: 1200,
        height: 630,
        alt: "Vortica.in Innovation",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Vortica.in - Innovation & Technology Solutions",
    description: "Vortica.in is at the forefront of innovation, delivering cutting-edge technology solutions for the future.",
    images: ["/world-map.jpg"],
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
    google: "add-your-google-site-verification",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${spaceGrotesk.className} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}

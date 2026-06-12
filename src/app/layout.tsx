import type { Metadata } from "next";

import Script from "next/script";
import "./globals.css";
import Footer from "@/components/Footer";
import Navbar from "@/components/layout/Navbar";
import { BackToTop } from "@/components/ui/BackToTop";

export const metadata: Metadata = {
  title: "Vortica - Innovation & Technology Solutions",
  description: "Vortica is at the forefront of innovation, delivering cutting-edge technology solutions for the future. Explore our innovative services and solutions.",
  keywords: "innovation, technology, digital solutions, vortica, future technology",
  manifest: "/site.webmanifest",
  icons: {
    icon: [
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon.ico" },
    ],
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
    other: [
      { rel: "icon", url: "/android-chrome-192x192.png", sizes: "192x192", type: "image/png" },
      { rel: "icon", url: "/android-chrome-512x512.png", sizes: "512x512", type: "image/png" },
    ],
  },
  openGraph: {
    title: "Vortica - Innovation & Technology Solutions",
    description: "Vortica is at the forefront of innovation, delivering cutting-edge technology solutions for the future.",
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
    title: "Vortica - Innovation & Technology Solutions",
    description: "Vortica is at the forefront of innovation, delivering cutting-edge technology solutions for the future.",
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
      <head>
        {/* Preconnect */}
        <link rel="preconnect" href="https://www.facebook.com" />
        <link rel="preconnect" href="https://www.googletagmanager.com" />

        {/* Facebook Pixel */}
        <Script id="fb-pixel" strategy="afterInteractive">
          {`
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '1060854828813203');
            fbq('track', 'PageView');
          `}
        </Script>


        {/* Google Tag Manager */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-0NWGRB1NPX"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-0NWGRB1NPX');
          `}
        </Script>
      </head>
      <body
        className="antialiased"
      >
        <noscript>
          <img
            height="1"
            width="1"
            style={{ display: 'none' }}
            src="https://www.facebook.com/tr?id=1060854828813203&ev=PageView&noscript=1"
            alt=""
          />
        </noscript>
        <Navbar />
        {children}
        <BackToTop />
        <Footer />
      </body>
    </html>
  );
}

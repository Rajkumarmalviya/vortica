import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Vortica.in - Innovating for Tomorrow",
  description: "Welcome to Vortica.in - Where innovation meets the future. Discover our cutting-edge technology solutions and services.",
};

// Structured data for better SEO
const structuredData = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Vortica.in",
  "description": "Innovation technology solutions provider",
  "url": "https://vortica.in",
  "logo": "https://vortica.in/logo.png",
  "sameAs": [
    "https://linkedin.com/company/vortica",
    "https://twitter.com/vortica"
  ]
};

export default function Home() {
  return (
    <main className="min-h-screen bg-black" role="main">
      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      
      {/* Hero Section */}
      <section 
        className="relative h-screen flex items-center justify-center overflow-hidden"
        aria-label="Welcome to Vortica"
      >
        {/* Background Image */}
        {/* Multi-layered innovative background */}
        <div className="absolute inset-0 bg-black overflow-hidden">
          {/* Abstract digital pattern */}
          <div
            className="absolute inset-0 bg-[url('/world-map.jpg')]
            bg-cover bg-center bg-no-repeat opacity-70"
          />

          {/* Vibrant gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-black-900/50 via-black-900/60 to-black-900/50" />

          {/* Animated particles effect */}
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `
                radial-gradient(circle at 50% 50%, rgba(255, 255, 255, 0.1) 1px, transparent 1px),
                radial-gradient(circle at 0% 0%, rgba(255, 255, 255, 0.1) 1px, transparent 1px)
              `,
              backgroundSize: '40px 40px',
              backgroundPosition: '0 0, 20px 20px',
              opacity: 0.3
            }}
          />

          {/* Additional glow effect */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-indigo-900/15 to-black/60" />
        </div>

        {/* Content */}
        <div className="relative z-10 text-center px-4 animate-fade-in">
          <h1
            className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-bold text-white tracking-tight"
            style={{
              textShadow: '2px 2px 4px rgba(0,0,0,0.3)',
              letterSpacing: '-0.02em'
            }}
          >
            Vortica.in
          </h1>
          <p
            className="text-sm sm:text-base md:text-lg lg:text-xl text-right text-gray-300 font-light tracking-[0.25em]"
            aria-label="Company tagline"
          >
            Innovation is the future
          </p>
        </div>

        {/* Scroll Indicator */}
        <div 
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce"
          aria-hidden="true"
          role="presentation"
        >
          <div className="w-6 h-10 border-2 border-white/50 rounded-full flex items-start justify-center p-2">
            <div className="w-1 h-3 bg-white/50 rounded-full" />
          </div>
        </div>
      </section>
    </main>
  );
}

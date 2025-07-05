"use client"

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

import { useState, useEffect } from "react";

export default function Home() {
  const [showScroll, setShowScroll] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      // Hide scroll indicator when user scrolls past 30% of first screen
      const scrollThreshold = window.innerHeight * 0.3;
      setShowScroll(window.scrollY < scrollThreshold);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <main className="min-h-screen bg-black text-gray-200" role="main">
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
          className={`absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce transition-opacity duration-300 ${
            showScroll ? 'opacity-100' : 'opacity-0'
          } cursor-pointer`}
          aria-hidden="true"
          role="presentation"
          onClick={() => {
            document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' });
          }}
        >
          <div className="w-6 h-10 border-2 border-white/50 rounded-full flex items-start justify-center p-2">
            <div className="w-1 h-3 bg-white/50 rounded-full" />
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 relative" aria-label="Our Services">
        <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center opacity-5" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-white to-white/90 mb-4">
              Our Services
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Comprehensive solutions for your digital transformation journey
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Core Custom Software Development */}
            <div className="group bg-gray-900/50 hover:bg-gray-900/70 p-6 rounded-xl border border-gray-800 hover:border-cyan-400/30 transition-all duration-300 shadow-xl hover:shadow-cyan-400/10 backdrop-blur-sm hover:-translate-y-2 relative overflow-hidden">
              <div className="text-cyan-400 text-4xl mb-4 transform group-hover:scale-110 transition-transform duration-300">🔧</div>
              <h3 className="text-xl font-bold text-white mb-4">Core Custom Software Development</h3>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-start">
                  <span className="text-cyan-400 mr-2">▹</span>
                  <span>Web Application Development</span>
                </li>
                <li className="flex items-start">
                  <span className="text-cyan-400 mr-2">▹</span>
                  <span>Mobile Application Development</span>
                </li>
                <li className="flex items-start">
                  <span className="text-cyan-400 mr-2">▹</span>
                  <span>Desktop Application Development</span>
                </li>
                <li className="flex items-start">
                  <span className="text-cyan-400 mr-2">▹</span>
                  <span>API Development & Integration</span>
                </li>
              </ul>
              <div className="absolute inset-0 border-2 border-cyan-400/0 group-hover:border-cyan-400/20 rounded-xl pointer-events-none transition-all duration-500"></div>
            </div>

            {/* AI & Automation */}
            <div className="group bg-gray-900/50 hover:bg-gray-900/70 p-6 rounded-xl border border-gray-800 hover:border-cyan-400/30 transition-all duration-300 shadow-xl hover:shadow-cyan-400/10 backdrop-blur-sm hover:-translate-y-2 relative overflow-hidden">
              <div className="text-cyan-400 text-4xl mb-4 transform group-hover:scale-110 transition-transform duration-300">🧠</div>
              <h3 className="text-xl font-bold text-white mb-4">AI & Automation Services</h3>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-start">
                  <span className="text-cyan-400 mr-2">▹</span>
                  <span>AI-Powered Process Automation</span>
                </li>
                <li className="flex items-start">
                  <span className="text-cyan-400 mr-2">▹</span>
                  <span>Chatbots & Virtual Assistants</span>
                </li>
                <li className="flex items-start">
                  <span className="text-cyan-400 mr-2">▹</span>
                  <span>Data Analytics & Business Intelligence</span>
                </li>
                <li className="flex items-start">
                  <span className="text-cyan-400 mr-2">▹</span>
                  <span>Computer Vision & NLP Solutions</span>
                </li>
              </ul>
              <div className="absolute inset-0 border-2 border-cyan-400/0 group-hover:border-cyan-400/20 rounded-xl pointer-events-none transition-all duration-500"></div>
            </div>

            {/* Enterprise & Cloud */}
            <div className="group bg-gray-900/50 hover:bg-gray-900/70 p-6 rounded-xl border border-gray-800 hover:border-cyan-400/30 transition-all duration-300 shadow-xl hover:shadow-cyan-400/10 backdrop-blur-sm hover:-translate-y-2 relative overflow-hidden">
              <div className="text-cyan-400 text-4xl mb-4 transform group-hover:scale-110 transition-transform duration-300">🏗️</div>
              <h3 className="text-xl font-bold text-white mb-4">Enterprise & Cloud Solutions</h3>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-start">
                  <span className="text-cyan-400 mr-2">▹</span>
                  <span>ERP/CRM System Development</span>
                </li>
                <li className="flex items-start">
                  <span className="text-cyan-400 mr-2">▹</span>
                  <span>Cloud-Native Application Development</span>
                </li>
                <li className="flex items-start">
                  <span className="text-cyan-400 mr-2">▹</span>
                  <span>Microservices & Modular Architecture</span>
                </li>
                <li className="flex items-start">
                  <span className="text-cyan-400 mr-2">▹</span>
                  <span>Legacy System Modernization</span>
                </li>
              </ul>
              <div className="absolute inset-0 border-2 border-cyan-400/0 group-hover:border-cyan-400/20 rounded-xl pointer-events-none transition-all duration-500"></div>
            </div>

            {/* E-Commerce & CMS */}
            <div className="group bg-gray-900/50 hover:bg-gray-900/70 p-6 rounded-xl border border-gray-800 hover:border-cyan-400/30 transition-all duration-300 shadow-xl hover:shadow-cyan-400/10 backdrop-blur-sm hover:-translate-y-2 relative overflow-hidden">
              <div className="text-cyan-400 text-4xl mb-4 transform group-hover:scale-110 transition-transform duration-300">🛒</div>
              <h3 className="text-xl font-bold text-white mb-4">E-Commerce & CMS Solutions</h3>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-start">
                  <span className="text-cyan-400 mr-2">▹</span>
                  <span>Shopify App Development</span>
                </li>
                <li className="flex items-start">
                  <span className="text-cyan-400 mr-2">▹</span>
                  <span>WooCommerce & Shopify Customization</span>
                </li>
                <li className="flex items-start">
                  <span className="text-cyan-400 mr-2">▹</span>
                  <span>Headless Commerce Development</span>
                </li>
              </ul>
              <div className="absolute inset-0 border-2 border-cyan-400/0 group-hover:border-cyan-400/20 rounded-xl pointer-events-none transition-all duration-500"></div>
            </div>

            {/* UI/UX & Product Design */}
            <div className="group bg-gray-900/50 hover:bg-gray-900/70 p-6 rounded-xl border border-gray-800 hover:border-cyan-400/30 transition-all duration-300 shadow-xl hover:shadow-cyan-400/10 backdrop-blur-sm hover:-translate-y-2 relative overflow-hidden">
              <div className="text-cyan-400 text-4xl mb-4 transform group-hover:scale-110 transition-transform duration-300">🧩</div>
              <h3 className="text-xl font-bold text-white mb-4">UI/UX & Product Design</h3>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-start">
                  <span className="text-cyan-400 mr-2">▹</span>
                  <span>UI/UX Design</span>
                </li>
                <li className="flex items-start">
                  <span className="text-cyan-400 mr-2">▹</span>
                  <span>Prototyping & MVP Design</span>
                </li>
                <li className="flex items-start">
                  <span className="text-cyan-400 mr-2">▹</span>
                  <span>Accessibility & Responsiveness</span>
                </li>
              </ul>
              <div className="absolute inset-0 border-2 border-cyan-400/0 group-hover:border-cyan-400/20 rounded-xl pointer-events-none transition-all duration-500"></div>
            </div>

            {/* DevOps & Security */}
            <div className="group bg-gray-900/50 hover:bg-gray-900/70 p-6 rounded-xl border border-gray-800 hover:border-cyan-400/30 transition-all duration-300 shadow-xl hover:shadow-cyan-400/10 backdrop-blur-sm hover:-translate-y-2 relative overflow-hidden">
              <div className="text-cyan-400 text-4xl mb-4 transform group-hover:scale-110 transition-transform duration-300">🔐</div>
              <h3 className="text-xl font-bold text-white mb-4">DevOps & Security</h3>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-start">
                  <span className="text-cyan-400 mr-2">▹</span>
                  <span>CI/CD Setup</span>
                </li>
                <li className="flex items-start">
                  <span className="text-cyan-400 mr-2">▹</span>
                  <span>Cloud Infrastructure & Monitoring</span>
                </li>
                <li className="flex items-start">
                  <span className="text-cyan-400 mr-2">▹</span>
                  <span>Security Services</span>
                </li>
              </ul>
              <div className="absolute inset-0 border-2 border-cyan-400/0 group-hover:border-cyan-400/20 rounded-xl pointer-events-none transition-all duration-500"></div>
            </div>
          </div>

          {/* Technology Consulting Section */}
          <div className="mt-16 bg-gradient-to-br from-gray-900/80 to-gray-900/20 p-8 rounded-xl border border-gray-800 shadow-xl backdrop-blur-sm hover:shadow-cyan-400/10 transition-all duration-300 hover:scale-[1.01] relative overflow-hidden group">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-cyan-400/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="text-cyan-400 text-4xl mb-6">🧠</div>
            <h3 className="text-2xl font-bold text-white mb-6">Technology Consulting & Team Extension</h3>
            <div className="grid md:grid-cols-3 gap-8 text-gray-300">
              <div>
                <h4 className="text-white font-semibold mb-3 flex items-center">
                  <span className="w-2 h-2 bg-cyan-400 rounded-full mr-2"></span>
                  Technical Architecture Consulting
                </h4>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <span className="text-cyan-400 mr-2">•</span>
                    <span>Scalable, secure systems</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-cyan-400 mr-2">•</span>
                    <span>Stack recommendations</span>
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="text-white font-semibold mb-3 flex items-center">
                  <span className="w-2 h-2 bg-cyan-400 rounded-full mr-2"></span>
                  Startup & MVP Advisory
                </h4>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <span className="text-cyan-400 mr-2">•</span>
                    <span>Idea to product journey</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-cyan-400 mr-2">•</span>
                    <span>Growth-focused sprints</span>
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="text-white font-semibold mb-3 flex items-center">
                  <span className="w-2 h-2 bg-cyan-400 rounded-full mr-2"></span>
                  Dedicated Development Teams
                </h4>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <span className="text-cyan-400 mr-2">•</span>
                    <span>Vetted engineers</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-cyan-400 mr-2">•</span>
                    <span>Flexible engagement</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Us Section */}
      <section className="py-20 relative" aria-label="Contact Us">
        <div className="absolute inset-0 bg-[url('/grid-dark.svg')] bg-center opacity-5" />

        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center mb-12">
            <h2 className="text-4xl sm:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-white to-white/90 mb-4">
              Get in Touch
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Let&apos;s discuss how we can help transform your ideas into reality
            </p>
          </div>

          <div className="animate-fade-in">
            {/* Contact Form */}
            <form
              action="https://formsubmit.co/rajmalvi789@gmail.com"
              method="POST"
              className="space-y-6 bg-gray-900/50 hover:bg-gray-900/70 p-8 rounded-xl border border-gray-800 hover:border-cyan-400/30 shadow-xl hover:shadow-cyan-400/10 backdrop-blur-sm transition-all duration-300 relative overflow-hidden group"
            >
              {/* Hidden Fields */}
              <input type="hidden" name="_next" value="https://vortica.in/thank-you" />
              <input type="hidden" name="_subject" value="New Contact Form Submission" />
              <input type="hidden" name="_captcha" value="false" />

              {/* Name Field */}
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                  Name <span className="text-cyan-400">*</span>
                </label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  required
                  className="w-full px-4 py-3 bg-gray-900/50 border border-gray-700 rounded-lg focus:ring-2 focus:ring-cyan-400/50 focus:border-transparent text-white placeholder-gray-500 transition-all duration-300 hover:border-gray-600"
                  placeholder="Enter your name"
                />
              </div>

              {/* Email Field */}
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                  Email <span className="text-cyan-400">*</span>
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  required
                  className="w-full px-4 py-3 bg-gray-900/50 border border-gray-700 rounded-lg focus:ring-2 focus:ring-cyan-400/50 focus:border-transparent text-white placeholder-gray-500 transition-all duration-300 hover:border-gray-600"
                  placeholder="Enter your email"
                />
              </div>

              {/* Message Field */}
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                  Message <span className="text-cyan-400">*</span>
                </label>
                <textarea
                  name="message"
                  id="message"
                  required
                  rows={4}
                  className="w-full px-4 py-3 bg-gray-900/50 border border-gray-700 rounded-lg focus:ring-2 focus:ring-cyan-400/50 focus:border-transparent text-white placeholder-gray-500 transition-all duration-300 hover:border-gray-600"
                  placeholder="Tell us about your project"
                />
              </div>

              {/* Submit Button */}
              <div>
                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-medium py-3 px-6 rounded-lg transition-all duration-300 flex items-center justify-center space-x-2 shadow-lg hover:shadow-cyan-400/20 hover:scale-[1.02] active:scale-[0.98]"
                >
                  <span>Send Message</span>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </main>
  );
}
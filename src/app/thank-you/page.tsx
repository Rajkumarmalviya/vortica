"use client"

import Link from 'next/link';
import { useEffect } from 'react';
import { trackEvent, AnalyticsEvents } from '../analytics';

export default function ThankYou() {
  useEffect(() => {
    // Track successful form submission
    trackEvent(AnalyticsEvents.FORM_SUCCESS);
  }, []);

  return (
    <main className="min-h-screen bg-black flex items-center justify-center px-4">
      <div className="relative z-10 text-center max-w-2xl mx-auto">
        <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6">Thank You!</h1>
        <p className="text-gray-300 text-lg mb-8">
          We&apos;ve received your message and will get back to you shortly.
        </p>
        <Link
          href="/"
          className="inline-block bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-3 px-8 rounded-lg transition-colors duration-200"
          onClick={() => trackEvent('return_home_click')}
        >
          Return Home
        </Link>
      </div>

      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-black-900/50 via-black-900/60 to-black-900/50" />
      <div 
        className="absolute inset-0"
        style={{
          backgroundImage: `radial-gradient(circle at center, rgba(255,255,255,0.1) 1px, transparent 1px)`,
          backgroundSize: '40px 40px',
          opacity: 0.3
        }}
      />
    </main>
  );
}
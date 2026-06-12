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
    <main className="relative flex min-h-screen items-center justify-center px-4">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(91,107,196,0.08),transparent_28%),linear-gradient(145deg,#000000_0%,#111111_34%,#1a1a1a_58%,#000000_100%)]" />
      <div className="relative z-10 mx-auto max-w-2xl rounded-[36px] border border-[rgba(160,175,255,0.15)] bg-[linear-gradient(180deg,rgba(255,255,255,0.055),rgba(255,255,255,0.018))] p-10 text-center shadow-[0_28px_90px_rgba(8,0,14,0.38)] backdrop-blur">
        <p className="text-[0.74rem] font-medium uppercase tracking-[0.18em] text-[#5B6BC4]">Message received</p>
        <h1 className="mb-6 mt-4 text-[2.7rem] font-semibold tracking-[-0.05em] text-white sm:text-[3.4rem]">Thank You!</h1>
        <p className="mb-8 text-[1.04rem] leading-8 text-white/75/74">
          We&apos;ve received your message and will get back to you shortly.
        </p>
        <Link
          href="/"
          className="inline-block rounded-full border border-[#5B6BC4]/90 bg-[linear-gradient(135deg,#5B6BC4_0%,#5B6BC4_55%,#5B6BC4_100%)] px-8 py-3.5 text-[0.78rem] font-medium uppercase tracking-[0.12em] text-white shadow-[0_16px_40px_rgba(91,107,196,0.18)] hover:-translate-y-1"
          onClick={() => trackEvent('return_home_click')}
        >
          Return Home
        </Link>
      </div>
    </main>
  );
}

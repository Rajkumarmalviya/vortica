"use client";

import { AnalyticsEvents, trackEvent } from "@/lib/analytics";

export default function ContactPage() {
  return (
    <main className="mx-auto max-w-3xl px-4 py-16 text-gray-100 sm:px-6 lg:px-8">
      <h1 className="text-4xl font-bold text-white">Let’s talk about your project</h1>
      <p className="mt-4 text-gray-300">Share your goals and we will get back with a roadmap and estimate.</p>

      <form
        action="https://formsubmit.co/rajmalvi789@gmail.com"
        method="POST"
        className="mt-8 space-y-5 rounded-xl border border-gray-800 bg-gray-900/50 p-8"
        onSubmit={() => trackEvent(AnalyticsEvents.FORM_SUBMIT, { form_name: "contact_form", location: "contact" })}
      >
        <input type="hidden" name="_next" value="https://vortica.in/thank-you" />
        <input type="hidden" name="_subject" value="New Contact Form Submission" />
        <input type="hidden" name="_captcha" value="false" />

        <label className="block">
          <span className="mb-2 block text-sm text-gray-300">Name</span>
          <input name="name" required className="w-full rounded-lg border border-gray-700 bg-black px-4 py-3" />
        </label>

        <label className="block">
          <span className="mb-2 block text-sm text-gray-300">Email</span>
          <input name="email" type="email" required className="w-full rounded-lg border border-gray-700 bg-black px-4 py-3" />
        </label>

        <label className="block">
          <span className="mb-2 block text-sm text-gray-300">Message</span>
          <textarea name="message" rows={5} required className="w-full rounded-lg border border-gray-700 bg-black px-4 py-3" />
        </label>

        <button
          type="submit"
          className="rounded-lg bg-cyan-500 px-5 py-3 font-semibold text-black transition hover:bg-cyan-400"
        >
          Send message
        </button>
      </form>
    </main>
  );
}

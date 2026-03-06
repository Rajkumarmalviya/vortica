import AnimatedButton from "@/components/ui/AnimatedButton";
import { siteCopy } from "@/content/site-copy";

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden py-24 sm:py-28" aria-label="Hero">
      <div className="absolute inset-0 bg-[url('/world-map.jpg')] bg-cover bg-center opacity-20" />
      <div className="absolute inset-0 bg-gradient-to-b from-cyan-500/10 via-black to-black" />

      <div className="relative mx-auto max-w-6xl px-4 text-center sm:px-6 lg:px-8">
        <p className="text-sm uppercase tracking-[0.2em] text-cyan-300">{siteCopy.tagline}</p>
        <h1 className="mx-auto mt-6 max-w-4xl text-4xl font-bold leading-tight text-white sm:text-5xl md:text-6xl">
          {siteCopy.heroTitle}
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-lg text-gray-300">{siteCopy.heroSubtitle}</p>
        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <AnimatedButton href="/contact">{siteCopy.primaryCta}</AnimatedButton>
          <AnimatedButton href="/services" variant="secondary">
            {siteCopy.secondaryCta}
          </AnimatedButton>
        </div>
      </div>
    </section>
  );
}

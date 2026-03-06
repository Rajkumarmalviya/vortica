import AnimatedButton from "@/components/ui/AnimatedButton";

export default function CTASection() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8" aria-label="Call to action">
      <div className="rounded-2xl border border-cyan-400/30 bg-gradient-to-r from-cyan-500/15 to-blue-600/10 p-8 text-center">
        <h2 className="text-3xl font-bold text-white">Ready to build with confidence?</h2>
        <p className="mx-auto mt-3 max-w-2xl text-gray-300">
          Tell us your goals and we will propose the right roadmap, team shape, and delivery timeline.
        </p>
        <div className="mt-6">
          <AnimatedButton href="/contact">Talk to an expert</AnimatedButton>
        </div>
      </div>
    </section>
  );
}

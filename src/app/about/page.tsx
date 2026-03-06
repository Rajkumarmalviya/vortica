import SectionHeading from "@/components/ui/SectionHeading";

export default function AboutPage() {
  return (
    <main className="mx-auto max-w-5xl px-4 py-16 text-gray-100 sm:px-6 lg:px-8">
      <SectionHeading
        title="About Vortica"
        description="We are a product engineering partner helping teams turn ideas into secure, scalable digital products."
      />
      <div className="space-y-4 text-gray-300">
        <p>
          Our team combines design, engineering, cloud, and delivery excellence to build products that drive measurable impact.
        </p>
        <p>
          We work in transparent sprint cycles with clear milestones, enabling faster learning and predictable execution.
        </p>
      </div>
    </main>
  );
}

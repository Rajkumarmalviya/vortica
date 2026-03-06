import SectionHeading from "@/components/ui/SectionHeading";

const trustPoints = [
  "Product-minded engineering teams",
  "Transparent sprint execution",
  "Architecture designed for scale",
  "Security and quality built into delivery",
];

export default function TrustSection() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8" aria-label="Why choose Vortica">
      <SectionHeading title="Why Vortica" description="A reliable partner from product discovery to production scale." />
      <div className="grid gap-4 md:grid-cols-2">
        {trustPoints.map((point) => (
          <div key={point} className="rounded-lg border border-gray-800 bg-gray-900/40 px-5 py-4 text-gray-200">
            ✓ {point}
          </div>
        ))}
      </div>
    </section>
  );
}

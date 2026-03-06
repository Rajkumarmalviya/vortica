import SectionHeading from "@/components/ui/SectionHeading";

const caseStudies = [
  {
    title: "Operations automation platform",
    summary: "Reduced manual processing effort by introducing workflow automation and dashboards.",
  },
  {
    title: "Cloud modernization engagement",
    summary: "Migrated a legacy stack to cloud-native architecture with improved stability and release speed.",
  },
  {
    title: "Commerce revamp",
    summary: "Improved storefront UX and checkout flows to increase conversion and retention.",
  },
];

export default function WorkPage() {
  return (
    <main className="mx-auto max-w-7xl px-4 py-16 text-gray-100 sm:px-6 lg:px-8">
      <SectionHeading
        title="Selected Work"
        description="Representative project outcomes across automation, cloud, and product experiences."
      />
      <div className="grid gap-6 md:grid-cols-3">
        {caseStudies.map((item) => (
          <article key={item.title} className="rounded-xl border border-gray-800 bg-gray-900/50 p-6">
            <h3 className="text-xl font-semibold text-white">{item.title}</h3>
            <p className="mt-3 text-gray-300">{item.summary}</p>
          </article>
        ))}
      </div>
    </main>
  );
}

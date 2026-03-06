import { notFound } from "next/navigation";
import AnimatedButton from "@/components/ui/AnimatedButton";
import { getServiceBySlug, services } from "@/content/services";

type ServiceDetailProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }));
}

export default async function ServiceDetailPage({ params }: ServiceDetailProps) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);

  if (!service) {
    notFound();
  }

  return (
    <main className="mx-auto max-w-5xl px-4 py-16 text-gray-100 sm:px-6 lg:px-8">
      <p className="text-4xl">{service.icon}</p>
      <h1 className="mt-4 text-4xl font-bold text-white">{service.title}</h1>
      <p className="mt-4 text-lg text-gray-300">{service.summary}</p>

      <section className="mt-10">
        <h2 className="text-2xl font-semibold text-white">Key outcomes</h2>
        <ul className="mt-4 grid gap-3 sm:grid-cols-3">
          {service.outcomes.map((outcome) => (
            <li key={outcome} className="rounded-lg border border-gray-800 bg-gray-900/50 p-4">
              {outcome}
            </li>
          ))}
        </ul>
      </section>

      <section className="mt-10">
        <h2 className="text-2xl font-semibold text-white">Capabilities</h2>
        <ul className="mt-4 space-y-3 text-gray-300">
          {service.capabilities.map((capability) => (
            <li key={capability}>• {capability}</li>
          ))}
        </ul>
      </section>

      <div className="mt-10">
        <AnimatedButton href="/contact">Discuss this service</AnimatedButton>
      </div>
    </main>
  );
}

import SectionHeading from "@/components/ui/SectionHeading";
import ServiceCard from "@/components/ui/ServiceCard";
import { services } from "@/content/services";

export default function ServicesPage() {
  return (
    <main className="mx-auto max-w-7xl px-4 py-16 text-gray-100 sm:px-6 lg:px-8">
      <SectionHeading
        title="Services"
        description="Explore focused service tracks designed to deliver measurable product and business outcomes."
      />
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {services.map((service) => (
          <ServiceCard key={service.slug} service={service} />
        ))}
      </div>
    </main>
  );
}

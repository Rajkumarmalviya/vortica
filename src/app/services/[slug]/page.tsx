import { notFound } from "next/navigation";
import ServiceDetailClient from "@/app/services/[slug]/service-detail-client";
import { getServiceBySlug, services } from "@/content/services";

type ServiceDetailPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }));
}

export default async function ServiceDetailPage({ params }: ServiceDetailPageProps) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);

  if (!service) {
    notFound();
  }

  const relatedServices = services.filter((entry) => entry.slug !== slug).slice(0, 3);

  return <ServiceDetailClient service={service} relatedServices={relatedServices} />;
}

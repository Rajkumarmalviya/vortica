import Link from "next/link";
import { Service } from "@/content/services";

type ServiceCardProps = {
  service: Service;
};

export default function ServiceCard({ service }: ServiceCardProps) {
  return (
    <article className="rounded-xl border border-gray-800 bg-gray-900/60 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-cyan-400/40 hover:shadow-[0_0_20px_rgba(34,211,238,0.18)]">
      <div className="mb-3 text-3xl">{service.icon}</div>
      <h3 className="text-xl font-semibold text-white">{service.title}</h3>
      <p className="mt-3 text-gray-300">{service.summary}</p>
      <Link
        href={`/services/${service.slug}`}
        className="mt-5 inline-flex text-sm font-medium text-cyan-300 hover:text-cyan-200"
      >
        View details →
      </Link>
    </article>
  );
}

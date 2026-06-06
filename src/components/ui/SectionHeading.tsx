// components/ui/SectionHeading.tsx
interface SectionHeadingProps {
  title: string;
  description?: string;
  align?: "left" | "center" | "right";
  className?: string;
}

export default function SectionHeading({ 
  title, 
  description, 
  align = "left",
  className = ""
}: SectionHeadingProps) {
  const alignClasses = {
    left: "text-left",
    center: "text-center mx-auto",
    right: "text-right ml-auto",
  };

  return (
    <div className={`max-w-2xl ${alignClasses[align]} ${className}`}>
      <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
        {title}
      </h2>
      {description && (
        <p className="mt-4 text-base leading-relaxed text-[#a1a1aa]/70 sm:text-lg">
          {description}
        </p>
      )}
    </div>
  );
}
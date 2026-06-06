type PageHeroProps = {
  eyebrow?: string;
  title: string;
  description: string;
};

export default function PageHero({ eyebrow, title, description }: PageHeroProps) {
  return (
    <div className="max-w-3xl">
      {eyebrow ? (
        <p className="text-[0.74rem] font-medium uppercase tracking-[0.18em] text-[#E8C96A]">
          {eyebrow}
        </p>
      ) : null}
      <h1 className="mt-4 text-[2.35rem] font-semibold tracking-[-0.05em] text-white sm:text-[3rem]">
        {title}
      </h1>
      <p className="mt-5 text-[1.04rem] leading-8 tracking-[-0.015em] text-[#a1a1aa]/74">
        {description}
      </p>
    </div>
  );
}

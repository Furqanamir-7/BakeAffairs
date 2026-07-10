type Props = {
  eyebrow: string;
  title: string;
  description?: string;
};

export default function PageIntro({ eyebrow, title, description }: Props) {
  return (
    <section className="section-maroon page-top relative overflow-hidden pb-10 sm:pb-14">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_-10%,rgba(146,42,40,0.55),transparent_65%)]" />
      <div className="container-px relative mx-auto max-w-2xl px-5 text-center sm:px-8">
        <p className="font-script text-xl italic text-maroon-blush sm:text-2xl">
          {eyebrow}
        </p>
        <h1 className="mt-2 font-serif text-[1.75rem] leading-tight text-cream sm:text-4xl md:text-5xl">
          {title}
        </h1>
        <div className="peach-divider-light" aria-hidden="true" />
        {description && (
          <p className="mt-4 text-sm leading-relaxed text-cream/75 sm:text-lg">
            {description}
          </p>
        )}
      </div>
    </section>
  );
}

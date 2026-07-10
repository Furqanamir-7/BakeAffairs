type Props = {
  eyebrow: string;
  title: string;
  description?: string;
};

export default function PageIntro({ eyebrow, title, description }: Props) {
  return (
    <section className="section-dark page-top relative overflow-hidden pb-10 sm:pb-14">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_-10%,rgba(109,18,19,0.5),transparent_65%)]" />
      <div className="container-px relative mx-auto max-w-2xl text-center">
        <p className="eyebrow">{eyebrow}</p>
        <h1 className="section-title mt-2">{title}</h1>
        <div className="peach-divider" aria-hidden="true" />
        {description && (
          <p className="text-body mt-4 text-base sm:text-lg">{description}</p>
        )}
      </div>
    </section>
  );
}

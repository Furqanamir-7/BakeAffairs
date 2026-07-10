import Reveal from "./Reveal";
import { CameraIcon } from "./icons";

const items = [
  { caption: "Three-tier celebration cake", emoji: "🎂", span: "tall" },
  { caption: "Fudgy walnut brownies", emoji: "🍫", span: "" },
  { caption: "Chocolate chip cookies", emoji: "🍪", span: "" },
  { caption: "Buttercream florals", emoji: "🌸", span: "" },
  { caption: "Birthday drip cake", emoji: "🎉", span: "tall" },
  { caption: "Gift boxes & bundles", emoji: "🎁", span: "" },
];

type Props = {
  compact?: boolean;
};

export default function Gallery({ compact = false }: Props) {
  return (
    <section className={`${compact ? "section-surface" : "section-deep"} py-16 sm:py-24`}>
      <div className="container-px">
        {!compact && (
          <Reveal>
            <div className="mx-auto max-w-2xl text-center">
              <p className="eyebrow">A peek inside</p>
              <h2 className="section-title mt-2">From Our Kitchen</h2>
              <p className="text-body mt-4 text-base sm:text-lg">
                A glimpse of recent bakes. Follow along on Instagram for the latest
                creations.
              </p>
            </div>
          </Reveal>
        )}

        <div
          className={`grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 ${
            compact ? "" : "mt-14"
          }`}
        >
          {items.map((item, i) => (
            <Reveal
              key={item.caption}
              delay={(i % 3) * 0.08}
              className={item.span === "tall" ? "lg:row-span-2" : ""}
            >
              <figure
                className={`card-peach group relative h-full w-full overflow-hidden ${
                  item.span === "tall" ? "min-h-[18rem] lg:min-h-[26rem]" : "min-h-[14rem]"
                }`}
              >
                <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 text-primary/70">
                  <span className="text-5xl opacity-90">{item.emoji}</span>
                  <CameraIcon className="h-7 w-7 opacity-50" />
                </div>
                <figcaption className="absolute inset-x-0 bottom-0 translate-y-2 bg-gradient-to-t from-primary/90 to-transparent p-5 pt-12 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                  <span className="font-serif text-lg text-cream">{item.caption}</span>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

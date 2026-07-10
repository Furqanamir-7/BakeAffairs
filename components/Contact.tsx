import Reveal from "./Reveal";
import { site } from "@/lib/site";
import { InstagramIcon, WhatsAppIcon } from "./icons";

type Props = {
  compact?: boolean;
};

export default function Contact({ compact = false }: Props) {
  return (
    <section className="section-dark py-16 sm:py-24">
      <div className="container-px">
        <Reveal>
          <div className="card-peach relative overflow-hidden px-6 py-14 text-center sm:px-12 sm:py-20">
            <div className="pointer-events-none absolute -right-16 -top-16 h-56 w-56 rounded-full bg-primary/15 blur-3xl" />

            <div className="relative mx-auto max-w-xl">
              {!compact && (
                <>
                  <p className="eyebrow">Let&apos;s bake something</p>
                  <h2 className="section-title mt-2 !text-primary">Ready to Order?</h2>
                  <div className="peach-divider !via-primary" aria-hidden="true" />
                  <p className="mt-4 text-base leading-relaxed text-espresso/75 sm:text-lg">
                    DM us on Instagram or send a WhatsApp message — tell us what
                    you&apos;re celebrating and we&apos;ll take it from there.
                  </p>
                </>
              )}

              <div
                className={`flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-4 ${
                  compact ? "" : "mt-9"
                }`}
              >
                <a
                  href={site.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-peach w-full sm:w-auto"
                >
                  <InstagramIcon className="h-5 w-5" />
                  Message on Instagram
                </a>
                <a
                  href={site.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-outline w-full sm:w-auto"
                >
                  <WhatsAppIcon className="h-5 w-5" />
                  Chat on WhatsApp
                </a>
              </div>

              <p className="mt-7 text-sm text-espresso/60">
                Find us on Instagram{" "}
                <a
                  href={site.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-medium text-primary underline-offset-4 hover:underline"
                >
                  {site.instagramHandle}
                </a>
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

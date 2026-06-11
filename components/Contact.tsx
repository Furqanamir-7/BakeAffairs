import Reveal from "./Reveal";
import { site } from "@/lib/site";
import { InstagramIcon, WhatsAppIcon } from "./icons";

export default function Contact() {
  return (
    <section id="order" className="bg-background py-20 sm:py-28">
      <div className="container-px">
        <Reveal>
          <div className="relative overflow-hidden rounded-[2.5rem] border border-secondary/15 bg-gradient-to-br from-parchment via-background to-accent/50 px-6 py-14 text-center shadow-soft sm:px-12 sm:py-20">
            <div className="pointer-events-none absolute -right-16 -top-16 h-56 w-56 rounded-full bg-primary/20 blur-3xl" />
            <div className="pointer-events-none absolute -bottom-20 -left-16 h-64 w-64 rounded-full bg-accent/50 blur-3xl" />

            <div className="relative mx-auto max-w-xl">
              <p className="eyebrow">Let&apos;s bake something</p>
              <h2 className="section-title mt-2">Ready to Order?</h2>
              <p className="mt-4 text-base leading-relaxed text-espresso/75 sm:text-lg">
                DM us on Instagram or send a WhatsApp message — tell us what
                you&apos;re celebrating and we&apos;ll take it from there.
              </p>

              <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-4">
                <a
                  href={site.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-filled w-full sm:w-auto"
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
                  className="font-medium text-secondary underline-offset-4 hover:underline"
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

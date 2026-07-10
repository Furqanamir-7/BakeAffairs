import Link from "next/link";
import { navLinks, site } from "@/lib/site";
import Logo from "@/components/Logo";
import { InstagramIcon } from "./icons";

export default function Footer() {
  return (
    <footer className="bg-maroon-band text-cream">
      <div className="container-px py-14">
        <div className="grid gap-12 md:grid-cols-3 md:items-start">
          <div className="text-center md:text-left">
            <Link
              href="/"
              className="inline-block transition-transform duration-300 hover:scale-[1.02]"
            >
              <Logo
                size="footer"
                className="mx-auto drop-shadow-[0_4px_18px_rgba(0,0,0,0.35)] md:mx-0"
              />
            </Link>
            <p className="mt-5 mx-auto max-w-xs text-sm leading-relaxed text-cream/70 md:mx-0">
              {site.fullName} — a boutique home bakery making custom cakes,
              brownies &amp; cookies in {site.city}.
            </p>
          </div>

          <nav className="text-center" aria-label="Footer">
            <ul className="flex flex-wrap justify-center gap-x-7 gap-y-3">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-cream/80 transition-colors hover:text-cream"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="text-center md:text-right">
            <a
              href={site.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-cream/30 px-4 py-2 text-sm text-cream transition-colors hover:border-cream hover:bg-cream/10"
            >
              <InstagramIcon className="h-4 w-4" />
              {site.instagramHandle}
            </a>
            <p className="mt-3 font-script text-lg italic text-maroon-blush">
              {site.tagline}
            </p>
          </div>
        </div>

        <div className="mt-12 border-t border-cream/15 pt-6 text-center text-xs text-cream/55">
          <p>
            &copy; {new Date().getFullYear()} {site.fullName}. Made with love in{" "}
            {site.city}.
          </p>
        </div>
      </div>
    </footer>
  );
}

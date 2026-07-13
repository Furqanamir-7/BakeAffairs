import Link from "next/link";
import { navLinks, site } from "@/lib/site";
import Logo from "@/components/Logo";
import { InstagramIcon } from "./icons";

export default function Footer() {
  return (
    <footer className="bg-maroon-band text-cream">
      <div className="container-px py-6 sm:py-7">
        <div className="flex flex-col items-center gap-5 md:flex-row md:items-center md:justify-between md:gap-6">
          <div className="flex max-w-sm flex-col items-center gap-2 text-center md:items-start md:text-left">
            <Link
              href="/"
              className="inline-block transition-transform duration-300 hover:scale-[1.02]"
              aria-label="Bake Affairs by Ayesha — home"
            >
              <Logo
                size="footer"
                className="mx-auto drop-shadow-[0_4px_14px_rgba(0,0,0,0.3)] md:mx-0"
              />
            </Link>
            <p className="text-xs leading-relaxed text-cream/65 sm:text-sm">
              Boutique home bakery in {site.city} — cakes, brownies &amp; cookies.
            </p>
          </div>

          <nav aria-label="Footer">
            <ul className="flex flex-wrap justify-center gap-x-5 gap-y-2">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-xs text-cream/80 transition-colors hover:text-cream sm:text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="flex flex-col items-center gap-1.5 md:items-end">
            <a
              href={site.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-cream/30 px-3 py-1.5 text-xs text-cream transition-colors hover:border-cream hover:bg-cream/10 sm:text-sm"
            >
              <InstagramIcon className="h-3.5 w-3.5" />
              {site.instagramHandle}
            </a>
            <p className="font-script text-base italic text-maroon-blush">
              {site.tagline}
            </p>
          </div>
        </div>

        <div className="mt-5 border-t border-cream/15 pt-3 text-center text-[11px] text-cream/50">
          <p>
            &copy; {new Date().getFullYear()} {site.fullName}. Made with love in{" "}
            {site.city}.
          </p>
        </div>
      </div>
    </footer>
  );
}

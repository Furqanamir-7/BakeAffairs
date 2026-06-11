import { navLinks, site } from "@/lib/site";
import { InstagramIcon } from "./icons";

export default function Footer() {
  return (
    <footer className="bg-espresso text-accent">
      <div className="container-px py-14">
        <div className="grid gap-10 md:grid-cols-3 md:items-start">
          <div className="text-center md:text-left">
            <a href="#home" className="font-serif text-2xl text-background">
              {site.name}
              <span className="text-primary">.</span>
            </a>
            <p className="mt-3 max-w-xs text-sm leading-relaxed text-accent/70 md:mx-0 mx-auto">
              {site.fullName} — a boutique home bakery making custom cakes,
              brownies &amp; cookies in {site.city}.
            </p>
          </div>

          <nav className="text-center" aria-label="Footer">
            <ul className="flex flex-wrap justify-center gap-x-7 gap-y-3">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-accent/80 transition-colors hover:text-background"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="text-center md:text-right">
            <a
              href={site.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-accent/30 px-4 py-2 text-sm text-accent transition-colors hover:border-accent hover:text-background"
            >
              <InstagramIcon className="h-4 w-4" />
              {site.instagramHandle}
            </a>
            <p className="mt-3 font-script text-lg italic text-accent/80">
              {site.tagline}
            </p>
          </div>
        </div>

        <div className="mt-12 border-t border-accent/15 pt-6 text-center text-xs text-accent/55">
          <p>
            &copy; {new Date().getFullYear()} {site.fullName}. Made with love in{" "}
            {site.city}.
          </p>
        </div>
      </div>
    </footer>
  );
}

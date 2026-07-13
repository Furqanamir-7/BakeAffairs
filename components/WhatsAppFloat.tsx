"use client";

import { site } from "@/lib/site";
import { WhatsAppIcon } from "./icons";

export default function WhatsAppFloat() {
  return (
    <a
      href={site.whatsapp}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-5 right-5 z-[60] flex h-14 w-14 items-center justify-center rounded-full bg-maroon text-cream shadow-lift transition-transform duration-300 hover:scale-110 hover:bg-maroon-light focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-maroon/50 focus-visible:ring-offset-2 focus-visible:ring-offset-background sm:bottom-7 sm:right-7 sm:h-16 sm:w-16"
    >
      <WhatsAppIcon className="h-7 w-7 sm:h-8 sm:w-8" />
    </a>
  );
}

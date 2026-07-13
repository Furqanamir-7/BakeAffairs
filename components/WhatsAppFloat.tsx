"use client";

import { site } from "@/lib/site";

/** Maroon floating WhatsApp button — icon fully visible inside the circle. */
export default function WhatsAppFloat() {
  return (
    <a
      href={site.whatsapp}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-5 right-5 z-[60] flex h-14 w-14 items-center justify-center rounded-full bg-maroon text-cream shadow-lift transition-transform duration-300 hover:scale-110 hover:bg-maroon-light focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-maroon/50 focus-visible:ring-offset-2 focus-visible:ring-offset-background sm:bottom-7 sm:right-7 sm:h-16 sm:w-16"
    >
      <svg
        viewBox="0 0 32 32"
        className="h-[1.65rem] w-[1.65rem] sm:h-8 sm:w-8"
        fill="currentColor"
        aria-hidden="true"
      >
        <path d="M16.04 3.2c-7.08 0-12.84 5.75-12.84 12.84 0 2.27.6 4.47 1.72 6.41L3.2 28.8l6.53-1.71a12.8 12.8 0 0 0 6.31 1.61h.01c7.08 0 12.84-5.76 12.84-12.84 0-3.43-1.34-6.66-3.76-9.08A12.75 12.75 0 0 0 16.04 3.2Zm0 2.33c2.81 0 5.45 1.1 7.44 3.08a10.47 10.47 0 0 1 3.08 7.43c0 5.81-4.73 10.53-10.52 10.53-1.93 0-3.82-.52-5.47-1.5l-.39-.23-4.04 1.06 1.08-3.94-.26-.4a10.48 10.48 0 0 1-1.61-5.57c0-5.8 4.72-10.52 10.53-10.52Zm-3.5 5.66c-.23 0-.61.09-.93.44-.32.35-1.23 1.2-1.23 2.94s1.26 3.4 1.44 3.64c.18.23 2.47 3.78 6.08 5.3.85.36 1.52.58 2.04.75.85.27 1.63.23 2.25.14.69-.1 2.11-.87 2.41-1.7.3-.83.3-1.54.21-1.69-.09-.15-.32-.23-.68-.41-.36-.18-2.11-1.04-2.44-1.16-.32-.11-.56-.17-.8.18-.23.35-.92 1.15-1.13 1.39-.2.23-.41.26-.76.09-.35-.18-1.5-.55-2.85-1.76-1.05-.93-1.76-2.1-1.97-2.45-.2-.35-.02-.54.15-.71.16-.15.35-.41.53-.62.18-.2.23-.35.35-.59.11-.23.06-.44-.03-.62-.09-.18-.8-1.94-1.1-2.65-.29-.69-.58-.59-.8-.6-.21-.01-.44-.01-.68-.01Z" />
      </svg>
    </a>
  );
}

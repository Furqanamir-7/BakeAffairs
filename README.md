# Bake Affairs by Ayesha

A warm, editorial single-page website for **Bake Affairs by Ayesha** — a boutique home bakery in Lahore specializing in custom cakes, brownies, and cookies.

Built with **Next.js 14 (App Router)**, **Tailwind CSS**, and **Framer Motion**.

## Features

- Fully responsive, mobile-first design
- Sticky navbar (transparent on top → solid on scroll) with mobile slide-down drawer
- Smooth scroll + subtle fade-in-on-scroll animations (respects `prefers-reduced-motion`)
- Sections: Hero, About, Menu, Gallery, How to Order, Testimonials, Contact/Order CTA, Footer
- Google Fonts via `next/font`: Playfair Display, Jost, Cormorant Garamond
- Custom hand-built SVG icon set (no heavy icon dependency)

## Brand palette

| Token        | Hex       |
| ------------ | --------- |
| Background   | `#FAF6F1` |
| Primary      | `#C4956A` |
| Secondary    | `#8B5E3C` |
| Accent       | `#E8D5B7` |
| Text         | `#3B2314` |
| Parchment    | `#F0E6D6` |

## Getting started

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build
npm start        # serve production build
```

## Configuration

Edit `lib/site.ts` to update links and details. The WhatsApp number is a
placeholder — replace `92XXXXXXXXXX` with the real number:

```ts
whatsapp: "https://wa.me/92XXXXXXXXXX",
```

Instagram is wired to <https://www.instagram.com/bakeaffairsbyayesha/>.

## Deployment

Deployed on **Vercel**. Any push to the connected repo triggers a new build.

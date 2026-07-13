export const site = {
  name: "Bake Affairs",
  fullName: "Bake Affairs by Ayesha",
  baker: "Ayesha",
  city: "Lahore",
  tagline: "Baked with love, crafted with care",
  instagram: "https://www.instagram.com/bakeaffairsbyayesha/",
  instagramHandle: "@bakeaffairsbyayesha",
  whatsapp: "https://wa.me/923234754992",
  whatsappNumber: "923234754992",
  email: "hello@bakeaffairs.pk",
};

/** Prefilled WhatsApp order link for a cake/item name. */
export function whatsappOrderLink(itemName: string) {
  const text = `Hey i wanna order ${itemName}`;
  return `https://wa.me/${site.whatsappNumber}?text=${encodeURIComponent(text)}`;
}

export const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Menu", href: "/menu" },
  { label: "Shop", href: "/shop" },
  { label: "Order", href: "/order" },
  { label: "Policies", href: "/policies" },
];

export const homeTeasers = [
  {
    title: "Our Story",
    description: "Meet Ayesha and discover how a home kitchen became Lahore's boutique bakery.",
    href: "/about",
    emoji: "👩‍🍳",
  },
  {
    title: "Our Menu",
    description: "Whipped cream & buttercream cakes, brownies, cupcakes and deals — with prices.",
    href: "/menu",
    emoji: "🎂",
  },
  {
    title: "Shop",
    description: "Browse recent cakes and celebration bakes from our kitchen.",
    href: "/shop",
    emoji: "📸",
  },
];

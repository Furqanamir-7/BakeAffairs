import type { Metadata } from "next";
import PageIntro from "@/components/PageIntro";
import Shop from "@/components/Shop";

export const metadata: Metadata = {
  title: "Shop",
  description:
    "Order custom cakes from Bake Affairs by Ayesha — browse recent bakes and message us on WhatsApp.",
};

export default function ShopPage() {
  return (
    <>
      <PageIntro
        eyebrow="From our kitchen"
        title="Shop & Order"
        description="Pick a cake you love, tap Order Now, and we’ll continue on WhatsApp."
      />
      <Shop compact />
    </>
  );
}

import type { Metadata } from "next";
import PageIntro from "@/components/PageIntro";
import Shop from "@/components/Shop";

export const metadata: Metadata = {
  title: "Shop",
  description:
    "Browse recent custom cakes and celebration bakes from Bake Affairs by Ayesha in Lahore.",
};

export default function ShopPage() {
  return (
    <>
      <PageIntro
        eyebrow="From our kitchen"
        title="Shop the Look"
        description="Scroll through recent cakes and celebration bakes — then order something made just for you."
      />
      <Shop compact />
    </>
  );
}

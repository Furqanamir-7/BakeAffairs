import type { Metadata } from "next";
import PageIntro from "@/components/PageIntro";
import Menu from "@/components/Menu";

export const metadata: Metadata = {
  title: "Menu",
  description:
    "Cakes, bento cakes, cupcakes, brownies, banana bread and deals from Bake Affairs by Ayesha in Lahore.",
};

export default function MenuPage() {
  return (
    <>
      <PageIntro
        eyebrow="What we bake"
        title="Our Menu"
        description="Cakes by the pound, bento cakes, cupcakes, brownies and sweet deals — made to order in Lahore."
      />
      <Menu compact />
    </>
  );
}

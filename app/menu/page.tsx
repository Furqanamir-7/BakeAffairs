import type { Metadata } from "next";
import PageIntro from "@/components/PageIntro";
import Menu from "@/components/Menu";

export const metadata: Metadata = {
  title: "Menu",
  description:
    "Custom cakes, fudgy brownies and chewy cookies — all made to order at Bake Affairs by Ayesha.",
};

export default function MenuPage() {
  return (
    <>
      <PageIntro
        eyebrow="What we bake"
        title="Our Specialties"
        description="A small, lovingly curated menu — each made to order so it arrives fresh, beautiful and full of flavour."
      />
      <Menu compact />
    </>
  );
}

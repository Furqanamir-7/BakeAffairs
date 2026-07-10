import type { Metadata } from "next";
import PageIntro from "@/components/PageIntro";
import About from "@/components/About";

export const metadata: Metadata = {
  title: "About",
  description:
    "Meet Ayesha and learn the story behind Bake Affairs — a boutique home bakery in Lahore.",
};

export default function AboutPage() {
  return (
    <>
      <PageIntro
        eyebrow="Our little story"
        title="A passion project, baked one order at a time"
        description="Bake Affairs began in a home kitchen in Lahore — built on care, patience and real ingredients."
      />
      <About compact />
    </>
  );
}

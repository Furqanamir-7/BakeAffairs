import type { Metadata } from "next";
import PageIntro from "@/components/PageIntro";
import About from "@/components/About";

export const metadata: Metadata = {
  title: "About",
  description:
    "Hi, I'm Ayesha. Welcome to BakeAffairs — a home bakery in Lahore started in 2022.",
};

export default function AboutPage() {
  return (
    <>
      <PageIntro
        eyebrow="Our little story"
        title="BakeAffairs by Ayesha"
        description="It all started in 2022 — a home kitchen, a few orders at a time, and a lot of love."
      />
      <About compact />
    </>
  );
}

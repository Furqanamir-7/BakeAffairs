import type { Metadata } from "next";
import PageIntro from "@/components/PageIntro";
import Gallery from "@/components/Gallery";

export const metadata: Metadata = {
  title: "Gallery",
  description:
    "A glimpse of recent bakes from Bake Affairs by Ayesha — custom cakes, brownies and cookies in Lahore.",
};

export default function GalleryPage() {
  return (
    <>
      <PageIntro
        eyebrow="A peek inside"
        title="From Our Kitchen"
        description="A glimpse of recent bakes. Follow along on Instagram for the latest creations."
      />
      <Gallery compact />
    </>
  );
}

import type { Metadata } from "next";
import PageIntro from "@/components/PageIntro";
import HowToOrder from "@/components/HowToOrder";
import Contact from "@/components/Contact";

export const metadata: Metadata = {
  title: "Order",
  description:
    "Order custom cakes, brownies and cookies from Bake Affairs by Ayesha in Lahore via Instagram or WhatsApp.",
};

export default function OrderPage() {
  return (
    <>
      <PageIntro
        eyebrow="Let's bake something"
        title="Ready to Order?"
        description="DM us on Instagram or send a WhatsApp message — tell us what you're celebrating and we'll take it from there."
      />
      <HowToOrder />
      <Contact compact />
    </>
  );
}

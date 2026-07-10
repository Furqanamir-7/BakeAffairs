import type { Metadata } from "next";
import PageIntro from "@/components/PageIntro";
import HowToOrder from "@/components/HowToOrder";
import Contact from "@/components/Contact";

export const metadata: Metadata = {
  title: "Order",
  description:
    "Order cakes, brownies and deals from Bake Affairs by Ayesha in Lahore. Order 3–4 days ahead with full prepayment; pickup only.",
};

export default function OrderPage() {
  return (
    <>
      <PageIntro
        eyebrow="Let's bake something"
        title="Ready to Order?"
        description="DM us on Instagram — share your date, flavour and size. Full prepayment confirms your order; pickup only."
      />
      <HowToOrder />
      <Contact compact />
    </>
  );
}

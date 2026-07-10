import type { Metadata } from "next";
import PageIntro from "@/components/PageIntro";
import Policies from "@/components/Policies";

export const metadata: Metadata = {
  title: "Policies",
  description:
    "Ordering policy and pickup notice for Bake Affairs by Ayesha — prepayment, lead time, and InDrive/Yango guidance.",
};

export default function PoliciesPage() {
  return (
    <>
      <PageIntro
        eyebrow="Before you order"
        title="Ordering & Pickup Policies"
        description="Please read these notes carefully — they cover lead times, payment, pickup, and ride arrangements."
      />
      <Policies />
    </>
  );
}

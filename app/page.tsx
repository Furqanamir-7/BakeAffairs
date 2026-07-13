import Hero from "@/components/Hero";
import HomeTeasers from "@/components/HomeTeasers";
import BestSellers from "@/components/BestSellers";
import ReviewsWall from "@/components/ReviewsWall";

export default function Home() {
  return (
    <>
      <Hero />
      <HomeTeasers />
      <BestSellers />
      <ReviewsWall />
    </>
  );
}

export const metadata = {
  title: "Home - Open PRO",
  description: "Page description",
};

import PageIllustration from "@/components/page-illustration";
import Hero from "@/components/hero-home";
import Workflows from "@/components/workflows";
import Features from "@/components/features";
import KentuckyResources from "@/components/kentucky-resources";
import SuccessStories from "@/components/success-stories";
import Partners from "@/components/partners";
import SplitCarousel from "@/components/split-carousel";
import Pricing from "@/components/pricing-home";
import Cta from "@/components/cta";

export default function Home() {
  return (
    <>
      <PageIllustration />
      <Hero />
      <Workflows />
      <Features />
      <KentuckyResources />
      <SuccessStories />
      <Partners />
      <SplitCarousel />
      <Pricing />
      <Cta />
    </>
  );
}

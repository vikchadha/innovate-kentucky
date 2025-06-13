export const metadata = {
  title: "About Us - Innovate Kentucky",
  description: "Learn about our mission to support and grow innovation across the Bluegrass State.",
};

import PageIllustration from "@/components/page-illustration";
import Hero from "@/components/hero-about";
import Timeline from "@/components/timeline";

export default function About() {
  return (
    <>
      <PageIllustration multiple />
      <Hero />
      <Timeline />
    </>
  );
}

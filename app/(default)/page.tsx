export const metadata = {
  title: "Home - Open PRO",
  description: "Page description",
};

import HeroHome from '@/components/hero-home';
import StatsSection from '@/components/stats-section';
import IndustryShowcase from '@/components/industry-showcase';
import SuccessSpotlight from '@/components/success-spotlight';
import KentuckyEcosystem from '@/components/ky-ecosystem';
import FundingOpportunities from '@/components/funding-opportunities';
import RegionalInnovation from '@/components/regional-innovation';

export default function Home() {
  return (
    <>
      <HeroHome />
      <StatsSection />
      <IndustryShowcase />
      <KentuckyEcosystem />
      <FundingOpportunities />
      <RegionalInnovation />
      <SuccessSpotlight />
    </>
  );
}

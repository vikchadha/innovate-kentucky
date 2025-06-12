export type KYIndustry = {
  readonly name: string;
  readonly description: string;
  readonly stats: string;
  readonly icon: string;
  readonly logo: string;
  readonly companies: readonly { name: string; logo: string }[];
  readonly successStory: string;
  readonly counties: readonly string[];
  readonly link: string;
  readonly facts?: readonly string[];
};

export const KYIndustries: readonly KYIndustry[] = [
  {
    name: 'AgTech',
    description: 'Revolutionizing agriculture through technology',
    stats: '200+ startups | $300M invested',
    icon: '🌱',
    logo: '/logos/agtech/industry.svg',
    companies: [
      { name: 'AppHarvest', logo: '/logos/agtech/appharvest.svg' },
      { name: 'RootAI', logo: '/logos/agtech/rootai.svg' }
    ],
    successStory: 'AppHarvest',
    counties: ['Boyle', 'Madison', 'Rowan'],
    link: '/success-stories/appharvest'
  },
  {
    name: 'Advanced Manufacturing',
    description: 'Leading in automotive and aerospace manufacturing',
    stats: '150K jobs | $20B economic impact',
    icon: '🏭',
    logo: '/logos/advanced-manufacturing/industry.svg',
    companies: [
      { name: 'Toyota Kentucky', logo: '/logos/advanced-manufacturing/toyota.svg' },
      { name: 'GE Appliances', logo: '/logos/advanced-manufacturing/ge-appliances.svg' }
    ],
    successStory: 'Toyota Kentucky',
    counties: ['Scott', 'Jefferson', 'Warren'],
    link: '/success-stories/toyota'
  },
  {
    name: 'Healthcare Innovation',
    description: 'Pioneering rural healthcare solutions',
    stats: '100+ healthtech startups',
    icon: '🏥',
    logo: '/logos/healthcare-innovation/industry.svg',
    companies: [
      { name: 'Bamboo Health', logo: '/logos/healthcare-innovation/bamboo-health.svg' },
      { name: 'Mediswipe', logo: '/logos/healthcare-innovation/mediswipe.svg' }
    ],
    successStory: 'Bamboo Health',
    counties: ['Jefferson', 'Fayette', 'Kenton'],
    link: '/success-stories/bamboo-health'
  },
  {
    name: 'Logistics & Distribution',
    description: 'Strategic hub for national supply chains',
    stats: '1M+ sq ft warehouse space',
    icon: '🚚',
    logo: '/logos/logistics-distribution/industry.svg',
    companies: [
      { name: 'Stord', logo: '/logos/logistics-distribution/stord.svg' },
      { name: 'UPS', logo: '/logos/logistics-distribution/ups.svg' }
    ],
    successStory: 'Stord',
    counties: ['Boone', 'Bullitt', 'Simpson'],
    link: '/success-stories/stord'
  },
  {
    name: 'Energy Technology',
    description: 'Advancing renewable energy solutions',
    stats: '40% energy from renewables',
    icon: '⚡',
    logo: '/logos/energy-technology/industry.svg',
    companies: [
      { name: 'Kentucky Solar', logo: '/logos/energy-technology/kentucky-solar.svg' },
      { name: 'LG&E', logo: '/logos/energy-technology/lge.svg' }
    ],
    successStory: 'Kentucky Solar',
    counties: ['Christian', 'Henderson', 'Pike'],
    link: '/success-stories/solar'
  },
  {
    name: 'Aerospace & Defense',
    description: 'Advanced aerospace manufacturing and defense systems',
    stats: '12,000+ jobs | $2B+ annual economic impact',
    icon: '✈️',
    logo: '/logos/aerospace-defense/industry.svg',
    companies: [
      { name: 'Lockheed Martin', logo: '/logos/aerospace-defense/lockheed-martin.svg' },
      { name: 'Raytheon', logo: '/logos/aerospace-defense/raytheon.svg' }
    ],
    successStory: 'Lockheed Martin & Raytheon',
    counties: ['Jefferson', 'Hardin', 'Christian'],
    link: '/success-stories/aerospace',
    facts: [
      'Home to 35+ aerospace companies',
      'Fort Knox and Fort Campbell hubs',
      'Growing drone technology sector'
    ]
  }
] as const;

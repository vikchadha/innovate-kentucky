export interface RegionData {
  name: string;
  slug: string;
  description: string;
  keyIndustries: string[];
  majorEmployers: string[];
  educationalInstitutions: string[];
  attractions: string[];
  economicInitiatives: string[];
  imageUrl: string;
  videoId?: string;
  stats: {
    population: string;
    gdp: string;
    jobGrowth: string;
    medianIncome: string;
  };
  resources: Array<{
    title: string;
    url: string;
    description: string;
  }>;
}

export const regionsData: Record<string, RegionData> = {
  western: {
    name: 'Western',
    slug: 'western',
    description: 'Western Kentucky is known for its rich agricultural heritage, beautiful lakes, and strong manufacturing sector. The region is home to the state\'s largest inland port and serves as a key transportation and logistics hub.',
    keyIndustries: ['Agriculture', 'Manufacturing', 'Healthcare', 'Logistics'],
    majorEmployers: ['Tyson Foods', 'LSC Communications', 'Jenkins Independent Schools', 'Murray State University'],
    educationalInstitutions: ['Murray State University', 'West Kentucky Community & Technical College'],
    attractions: ['Land Between the Lakes', 'Kentucky Dam Village', 'Paducah Riverfront'],
    economicInitiatives: ['West Kentucky Workforce Board', 'Purchase Area Development District'],
    imageUrl: '/images/regions/western-ky.jpg',
    videoId: 'dQw4w9WgXcQ',
    stats: {
      population: '300,000+',
      gdp: '$15.2B',
      jobGrowth: '2.1%',
      medianIncome: '$45,230'
    },
    resources: [
      {
        title: 'West Kentucky Workforce Board',
        url: 'https://www.wkworkforce.com',
        description: 'Workforce development and employment resources'
      },
      {
        title: 'Greater Paducah Economic Development',
        url: 'https://www.greaterpaducah.com',
        description: 'Business resources and economic development initiatives'
      }
    ]
  },
  central: {
    name: 'Central',
    slug: 'central',
    description: 'Central Kentucky is the economic and cultural heart of the state, home to the state capital, world-famous horse farms, and the iconic Kentucky Bourbon Trail. The region blends urban sophistication with rural charm.',
    keyIndustries: ['Government', 'Healthcare', 'Manufacturing', 'Tourism', 'Equine'],
    majorEmployers: ['University of Kentucky', 'Lexington-Fayette Urban County Government', 'Toyota Motor Manufacturing'],
    educationalInstitutions: ['University of Kentucky', 'Transylvania University', 'Bluegrass Community & Technical College'],
    attractions: ['Kentucky Horse Park', 'Keeneland', 'Bourbon Trail'],
    economicInitiatives: ['Commerce Lexington', 'Bluegrass Business Development Partnership'],
    imageUrl: '/images/regions/central-ky.jpg',
    videoId: 'dQw4w9WgXcQ',
    stats: {
      population: '1.2M+',
      gdp: '$72.5B',
      jobGrowth: '3.4%',
      medianIncome: '$56,500'
    },
    resources: [
      {
        title: 'Commerce Lexington',
        url: 'https://www.commercelexington.com',
        description: 'Economic development and business resources'
      },
      {
        title: 'KY Innovation',
        url: 'https://kyinnovation.ky.gov',
        description: 'Startup and entrepreneurship support'
      }
    ]
  },
  bluegrass: {
    name: 'Bluegrass',
    slug: 'bluegrass',
    description: 'The Bluegrass Region is world-renowned for its thoroughbred horse farms, rolling bluegrass pastures, and rich cultural heritage. It\'s home to the state\'s second-largest city and a growing technology sector.',
    keyIndustries: ['Equine', 'Agriculture', 'Manufacturing', 'Technology'],
    majorEmployers: ['Lexmark', 'Amazon', 'University of Kentucky', 'Lexington-Fayette Urban County Government'],
    educationalInstitutions: ['University of Kentucky', 'Bluegrass Community & Technical College', 'Midway University'],
    attractions: ['Keeneland Race Course', 'Kentucky Horse Park', 'Mary Todd Lincoln House'],
    economicInitiatives: ['Bluegrass Economic Advancement Movement', 'Lexington Downtown Development Authority'],
    imageUrl: '/images/regions/bluegrass-ky.jpg',
    videoId: 'dQw4w9WgXcQ',
    stats: {
      population: '1.1M+',
      gdp: '$68.3B',
      jobGrowth: '2.9%',
      medianIncome: '$54,200'
    },
    resources: [
      {
        title: 'Bluegrass Business Development Partnership',
        url: 'https://www.bbdpartnership.com',
        description: 'Regional economic development'
      },
      {
        title: 'Lexington Office of Economic Development',
        url: 'https://www.lexingtonky.gov/economic-development',
        description: 'Business resources and incentives'
      }
    ]
  },
  northern: {
    name: 'Northern',
    slug: 'northern',
    description: 'Northern Kentucky serves as the gateway to the South, with strong economic ties to Cincinnati, Ohio. The region features a diverse economy, top-ranked schools, and a vibrant arts and culture scene.',
    keyIndustries: ['Manufacturing', 'Logistics', 'Healthcare', 'Technology'],
    majorEmployers: ['Amazon', 'St. Elizabeth Healthcare', 'DHL', 'FIS'],
    educationalInstitutions: ['Northern Kentucky University', 'Thomas More University', 'Gateway Community & Technical College'],
    attractions: ['Newport Aquarium', 'BB&T Arena', 'Newport on the Levee'],
    economicInitiatives: ['Northern Kentucky Tri-ED', 'Catalytic Development Fund'],
    imageUrl: '/images/regions/northern-ky.jpg',
    videoId: 'dQw4w9WgXcQ',
    stats: {
      population: '450,000+',
      gdp: '$31.8B',
      jobGrowth: '3.1%',
      medianIncome: '$63,400'
    },
    resources: [
      {
        title: 'Northern Kentucky Tri-ED',
        url: 'https://www.northernkytri-ed.com',
        description: 'Economic development organization'
      },
      {
        title: 'Northern Kentucky Chamber',
        url: 'https://www.nkychamber.com',
        description: 'Business advocacy and resources'
      }
    ]
  },
  southern: {
    name: 'Southern',
    slug: 'southern',
    description: 'Southern Kentucky is known for its natural beauty, outdoor recreation, and growing manufacturing sector. The region features Mammoth Cave National Park and is a key location for the automotive industry.',
    keyIndustries: ['Manufacturing', 'Healthcare', 'Tourism', 'Agriculture'],
    majorEmployers: ['General Motors', 'Medical Center at Bowling Green', 'Western Kentucky University', 'Fruit of the Loom'],
    educationalInstitutions: ['Western Kentucky University', 'Southcentral KY Community & Technical College'],
    attractions: ['Mammoth Cave National Park', 'National Corvette Museum', 'Lost River Cave'],
    economicInitiatives: ['Bowling Green Area Chamber of Commerce', 'Southern Kentucky Economic Development Council'],
    imageUrl: '/images/regions/southern-ky.jpg',
    videoId: 'dQw4w9WgXcQ',
    stats: {
      population: '600,000+',
      gdp: '$28.7B',
      jobGrowth: '2.5%',
      medianIncome: '$43,900'
    },
    resources: [
      {
        title: 'Bowling Green Area Chamber',
        url: 'https://www.bgchamber.com',
        description: 'Business and economic development'
      },
      {
        title: 'Southern Kentucky Economic Development',
        url: 'https://www.sokyedc.com',
        description: 'Regional economic development'
      }
    ]
  },
  eastern: {
    name: 'Eastern',
    slug: 'eastern',
    description: 'Eastern Kentucky is known for its stunning Appalachian Mountains, rich cultural heritage, and strong community spirit. The region is undergoing economic transformation with a focus on technology, healthcare, and sustainable energy.',
    keyIndustries: ['Healthcare', 'Education', 'Energy', 'Manufacturing'],
    majorEmployers: ['Appalachian Regional Healthcare', 'University of Pikeville', 'Appalachian Wireless'],
    educationalInstitutions: ['University of Pikeville', 'Hazard Community & Technical College', 'Big Sandy Community & Technical College'],
    attractions: ['Breaks Interstate Park', 'Pine Mountain State Resort Park', 'Kingdom Come State Park'],
    economicInitiatives: ['Shaping Our Appalachian Region (SOAR)', 'Eastern Kentucky Concentrated Employment Program'],
    imageUrl: '/images/regions/eastern-ky.jpg',
    videoId: 'dQw4w9WgXcQ',
    stats: {
      population: '400,000+',
      gdp: '$18.3B',
      jobGrowth: '1.8%',
      medianIncome: '$32,100'
    },
    resources: [
      {
        title: 'Shaping Our Appalachian Region (SOAR)',
        url: 'https://www.soar-ky.org',
        description: 'Regional economic development initiative'
      },
      {
        title: 'Eastern Kentucky Concentrated Employment Program',
        url: 'https://www.ekcep.com',
        description: 'Workforce development and training'
      }
    ]
  }
};

export function getRegionBySlug(slug: string) {
  return regionsData[slug] || null;
}

export function getAllRegionSlugs() {
  return Object.keys(regionsData);
}

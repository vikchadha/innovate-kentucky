export interface EntrepreneurResource {
  id: string;
  title: string;
  description: string;
  category: 'funding' | 'education' | 'incubator' | 'network' | 'government';
  region: string;
  url: string;
  deadline?: string;
  amount?: string;
  featured?: boolean;
  eligibility?: string[];
}

export const entrepreneurResources: EntrepreneurResource[] = [
  {
    id: 'ky-innovation-grant',
    title: 'KY Innovation Grant',
    description: 'State-funded grants for early-stage Kentucky startups',
    category: 'funding',
    region: 'statewide',
    url: 'https://kyinnovation.com/grants',
    deadline: 'Rolling',
    amount: 'Up to $50,000',
    featured: true,
    eligibility: ['KY-based businesses', 'Tech/innovation focus']
  },
  {
    id: 'launch-blue',
    title: 'Launch Blue Accelerator',
    description: 'University of Kentucky\'s startup accelerator program',
    category: 'incubator',
    region: 'lexington',
    url: 'https://launchblue.uky.edu',
    featured: true,
    eligibility: ['Early-stage startups', 'All industries']
  },
  {
    id: 'louisville-entrepreneurship',
    title: 'Louisville Entrepreneurship Academy',
    description: '12-week business training program for Louisville entrepreneurs',
    category: 'education',
    region: 'louisville',
    url: 'https://louisville.edu/entrepreneurship/academy',
    deadline: '2023-09-15',
    featured: true
  },
  {
    id: 'mountain-assistance',
    title: 'Mountain Entrepreneurship Assistance',
    description: 'Specialized support for Appalachian region businesses',
    category: 'education',
    region: 'eastern',
    url: 'https://mea.eku.edu'
  },
  {
    id: 'ky-sbdc',
    title: 'KY Small Business Development Center',
    description: 'Free business consulting and training statewide',
    category: 'education',
    region: 'statewide',
    url: 'https://kysbdc.com'
  },
  {
    id: 'women-entrepreneurs',
    title: 'KY Women Entrepreneurs Network',
    description: 'Resources and networking for women business owners',
    category: 'network',
    region: 'statewide',
    url: 'https://wedc.ky.gov'
  },
  {
    id: 'ag-tech-fund',
    title: 'KY AgTech Innovation Fund',
    description: 'Funding for agricultural technology innovations',
    category: 'funding',
    region: 'statewide',
    url: 'https://kyagtech.com/fund',
    deadline: '2023-11-01',
    amount: 'Up to $100,000'
  },
  {
    id: 'ky-tech-grants',
    title: 'KY Tech Development Grants',
    description: 'State grants for technology commercialization',
    category: 'funding',
    region: 'statewide',
    url: 'https://kstc.com/grants',
    deadline: '2023-12-01',
    amount: 'Up to $75,000',
    featured: true
  },
  {
    id: 'rural-business',
    title: 'Rural Business Development',
    description: 'USDA programs for rural Kentucky businesses',
    category: 'government',
    region: 'rural',
    url: 'https://rd.usda.gov/ky',
    featured: true
  },
  {
    id: 'startup-weekend',
    title: 'Kentucky Startup Weekends',
    description: '54-hour events to launch startups across KY',
    category: 'network',
    region: 'statewide',
    url: 'https://startupweekend.org/kentucky'
  }
];

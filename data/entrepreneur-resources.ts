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
    id: 'ky-innovation',
    title: 'KY Innovation',
    description: 'Kentucky\'s comprehensive innovation and entrepreneurship initiative that provides funding, resources, and support to high-tech, high-growth companies. Offers commercialization grants, tax incentives, and connections to investors and mentors.',
    category: 'funding',
    region: 'statewide',
    url: 'https://kyinnovation.com',
    featured: true,
    eligibility: ['KY-based businesses', 'High-growth potential', 'Innovation focus'],
    amount: 'Up to $250,000 in matching funds'
  },
  {
    id: 'awesome-inc',
    title: 'Awesome Inc',
    description: 'A startup accelerator and entrepreneurial support organization offering educational programs, coworking space, and investment opportunities. Home to the nationally recognized Awesome Fellowship accelerator program.',
    category: 'incubator',
    region: 'lexington',
    url: 'https://www.awesomeinc.org',
    featured: true,
    eligibility: ['Tech startups', 'All stages']
  },
  {
    id: 'louisville-forward',
    title: 'Louisville Forward',
    description: 'Louisville Metro Government\'s economic development initiative supporting small businesses and entrepreneurs through loans, grants, and technical assistance programs.',
    category: 'government',
    region: 'louisville',
    url: 'https://louisvilleky.gov/government/louisville-forward',
    featured: true,
    amount: 'Up to $100,000 in loans/grants'
  },
  {
    id: 'blue-north',
    title: 'Blue North',
    description: 'Northern Kentucky\'s entrepreneurial hub providing resources, mentorship, and programming to help startups and small businesses grow and succeed in the Greater Cincinnati region.',
    category: 'incubator',
    region: 'northern',
    url: 'https://bluenorthky.com',
    featured: true
  },
  {
    id: 'kstc',
    title: 'Kentucky Science & Technology Corporation',
    description: 'Drives Kentucky\'s economic growth through innovation, technology commercialization, and entrepreneurship. Offers funding opportunities, SBIR/STTR support, and technology transfer assistance.',
    category: 'government',
    region: 'statewide',
    url: 'https://kstc.com',
    featured: true,
    amount: 'Varies by program'
  },
  {
    id: 'ky-small-business-credit',
    title: 'KY Small Business Credit Initiative',
    description: 'State program providing access to capital for small businesses through loan participation and collateral support programs.',
    category: 'funding',
    region: 'statewide',
    url: 'https://thinkkentucky.com/sbci',
    amount: 'Up to $5 million per business',
    featured: true
  },
  {
    id: 'speed-school',
    title: 'UofL Speed School Entrepreneurship',
    description: 'Entrepreneurship programs and resources through the University of Louisville\'s J.B. Speed School of Engineering, including the Entrepreneurship for Engineers minor and innovation competitions.',
    category: 'education',
    region: 'louisville',
    url: 'https://louisville.edu/speed/entrepreneurship',
    featured: true
  },
  {
    id: 'gatton-entrepreneurship',
    title: 'Gatton College Entrepreneurship',
    description: 'Entrepreneurship programs and resources through the University of Kentucky\'s Gatton College of Business and Economics, including the Von Allmen Center for Entrepreneurship.',
    category: 'education',
    region: 'lexington',
    url: 'https://gatton.uky.edu/centers/von-allmen-entrepreneurship',
    featured: true
  },
  {
    id: 'ky-venture-fund',
    title: 'Kentucky Enterprise Fund',
    description: 'State fund providing grants to assist in the development of high-tech, high-growth companies in Kentucky. Focuses on job creation and capital investment.',
    category: 'funding',
    region: 'statewide',
    url: 'https://thinkkentucky.com/kyedc/ky-enterprise-fund',
    amount: 'Up to $1.5 million per project',
    featured: true
  },
  {
    id: 'launch-blue',
    title: 'Launch Blue',
    description: 'University of Kentucky\'s startup accelerator program that helps entrepreneurs turn innovative ideas into successful businesses through mentorship, funding, and resources.',
    category: 'incubator',
    region: 'lexington',
    url: 'https://launchblue.uky.edu',
    featured: true,
    amount: 'Up to $50,000 in funding'
  },
  {
    id: 'ky-small-business-dev',
    title: 'KY Small Business Development Center',
    description: 'Statewide network providing business consulting, training, and resources to help entrepreneurs start and grow successful businesses in Kentucky.',
    category: 'education',
    region: 'statewide',
    url: 'https://kysbdc.com',
    featured: true
  },
  {
    id: 'bourbon-innovation',
    title: 'Bourbon Innovation Program',
    description: 'Initiative supporting innovation and entrepreneurship in Kentucky\'s signature bourbon and spirits industry through research, development, and commercialization support.',
    category: 'network',
    region: 'statewide',
    url: 'https://kybourbon.com/innovation',
    featured: true
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

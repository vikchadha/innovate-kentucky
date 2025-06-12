// Kentucky innovation resources data
export type Resource = {
  id: string;
  title: string;
  description: string;
  url: string;
  category: 'funding' | 'incubator' | 'education' | 'network' | 'government';
  region: 
    'statewide' | 
    'louisville' | 
    'lexington' | 
    'northern-ky' | 
    'western-ky' | 
    'eastern-ky' | 
    'southern-ky';
  featured?: boolean;
};

export const resources: Resource[] = [
  {
    id: 'ky-innovation',
    title: 'KY Innovation',
    description: 'Kentucky\'s official innovation and entrepreneurship office',
    url: 'https://kyinnovation.ky.gov',
    category: 'government',
    region: 'statewide',
    featured: true
  },
  {
    id: 'awesome-inc',
    title: 'Awesome Inc',
    description: 'Lexington-based startup accelerator and coworking space',
    url: 'https://awesomeinc.org',
    category: 'incubator',
    region: 'lexington',
    featured: true
  },
  {
    id: 'louisville-forward',
    title: 'Louisville Forward',
    description: 'Louisville\'s economic development initiative supporting startups',
    url: 'https://louisvilleky.gov/government/louisville-forward',
    category: 'government',
    region: 'louisville'
  },
  {
    id: 'blue-north',
    title: 'Blue North',
    description: 'Northern Kentucky startup accelerator and innovation center',
    url: 'https://bluenorth.co',
    category: 'incubator',
    region: 'northern-ky'
  },
  {
    id: 'kstc',
    title: 'KY Science & Technology Corp',
    description: 'Provides SBIR/STTR funding assistance for KY startups',
    url: 'https://kstc.com',
    category: 'funding',
    region: 'statewide'
  },
  {
    id: 'ky-small-business-credit',
    title: 'KY Small Business Credit Initiative',
    description: 'State program providing access to capital for small businesses',
    url: 'https://kysbci.ky.gov',
    category: 'funding',
    region: 'statewide'
  },
  {
    id: 'speed-school',
    title: 'UofL Speed School Entrepreneurship',
    description: 'Entrepreneurship programs and resources at UofL',
    url: 'https://louisville.edu/speed/entrepreneurship',
    category: 'education',
    region: 'louisville'
  },
  {
    id: 'gatton-entrepreneurship',
    title: 'UK Gatton Entrepreneurship',
    description: 'University of Kentucky\'s entrepreneurship center',
    url: 'https://gatton.uky.edu/centers/von-allmen-center-entrepreneurship',
    category: 'education',
    region: 'lexington'
  },
  {
    id: 'ky-venture-fund',
    title: 'KY Enterprise Fund',
    description: 'Early-stage venture capital for KY technology companies',
    url: 'https://kyinnovation.ky.gov/Programs/Pages/Kentucky-Enterprise-Fund.aspx',
    category: 'funding',
    region: 'statewide',
    featured: true
  },
  {
    id: 'launch-blue',
    title: 'Launch Blue',
    description: 'University of Kentucky\'s student startup accelerator',
    url: 'https://launchblue.uky.edu',
    category: 'incubator',
    region: 'lexington'
  },
  {
    id: 'ky-small-business-dev',
    title: 'KY Small Business Development Center',
    description: 'Free business consulting and training across Kentucky',
    url: 'https://kysbdc.com',
    category: 'education',
    region: 'statewide'
  },
  {
    id: 'bourbon-innovation',
    title: 'Bourbon Innovation',
    description: 'Louisville-based program supporting food/beverage startups',
    url: 'https://bourboninnovation.org',
    category: 'incubator',
    region: 'louisville'
  }
];

export const categories = [
  { id: 'funding', name: 'Funding' },
  { id: 'incubator', name: 'Incubators & Accelerators' },
  { id: 'education', name: 'Education' },
  { id: 'network', name: 'Networks' },
  { id: 'government', name: 'Government Resources' }
];

export const regions = [
  { id: 'statewide', name: 'Statewide' },
  { id: 'louisville', name: 'Louisville' },
  { id: 'lexington', name: 'Lexington' },
  { id: 'northern-ky', name: 'Northern KY' },
  { id: 'western-ky', name: 'Western KY' },
  { id: 'eastern-ky', name: 'Eastern KY' },
  { id: 'southern-ky', name: 'Southern KY' }
];

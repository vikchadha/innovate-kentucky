export const KYRegions = [
  {
    name: 'Western',
    description: 'Agriculture, manufacturing and logistics hub',
    resources: [
      'Western KY Economic Development',
      'Murray State University Innovation Center',
      'Paducah Small Business Development Center'
    ],
    counties: ['Ballard', 'Calloway', 'Carlisle', 'Fulton', 'Graves', 'Hickman', 'Marshall', 'McCracken']
  },
  {
    name: 'Central',
    description: 'Government, education and healthcare hub',
    resources: [
      'Central KY Economic Development',
      'University of Kentucky Innovation Center',
      'Lexington Small Business Development Center'
    ],
    counties: ['Anderson', 'Boyle', 'Clark', 'Fayette', 'Franklin', 'Jessamine', 'Madison', 'Mercer', 'Scott', 'Woodford']
  },
  {
    name: 'Bluegrass',
    description: 'Agriculture, tourism and manufacturing hub',
    resources: [
      'Bluegrass KY Economic Development',
      'Eastern Kentucky University Innovation Center',
      'Richmond Small Business Development Center'
    ],
    counties: ['Bourbon', 'Harrison', 'Henry', 'Nicholas', 'Oldham', 'Owen', 'Pendleton', 'Shelby', 'Spencer', 'Trimble']
  },
  {
    name: 'Northern',
    description: 'Manufacturing, logistics and technology hub',
    resources: [
      'Northern KY Economic Development',
      'Northern Kentucky University Innovation Center',
      'Covington Small Business Development Center'
    ],
    counties: ['Boone', 'Bracken', 'Campbell', 'Carroll', 'Gallatin', 'Grant', 'Kenton', 'Pendleton']
  },
  {
    name: 'Eastern',
    description: 'Natural resources, tourism and manufacturing hub',
    resources: [
      'Eastern KY Economic Development',
      'Morehead State University Innovation Center',
      'Pikeville Small Business Development Center'
    ],
    counties: ['Bell', 'Breathitt', 'Clay', 'Floyd', 'Harlan', 'Jackson', 'Knott', 'Knox', 'Laurel', 'Leslie', 'Letcher', 'Perry', 'Pike', 'Whitley']
  },
  {
    name: 'Southern',
    description: 'Agriculture, manufacturing and tourism hub',
    resources: [
      'Southern KY Economic Development',
      'Western Kentucky University Innovation Center',
      'Bowling Green Small Business Development Center'
    ],
    counties: ['Adair', 'Casey', 'Clinton', 'Cumberland', 'Green', 'McCreary', 'Pulaski', 'Russell', 'Taylor', 'Wayne']
  }
] as const;

export type KYRegion = typeof KYRegions[number];
export const KYCounties = KYRegions.flatMap(region => region.counties);

export const successStories = {
  appharvest: {
    title: "AppHarvest: Sustainable Agriculture Pioneer",
    description: "Morehead-based AppHarvest has become a national leader in sustainable greenhouse farming, creating hundreds of jobs in Eastern Kentucky while developing innovative agricultural technologies.",
    stats: ["300+ jobs created", "$120M in funding raised", "1.2M sq ft greenhouse facility"],
    companies: ["AppHarvest", "RootAI"],
    videoId: "appharvest-video-id"
  },
  toyota: {
    title: "Toyota Kentucky: Manufacturing Excellence",
    description: "Toyota's Georgetown plant is the company's largest manufacturing facility outside Japan, producing over 500,000 vehicles annually and employing 8,000 Kentuckians.",
    stats: ["$8B+ investment", "8,000 direct jobs", "30+ years in Kentucky"],
    companies: ["Toyota Kentucky"],
    videoId: "toyota-video-id"
  },
  // Add other success stories
} as const;

export type SuccessStorySlug = keyof typeof successStories;

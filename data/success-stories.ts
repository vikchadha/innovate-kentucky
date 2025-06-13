export const successStories = {
  appharvest: {
    title: "AppHarvest: Sustainable Agriculture Pioneer",
    description: "AppHarvest is revolutionizing agriculture in Eastern Kentucky with its high-tech greenhouse facilities. Based in Morehead, the company combines traditional farming with cutting-edge technology to grow non-GMO, chemical-free produce year-round. Their innovative approach has not only created hundreds of jobs in an economically challenged region but also positioned Kentucky as a leader in sustainable agriculture. The company's success has attracted significant investment and partnerships, including collaborations with local universities for agricultural research and workforce development.",
    stats: ["300+ jobs created", "$120M+ in funding raised", "1.2M sq ft greenhouse facility", "60M+ lbs of tomatoes annually"],
    companies: ["AppHarvest", "RootAI"],
    videoId: "appharvest-video-id"
  },
  toyota: {
    title: "Toyota Kentucky: Manufacturing Excellence",
    description: "Toyota's Georgetown manufacturing plant stands as a testament to Kentucky's manufacturing prowess. As the company's largest facility outside Japan, it produces some of Toyota's most popular models, including the Camry, America's best-selling car for 19 consecutive years. The plant's success has created a robust automotive ecosystem in central Kentucky, with numerous suppliers and service providers supporting its operations. Toyota's commitment to workforce development through partnerships with local technical schools has helped build a highly skilled manufacturing workforce in the region.",
    stats: ["$8B+ total investment", "8,000+ direct jobs", "30+ years in Kentucky", "500,000+ vehicles annually"],
    companies: ["Toyota Kentucky"],
    videoId: "toyota-video-id"
  },
  'bamboo-health': {
    title: "Bamboo Health: Healthcare Innovation Hub",
    description: "Louisville-based Bamboo Health (formerly Appriss Health) has emerged as a national leader in healthcare technology solutions. The company's platform connects healthcare providers, payers, and community organizations to improve patient care coordination. Their technology helps combat the opioid crisis by providing real-time prescription data to healthcare providers. Bamboo Health's success has brought high-paying tech jobs to Kentucky and positioned the state as a growing hub for healthcare technology innovation.",
    stats: ["400+ employees", "$1.5B+ company valuation", "Serves 2,000+ hospitals", "Operates in all 50 states"],
    companies: ["Bamboo Health"],
    videoId: "bamboo-health-video-id"
  },
  stord: {
    title: "Stord: Supply Chain Revolution",
    description: "Founded by Kentucky native Sean Henry, Stord is transforming the logistics industry with its cloud supply chain platform. The company's technology helps businesses manage their entire supply chain through a single platform, from warehousing to last-mile delivery. Stord's success demonstrates how Kentucky's central location and strong logistics infrastructure create an ideal environment for supply chain innovation. The company has raised significant funding and partners with major retailers and manufacturers across North America.",
    stats: ["$1.3B+ valuation", "1,000+ warehouse partners", "99.9% on-time delivery", "Operates across North America"],
    companies: ["Stord"],
    videoId: "stord-video-id"
  },
  solar: {
    title: "Kentucky's Solar Renaissance",
    description: "Kentucky is experiencing a solar energy boom, with utility-scale solar projects bringing new investment and jobs to the state. Companies like Savion and EDF Renewables are developing major solar farms that will provide clean energy to thousands of homes. These projects are creating construction jobs, generating local tax revenue, and helping Kentucky transition to a more sustainable energy future. The state's solar industry growth is supported by its skilled workforce and strong manufacturing base.",
    stats: ["2,000+ MW in development", "$1B+ in investment", "1,000+ construction jobs", "Power for 300,000+ homes"],
    companies: ["Savion", "EDF Renewables", "Silicon Ranch"],
    videoId: "solar-kentucky-video-id"
  },
  aerospace: {
    title: "Kentucky's Aerospace Ascendancy",
    description: "Kentucky's aerospace industry is taking flight with companies like GE Aviation and Lockheed Martin expanding their operations in the state. The BlueOval SK Battery Park in Hardin County is set to become a major hub for electric vehicle battery production, creating thousands of high-tech manufacturing jobs. The state's central location, skilled workforce, and business-friendly environment have made it an attractive destination for aerospace and advanced manufacturing companies.",
    stats: ["5,000+ new jobs", "$5.8B investment", "2 battery plants", "90+ aerospace companies"],
    companies: ["GE Aviation", "Lockheed Martin", "BlueOval SK"],
    videoId: "aerospace-kentucky-video-id"
  }
} as const;

export type SuccessStorySlug = keyof typeof successStories;

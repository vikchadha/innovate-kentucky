'use client';

import Image from "next/image";
import Link from "next/link";

export default function SuccessStories() {
  const stories = [
    {
      name: "AppHarvest",
      description: "Revolutionizing agriculture through controlled environment farming in Morehead, KY",
      logo: "/images/logos/appharvest.svg",
      url: "https://appharvest.com"
    },
    {
      name: "Bamboo Health",
      description: "Louisville-based healthcare technology company improving care coordination",
      logo: "/images/logos/bamboo-health.svg",
      url: "https://bamboohealth.com"
    },
    {
      name: "El Toro",
      description: "Louisville ad-tech company using IP targeting to transform digital advertising",
      logo: "/images/logos/el-toro.svg",
      url: "https://eltoro.com"
    },
    {
      name: "Stord",
      description: "Cloud supply chain platform founded by UK graduates, now valued at $1B+",
      logo: "/images/logos/stord.svg",
      url: "https://stord.com"
    }
  ];

  return (
    <section className="relative">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="py-12 md:py-20 border-t border-gray-800">
          {/* Section header */}
          <div className="mx-auto max-w-3xl pb-12 text-center md:pb-16">
            <h2 className="h2" data-aos="fade-up">
              Kentucky Success Stories
            </h2>
            <p className="text-xl text-gray-400" data-aos="fade-up" data-aos-delay="200">
              Homegrown companies making an impact locally and globally
            </p>
          </div>

          {/* Items */}
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {stories.map((story, index) => (
              <div 
                key={index} 
                className="flex flex-col items-center text-center"
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-gray-800 p-1">
                  <Image 
                    src={story.logo} 
                    alt={story.name} 
                    width={64} 
                    height={64} 
                    className="h-12 w-12 object-contain"
                  />
                </div>
                <h3 className="h4 mb-2">{story.name}</h3>
                <p className="text-md text-gray-400 mb-4">{story.description}</p>
                <Link 
                  href={story.url} 
                  target="_blank"
                  className="text-sm text-indigo-500 hover:text-indigo-400 font-medium"
                >
                  Visit Website
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

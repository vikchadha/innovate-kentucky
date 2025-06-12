'use client';

import Link from "next/link";

export default function KentuckyResources() {
  const resources = [
    {
      title: "KY Innovation Funding",
      description: "State grants and funding programs for Kentucky startups",
      url: "https://kyinnovation.com/funding",
      icon: "💵"
    },
    {
      title: "Launch Blue",
      description: "University of Kentucky's startup accelerator program",
      url: "https://launchblue.uky.edu",
      icon: "🚀"
    },
    {
      title: "XLerateHealth",
      description: "Healthcare innovation accelerator based in Louisville",
      url: "https://xleratehealth.com",
      icon: "🏥"
    },
    {
      title: "Awesome Inc",
      description: "Lexington-based incubator and co-working space",
      url: "https://awesomeinc.org",
      icon: "🏢"
    },
    {
      title: "KY Small Business Development Center",
      description: "Free business consulting and training",
      url: "https://kysbdc.com",
      icon: "👔"
    },
    {
      title: "KY Cabinet for Economic Development",
      description: "State resources for business growth and expansion",
      url: "https://ced.ky.gov",
      icon: "🏛️"
    }
  ];

  return (
    <section className="relative">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="py-12 md:py-20">
          {/* Section header */}
          <div className="mx-auto max-w-3xl pb-12 text-center md:pb-16">
            <h2 className="h2" data-aos="fade-up">
              Kentucky Innovation Resources
            </h2>
            <p className="text-xl text-gray-400" data-aos="fade-up" data-aos-delay="200">
              Connecting entrepreneurs with the best programs and support across the Bluegrass State
            </p>
          </div>

          {/* Items */}
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {resources.map((resource, index) => (
              <div 
                key={index} 
                className="flex flex-col rounded-2xl bg-gray-800 p-6 transition-all hover:bg-gray-700"
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <div className="mb-4 text-3xl">{resource.icon}</div>
                <h3 className="h4 mb-2">{resource.title}</h3>
                <p className="text-lg text-gray-400 mb-4">{resource.description}</p>
                <Link 
                  href={resource.url} 
                  target="_blank"
                  className="mt-auto text-indigo-500 hover:text-indigo-400 font-medium"
                >
                  Learn more
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

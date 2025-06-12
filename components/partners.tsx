'use client';

import Image from "next/image";

export default function Partners() {
  const partners = [
    {
      name: "KY Cabinet for Economic Development",
      logo: "/images/logos/ky-cabinet.svg",
      url: "https://ced.ky.gov"
    },
    {
      name: "KY Science & Technology Corp",
      logo: "/images/logos/kstc.svg",
      url: "https://kstc.com"
    },
    {
      name: "KY Chamber of Commerce",
      logo: "/images/logos/ky-chamber.svg",
      url: "https://kychamber.com"
    },
    {
      name: "KY Association of Manufacturers",
      logo: "/images/logos/kam.svg",
      url: "https://kam.us.com"
    },
    {
      name: "KY Small Business Development Center",
      logo: "/images/logos/ksbdc.svg",
      url: "https://kysbdc.com"
    },
    {
      name: "KY Tech Association",
      logo: "/images/logos/kytech.svg",
      url: "https://kytechnology.org"
    }
  ];

  return (
    <section className="relative">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="py-12 md:py-20 border-t border-gray-800">
          {/* Section header */}
          <div className="mx-auto max-w-3xl pb-12 text-center md:pb-16">
            <h2 className="h2" data-aos="fade-up">
              Our Partners
            </h2>
            <p className="text-xl text-gray-400" data-aos="fade-up" data-aos-delay="200">
              Working with leading organizations across Kentucky
            </p>
          </div>

          {/* Items */}
          <div className="flex flex-wrap justify-center gap-8 md:gap-12">
            {partners.map((partner, index) => (
              <a 
                key={index} 
                href={partner.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center h-16 w-48"
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <Image 
                  src={partner.logo} 
                  alt={partner.name} 
                  width={192} 
                  height={64} 
                  className="h-full w-full object-contain opacity-80 hover:opacity-100 transition-opacity"
                />
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

'use client';

import Link from 'next/link';
import Image from 'next/image';
import { KYRegions } from '@/data/ky-counties';
import { useState } from 'react';

export default function HeroHome() {
  const [selectedCounty, setSelectedCounty] = useState<string>('');
  
  const stats = [
    { value: '120+', label: 'KY Startups Funded' },
    { value: '$2.1M+', label: 'Funding Available' },
    { value: 'All 120', label: 'Counties Served' }
  ];

  return (
    <section className="relative bg-gray-900 dark:bg-gray-950 w-full">
      {/* Background */}
      <div className="absolute inset-0 w-full">
        <div className="absolute inset-0 bg-gradient-to-b from-indigo-900/20 to-gray-900 dark:from-indigo-900/50 dark:to-gray-950/95" />
        <Image 
          src="/images/ky-landscape.jpg" 
          alt="Kentucky landscape"
          fill
          className="object-cover opacity-40 dark:opacity-20 w-full"
          priority
        />
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 w-full">
        <div className="pt-32 pb-12 md:pt-40 md:pb-20 relative z-10">
          {/* Heading */}
          <div className="text-center pb-12 md:pb-16">
            <h1 className="text-5xl md:text-6xl font-extrabold leading-tighter tracking-tighter mb-4" data-aos="zoom-y-out">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-indigo-200">
                Building Kentucky's
              </span>
              <br />
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-300">
                Innovation Future
              </span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8" data-aos="zoom-y-out">
              Access funding, mentorship, and resources tailored for Bluegrass State entrepreneurs
            </p>

            {/* County Selector */}
            <div className="max-w-md mx-auto mb-8" data-aos="fade-up">
              <div className="relative">
                <select
                  className="w-full md:w-64 p-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  value={selectedCounty}
                  onChange={(e) => setSelectedCounty(e.target.value)}
                >
                  <option value="">Select your county</option>
                  {KYRegions.map(region => (
                    <optgroup key={region.name} label={region.name}>
                      {region.counties.map(county => (
                        <option key={county} value={county}>{county}</option>
                      ))}
                    </optgroup>
                  ))}
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-400">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </div>
              </div>
              {selectedCounty && (
                <div className="mt-4">
                  <Link 
                    href={`/entrepreneur-resources?county=${encodeURIComponent(selectedCounty)}`}
                    className="text-indigo-400 hover:text-indigo-300 font-medium"
                  >
                    View resources in {selectedCounty} County →
                  </Link>
                </div>
              )}
            </div>

            {/* Stats */}
            <div className="max-w-xs mx-auto sm:max-w-none sm:flex sm:justify-center gap-4 mb-8">
              {stats.map((stat, index) => (
                <div 
                  key={index} 
                  className="bg-gray-800/80 dark:bg-gray-900/80 rounded-lg p-4 text-center backdrop-blur-sm" 
                  data-aos="fade-up" 
                  data-aos-delay={index * 100}
                >
                  <div className="text-2xl font-bold text-white">{stat.value}</div>
                  <div className="text-sm text-gray-200 dark:text-gray-300">{stat.label}</div>
                </div>
              ))}
            </div>

            {/* CTA */}
            <div className="max-w-xs mx-auto sm:max-w-none sm:flex sm:justify-center gap-4">
              <div data-aos="zoom-y-out" data-aos-delay="300">
                <Link href="/entrepreneur-resources" className="btn text-white bg-indigo-600 hover:bg-indigo-700 w-full sm:w-auto">
                  Find Your Resources
                </Link>
              </div>
              <div data-aos="zoom-y-out" data-aos-delay="400">
                <Link href="/success-stories" className="btn text-white bg-gray-700 hover:bg-gray-800 w-full sm:w-auto">
                  Watch Success Stories
                </Link>
              </div>
            </div>
          </div>

          {/* Featured Opportunity Alert */}
          <div className="max-w-sm mx-auto bg-indigo-900/50 backdrop-blur-sm rounded-xl p-4 border border-indigo-400" data-aos="fade-up">
            <div className="flex items-start">
              <div className="flex-shrink-0 pt-0.5">
                <svg className="h-6 w-6 text-indigo-300" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2L4 5v6.09c0 5.05 3.41 9.76 8 10.91 4.59-1.15 8-5.86 8-10.91V5l-8-3z" />
                </svg>
              </div>
              <div className="ml-3">
                <h3 className="text-sm font-medium text-white">Deadline Approaching</h3>
                <p className="text-sm text-indigo-200 mt-1">
                  KY Innovation Grant - Apply by June 30
                </p>
                <Link href="/entrepreneur-resources/ky-innovation-grant" className="text-sm font-medium text-indigo-300 hover:text-indigo-200 mt-2 inline-flex items-center">
                  View details <span aria-hidden="true">→</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

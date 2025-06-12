'use client';

import ResourceCard from '@/components/resources/resource-card';
import { entrepreneurResources } from '@/data/entrepreneur-resources';
import { useState } from 'react';
import { useSearchParams } from 'next/navigation';

export default function EntrepreneurResources() {
  const searchParams = useSearchParams();
  const county = searchParams.get('county');
  
  const [activeCategory, setActiveCategory] = useState<string>('all');
  
  const featuredResources = entrepreneurResources
    .filter(resource => resource.featured)
    .slice(0, 3);

  const filteredResources = entrepreneurResources
    .filter(resource => {
      return (
        (activeCategory === 'all' || resource.category === activeCategory) &&
        (!county || resource.region.toLowerCase().includes(county.toLowerCase()))
      );
    });

  const categories = [
    { id: 'all', name: 'All Resources' },
    { id: 'funding', name: 'Funding' },
    { id: 'education', name: 'Education' },
    { id: 'incubator', name: 'Incubators' },
    { id: 'network', name: 'Networking' },
    { id: 'government', name: 'Government' }
  ];

  return (
    <div className="mx-auto max-w-6xl px-4 sm:px-6 py-12 md:py-20">
      <div className="text-center pb-12 md:pb-20">
        <h1 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 to-indigo-300 mb-4">
          Kentucky Entrepreneur Resources
        </h1>
        <p className="text-xl text-gray-400 max-w-2xl mx-auto">
          Everything you need to start and grow your business in the Bluegrass State
        </p>
      </div>

      {/* Category Filters */}
      <div className="flex flex-wrap gap-2 mb-8">
        {categories.map(category => (
          <button
            key={category.id}
            onClick={() => setActiveCategory(category.id)}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${activeCategory === category.id ? 'bg-indigo-600 text-white' : 'bg-gray-700 text-gray-300 hover:bg-gray-600'}`}
          >
            {category.name}
          </button>
        ))}
      </div>

      {/* Featured Resources */}
      <section className="mb-20">
        <h2 className="text-2xl font-semibold mb-6 text-indigo-400">Featured Opportunities</h2>
        <div className="grid gap-6 md:grid-cols-3">
          {featuredResources.map(resource => (
            <ResourceCard key={resource.id} resource={resource} />
          ))}
        </div>
      </section>

      {/* Full Resource Database */}
      <section>
        <h2 className="text-2xl font-semibold mb-6 text-indigo-400">Resource Library</h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {filteredResources.map(resource => (
            <ResourceCard key={resource.id} resource={resource} />
          ))}
        </div>
      </section>
    </div>
  );
}

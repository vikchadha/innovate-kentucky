'use client';

import { useState } from "react";
import { resources, categories, regions } from "@/data/resources";
import ResourceCard from "@/components/resources/resource-card";
import Filters from "@/components/resources/filters";

export default function ResourcesPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedRegion, setSelectedRegion] = useState<string>('all');

  const filteredResources = resources.filter(resource => {
    const categoryMatch = selectedCategory === 'all' || resource.category === selectedCategory;
    const regionMatch = selectedRegion === 'all' || resource.region === selectedRegion;
    return categoryMatch && regionMatch;
  });

  return (
    <div className="mx-auto max-w-6xl px-4 sm:px-6 py-12 md:py-20">
      <div className="text-center pb-12 md:pb-20">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
          Kentucky Innovation Resources
        </h1>
        <p className="text-xl text-gray-300">
          Discover programs, funding, and support for entrepreneurs across the Bluegrass State
        </p>
      </div>
      
      <Filters 
        categories={categories} 
        regions={regions}
        selectedCategory={selectedCategory}
        selectedRegion={selectedRegion}
        onCategoryChange={setSelectedCategory}
        onRegionChange={setSelectedRegion}
      />
      
      {filteredResources.length === 0 ? (
        <div className="text-center py-12">
          <p className="text-gray-400">No resources match your filters. Try adjusting your selections.</p>
        </div>
      ) : (
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {filteredResources.map((resource) => (
            <ResourceCard key={resource.id} resource={resource} />
          ))}
        </div>
      )}
    </div>
  );
}

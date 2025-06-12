import { useState } from "react";

export default function Filters({
  categories,
  regions,
  selectedCategory,
  selectedRegion,
  onCategoryChange,
  onRegionChange
}: {
  categories: { id: string; name: string }[];
  regions: { id: string; name: string }[];
  selectedCategory: string;
  selectedRegion: string;
  onCategoryChange: (category: string) => void;
  onRegionChange: (region: string) => void;
}) {
  return (
    <div className="mb-12 bg-gray-900 rounded-xl p-6">
      <h3 className="text-lg font-medium text-white mb-4">Filter Resources</h3>
      
      <div className="grid gap-6 md:grid-cols-2">
        <div>
          <label className="block text-sm font-medium text-gray-300 mb-2">
            Category
          </label>
          <select
            className="w-full bg-gray-800 border border-gray-700 text-white rounded-lg px-4 py-2 focus:ring-indigo-500 focus:border-indigo-500"
            value={selectedCategory}
            onChange={(e) => onCategoryChange(e.target.value)}
          >
            <option value="all">All Categories</option>
            {categories.map((category) => (
              <option key={category.id} value={category.id}>
                {category.name}
              </option>
            ))}
          </select>
        </div>
        
        <div>
          <label className="block text-sm font-medium text-gray-300 mb-2">
            Region
          </label>
          <select
            className="w-full bg-gray-800 border border-gray-700 text-white rounded-lg px-4 py-2 focus:ring-indigo-500 focus:border-indigo-500"
            value={selectedRegion}
            onChange={(e) => onRegionChange(e.target.value)}
          >
            <option value="all">All Regions</option>
            {regions.map((region) => (
              <option key={region.id} value={region.id}>
                {region.name}
              </option>
            ))}
          </select>
        </div>
      </div>
    </div>
  );
}

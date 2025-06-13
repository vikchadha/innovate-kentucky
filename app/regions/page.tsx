import Link from 'next/link';
import Image from 'next/image';
import { regionsData, RegionData } from '@/data/regions';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Kentucky Regions - Innovate Kentucky',
  description: 'Explore the diverse regions of Kentucky, each with unique economic opportunities, cultural heritage, and natural beauty.',
};

export default function RegionsPage() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Hero Section */}
      <div className="bg-blue-700 dark:bg-blue-900 pt-20 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-6">
            Explore Kentucky's Regions
          </h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Discover the unique character, economic opportunities, and natural beauty of each region in the Bluegrass State.
          </p>
        </div>
      </div>

      {/* Regions Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {Object.values(regionsData).map((region) => (
            <RegionCard key={region.slug} region={region} />
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-white dark:bg-gray-800 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white mb-4">
            Ready to explore more about Kentucky?
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-3xl mx-auto">
            Learn about Kentucky's economic development, business opportunities, and quality of life.
          </p>
          <div className="flex justify-center space-x-4">
            <Link
              href="/entrepreneur-resources"
              className="px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700"
            >
              Entrepreneur Resources
            </Link>
            <Link
              href="/success-stories"
              className="px-6 py-3 border border-transparent text-base font-medium rounded-md text-blue-700 bg-blue-100 hover:bg-blue-200"
            >
              Success Stories
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

function RegionCard({ region }: { region: RegionData }) {
  return (
    <div className="flex flex-col rounded-xl overflow-hidden shadow-lg bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 hover:shadow-xl transition-shadow duration-300">
      <div className="relative h-48">
        <Image
          src={region.imageUrl}
          alt={`${region.name} Kentucky`}
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        <h2 className="absolute bottom-0 left-0 right-0 p-4 text-2xl font-bold text-white">
          {region.name} Kentucky
        </h2>
      </div>
      
      <div className="p-6 flex-1 flex flex-col">
        <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-3">
          {region.description}
        </p>
        
        <div className="mt-auto">
          <div className="grid grid-cols-2 gap-4 mb-4">
            <div>
              <p className="text-sm font-medium text-gray-500 dark:text-gray-400">Population</p>
              <p className="font-semibold text-gray-900 dark:text-white">{region.stats.population}</p>
            </div>
            <div>
              <p className="text-sm font-medium text-gray-500 dark:text-gray-400">Key Industry</p>
              <p className="font-semibold text-gray-900 dark:text-white">{region.keyIndustries[0]}</p>
            </div>
          </div>
          
          <Link
            href={`/regions/${region.slug}`}
            className="mt-4 w-full inline-flex justify-center items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-blue-700 bg-blue-100 hover:bg-blue-200 dark:bg-blue-900 dark:text-blue-100 dark:hover:bg-blue-800 transition-colors"
          >
            Explore {region.name} Region
          </Link>
        </div>
      </div>
    </div>
  );
}

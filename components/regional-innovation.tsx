'use client';
import { KYRegions } from '@/data/ky-counties';

export default function RegionalInnovation() {
  return (
    <section className="py-16 bg-white dark:bg-gray-900 w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 w-full">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-900 dark:text-white">Regional Innovation</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {KYRegions.map(region => (
            <div key={region.name} className="border rounded-lg p-6 dark:border-gray-700 dark:bg-gray-800">
              <h3 className="text-xl font-bold mb-2 dark:text-white">{region.name} KY</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">{region.description}</p>
              <div className="space-y-2">
                <p className="font-medium dark:text-white">Key Counties:</p>
                <p className="text-sm dark:text-gray-300">{region.counties.slice(0, 5).join(', ')}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

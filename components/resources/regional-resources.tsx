'use client';

import { KYRegions } from '@/data/ky-counties';
import SimplifiedKentuckyMap from '../map/SimplifiedKentuckyMap';

export default function RegionalResources() {
  return (
    <div className="space-y-12">
      <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md transition-colors duration-200">
        <SimplifiedKentuckyMap />
      </div>
      
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {KYRegions.map(region => (
          <div 
            key={region.name} 
            className="border rounded-lg p-6 hover:shadow-md transition-shadow bg-white dark:bg-gray-800 dark:border-gray-700 transition-colors duration-200"
          >
            <h3 className="text-xl font-bold text-blue-800 dark:text-blue-400 mb-2">{region.name} Kentucky</h3>
            <p className="text-gray-600 dark:text-gray-300 mb-4">{region.description}</p>
            
            <h4 className="font-semibold mb-2 text-gray-900 dark:text-gray-100">Key Resources:</h4>
            <ul className="space-y-2">
              {region.resources.map(resource => (
                <li key={resource}>
                  <a 
                    href="#" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-blue-600 dark:text-blue-400 hover:underline flex items-start transition-colors duration-200"
                  >
                    <span className="inline-block w-1.5 h-1.5 bg-blue-600 dark:bg-blue-400 rounded-full mt-2 mr-2 flex-shrink-0"></span>
                    <span className="dark:text-gray-200">{resource}</span>
                  </a>
                </li>
              ))}
            </ul>
            
            <div className="mt-4 pt-4 border-t border-gray-200 dark:border-gray-700">
              <p className="text-sm text-gray-600 dark:text-gray-400">
                <span className="font-medium text-gray-900 dark:text-gray-200">Counties:</span>{' '}
                {region.counties.slice(0, 3).join(', ')} 
                {region.counties.length > 3 && (
                  <span className="text-gray-500 dark:text-gray-500">
                    {' '}+ {region.counties.length - 3} more
                  </span>
                )}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

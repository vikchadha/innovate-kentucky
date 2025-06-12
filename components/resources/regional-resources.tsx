'use client';

import { KYRegions } from '@/data/ky-counties';
import KYMap from './ky-map';

export default function RegionalResources() {
  return (
    <div className="space-y-8">
      <KYMap />
      
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {KYRegions.map(region => (
          <div key={region.name} className="border rounded-lg p-6 hover:shadow-md transition-shadow">
            <h3 className="text-xl font-bold text-blue-800 mb-2">{region.name} Kentucky</h3>
            <p className="text-gray-600 mb-4">{region.description}</p>
            
            <h4 className="font-semibold mb-2">Key Resources:</h4>
            <ul className="space-y-1">
              {region.resources.map(resource => (
                <li key={resource} className="text-blue-600 hover:underline">
                  <a href="#" target="_blank" rel="noopener noreferrer">
                    {resource}
                  </a>
                </li>
              ))}
            </ul>
            
            <div className="mt-4 pt-4 border-t">
              <p className="text-sm text-gray-500">
                Includes: {region.counties.slice(0, 3).join(', ')} {region.counties.length > 3 && `+ ${region.counties.length - 3} more`}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

'use client';

import { useRouter } from 'next/navigation';
import { useState } from 'react';

// SVG paths for each region (simplified versions of Kentucky's regions)
const regionPaths = [
  {
    name: 'Western',
    path: 'M120,180 L160,150 L200,180 L220,220 L180,250 L140,230 Z',
    color: '#3b82f6',
    cities: ['Paducah', 'Murray', 'Hopkinsville'],
    description: 'Rich in agriculture and manufacturing, Western Kentucky is home to beautiful lakes and outdoor recreation.'
  },
  {
    name: 'Bluegrass',
    path: 'M240,160 L280,140 L320,170 L300,200 L260,190 Z',
    color: '#2563eb',
    cities: ['Lexington', 'Frankfort', 'Georgetown'],
    description: 'Known for its rolling hills and horse farms, the Bluegrass region is the heart of Kentucky\'s thoroughbred industry.'
  },
  {
    name: 'Eastern',
    path: 'M320,170 L360,190 L340,230 L300,220 L280,190 Z',
    color: '#1d4ed8',
    cities: ['Pikeville', 'Hazard', 'Ashland'],
    description: 'The Appalachian region features stunning mountain landscapes and a rich cultural heritage.'
  },
  {
    name: 'Northern',
    path: 'M280,140 L320,120 L340,150 L320,170 L280,160 Z',
    color: '#1e40af',
    cities: ['Covington', 'Newport', 'Florence'],
    description: 'Northern Kentucky is part of the greater Cincinnati metro area with a strong business environment.'
  },
  {
    name: 'Central',
    path: 'M200,180 L240,160 L280,190 L260,230 L220,220 Z',
    color: '#1e3a8a',
    cities: ['Louisville', 'Elizabethtown', 'Bardstown'],
    description: 'Home to Kentucky\'s largest city, this region is a hub for business, culture, and the bourbon industry.'
  },
  {
    name: 'Southern',
    path: 'M220,220 L260,230 L300,220 L280,260 L240,250 L200,240 Z',
    color: '#172554',
    cities: ['Bowling Green', 'Somerset', 'London'],
    description: 'Southern Kentucky features beautiful lakes, caves, and is part of the Daniel Boone National Forest.'
  }
];

export default function SimplifiedKentuckyMap() {
  const router = useRouter();
  const [activeRegion, setActiveRegion] = useState<string | null>(null);
  const [tooltipPos, setTooltipPos] = useState({ x: 0, y: 0 });
  const [showTooltip, setShowTooltip] = useState(false);

  const handleMouseMove = (e: React.MouseEvent) => {
    setTooltipPos({ x: e.clientX, y: e.clientY });
  };

  const handleRegionClick = (regionName: string) => {
    const regionSlug = regionName.toLowerCase().replace(/\s+/g, '-');
    router.push(`/regions/${regionSlug}`);
  };

  const region = regionPaths.find(r => r.name === activeRegion);

  return (
    <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md transition-colors duration-200">
      <h2 className="text-2xl font-bold text-center mb-6 text-gray-900 dark:text-white">Kentucky Regions</h2>
      
      <div 
        className="relative w-full max-w-2xl mx-auto"
        onMouseMove={handleMouseMove}
        onMouseLeave={() => setShowTooltip(false)}
      >
        <svg 
          viewBox="0 0 500 400" 
          className="w-full h-auto border rounded-lg overflow-hidden bg-blue-50 dark:bg-gray-700/50 transition-colors duration-200"
        >
          {regionPaths.map((region) => (
            <path
              key={region.name}
              d={region.path}
              fill={activeRegion === region.name ? `${region.color}CC` : `${region.color}80`}
              stroke="#ffffff"
              strokeWidth="2"
              className="cursor-pointer transition-all duration-200"
              onMouseEnter={() => {
                setActiveRegion(region.name);
                setShowTooltip(true);
              }}
              onMouseLeave={() => {
                setShowTooltip(false);
              }}
              onClick={() => handleRegionClick(region.name)}
            />
          ))}
          
          {/* Region labels */}
          {regionPaths.map((region) => (
            <text
              key={`label-${region.name}`}
              x={getLabelPosition(region.name).x}
              y={getLabelPosition(region.name).y}
              textAnchor="middle"
              className="text-xs font-semibold pointer-events-none"
              fill="#1f2937"
            >
              {region.name}
            </text>
          ))}
        </svg>
        
        {showTooltip && region && (
          <div 
            className="absolute bg-white dark:bg-gray-800 p-3 rounded-lg shadow-lg border border-gray-200 dark:border-gray-600 z-10 pointer-events-none transition-colors duration-200"
            style={{
              left: `${tooltipPos.x + 10}px`,
              top: `${tooltipPos.y + 10}px`,
              transform: 'translateY(-50%)',
              maxWidth: '250px'
            }}
          >
            <h3 className="font-bold text-gray-900 dark:text-white">{region.name} Kentucky</h3>
            <p className="text-sm text-gray-600 dark:text-gray-300 mt-1">{region.description}</p>
            <div className="mt-2">
              <p className="text-xs font-medium text-gray-500 dark:text-gray-400">Major Cities:</p>
              <p className="text-xs text-gray-700 dark:text-gray-200">{region.cities.join(', ')}</p>
            </div>
          </div>
        )}
      </div>
      
      <div className="mt-8 grid grid-cols-2 md:grid-cols-3 gap-4">
        {regionPaths.map((region) => (
          <div 
            key={region.name}
            className="flex items-center p-3 rounded-lg border border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700/50 cursor-pointer transition-colors"
            onMouseEnter={() => {
              setActiveRegion(region.name);
              setShowTooltip(true);
            }}
            onMouseLeave={() => setShowTooltip(false)}
            onClick={() => handleRegionClick(region.name)}
          >
            <div 
              className="w-4 h-4 rounded-sm mr-3" 
              style={{ backgroundColor: region.color }}
            />
            <div>
              <h4 className="font-medium text-gray-900 dark:text-white">{region.name}</h4>
              <p className="text-xs text-gray-500 dark:text-gray-400">{region.cities[0]}, {region.cities[1]}, ...</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

// Helper function to position labels
function getLabelPosition(regionName: string): { x: number; y: number } {
  switch (regionName) {
    case 'Western':
      return { x: 170, y: 210 };
    case 'Bluegrass':
      return { x: 280, y: 180 };
    case 'Eastern':
      return { x: 320, y: 220 };
    case 'Northern':
      return { x: 300, y: 140 };
    case 'Central':
      return { x: 240, y: 210 };
    case 'Southern':
      return { x: 240, y: 260 };
    default:
      return { x: 0, y: 0 };
  }
}

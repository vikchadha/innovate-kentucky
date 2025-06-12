'use client';

import { KYRegions } from '@/data/ky-counties';
import { useState } from 'react';

// Simplified but recognizable KY shape with regions
const regionPaths = [
  { 
    name: 'Western',
    d: 'M120,180 L160,150 L200,180 L220,220 L180,250 L140,230 Z',
    color: '#3b82f6'
  },
  {
    name: 'Central', 
    d: 'M200,180 L240,160 L280,190 L260,230 L220,220 Z',
    color: '#2563eb'
  },
  {
    name: 'Bluegrass',
    d: 'M240,160 L280,140 L320,170 L300,200 L260,190 Z',
    color: '#1d4ed8'
  },
  {
    name: 'Northern',
    d: 'M280,140 L320,120 L340,150 L320,170 L280,160 Z',
    color: '#1e40af'
  },
  {
    name: 'Eastern',
    d: 'M320,170 L360,190 L340,230 L300,220 L280,190 Z',
    color: '#1e3a8a'
  },
  {
    name: 'Southern',
    d: 'M220,220 L260,230 L300,220 L280,260 L240,250 L200,240 Z',
    color: '#172554'
  }
];

export default function KYMap() {
  const [activeRegion, setActiveRegion] = useState<string | null>(null);
  
  return (
    <div className="bg-white p-4 rounded-xl shadow-md overflow-x-auto">
      <h3 className="text-xl font-bold text-center mb-4">Kentucky Regions Map</h3>
      <div className="relative min-w-[300px]">
        <svg viewBox="0 0 400 400" className="w-full h-auto">
          {regionPaths.map(region => (
            <path
              key={region.name}
              d={region.d}
              fill={activeRegion === region.name ? region.color : `${region.color}80`}
              stroke="#1e3a8a"
              strokeWidth="1"
              className="cursor-pointer transition-all duration-200 hover:opacity-90"
              onMouseEnter={() => setActiveRegion(region.name)}
              onMouseLeave={() => setActiveRegion(null)}
              onClick={() => setActiveRegion(region.name)}
            />
          ))}
        </svg>
        
        {activeRegion && (
          <div className="absolute bottom-0 left-0 right-0 bg-white p-4 shadow-lg rounded-b-lg">
            <h4 className="font-bold text-lg">{activeRegion} Kentucky</h4>
            <p>{KYRegions.find(r => r.name === activeRegion)?.description}</p>
          </div>
        )}
      </div>
    </div>
  );
}

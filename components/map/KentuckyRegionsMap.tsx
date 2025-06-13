'use client';

import { ComposableMap, Geographies, Geography, ZoomableGroup } from 'react-simple-maps';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

// Simplified GeoJSON for Kentucky regions
const geoUrl = 'https://raw.githubusercontent.com/deldersveld/topojson/master/countries/us-states/KY-21-kentucky-counties.json';

const regionColors: Record<string, string> = {
  'Western': '#3b82f6',
  'Bluegrass': '#2563eb',
  'Eastern': '#1d4ed8',
  'Northern': '#1e40af',
  'Southern': '#1e3a8a',
  'Central': '#172554'
};

export default function KentuckyRegionsMap() {
  const router = useRouter();
  const [hoveredRegion, setHoveredRegion] = useState<string | null>(null);

  const handleRegionClick = (regionName: string) => {
    const regionSlug = regionName.toLowerCase().replace(/\s+/g, '-');
    router.push(`/regions/${regionSlug}`);
  };

  return (
    <div className="bg-white p-6 rounded-xl shadow-md">
      <h2 className="text-2xl font-bold text-center mb-6">Kentucky Regions</h2>
      <div className="relative w-full h-[500px] border rounded-lg overflow-hidden">
        <ComposableMap 
          projection="geoAlbersUsa"
          projectionConfig={{ scale: 4000, center: [-85, 37.8] }}
        >
          <ZoomableGroup center={[-85, 37.8]} zoom={1}>
            <Geographies geography={geoUrl}>
              {({ geographies }) =>
                geographies.map((geo) => {
                  const regionName = geo.properties.NAME_1;
                  const isHovered = hoveredRegion === regionName;
                  
                  return (
                    <Geography
                      key={geo.rsmKey}
                      geography={geo}
                      fill={regionColors[regionName] || '#e5e7eb'}
                      stroke="#FFFFFF"
                      strokeWidth={0.5}
                      style={{
                        default: {
                          fill: isHovered 
                            ? `${regionColors[regionName]}CC` 
                            : regionColors[regionName] || '#e5e7eb',
                          outline: 'none',
                        },
                        hover: {
                          fill: `${regionColors[regionName]}CC`,
                          outline: 'none',
                          cursor: 'pointer',
                        },
                        pressed: {
                          fill: `${regionColors[regionName]}FF`,
                          outline: 'none',
                        },
                      }}
                      onMouseEnter={() => setHoveredRegion(regionName)}
                      onMouseLeave={() => setHoveredRegion(null)}
                      onClick={() => handleRegionClick(regionName)}
                    />
                  );
                })
              }
            </Geographies>
          </ZoomableGroup>
        </ComposableMap>
        
        {hoveredRegion && (
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-white px-4 py-2 rounded-lg shadow-lg border border-gray-200">
            <h3 className="font-semibold">{hoveredRegion} Kentucky</h3>
            <p className="text-sm text-gray-600">Click to explore resources</p>
          </div>
        )}
      </div>
      
      <div className="mt-6 grid grid-cols-2 md:grid-cols-3 gap-4">
        {Object.entries(regionColors).map(([region, color]) => (
          <div 
            key={region}
            className="flex items-center cursor-pointer hover:bg-gray-50 p-2 rounded"
            onMouseEnter={() => setHoveredRegion(region)}
            onMouseLeave={() => setHoveredRegion(null)}
            onClick={() => handleRegionClick(region)}
          >
            <div 
              className="w-4 h-4 rounded-full mr-2" 
              style={{ backgroundColor: color }}
            />
            <span className="text-sm">{region}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

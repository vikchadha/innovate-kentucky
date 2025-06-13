'use client';

import { useParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import { entrepreneurResources, type EntrepreneurResource } from '@/data/entrepreneur-resources';

type CategoryType = 'funding' | 'education' | 'incubator' | 'network' | 'government';

const categoryColors: Record<CategoryType, string> = {
  funding: 'bg-indigo-900 text-indigo-200',
  education: 'bg-green-900 text-green-200',
  incubator: 'bg-purple-900 text-purple-200',
  network: 'bg-blue-900 text-blue-200',
  government: 'bg-red-900 text-red-200'
};

const categoryGradients: Record<CategoryType, string> = {
  funding: 'from-indigo-500 to-indigo-700',
  education: 'from-green-500 to-green-700',
  incubator: 'from-purple-500 to-purple-700',
  network: 'from-blue-500 to-blue-700',
  government: 'from-red-500 to-red-700'
};

export default function ResourceDetailPage() {
  const params = useParams<{ id: string | string[] }>();
  const [resource, setResource] = useState<EntrepreneurResource | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchResource = async () => {
      try {
        if (!params?.['id']) {
          setError('Resource ID is missing');
          return;
        }
        
        const paramId = params['id'];
        const resourceId = Array.isArray(paramId) ? paramId[0] : paramId;
        const foundResource = entrepreneurResources.find(r => r.id === resourceId);
        
        if (!foundResource) {
          setError('Resource not found');
          return;
        }
        
        setResource(foundResource);
      } catch (err) {
        console.error('Error fetching resource:', err);
        setError('Failed to load resource');
      } finally {
        setIsLoading(false);
      }
    };

    fetchResource();
  }, [params]);

  if (isLoading) {
    return (
      <div className="min-h-[60vh] flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-indigo-500"></div>
      </div>
    );
  }

  if (error || !resource) {
    return (
      <div className="min-h-[60vh] flex flex-col items-center justify-center text-center p-4">
        <div className="text-red-500 text-2xl mb-4">Error</div>
        <p className="text-gray-300 mb-6">{error || 'Resource not found'}</p>
        <Link 
          href="/entrepreneur-resources" 
          className="inline-flex items-center text-indigo-400 hover:text-indigo-300 transition-colors"
        >
          <svg className="w-5 h-5 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          Back to Resources
        </Link>
      </div>
    );
  }
  
  // Safe to use resource here as we've checked it's not null
  const { 
    category, 
    region, 
    title, 
    description, 
    amount, 
    deadline, 
    url, 
    eligibility 
  } = resource;
  
  // Safely get category colors with fallback
  const categoryColor = categoryColors[category as CategoryType] || 'bg-gray-700 text-gray-200';
  const categoryGradient = categoryGradients[category as CategoryType] || 'from-gray-500 to-gray-700';

  return (
    <div className="mx-auto max-w-6xl px-4 sm:px-6 py-12 md:py-20">
      <div className="mb-8">
        <Link 
          href="/entrepreneur-resources" 
          className="inline-flex items-center text-indigo-400 hover:text-indigo-300 transition-colors mb-6"
        >
          <svg className="w-5 h-5 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          Back to Resources
        </Link>
        
        <div className="flex items-center gap-3 mb-8">
          <span className={`text-xs font-semibold px-3 py-1 rounded-full ${categoryColor}`}>
            {category.toUpperCase()}
          </span>
          <span className="text-sm text-gray-400">
            {region.replace(/-/g, ' ')}
          </span>
        </div>

        <h1 className="text-4xl md:text-5xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 to-indigo-300">
          {title}
        </h1>
        
        <div className="prose prose-invert max-w-none">
          <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-8 mb-8">
            {description && (
              <p className="text-xl text-gray-300 mb-6">
                {description}
              </p>
            )}
            
            <div className="space-y-4">
              {amount && (
                <div className="flex items-start">
                  <svg className="w-5 h-5 text-indigo-400 mt-0.5 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <div>
                    <p className="text-sm text-gray-400">Funding Amount</p>
                    <p className="text-lg font-medium">{amount}</p>
                  </div>
                </div>
              )}
              
              {deadline && (
                <div className="flex items-start">
                  <svg className="w-5 h-5 text-indigo-400 mt-0.5 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  <div>
                    <p className="text-sm text-gray-400">Deadline</p>
                    <p className="text-lg font-medium">{deadline}</p>
                  </div>
                </div>
              )}
              
              <div className="flex items-start">
                <svg className="w-5 h-5 text-indigo-400 mt-0.5 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <div>
                  <p className="text-sm text-gray-400">Region</p>
                  <p className="text-lg font-medium capitalize">{region.replace(/-/g, ' ')}</p>
                </div>
              </div>
            </div>
            
            {url && (
              <div className="mt-8 pt-6 border-t border-gray-700">
                <a 
                  href={url} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className={`inline-flex items-center px-6 py-3 rounded-full font-medium text-white bg-gradient-to-r ${categoryGradient} hover:opacity-90 transition-opacity`}
                >
                  Visit Resource
                  <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </a>
              </div>
            )}
          </div>
          
          {eligibility && eligibility.length > 0 && (
            <div className="bg-gray-800 rounded-2xl p-6 mb-8">
              <h3 className="text-xl font-semibold mb-4 flex items-center">
                <svg className="w-5 h-5 mr-2 text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                Eligibility Requirements
              </h3>
              <ul className="space-y-2">
                {eligibility.map((item, index) => (
                  <li key={index} className="flex items-start">
                    <span className="text-indigo-400 mr-2">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
          
          <div className="bg-gray-800 rounded-2xl p-6">
            <h3 className="text-xl font-semibold mb-4 flex items-center">
              <svg className="w-5 h-5 mr-2 text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              About This Resource
            </h3>
            <p className="text-gray-300">
              This {category} resource is available to {region.replace(/-/g, ' ')}. For the most up-to-date information, please visit the official website by clicking the button above.
            </p>
            
            <div className="mt-6">
              <Link 
                href="/entrepreneur-resources" 
                className="inline-flex items-center text-indigo-400 hover:text-indigo-300 transition-colors"
              >
                <svg className="w-5 h-5 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                </svg>
                Back to Resources
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

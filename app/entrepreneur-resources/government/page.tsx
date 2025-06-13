import { Suspense } from 'react';
import Link from 'next/link';
import { entrepreneurResources } from '@/data/entrepreneur-resources';
import ResourceCard from '@/components/resources/resource-card';
import ResourcesLoading from '@/components/resources/loading';

export const metadata = {
  title: 'Government Resources - Entrepreneur Resources',
  description: 'State and local government resources for Kentucky businesses.'
};

function GovernmentResources() {
  const governmentResources = entrepreneurResources.filter(
    resource => resource.category === 'government'
  );

  return (
    <div className="mx-auto max-w-6xl px-4 sm:px-6 py-12 md:py-20">
      <div className="mb-6">
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
      <div className="text-center pb-12 md:pb-16">
        <h1 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-rose-500 to-rose-300 mb-4">
          Government Resources
        </h1>
        <p className="text-xl text-gray-400 max-w-2xl mx-auto">
          Access state and local government programs supporting Kentucky businesses
        </p>
      </div>

      <Suspense fallback={<ResourcesLoading />}>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {governmentResources.map((resource) => (
            <ResourceCard key={resource.id} resource={resource} />
          ))}
        </div>
      </Suspense>
    </div>
  );
}

export default function GovernmentPage() {
  return (
    <Suspense fallback={<ResourcesLoading />}>
      <GovernmentResources />
    </Suspense>
  );
}

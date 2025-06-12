'use client';

import { notFound } from 'next/navigation';
import { entrepreneurResources } from '@/data/entrepreneur-resources';

export default function ResourceDetailPage(props: any) {
  // Type assertion for params
  const params = props.params as { id: string };
  const resource = entrepreneurResources.find(r => r.id === params.id);
  
  if (!resource) {
    return notFound();
  }

  return (
    <div className="mx-auto max-w-6xl px-4 sm:px-6 py-12 md:py-20">
      <div className="max-w-3xl mx-auto">
        <div className="mb-8">
          <span className="text-xs font-semibold px-3 py-1 rounded-full bg-gray-700 text-gray-300">
            {resource.category.toUpperCase()}
          </span>
          <span className="text-xs text-gray-400 ml-2">
            {resource.region.replace('-', ' ')}
          </span>
        </div>
        
        <h1 className="text-4xl md:text-5xl font-bold mb-6">
          {resource.title}
        </h1>
        
        <div className="prose prose-invert max-w-none">
          <p className="text-xl text-gray-300 mb-8">
            {resource.description}
          </p>
          
          {(resource.amount || resource.deadline) && (
            <div className="bg-gray-800 rounded-xl p-6 mb-8">
              {resource.amount && (
                <p className="text-lg">
                  <strong className="text-indigo-400">Amount:</strong> {resource.amount}
                </p>
              )}
              {resource.deadline && (
                <p className="text-lg">
                  <strong className="text-amber-400">Deadline:</strong> {resource.deadline}
                </p>
              )}
            </div>
          )}
          
          <a 
            href={resource.url} 
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-6 py-3 rounded-full bg-indigo-600 text-white hover:bg-indigo-700 transition-colors"
          >
            Visit Resource Website
            <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
}

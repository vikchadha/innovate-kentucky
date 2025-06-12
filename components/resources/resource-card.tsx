'use client';

import Link from "next/link";

interface ResourceCardProps {
  resource: {
    id: string;
    title: string;
    description: string;
    category: 'funding' | 'education' | 'incubator' | 'network' | 'government';
    region: string;
    url: string;
    deadline?: string;
    amount?: string;
  };
}

export default function ResourceCard({ resource }: ResourceCardProps) {
  const categoryColors = {
    funding: 'bg-indigo-900 text-indigo-200',
    education: 'bg-green-900 text-green-200',
    incubator: 'bg-purple-900 text-purple-200',
    network: 'bg-blue-900 text-blue-200',
    government: 'bg-red-900 text-red-200'
  };

  return (
    <div className="bg-gray-800 rounded-2xl p-6 hover:bg-gray-700 transition-colors">
      <Link href={`/entrepreneur-resources/${resource.id}`}>
        <div className="flex items-center justify-between mb-4">
          <span className={`text-xs font-semibold px-2 py-1 rounded-full ${categoryColors[resource.category]}`}>
            {resource.category.toUpperCase()}
          </span>
          <span className="text-xs text-gray-400">
            {resource.region.replace('-', ' ')}
          </span>
        </div>
        
        <h3 className="text-xl font-bold text-white mb-2">
          {resource.title}
        </h3>
        
        <p className="text-gray-300 mb-4">
          {resource.description}
        </p>
        
        {resource.amount && (
          <p className="text-sm text-indigo-400 mb-2">
            Amount: {resource.amount}
          </p>
        )}
        
        {resource.deadline && (
          <p className="text-sm text-amber-400 mb-4">
            Deadline: {resource.deadline}
          </p>
        )}
        
        <div className="text-indigo-400 hover:text-indigo-300 font-medium flex items-center">
          Learn More
          <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
          </svg>
        </div>
      </Link>
    </div>
  );
}

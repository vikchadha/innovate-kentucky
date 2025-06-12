import { Resource } from "@/data/resources";
import Link from "next/link";

export default function ResourceCard({ resource }: { resource: Resource }) {
  return (
    <div className="bg-gray-800 rounded-2xl p-6 hover:bg-gray-700 transition-colors">
      <div className="flex items-center justify-between mb-4">
        <span className="text-xs font-semibold px-2 py-1 rounded-full bg-indigo-900 text-indigo-200">
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
      
      <Link 
        href={resource.url} 
        target="_blank"
        rel="noopener noreferrer"
        className="text-indigo-400 hover:text-indigo-300 font-medium flex items-center"
      >
        Visit Resource
        <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
        </svg>
      </Link>
    </div>
  );
}

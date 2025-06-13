'use client';
import { KYIndustries, KYIndustry } from '@/data/ky-industries';
import Link from 'next/link';
import { LogoPlaceholder } from './logo-placeholder';

interface IndustryCardProps {
  industry: KYIndustry;
}

const IndustryCard = ({ industry }: IndustryCardProps) => (
  <div 
    className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100 dark:border-gray-700/50 hover:border-gray-200 dark:hover:border-gray-600"
    data-aos="fade-up"
  >
    <div className="text-4xl mb-4 text-indigo-600 dark:text-indigo-400">{industry.icon}</div>
    <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">{industry.name}</h3>
    <p className="text-gray-600 dark:text-gray-300 mb-4">{industry.description}</p>
    <p className="text-sm bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-400 dark:to-indigo-400 bg-clip-text text-transparent font-medium mb-2">
      {industry.stats}
    </p>
    <div className="mt-4 flex flex-wrap gap-2">
      {industry.companies.map(company => (
        <LogoPlaceholder key={company.name} name={company.name} />
      ))}
    </div>
    <div className="mt-4 pt-4 border-t border-gray-100 dark:border-gray-700">
      <Link 
        href={industry.link}
        className="group text-sm font-medium text-blue-600 dark:text-blue-400 hover:underline inline-flex items-center"
      >
        Success Story: {industry.successStory}
        <span className="ml-1 group-hover:translate-x-1 transition-transform duration-200">→</span>
      </Link>
      {industry.facts && (
        <ul className="mt-2 space-y-1 text-sm text-gray-500 dark:text-gray-400">
          {industry.facts.map((fact, i) => (
            <li key={i} className="flex items-start">
              <span className="mr-1">•</span>
              <span>{fact}</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  </div>
);

export default function IndustryShowcase() {
  return (
    <section className="py-16 bg-white dark:bg-gray-950 w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 w-full">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Kentucky's Innovation Hubs</h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Discover thriving industries and success stories from across the Bluegrass State
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {KYIndustries.map((industry) => (
            <IndustryCard key={industry.name} industry={industry} />
          ))}
        </div>
      </div>
    </section>
  );
}

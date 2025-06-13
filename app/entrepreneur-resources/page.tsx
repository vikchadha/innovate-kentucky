import Link from 'next/link';

export const metadata = {
  title: 'Entrepreneur Resources - Innovate Kentucky',
  description: 'Discover resources, funding, and support for Kentucky entrepreneurs and startups.'
};

type CategoryCardProps = {
  id: string;
  name: string;
  description: string;
  icon: React.ReactNode;
  gradient: string;
  href: string;
};

const categories: CategoryCardProps[] = [
  {
    id: 'funding',
    name: 'Funding',
    description: 'Grants, loans, and investment opportunities',
    icon: (
      <svg className="w-8 h-8 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    gradient: 'from-blue-500 to-blue-600',
    href: '/entrepreneur-resources/funding'
  },
  {
    id: 'incubator',
    name: 'Incubators & Accelerators',
    description: 'Programs to help startups grow',
    icon: (
      <svg className="w-8 h-8 text-purple-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
      </svg>
    ),
    gradient: 'from-purple-500 to-purple-600',
    href: '/entrepreneur-resources/incubators-accelerators'
  },
  {
    id: 'education',
    name: 'Education',
    description: 'Training and development programs',
    icon: (
      <svg className="w-8 h-8 text-emerald-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 14l9-5-9-5-9 5 9 5z" />
        <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" />
      </svg>
    ),
    gradient: 'from-emerald-500 to-emerald-600',
    href: '/entrepreneur-resources/education'
  },
  {
    id: 'network',
    name: 'Networks',
    description: 'Entrepreneur communities and networks',
    icon: (
      <svg className="w-8 h-8 text-amber-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
    gradient: 'from-amber-500 to-amber-600',
    href: '/entrepreneur-resources/networks'
  },
  {
    id: 'government',
    name: 'Government Resources',
    description: 'State and local business resources',
    icon: (
      <svg className="w-8 h-8 text-rose-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    ),
    gradient: 'from-rose-500 to-rose-600',
    href: '/entrepreneur-resources/government'
  }
];

export default function EntrepreneurResources() {
  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 py-12 md:py-20">
      <div className="text-center pb-12 md:pb-16">
        <h1 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 to-indigo-300 mb-4">
          Kentucky Entrepreneur Resources
        </h1>
        <p className="text-xl text-gray-400 max-w-2xl mx-auto">
          Everything you need to start and grow your business in the Bluegrass State
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {categories.map((category) => (
          <Link
            key={category.id}
            href={category.href}
            className={`group relative overflow-hidden rounded-2xl p-6 bg-gradient-to-br ${category.gradient} hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1`}
          >
            <div className="absolute inset-0 bg-white/5 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="relative z-10">
              <div className="w-16 h-16 flex items-center justify-center bg-white/10 rounded-xl mb-4">
                {category.icon}
              </div>
              <h2 className="text-xl font-bold text-white mb-2">{category.name}</h2>
              <p className="text-gray-200 text-sm">{category.description}</p>
              <div className="mt-4 inline-flex items-center text-sm font-medium text-white group-hover:underline">
                Explore resources
                <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

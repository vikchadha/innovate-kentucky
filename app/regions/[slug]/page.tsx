import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { getRegionBySlug, getAllRegionSlugs, RegionData } from '@/data/regions';
import { Metadata } from 'next';
import YouTubeEmbed from '@/components/youtube-embed';

export async function generateStaticParams() {
  return getAllRegionSlugs().map(slug => ({
    slug,
  }));
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const region = getRegionBySlug(params.slug);
  if (!region) return {};
  
  return {
    title: `${region.name} Kentucky - Innovate Kentucky`,
    description: region.description,
    openGraph: {
      title: `${region.name} Kentucky - Innovate Kentucky`,
      description: region.description,
      images: [region.imageUrl],
    },
  };
}

export default function RegionPage({ params }: { params: { slug: string } }) {
  const region = getRegionBySlug(params.slug);
  
  if (!region) {
    notFound();
  }

  return (
    <div className="bg-white dark:bg-gray-900">
      {/* Hero Section */}
      <div className="relative h-64 md:h-96 w-full">
        <div className="absolute inset-0 bg-black/50 z-10 flex items-center justify-center">
          <div className="text-center px-4">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">{region.name} Kentucky</h1>
            <p className="text-xl text-gray-200 max-w-3xl mx-auto">{region.description}</p>
          </div>
        </div>
        <Image
          src={region.imageUrl}
          alt={`${region.name} Kentucky`}
          fill
          className="object-cover"
          priority
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Stats Section */}
        <div className="bg-blue-50 dark:bg-gray-800 rounded-xl p-6 mb-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="text-center">
            <p className="text-3xl font-bold text-blue-700 dark:text-blue-400">{region.stats.population}</p>
            <p className="text-gray-600 dark:text-gray-300">Population</p>
          </div>
          <div className="text-center">
            <p className="text-3xl font-bold text-blue-700 dark:text-blue-400">{region.stats.gdp}</p>
            <p className="text-gray-600 dark:text-gray-300">GDP</p>
          </div>
          <div className="text-center">
            <p className="text-3xl font-bold text-blue-700 dark:text-blue-400">{region.stats.jobGrowth}</p>
            <p className="text-gray-600 dark:text-gray-300">Job Growth (YoY)</p>
          </div>
          <div className="text-center">
            <p className="text-3xl font-bold text-blue-700 dark:text-blue-400">{region.stats.medianIncome}</p>
            <p className="text-gray-600 dark:text-gray-300">Median Income</p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Left Column */}
          <div className="lg:col-span-2 space-y-12">
            {/* Video Section */}
            {region.videoId && (
              <div>
                <h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">Explore {region.name} Kentucky</h2>
                <div className="aspect-w-16 aspect-h-9 rounded-xl overflow-hidden">
                  <YouTubeEmbed id={region.videoId} />
                </div>
              </div>
            )}

            {/* Key Industries */}
            <div>
              <h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">Key Industries</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {region.keyIndustries.map((industry, index) => (
                  <div key={index} className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700">
                    <h3 className="font-semibold text-gray-900 dark:text-white">{industry}</h3>
                  </div>
                ))}
              </div>
            </div>

            {/* Major Employers */}
            <div>
              <h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">Major Employers</h2>
              <div className="space-y-4">
                {region.majorEmployers.map((employer, index) => (
                  <div key={index} className="flex items-center space-x-4 p-3 bg-white dark:bg-gray-800 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors">
                    <div className="flex-shrink-0 w-10 h-10 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center">
                      <span className="text-blue-600 dark:text-blue-300 font-medium">{employer.charAt(0)}</span>
                    </div>
                    <div>
                      <h3 className="font-medium text-gray-900 dark:text-white">{employer}</h3>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className="space-y-8">
            {/* Quick Facts */}
            <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm border border-gray-200 dark:border-gray-700">
              <h2 className="text-xl font-bold mb-4 text-gray-900 dark:text-white">Quick Facts</h2>
              <div className="space-y-4">
                <div>
                  <h3 className="font-medium text-gray-700 dark:text-gray-300">Major Cities</h3>
                  <p className="text-gray-900 dark:text-white">
                    {region.majorEmployers.slice(0, 3).join(', ')}
                  </p>
                </div>
                <div>
                  <h3 className="font-medium text-gray-700 dark:text-gray-300">Educational Institutions</h3>
                  <p className="text-gray-900 dark:text-white">
                    {region.educationalInstitutions.join(', ')}
                  </p>
                </div>
                <div>
                  <h3 className="font-medium text-gray-700 dark:text-gray-300">Top Attractions</h3>
                  <p className="text-gray-900 dark:text-white">
                    {region.attractions.join(', ')}
                  </p>
                </div>
              </div>
            </div>

            {/* Economic Initiatives */}
            <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm border border-gray-200 dark:border-gray-700">
              <h2 className="text-xl font-bold mb-4 text-gray-900 dark:text-white">Economic Initiatives</h2>
              <div className="space-y-4">
                {region.economicInitiatives.map((initiative, index) => (
                  <div key={index} className="flex items-start">
                    <div className="flex-shrink-0 mt-1">
                      <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                    </div>
                    <p className="ml-3 text-gray-700 dark:text-gray-300">{initiative}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Resources */}
            <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm border border-gray-200 dark:border-gray-700">
              <h2 className="text-xl font-bold mb-4 text-gray-900 dark:text-white">Resources</h2>
              <div className="space-y-3">
                {region.resources.map((resource, index) => (
                  <a
                    key={index}
                    href={resource.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block p-3 rounded-lg hover:bg-blue-50 dark:hover:bg-gray-700 transition-colors group"
                  >
                    <h3 className="font-medium text-blue-600 dark:text-blue-400 group-hover:underline">
                      {resource.title}
                    </h3>
                    <p className="text-sm text-gray-600 dark:text-gray-300 mt-1">
                      {resource.description}
                    </p>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-blue-700 dark:bg-blue-900 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-extrabold text-white mb-4">Ready to explore more of Kentucky?</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Discover what makes each region of the Bluegrass State unique and find your perfect place to live, work, and grow.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            {getAllRegionSlugs()
              .filter(slug => slug !== region.slug)
              .map(slug => (
                <Link
                  key={slug}
                  href={`/regions/${slug}`}
                  className="px-6 py-3 border border-transparent text-base font-medium rounded-md text-blue-700 bg-white hover:bg-blue-50"
                >
                  Explore {slug.charAt(0).toUpperCase() + slug.slice(1)}
                </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

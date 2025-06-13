'use client';
import Link from 'next/link';

export default function SuccessSpotlight() {
  return (
    <section className="py-16 bg-gray-50 dark:bg-gray-900 w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 w-full">
        <h2 className="text-3xl font-bold text-center mb-8 text-gray-900 dark:text-white">Kentucky Success Story</h2>
        <div className="bg-white dark:bg-gray-800 rounded-xl p-8 md:p-12 grid md:grid-cols-2 gap-8 shadow-sm">
          <div>
            <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">AppHarvest</h3>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              This Morehead-based agtech company has revolutionized sustainable farming 
              in Eastern Kentucky, creating hundreds of jobs while developing innovative 
              greenhouse technologies.
            </p>
            <Link 
              href="/success-stories/appharvest" 
              className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium"
            >
              Read Their Story
              <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </Link>
          </div>
          <div className="bg-gray-100 dark:bg-gray-700 rounded-lg h-64 flex items-center justify-center overflow-hidden">
            <span className="text-gray-400 dark:text-gray-500">Featured Company Image</span>
          </div>
        </div>
      </div>
    </section>
  );
}

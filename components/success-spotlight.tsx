'use client';
import Link from 'next/link';

export default function SuccessSpotlight() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Kentucky Success Story</h2>
        <div className="bg-gray-50 rounded-xl p-8 md:p-12 grid md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-2xl font-bold mb-4">AppHarvest</h3>
            <p className="text-gray-600 mb-4">
              This Morehead-based agtech company has revolutionized sustainable farming 
              in Eastern Kentucky, creating hundreds of jobs while developing innovative 
              greenhouse technologies.
            </p>
            <Link 
              href="/success-stories/appharvest" 
              className="inline-block px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            >
              Read Their Story
            </Link>
          </div>
          <div className="bg-gray-200 rounded-lg h-64 flex items-center justify-center">
            <span className="text-gray-400">Featured Company Image</span>
          </div>
        </div>
      </div>
    </section>
  );
}

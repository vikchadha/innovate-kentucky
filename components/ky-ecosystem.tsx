'use client';

export default function KentuckyEcosystem() {
  return (
    <section className="py-16 bg-gray-50 dark:bg-gray-800 w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 w-full">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-900 dark:text-white">Kentucky Innovation Ecosystem</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm">
            <h3 className="text-xl font-bold mb-4 dark:text-white">Startups</h3>
            <p className="text-gray-600 dark:text-gray-300">1,200+ startups across 15 industries</p>
          </div>
          <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm">
            <h3 className="text-xl font-bold mb-4 dark:text-white">Incubators</h3>
            <p className="text-gray-600 dark:text-gray-300">25+ incubators & accelerators</p>
          </div>
          <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm">
            <h3 className="text-xl font-bold mb-4 dark:text-white">Research</h3>
            <p className="text-gray-600 dark:text-gray-300">8 university research parks</p>
          </div>
        </div>
      </div>
    </section>
  );
}

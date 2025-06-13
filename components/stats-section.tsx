'use client';

export default function StatsSection() {
  const stats = [
    { value: '1,200+', label: 'Startups Supported' },
    { value: '$500M+', label: 'Funding Secured' },
    { value: '120', label: 'Counties Served' },
    { value: '85%', label: 'Success Rate' }
  ];

  return (
    <section className="py-16 bg-gray-50 dark:bg-gray-900/80 w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 w-full">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-900 dark:text-white">Kentucky by the Numbers</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <div 
              key={index} 
              className="text-center p-6 rounded-xl bg-white dark:bg-gray-800/50 shadow-sm hover:shadow-md transition-shadow duration-300"
              data-aos="fade-up" 
              data-aos-delay={index * 100}
            >
              <p className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-400 dark:to-indigo-400">
                {stat.value}
              </p>
              <p className="mt-2 text-lg text-gray-600 dark:text-gray-300">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

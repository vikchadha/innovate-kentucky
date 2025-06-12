export default function NotFound() {
  return (
    <div className="mx-auto max-w-6xl px-4 sm:px-6 py-12 md:py-20">
      <div className="max-w-3xl mx-auto text-center">
        <h1 className="text-4xl font-bold text-gray-200 mb-4">Resource Not Found</h1>
        <p className="text-xl text-gray-400 mb-8">
          The resource you're looking for doesn't exist or has been moved.
        </p>
        <a 
          href="/entrepreneur-resources" 
          className="px-6 py-3 rounded-full bg-indigo-600 text-white hover:bg-indigo-700 transition-colors inline-block"
        >
          Browse All Resources
        </a>
      </div>
    </div>
  );
}

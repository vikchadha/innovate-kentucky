export default function Loading() {
  return (
    <div className="mx-auto max-w-6xl px-4 sm:px-6 py-12 md:py-20">
      <div className="max-w-3xl mx-auto animate-pulse">
        <div className="h-6 w-32 bg-gray-700 rounded-full mb-8"></div>
        <div className="h-12 bg-gray-700 rounded-lg mb-6 w-3/4"></div>
        <div className="h-4 bg-gray-700 rounded-lg mb-4 w-full"></div>
        <div className="h-4 bg-gray-700 rounded-lg mb-4 w-5/6"></div>
        <div className="h-32 bg-gray-700 rounded-xl mb-8 w-full"></div>
        <div className="h-12 bg-gray-700 rounded-full w-48"></div>
      </div>
    </div>
  );
}

export default function ResourcesLoading() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[300px] gap-4">
      <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
      <p className="text-gray-600">Loading resources...</p>
    </div>
  );
}

export function LogoPlaceholder({ name }: { name: string }) {
  return (
    <div className="bg-gray-100 rounded-lg p-4 flex items-center justify-center h-16 w-32 border border-gray-200">
      <span className="text-sm font-medium text-gray-500 text-center truncate w-full">
        {name}
      </span>
    </div>
  );
}

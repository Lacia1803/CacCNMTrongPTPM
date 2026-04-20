export default function CountriesLoading() {
  return (
    <div className="max-w-5xl mx-auto px-4 py-12">
      <div className="h-9 w-64 bg-gray-200 rounded animate-pulse mb-2" />
      <div className="h-4 w-48 bg-gray-200 rounded animate-pulse mb-8" />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
        {Array.from({ length: 12 }).map((_, i) => (
          <div key={i} className="border rounded-xl overflow-hidden">
            <div className="w-full h-40 bg-gray-200 animate-pulse" />
            <div className="p-4 space-y-2">
              <div className="h-5 w-3/4 bg-gray-200 rounded animate-pulse" />
              <div className="h-3 w-full bg-gray-200 rounded animate-pulse" />
              <div className="h-3 w-1/2 bg-gray-200 rounded animate-pulse" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

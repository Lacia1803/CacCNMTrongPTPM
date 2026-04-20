export default function CountryDetailLoading() {
  return (
    <div className="max-w-5xl mx-auto px-4 py-12">
      <div className="h-4 w-32 bg-gray-200 rounded animate-pulse mb-8" />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <div className="w-full h-64 bg-gray-200 rounded-xl animate-pulse" />
        <div className="space-y-4">
          <div className="h-9 w-3/4 bg-gray-200 rounded animate-pulse" />
          <div className="h-4 w-1/2 bg-gray-200 rounded animate-pulse" />
          <div className="grid grid-cols-2 gap-3 mt-6">
            {Array.from({ length: 8 }).map((_, i) => (
              <div key={i} className="h-4 bg-gray-200 rounded animate-pulse" />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

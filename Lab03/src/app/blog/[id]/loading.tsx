export default function BlogPostLoading() {
  return (
    <div>
      <div className="h-4 w-32 bg-gray-200 rounded animate-pulse mb-6" />
      <div className="h-9 w-3/4 bg-gray-200 rounded animate-pulse mb-4" />
      <div className="flex gap-3 mb-6">
        <div className="h-4 w-40 bg-gray-200 rounded animate-pulse" />
        <div className="h-4 w-32 bg-gray-200 rounded animate-pulse" />
      </div>
      <div className="space-y-3 mb-8">
        {[1,2,3,4,5].map(i => (
          <div key={i} className={`h-4 bg-gray-200 rounded animate-pulse ${i%3===0?"w-2/3":"w-full"}`} />
        ))}
      </div>
    </div>
  );
}

export default function Loading() {
  return (
    <div className="space-y-8 animate-pulse">
      <section className="text-center space-y-4">
        <div className="h-10 bg-gray-200 rounded w-3/4 mx-auto"></div>
        <div className="h-6 bg-gray-200 rounded w-2/3 mx-auto"></div>
      </section>

      <section className="bg-white rounded-lg shadow-lg p-6">
        <div className="h-8 bg-gray-200 rounded w-1/3 mb-4"></div>
        <div className="aspect-video bg-gray-100 rounded-lg flex items-center justify-center">
          <div className="text-center">
            <div className="w-8 h-8 border-4 border-primary border-t-transparent rounded-full animate-spin mx-auto"></div>
            <p className="mt-2 text-gray-600">Loading calculator...</p>
          </div>
        </div>
      </section>
    </div>
  )
}

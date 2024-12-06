import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="min-h-[400px] flex items-center justify-center">
      <div className="text-center">
        <h2 className="text-2xl font-semibold text-gray-900 mb-4">Page Not Found</h2>
        <p className="text-gray-600 mb-4">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <Link 
          href="/"
          className="px-4 py-2 bg-primary text-white rounded-md hover:bg-primary/90 transition-colors inline-block"
        >
          Return Home
        </Link>
      </div>
    </div>
  )
}

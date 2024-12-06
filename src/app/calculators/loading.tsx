export default function Loading() {
  return (
    <div className="flex flex-col gap-8 animate-pulse">
      <div className="flex flex-col gap-2">
        <div className="h-12 w-64 rounded-lg bg-muted"></div>
        <div className="h-6 w-96 rounded-lg bg-muted"></div>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 md:gap-8">
        {Array.from({ length: 6 }).map((_, i) => (
          <div key={i} className="rounded-lg border p-6">
            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-4">
                <div className="h-8 w-8 rounded-full bg-muted"></div>
                <div className="h-6 w-48 rounded-lg bg-muted"></div>
              </div>
              <div className="h-4 w-full rounded-lg bg-muted"></div>
              <div className="h-4 w-2/3 rounded-lg bg-muted"></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

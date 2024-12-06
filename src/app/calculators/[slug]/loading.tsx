export default function Loading() {
  return (
    <div className="flex flex-col gap-8 animate-pulse">
      <div className="flex flex-col gap-2">
        <div className="flex items-center gap-4">
          <div className="h-12 w-12 rounded-full bg-muted"></div>
          <div className="h-10 w-64 rounded-lg bg-muted"></div>
        </div>
        <div className="h-6 w-96 rounded-lg bg-muted"></div>
      </div>

      <div className="h-[450px] rounded-lg bg-muted"></div>
    </div>
  )
}

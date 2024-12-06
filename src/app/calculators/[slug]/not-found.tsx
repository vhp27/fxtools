import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="flex h-[450px] flex-col items-center justify-center gap-4">
      <h2 className="text-2xl font-bold">Calculator Not Found</h2>
      <p className="text-muted-foreground">
        The calculator you&apos;re looking for doesn&apos;t exist.
      </p>
      <Link
        href="/calculators"
        className="inline-flex items-center justify-center rounded-md bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
      >
        View All Calculators
      </Link>
    </div>
  )
}

interface CalculatorLayoutProps {
  children: React.ReactNode
}

export const runtime = 'edge'

export default function CalculatorLayout({ children }: CalculatorLayoutProps) {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-7xl mx-auto">
        {children}
      </div>
    </div>
  )
}
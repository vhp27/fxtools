import Link from 'next/link'
import { calculators } from '@/config/calculators'

export const metadata = {
  title: 'Trading Calculators',
  description: 'Professional trading calculators for position sizing, pip value, and risk management.',
}

export default function CalculatorsPage() {
  return (
    <div className="flex flex-col gap-8">
      <div className="flex flex-col gap-2">
        <h1 className="text-3xl font-bold leading-tight tracking-tighter md:text-5xl lg:leading-[1.1]">
          Trading Calculators
        </h1>
        <p className="text-lg text-muted-foreground sm:text-xl">
          Professional-grade calculators to help you make informed trading decisions.
        </p>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 md:gap-8">
        {calculators.map((calculator) => (
          <Link
            key={calculator.id}
            href={`/calculators/${calculator.slug}`}
            className="group relative rounded-lg border p-6 hover:bg-muted"
          >
            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-4">
                <span className="text-3xl">{calculator.icon}</span>
                <h2 className="text-xl font-semibold">{calculator.title}</h2>
              </div>
              <p className="text-muted-foreground">{calculator.description}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}
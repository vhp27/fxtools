import { notFound } from 'next/navigation'
import { calculators } from '@/config/calculators'
import RemoteCalculator from '@/components/calculators/RemoteCalculator'
import { Metadata } from 'next'

export const runtime = 'edge'

// Generate static params for all calculators
export async function generateStaticParams() {
  return calculators.map((calc) => ({
    slug: calc.slug,
  }))
}

// Enable static generation with ISR
export const revalidate = 3600 // revalidate every hour

interface CalculatorPageProps {
  params: {
    slug: string
  }
}

export default function CalculatorPage({ params }: CalculatorPageProps) {
  const calculator = calculators.find((calc) => calc.slug === params.slug)

  if (!calculator) {
    notFound()
  }

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold">{calculator.title}</h1>
      <p className="text-gray-600">{calculator.description}</p>
      
      {/* Add min-height to prevent layout shift */}
      <div className="min-h-[400px]">
        <RemoteCalculator
          widgetId={calculator.widgetId}
          calculator={calculator.calculator}
          defaultConfig={calculator.defaultConfig}
        />
      </div>
    </div>
  )
}

// Generate metadata for SEO
export async function generateMetadata({ params }: CalculatorPageProps): Promise<Metadata> {
  const calculator = calculators.find((calc) => calc.slug === params.slug)
  
  if (!calculator) {
    return {}
  }

  const title = `${calculator.title} | TraderLight`
  const description = calculator.description

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: 'website',
    },
    alternates: {
      canonical: `/calculators/${params.slug}`,
    },
    applicationName: 'TraderLight',
  }
}

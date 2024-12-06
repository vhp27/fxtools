import { render, screen } from '@/test/test-utils'
import CalculatorPage from '../page'
import { calculators } from '@/config/calculators'
import { notFound } from 'next/navigation'

// Mock the next/navigation module
jest.mock('next/navigation', () => ({
  notFound: jest.fn(),
}))

describe('CalculatorPage', () => {
  beforeEach(() => {
    (notFound as jest.Mock).mockClear()
  })

  it('renders calculator page with correct title and description', () => {
    const calculator = calculators[0] // Use the first calculator as test data
    render(<CalculatorPage params={{ slug: calculator.slug }} />)

    expect(screen.getByText(calculator.title)).toBeInTheDocument()
    expect(screen.getByText(calculator.description)).toBeInTheDocument()
  })

  it('calls notFound when calculator slug does not exist', () => {
    render(<CalculatorPage params={{ slug: 'non-existent-calculator' }} />)
    expect(notFound).toHaveBeenCalled()
  })

  it('displays calculator icon', () => {
    const calculator = calculators[0]
    render(<CalculatorPage params={{ slug: calculator.slug }} />)
    expect(screen.getByText(calculator.icon)).toBeInTheDocument()
  })
})

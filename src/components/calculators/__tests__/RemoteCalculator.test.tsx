import { render, screen } from '@/test/test-utils'
import RemoteCalculator from '../RemoteCalculator'

// Mock the window.RemoteCalc function
const mockRemoteCalc = jest.fn()
beforeAll(() => {
  // @ts-ignore
  window.RemoteCalc = mockRemoteCalc
})

beforeEach(() => {
  mockRemoteCalc.mockClear()
})

describe('RemoteCalculator', () => {
  const defaultProps = {
    widgetId: 'test-widget',
    calculator: 'test-calculator',
  }

  it('renders loading state initially', () => {
    render(<RemoteCalculator {...defaultProps} />)
    expect(screen.getByText('Loading calculator...')).toBeInTheDocument()
  })

  it('initializes widget with correct configuration', () => {
    render(<RemoteCalculator {...defaultProps} />)
    
    expect(mockRemoteCalc).toHaveBeenCalledWith(
      expect.objectContaining({
        ContainerId: defaultProps.widgetId,
        Calculator: defaultProps.calculator,
        IsDisplayTitle: false,
        IsShowChartLinks: false,
        IsShowEmbedButton: false,
      })
    )
  })

  it('applies default configuration when provided', () => {
    const defaultConfig = {
      DefaultBalance: '1000',
      DefaultPeriod: '30',
    }

    render(<RemoteCalculator {...defaultProps} defaultConfig={defaultConfig} />)

    expect(mockRemoteCalc).toHaveBeenCalledWith(
      expect.objectContaining({
        ...defaultConfig,
        ContainerId: defaultProps.widgetId,
        Calculator: defaultProps.calculator,
      })
    )
  })
})

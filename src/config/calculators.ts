export interface CalculatorConfig {
  id: string
  title: string
  description: string
  slug: string
  icon: string
  widgetId: string
  calculator: string
  defaultConfig?: {
    [key: string]: string | number | boolean
  }
}

export const calculators: CalculatorConfig[] = [
  {
    id: 'currency-converter',
    title: 'Currency Converter',
    description: 'Convert between different currencies with real-time exchange rates.',
    slug: 'currency-converter',
    icon: '💱',
    widgetId: 'currency-converter-765397',
    calculator: 'currency-converter',
    defaultConfig: {
      DefaultCurrencyFrom: 'EUR',
      DefaultCurrencyTo: 'USD',
    },
  },
  {
    id: 'pip-calculator',
    title: 'Pip Calculator',
    description: 'Calculate pip values and position sizes for forex trading.',
    slug: 'pip-calculator',
    icon: '📊',
    widgetId: 'pip-value-calculator-101182',
    calculator: 'pip-value-calculator',
  },
  {
    id: 'position-size',
    title: 'Position Size Calculator',
    description: 'Calculate optimal position sizes based on your risk tolerance.',
    slug: 'position-size',
    icon: '⚖️',
    widgetId: 'position-size-calculator-779335',
    calculator: 'position-size-calculator',
  },
  {
    id: 'profit',
    title: 'Profit Calculator',
    description: 'Calculate potential profits and losses for your trades.',
    slug: 'profit',
    icon: '💰',
    widgetId: 'profit-calculator-798644',
    calculator: 'profit-calculator',
  },
  {
    id: 'compound',
    title: 'Compound Calculator',
    description: 'Calculate the growth of your investments over time with compound interest.',
    slug: 'compound',
    icon: '📈',
    widgetId: 'compounding-calculator-982477',
    calculator: 'compounding-calculator',
    defaultConfig: {
      DefaultBalance: '100',
      DefaultPeriod: '30',
      DefaultGain: '20',
    },
  },
  {
    id: 'margin',
    title: 'Margin Calculator',
    description: 'Calculate required margin and leverage for your trades.',
    slug: 'margin',
    icon: '📉',
    widgetId: 'margin-calculator-474589',
    calculator: 'margin-calculator',
  },
  {
    id: 'rebate',
    title: 'Forex Rebate Calculator',
    description: 'Calculate potential rebates from your forex trading.',
    slug: 'rebate',
    icon: '💵',
    widgetId: 'forex-rebate-calculator-702794',
    calculator: 'forex-rebate-calculator',
  },
  {
    id: 'drawdown',
    title: 'Drawdown Calculator',
    description: 'Calculate and analyze potential drawdowns in your trading.',
    slug: 'drawdown',
    icon: '📊',
    widgetId: 'drawdown-calculator-79536',
    calculator: 'drawdown-calculator',
    defaultConfig: {
      DefaultBalance: '1000',
      DefaultPeriod: '5',
      DefaultGain: '20',
    },
  },
  {
    id: 'fibonacci',
    title: 'Fibonacci Calculator',
    description: 'Calculate Fibonacci retracement and extension levels.',
    slug: 'fibonacci',
    icon: '📐',
    widgetId: 'fibonacci-calculator-540208',
    calculator: 'fibonacci-calculator',
  },
  {
    id: 'pivot-points',
    title: 'Pivot Points Calculator',
    description: 'Calculate pivot points for technical analysis.',
    slug: 'pivot-points',
    icon: '🎯',
    widgetId: 'pivot-point-calculator-815008',
    calculator: 'pivot-point-calculator',
  },
  {
    id: 'risk-of-ruin-calculator',
    title: 'Risk of Ruin Calculator',
    description: 'Calculate the probability of losing your entire trading account based on your risk parameters.',
    slug: 'risk-of-ruin-calculator',
    icon: '📊',
    widgetId: 'risk-of-ruin-calculator-131134',
    calculator: 'risk-of-ruin-calculator',
    defaultConfig: {
      TopPaneStyle: 'YmFja2dyb3VuZDogd2hpdGU7IGNvbG9yOiBibGFjazsgYm9yZGVyOiBzb2xpZCAxcHggYmxhY2s7IGJvcmRlci1ib3R0b206IG5vbmU7IA==',
      BottomPaneStyle: 'YmFja2dyb3VuZDogd2hpdGU7IGJvcmRlcjogc29saWQgMXB4IGJsYWNrOyBjb2xvcjogYmxhY2s7',
      ContainerWidth: '665',
    },
  },
  {
    id: 'exchange-fees-calculator',
    title: 'Crypto Exchange Fees Calculator',
    description: 'Compare cryptocurrency exchange fees and find the most cost-effective platform for your trades.',
    slug: 'exchange-fees-calculator',
    icon: '₿',
    widgetId: 'exchange-fees-calculator-743395',
    calculator: 'exchange-fees-calculator',
    defaultConfig: {
      TopPaneStyle: 'YmFja2dyb3VuZDogd2hpdGU7IGNvbG9yOiBibGFjazsgYm9yZGVyOiBzb2xpZCAxcHggYmxhY2s7IGJvcmRlci1ib3R0b206IG5vbmU7IA==',
      BottomPaneStyle: 'YmFja2dyb3VuZDogd2hpdGU7IGJvcmRlcjogc29saWQgMXB4IGJsYWNrOyBjb2xvcjogYmxhY2s7',
      ContainerWidth: '665',
      DefaultExchange: 'bitstamp',
      IsShowBuyCryptoButton: 'false',
    },
  },
]

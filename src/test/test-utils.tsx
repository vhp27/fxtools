import React from 'react'
import { render as rtlRender } from '@testing-library/react'
import { ThemeProvider } from '@/components/providers/theme-provider'

function render(ui: React.ReactElement, { ...options } = {}) {
  function Wrapper({ children }: { children: React.ReactNode }) {
    return (
      <ThemeProvider
        attribute="class"
        defaultTheme="system"
        enableSystem
        disableTransitionOnChange
      >
        {children}
      </ThemeProvider>
    )
  }
  return rtlRender(ui, { wrapper: Wrapper, ...options })
}

// Re-export everything
export * from '@testing-library/react'

// Override render method
export { render }

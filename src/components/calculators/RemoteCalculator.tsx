'use client'

import { useEffect, useRef, useState, useCallback } from 'react'
import Script from 'next/script'

// Declare global RemoteCalc type
declare global {
  interface Window {
    RemoteCalc?: (config: {
      Url: string
      ContainerId: string
      Calculator: string
      ButtonStyle?: string
      TitleStyle?: string
      TextboxStyle?: string
      HighlightColor?: string
      IsDisplayTitle?: boolean
      IsShowEmbedButton?: boolean
      CompactType?: string
      [key: string]: any
    }) => void
  }
}

interface RemoteCalculatorProps {
  widgetId: string
  calculator: string
  defaultConfig?: {
    [key: string]: string | number | boolean
  }
}

export default function RemoteCalculator({
  widgetId,
  calculator,
  defaultConfig = {},
}: RemoteCalculatorProps) {
  const initialized = useRef(false)
  const containerRef = useRef<HTMLDivElement>(null)
  const [error, setError] = useState<string | null>(null)
  const [isLoading, setIsLoading] = useState(true)

  const initializeWidget = useCallback(() => {
    if (!window.RemoteCalc || initialized.current) {
      return
    }

    try {
      const config = {
        Url: 'https://www.cashbackforex.com',
        ContainerId: widgetId,
        Calculator: calculator,
        ButtonStyle: 'YmFja2dyb3VuZDogYmxhY2s7IGNvbG9yOiB3aGl0ZTsgYm9yZGVyLXJhZGl1czogMjBweDs=',
        TitleStyle: 'dGV4dC1hbGlnbjogbGVmdDsgZm9udC1zaXplOiA0MHB4OyBmb250LXdlaWdodDogNTAwOw==',
        TextboxStyle: 'YmFja2dyb3VuZC1jb2xvcjogd2hpdGU7IGNvbG9yOiBibGFjazsgYm9yZGVyOiBzb2xpZCAxcHggI2FhYWFhYQ==',
        HighlightColor: '#ffff00',
        IsDisplayTitle: false,
        IsShowEmbedButton: false,
        CompactType: 'large',
        ...defaultConfig,
      }

      window.RemoteCalc(config)
      initialized.current = true
      setIsLoading(false)
    } catch (err) {
      console.error('Failed to initialize calculator:', err)
      setError('Failed to load calculator. Please refresh the page.')
      setIsLoading(false)
    }
  }, [widgetId, calculator, defaultConfig])

  useEffect(() => {
    if (typeof window.RemoteCalc === 'function' && !initialized.current && containerRef.current) {
      initializeWidget()
    }

    return () => {
      initialized.current = false
    }
  }, [initializeWidget])

  if (error) {
    return (
      <div className="text-red-500 p-4 text-center">
        {error}
        <button 
          onClick={() => window.location.reload()}
          className="ml-2 underline hover:no-underline"
        >
          Refresh now
        </button>
      </div>
    )
  }

  return (
    <>
      <Script
        src="https://www.cashbackforex.com/Content/remote/remote-widgets.js"
        onLoad={initializeWidget}
        strategy="afterInteractive"
      />
      {isLoading && (
        <div className="animate-pulse space-y-4 w-full">
          <div className="h-10 bg-gray-200 rounded w-3/4"></div>
          <div className="h-10 bg-gray-200 rounded w-1/2"></div>
          <div className="h-10 bg-gray-200 rounded w-full"></div>
        </div>
      )}
      <div
        ref={containerRef}
        id={widgetId}
        className={`transition-opacity duration-300 ${isLoading ? 'opacity-0' : 'opacity-100'}`}
        aria-hidden={isLoading}
      />
    </>
  )
}

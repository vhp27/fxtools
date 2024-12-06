import type { AppProps } from 'next/app'
import { ThemeProvider } from '@/components/providers/theme-provider'
import '@/app/globals.css'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      <Component {...pageProps} />
    </ThemeProvider>
  )
}

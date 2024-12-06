import { Inter } from 'next/font/google'
import { Metadata } from 'next'
import { ThemeProvider } from '@/components/providers/theme-provider'
import Header from '@/components/layout/header/Header'
import Footer from '@/components/layout/footer/Footer'
import '@/styles/globals.css'

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
})

export const metadata: Metadata = {
  title: {
    default: 'TraderLight - Financial Calculators',
    template: '%s | TraderLight'
  },
  description: 'Professional trading calculators and tools for forex and cryptocurrency traders',
  keywords: ['forex calculator', 'trading tools', 'position size calculator', 'pip calculator'],
  authors: [{ name: 'TraderLight' }],
  creator: 'TraderLight',
  metadataBase: new URL('https://traderlight.com'),
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://traderlight.com',
    title: 'TraderLight - Financial Calculators',
    description: 'Professional trading calculators and tools for forex and cryptocurrency traders',
    siteName: 'TraderLight'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'TraderLight - Financial Calculators',
    description: 'Professional trading calculators and tools for forex and cryptocurrency traders',
    creator: '@traderlight'
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.variable}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className="relative flex min-h-screen flex-col bg-background">
            <Header />
            <main className="flex-1">
              {children}
            </main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}

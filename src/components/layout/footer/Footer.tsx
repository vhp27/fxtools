'use client'

import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="border-t bg-background">
      <div className="container flex flex-col items-center justify-between gap-4 py-10 md:h-24 md:flex-row md:py-0">
        <div className="flex flex-col items-center gap-4 px-8 md:flex-row md:gap-2 md:px-0">
          <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
            Built by{' '}
            <Link
              href="/about"
              className="font-medium underline underline-offset-4"
            >
              TraderLight
            </Link>
            . The source code is available on{' '}
            <Link
              href="https://github.com/yourusername/traderlight"
              target="_blank"
              rel="noreferrer"
              className="font-medium underline underline-offset-4"
            >
              GitHub
            </Link>
            .
          </p>
        </div>
        <div className="flex flex-col items-center gap-4 px-8 md:flex-row md:gap-2 md:px-0">
          <nav className="flex gap-4 text-sm text-muted-foreground">
            <Link href="/privacy" className="hover:text-foreground/80">
              Privacy
            </Link>
            <Link href="/terms" className="hover:text-foreground/80">
              Terms
            </Link>
          </nav>
        </div>
      </div>
    </footer>
  )
}
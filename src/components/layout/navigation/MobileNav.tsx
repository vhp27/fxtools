'use client'

import * as React from 'react'
import Link from 'next/link'

export default function MobileNav() {
  const [isOpen, setIsOpen] = React.useState(false)

  return (
    <div className="md:hidden">
      <button
        className="relative h-6 w-6 text-foreground"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle Menu"
      >
        <span className={`absolute block h-0.5 w-full bg-current transition-all duration-300 ${isOpen ? 'top-1/2 -translate-y-1/2 rotate-45' : 'top-1'}`} />
        <span className={`absolute top-1/2 block h-0.5 w-full bg-current transition-all duration-300 ${isOpen ? 'opacity-0' : '-translate-y-1/2'}`} />
        <span className={`absolute block h-0.5 w-full bg-current transition-all duration-300 ${isOpen ? 'top-1/2 -translate-y-1/2 -rotate-45' : 'bottom-1'}`} />
      </button>

      {isOpen && (
        <div className="absolute left-0 top-full w-full bg-background pb-6 pt-2 shadow-lg">
          <div className="container">
            <nav className="grid gap-y-4 text-sm">
              <Link
                href="/calculators"
                className="hover:text-foreground/80"
                onClick={() => setIsOpen(false)}
              >
                Calculators
              </Link>
              <Link
                href="/about"
                className="hover:text-foreground/80"
                onClick={() => setIsOpen(false)}
              >
                About
              </Link>
              <Link
                href="/blog"
                className="hover:text-foreground/80"
                onClick={() => setIsOpen(false)}
              >
                Blog
              </Link>
              <Link
                href="/contact"
                className="hover:text-foreground/80"
                onClick={() => setIsOpen(false)}
              >
                Contact
              </Link>
            </nav>
          </div>
        </div>
      )}
    </div>
  )
}
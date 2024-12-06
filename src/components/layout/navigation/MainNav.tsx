'use client'

import Link from 'next/link'
import { cn } from '@/lib/utils/helpers'

interface MainNavProps {
  className?: string
}

const items = [
  {
    title: "Calculators",
    href: "/calculators",
  },
  {
    title: "About",
    href: "/about",
  },
  {
    title: "Blog",
    href: "/blog",
  },
  {
    title: "Contact",
    href: "/contact",
  },
]

export default function MainNav({ className }: MainNavProps) {
  return (
    <nav className={cn("flex items-center space-x-6 text-sm font-medium", className)}>
      {items.map((item) => (
        <Link
          key={item.href}
          href={item.href}
          className="transition-colors hover:text-foreground/80 text-foreground/60"
        >
          {item.title}
        </Link>
      ))}
    </nav>
  )
}
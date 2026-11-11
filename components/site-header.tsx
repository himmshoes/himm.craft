'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'

const links = [{ name: 'About Us', href: '/about' }]

export function SiteHeader() {
  const [cartCount, setCartCount] = useState(0)

  const updateCartCount = () => {
    try {
      const savedCart = JSON.parse(localStorage.getItem('cart') || '[]')
      setCartCount(savedCart.length)
    } catch {
      setCartCount(0)
    }
  }

  useEffect(() => {
    updateCartCount()
    window.addEventListener('storage', updateCartCount)
    window.addEventListener('cartUpdated', updateCartCount)

    return () => {
      window.removeEventListener('storage', updateCartCount)
      window.removeEventListener('cartUpdated', updateCartCount)
    }
  }, [])

  return (
    <header className="sticky top-0 z-50 border-b border-border/70 bg-background/85 backdrop-blur-md">
      <div className="mx-auto flex h-24 w-full max-w-7xl items-center justify-between gap-6 px-6 lg:px-10">
        <Link href="/" className="font-serif text-2xl leading-none tracking-tight text-foreground">
          <img src="/logo.png" alt="Logo" className="h-24 w-auto" />
        </Link>

        <div className="flex items-center gap-8 ml-auto">
          <nav aria-label="Main" className="hidden md:block">
            <ul className="flex items-center gap-8">
              {links.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground transition-colors duration-300 hover:text-foreground"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Shopping Basket Button */}
          <Link
            href="/checkout"
            className="relative flex items-center justify-center p-2 text-foreground hover:opacity-75 transition-opacity"
            aria-label="View Shopping Basket"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.25 10.5a.75.75 0 100-1.5.75.75 0 000 1.5zm7.5 0a.75.75 0 100-1.5.75.75 0 000 1.5z"
              />
            </svg>
            
            {cartCount > 0 && (
              <span className="absolute -top-1 -right-1 flex h-5 w-5 items-center justify-center rounded-full bg-foreground text-[10px] font-bold text-background">
                {cartCount}
              </span>
            )}
          </Link>
        </div>
      </div>
    </header>
  )
}
'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import { Lock, Truck, Trash2 } from 'lucide-react'

type CartItem = {
  model: string
  color: string
  sole?: string
  size: string
  price: number | string
  image: string
}

const AVAILABLE_SIZES = ['39', '40', '41', '42', '43', '44', '45']

const baht = new Intl.NumberFormat('en-US')
const format = (value: number) => `${baht.format(value)}.-`

export function OrderSummary() {
  const [items, setItems] = useState<CartItem[]>([])

  const loadCart = () => {
    try {
      const savedCart = JSON.parse(localStorage.getItem('cart') || '[]')
      setItems(savedCart)
    } catch {
      setItems([])
    }
  }

  useEffect(() => {
    loadCart()
    window.addEventListener('storage', loadCart)
    window.addEventListener('cartUpdated', loadCart)

    return () => {
      window.removeEventListener('storage', loadCart)
      window.removeEventListener('cartUpdated', loadCart)
    }
  }, [])

  const handleRemoveItem = (indexToRemove: number) => {
    const updatedItems = items.filter((_, index) => index !== indexToRemove)
    localStorage.setItem('cart', JSON.stringify(updatedItems))
    setItems(updatedItems)
    window.dispatchEvent(new Event('cartUpdated'))
  }

  const handleSizeChange = (indexToUpdate: number, newSize: string) => {
    const updatedItems = items.map((item, index) => {
      if (index === indexToUpdate) {
        return { ...item, size: newSize }
      }
      return item
    })
    localStorage.setItem('cart', JSON.stringify(updatedItems))
    setItems(updatedItems)
    window.dispatchEvent(new Event('cartUpdated'))
  }

  const subtotal = items.reduce((sum, item) => {
    const num =
      typeof item.price === 'number'
        ? item.price
        : parseFloat(String(item.price).replace(/[^0-9.]/g, '')) || 0
    return sum + num
  }, 0)

  const shipping = 0
  const total = subtotal + shipping

  return (
    <aside
      aria-labelledby="summary-heading"
      className="lg:sticky lg:top-24 lg:self-start"
    >
      <div className="rounded-sm border border-border bg-card p-6 lg:p-7">
        <h2
          id="summary-heading"
          className="font-serif text-2xl leading-none tracking-tight text-foreground"
        >
          Order summary ({items.length})
        </h2>

        {items.length === 0 ? (
          <p className="mt-7 text-sm text-muted-foreground">
            Your basket is currently empty.
          </p>
        ) : (
          <ul className="mt-7 flex flex-col gap-6">
            {items.map((item, index) => {
              const numericPrice =
                typeof item.price === 'number'
                  ? item.price
                  : parseFloat(String(item.price).replace(/[^0-9.]/g, '')) || 0

              return (
                <li
                  key={`${item.model}-${item.color}-${index}`}
                  className="flex items-start gap-4 pb-6 border-b border-border/60 last:border-0 last:pb-0"
                >
                  <div className="relative h-20 w-16 shrink-0 overflow-hidden rounded-sm bg-studio">
                    <Image
                      src={item.image || '/placeholder.svg'}
                      alt={`${item.model} sandal in ${item.color}`}
                      fill
                      sizes="64px"
                      className="object-contain"
                    />
                  </div>

                  <div className="min-w-0 flex-1 space-y-1.5">
                    <div className="flex items-start justify-between gap-2">
                      <p className="truncate text-sm font-medium text-foreground">
                        {item.model}
                      </p>
                      <p className="shrink-0 text-sm tabular-nums text-foreground">
                        {format(numericPrice)}
                      </p>
                    </div>

                    <p className="truncate text-xs text-muted-foreground">
                      {item.color} {item.sole ? `· ${item.sole}` : ''}
                    </p>

                    {/* Size Selector and Remove Button */}
                    <div className="flex items-center justify-between pt-1">
                      <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
                        <span>Size:</span>
                        <select
                          value={item.size}
                          onChange={(e) => handleSizeChange(index, e.target.value)}
                          className="bg-background border border-border rounded px-2 py-0.5 text-xs text-foreground focus:outline-none focus:border-foreground"
                        >
                          {AVAILABLE_SIZES.map((size) => (
                            <option key={size} value={size}>
                              EU {size}
                            </option>
                          ))}
                        </select>
                      </div>

                      <button
                        type="button"
                        onClick={() => handleRemoveItem(index)}
                        className="text-xs text-muted-foreground hover:text-red-500 transition-colors flex items-center gap-1"
                        aria-label={`Remove ${item.model}`}
                      >
                        <Trash2 className="h-3.5 w-3.5" />
                        <span>Remove</span>
                      </button>
                    </div>
                  </div>
                </li>
              )
            })}
          </ul>
        )}

        <dl className="mt-7 flex flex-col gap-3 border-t border-border pt-6">
          <div className="flex items-baseline justify-between gap-4">
            <dt className="text-sm text-muted-foreground">Subtotal</dt>
            <dd className="text-sm tabular-nums text-foreground">
              {format(subtotal)}
            </dd>
          </div>
          <div className="flex items-baseline justify-between gap-4">
            <dt className="text-sm text-muted-foreground">Shipping</dt>
            <dd className="text-sm text-foreground">Free</dd>
          </div>
        </dl>

        <div className="mt-6 flex items-baseline justify-between gap-4 border-t border-border pt-6">
          <p className="text-xs tracking-[0.2em] text-muted-foreground uppercase">
            Grand total
          </p>
          <p className="font-serif text-3xl leading-none tabular-nums text-foreground">
            {format(total)}
          </p>
        </div>

        <button
          type="submit"
          className="mt-7 h-12 w-full rounded-sm bg-primary text-sm tracking-[0.14em] text-primary-foreground uppercase transition-opacity duration-300 hover:opacity-90 focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-card focus-visible:outline-none"
        >
          Place order
        </button>

        <div className="mt-5 flex flex-col gap-2">
          <p className="flex items-center gap-2 text-xs text-muted-foreground">
            <Lock className="h-3.5 w-3.5" aria-hidden="true" />
            Secure encrypted payment
          </p>
          <p className="flex items-center gap-2 text-xs text-muted-foreground">
            <Truck className="h-3.5 w-3.5" aria-hidden="true" />
            Free delivery on every order, worldwide
          </p>
        </div>
      </div>
    </aside>
  )
}
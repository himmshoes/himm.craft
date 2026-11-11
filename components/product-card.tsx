'use client'

import { useState } from 'react'
import Image from 'next/image'

export type Product = {
  model: string
  color: string
  price: string
  sole: string
  image: string
}

export function ProductCard({ product }: { product: Product }) {
  const [isOpen, setIsOpen] = useState(false)
  const [selectedSize, setSelectedSize] = useState('42')
  const sizes = ['39', '40', '41', '42', '43', '44', '45']

  const handleAddToCart = () => {
    const newItem = {
      model: product.model,
      color: product.color,
      price: product.price,
      size: selectedSize,
      image: product.image,
    }

    const existingCart = JSON.parse(localStorage.getItem('cart') || '[]')
    const updatedCart = [...existingCart, newItem]
    localStorage.setItem('cart', JSON.stringify(updatedCart))

    window.dispatchEvent(new Event('cartUpdated'))
    setIsOpen(false)
  }

  return (
    <>
      <div
        onClick={() => setIsOpen(true)}
        className="group block cursor-pointer focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-4 focus-visible:ring-offset-background focus-visible:outline-none"
      >
        <div className="relative aspect-4/5 overflow-hidden rounded-sm bg-studio">
          <Image
            src={product.image || '/placeholder.svg'}
            alt={`${product.model} sandal in ${product.color} with a ${product.sole.toLowerCase()}, viewed from above`}
            fill
            sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
            className="object-contain transition-transform duration-700 ease-out group-hover:scale-[1.05]"
          />
        </div>

        <div className="mt-4 flex items-start justify-between gap-4">
          <div className="min-w-0">
            <h3 className="truncate text-sm text-foreground">{product.model}</h3>
            <p className="mt-1 truncate text-xs tracking-wide text-muted-foreground">
              {product.color}
            </p>
          </div>
          <p className="shrink-0 text-sm tabular-nums text-foreground">
            {product.price}
          </p>
        </div>
      </div>

      {/* Size Selection Modal */}
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm p-4">
          <div className="bg-background rounded-xl max-w-md w-full p-6 shadow-2xl relative border border-border">
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-4 right-4 text-muted-foreground hover:text-foreground w-8 h-8 flex items-center justify-center rounded-full hover:bg-accent"
            >
              ✕
            </button>

            <div className="flex gap-4 items-center mb-6">
              <div className="relative w-20 h-20 bg-studio rounded-sm overflow-hidden flex-shrink-0">
                <Image
                  src={product.image || '/placeholder.svg'}
                  alt={product.model}
                  fill
                  className="object-contain"
                />
              </div>
              <div>
                <h4 className="font-serif text-lg text-foreground">{product.model}</h4>
                <p className="text-xs text-muted-foreground">{product.color} · {product.sole}</p>
                <p className="text-sm font-semibold tabular-nums text-foreground mt-1">{product.price}</p>
              </div>
            </div>

            <div className="mb-6">
              <label className="block text-xs font-medium uppercase tracking-wider text-muted-foreground mb-2.5">
                Select Size: <span className="font-bold text-foreground">{selectedSize}</span>
              </label>
              <div className="grid grid-cols-4 gap-2">
                {sizes.map((size) => (
                  <button
                    key={size}
                    type="button"
                    onClick={() => setSelectedSize(size)}
                    className={`py-2 text-sm font-medium rounded-md border transition-all ${
                      selectedSize === size
                        ? 'border-foreground bg-foreground text-background'
                        : 'border-border bg-background text-foreground hover:border-foreground/50'
                    }`}
                  >
                    EU {size}
                  </button>
                ))}
              </div>
            </div>

            <button
              type="button"
              onClick={handleAddToCart}
              className="w-full bg-foreground text-background text-center py-3 rounded-lg font-medium hover:opacity-90 transition duration-200"
            >
              Add to Basket (Size {selectedSize})
            </button>
          </div>
        </div>
      )}
    </>
  )
}
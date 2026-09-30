import Image from 'next/image'
import { Lock, Truck } from 'lucide-react'

const items = [
  {
    model: 'London',
    color: 'Mocha',
    sole: 'Double Sole',
    size: 'EU 42',
    price: 1680,
    image: '/london-mocha.jpg',
  },
  {
    model: 'Wilson',
    color: 'Whiskey',
    sole: 'Classic Sole',
    size: 'EU 42',
    price: 1280,
    image: '/wilson-whiskey.jpg',
  },
]

const baht = new Intl.NumberFormat('en-US')
const format = (value: number) => `${baht.format(value)}.-`

export function OrderSummary() {
  const subtotal = items.reduce((sum, item) => sum + item.price, 0)
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
          Order summary
        </h2>

        <ul className="mt-7 flex flex-col gap-5">
          {items.map((item) => (
            <li
              key={`${item.model}-${item.color}`}
              className="flex items-center gap-4"
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
              <div className="min-w-0 flex-1">
                <p className="truncate text-sm text-foreground">{item.model}</p>
                <p className="mt-1 truncate text-xs text-muted-foreground">
                  {item.color} &middot; {item.sole}
                </p>
                <p className="mt-1 text-xs text-muted-foreground/80">
                  {item.size}
                </p>
              </div>
              <p className="shrink-0 text-sm tabular-nums text-foreground">
                {format(item.price)}
              </p>
            </li>
          ))}
        </ul>

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

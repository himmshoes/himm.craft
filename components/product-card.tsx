import Image from 'next/image'

export type Product = {
  model: string
  color: string
  price: string
  sole: string
  image: string
}

export function ProductCard({ product }: { product: Product }) {
  return (
    <a
      href="#catalog"
      className="group block focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-4 focus-visible:ring-offset-background focus-visible:outline-none"
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
    </a>
  )
}

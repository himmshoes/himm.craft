import { ProductCard, type Product } from '@/components/product-card'

const rows: { heading: string; sole: string; products: Product[] }[] = [
  {
    heading: 'Double Sole Sandal',
    sole: 'THE EXTRA STEP',
    products: [
      {
        model: 'Boston',
        color: 'Mocha',
        price: '1,880.-',
        sole: 'Double Sole',
        image: '/boston-mocha.jpg',
      },
      {
        model: 'Boston',
        color: 'Classic Black',
        price: '1,880.-',
        sole: 'Double Sole',
        image: '/boston-black.jpg',
      },
      {
        model: 'London',
        color: 'Mocha',
        price: '1,880.-',
        sole: 'Double Sole',
        image: '/london-mocha.jpg',
      },
      {
        model: 'London',
        color: 'Classic Black',
        price: '1,880.-',
        sole: 'Double Sole',
        image: '/london-black.jpg',
      },
      {
  model: 'Berlin',
  color: 'Mocha',
  price: '1,980.-',
  sole: 'Double Sole',
  image: '/Berlin-mocha.jpg',
},
{
  model: 'Berlin',
  color: 'Classic Black',
  price: '1,980.-',
  sole: 'Double Sole',
  image: '/Berlin-black.jpg',
},
{
        model: 'Smith',
        color: 'Mocha',
        price: '1,980.-',
        sole: 'Double Sole',
        image: '/Smith-mocha.jpg',
      },
    ],
  },
  {
    heading: 'Classic Sole Sandal',
    sole: 'MORE THAN A SOLE',
    products: [
      {
        model: 'Wilson',
        color: 'Whiskey Brown',
        price: '1,480.-',
        sole: 'Classic Sole',
        image: '/wilson-whiskey.jpg',
      },
      {
        model: 'Wilson',
        color: 'Classic Black',
        price: '1,480.-',
        sole: 'Classic Sole',
        image: '/wilson-black.jpg',
      },
      {
        model: 'Aston',
        color: 'Whiskey Brown',
        price: '1,480.-',
        sole: 'Classic Sole',
        image: '/aston-brown.jpg',
      },
      {
        model: 'Aston',
        color: 'Classic Black',
        price: '1,480.-',
        sole: 'Classic Sole',
        image: '/aston-black.jpg',
      },
    ],
  },
]

export function ProductCatalog() {
  return (
    <section
      id="catalog"
      aria-label="Product catalog"
      className="mx-auto w-full max-w-7xl px-6 py-20 lg:px-10 lg:py-28"
    >
      <div className="flex flex-col gap-20 lg:gap-28">
        {rows.map((row) => (
          <div key={row.sole}>
            <div className="flex items-end justify-between gap-6 border-b border-border pb-5">
              <h2 className="font-serif text-3xl tracking-tight text-foreground lg:text-4xl">
                {row.heading}
              </h2>
              <p className="pb-1 text-xs tracking-[0.28em] text-muted-foreground uppercase">
                {row.sole}
              </p>
            </div>

            <div className="mt-10 grid grid-cols-2 gap-x-5 gap-y-12 sm:gap-x-6 lg:grid-cols-4 lg:gap-x-8">
              {row.products.map((product) => (
                <ProductCard
                  key={`${product.model}-${product.color}`}
                  product={product}
                />
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

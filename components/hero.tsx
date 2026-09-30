import Image from 'next/image'
import { ArrowBigDownDash, ArrowDown, ArrowRight } from 'lucide-react'

export function Hero() {
  return (
    <section className="mx-auto w-full max-w-7xl px-6 pt-14 pb-16 lg:px-10 lg:pt-24 lg:pb-24">
      <div className="grid items-center gap-14 lg:grid-cols-2 lg:gap-16">
        {/* Left: copy */}
        <div className="animate-rise max-w-xl">
          <p className="text-ml tracking-[0.32em] text-muted-foreground uppercase">
            New season — 2026
          </p>

          <h1 className="mt-6 font-serif text-[clamp(2.75rem,7vw,5rem)] leading-[0.95] tracking-tight text-balance text-foreground">
            Find Your Pair. Make It Yours
          </h1>

          <p className="mt-6 max-w-xl text-xl leading-relaxed text-pretty text-muted-foreground">
            Crafted for timeless style and everyday comfort
          </p>

          <div className="mt-10">
            <a
              href="#catalog"
              className="group inline-flex items-center gap-3 rounded-full bg-primary px-8 py-4 text-sm tracking-wide text-primary-foreground transition-all duration-300 hover:gap-5 hover:brightness-110 focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background focus-visible:outline-none"
            >
              Shop the collection
              <ArrowDown
                className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5"
                aria-hidden="true"
              />
            </a>
          </div>
        </div>

        {/* Right: product image */}
        <div className="animate-rise relative [animation-delay:120ms]">
          <div className="relative h-[26rem] w-full overflow-hidden rounded-t-[7rem] rounded-b-sm bg-card sm:h-[32rem] lg:h-[38rem]">
            <Image
              src="/hero-shoe.jpg"
              alt="Mocha nubuck double-sole sandals arranged on woven olive fabric"
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
          <p className="mt-4 flex items-baseline justify-between text-sm text-muted-foreground">
            <span></span>
            <span className="tabular-nums"></span>
          </p>
        </div>
      </div>
    </section>
  )
}

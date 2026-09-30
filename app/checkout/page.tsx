import type { Metadata } from 'next'
import { ChevronLeft } from 'lucide-react'
import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'
import { ShippingForm } from '@/components/checkout/shipping-form'
import { PaymentMethod } from '@/components/checkout/payment-method'
import { OrderSummary } from '@/components/checkout/order-summary'

export const metadata: Metadata = {
  title: 'Checkout | Atelier',
  description:
    'Complete your Atelier order — shipping details, payment method, and order summary.',
}

export default function CheckoutPage() {
  return (
    <>
      <SiteHeader />
      <main className="mx-auto w-full max-w-7xl px-6 py-12 lg:px-10 lg:py-16">
        <a
          href="/"
          className="inline-flex items-center gap-1.5 text-sm text-muted-foreground transition-colors duration-300 hover:text-foreground"
        >
          <ChevronLeft className="h-4 w-4" aria-hidden="true" />
          Continue shopping
        </a>

        <h1 className="mt-6 font-serif text-4xl tracking-tight text-balance text-foreground lg:text-5xl">
          Checkout
        </h1>

        <form
          className="mt-12 grid grid-cols-1 gap-x-10 gap-y-14 min-[900px]:grid-cols-[minmax(0,1fr)_21rem] lg:gap-x-16 lg:grid-cols-[minmax(0,1fr)_23rem]"
          action="/checkout"
        >
          <div className="flex flex-col gap-14">
            <ShippingForm />
            <PaymentMethod />
          </div>

          <OrderSummary />
        </form>
      </main>
      <SiteFooter />
    </>
  )
}

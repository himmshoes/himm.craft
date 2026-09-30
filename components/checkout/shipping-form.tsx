import { Field, SectionHeading } from '@/components/checkout/field'

export function ShippingForm() {
  return (
    <section aria-labelledby="shipping-heading">
      <div id="shipping-heading">
        <SectionHeading
          step="01"
          title="Shipping address"
          description="Where should we send your pair?"
        />
      </div>

      <div className="mt-8 grid grid-cols-1 gap-x-5 gap-y-6 sm:grid-cols-2">
        <Field
          id="fullName"
          name="fullName"
          label="Full name"
          autoComplete="name"
          placeholder="Somchai Tanaka"
          required
          className="sm:col-span-2"
        />
        <Field
          id="email"
          name="email"
          type="email"
          label="Email"
          autoComplete="email"
          inputMode="email"
          placeholder="you@example.com"
          required
        />
        <Field
          id="phone"
          name="phone"
          type="tel"
          label="Phone number"
          autoComplete="tel"
          inputMode="tel"
          placeholder="081 234 5678"
          required
        />
        <Field
          id="address"
          name="address"
          label="Delivery address"
          autoComplete="street-address"
          placeholder="128 Sukhumvit Soi 31, Khlong Toei Nuea"
          required
          className="sm:col-span-2"
        />
        <Field
          id="city"
          name="city"
          label="City"
          autoComplete="address-level2"
          placeholder="Bangkok"
          required
        />
        <Field
          id="postalCode"
          name="postalCode"
          label="Postal code"
          autoComplete="postal-code"
          inputMode="numeric"
          placeholder="10110"
          required
        />
      </div>
    </section>
  )
}

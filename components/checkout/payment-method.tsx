'use client'

import { useState } from 'react'

export function PaymentMethod() {
  const [paymentMethod, setPaymentMethod] = useState<'paypal' | 'card'>('paypal')

  return (
    <section className="space-y-4">
      <h2 className="font-serif text-xl text-foreground font-medium">
        4. Payment Method
      </h2>
      <div className="space-y-3">
        {/* PayPal Option */}
        <label
          className={`flex flex-col p-4 rounded-sm border cursor-pointer transition-all ${
            paymentMethod === 'paypal'
              ? 'border-foreground bg-accent/20'
              : 'border-border'
          }`}
        >
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <input
                type="radio"
                name="payment"
                checked={paymentMethod === 'paypal'}
                onChange={() => setPaymentMethod('paypal')}
                className="accent-foreground"
              />
              <span className="text-sm font-medium text-foreground">
                PayPal Express Checkout
              </span>
            </div>
            <span className="text-xs font-bold italic tracking-wider text-blue-600">
              PayPal
            </span>
          </div>

          {paymentMethod === 'paypal' && (
            <p className="mt-3 text-xs text-muted-foreground pl-7 border-l-2 border-foreground/30">
              You will be redirected to PayPal to complete your purchase securely. Processing takes 1–3 business days.
            </p>
          )}
        </label>

        {/* Credit Card Option */}
        <label
          className={`flex flex-col p-4 rounded-sm border cursor-pointer transition-all ${
            paymentMethod === 'card'
              ? 'border-foreground bg-accent/20'
              : 'border-border'
          }`}
        >
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <input
                type="radio"
                name="payment"
                checked={paymentMethod === 'card'}
                onChange={() => setPaymentMethod('card')}
                className="accent-foreground"
              />
              <span className="text-sm font-medium text-foreground">
                Credit / Debit Card
              </span>
            </div>
            <div className="flex gap-1.5 text-xs font-semibold text-muted-foreground">
              <span>VISA</span>
              <span>MC</span>
              <span>AMEX</span>
            </div>
          </div>

          {paymentMethod === 'card' && (
            <div className="mt-4 pl-7 space-y-3">
              <div>
                <input
                  type="text"
                  placeholder="Card Number"
                  className="w-full h-10 px-3 bg-background rounded-sm border border-border text-xs text-foreground focus:outline-none focus:border-foreground"
                />
              </div>
              <div className="grid grid-cols-2 gap-3">
                <input
                  type="text"
                  placeholder="MM / YY"
                  className="w-full h-10 px-3 bg-background rounded-sm border border-border text-xs text-foreground focus:outline-none focus:border-foreground"
                />
                <input
                  type="text"
                  placeholder="CVC / CVV"
                  className="w-full h-10 px-3 bg-background rounded-sm border border-border text-xs text-foreground focus:outline-none focus:border-foreground"
                />
              </div>
            </div>
          )}
        </label>
      </div>
    </section>
  )
}
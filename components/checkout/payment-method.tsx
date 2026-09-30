'use client'

import { useState, type ChangeEvent } from 'react'
import { Building2, Check, CreditCard, QrCode, Upload } from 'lucide-react'
import { Field, SectionHeading, inputClass } from '@/components/checkout/field'
import { cn } from '@/lib/utils'

type Method = 'card' | 'transfer'

const bankDetails = [
  { label: 'Bank name', value: 'Kasikornbank' },
  { label: 'Account number', value: '123-4-56789-0' },
  { label: 'Account name', value: 'Atelier Craftsman Co., Ltd.' },
]

const options: {
  id: Method
  title: string
  caption: string
  icon: typeof CreditCard
}[] = [
  {
    id: 'card',
    title: 'Credit card',
    caption: 'Visa, Mastercard, JCB',
    icon: CreditCard,
  },
  {
    id: 'transfer',
    title: 'Bank transfer / PromptPay',
    caption: 'Scan or transfer, then upload slip',
    icon: Building2,
  },
]

export function PaymentMethod() {
  const [method, setMethod] = useState<Method>('card')
  const [slipName, setSlipName] = useState<string | null>(null)

  function handleSlipChange(event: ChangeEvent<HTMLInputElement>) {
    setSlipName(event.target.files?.[0]?.name ?? null)
  }

  return (
    <section aria-labelledby="payment-heading">
      <div id="payment-heading">
        <SectionHeading
          step="02"
          title="Payment method"
          description="Choose how you would like to pay."
        />
      </div>

      <fieldset className="mt-8">
        <legend className="sr-only">Select a payment method</legend>
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
          {options.map((option) => {
            const Icon = option.icon
            const selected = method === option.id
            return (
              <label
                key={option.id}
                className={cn(
                  'flex cursor-pointer items-start gap-3 rounded-sm border p-4 transition-colors duration-200',
                  selected
                    ? 'border-primary bg-card'
                    : 'border-border bg-background hover:border-ring/60',
                )}
              >
                <input
                  type="radio"
                  name="paymentMethod"
                  value={option.id}
                  checked={selected}
                  onChange={() => setMethod(option.id)}
                  className="sr-only"
                />
                <span
                  aria-hidden="true"
                  className={cn(
                    'mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center rounded-full border transition-colors duration-200',
                    selected
                      ? 'border-primary bg-primary text-primary-foreground'
                      : 'border-input',
                  )}
                >
                  {selected ? <Check className="h-2.5 w-2.5" /> : null}
                </span>
                <span className="min-w-0 flex-1">
                  <span className="flex items-center gap-2 text-sm text-foreground">
                    <Icon className="h-4 w-4 text-muted-foreground" />
                    {option.title}
                  </span>
                  <span className="mt-1 block text-xs leading-relaxed text-muted-foreground">
                    {option.caption}
                  </span>
                </span>
              </label>
            )
          })}
        </div>
      </fieldset>

      {method === 'card' ? (
        <div className="mt-8 grid grid-cols-1 gap-x-5 gap-y-6 sm:grid-cols-6">
          <Field
            id="cardName"
            name="cardName"
            label="Cardholder name"
            autoComplete="cc-name"
            placeholder="SOMCHAI TANAKA"
            className="sm:col-span-6"
          />
          <Field
            id="cardNumber"
            name="cardNumber"
            label="Card number"
            autoComplete="cc-number"
            inputMode="numeric"
            placeholder="4242 4242 4242 4242"
            className="sm:col-span-6"
          />
          <Field
            id="cardExpiry"
            name="cardExpiry"
            label="Expiration"
            autoComplete="cc-exp"
            inputMode="numeric"
            placeholder="MM/YY"
            className="sm:col-span-3"
          />
          <Field
            id="cardCvv"
            name="cardCvv"
            label="CVV"
            autoComplete="cc-csc"
            inputMode="numeric"
            placeholder="123"
            className="sm:col-span-3"
          />
        </div>
      ) : (
        <div className="mt-8 flex flex-col gap-6">
          <div className="grid grid-cols-1 gap-5 rounded-sm border border-border bg-card p-5 sm:grid-cols-[auto_1fr] sm:gap-7">
            <div className="flex flex-col items-center gap-3">
              <div className="flex h-40 w-40 items-center justify-center rounded-sm border border-dashed border-input bg-background">
                <QrCode
                  className="h-16 w-16 text-muted-foreground/50"
                  aria-hidden="true"
                />
              </div>
              <p className="text-xs tracking-[0.16em] text-muted-foreground uppercase">
                PromptPay QR
              </p>
            </div>

            <dl className="flex flex-col justify-center gap-4">
              {bankDetails.map((detail) => (
                <div key={detail.label} className="flex flex-col gap-1">
                  <dt className="text-xs tracking-[0.16em] text-muted-foreground uppercase">
                    {detail.label}
                  </dt>
                  <dd className="text-sm text-foreground">{detail.value}</dd>
                </div>
              ))}
            </dl>
          </div>

          <div className="flex flex-col gap-2">
            <span className="text-xs tracking-[0.16em] text-muted-foreground uppercase">
              Transfer slip
            </span>
            <label
              className={cn(
                inputClass,
                'flex cursor-pointer items-center gap-3 border-dashed',
              )}
            >
              <Upload
                className="h-4 w-4 shrink-0 text-muted-foreground"
                aria-hidden="true"
              />
              <span className="truncate text-sm text-muted-foreground">
                {slipName ?? 'Attach your payment slip (JPG, PNG or PDF)'}
              </span>
              <input
                type="file"
                name="slip"
                accept="image/jpeg,image/png,application/pdf"
                onChange={handleSlipChange}
                className="sr-only"
              />
            </label>
            <p className="text-xs leading-relaxed text-muted-foreground/80">
              We verify transfers within one business day and email your
              tracking number once confirmed.
            </p>
          </div>
        </div>
      )}
    </section>
  )
}

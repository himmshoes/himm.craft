'use client'

import { useState, useEffect } from 'react'
import { Truck } from 'lucide-react'

export type ShippingZone = 'sg_my' | 'cn_hk_tw' | 'asia_other' | 'row'

type ShippingTier = {
  name: string
  cost: number
  estimate: string
}

const SHIPPING_TIERS: Record<ShippingZone, ShippingTier> = {
  sg_my: {
    name: 'Standard Economy Shipping (Postal Air)',
    cost: 13.5,
    estimate: '5–9 Business Days',
  },
  cn_hk_tw: {
    name: 'Standard Economy Shipping (Postal Air)',
    cost: 15.5,
    estimate: '7–12 Business Days',
  },
  asia_other: {
    name: 'Standard Economy Shipping (Postal Air)',
    cost: 18.0,
    estimate: '8–14 Business Days',
  },
  row: {
    name: 'Standard Economy Shipping (Postal Air)',
    cost: 26.5,
    estimate: '10–18 Business Days',
  },
}

export function ShippingForm() {
  const [selectedCountry, setSelectedCountry] = useState<string>('US')
  const [shippingZone, setShippingZone] = useState<ShippingZone>('row')

  useEffect(() => {
    let zone: ShippingZone = 'row'

    if (['SG', 'MY'].includes(selectedCountry)) {
      zone = 'sg_my'
    } else if (['CN', 'HK', 'TW'].includes(selectedCountry)) {
      zone = 'cn_hk_tw'
    } else if (['JP', 'KR', 'PH', 'VN'].includes(selectedCountry)) {
      zone = 'asia_other'
    } else {
      zone = 'row'
    }

    setShippingZone(zone)

    // Broadcast shipping rate to OrderSummary
    const shippingCost = SHIPPING_TIERS[zone].cost
    localStorage.setItem('shippingCost', shippingCost.toString())
    window.dispatchEvent(new Event('shippingUpdated'))
  }, [selectedCountry])

  const currentShipping = SHIPPING_TIERS[shippingZone]

  return (
    <div className="flex flex-col gap-10">
      {/* STEP 1: Contact Information */}
      <section className="space-y-4">
        <h2 className="font-serif text-xl text-foreground font-medium">
          1. Contact Information
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="sm:col-span-2">
            <label className="block text-xs uppercase tracking-wider text-muted-foreground mb-1">
              Email Address <span className="text-red-500">*</span>
            </label>
            <input
              type="email"
              required
              placeholder="you@example.com"
              className="w-full h-11 px-3.5 bg-background rounded-sm border border-border text-sm text-foreground focus:outline-none focus:border-foreground"
            />
          </div>
          <div className="sm:col-span-2">
            <label className="block text-xs uppercase tracking-wider text-muted-foreground mb-1">
              Mobile Phone <span className="text-red-500">*</span>
            </label>
            <input
              type="tel"
              required
              placeholder="+1 (555) 000-0000"
              className="w-full h-11 px-3.5 bg-background rounded-sm border border-border text-sm text-foreground focus:outline-none focus:border-foreground"
            />
            <p className="mt-1 text-[11px] text-muted-foreground">
              Required for international courier and delivery updates.
            </p>
          </div>
        </div>
      </section>

      {/* STEP 2: Shipping Address */}
      <section className="space-y-4">
        <h2 className="font-serif text-xl text-foreground font-medium">
          2. Shipping Address
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="sm:col-span-2">
            <label className="block text-xs uppercase tracking-wider text-muted-foreground mb-1">
              Recipient Full Name <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              required
              placeholder="Jane Doe"
              className="w-full h-11 px-3.5 bg-background rounded-sm border border-border text-sm text-foreground focus:outline-none focus:border-foreground"
            />
          </div>

          <div className="sm:col-span-2">
            <label className="block text-xs uppercase tracking-wider text-muted-foreground mb-1">
              Country / Region <span className="text-red-500">*</span>
            </label>
            <select
              value={selectedCountry}
              onChange={(e) => setSelectedCountry(e.target.value)}
              className="w-full h-11 px-3.5 bg-background rounded-sm border border-border text-sm text-foreground focus:outline-none focus:border-foreground"
            >
              <optgroup label="Southeast Asia">
                <option value="SG">Singapore</option>
                <option value="MY">Malaysia</option>
                <option value="PH">Philippines</option>
                <option value="VN">Vietnam</option>
              </optgroup>
              <optgroup label="East Asia">
                <option value="CN">China</option>
                <option value="HK">Hong Kong</option>
                <option value="TW">Taiwan</option>
                <option value="JP">Japan</option>
                <option value="KR">South Korea</option>
              </optgroup>
              <optgroup label="Western & Rest of World">
                <option value="US">United States</option>
                <option value="GB">United Kingdom</option>
                <option value="AU">Australia</option>
                <option value="DE">Germany</option>
                <option value="FR">France</option>
                <option value="ROW">Rest of World</option>
              </optgroup>
            </select>
          </div>

          {/* Conditional Field for Chinese Customs */}
          {selectedCountry === 'CN' && (
            <div className="sm:col-span-2 p-4 bg-amber-500/10 border border-amber-500/20 rounded-sm space-y-1.5">
              <label className="block text-xs font-semibold uppercase tracking-wider text-amber-700 dark:text-amber-400">
                National Resident ID / Passport Number <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                required
                placeholder="Required for Chinese Customs clearance"
                className="w-full h-11 px-3.5 bg-background rounded-sm border border-border text-sm text-foreground focus:outline-none focus:border-foreground"
              />
              <p className="text-[11px] text-muted-foreground">
                Mandatory under China Customs regulations for international postal imports.
              </p>
            </div>
          )}

          <div className="sm:col-span-2">
            <label className="block text-xs uppercase tracking-wider text-muted-foreground mb-1">
              Street Address Line 1
            </label>
            <input
              type="text"
              placeholder="House number and street name"
              className="w-full h-11 px-3.5 bg-background rounded-sm border border-border text-sm text-foreground focus:outline-none focus:border-foreground"
            />
          </div>

          <div className="sm:col-span-2">
            <label className="block text-xs uppercase tracking-wider text-muted-foreground mb-1">
              Street Address Line 2 (Optional)
            </label>
            <input
              type="text"
              placeholder="Apartment, suite, unit, etc."
              className="w-full h-11 px-3.5 bg-background rounded-sm border border-border text-sm text-foreground focus:outline-none focus:border-foreground"
            />
          </div>

          <div>
            <label className="block text-xs uppercase tracking-wider text-muted-foreground mb-1">
              City
            </label>
            <input
              type="text"
              className="w-full h-11 px-3.5 bg-background rounded-sm border border-border text-sm text-foreground focus:outline-none focus:border-foreground"
            />
          </div>

          <div>
            <label className="block text-xs uppercase tracking-wider text-muted-foreground mb-1">
              State / Province / Postal Code
            </label>
            <input
              type="text"
              className="w-full h-11 px-3.5 bg-background rounded-sm border border-border text-sm text-foreground focus:outline-none focus:border-foreground"
            />
          </div>
        </div>
      </section>

      {/* STEP 3: Dynamic Shipping Method */}
      <section className="space-y-4">
        <h2 className="font-serif text-xl text-foreground font-medium">
          3. Shipping Method
        </h2>
        <div className="p-4 rounded-sm border border-foreground bg-accent/30 space-y-2">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Truck className="h-4 w-4 text-foreground" />
              <span className="text-sm font-medium text-foreground">
                {currentShipping.name}
              </span>
            </div>
            <span className="text-sm font-semibold tabular-nums text-foreground">
              ${currentShipping.cost.toFixed(2)} USD
            </span>
          </div>
          <p className="text-xs text-muted-foreground pl-6">
            Estimated Delivery: <span className="font-medium text-foreground">{currentShipping.estimate}</span> (1.2kg package)
          </p>
        </div>
        <p className="text-xs text-muted-foreground">
          Tracking number included. Orders are processed within 1–2 business days.
        </p>
      </section>
    </div>
  )
}
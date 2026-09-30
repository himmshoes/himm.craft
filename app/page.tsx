import { AnnouncementTicker } from '@/components/announcement-ticker'
import { Hero } from '@/components/hero'
import { ProductCatalog } from '@/components/product-catalog'
import { SiteFooter } from '@/components/site-footer'
import { SiteHeader } from '@/components/site-header'

export default function Page() {
  return (
    <div className="min-h-dvh bg-background">
      <SiteHeader />
      <main>
        <Hero />
        <AnnouncementTicker />
        <ProductCatalog />
      </main>
      <SiteFooter />
    </div>
  )
}

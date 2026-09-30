import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer' // นำเข้าคอมโพเนนต์ Footer ของเว็บไซต์

export default function AboutPage() {
  return (
    <>
      {/* ดึง Header มาแสดงด้านบนสุดเพื่อให้กดกลับหน้าแรกได้ */}
      <SiteHeader />

      {/* จัดข้อความทั้งหมดให้อยู่กึ่งกลาง */}
      <main className="mx-auto max-w-7xl px-6 py-20 lg:px-10 text-center">
        {/* หัวข้อขนาดใหญ่และตัวหนา */}
        <h1 className="font-serif text-4xl lg:text-5xl font-bold tracking-tight text-foreground mb-6">
          The Hands Behind Every Pair
        </h1>

        {/* เนื้อหาข้อความ 2 ประโยค */}
        <div className="space-y-1 text-muted-foreground text-lg leading-relaxed mb-12 max-w-6xl mx-auto">
          <p>
            Every Himm pair is crafted in small batches, shaped and finished by skilled hands with care for every detail.
          </p>
          <p>
            Nothing is rushed. Every cut, stitch, and finish has a purpose creating shoes that feel as good as they look.
          </p>
        </div>

        {/* วิดีโอ 3 ตัวเรียงแนวนอน (ส่วนบน) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          <div className="w-full overflow-hidden rounded-xl bg-muted shadow-lg">
            <video autoPlay loop muted playsInline className="w-full h-[400px] object-cover">
              <source src="/process1.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>

          <div className="w-full overflow-hidden rounded-xl bg-muted shadow-lg">
            <video autoPlay loop muted playsInline className="w-full h-[400px] object-cover">
              <source src="/process2.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>

          <div className="w-full overflow-hidden rounded-xl bg-muted shadow-lg">
            <video autoPlay loop muted playsInline className="w-full h-[400px] object-cover">
              <source src="/process3.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>

       {/* ส่วนข้อความ Siam Discovery อยู่ตรงกลาง */}
        <div className="border-t border-border/60 pt-12 pb-12 max-w-xl mx-auto">
          <p className="text-sm tracking-[0.25em] text-muted-foreground uppercase mb-3">
            Available Exclusively At
          </p>
          <h2 className="font-serif text-2xl lg:text-3xl font-semibold text-foreground">
            Siam Discovery
          </h2>
        </div>

        {/* วิดีโอ 3 ตัวเรียงแนวนอน อยู่ด้านล่างสุด */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="w-full overflow-hidden rounded-xl bg-muted shadow-lg">
            <video autoPlay loop muted playsInline className="w-full h-[400px] object-cover">
              <source src="/siam1.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>

          <div className="w-full overflow-hidden rounded-xl bg-muted shadow-lg">
            <video autoPlay loop muted playsInline className="w-full h-[400px] object-cover">
              <source src="/siam2.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>

          <div className="w-full overflow-hidden rounded-xl bg-muted shadow-lg">
            <video autoPlay loop muted playsInline className="w-full h-[400px] object-cover">
              <source src="/siam3.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      </main>

      {/* เพิ่ม Footer ไว้ที่ส่วนล่างสุดของหน้า */}
      <SiteFooter />
    </>
  )
}
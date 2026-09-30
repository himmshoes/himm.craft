const ITEMS = Array.from({ length: 8 })

export function AnnouncementTicker() {
  return (
    <div
      className="w-full overflow-hidden bg-primary py-4 select-none"
      role="marquee"
      aria-label="Announcement: worldwide shipping"
    >
      <div className="animate-ticker flex w-max items-center">
        {/* Duplicated track for a seamless loop */}
        {[0, 1].map((track) => (
          <div key={track} className="flex items-center" aria-hidden={track === 1}>
            {ITEMS.map((_, i) => (
              <span
                key={i}
                className="flex shrink-0 items-center text-xs tracking-[0.35em] text-primary-foreground uppercase"
              >
                <span className="px-8">Worldwide Shipping</span>
                <span className="h-1 w-1 rounded-full bg-primary-foreground/60" />
              </span>
            ))}
          </div>
        ))}
      </div>
    </div>
  )
}

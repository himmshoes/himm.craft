export function SiteFooter() {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto w-full max-w-7xl px-6 py-14 lg:px-10">
        <div className="flex flex-col gap-10 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="font-serif text-2xl tracking-tight text-foreground">
            </p>
            <p className="mt-3 max-w-xs text-xl leading-relaxed text-muted-foreground">
              Handcrafted leather footwear, made to last beyond the season
            </p>
          </div>

          <nav aria-label="Footer">
            <ul className="flex flex-wrap gap-x-8 gap-y-3 text-sm text-muted-foreground">
              {[''].map((item) => (
                <li key={item}>
                  <a
                    href="#catalog"
                    className="transition-colors duration-300 hover:text-foreground"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <p className="mt-12 text-xs tracking-wide text-muted-foreground">
          &copy; {new Date().getFullYear()} <img src="/logo.png" alt="Logo" className="h-12 w-auto" /> All rights reserved.
        </p>
      </div>
    </footer>
  )
}

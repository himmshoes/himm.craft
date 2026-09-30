const links = [{ name: 'About Us', href: '/about' }]

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-border/70 bg-background/85 backdrop-blur-md">
      <div className="mx-auto flex h-24 w-full max-w-7xl items-center justify-between gap-6 px-6 lg:px-10">
        <a href="/" className="font-serif text-2xl leading-none tracking-tight text-foreground">
          <img src="/logo.png" alt="Logo" className="h-24 w-auto" />
        </a>

        <nav aria-label="Main" className="hidden md:block ml-auto">
          <ul className="flex items-center gap-8">
            {links.map((link) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  className="text-sm text-muted-foreground transition-colors duration-300 hover:text-foreground"
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  )
}
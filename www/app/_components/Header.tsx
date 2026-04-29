export function Header() {
  return (
    <header className="fixed top-0 inset-x-0 z-40 px-6 sm:px-10 py-4 sm:py-5 flex items-center justify-between text-ink/85 mix-blend-multiply">
      <a
        href="#hero"
        className="font-display-italic text-[1.05rem] sm:text-[1.2rem] tracking-tight"
      >
        Calard <span className="text-ochre">André</span>
      </a>
      <nav className="hidden md:flex items-center gap-7 eyebrow-ink">
        <a href="#atelier" className="link-soft">L&apos;Atelier</a>
        <a href="#metiers" className="link-soft">Métiers</a>
        <a href="#galerie" className="link-soft">Galerie</a>
        <a href="#zone" className="link-soft">Zone</a>
      </nav>
      <a
        href="tel:+33622060579"
        className="eyebrow text-ochre link-soft"
      >
        <span className="hidden sm:inline">06 22 06 05 79</span>
        <span className="sm:hidden">Appeler</span>
      </a>
    </header>
  );
}

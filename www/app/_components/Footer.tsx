export function Footer() {
  return (
    <footer className="relative bg-ink text-cream/70 border-t border-cream/15">
      <div className="max-w-[1400px] mx-auto px-6 sm:px-10 py-12 grid grid-cols-12 gap-6 items-baseline">
        <div className="col-span-12 sm:col-span-4">
          <p className="font-display-italic text-[1.4rem] text-cream">
            Calard André
          </p>
          <p className="eyebrow-ink text-cream/55 mt-2">
            Maître Tapissier — MMXXVI
          </p>
        </div>

        <nav className="col-span-12 sm:col-span-4 flex flex-wrap gap-x-5 gap-y-2 eyebrow-ink text-cream/65">
          <a href="#hero" className="link-soft">Accueil</a>
          <a href="#atelier" className="link-soft">Atelier</a>
          <a href="#metiers" className="link-soft">Métiers</a>
          <a href="#galerie" className="link-soft">Galerie</a>
          <a href="#zone" className="link-soft">Zone</a>
          <a href="#contact" className="link-soft">Contact</a>
        </nav>

        <div className="col-span-12 sm:col-span-4 sm:text-right">
          <a
            href="tel:+33622060579"
            className="phone-cta text-gold-soft font-display-tight text-[1.6rem] lining-nums"
          >
            06 22 06 05 79
          </a>
          <p className="eyebrow-ink text-cream/55 mt-2">
            Var (83) → Monaco (06)
          </p>
        </div>

        <p className="col-span-12 mt-8 pt-6 border-t border-cream/15 eyebrow-ink text-cream/45">
          Rempaillage · Cannage · Capitonnage · Réparation de chaises et
          fauteuils — Côte d&apos;Azur
        </p>
      </div>
    </footer>
  );
}

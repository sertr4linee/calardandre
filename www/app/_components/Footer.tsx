const sections = [
  { href: "#hero", label: "Accueil" },
  { href: "#atelier", label: "Atelier" },
  { href: "#metiers", label: "Métiers" },
  { href: "#galerie", label: "Galerie" },
  { href: "#zone", label: "Zone" },
  { href: "#contact", label: "Contact" },
];

const services = [
  "Rempaillage",
  "Cannage",
  "Capitonnage",
  "Réparation",
];

export function Footer() {
  return (
    <footer className="relative bg-ink text-cream/75 overflow-hidden">
      {/* Top hairline with center fleuron — mirrors header */}
      <div className="relative max-w-[1500px] mx-auto px-6 sm:px-10">
        <div className="relative h-px">
          <span
            aria-hidden
            className="absolute inset-x-0 top-0 h-px"
            style={{
              background:
                "linear-gradient(90deg, transparent 0%, rgba(184,148,96,0.45) 18%, rgba(184,148,96,0.45) 42%, transparent 48%, transparent 52%, rgba(184,148,96,0.45) 58%, rgba(184,148,96,0.45) 82%, transparent 100%)",
            }}
          />
          <span
            aria-hidden
            className="absolute left-1/2 -translate-x-1/2 -top-[8px] text-gold text-[0.85rem] leading-none bg-ink px-2"
          >
            ❦
          </span>
        </div>
      </div>

      {/* Faint warm glow */}
      <div
        aria-hidden
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(60% 80% at 50% 100%, rgba(184,148,96,0.06), transparent 70%)",
        }}
      />

      <div className="relative max-w-[1500px] mx-auto px-6 sm:px-10 pt-20 sm:pt-24 pb-12">
        {/* Wordmark masthead */}
        <div className="text-center">
          <p className="eyebrow text-gold-soft mb-5 inline-flex items-center gap-3">
            <span className="inline-block w-8 h-px bg-gold/50" />
            Maison de tapisserie
            <span className="inline-block w-8 h-px bg-gold/50" />
          </p>
          <h2 className="font-display text-cream text-[clamp(3rem,8vw,6.5rem)] leading-[0.92]">
            Calard{" "}
            <span className="font-display-italic text-gold">André</span>
          </h2>
          <p className="mt-4 font-italic-soft italic text-cream/70 text-[1.05rem]">
            Maître Tapissier · Côte d&apos;Azur · Var → Monaco
          </p>

          <a
            href="tel:+33622060579"
            className="phone-cta mt-10 inline-flex items-baseline gap-3 text-cream hover:text-gold-soft text-[1.6rem] sm:text-[1.9rem] font-display-tight lining-nums"
            style={{ borderBottom: "none" }}
          >
            <span aria-hidden className="text-gold/70 text-base">✦</span>
            06 22 06 05 79
            <span aria-hidden className="text-gold/70 text-base">✦</span>
          </a>
        </div>

        {/* Three-column refined directory */}
        <div className="mt-20 sm:mt-24 grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-8 items-start">
          <nav
            aria-label="Sections"
            className="md:col-span-4 md:border-r md:border-cream/15 md:pr-8"
          >
            <p className="eyebrow text-gold-soft mb-5">Sections</p>
            <ul className="space-y-2 font-italic-soft italic text-cream/80 text-[1rem]">
              {sections.map((s) => (
                <li key={s.href}>
                  <a
                    href={s.href}
                    className="link-soft inline-flex items-baseline gap-3 hover:text-gold-soft transition-colors duration-300"
                  >
                    <span aria-hidden className="text-gold/55 text-[0.6rem]">
                      ◆
                    </span>
                    {s.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="md:col-span-4 md:border-r md:border-cream/15 md:px-8 text-center md:text-left">
            <p className="eyebrow text-gold-soft mb-5">Atelier</p>
            <address className="not-italic">
              <p className="font-display-italic text-[1.3rem] text-cream leading-tight">
                Calard André
              </p>
              <p className="font-italic-soft italic text-cream/70 mt-1.5 leading-relaxed">
                Var <span className="lining-nums text-gold-soft">(83)</span>{" "}
                · Alpes‑Maritimes{" "}
                <span className="lining-nums text-gold-soft">(06)</span>
                <br />
                De Saint‑Tropez à Monaco
              </p>
              <a
                href="tel:+33622060579"
                className="mt-4 inline-block link-soft font-mono text-[0.78rem] tracking-[0.18em] uppercase text-gold-soft lining-nums"
              >
                06 22 06 05 79
              </a>
            </address>
          </div>

          <div className="md:col-span-4 md:pl-8">
            <p className="eyebrow text-gold-soft mb-5">Savoir‑faire</p>
            <ul className="space-y-2 font-italic-soft italic text-cream/80 text-[1rem]">
              {services.map((s) => (
                <li key={s} className="flex items-baseline gap-3">
                  <span
                    aria-hidden
                    className="text-gold/55 text-[0.6rem]"
                  >
                    ✦
                  </span>
                  {s}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Decorative divider before colophon */}
        <div className="mt-20 sm:mt-24 relative h-px">
          <span
            aria-hidden
            className="absolute inset-x-0 top-0 h-px"
            style={{
              background:
                "linear-gradient(90deg, transparent, rgba(255,247,229,0.18) 30%, rgba(255,247,229,0.18) 70%, transparent)",
            }}
          />
          <span
            aria-hidden
            className="absolute left-1/2 -translate-x-1/2 -top-[6px] bg-ink px-3 text-gold/60 text-[0.65rem]"
          >
            ◆
          </span>
        </div>

        {/* Colophon */}
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-between gap-4 eyebrow-ink text-cream/45">
          <p className="lining-nums">
            <span className="text-gold-soft">©</span> MMXXVI · Calard André
          </p>
          <p className="text-center sm:text-right">
            Rempaillage · Cannage · Capitonnage · Réparation —{" "}
            <span className="text-cream/60">Côte d&apos;Azur</span>
          </p>
          <a
            href="#hero"
            className="link-soft inline-flex items-center gap-2 hover:text-gold-soft transition-colors"
            aria-label="Retour en haut"
          >
            <span aria-hidden>↑</span> Retour
          </a>
        </div>
      </div>
    </footer>
  );
}

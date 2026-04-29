import { Reveal } from "./Reveal";
import { Ornament } from "./Ornament";

export function Contact() {
  return (
    <section
      id="contact"
      className="relative px-6 sm:px-10 py-28 sm:py-36 bg-ink text-cream overflow-hidden"
    >
      {/* Warm radial glows */}
      <div
        aria-hidden
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(80% 60% at 18% 0%, rgba(184,148,96,0.16), transparent 60%), radial-gradient(70% 60% at 95% 100%, rgba(139,58,31,0.28), transparent 60%)",
        }}
      />
      {/* Subtle paper grain just here */}
      <div
        aria-hidden
        className="absolute inset-0 pointer-events-none opacity-[0.06] mix-blend-screen"
        style={{
          backgroundImage:
            "radial-gradient(rgba(255,255,255,0.6) 1px, transparent 1.4px)",
          backgroundSize: "3px 3px",
        }}
      />

      <div className="relative max-w-[1400px] mx-auto">
        {/* Section eyebrow — centered to match the rest of the section */}
        <Reveal className="flex items-center justify-center gap-6 mb-16 sm:mb-20 text-cream/85">
          <Ornament variant="bar" className="w-20 h-2 text-gold/70" />
          <span className="eyebrow text-gold-soft">V — Sur rendez‑vous</span>
          <Ornament variant="bar" className="w-20 h-2 text-gold/70" />
        </Reveal>

        {/* Centered "Composer le" label */}
        <Reveal className="text-center mb-6 sm:mb-8">
          <p className="eyebrow text-gold-soft inline-flex items-center gap-3 justify-center">
            <span className="inline-block w-6 h-px bg-gold/50" />
            Composer le
            <span className="inline-block w-6 h-px bg-gold/50" />
          </p>
        </Reveal>

        {/* The phone number — full-width, contained, never overlapping */}
        <Reveal className="relative">
          <a
            href="tel:+33622060579"
            className="group block text-center text-cream hover:text-gold-soft transition-colors duration-500"
            aria-label="Appeler le 06 22 06 05 79"
          >
            <span className="font-display text-[clamp(2.6rem,11.5vw,9.5rem)] leading-[0.9] tracking-[0.01em] lining-nums whitespace-nowrap inline-flex items-baseline gap-[0.18em]">
              <span>06</span>
              <span className="font-display-italic text-gold px-[0.04em]">22</span>
              <span>06</span>
              <span className="font-display-italic text-gold px-[0.04em]">05</span>
              <span>79</span>
            </span>
            <span
              aria-hidden
              className="block mx-auto mt-3 sm:mt-5 h-px w-0 group-hover:w-[40%] bg-gold/70 transition-all duration-700 ease-out"
            />
          </a>
        </Reveal>

        {/* Tagline below phone */}
        <Reveal className="mt-10 sm:mt-14 text-center max-w-2xl mx-auto">
          <p className="font-italic-soft italic text-cream/75 text-[1.1rem] sm:text-[1.25rem] leading-snug">
            Décrivez votre pièce en quelques mots, joignez deux ou trois
            photographies — nous vous rappelons dans la journée.
          </p>
        </Reveal>

        {/* Decorative divider */}
        <Reveal className="ornament-rule mt-20 sm:mt-28 mb-16 sm:mb-20 text-cream/45 max-w-3xl mx-auto">
          <Ornament variant="diamond" className="w-20 h-3 text-gold/80" />
        </Reveal>

        {/* Three-column metadata row */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-8">
          <Reveal className="md:border-r md:border-cream/15 md:pr-8">
            <p className="eyebrow text-gold-soft mb-3">Atelier</p>
            <p className="font-display-italic text-[1.45rem] text-cream leading-tight">
              Calard André
            </p>
            <p className="font-italic-soft italic text-cream/70 mt-1">
              Maître Tapissier — Côte d&apos;Azur
            </p>
          </Reveal>

          <Reveal delay={120} className="md:border-r md:border-cream/15 md:px-8">
            <p className="eyebrow text-gold-soft mb-3">Zone d&apos;intervention</p>
            <p className="font-italic-soft italic text-cream/85 leading-relaxed">
              Var <span className="lining-nums text-gold-soft">(83)</span> ·
              Alpes‑Maritimes <span className="lining-nums text-gold-soft">(06)</span>
              <br />
              De Saint‑Tropez à Monaco
            </p>
          </Reveal>

          <Reveal delay={240} className="md:pl-8">
            <p className="eyebrow text-gold-soft mb-3">Modalités</p>
            <p className="font-italic-soft italic text-cream/85 leading-relaxed">
              Devis gratuit · sans engagement
              <br />
              Déplacement à domicile
              <br />
              Sur rendez‑vous
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

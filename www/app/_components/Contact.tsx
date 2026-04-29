import { Reveal } from "./Reveal";
import { Ornament } from "./Ornament";

export function Contact() {
  return (
    <section
      id="contact"
      className="relative px-6 sm:px-10 py-28 sm:py-40 bg-ink text-cream overflow-hidden"
    >
      {/* Subtle warm gradient overlay */}
      <div
        aria-hidden
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(80% 60% at 20% 0%, rgba(184,148,96,0.15), transparent 60%), radial-gradient(60% 60% at 90% 100%, rgba(139,58,31,0.25), transparent 60%)",
        }}
      />

      <div className="relative max-w-[1400px] mx-auto">
        <Reveal className="flex items-center gap-6 mb-12 text-cream/80">
          <span className="eyebrow text-gold-soft">V — Sur rendez‑vous</span>
          <Ornament variant="bar" className="w-24 h-2 text-gold/70" />
        </Reveal>

        <div className="grid grid-cols-12 gap-x-6 gap-y-12 items-end">
          <Reveal as="div" className="col-span-12 lg:col-span-7">
            <p className="eyebrow text-gold-soft mb-8">Composer le</p>
            <a
              href="tel:+33622060579"
              className="phone-cta block font-display text-cream hover:text-gold-soft text-[clamp(3rem,11vw,11rem)] leading-[0.9] tracking-tight lining-nums"
              style={{ borderBottom: "none" }}
            >
              06{" "}
              <span className="font-display-italic text-gold">22</span>{" "}
              06{" "}
              <span className="font-display-italic text-gold">05</span>{" "}
              79
            </a>
            <p className="font-italic-soft italic text-cream/75 text-[1.15rem] mt-8 max-w-md">
              Décrivez votre pièce en quelques mots, joignez deux ou trois
              photographies — nous vous rappelons dans la journée.
            </p>
          </Reveal>

          <Reveal
            as="div"
            delay={150}
            className="col-span-12 lg:col-span-4 lg:col-start-9 space-y-8"
          >
            <div className="border-t border-cream/25 pt-6">
              <p className="eyebrow text-gold-soft mb-3">Atelier</p>
              <p className="font-display-italic text-[1.4rem] text-cream">
                Calard André
              </p>
              <p className="font-italic-soft italic text-cream/70 mt-1">
                Maître Tapissier — Côte d&apos;Azur
              </p>
            </div>

            <div className="border-t border-cream/25 pt-6">
              <p className="eyebrow text-gold-soft mb-3">Zone d&apos;intervention</p>
              <p className="font-italic-soft italic text-cream/85 leading-relaxed">
                Var (83) · Alpes‑Maritimes (06)
                <br />
                De Saint‑Tropez à Monaco
              </p>
            </div>

            <div className="border-t border-cream/25 pt-6">
              <p className="eyebrow text-gold-soft mb-3">Modalités</p>
              <p className="font-italic-soft italic text-cream/85 leading-relaxed">
                Devis gratuit · sans engagement
                <br />
                Déplacement à domicile
                <br />
                Sur rendez‑vous
              </p>
            </div>
          </Reveal>
        </div>

        <Reveal className="mt-24 sm:mt-32 ornament-rule text-cream/50">
          <Ornament variant="diamond" className="w-24 h-4 text-gold/80" />
        </Reveal>
      </div>
    </section>
  );
}

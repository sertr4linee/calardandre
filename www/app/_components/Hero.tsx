import Image from "next/image";
import { Ornament } from "./Ornament";

export function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-[100svh] px-6 sm:px-10 pt-28 sm:pt-32 pb-16 overflow-hidden"
    >
      {/* Side rails — chapter markers */}
      <div className="hidden lg:block absolute top-0 left-6 h-full w-px bg-ink/15" aria-hidden />
      <div className="hidden lg:block absolute top-0 right-6 h-full w-px bg-ink/15" aria-hidden />

      {/* Top metadata bar (under fixed header) */}
      <div className="rise relative max-w-[1400px] mx-auto flex items-baseline justify-between text-ink-soft eyebrow-ink mb-10 sm:mb-16">
        <span>Maison fondée · Côte d&apos;Azur</span>
        <span className="hidden md:inline">N° 01 — Vitrine</span>
        <span className="text-ochre">Anno · MMXXVI</span>
      </div>

      <div className="relative max-w-[1400px] mx-auto grid grid-cols-12 gap-x-6 gap-y-12 items-center">
        {/* Title side */}
        <div className="col-span-12 lg:col-span-7 relative">
          <div className="rise-200 eyebrow mb-8 flex items-center gap-3">
            <span className="inline-block w-8 h-px bg-ochre" />
            Maître Tapissier
          </div>

          <h1 className="font-display text-ink leading-[0.86]">
            <span className="rise-400 block text-[clamp(3.5rem,11vw,11.5rem)]">
              Calard
            </span>
            <span
              className="rise-600 block font-display-italic text-ochre text-[clamp(3.5rem,11vw,11.5rem)] -mt-2 sm:-mt-4"
              style={{ marginLeft: "0.18em" }}
            >
              André
            </span>
          </h1>

          <p className="rise-800 mt-8 sm:mt-10 max-w-xl text-[1.1rem] sm:text-[1.25rem] leading-snug text-ink-soft font-italic-soft italic">
            L&apos;art du fauteuil restauré, point par point, brin par brin —
            sur la Côte d&apos;Azur.
          </p>

          <div className="rise-1000 mt-10 sm:mt-12 flex flex-wrap items-baseline gap-x-6 gap-y-4 text-ink-soft">
            <span className="eyebrow-ink">Savoir-faire</span>
            <Ornament variant="bar" className="w-12 h-2 text-ochre/60" />
            <span className="font-italic-soft italic text-[1.05rem]">
              Rempaillage <span className="text-ochre">·</span> Cannage{" "}
              <span className="text-ochre">·</span> Capitonnage{" "}
              <span className="text-ochre">·</span> Réparation
            </span>
          </div>

          <div className="fade-1200 mt-12 sm:mt-14 flex flex-col sm:flex-row sm:items-baseline gap-4 sm:gap-10">
            <div className="flex items-baseline gap-4">
              <span className="eyebrow">Sur rendez&#8209;vous</span>
              <span className="w-8 h-px bg-ochre/40" />
            </div>
            <a
              href="tel:+33622060579"
              className="phone-cta font-display-tight text-[2rem] sm:text-[2.4rem] text-ink hover:text-ochre"
            >
              <span className="lining-nums tracking-tight">06 22 06 05 79</span>
            </a>
          </div>

          <div className="fade-1200 mt-6 eyebrow-ink">
            Devis gratuit · Déplacement à domicile · Du Var à Monaco
          </div>
        </div>

        {/* Image side */}
        <div className="col-span-12 lg:col-span-5 relative">
          <figure className="rise-600 relative">
            <div className="relative aspect-[4/5] w-full max-w-[480px] mx-auto lg:ml-auto lg:mr-0 frame-gold overflow-hidden">
              <div className="slow-zoom relative w-full h-full">
                <Image
                  src="/image3.png"
                  alt="Fauteuil Louis XV restauré — capitonnage tissu d'éditeur, dorure d'origine ravivée"
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 480px"
                  className="object-cover"
                />
              </div>
              {/* Corner detail */}
              <span
                aria-hidden
                className="absolute -top-2 -left-2 w-6 h-6 border-t border-l border-gold/70"
              />
              <span
                aria-hidden
                className="absolute -bottom-2 -right-2 w-6 h-6 border-b border-r border-gold/70"
              />
            </div>
            <figcaption className="fade-1200 mt-6 lg:mr-0 lg:ml-auto max-w-[480px] mx-auto flex items-baseline gap-4 text-ink-soft">
              <span className="eyebrow text-ink-mute">Pl. I</span>
              <span className="font-italic-soft italic text-[0.95rem] leading-snug">
                Fauteuil Louis XV — capitonné main, finitions à la française.
              </span>
            </figcaption>
          </figure>

          {/* Floating decorative bracket */}
          <div
            aria-hidden
            className="hidden lg:block absolute -left-12 top-1/2 -translate-y-1/2 -rotate-90 origin-left eyebrow text-ink-mute whitespace-nowrap"
          >
            ★ ATELIER · TAPISSERIE D&apos;AMEUBLEMENT ★
          </div>
        </div>
      </div>

      {/* Bottom scroll cue — desktop only, would overlap photo caption on mobile */}
      <div className="fade-1200 hidden lg:flex absolute bottom-6 left-1/2 -translate-x-1/2 flex-col items-center gap-2 text-ink-mute">
        <span className="eyebrow-ink">Scroller</span>
        <span className="block w-px h-10 bg-ink/30" />
      </div>
    </section>
  );
}

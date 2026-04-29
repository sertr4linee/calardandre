import Image from "next/image";
import { Reveal } from "./Reveal";
import { Ornament } from "./Ornament";

export function Atelier() {
  return (
    <section
      id="atelier"
      className="relative px-6 sm:px-10 py-28 sm:py-36 bg-paper"
    >
      <div className="max-w-[1400px] mx-auto">
        <Reveal className="flex items-center gap-6 mb-16">
          <span className="eyebrow">I — L&apos;Atelier</span>
          <Ornament variant="bar" className="w-24 h-2 text-ochre/60" />
        </Reveal>

        <div className="grid grid-cols-12 gap-x-6 gap-y-16 items-start">
          <Reveal as="div" className="col-span-12 lg:col-span-5 lg:sticky lg:top-28">
            <h2 className="font-display text-[clamp(2.6rem,6vw,5.2rem)] leading-[0.9]">
              Le geste,
              <span className="block font-display-italic text-ochre">
                transmis.
              </span>
            </h2>

            <div className="mt-10 hidden lg:block">
              <figure className="relative">
                <div className="relative aspect-[4/5] w-full max-w-[360px]">
                  <Image
                    src="/image2.png"
                    alt="Chaise Louis XV peinte en patine d'eau, fauteuil cabriolet cané"
                    fill
                    sizes="360px"
                    className="object-cover"
                  />
                  <span
                    aria-hidden
                    className="absolute inset-0 ring-1 ring-ink/15"
                  />
                </div>
                <figcaption className="mt-3 eyebrow-ink">
                  Pl. II — Patine d&apos;eau · cannage main
                </figcaption>
              </figure>
            </div>
          </Reveal>

          <Reveal
            as="div"
            className="col-span-12 lg:col-span-6 lg:col-start-7 space-y-10"
            delay={120}
          >
            <p className="dropcap text-[1.18rem] sm:text-[1.32rem] leading-[1.55] text-ink/90">
              Du rempaillage en paille de seigle au cannage tressé point par
              point, chaque siège retrouve la rigueur de sa structure
              d&apos;origine. Le capitonnage se reprend au fil et au crin
              végétal, dans le respect des techniques héritées de
              l&apos;ébénisterie française. Aucun raccourci, aucun agrafage
              moderne sur les pièces anciennes — la tradition exige le temps,
              la matière et la main.
            </p>

            <div className="ornament-rule">
              <Ornament variant="diamond" className="w-16 h-3 text-ochre/70" />
            </div>

            <p className="font-italic-soft italic text-[1.18rem] leading-[1.55] text-ink-soft">
              L&apos;atelier intervient sur chaises de paille, fauteuils
              cannés, bergères, cabriolets, voltaires, crapauds, banquettes
              Napoléon III, fauteuils club, recliners modernes — du mobilier
              de famille à la pièce de collection.
            </p>

            <blockquote className="pullquote pl-12 mt-12 mr-2">
              <p className="font-display-italic text-[clamp(1.6rem,3.2vw,2.6rem)] leading-[1.05] text-ink">
                Une chaise bien rempaillée se reconnaît sans la voir —{" "}
                <span className="text-ochre">elle se sent sous la main</span>.
              </p>
              <footer className="mt-6 eyebrow-ink">
                — Tradition d&apos;atelier
              </footer>
            </blockquote>

            <div className="lg:hidden mt-10">
              <figure className="relative">
                <div className="relative aspect-[4/5] w-full max-w-[360px] mx-auto">
                  <Image
                    src="/image2.png"
                    alt="Chaise Louis XV peinte en patine d'eau, fauteuil cabriolet cané"
                    fill
                    sizes="360px"
                    className="object-cover"
                  />
                </div>
                <figcaption className="mt-3 eyebrow-ink text-center">
                  Pl. II — Patine d&apos;eau · cannage main
                </figcaption>
              </figure>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

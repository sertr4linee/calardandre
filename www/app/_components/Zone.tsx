import { Reveal } from "./Reveal";
import { Ornament } from "./Ornament";

const var83 = [
  "Saint-Tropez",
  "Sainte-Maxime",
  "Grimaud",
  "Cogolin",
  "Le Lavandou",
  "Bormes-les-Mimosas",
  "Hyères",
  "Toulon",
  "Fréjus",
  "Saint-Raphaël",
  "Draguignan",
  "Brignoles",
];

const am06 = [
  "Cannes",
  "Mougins",
  "Mouans-Sartoux",
  "Antibes",
  "Juan-les-Pins",
  "Cagnes-sur-Mer",
  "Saint-Paul-de-Vence",
  "Nice",
  "Villefranche-sur-Mer",
  "Beaulieu-sur-Mer",
  "Saint-Jean-Cap-Ferrat",
  "Èze",
  "Cap-d'Ail",
  "Monaco",
  "Roquebrune-Cap-Martin",
  "Menton",
];

export function Zone() {
  return (
    <section id="zone" className="relative px-6 sm:px-10 py-28 sm:py-36">
      <div className="max-w-[1400px] mx-auto">
        <Reveal className="flex items-center gap-6 mb-12">
          <span className="eyebrow">IV — Territoire</span>
          <Ornament variant="bar" className="w-24 h-2 text-ochre/60" />
        </Reveal>

        <Reveal className="mb-16 sm:mb-20">
          <h2 className="font-display text-[clamp(2.6rem,7vw,6.5rem)] leading-[0.9]">
            <span className="block">De Saint‑Tropez</span>
            <span className="block font-display-italic text-ochre">
              à Monaco.
            </span>
          </h2>
        </Reveal>

        <div className="grid grid-cols-12 gap-x-6 gap-y-16">
          <Reveal as="div" className="col-span-12 lg:col-span-5">
            <p className="max-w-md text-[1.08rem] leading-[1.65] text-ink/85">
              L&apos;atelier se déplace à domicile sur l&apos;ensemble de la
              Côte d&apos;Azur, du Var aux Alpes‑Maritimes. Mobilier
              encombrant, pièces fragiles, fauteuils de salon ou ensembles
              complets — l&apos;enlèvement et la livraison sont assurés par
              nos soins, sans frais cachés.
            </p>

            <div className="mt-10 space-y-4">
              <div className="flex items-baseline gap-4">
                <span className="eyebrow text-ochre w-24">Devis</span>
                <span className="font-italic-soft italic text-ink-soft">
                  Gratuit, sans engagement
                </span>
              </div>
              <div className="flex items-baseline gap-4">
                <span className="eyebrow text-ochre w-24">Délais</span>
                <span className="font-italic-soft italic text-ink-soft">
                  Sur devis, selon la pièce
                </span>
              </div>
              <div className="flex items-baseline gap-4">
                <span className="eyebrow text-ochre w-24">Visite</span>
                <span className="font-italic-soft italic text-ink-soft">
                  Sur rendez‑vous
                </span>
              </div>
              <div className="flex items-baseline gap-4">
                <span className="eyebrow text-ochre w-24">Pièces</span>
                <span className="font-italic-soft italic text-ink-soft">
                  Anciennes & contemporaines
                </span>
              </div>
            </div>
          </Reveal>

          <Reveal
            as="div"
            delay={120}
            className="col-span-12 lg:col-span-7 grid grid-cols-2 gap-x-8 gap-y-10"
          >
            <div>
              <header className="flex items-baseline justify-between border-b border-ink/40 pb-3 mb-6">
                <h3 className="font-display-italic text-[1.55rem] text-ochre">
                  Var
                </h3>
                <span className="eyebrow-ink lining-nums">83</span>
              </header>
              <ul className="space-y-2 font-italic-soft italic text-[1.02rem] leading-[1.45] text-ink/85">
                {var83.map((c) => (
                  <li key={c} className="flex items-baseline gap-3">
                    <span aria-hidden className="text-ochre/60 text-xs">
                      ✦
                    </span>
                    {c}
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <header className="flex items-baseline justify-between border-b border-ink/40 pb-3 mb-6">
                <h3 className="font-display-italic text-[1.55rem] text-ochre">
                  Alpes‑Maritimes
                </h3>
                <span className="eyebrow-ink lining-nums">06</span>
              </header>
              <ul className="space-y-2 font-italic-soft italic text-[1.02rem] leading-[1.45] text-ink/85">
                {am06.map((c) => (
                  <li key={c} className="flex items-baseline gap-3">
                    <span aria-hidden className="text-ochre/60 text-xs">
                      ✦
                    </span>
                    {c}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

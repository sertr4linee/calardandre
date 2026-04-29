import Image from "next/image";
import { Reveal } from "./Reveal";
import { Ornament } from "./Ornament";

type Metier = {
  num: string;
  name: string;
  italic: string;
  desc: string;
  image: string;
  imageAlt: string;
  caption: string;
};

const metiers: Metier[] = [
  {
    num: "01",
    name: "Rempaillage",
    italic: "à la paille de seigle",
    desc:
      "Tressage à la main, brin par brin, en quatre passes croisées. Sur les chaises paysannes, les chaises de style provençal ou les sièges Louis‑Philippe, l'assise retrouve sa tension d'origine — souple, durable, silencieuse sous le poids.",
    image: "/image6.png",
    imageAlt:
      "Chaise rustique au siège tressé en paille naturelle, structure en bois patiné gris",
    caption: "Pl. III — Chaise paysanne · paille tressée main.",
  },
  {
    num: "02",
    name: "Cannage",
    italic: "en éclisses de rotin",
    desc:
      "Le cannage main, point par point, sur les fauteuils Louis XV, Louis XVI et Napoléon III. Travail au poinçon, six brins croisés, finition au bord de jonc. Possible également en cannage de feuille pour les pièces aux trames préfabriquées.",
    image: "/image1.png",
    imageAlt:
      "Banquette cannée corbeille de style Louis XVI, dossier ovale tressé en rotin",
    caption: "Pl. IV — Banquette corbeille · cannage main, six brins.",
  },
  {
    num: "03",
    name: "Capitonnage",
    italic: "au crin & au fil de lin",
    desc:
      "Pose de capitons traditionnels au crin animal et végétal, fixés au fil de lin sur sangles et ressorts montés au point cousu. Pour bergères, fauteuils Voltaire, crapauds, chesterfield. Tissus d'éditeur sur demande ou fournis par le client.",
    image: "/image5.png",
    imageAlt:
      "Bergère Louis XV capitonnée en tissu floral bleu et crème, accotoirs sculptés",
    caption: "Pl. V — Bergère · capitonnage crin végétal, tissu d'éditeur.",
  },
  {
    num: "04",
    name: "Réparation",
    italic: "structure & garniture",
    desc:
      "Recollage à la colle de poudre, reprise des assemblages à tenons‑mortaises, remplacement de sangles, ressorts, mousses ou crins, restauration de patines. Du fauteuil club au recliner contemporain — devis sur photos ou à domicile.",
    image: "/image11.png",
    imageAlt:
      "Fauteuil en rotin tressé sur fond clair, restauration d'osier et structure",
    caption: "Pl. VI — Fauteuil rotin · structure restaurée.",
  },
];

export function Metiers() {
  return (
    <section id="metiers" className="relative px-6 sm:px-10 py-28 sm:py-36">
      <div className="max-w-[1400px] mx-auto">
        <Reveal className="flex items-center gap-6 mb-12">
          <span className="eyebrow">II — Les Métiers</span>
          <Ornament variant="bar" className="w-24 h-2 text-ochre/60" />
        </Reveal>

        <Reveal className="mb-20 sm:mb-28 max-w-4xl">
          <h2 className="font-display text-[clamp(2.6rem,6vw,5.5rem)] leading-[0.92]">
            Quatre savoir-faire,
            <span className="block font-display-italic text-ochre">
              une seule main.
            </span>
          </h2>
        </Reveal>

        <div className="space-y-28 sm:space-y-40">
          {metiers.map((m, i) => {
            const reverse = i % 2 === 1;
            return (
              <article
                key={m.num}
                className={`grid grid-cols-12 gap-x-6 gap-y-10 items-center`}
              >
                {/* Image */}
                <Reveal
                  as="div"
                  className={`col-span-12 lg:col-span-6 ${
                    reverse ? "lg:col-start-7" : ""
                  }`}
                >
                  <figure className="lift">
                    <div
                      className={`relative aspect-[4/5] w-full max-w-[520px] ${
                        reverse ? "ml-auto" : ""
                      }`}
                    >
                      <Image
                        src={m.image}
                        alt={m.imageAlt}
                        fill
                        sizes="(max-width: 1024px) 100vw, 520px"
                        className="object-cover"
                      />
                      <span
                        aria-hidden
                        className="absolute inset-0 ring-1 ring-ink/12"
                      />
                      <span
                        aria-hidden
                        className="absolute -top-2 -left-2 w-6 h-6 border-t border-l border-gold/70"
                      />
                      <span
                        aria-hidden
                        className="absolute -bottom-2 -right-2 w-6 h-6 border-b border-r border-gold/70"
                      />
                    </div>
                    <figcaption
                      className={`mt-4 eyebrow-ink max-w-[520px] ${
                        reverse ? "ml-auto" : ""
                      }`}
                    >
                      {m.caption}
                    </figcaption>
                  </figure>
                </Reveal>

                {/* Text */}
                <Reveal
                  as="div"
                  delay={120}
                  className={`col-span-12 lg:col-span-5 ${
                    reverse ? "lg:col-start-1 lg:row-start-1" : "lg:col-start-8"
                  }`}
                >
                  <div className="flex items-start gap-6">
                    <span
                      className="font-display text-ochre text-[clamp(3rem,6vw,5.5rem)] leading-none lining-nums"
                      aria-hidden
                    >
                      {m.num}
                    </span>
                    <span className="mt-4 flex-1 h-px bg-ink/25" aria-hidden />
                  </div>
                  <h3 className="mt-8 font-display text-[clamp(2.4rem,5vw,4rem)] leading-[0.95]">
                    {m.name}
                  </h3>
                  <p className="mt-3 font-display-italic text-[1.2rem] sm:text-[1.4rem] text-ochre">
                    {m.italic}
                  </p>
                  <p className="mt-8 max-w-prose text-[1.05rem] leading-[1.65] text-ink/85">
                    {m.desc}
                  </p>
                  <a
                    href="tel:+33622060579"
                    className="link-soft mt-8 inline-flex items-baseline gap-3 eyebrow text-ochre"
                  >
                    Demander un devis
                    <span aria-hidden>→</span>
                  </a>
                </Reveal>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

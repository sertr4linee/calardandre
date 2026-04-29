import Image from "next/image";
import { Reveal } from "./Reveal";
import { Ornament } from "./Ornament";

type Tile = {
  src: string;
  alt: string;
  caption: string;
  span: string; // tailwind classes for col/row spans
  ratio: string;
};

const tiles: Tile[] = [
  {
    src: "/image10.png",
    alt: "Chaise Louis XVI cannée avec médaillon brodé rouge et or",
    caption: "Médaillon · cannage Louis XVI",
    span: "col-span-12 sm:col-span-6 lg:col-span-5 lg:row-span-2",
    ratio: "aspect-[3/4]",
  },
  {
    src: "/image4.png",
    alt: "Fauteuil Louis XV recouvert de damas rouge",
    caption: "Damas rouge · Louis XV",
    span: "col-span-6 sm:col-span-3 lg:col-span-3",
    ratio: "aspect-[3/4]",
  },
  {
    src: "/image9.png",
    alt: "Chaise médaillon en velours fuchsia",
    caption: "Velours fuchsia · médaillon",
    span: "col-span-6 sm:col-span-3 lg:col-span-4",
    ratio: "aspect-[3/4]",
  },
  {
    src: "/image7.png",
    alt: "Fauteuil cabriolet retapissé en tissu graphique",
    caption: "Cabriolet · tissu d'éditeur",
    span: "col-span-12 sm:col-span-6 lg:col-span-3",
    ratio: "aspect-[3/4]",
  },
  {
    src: "/image.png",
    alt: "Fauteuil tonneau capitonné en tissu chenille beige",
    caption: "Tonneau · chenille beige",
    span: "col-span-6 sm:col-span-3 lg:col-span-4",
    ratio: "aspect-[4/5]",
  },
  {
    src: "/image13.png",
    alt: "Fauteuil tub crème, capitonnage moderne",
    caption: "Tub · capitonnage contemporain",
    span: "col-span-6 sm:col-span-3 lg:col-span-3",
    ratio: "aspect-[4/5]",
  },
  {
    src: "/image8.png",
    alt: "Série de fauteuils de bureau gris restaurés",
    caption: "Sièges de bureau · réfection",
    span: "col-span-12 sm:col-span-6 lg:col-span-7",
    ratio: "aspect-[16/10]",
  },
  {
    src: "/image12.png",
    alt: "Fauteuil de relaxation en alcantara bordeaux",
    caption: "Relax · alcantara bordeaux",
    span: "col-span-6 sm:col-span-3 lg:col-span-2",
    ratio: "aspect-[3/4]",
  },
  {
    src: "/image11.png",
    alt: "Fauteuil rotin restauré sur fond clair",
    caption: "Rotin · structure restaurée",
    span: "col-span-6 sm:col-span-3 lg:col-span-3",
    ratio: "aspect-[1/1]",
  },
];

export function Galerie() {
  return (
    <section
      id="galerie"
      className="relative px-6 sm:px-10 py-28 sm:py-36 bg-paper"
    >
      <div className="max-w-[1500px] mx-auto">
        <Reveal className="flex items-center gap-6 mb-12">
          <span className="eyebrow">III — Réalisations</span>
          <Ornament variant="bar" className="w-24 h-2 text-ochre/60" />
        </Reveal>

        <Reveal className="grid grid-cols-12 gap-x-6 mb-20 sm:mb-24 items-end">
          <h2 className="col-span-12 lg:col-span-7 font-display text-[clamp(2.6rem,6vw,5.5rem)] leading-[0.92]">
            <span className="block">Pièces</span>
            <span className="block font-display-italic text-ochre">
              passées par l&apos;atelier.
            </span>
          </h2>
          <p className="col-span-12 lg:col-span-4 lg:col-start-9 font-italic-soft italic text-ink-soft text-[1.05rem] leading-[1.55] mt-6 lg:mt-0">
            Quelques travaux récents — du siège paysan en paille au fauteuil
            de relaxation contemporain. Chaque pièce, son histoire.
          </p>
        </Reveal>

        <div className="grid grid-cols-12 gap-3 sm:gap-4 lg:gap-5 auto-rows-auto">
          {tiles.map((t, i) => (
            <Reveal
              key={t.src}
              as="div"
              delay={(i % 4) * 80}
              className={`tile ${t.span} ${t.ratio} relative overflow-hidden`}
            >
              <Image
                src={t.src}
                alt={t.alt}
                fill
                sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                className="object-cover"
              />
              <span aria-hidden className="absolute inset-0 ring-1 ring-ink/15" />
              <figcaption className="caption">{t.caption}</figcaption>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-16 sm:mt-20 ornament-rule">
          <Ornament variant="fleuron" className="w-20 h-6 text-ochre/70" />
        </Reveal>

        <Reveal className="mt-12 text-center">
          <p className="font-italic-soft italic text-[1.1rem] text-ink-soft max-w-xl mx-auto">
            Une pièce vous tient à cœur ? Envoyez‑nous quelques photos par SMS
            au{" "}
            <a
              href="tel:+33622060579"
              className="link-soft text-ochre lining-nums"
            >
              06 22 06 05 79
            </a>{" "}
            pour un devis sans engagement.
          </p>
        </Reveal>
      </div>
    </section>
  );
}

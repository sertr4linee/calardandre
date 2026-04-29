"use client";

import { useEffect, useState } from "react";

const navLinks = [
  { href: "#atelier", label: "Atelier" },
  { href: "#metiers", label: "Métiers" },
  { href: "#galerie", label: "Galerie" },
  { href: "#zone", label: "Zone" },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-40 transition-[background,backdrop-filter,padding] duration-500 ease-out ${
        scrolled
          ? "py-3 bg-cream/82 backdrop-blur-md backdrop-saturate-150"
          : "py-6 bg-transparent"
      }`}
    >
      {/* Top hairline */}
      <span
        aria-hidden
        className={`absolute top-0 left-0 right-0 h-px transition-opacity duration-500 ${
          scrolled ? "opacity-100" : "opacity-0"
        }`}
        style={{
          background:
            "linear-gradient(90deg, transparent, rgba(184,148,96,0.55), transparent)",
        }}
      />

      <div className="relative max-w-[1500px] mx-auto px-6 sm:px-10 grid grid-cols-12 items-center gap-4">
        {/* Wordmark with fleuron */}
        <a
          href="#hero"
          className="col-span-6 md:col-span-3 flex items-center gap-3 text-ink group"
          aria-label="Calard André — accueil"
        >
          <svg
            viewBox="0 0 24 24"
            aria-hidden
            className="w-5 h-5 text-ochre shrink-0 transition-transform duration-700 group-hover:rotate-180"
            fill="none"
            stroke="currentColor"
            strokeWidth="1"
          >
            <path d="M12 2 C 8 6 8 18 12 22 C 16 18 16 6 12 2 Z" />
            <path d="M2 12 C 6 8 18 8 22 12 C 18 16 6 16 2 12 Z" />
            <circle cx="12" cy="12" r="1.4" fill="currentColor" stroke="none" />
          </svg>
          <span className="font-display-tight tracking-tight text-[1.15rem] sm:text-[1.25rem] leading-none">
            Calard{" "}
            <span className="font-display-italic text-ochre">André</span>
          </span>
        </a>

        {/* Center nav with diamond separators */}
        <nav
          aria-label="Sections"
          className="hidden md:flex col-span-6 justify-center items-center gap-1 text-ink-soft"
        >
          {navLinks.map((l, i) => (
            <span key={l.href} className="flex items-center gap-3">
              {i > 0 && (
                <span
                  aria-hidden
                  className="text-ochre/55 text-[0.55rem] leading-none select-none"
                >
                  ◆
                </span>
              )}
              <a
                href={l.href}
                className="eyebrow-ink hover:text-ochre transition-colors duration-300 px-1"
              >
                {l.label}
              </a>
            </span>
          ))}
        </nav>

        {/* Phone CTA right */}
        <div className="col-span-6 md:col-span-3 flex justify-end items-center">
          <a
            href="tel:+33622060579"
            className="group inline-flex items-center gap-2.5 text-ink hover:text-ochre transition-colors duration-300"
            aria-label="Appeler le 06 22 06 05 79"
          >
            <span className="hidden sm:inline-flex relative items-center justify-center w-7 h-7 rounded-full border border-ochre/35 group-hover:border-ochre transition-colors">
              <svg
                viewBox="0 0 24 24"
                aria-hidden
                className="w-3 h-3 text-ochre"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.6"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M5 4 H8 L10 9 L7.5 11 C 9 14 11 16 14 17.5 L16 15 L21 17 V20 C 21 21 20 22 19 22 C 11 22 2 13 2 5 C 2 4 3 3 4 3 Z" />
              </svg>
              <span
                aria-hidden
                className="absolute inset-0 rounded-full ring-1 ring-ochre/0 group-hover:ring-ochre/40 transition-all duration-500 group-hover:scale-125"
              />
            </span>
            <span className="hidden sm:inline font-mono text-[0.78rem] tracking-[0.18em] uppercase lining-nums">
              06 22 06 05 79
            </span>
            <span className="sm:hidden eyebrow text-ochre">Appeler</span>
          </a>
        </div>
      </div>

      {/* Bottom hairline rule with center fleuron */}
      <div className="relative max-w-[1500px] mx-auto px-6 sm:px-10 mt-3 hidden md:block">
        <div className="relative h-px">
          <span
            aria-hidden
            className="absolute inset-x-0 top-0 h-px"
            style={{
              background:
                "linear-gradient(90deg, transparent 0%, rgba(26,22,18,0.18) 18%, rgba(26,22,18,0.18) 42%, transparent 48%, transparent 52%, rgba(26,22,18,0.18) 58%, rgba(26,22,18,0.18) 82%, transparent 100%)",
            }}
          />
          <span
            aria-hidden
            className="absolute left-1/2 -translate-x-1/2 -top-[5px] text-ochre text-[0.7rem] leading-none"
            style={{ letterSpacing: 0 }}
          >
            ❦
          </span>
        </div>
      </div>
    </header>
  );
}

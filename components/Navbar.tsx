"use client";

import Link from "next/link";

export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 h-24 border-b border-white/10 bg-black/20 backdrop-blur-xl">
      <div className="container-luxury h-full">
        <div className="flex h-full items-center justify-between">
          <Link href="/" className="text-4xl tracking-tight font-[var(--font-playfair)]">
            Grano
          </Link>

          <nav className="hidden md:flex items-center gap-10 text-sm uppercase tracking-[0.25em] text-white/80">
            <a href="#story" className="transition hover:text-white">
              Story
            </a>

            <a href="#menu" className="transition hover:text-white">
              Menu
            </a>

            <a href="#wine" className="transition hover:text-white">
              Wine
            </a>

            <a href="#reservation" className="transition hover:text-white">
              Reserve
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
}

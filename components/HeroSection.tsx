"use client";

import { motion } from "framer-motion";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden pt-24">
      {/* Background */}

      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=2400')] bg-cover bg-center" />
        <div className="absolute inset-0 bg-black/60" />
      </div>

      {/* Content */}

      <div className="container-luxury relative z-10">
        <motion.div
          initial={{
            opacity: 0,
            y: 80
          }}
          animate={{
            opacity: 1,
            y: 0
          }}
          transition={{
            duration: 1
          }}
          className="max-w-5xl"
        >
          <p className="uppercase tracking-[0.4em] text-[#C8A25A]">
            Michelin Guide Dublin
          </p>

          <h1 className="heading-xl mt-6">
            Michelin-Recognised
            <br />
            Calabrian Dining
          </h1>

          <p className="mt-8 text-xl max-w-2xl text-white/75">
            Handmade pasta. Organic ingredients.
            Authentic southern Italian cuisine
            in Dublin.
          </p>

          <div className="mt-12 flex gap-4">
            <button className="gold-button">
              Reserve Table
            </button>

            <button className="border border-white/20 px-8 py-4 rounded-full">
              Explore Menu
            </button>
          </div>
        </motion.div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-b from-transparent to-[#171717]" />
    </section>
  );
}
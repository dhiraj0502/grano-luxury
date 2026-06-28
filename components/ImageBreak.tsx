    "use client";

import { motion } from "framer-motion";

export default function ImageBreak() {
  return (
    <section className="relative h-[80vh] overflow-hidden">
      <motion.img
        initial={{ scale: 1.15 }}
        whileInView={{ scale: 1 }}
        viewport={{ once: true }}
        transition={{
          duration: 2,
          ease: "easeOut"
        }}
        src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=2400&q=80"
        alt="Fine dining"
        className="absolute inset-0 h-full w-full object-cover"
      />

      <div className="absolute inset-0 bg-black/40" />

      <div className="relative z-10 flex h-full items-center justify-center">
        <div className="text-center">
          <p className="uppercase tracking-[0.5em] text-[#C8A25A] text-sm">
            Handmade Daily
          </p>

          <h2 className="mt-6 font-[var(--font-playfair)] text-5xl md:text-7xl">
            Crafted With
            <br />
            Patience
          </h2>
        </div>
      </div>
    </section>
  );
}
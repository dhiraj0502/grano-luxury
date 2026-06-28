"use client";

import { motion } from "framer-motion";
import { Star } from "lucide-react";

export default function MichelinRecognition() {
  return (
    <section className="bg-[#171717] py-32">
      <div className="container-luxury">
        <motion.div
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="mx-auto max-w-4xl text-center"
        >
          <p className="uppercase tracking-[0.4em] text-[#C8A25A] text-sm">
            Michelin Guide
          </p>

          <h2 className="heading-lg mt-6">
            Recognised for
            <br />
            Culinary Excellence
          </h2>

          <div className="mt-10 flex justify-center gap-4">
            <Star
              className="h-8 w-8 text-[#C8A25A]"
              fill="#C8A25A"
            />
            <Star
              className="h-8 w-8 text-[#C8A25A]"
              fill="#C8A25A"
            />
            <Star
              className="h-8 w-8 text-[#C8A25A]"
              fill="#C8A25A"
            />
          </div>

          <p className="mt-10 text-xl text-white/70 leading-relaxed">
            Grano has earned recognition in the
            Michelin Guide through its dedication
            to authentic Calabrian cooking,
            handmade pasta, exceptional produce,
            and a carefully curated dining
            experience.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
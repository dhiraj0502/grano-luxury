"use client";

import { motion } from "framer-motion";

const features = [
  {
    title: "Natural Wines",
    description:
      "Carefully selected organic and biodynamic producers."
  },
  {
    title: "Calabrian Focus",
    description:
      "Rare southern Italian labels not commonly found in Dublin."
  },
  {
    title: "Food Pairings",
    description:
      "Designed to complement every course and enhance flavour."
  }
];

export default function WineExperience() {
  return (
    <section
      id="wine"
      className="bg-[#171717] py-32"
    >
      <div className="container-luxury">
        <div className="grid lg:grid-cols-2 gap-20 items-center">

          {/* Content */}

          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >
            <p className="uppercase tracking-[0.3em] text-[#C8A25A] text-sm">
              Wine Experience
            </p>

            <h2 className="heading-lg mt-6">
              Exceptional
              <br />
              Italian Wines
            </h2>

            <p className="mt-8 text-lg text-white/70 leading-relaxed">
              A curated collection celebrating
              artisan producers, organic farming
              and the rich heritage of Italian
              winemaking.
            </p>

            <div className="mt-12 space-y-6">
              {features.map((item) => (
                <div
                  key={item.title}
                  className="rounded-3xl border border-white/10 p-6"
                >
                  <h3 className="text-xl font-semibold">
                    {item.title}
                  </h3>

                  <p className="mt-2 text-white/60">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Image */}

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >
            <div className="overflow-hidden rounded-[40px]">
              <img
                src="https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?w=1400&q=80"
                alt="Wine Experience"
                className="aspect-[4/5] w-full object-cover"
              />
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
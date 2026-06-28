"use client";

import { motion } from "framer-motion";

const dishes = [
  {
    title: "Handmade Pasta",
    image:
      "https://images.unsplash.com/photo-1551183053-bf91a1d81141?q=80&w=1200"
  },
  {
    title: "Calabrian Seafood",
    image:
      "https://images.unsplash.com/photo-1563379091339-03246963d96c?w=1200&q=80"
  },
  {
    title: "Seasonal Produce",
    image:
      "https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=1200"
  },
  {
    title: "Italian Dessert",
    image:
      "https://images.unsplash.com/photo-1563805042-7684c019e1cb?q=80&w=1200"
  }
];

export default function SignatureDishes() {
  return (
    <section
      id="menu"
      className="section-spacing bg-[#F8F5EF] text-black"
    >
      <div className="container-luxury">
        <div className="text-center mb-20">
          <p className="uppercase tracking-[0.3em] text-[#C8A25A] text-sm">
            Signature Dishes
          </p>

          <h2 className="heading-lg mt-6">
            A Celebration
            <br />
            of Calabria
          </h2>
        </div>

        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-4">
          {dishes.map((dish, index) => (
            <motion.div
              key={dish.title}
              initial={{
                opacity: 0,
                y: 60
              }}
              whileInView={{
                opacity: 1,
                y: 0
              }}
              viewport={{
                once: true
              }}
              transition={{
                delay: index * 0.15,
                duration: 0.8
              }}
              className="group"
            >
              <div className="overflow-hidden rounded-[32px]">
                <img
                  src={dish.image}
                  alt={dish.title}
                  className="aspect-[4/5] w-full object-cover transition duration-700 group-hover:scale-110"
                />
              </div>

              <h3 className="mt-6 font-[var(--font-playfair)] text-2xl">
                {dish.title}
              </h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
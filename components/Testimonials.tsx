"use client";

import { motion } from "framer-motion";

const testimonials = [
  {
    quote:
      "One of the most memorable meals in Dublin. Every detail feels intentional.",
    author: "Michelin Guide Guest"
  },
  {
    quote:
      "Authentic, refined and deeply rooted in southern Italian traditions.",
    author: "Food Critic"
  },
  {
    quote:
      "The handmade pasta and wine pairing were exceptional.",
    author: "Regular Guest"
  }
];

export default function Testimonials() {
  return (
    <section className="bg-[#F8F5EF] py-32 text-black">
      <div className="container-luxury">
        <div className="text-center mb-20">
          <p className="uppercase tracking-[0.3em] text-[#C8A25A] text-sm">
            Testimonials
          </p>

          <h2 className="heading-lg mt-6">
            What Guests
            <br />
            Are Saying
          </h2>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {testimonials.map((item, index) => (
            <motion.div
              key={item.author}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.8,
                delay: index * 0.15
              }}
              className="rounded-[32px] bg-white p-10 shadow-lg"
            >
              <div className="text-5xl text-[#C8A25A]">
                
              </div>

              <p className="mt-6 text-lg leading-relaxed">
                {item.quote}
              </p>

              <p className="mt-8 uppercase tracking-[0.2em] text-sm text-black/50">
                {item.author}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
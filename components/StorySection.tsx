"use client";

import { motion } from "framer-motion";

export default function StorySection() {
  return (
    <section
      id="story"
      className="bg-[#F8F5EF] text-black py-32"
    >
      <div className="container-luxury">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          
          {/* Image */}

          <motion.div
            initial={{
              opacity: 0,
              x: -80
            }}
            whileInView={{
              opacity: 1,
              x: 0
            }}
            viewport={{
              once: true
            }}
            transition={{
              duration: 1
            }}
          >
            <div className="overflow-hidden rounded-[40px]">
              <img
                src="https://images.unsplash.com/photo-1559339352-11d035aa65de?w=1200&q=80"
                alt="Chef making pasta"
                className="aspect-[4/5] w-full object-cover"
              />
            </div>
          </motion.div>

          {/* Content */}

          <motion.div
            initial={{
              opacity: 0,
              x: 80
            }}
            whileInView={{
              opacity: 1,
              x: 0
            }}
            viewport={{
              once: true
            }}
            transition={{
              duration: 1
            }}
          >
            <p className="uppercase tracking-[0.3em] text-[#C8A25A] text-sm">
              The Story of Grano
            </p>

            <h2 className="heading-lg mt-6">
              Calabria
              <br />
              Meets Dublin
            </h2>

            <p className="mt-8 text-lg leading-relaxed text-black/70">
              Grano was created to bring the
              flavours and traditions of
              southern Italy to Dublin.
            </p>

            <p className="mt-6 text-lg leading-relaxed text-black/70">
              Handmade pasta sits at the heart
              of the menu, supported by
              exceptional produce sourced from
              artisan farmers, fishermen and
              independent Italian suppliers.
            </p>

            <p className="mt-6 text-lg leading-relaxed text-black/70">
              Every dish reflects a commitment
              to authenticity, seasonality and
              craftsmanship.
            </p>

            <div className="mt-10 h-[2px] w-24 bg-[#C8A25A]" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
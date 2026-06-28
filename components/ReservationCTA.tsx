"use client";

import { motion } from "framer-motion";

export default function ReservationCTA() {
  return (
    <section
      id="reservation"
      className="relative py-40 bg-[#0F3D2E]"
    >
      <div className="container-luxury">
        <motion.div
          initial={{
            opacity: 0,
            y: 50
          }}
          whileInView={{
            opacity: 1,
            y: 0
          }}
          viewport={{
            once: true
          }}
          transition={{
            duration: 1
          }}
          className="text-center max-w-4xl mx-auto"
        >
          <p className="uppercase tracking-[0.3em] text-[#C8A25A] text-sm">
            Reservations
          </p>

          <h2 className="heading-lg mt-6">
            Reserve Your
            <br />
            Experience
          </h2>

          <p className="mt-8 text-xl text-white/70">
            Reservations are frequently booked
            out. Secure your table today.
          </p>

          <button className="gold-button mt-12">
            Reserve Table
          </button>
        </motion.div>
      </div>
    </section>
  );
}
"use client";
import { motion } from "framer-motion";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative bg-gradient-to-r from-brand-blue to-brand-lightblue text-black overflow-hidden">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 items-center gap-8 px-6 py-32 md:py-20">
        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center md:text-left"
        >
          <motion.h1
            className="text-4xl md:text-6xl font-bold leading-tight"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            Pure. Refreshing. Trusted.
          </motion.h1>

          <motion.p
            className="mt-4 text-lg md:text-xl text-black-100 max-w-lg mx-auto md:mx-0"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            Livix Water LLP brings you premium mineral water with unmatched purity and taste.
          </motion.p>

          <motion.div
            className="mt-6 flex flex-col md:flex-row gap-4 justify-center md:justify-start"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            <a
              href="/brands"
              className="px-6 py-3 bg-white text-brand-blue font-semibold rounded-full shadow-md hover:bg-gray-100 transition"
            >
              Explore Brands
            </a>
            <a
              href="/contact"
              className="px-6 py-3 bg-brand-darkblue text-black font-semibold rounded-full shadow-md hover:bg-brand-blue transition"
            >
              Contact Us
            </a>
          </motion.div>
        </motion.div>

        {/* Right Side Image (Qvik Bottles) */}
        <motion.div
          className="flex justify-center md:justify-end relative"
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.8, duration: 0.8 }}
        >
          <motion.div
            animate={{ y: [0, -15, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="w-[280px] sm:w-[340px] md:w-[420px] lg:w-[480px]"
          >
            <Image
              src="/assets/images/qvik_bottles.png"
              alt="Qvik Water Bottles"
              width={480}
              height={720}
              className="w-full h-auto drop-shadow-2xl"
              priority
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

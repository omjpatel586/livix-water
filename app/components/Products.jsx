"use client";
import { motion } from "framer-motion";
import Image from "next/image";

export default function ProductsSection() {
  return (
    <section className="bg-gradient-to-b from-blue-50 to-blue-100 py-20">
      <div className="max-w-7xl mx-auto px-6 text-center">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-3xl sm:text-4xl font-bold text-black"
        >
          A QVIK Premium Hydration for Everyone and Every Occasion
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="mt-4 text-base sm:text-lg md:text-xl text-gray-700 max-w-3xl mx-auto"
        >
          From quenching your personal thirst to sharing with family and friends, QVIK Water comes
          in multiple sizes.
        </motion.p>

        {/* Product Images */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-12 grid grid-cols-2 sm:flex sm:flex-row justify-center items-end gap-6 sm:gap-10"
        >
          <div className="flex justify-center">
            <Image
              src="/assets/images/Qvik waterfall.png"
              alt="QVIK Bottle 200ml"
              width={150}
              height={300}
              className="shadow-lg rounded-lg w-[90px] xs:w-[110px] sm:w-[140px] md:w-[150px] h-auto"
            />
          </div>
          <div className="flex justify-center">
            <Image
              src="/assets/images/qvik 500-200.png"
              alt="QVIK Bottle 500ml"
              width={150}
              height={300}
              className="shadow-lg rounded-lg w-[90px] xs:w-[110px] sm:w-[140px] md:w-[150px] h-auto"
            />
          </div>
          <div className="flex justify-center col-span-2 sm:col-span-1">
            <Image
              src="/assets/images/qvik art.png"
              alt="QVIK Bottle 1L"
              width={150}
              height={300}
              className="shadow-lg rounded-lg w-[100px] xs:w-[120px] sm:w-[150px] md:w-[160px] h-auto"
            />
          </div>
        </motion.div>

        {/* Lifestyle Images */}
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="flex flex-col items-center"
          >
            <Image
              src="/assets/images/lifestyle-work.png"
              alt="Stay Energised and Focused"
              width={300}
              height={200}
              className="rounded-lg shadow-md w-full sm:w-[200px] h-auto object-cover"
            />
            <p className="mt-2 text-gray-700 font-medium">Stay Energised and Focused</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            viewport={{ once: true }}
            className="flex flex-col items-center"
          >
            <Image
              src="/assets/images/lifestyle-meal.png"
              alt="Hydrate with Your Meal"
              width={300}
              height={200}
              className="rounded-lg shadow-md w-full sm:w-[200px] h-auto object-cover"
            />
            <p className="mt-2 text-gray-700 font-medium">Hydrate with Your Meal</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

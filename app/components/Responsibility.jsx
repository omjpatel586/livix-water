"use client";
import { motion } from "framer-motion";
import Image from "next/image";

export default function Responsibility() {
  return (
    <section className="bg-blue-50 py-20 px-6">
      <div className="max-w-7xl mx-auto text-center">
        {/* Heading: Our Brands */}
        <motion.h2
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-3xl sm:text-4xl font-bold text-black"
        >
          Our Brands, Your Trust
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="mt-4 text-gray-700 max-w-2xl mx-auto text-lg"
        >
          A household name for decades gone, decades to come.
        </motion.p>

        {/* Brand Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-8 flex justify-center"
        >
          <Image
            src="/assets/images/qvik_brand_logo.jpeg"
            alt="QVIK Brand"
            width={500}
            height={300}
            className="rounded-lg shadow-md w-full max-w-md object-cover"
          />
        </motion.div>

        {/* Responsibility Section */}
        <div className="mt-16 grid gap-12 md:grid-cols-2 items-center">
          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center md:text-left"
          >
            <h3 className="text-2xl font-semibold text-black">
              Our Responsibility Towards Citizens of India
            </h3>
            <p className="mt-4 text-gray-700">
              Bottles for Change aims to create awareness that USED PLASTIC IS NOT WASTE. IT HAS
              VALUE. IT IS RECYCLABLE. We are committed to making our planet habitable for our
              generation to come.
            </p>
          </motion.div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="flex justify-center md:justify-end"
          >
            <Image
              src="/assets/images/recycle-bottle.png"
              alt="Bottles for Change"
              width={400}
              height={300}
              className="rounded-lg shadow-md w-full md:w-[400px] h-auto object-cover"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

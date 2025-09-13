import { motion } from "framer-motion";
import Image from "next/image";

export default function HydrationSection() {
  return (
    <section className="bg-white py-20 px-6">
      <div className="max-w-7xl mx-auto text-center">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-3xl sm:text-4xl font-bold text-black"
        >
          Staying Hydrated with QVIK Premium Water
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="mt-4 text-base sm:text-lg md:text-xl text-gray-700 max-w-3xl mx-auto"
        >
          Staying hydrated is essential for our health and well-being, but the question is “How can
          we stay hydrated throughout the day?”. With our busy schedules and daily distractions,
          it's easy to forget to prioritise this fundamental need. However, incorporating hydration
          into our daily routines doesn't have to be complicated. Combining simple strategies and
          mindful habits, we can effortlessly increase our water intake and reap the numerous
          benefits of optimal hydration.
        </motion.p>

        {/* Hydration Tips */}
        <div className="mt-12 grid gap-12 md:grid-cols-2 items-center">
          {/* Tip 1: Drink, Train, Repeat */}
          <motion.div
            initial={{ opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="flex flex-col items-center md:items-start"
          >
            <div className="w-full max-w-[600px] aspect-[3/2] relative">
              <Image
                src="/assets/images/gym.png"
                alt="Drink, Train, Repeat"
                fill
                className="rounded-lg shadow-md object-contain"
              />
            </div>
            <p className="mt-4 text-gray-700 font-medium text-center md:text-left">
              Drink, Train, Repeat! Keep yourself energized with QVIK Water during workouts.
            </p>
          </motion.div>

          {/* Tip 2: On-the-go hydration */}
          <motion.div
            initial={{ opacity: 0, x: 80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="flex flex-col items-center md:items-start"
          >
            <div className="w-full max-w-[600px] aspect-[3/2] relative">
              <Image
                src="/assets/images/on-the-go.png"
                alt="Carry QVIK Hydration Bottle"
                fill
                className="rounded-lg shadow-md object-contain"
              />
            </div>
            <p className="mt-4 text-gray-700 font-medium text-center md:text-left">
              Carry a QVIK Hydration Bottle in your bag or car for your daily commute and on-the-go
              hydration.
            </p>
          </motion.div>
        </div>

        {/* Water for Life */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
          viewport={{ once: true }}
          className="mt-16 flex flex-col md:flex-row items-center gap-8"
        >
          <div className="md:w-1/2 text-center md:text-left">
            <h3 className="text-2xl font-semibold text-black">
              Water for Life: From Start of the Day till Wind Down in Evening
            </h3>
            <p className="mt-4 text-gray-700">
              Water contributes to the maintenance of normal physical and cognitive function and
              normal regulation of body temperature. At least 2L of water, from all sources, should
              be consumed per day, as part of a healthy diet and lifestyle.
            </p>
          </div>
          <div className="md:w-1/2 flex justify-center">
            <div className="w-full max-w-[600px] aspect-[3/2] relative">
              <Image
                src="/assets/images/water-for-life.png"
                alt="Water for Life"
                fill
                className="rounded-lg shadow-md object-contain"
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

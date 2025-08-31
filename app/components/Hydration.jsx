import Image from "next/image";

export default function HydrationSection() {
  return (
    <section className="bg-white py-20 px-6">
      <div className="max-w-7xl mx-auto text-center">
        {/* Heading */}
        <h2 className="text-3xl sm:text-4xl font-bold text-black">
          Staying Hydrated with QVIK Premium Water
        </h2>
        <p className="mt-4 text-base sm:text-lg md:text-xl text-gray-700 max-w-3xl mx-auto">
          Staying hydrated is essential for our health and well-being, but the question is “How can
          we stay hydrated throughout the day?”. With our busy schedules and daily distractions,
          it's easy to forget to prioritise this fundamental need. However, incorporating hydration
          into our daily routines doesn't have to be complicated. Combining simple strategies and
          mindful habits, we can effortlessly increase our water intake and reap the numerous
          benefits of optimal hydration.
        </p>

        {/* Hydration Tips */}
        <div className="mt-12 grid gap-12 md:grid-cols-2 items-center">
          {/* Tip 1: Drink, Train, Repeat */}
          <div className="flex flex-col items-center md:items-start">
            <Image
              src="/assets/images/gym.png"
              alt="Drink, Train, Repeat"
              width={400}
              height={250}
              className="rounded-lg shadow-md w-full md:w-[400px] h-auto object-cover"
            />
            <p className="mt-4 text-gray-700 font-medium text-center md:text-left">
              Drink, Train, Repeat! Keep yourself energized with QVIK Water during workouts.
            </p>
          </div>

          {/* Tip 2: On-the-go hydration */}
          <div className="flex flex-col items-center md:items-start">
            <Image
              src="/assets/images/on-the-go.png"
              alt="Carry QVIK Hydration Bottle"
              width={400}
              height={250}
              className="rounded-lg shadow-md w-full md:w-[400px] h-auto object-cover"
            />
            <p className="mt-4 text-gray-700 font-medium text-center md:text-left">
              Carry a QVIK Hydration Bottle in your bag or car for your daily commute and on-the-go
              hydration.
            </p>
          </div>
        </div>

        {/* Water for Life */}
        <div className="mt-16 flex flex-col md:flex-row items-center gap-8">
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
            <Image
              src="/assets/images/water-for-life.png"
              alt="Water for Life"
              width={400}
              height={300}
              className="rounded-lg shadow-md w-full md:w-[400px] h-auto object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

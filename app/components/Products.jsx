import Image from "next/image";

export default function ProductsSection() {
  return (
    <section className="bg-gradient-to-b from-blue-50 to-blue-100 py-20">
      <div className="max-w-7xl mx-auto px-6 text-center">
        {/* Heading */}
        <h2 className="text-3xl sm:text-4xl font-bold text-black">
          A QVIK Premium Hydration for Everyone and Every Occasion
        </h2>
        <p className="mt-4 text-base sm:text-lg md:text-xl text-gray-700 max-w-3xl mx-auto">
          From quenching your personal thirst to sharing with family and friends, QVIK Water comes
          in multiple sizes.
        </p>

        {/* Product Images */}
        <div className="mt-12 flex flex-col sm:flex-row justify-center items-center gap-8">
          <Image
            src="/assets/images/qvik_200ml_bottle.jpeg"
            alt="QVIK Bottle 200ml"
            width={150}
            height={300}
            className="shadow-lg rounded-lg w-[120px] sm:w-[150px] h-auto"
          />
          <Image
            src="/assets/images/qvik-500ml.png"
            alt="QVIK Bottle 500ml"
            width={150}
            height={300}
            className="shadow-lg rounded-lg w-[120px] sm:w-[150px] h-auto"
          />
          <Image
            src="/assets/images/qvik-1l.png"
            alt="QVIK Bottle 1L"
            width={150}
            height={300}
            className="shadow-lg rounded-lg w-[120px] sm:w-[150px] h-auto"
          />
        </div>

        {/* Lifestyle Images */}
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 gap-8">
          <div className="flex flex-col items-center">
            <Image
              src="/assets/images/lifestyle-work.png"
              alt="Stay Energised and Focused"
              width={300}
              height={200}
              className="rounded-lg shadow-md w-full sm:w-[300px] h-auto object-cover"
            />
            <p className="mt-2 text-gray-700 font-medium">Stay Energised and Focused</p>
          </div>
          <div className="flex flex-col items-center">
            <Image
              src="/assets/images/lifestyle-meal.png"
              alt="Hydrate with Your Meal"
              width={300}
              height={200}
              className="rounded-lg shadow-md w-full sm:w-[300px] h-auto object-cover"
            />
            <p className="mt-2 text-gray-700 font-medium">Hydrate with Your Meal</p>
          </div>
        </div>
      </div>
    </section>
  );
}

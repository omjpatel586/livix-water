import Image from "next/image";

export default function BrandsSection() {
  return (
    <section className="bg-blue-50 py-20 px-6">
      <div className="max-w-7xl mx-auto text-center">
        {/* Heading: Our Brands */}
        <h2 className="text-3xl sm:text-4xl font-bold text-black">Our Brands, Your Trust</h2>
        <p className="mt-4 text-gray-700 max-w-2xl mx-auto text-lg">
          A household name for decades gone, decades to come.
        </p>

        {/* Brand Image */}
        <div className="mt-8 flex justify-center">
          <Image
            src="/assets/images/qvik_brand_logo.jpeg"
            alt="QVIK Brand"
            width={500}
            height={300}
            className="rounded-lg shadow-md w-full max-w-md object-cover"
          />
        </div>

        {/* Responsibility Section */}
        <div className="mt-16 grid gap-12 md:grid-cols-2 items-center">
          {/* Text */}
          <div className="text-center md:text-left">
            <h3 className="text-2xl font-semibold text-black">
              Our Responsibility Towards Citizens of India
            </h3>
            <p className="mt-4 text-gray-700">
              Bottles for Change aims to create awareness that USED PLASTIC IS NOT WASTE. IT HAS
              VALUE. IT IS RECYCLABLE. We are committed to making our planet habitable for our
              generation to come.
            </p>
          </div>

          {/* Image */}
          <div className="flex justify-center md:justify-end">
            <Image
              src="/assets/images/recycle-bottle.png"
              alt="Bottles for Change"
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

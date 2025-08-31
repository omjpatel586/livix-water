import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative bg-gradient-to-r from-brand-blue to-brand-lightblue text-black">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 items-center gap-8 px-6 py-32 md:py-20 text-center md:text-left">
        {/* Left Content */}
        <div className="text-center md:text-left">
          <h1 className="text-4xl md:text-6xl font-bold leading-tight">
            Pure. Refreshing. Trusted.
          </h1>
          <p className="mt-4 text-lg md:text-xl text-black-100">
            Livix Water LLP brings you premium mineral water with unmatched purity and taste.
          </p>

          <div className="mt-6 flex flex-col md:flex-row gap-4 justify-center md:justify-start">
            <a
              href="/brands"
              className="px-6 py-3 bg-white text-brand-blue font-semibold rounded-full shadow-md hover:bg-gray-100"
            >
              Explore Brands
            </a>
            <a
              href="/contact"
              className="px-6 py-3 bg-brand-darkblue text-black font-semibold rounded-full shadow-md hover:bg-brand-blue"
            >
              Contact Us
            </a>
          </div>
        </div>

        {/* Right Side Image */}
        <div className="flex justify-center">
          <Image
            src="/assets/images/hero_section.png"
            alt="Livix Water Bottle"
            width={400}
            height={600}
            className="drop-shadow-2xl"
            priority
          />
        </div>
      </div>
    </section>
  );
}

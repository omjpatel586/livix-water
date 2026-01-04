// c:\Studies_Materials\Career\Computer_Science\livix_water\root-site\app\components\AboutUs.jsx

import Image from "next/image";
import Link from "next/link";

export default function AboutUs() {
  const companyDetails = {
    headOfficeLocationUrl:
      "https://www.google.com/maps/place/Livix+Pure+Water+LLP/@21.242912,73.001289,17z/data=!4m10!1m2!2m1!1sBlock+No.+228,+Plot+no.+12,+Matruchhaya+Residency,+Vav-Jokha+Road,+Kamrej,+Surat+GJ+India+-+394326!3m6!1s0x3be0432accb07457:0xbf058216b6fb4ab3!8m2!3d21.2426983!4d73.0059485!15sCmJCbG9jayBOby4gMjI4LCBQbG90IG5vLiAxMiwgTWF0cnVjaGhheWEgUmVzaWRlbmN5LCBWYXYtSm9raGEgUm9hZCwgS2FtcmVqLCBTdXJhdCBHSiBJbmRpYSAtIDM5NDMyNlpbIllibG9jayBubyAyMjggcGxvdCBubyAxMiBtYXRydWNoaGF5YSByZXNpZGVuY3kgdmF2IGpva2hhIHJvYWQga2FtcmVqIHN1cmF0IGdqIGluZGlhIDM5NDMyNpIBFmJvdHRsZWRfd2F0ZXJfc3VwcGxpZXKaASRDaGREU1VoTk1HOW5TMFZKUTBGblRVTnZYM0pFTm5GQlJSQULgAQD6AQQIABAj!16s%2Fg%2F11x0_7sydw?entry=ttu&g_ep=EgoyMDI1MTIwOS4wIKXMDSoASAFQAw%3D%3D",
  };

  return (
    <section
      id="about"
      className="relative py-25 bg-gradient-to-b from-white to-blue-50 overflow-hidden"
    >
      {/* Decorative Background Elements for Water Feel */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-blue-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30 -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-cyan-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30 translate-x-1/3 translate-y-1/3"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          {/* Image/Visual Section */}
          <div className="w-full lg:w-1/2 relative">
            <div className="relative aspect-[4/3] w-full rounded-2xl overflow-hidden shadow-2xl border-4 border-white">
              {/* Placeholder for About Us Image - Replace with actual image later */}
              <div className="absolute inset-0 bg-slate-200 flex items-center justify-center text-slate-400">
                <span className="font-medium">About Us Image (Factory/Nature)</span>
              </div>
              {/* Uncomment when you have an image */}
              <Image
                src="/assets/about-image.png"
                alt="Livix Water Factory in Surat"
                fill
                className="object-cover hover:scale-105 transition-transform duration-700"
              />
            </div>

            {/* Floating Badge - Adds credibility */}
            <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-xl shadow-xl border border-blue-50 hidden md:block">
              <div className="flex items-center gap-4">
                <div className="h-12 w-12 bg-livix-deep rounded-full flex items-center justify-center text-white font-bold text-xl">
                  L
                </div>
                <Link href={companyDetails.headOfficeLocationUrl}>
                  <p className="text-xs text-gray-500 font-medium uppercase tracking-wide">
                    Located At
                  </p>
                  <p className="text-lg font-bold text-gray-900">Jokha Village, Kamrej, Surat</p>
                </Link>
              </div>
            </div>
          </div>

          {/* Text Content Section */}
          <div className="w-full lg:w-1/2 space-y-8">
            <div className="space-y-4">
              <h3 className="text-[#0077b6] font-bold tracking-wider uppercase text-sm">
                About Livix Water
              </h3>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
                Purity You Can Trust, <br />
                <span className="text-transparent bg-clip-text bg-[#0077b6] from-blue-600 to-cyan-500">
                  Nature You Can Taste.
                </span>
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                Livix Water LLP is a leading mineral water brand situated in the serene surroundings
                of <strong>Jokha village near Kamrej, Surat</strong>. We are dedicated to bottling
                the essence of nature, ensuring that every drop is as pure as the source it comes
                from.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="flex items-start gap-3">
                <div className="mt-1 w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 shrink-0">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    ></path>
                  </svg>
                </div>
                <div>
                  <h4 className="font-bold text-gray-900">Advanced Filtration</h4>
                  <p className="text-sm text-gray-500 mt-1">
                    State-of-the-art purification technology for crystal clear hydration.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="mt-1 w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 shrink-0">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    ></path>
                  </svg>
                </div>
                <div>
                  <h4 className="font-bold text-gray-900">Locally Sourced</h4>
                  <p className="text-sm text-gray-500 mt-1">
                    Proudly serving Surat with water sourced from pristine local aquifers.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Vision & Mission Section */}
        <div className="mt-20 grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {/* Vision Card */}
          <div className="group bg-white p-8 rounded-2xl shadow-lg border border-blue-50 hover:shadow-xl transition-all duration-300 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-1.5 h-full bg-[#0077b6]"></div>
            <div className="mb-6 w-16 h-16 rounded-full bg-blue-50 flex items-center justify-center text-[#0077b6] group-hover:scale-110 transition-transform duration-300">
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                />
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Vision</h3>
            <p className="text-gray-600 leading-relaxed">
              To be the most trusted name in hydration, delivering pure, life-sustaining water to
              every household while championing environmental sustainability and community
              well-being.
            </p>
          </div>

          {/* Mission Card */}
          <div className="group bg-white p-8 rounded-2xl shadow-lg border border-blue-50 hover:shadow-xl transition-all duration-300 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-1.5 h-full bg-cyan-500"></div>
            <div className="mb-6 w-16 h-16 rounded-full bg-cyan-50 flex items-center justify-center text-cyan-600 group-hover:scale-110 transition-transform duration-300">
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M13 10V3L4 14h7v7l9-11h-7z"
                />
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h3>
            <p className="text-gray-600 leading-relaxed">
              We are committed to utilizing advanced filtration technology to provide crystal-clear
              mineral water. We strive to maintain the highest hygiene standards and ensure customer
              satisfaction through reliable service.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

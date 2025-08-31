import Image from "next/image";

const MaintenancePage = () => (
  <div className="min-h-screen flex flex-col justify-center items-center bg-blue-50 px-4 text-center">
    <Image
      src="/assets/logo.jpeg"
      alt="Livix Water Logo"
      width={150}
      height={150}
      className="mb-6 rounded-full shadow-lg"
    />
    <h1 className="text-3xl md:text-4xl font-semibold text-blue-800">
      🚧 Site Under Maintenance 🚧
    </h1>
    <p className="mt-4 text-lg text-blue-700">We’re working hard to bring you something amazing!</p>
    <p className="mt-2 text-md text-blue-600">
      Please check back soon — we’ll be back online shortly.
    </p>
  </div>
);

export default MaintenancePage;

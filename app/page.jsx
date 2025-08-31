"use client";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import HydrationSection from "./components/Hydration";
import MaintenancePage from "./components/MaintenancePage";
import Navbar from "./components/Navbar";
import ProductsSection from "./components/Products";
import BrandsSection from "./components/Responsibility";

export default function Home() {
  const isMaintenance = process.env.NEXT_PUBLIC_MAINTENANCE_MODE === "true";

  if (isMaintenance) {
    return <MaintenancePage />;
  }

  return (
    <>
      <Navbar />
      <Hero />
      <ProductsSection />
      <HydrationSection />
      <BrandsSection />
      <Footer />
    </>
  );
}

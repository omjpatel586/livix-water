"use client";
import Hero from "./components/Hero";
import HydrationSection from "./components/Hydration";
import MaintenancePage from "./components/MaintenancePage";
import ProductsSection from "./components/Products";
import Responsibility from "./components/Responsibility";

export default function Home() {
  const isMaintenance = process.env.NEXT_PUBLIC_MAINTENANCE_MODE === "true";

  if (isMaintenance) {
    return <MaintenancePage />;
  }

  return (
    <>
      <Hero />
      <ProductsSection />
      <HydrationSection />
      <Responsibility />
    </>
  );
}

"use client";
import { motion } from "framer-motion";
import Image from "next/image";

export const Logo = ({ isHeaderSection = true, width = 50, height = 50 }) => {
  return (
    <motion.div
      className="flex items-center gap-3"
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
    >
      <Image
        src="/assets/logo.png"
        alt="Livix Water LLP"
        width={width}
        height={height}
        className="rounded-full shadow-md"
      />
      {isHeaderSection ? (
        <span className="text-livix-deep text-xl font-bold">Livix Water LLP</span>
      ) : (
        <></>
      )}
    </motion.div>
  );
};

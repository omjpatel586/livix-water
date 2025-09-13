"use client";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";
import { HiOutlineMenu, HiOutlineX } from "react-icons/hi";
import { Logo } from "./Logo";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About Us" },
    { href: "/contact", label: "Contact Us" },
    { href: "/brands", label: "Brands" },
  ];

  return (
    <header className="bg-livix-light shadow-md fixed w-full z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between p-4">
        {/* Left: Logo + Company Name */}
        <Logo />
        {/* Desktop Menu */}
        <nav className="hidden md:flex">
          <ul className="flex space-x-6 text-livix-deep font-medium">
            {navLinks.map((link, i) => (
              <motion.li
                key={link.href}
                whileHover={{ scale: 1.1 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <Link href={link.href} className="relative group">
                  {link.label}
                  <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-livix-deep transition-all group-hover:w-full"></span>
                </Link>
              </motion.li>
            ))}
          </ul>
        </nav>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? (
              <HiOutlineX className="w-6 h-6 text-livix-deep" />
            ) : (
              <HiOutlineMenu className="w-6 h-6 text-livix-deep" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu with Animation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="md:hidden bg-livix-light shadow-md"
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -50, opacity: 0 }}
            transition={{ duration: 0.4 }}
          >
            <ul className="flex flex-col p-4 space-y-4 text-livix-deep font-medium">
              {navLinks.map((link) => (
                <motion.li
                  key={link.href}
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <Link href={link.href} onClick={() => setIsOpen(false)}>
                    {link.label}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

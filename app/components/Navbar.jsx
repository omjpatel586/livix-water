"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { HiOutlineMenu, HiOutlineX } from "react-icons/hi"; // Hamburger icons

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-livix-light shadow-md fixed w-full z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between p-4">
        {/* Left: Logo + Company Name */}
        <div className="flex items-center gap-3">
          <Image
            src="/assets/logo.jpeg"
            alt="Livix Water LLP"
            width={50}
            height={50}
            className="rounded-full shadow-md"
          />
          <span className="text-livix-deep text-xl font-bold">Livix Water LLP</span>
        </div>

        {/* Desktop Menu */}
        <nav className="hidden md:flex">
          <ul className="flex space-x-6 text-livix-deep font-medium">
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/about">About Us</Link>
            </li>
            <li>
              <Link href="/contact">Contact Us</Link>
            </li>
            <li>
              <Link href="/brands">Brands</Link>
            </li>
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

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-livix-light shadow-md">
          <ul className="flex flex-col p-4 space-y-4 text-livix-deep font-medium">
            <li>
              <Link href="/" onClick={() => setIsOpen(false)}>
                Home
              </Link>
            </li>
            <li>
              <Link href="/about" onClick={() => setIsOpen(false)}>
                About Us
              </Link>
            </li>
            <li>
              <Link href="/contact" onClick={() => setIsOpen(false)}>
                Contact Us
              </Link>
            </li>
            <li>
              <Link href="/brands" onClick={() => setIsOpen(false)}>
                Brands
              </Link>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}

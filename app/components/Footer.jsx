"use client";
import Link from "next/link";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-livix-light text-livix-deep py-12">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Logo & Brand */}
        <div className="flex flex-col items-center md:items-start">
          <h3 className="text-2xl font-bold text-livix-deep mb-2">Livix Water LLP</h3>
          <p className="text-gray-200 text-livix-deep">Pure. Refreshing. Trusted.</p>
        </div>

        {/* Navigation Links */}
        <div className="flex flex-col items-center md:items-start">
          <h4 className="text-lg font-semibold mb-2">Quick Links</h4>
          <ul className="space-y-2">
            <li>
              <Link href="/" className="hover:text-brand-lightblue transition-colors">
                Home
              </Link>
            </li>
            <li>
              <Link href="/about" className="hover:text-brand-lightblue transition-colors">
                About Us
              </Link>
            </li>
            <li>
              <Link href="/brands" className="hover:text-brand-lightblue transition-colors">
                Brands
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-brand-lightblue transition-colors">
                Contact Us
              </Link>
            </li>
          </ul>
        </div>

        {/* Contact Info / Social */}
        <div className="flex flex-col items-center md:items-start p-4">
          <h4 className="text-lg font-semibold mb-2">Contact</h4>
          <Link className="text-gray-200 text-livix-deep" href="/">
            contact@livixwater.com
          </Link>
          <p className="text-gray-200 text-livix-deep">
            Block No. 228, Plot no. 12, Matruchhaya Residency, Vav-Jokha Road, Kamrej, Surat GJ
            India - 394326
          </p>
          <p className="text-gray-200 text-livix-deep">+91 70777 07721</p>
          <div className="mt-4 flex space-x-4 text-brand-blue">
            <Link href="#" className="hover:text-livix-deep transition-colors">
              <FaFacebook size={20} />
            </Link>
            <Link href="#" className="hover:text-livix-deep transition-colors">
              <FaInstagram size={20} />
            </Link>
            <Link href="#" className="hover:text-livix-deep transition-colors">
              <FaTwitter size={20} />
            </Link>
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-gray-300 mt-8"></div>

      {/* Copyright */}
      <div className="mt-4 text-center text-gray-200 text-livix-deep text-sm">
        &copy; {new Date().getFullYear()} Livix Water LLP. All Rights Reserved.
      </div>
    </footer>
  );
}

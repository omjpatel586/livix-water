"use client";
import Link from "next/link";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
import { Logo } from "./Logo";

export default function Footer() {
  return (
    <footer className="bg-livix-light text-livix-deep py-10">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-10 text-center md:text-left">
        {/* Logo & Brand */}
        <div className="flex flex-col items-center md:items-start space-y-2">
          <Logo isHeaderSection={false} />
          <span className="text-xl font-bold">Livix Water LLP</span>
          <p className="text-sm text-gray-600">Pure. Refreshing. Trusted.</p>
        </div>

        {/* Navigation Links */}
        <div>
          <h4 className="text-lg font-semibold mb-3">Quick Links</h4>
          <ul className="space-y-2 text-sm">
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
        <div className="space-y-2">
          <h4 className="text-lg font-semibold mb-3">Contact</h4>
          <Link
            href="mailto:contact@livixwater.com"
            className="block text-sm hover:text-brand-lightblue"
          >
            contact@livixwater.com
          </Link>
          <p className="text-sm">
            Block No. 228, Plot no. 12, Matruchhaya Residency, Vav-Jokha Road, Kamrej, Surat GJ
            India - 394326
          </p>
          <p className="text-sm font-medium">+91 70777 07721</p>
          <div className="mt-3 flex justify-center md:justify-start space-x-4 text-brand-blue">
            <Link href="#" className="hover:text-livix-deep transition-colors">
              <FaFacebook size={20} />
            </Link>
            <Link
              href="https://www.instagram.com/qvikwater/?igsh=MWtwc2RsejV6dGZ0dQ%3D%3D&utm_source=qr#"
              className="hover:text-livix-deep transition-colors"
            >
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
      <div className="mt-4 text-center text-xs text-gray-600">
        &copy; {new Date().getFullYear()} Livix Water LLP. All Rights Reserved.
      </div>
    </footer>
  );
}

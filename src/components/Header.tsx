"use client";

import Link from "next/link";
import { useState } from "react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed w-full bg-white/95 backdrop-blur-sm z-50 shadow-sm">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="font-playfair text-2xl font-bold text-gray-900">
            Misha Photography
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/#services" className="text-gray-700 hover:text-gray-900 transition">
              Services
            </Link>
            <Link href="/#portfolio" className="text-gray-700 hover:text-gray-900 transition">
              Portfolio
            </Link>
            <Link href="/#about" className="text-gray-700 hover:text-gray-900 transition">
              About
            </Link>
            <Link href="/blog" className="text-gray-700 hover:text-gray-900 transition">
              Blog
            </Link>
            <Link
              href="/#book"
              className="bg-gray-900 text-white px-6 py-2 rounded-full hover:bg-gray-800 transition"
            >
              Book Now
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 space-y-4">
            <Link href="/#services" className="block text-gray-700 hover:text-gray-900">
              Services
            </Link>
            <Link href="/#portfolio" className="block text-gray-700 hover:text-gray-900">
              Portfolio
            </Link>
            <Link href="/#about" className="block text-gray-700 hover:text-gray-900">
              About
            </Link>
            <Link href="/blog" className="block text-gray-700 hover:text-gray-900">
              Blog
            </Link>
            <Link
              href="/#book"
              className="inline-block bg-gray-900 text-white px-6 py-2 rounded-full"
            >
              Book Now
            </Link>
          </div>
        )}
      </nav>
    </header>
  );
}

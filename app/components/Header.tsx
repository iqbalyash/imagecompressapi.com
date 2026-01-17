"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-200 shadow-sm">
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8 py-3">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center">
            <Image
              src="/image_compress_api_logo1.png"
              alt="ImageCompressAPI"
              width={120}
              height={30}
              className="w-auto"
              style={{ height: "38px" }}
              priority
              unoptimized
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <Link
              href="/docs"
              className="text-base text-slate-600 hover:text-primary transition-colors"
            >
              Docs
            </Link>
            <Link
              href="/pricing"
              className="text-base text-slate-600 hover:text-primary transition-colors"
            >
              Pricing
            </Link>
            <Link
              href="/#signup"
              className="text-base px-5 py-2.5 bg-primary text-white rounded-lg hover:bg-accent transition-colors"
            >
              Get Started
            </Link>
          </div>

          {/* Mobile Hamburger Button */}
          <button
            onClick={toggleMenu}
            className="md:hidden flex flex-col gap-1.5 p-2"
            aria-label="Toggle menu"
            aria-expanded={isMenuOpen}
          >
            <span
              className={`block w-6 h-0.5 bg-primary transition-all duration-300 ${
                isMenuOpen ? "rotate-45 translate-y-2" : ""
              }`}
            />
            <span
              className={`block w-6 h-0.5 bg-primary transition-all duration-300 ${
                isMenuOpen ? "opacity-0" : ""
              }`}
            />
            <span
              className={`block w-6 h-0.5 bg-primary transition-all duration-300 ${
                isMenuOpen ? "-rotate-45 -translate-y-2" : ""
              }`}
            />
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-300 ${
            isMenuOpen ? "max-h-64 opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="flex flex-col gap-4 pt-4 pb-2">
            <Link
              href="/docs"
              className="text-base text-slate-600 hover:text-primary transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Docs
            </Link>
            <Link
              href="/pricing"
              className="text-base text-slate-600 hover:text-primary transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Pricing
            </Link>
            <Link
              href="/#signup"
              className="text-base px-5 py-2.5 bg-primary text-white rounded-lg hover:bg-accent transition-colors inline-block text-center"
              onClick={() => setIsMenuOpen(false)}
            >
              Get Started
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
}

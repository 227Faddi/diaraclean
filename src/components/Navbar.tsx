"use client";

import { Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navLinks = [
    { href: "#services", label: "Servizi" },
    { href: "#reviews", label: "Recensioni" },
    { href: "#faq", label: "FAQ" },
    { href: "#cta", label: "Contatti" },
  ];

  return (
    <>
      <div
        className={
          "fixed top-0 left-0 right-0 z-50 bg-white/70 shadow-md backdrop-blur-sm"
        }
      >
        <nav className="mx-auto px-2 sm:px-6 py-3">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center">
              <Image
                src="/diaracleanlogo.png"
                alt="Diaraclean Logo"
                width={50}
                height={50}
                className="mr-2"
              />
              <span className="text-xl font-bold text-gray-800">
                DiaraClean
              </span>
            </Link>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-8">
              <ul className="flex items-center space-x-8">
                {navLinks.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-gray-600 hover:text-primary transition-colors duration-300"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
              <Link
                href="#cta"
                className="btn btn-primary rounded-full px-6 text-white"
              >
                Prenota Ora
              </Link>
            </div>
            <div className="md:hidden">
              <button onClick={toggleMenu} className="text-gray-800">
                <Menu size={28} />
              </button>
            </div>
          </div>
        </nav>
      </div>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 z-50 bg-white/80 backdrop-blur-sm transition-transform duration-300 ease-in-out md:hidden ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex justify-end p-6">
          <button onClick={toggleMenu} className="text-gray-800">
            <X size={28} />
          </button>
        </div>
        <div className="flex flex-col items-center justify-center h-full -mt-16">
          <ul className="space-y-8 text-center">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  onClick={toggleMenu}
                  className="text-2xl text-gray-800 hover:text-primary transition-colors duration-300"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
          <Link
            href="#cta"
            onClick={toggleMenu}
            className="btn btn-primary rounded-full px-8 mt-12 text-lg text-white"
          >
            Prenota Ora
          </Link>
        </div>
      </div>
    </>
  );
};

export default Navbar;

"use client";

import { DATA } from "@/data";
import { Mail, MapPin, Menu, Phone, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import WhatsAppIcon from "./ui/WhatsAppIcon";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const contactInfo = [
    {
      icon: <Phone size={16} />,
      text: DATA.phone,
      href: DATA.phoneHref,
    },
    {
      icon: <Mail size={16} />,
      text: DATA.email,
      href: DATA.emailHref,
    },
    { icon: <MapPin size={16} />, text: DATA.location },
  ];

  const navLinks = [
    { href: "#services", label: "Servizi" },
    // { href: "#reviews", label: "Recensioni" },
    { href: "#faq", label: "FAQ" },
    { href: "#cta", label: "Contatti" },
  ];

  return (
    <>
      <div className="w-full hidden md:block bg-primary text-white py-2 text-sm md:text-base">
        <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-16 flex justify-center items-center">
          <ul className="flex gap-4 md:gap-6 lg:gap-8 items-center">
            {contactInfo.map((item, index) => (
              <li className="flex items-center space-x-2" key={index}>
                {item.icon}
                {item.href ? (
                  <Link href={item.href} className="space-x-2 hover:underline">
                    {item.text}
                  </Link>
                ) : (
                  <span className="flex items-center space-x-2">
                    {item.text}
                  </span>
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div
        className={
          "sticky top-0 left-0 right-0 w-full z-50 bg-white/70 shadow-md backdrop-blur-sm"
        }
      >
        <nav className="px-4 sm:px-6 md:px-8 lg:px-16 py-3 flex justify-center items-center">
          <div className="container w-full flex items-center justify-between mx-auto">
            <div className="md:hidden">
              <Link href={DATA.whatsApp}>
                <WhatsAppIcon />
              </Link>
            </div>
            <div className="flex-1 flex justify-center md:flex-none md:justify-start">
              <Link href="/" className="flex items-center gap-2">
                <Image
                  src="/diaracleanlogo.png"
                  alt="Diaraclean Logo"
                  width={50}
                  height={50}
                />
                <span className="hidden md:block text-lg md:text-xl font-bold text-gray-600">
                  Diara Clean
                </span>
              </Link>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center gap-6 md:gap-8 lg:gap-12">
              <ul className="flex items-center gap-6 md:gap-8 lg:gap-12">
                {navLinks.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-base text-gray-600 hover:text-primary transition-colors duration-300"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
              <Link
                href={DATA.whatsApp}
                className="btn btn-primary rounded-full px-6 py-2 text-base text-white"
              >
                Prenota Ora
              </Link>
            </div>
            <div className="md:hidden flex items-center">
              <button onClick={toggleMenu} className="text-gray-800">
                <Menu className="w-8 h-8" />
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
        <div className="flex flex-col items-center justify-center h-full -mt-12 gap-8">
          <ul className="space-y-8 text-center">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  onClick={toggleMenu}
                  className="text-lg text-gray-800 hover:text-primary transition-colors duration-300"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
          <Link
            href={DATA.whatsApp}
            onClick={toggleMenu}
            className="btn btn-primary rounded-full px-8 py-3 mt-8 text-base text-white"
          >
            Prenota Ora
          </Link>
        </div>
      </div>
    </>
  );
};

export default Navbar;

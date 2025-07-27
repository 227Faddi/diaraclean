import { Menu } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  return (
    <div className="fixed top-0 left-0 right-0 z-50 p-4">
      <nav className="navbar bg-white border border-neutral rounded-2xl max-w-5xl mx-auto px-6 md:px-8">
        <div className="md:hidden w-full flex justify-between items-center">
          <Link href="#">
            <Image
              src="/diaracleanlogo.png"
              alt="logo"
              width={60}
              height={60}
            />
          </Link>
          <Link href="#cta" className="btn btn-primary rounded-xl border-none">
            Prenota
          </Link>
          <div className="dropdown">
            <div tabIndex={0} role="button">
              <Menu size={30} className="text-base-content" />
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 border border-neutral rounded-xl z-[1] mt-8 p-4 right-0"
            >
              <li>
                <Link href="#services" className="text-lg">
                  Servizi
                </Link>
              </li>
              <li>
                <Link href="#reviews" className="text-lg">
                  Recensioni
                </Link>
              </li>
              <li>
                <Link href="#faq" className="text-lg">
                  FAQ
                </Link>
              </li>
              <li>
                <Link href="#cta" className="text-lg">
                  Contatti
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="hidden md:flex w-full space-x-16">
          <div className="navbar-start">
            <Link href="#">
              <Image
                src="/diaracleanlogo.png"
                alt="logo"
                width={60}
                height={60}
              />
            </Link>
          </div>
          <div className="navbar-center">
            <ul className="menu menu-horizontal space-x-2 lg:space-x-8 text-lg">
              <li>
                <Link href="#services">Servizi</Link>
              </li>
              <li>
                <Link href="#reviews">Recensioni</Link>
              </li>
              <li>
                <Link href="#faq">FAQ</Link>
              </li>
              <li>
                <Link href="#cta">Contatti</Link>
              </li>
            </ul>
          </div>
          <div className="navbar-end">
            <Link
              href="#cta"
              className="btn btn-primary rounded-xl border-none md:text-lg md:p-4"
            >
              Prenota
            </Link>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;

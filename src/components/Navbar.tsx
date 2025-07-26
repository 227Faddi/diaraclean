import Image from "next/image";
import Link from "next/link";
import { Menu } from "lucide-react";

const Navbar = () => {
  return (
    <nav className="fixed z-50 navbar glass rounded-xl w-fit px-4 space-x-4 md:px- md:space-x-16">
      <div className="navbar-start">
        <Link href="#">
          <Image src="/diaracleanlogo.png" alt="logo" width={55} height={55} />
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal space-x-8 text-lg">
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
        <div className="dropdown space-x-4 lg:space-x-0">
          <div tabIndex={0} role="button" className="lg:hidden">
            <Menu size={30} />
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-[#2A2A2E] rounded-box z-1 mt-6 w-52 p-2 text-lg"
          >
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
      </div>
    </nav>
  );
};

export default Navbar;

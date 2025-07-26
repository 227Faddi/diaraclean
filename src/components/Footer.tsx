import { Mail, MapPin, Phone } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <footer
      id="footer"
      className="w-full flex flex-col md:flex-row justify-between items-center p-8 md:px-14 mt-36 gap-18 md:gap-6 text-center bg-primary text-primary-content"
    >
      <div className="flex-1">
        <Image src="/diaracleanlogo.png" alt="logo" width={90} height={90} />
      </div>
      <div className="flex-1 order-3 md:order-2 text-center md:self-end">
        <p>© 2025 Diara Clean - Tutti i diritti riservati.</p>
      </div>
      <div className="flex-1 order-2 md:order-3 flex justify-end">
        <ul className="flex flex-col gap-2 justify-center items-start">
          <li>
            <Link
              href="#"
              className="flex items-center justify-center gap-2 text-lg lg:text-xl"
            >
              <MapPin size={25} />
              <p>Olbia</p>
            </Link>
          </li>

          <li>
            <Link
              href="#"
              className="flex items-center justify-center gap-2 text-lg lg:text-xl"
            >
              <Phone size={25} />
              <p>(438) 500-2723</p>
            </Link>
          </li>

          <li>
            <Link
              href="#"
              className="flex items-center justify-center gap-2 text-lg lg:text-xl"
            >
              <Mail size={25} />
              <p>info@diaraclean.com</p>
            </Link>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;

import { DATA } from "@/data";
import { Mail, MapPin, Phone } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  const contactInfo = [
    { icon: <Phone />, text: DATA.phone, href: DATA.phoneHref },
    {
      icon: <Mail />,
      text: DATA.email,
      href: DATA.emailHref,
    },
    { icon: <MapPin />, text: DATA.location },
  ];

  return (
    <footer
      id="footer"
      className="bg-gray-800 text-white pt-20 md:pt-24 pb-8 mt-20 md:mt-32"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 mb-10 md:mb-12 text-center md:text-left">
          <div className="flex flex-col items-center md:items-start">
            <Link href="/" className="flex items-center mb-4">
              <Image
                src="/diaracleanlogo.png"
                alt="diaraclean Logo"
                width={50}
                height={50}
                className="mr-3"
              />
              <span className="text-xl md:text-2xl font-bold">Diara Clean</span>
            </Link>
            <p className="text-sm md:text-base text-gray-400 max-w-sm">
              Pulizie professionali per la tua casa e la tua attività.
            </p>
          </div>

          <div className="flex flex-col items-center md:items-end text-center md:text-right">
            <h4 className="text-lg md:text-xl font-semibold mb-4">Contatti</h4>
            <ul className="space-y-3">
              {contactInfo.map((item, index) => (
                <li key={index} className="flex items-center gap-3">
                  {item.icon}
                  {item.href ? (
                    <Link
                      href={item.href}
                      className="text-sm md:text-base text-gray-300 hover:text-white hover:underline"
                    >
                      {item.text}
                    </Link>
                  ) : (
                    <span className="text-sm md:text-base text-gray-300">
                      {item.text}
                    </span>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-700 pt-6 text-center text-gray-400 text-sm">
          <p>
            &copy; 2025 Diara Clean. Tutti i diritti riservati. Realizzato da{" "}
            <a
              href="https://www.faliloukhouma.com"
              className="underline hover:text-gray-500"
            >
              Falilou
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

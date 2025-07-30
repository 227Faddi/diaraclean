import { Mail, MapPin, Phone } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  const contactInfo = [
    { icon: <Phone />, text: "+39 123 456 7890", href: "tel:+391234567890" },
    {
      icon: <Mail />,
      text: "info@diaraclean.com",
      href: "mailto:info@diaraclean.com",
    },
    { icon: <MapPin />, text: "Olbia & Costa Smeralda" },
  ];

  return (
    <footer id="footer" className="bg-gray-800 text-white pt-16 mt-32 pb-8">
      <div className="container mx-auto px-2">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-10">
          <div className="flex flex-col items-center md:items-start">
            <Link href="/" className="flex items-center mb-4">
              <Image
                src="/diaracleanlogo.png"
                alt="diaraclean Logo"
                width={60}
                height={60}
                className="mr-3"
              />
              <span className="text-2xl font-bold">DiaraClean</span>
            </Link>
            <p className="text-gray-400 text-center md:text-left">
              Pulizia professionale per la tua casa e il tuo business.
            </p>
          </div>

          <div className="flex flex-col items-center md:items-end">
            <h4 className="text-xl font-semibold mb-4 text-left">Contatti</h4>
            <ul className="space-y-3">
              {contactInfo.map((item, index) => (
                <li key={index} className="flex items-center justify-between">
                  {item.icon}
                  {item.href ? (
                    <Link
                      href={item.href}
                      className="ml-3 text-gray-300 hover:text-white hover:underline"
                    >
                      {item.text}
                    </Link>
                  ) : (
                    <span className="ml-3 text-gray-300">{item.text}</span>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-700 pt-6 text-center text-gray-400">
          <p>
            &copy; 2025 Diaraclean. Tutti i diritti riservati. Realizzato da{" "}
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

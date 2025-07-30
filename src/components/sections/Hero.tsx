import { DATA } from "@/data";
import Image from "next/image";
import Link from "next/link";
const Hero = () => {
  return (
    <div className="flex justify-center min-h-screen px-4 sm:px-6 lg:px-8">
      <div className="hero-content flex-col lg:flex-row-reverse gap-8 lg:gap-16 justify-center items-center">
        <picture className="hidden lg:block lg:flex-1 w-full relative h-2/3 max-h-[800px] rounded-3xl border-4 border-secondary overflow-hidden">
          <Image
            fill
            src="/hero.jpg"
            className="w-full h-full object-cover"
            alt={""}
          />
        </picture>
        <div className="flex-1 flex flex-col justify-center gap-6">
          <div className="space-y-4 text-center lg:text-left">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold">
              Pulizie Professionali a Olbia e Dintorni
            </h1>
            <p className="py-4 text-base sm:text-lg lg:text-xl">
              Servizi di pulizia per privati, uffici e case vacanza. Prenota
              comodamente, con orari flessibili pensati per te.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
            <Link
              href={DATA.whatsApp}
              className="btn btn-primary rounded-full px-8 py-4 text-white text-base md:text-lg min-w-48 shadow-none"
            >
              Prenota una pulizia
            </Link>
            <Link
              href="#services"
              className="btn bg-white border-primary text-primary hover:bg-gray-50 shadow-none rounded-full px-8 py-4 text-base md:text-lg min-w-48"
            >
              I Nostri Servizi
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;

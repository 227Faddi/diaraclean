import { DATA } from "@/data";
import Image from "next/image";
import Link from "next/link";
const Hero = () => {
  return (
    <div className="flex justify-center min-h-screen px-2 sm:px-6">
      <div className="hero-content flex-col lg:flex-row-reverse gap-8 justify-center items-center">
        <picture className="hidden lg:block lg:flex-1 w-full relative h-2/3 max-h-[800px] rounded-3xl border-4 border-secondary overflow-hidden">
          <Image
            fill
            src="/hero.jpg"
            className="w-full h-full object-cover"
            alt={""}
          />
        </picture>
        <div className="flex-1 flex flex-col justify-center gap-4 sm:px-6 md:px-14 lg:px-0">
          <div className="space-y-2 text-center md:text-left">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold">
              Pulizie per appartamenti, uffici e case vacanza
            </h1>
            <p className="py-4 text-lg lg:text-2xl">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi.
            </p>
          </div>
          <div className="flex flex-col md:flex-row items-center gap-3">
            <Link
              href={DATA.whatsApp}
              className="btn btn-primary rounded-full px-8 py-6 text-white text-lg lg:text-xl min-w-48 shadow-none"
            >
              Prenota una pulizia
            </Link>
            <Link
              href="#services"
              className="btn bg-white border-primary text-primary hover:bg-gray-50 shadow-none rounded-full px-8 py-6 text-lg lg:text-xl min-w-48"
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

import Link from "next/link";

const Hero = () => {
  return (
    <div className="hero min-h-screen px-2 sm:px-6">
      <div className="hero-content flex-col lg:flex-row-reverse gap-8">
        <picture className="lg:max-w-xl lg:w-1/2">
          <img
            src="https://placehold.co/900x700"
            className="w-full rounded-lg shadow-2xl"
          />
        </picture>
        <div className="space-y-2">
          <p className="bg-neutral text-base-content p-2 px-4 rounded-xl w-fit">
            Servizi di pulizie a Olbia e dintorni
          </p>
          <h1 className="text-2xl lg:text-7xl font-bold">
            Pulizie per appartamenti, uffici e case vacanza
          </h1>
          <p className="py-4 lg:text-2xl">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
          <div className="flex flex-col md:flex-row items-center gap-3">
            <Link
              href="#"
              className="btn bg-gray-800 hover:bg-gray-950 rounded-full px-8 py-6 lg:text-lg text-white min-w-48"
            >
              Prenota una pulizia
            </Link>
            <Link
              href="#services"
              className="btn bg-gray-800 hover:bg-gray-950 rounded-full px-8 py-6 lg:text-lg text-white min-w-48"
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

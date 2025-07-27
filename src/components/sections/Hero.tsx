import Link from "next/link";

const Hero = () => {
  return (
    <div className="hero min-h-screen px-4 lg:px-6 mt-28">
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
            <Link href="u" className="btn btn-primary p-6 text-2xl">
              Prenota una pulizia
            </Link>
            <Link href="#services" className="btn btn-secondary p-6 text-2xl">
              I Nostri Servizi
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;

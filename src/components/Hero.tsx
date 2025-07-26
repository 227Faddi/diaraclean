const Hero = () => {
  return (
    <div className="hero min-h-screen">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <img
          src="https://img.daisyui.com/images/stock/photo-1635805737707-575885ab0820.webp"
          className="max-w-sm w-1/2 rounded-lg shadow-2xl"
        />
        <div className="space-y-2">
          <p className="bg-base-200 text-white p-2 px-4 rounded-xl w-fit">
            Servizi di pulizie a Olbie e dintorni
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
            <button className="btn btn-primary p-6 text-2xl">
              Prenota una pulizia
            </button>
            <button className="btn btn-secondary p-6 text-2xl">
              I Nostri Servizi
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;

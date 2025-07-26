import Image from "next/image";

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
            Professionisti delle Pulizie al Tuo Servizio
          </p>
          <h1 className="text-7xl font-bold">Box Office News!</h1>
          <p className="py-4 text-2xl">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
          <button className="btn btn-primary p-6 text-2xl">
            Prenota Adesso
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;

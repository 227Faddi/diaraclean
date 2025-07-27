import { BadgeCheck, Clock3, Leaf } from "lucide-react";
import BottomWaveDivider from "../ui/BottomWaveDivider";
import InfoCard from "../ui/InfoCard";
import TopWaveDivider from "../ui/TopWaveDivider";

const Reviews = () => {
  const info = [
    {
      icon: <BadgeCheck className="w-10 h-10 text-primary" />,
      title: "Professionalità garantita",
      body: "Personale qualificato, affidabile e attento ai dettagli.",
    },
    {
      icon: <Leaf className="w-10 h-10 text-primary" />,
      title: "Pulizia responsabile",
      body: "Usiamo solo prodotti ecologici e attrezzature professionali.",
    },
    {
      icon: <Clock3 className="w-10 h-10 text-primary" />,
      title: "Servizi flessibili",
      body: "Orari su misura, interventi rapidi e soluzioni personalizzate per ogni esigenza.",
    },
  ];

  return (
    <section
      id="reviews"
      className="py-32 px-2 sm:px-6 bg-primary w-full relative"
    >
      <TopWaveDivider />
      <div className="flex flex-col justify-center items-center">
        <div className="text-center mb-24">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-base-content mb-4">
            I Nostri Servizi di Pulizia
          </h2>
          <p className="text-lg text-base-content max-w-2xl mx-auto">
            Soluzioni complete per ogni esigenza, dalla pulizia ordinaria a
            quella straordinaria.
          </p>
        </div>
        <div className="flex flex-col justify-center items-center md:flex-row gap-8 p-8">
          {info.map((item, index) => (
            <InfoCard
              key={index}
              icon={item.icon}
              title={item.title}
              body={item.body}
            />
          ))}
        </div>
      </div>
      <BottomWaveDivider />
    </section>
  );
};

export default Reviews;

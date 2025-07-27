import { BadgeCheck, Clock3, Leaf } from "lucide-react";
import BottomWaveDivider from "../ui/BottomWaveDivider";
import InfoCard from "../ui/InfoCard";
import TopWaveDivider from "../ui/TopWaveDivider";

const Info = () => {
  const info = [
    {
      icon: <BadgeCheck size={35} />,
      title: "Professionalità\nGarantita",
      body: "Personale qualificato, affidabile e attento ai dettagli.",
    },
    {
      icon: <Leaf size={35} />,
      title: "Pulizia\nResponsabile",
      body: "Usiamo solo prodotti ecologici e attrezzature professionali.",
    },
    {
      icon: <Clock3 size={35} />,
      title: "Servizi\nFlessibili",
      body: "Orari su misura, interventi rapidi e soluzioni personalizzate per ogni esigenza.",
    },
  ];

  return (
    <section
      id="info"
      className="py-32 px-2 sm:px-6 bg-primary w-full relative flex flex-col justify-center items-center"
    >
      <TopWaveDivider />
      <div className="px-6 lg:px-8">
        <div className="text-center mb-24">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-primary-content mb-4">
            I Nostri Servizi di Pulizia
          </h2>
          <p className="text-lg text-primary-content max-w-2xl mx-auto">
            Soluzioni complete per ogni esigenza, dalla pulizia ordinaria a
            quella straordinaria.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-16">
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

export default Info;

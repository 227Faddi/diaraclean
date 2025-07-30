import { BadgeCheck, Clock3, MapPin } from "lucide-react";
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
      icon: <Clock3 size={35} />,
      title: "Servizi\nFlessibili",
      body: "Orari su misura, interventi rapidi e soluzioni personalizzate per ogni esigenza.",
    },
    {
      icon: <MapPin size={35} />,
      title: "Servizio Locale\nAffidabile",
      body: "Operiamo a Olbia e in tutta la zona circostante.",
    },
  ];

  return (
    <section
      id="info"
      className="py-20 md:py-32 px-4 sm:px-6 bg-primary w-full relative flex flex-col justify-center items-center"
    >
      <TopWaveDivider />
      <div className="px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 md:mb-24">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-primary-content mb-4">
            La Tua Scelta di Fiducia
          </h2>
          <p className="text-base sm:text-lg text-primary-content max-w-2xl mx-auto">
            Affidabilità, attenzione ai dettagli e soluzioni su misura per ogni
            esigenza.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-8 md:gap-12 lg:gap-16 place-items-center">
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

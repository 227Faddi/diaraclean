import { BadgeCheck, Clock3, Leaf } from "lucide-react";
import BottomWaveDivider from "../ui/BottomWaveDivider";
import InfoCard from "../ui/InfoCard";
import TopWaveDivider from "../ui/TopWaveDivider";

const Info = () => {
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
      id="info"
      className="py-32 px-4 lg:px-6 bg-neutral w-full relative"
    >
      <TopWaveDivider />
      <h2 className="text-5xl text-center mb-24">Perché scegliere noi?</h2>
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
      <BottomWaveDivider />
    </section>
  );
};

export default Info;

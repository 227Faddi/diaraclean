import ServiceCard from "../ui/ServiceCard";

const Services = () => {
  const services = [
    {
      image: "/6.jpg",
      title: "Pulizie per Privati",
      subtitle: "Ordine, igiene e comfort per la tua casa.",
    },
    {
      image: "/5.jpg",
      title: "Pulizie per Uffici",
      subtitle: "Ambienti di lavoro puliti, professionali e accoglienti.",
    },
    {
      image: "/1.jpg",
      title: "Case Vacanza e B&B",
      subtitle: "Pulizie rapide e impeccabili tra un check-out e l'altro.",
    },
    {
      image: "/7.jpg",
      title: "Pulizie Straordinarie",
      subtitle:
        "Interventi approfonditi dopo traslochi, ristrutturazioni o eventi.",
    },
  ];

  return (
    <section id="services" className="py-20 md:py-32 px-4 sm:px-6 w-full">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 md:mb-24">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-base-content mb-4">
            I Nostri Servizi di Pulizia
          </h2>
          <p className="text-base sm:text-lg text-base-content max-w-2xl mx-auto">
            Soluzioni complete per ogni esigenza, dalla pulizia quotidiana a
            quella straordinaria.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 md:gap-12 place-items-center max-w-6xl mx-auto">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              image={service.image}
              title={service.title}
              subtitle={service.subtitle}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;

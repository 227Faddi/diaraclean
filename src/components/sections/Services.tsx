import ServiceCard from "../ui/ServiceCard";

const Services = () => {
  const services = [
    {
      image:
        "https://images.unsplash.com/photo-1585421514284-efb74c2b69ba?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "Pulizie per Privati",
    },
    {
      image:
        "https://images.unsplash.com/photo-1585421514284-efb74c2b69ba?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "Pulizie per Uffici",
    },
    {
      image:
        "https://images.unsplash.com/photo-1585421514284-efb74c2b69ba?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "Case Vacanza e B&B",
    },
    {
      image:
        "https://images.unsplash.com/photo-1585421514284-efb74c2b69ba?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "Pulizie Straordinarie",
    },
  ];

  return (
    <section id="services" className="py-20 sm:py-24 bg-base-100">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-base-content mb-4">
            I Nostri Servizi di Pulizia
          </h2>
          <p className="text-lg text-base-content max-w-2xl mx-auto">
            Soluzioni complete per ogni esigenza, dalla pulizia ordinaria a
            quella straordinaria.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              image={service.image}
              title={service.title}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;

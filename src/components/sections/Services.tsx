import { BadgeCheck, Clock3, Leaf } from "lucide-react";
import ServiceCard from "../ui/ServiceCard";

const Services = () => {
  const services = [
    {
      icon: <BadgeCheck className="w-10 h-10 hidden text-primary" />,
      title: "Pulizie appartamenti privati",
    },
    {
      icon: <Leaf className="w-10 h-10 hidden text-primary" />,
      title: "Pulizie uffici e locali commerciali",
    },
    {
      icon: <Clock3 className="w-10 h-10 hidden text-primary" />,
      title: "Servizi per affitti brevi, B&B e case vacanza",
    },
    {
      icon: <Clock3 className="w-10 h-10 hidden text-primary" />,
      title: "Pulizie straordinarie",
    },
  ];

  return (
    <section id="services" className="py-32 px-4 lg:px-6">
      <h2 className="text-5xl text-center mb-24">I nostri servizi</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-8 p-8 justify-items-center">
        {services.map((item, index) => (
          <ServiceCard key={index} icon={item.icon} title={item.title} />
        ))}
      </div>
    </section>
  );
};

export default Services;

import { PhoneOutgoing } from "lucide-react";
import Link from "next/link";

type Props = {
  image: string;
  title: string;
};

const ServiceCard = ({ image, title }: Props) => {
  return (
    <div className="relative bg-base-100 rounded-2xl shadow-2xl overflow-hidden group">
      <img src={image} alt={title} className="w-full h-80 object-cover" />
      <div className="absolute inset-0 bg-opacity-50 flex items-end justify-between p-6 z-10 text-white">
        <div>
          <h4 className="text-2xl font-bold hover:bg-primary-focus transition-all duration-300 no-underline">
            {title}
          </h4>
          <p className="text-base-content">{title}</p>
        </div>
        <Link
          href="https://wa.me/393520129432"
          className="hidden group-hover:inline-block"
        >
          <PhoneOutgoing size={35} />
        </Link>
      </div>
      <div className="absolute inset-x-0 bottom-0 h-full bg-gradient-to-t from-primary to-transparent"></div>
    </div>
  );
};

export default ServiceCard;

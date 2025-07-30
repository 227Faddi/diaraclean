import { DATA } from "@/data";
import Image from "next/image";
import Link from "next/link";
import WhatsAppIcon from "./WhatsAppIcon";

type Props = {
  image: string;
  title: string;
  subtitle: string;
};

const ServiceCard = ({ image, title, subtitle }: Props) => {
  return (
    <div className="relative bg-base-100 rounded-2xl shadow-2xl overflow-hidden group w-full max-w-xl h-80">
      <Image
        src={image}
        alt={title}
        className="w-full h-full object-cover"
        fill
      />
      <div className="absolute inset-0 bg-opacity-50 flex items-end justify-between p-4 md:p-6 z-10 text-white">
        <div>
          <h4 className="text-xl md:text-2xl font-bold hover:bg-primary-focus transition-all duration-300 no-underline">
            {title}
          </h4>
          <p className="text-sm md:text-base text-base-content">{subtitle}</p>
        </div>
        <Link href={DATA.whatsApp} className="hidden group-hover:inline-block">
          <WhatsAppIcon className="h-12 w-12" />
        </Link>
      </div>
      <div className="absolute inset-x-0 bottom-0 h-full bg-gradient-to-t from-primary to-transparent"></div>
    </div>
  );
};

export default ServiceCard;

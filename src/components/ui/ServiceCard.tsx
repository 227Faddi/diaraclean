type Props = {
  image: string;
  title: string;
};

const ServiceCard = ({ image, title }: Props) => {
  return (
    <div className="relative bg-base-100 rounded-2xl shadow-lg overflow-hidden group">
      <img src={image} alt={title} className="w-full h-80 object-cover" />
      <div className="absolute inset-0 bg-opacity-50 flex flex-col justify-end p-6">
        <a
          href="#contact"
          className="text-2xl font-bold hidden sm:inline-block text-white hover:bg-primary-focus transition-all duration-300 no-underline"
        >
          {title}
        </a>
      </div>
      <div className="p-4 sm:hidden">
        <h3 className="text-xl font-bold text-base-content">{title}</h3>
      </div>
    </div>
  );
};

export default ServiceCard;

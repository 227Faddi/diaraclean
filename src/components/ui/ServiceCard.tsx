import { ReactNode } from "react";

type Props = {
  icon: ReactNode;
  title: string;
};

const ServiceCard = ({ icon, title }: Props) => {
  return (
    <div className="card rounded-3xl bg-base-100 w-full max-w-md border-2 border-primary">
      <figure className="w-full">
        <img
          src="https://placehold.co/600x400"
          alt="Shoes"
          className="w-full"
        />
      </figure>
      <div className="card-body">
        <div className="flex gap-2 items-center justify-center">
          {icon}
          <h4 className="card-title">{title}</h4>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;

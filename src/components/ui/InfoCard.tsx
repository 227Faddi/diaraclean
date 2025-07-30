import { ReactNode } from "react";

type Props = {
  icon: ReactNode;
  title: string;
  body: string;
};

const InfoCard = ({ icon, title, body }: Props) => {
  return (
    <div className="card rounded-3xl text-primary bg-white w-full h-full max-w-xs 3xl:max-w-sm text-center">
      <div className="card-body flex items-center justify-center gap-4 md:gap-6 px-4 md:px-8 min-h-[250px] md:min-h-[300px] h-full">
        <div className="p-3 bg-primary text-primary-content border border-[rgb(95,186,255)] rounded-full flex-shrink-0">
          {icon}
        </div>
        <div className="flex flex-col items-center justify-center gap-1 md:gap-2 flex-1">
          <h3 className="card-title text-lg md:text-xl lg:text-2xl text-gray-800 whitespace-pre-line">
            {title}
          </h3>
          <p className="text-sm md:text-base lg:text-lg">{body}</p>
        </div>
      </div>
    </div>
  );
};

export default InfoCard;

import { ReactNode } from "react";

type Props = {
  icon: ReactNode;
  title: string;
  body: string;
};

const InfoCard = ({ icon, title, body }: Props) => {
  return (
    <div className="card rounded-3xl text-primary bg-white w-full max-w-md text-center h-full">
      <div className="card-body flex items-center justify-center gap-6 px-8 min-h-[300px]">
        <div className="p-8 bg-neutral rounded-full flex-shrink-0">{icon}</div>
        <div className="flex flex-col items-center justify-center gap-2 flex-1">
          <h3 className="card-title text-3xl line-clamp-2">{title}</h3>
          <p className="text-xl px-6 line-clamp-3">{body}</p>
        </div>
      </div>
    </div>
  );
};

export default InfoCard;

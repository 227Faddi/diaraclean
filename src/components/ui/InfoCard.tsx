import { ReactNode } from "react";

type Props = {
  icon: ReactNode;
  title: string;
  body: string;
};

const InfoCard = ({ icon, title, body }: Props) => {
  return (
    <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 text-center transform hover:-translate-y-2 border border-gray-200">
      <div className="flex justify-center items-center mb-6 text-blue-500">
        {icon}
      </div>
      <h3 className="text-2xl font-bold text-gray-800 mb-4">{title}</h3>
      <p className="text-gray-600">{body}</p>
    </div>
  );
};

export default InfoCard;

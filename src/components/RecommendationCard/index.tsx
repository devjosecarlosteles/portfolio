import { ReactNode } from "react";

interface RecommendationCardProps {
  name: string;
  role: string;
  text: string;
  icon: ReactNode;
}

export default function RecommendationCard({
  name,
  role,
  text,
  icon,
}: RecommendationCardProps) {
  return (
    <div className="bg-gradient-to-br from-teal-900 via-emerald-800 to-green-700 p-4 rounded-md shadow-md w-72 text-white">
      <div className="flex items-center mb-3">
        <div className="text-3xl mr-2 text-green-300">{icon}</div>
        <div>
          <h3 className="font-bold leading-none">{name}</h3>
          <p className="text-sm text-gray-200">{role}</p>
        </div>
      </div>
      <p className="text-sm leading-relaxed">{text}</p>
    </div>
  );
}

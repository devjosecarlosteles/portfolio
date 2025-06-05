import ExperienceCardDescription from "./components/ExperienceCardDescription/index";
import { ReactNode } from "react";
import ExperienceCardTechnologies from "./components/ExperienceCardTechnologies/index";
import calcDiffOfDateExperience from "../../core/utils/calcDiffOfDateExperience";
import moment from "moment";
interface ExperienceCardProps {
  children?: ReactNode;
  companyName: string;
  position: string;
  start_date: string;
  end_date: string | null;
  onClick?: () => void;
}

export default function ExperienceCard({
  children,
  companyName,
  position,
  start_date,
  end_date,
  onClick,
}: ExperienceCardProps) {
  return (
    <div onClick={onClick} className="cursor-pointer">
      <time className="mb-1 text-sm font-normal leading-none text-gray-400">
        {moment(start_date, "DD/MM/YYYY").format("DD-MM-YYYY")}
        {end_date ? ` - ${moment(end_date, "DD/MM/YYYY").format("DD-MM-YYYY")}` : ""}
      </time>
      <h3 className="text-lg font-semibold text-white">{companyName}</h3>
      <div className="flex text-sm text-gray-200 mb-2">
        <span>{position}</span>
        <span className="mx-1">-</span>
        <span>{calcDiffOfDateExperience(start_date, end_date)}</span>
      </div>
      {children}
    </div>
  );
}

ExperienceCard.Description = ExperienceCardDescription;
ExperienceCard.Technologies = ExperienceCardTechnologies;

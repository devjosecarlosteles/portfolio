import ExperienceCardDescription from "./components/ExperienceCardDescription/index";
import { ReactNode } from "react";
import ExperienceCardTechnologies from "./components/ExperienceCardTechnologies/index";
import calcDiffOfDateExperience from "../../core/utils/calcDiffOfDateExperience";
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
    <div
      onClick={onClick}
      className="w-[340px] h-[240px] mr-2 bg-green-800 rounded-md shadow-sm p-3 mb-2 inline-block bg-gradient-to-tl from-teal-900 via-emerald-800 to-green-700 cursor-pointer"
    >
      <strong>{companyName}</strong>

      <div className="flex">
        <i>
          <span className="block ">{position}</span>
        </i>{" "}
        -<span>{calcDiffOfDateExperience(start_date, end_date)}</span>
      </div>

      {children}
    </div>
  );
}

ExperienceCard.Description = ExperienceCardDescription;
ExperienceCard.Technologies = ExperienceCardTechnologies;

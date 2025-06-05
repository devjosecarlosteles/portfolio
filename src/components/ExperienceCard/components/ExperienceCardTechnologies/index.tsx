import techNameStringToJsxIcon from '../../../../core/utils/techNameStringToJsxIcon';

interface ExperienceCardTechnologiesProps {
  technologies: string[];
}

export default function ExperienceCardTechnologies({
  technologies,
}: ExperienceCardTechnologiesProps) {
  return (
    <div className="flex flex-wrap gap-2 mt-2">
      {technologies.map((technologyName) => {
        return techNameStringToJsxIcon(technologyName);
      })}
    </div>
  );
}
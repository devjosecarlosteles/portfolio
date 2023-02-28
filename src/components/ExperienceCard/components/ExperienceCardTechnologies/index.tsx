import techNameStringToJsxIcon from '../../../../core/utils/techNameStringToJsxIcon';

interface ExperienceCardTechnologiesProps {
  technologies: string[];
}

export default function ExperienceCardTechnologies ({ technologies }: ExperienceCardTechnologiesProps) {
  return <div className='flex w-[60%] justify-around'>
    { technologies.map(technologyName => {
      return techNameStringToJsxIcon(technologyName) 
    }) }
  </div>
}
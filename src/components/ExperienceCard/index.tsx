import ExperienceCardDescription from './components/ExperienceCardDescription/index';
import { ReactNode } from 'react';
import ExperienceCardTechnologies from './components/ExperienceCardTechnologies/index';
interface ExperienceCardProps {
  children?: ReactNode;
  companyName: string;
  position: string;
  start_date: string;
  end_date?: string | null;
}

export default function ExperienceCard({ children, companyName, position, start_date, end_date }: ExperienceCardProps) {
  return (
    <div className='w-[340px] h-[240px] mr-2 bg-green-800 rounded-md shadow-sm p-3 mb-2 inline-block'>
      <strong>{ companyName }</strong>

      <i><span className='block'>{ position }</span></i>
      
      { children }
    </div>
  )
}

ExperienceCard.Description = ExperienceCardDescription
ExperienceCard.Technologies = ExperienceCardTechnologies
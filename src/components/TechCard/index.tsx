import { ReactNode } from 'react';
import TechCardIcon from './TechCardIcon/index';
import TechCardTitle from './TechCardTitle/index';

interface TechCardProps {
  children: ReactNode;
  className?: string;
}

export default function TechCard({ children, className }: TechCardProps) {
  return <div className={`w-[80px] h-[90px] bg-green-900 text-white flex flex-col items-center justify-center rounded-md ${ className }`}>
    { children }
  </div>
}

TechCard.Icon = TechCardIcon
TechCard.Title = TechCardTitle
import { ReactNode } from 'react';
import TechCardIcon from './TechCardIcon/index';

interface TechCardProps {
  children: ReactNode
}

function TechCard({ children }: TechCardProps) {
  return <div className='w-[80px] h-[90px] bg-green-700 text-white'>
    { children }
  </div>
}

export default Object.assign(TechCard, TechCardIcon)
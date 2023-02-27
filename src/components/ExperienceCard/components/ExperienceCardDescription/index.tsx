import { ReactNode } from 'react';
interface ExperienceCardDescriptionProps {
  children: ReactNode;
}

export default function ExperienceCardDescription ({ children }: ExperienceCardDescriptionProps) {
  return <p>{ children }</p>
}
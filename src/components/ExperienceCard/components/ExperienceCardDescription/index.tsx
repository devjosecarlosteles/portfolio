import { ReactNode } from "react";
interface ExperienceCardDescriptionProps {
  children: ReactNode;
}

export default function ExperienceCardDescription({
  children,
}: ExperienceCardDescriptionProps) {
  return <p className="whitespace-pre-line w-[300px] h-[68%]">{children}</p>;
}

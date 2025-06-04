import { ReactNode } from 'react';

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  children?: ReactNode;
}

export default function ProjectCard({ title, description, image, children }: ProjectCardProps) {
  return (
    <div className="w-[340px] bg-gradient-to-tl from-teal-900 via-emerald-800 to-green-700 rounded-md shadow-sm p-3 mb-2 text-white">
      <img src={image} alt={title} className="h-40 w-full object-cover rounded-md mb-2" />
      <h3 className="font-bold mb-1">{title}</h3>
      <p className="text-sm line-clamp-3 mb-2">{description}</p>
      {children}
    </div>
  );
}

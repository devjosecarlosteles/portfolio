interface ExperienceCardProps {
  children?: string;
  companyName: string;
  position: string;
  start_date: string;
  end_date?: string | null;
}

export default function ExperienceCard({ children }: ExperienceCardProps) {
  return (
    <div>
      { children }
    </div>
  )
}
import { ReactNode } from "react"

interface techCardIcon {
  children: ReactNode;
}

export default function TechCardIcon({ children }: techCardIcon) {
  return (
    <div>
      { children }
    </div>
  )
}
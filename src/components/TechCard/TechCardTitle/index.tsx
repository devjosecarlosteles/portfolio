import { ReactNode } from "react"

interface TechCardTitle {
  children: ReactNode
}

export default function TechCardTitle({ children }: TechCardTitle) {
  return (
    <p className="font-bold text-xs">{ children }</p>
  )
}
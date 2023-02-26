import { ReactNode } from "react"

interface TechCardTitle {
  children: ReactNode
}

export default function TechCardTitle({ children }: TechCardTitle) {
  return (
    <p>{ children }</p>
  )
}
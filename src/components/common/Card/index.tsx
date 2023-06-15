import React, { PropsWithChildren } from "react"
import { CardContainer } from "./style"

const Card = ({ children }: PropsWithChildren) => {
  return <CardContainer>{children}</CardContainer>
}

export default Card

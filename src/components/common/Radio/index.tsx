import React, { useRef } from "react"
import type { MouseEventHandler, PropsWithChildren } from "react"

import { RadioContainer } from "./style"

interface RadioProps extends PropsWithChildren {
  name: string
  value: string
  onClick?: MouseEventHandler
  width?: number
}

const Radio = ({ name, children, value, onClick, width }: RadioProps) => {
  const inputRef = useRef<HTMLInputElement>(null)
  const rangeExpansion = () => inputRef.current?.click()

  return (
    <RadioContainer onClick={rangeExpansion} width={width}>
      {children}
      <input
        type="radio"
        name={name}
        value={value}
        onClick={onClick}
        ref={inputRef}
      />
    </RadioContainer>
  )
}

export default Radio

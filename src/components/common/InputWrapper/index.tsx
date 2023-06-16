import React from "react"
import type { PropsWithChildren } from "react"

import { InputLabel, WrapperStyle, Inputs } from "./style"

interface InputWrapperProps extends PropsWithChildren {
  title?: string
}

const InputWrapper = ({ title, children }: InputWrapperProps) => {
  return (
    <WrapperStyle>
      {title && <InputLabel>{title}</InputLabel>}
      <Inputs>{children}</Inputs>
    </WrapperStyle>
  )
}

export default InputWrapper

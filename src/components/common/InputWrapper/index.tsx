import React from "react"
import type { PropsWithChildren } from "react"

import { InputLabel, WrapperStyle, Inputs } from "./style"
import type { CSSObject } from "styled-components"

interface InputWrapperProps extends PropsWithChildren {
  title?: string
  style?: CSSObject
}

const InputWrapper = ({ title, children, style }: InputWrapperProps) => {
  return (
    <WrapperStyle style={style}>
      {title && <InputLabel>{title}</InputLabel>}
      <Inputs>{children}</Inputs>
    </WrapperStyle>
  )
}

export default InputWrapper

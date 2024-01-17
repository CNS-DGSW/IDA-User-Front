import React from "react"
import type { PropsWithChildren } from "react"

import { InputLabel, WrapperStyle, Inputs } from "./style"
import type { CSSObject } from "styled-components"

interface InputWrapperProps extends PropsWithChildren {
  title?: string
  style?: CSSObject
  className?: string
}

const InputWrapper = ({
  title,
  children,
  style,
  className,
}: InputWrapperProps) => {
  return (
    <WrapperStyle style={style}>
      {title && <InputLabel className={className}>{title}</InputLabel>}
      <Inputs>{children}</Inputs>
    </WrapperStyle>
  )
}

export default InputWrapper

import React from "react"
import { ButtonStyle } from "./style"
import type { ButtonProps } from "./types"

const Button = ({
  size = "md",
  color = "primary",
  clickEvent,
  hover,
  border,
  radius,
  disable,
  shadow,
  children,
  style,
  ...buttonProps
}: ButtonProps) => {
  return (
    <ButtonStyle
      size={size}
      color={color}
      hover={hover}
      border={border}
      onClick={disable ? undefined : clickEvent}
      radius={radius}
      shadow={shadow}
      disable={disable}
      style={style}
      {...buttonProps}
    >
      {children}
    </ButtonStyle>
  )
}

export default Button

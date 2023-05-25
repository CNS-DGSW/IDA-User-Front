import React from "react"
import { ButtonStyle } from "./style"
import { ButtonProps } from "./types"
export const Button = ({
  size = "md",
  color = "primary",
  clickEvent,
  hover,
  border,
  radius,
  disable,
  shadow,
  children,
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
    >
      {children}
    </ButtonStyle>
  )
}

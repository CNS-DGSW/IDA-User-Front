import React from "react"
import type { ChangeEventHandler } from "react"
import type { CSSObject } from "styled-components"

import { CustomInput } from "./style"

export type InputColor = "white" | "gray"

const Input = ({
  type,
  color = "white",
  width,
  readonly,
  changeEvent,
  value,
  customStyle,
  placeholder,
}: {
  type: string
  color?: InputColor
  width?: number
  readonly?: boolean
  changeEvent?: ChangeEventHandler<HTMLInputElement>
  value?: string
  customStyle?: CSSObject
  placeholder: string
}) => {
  return (
    <CustomInput
      back={color}
      type={type}
      width={width}
      readOnly={readonly}
      onChange={changeEvent}
      style={customStyle}
      value={value}
      placeholder={placeholder}
    />
  )
}

export default Input

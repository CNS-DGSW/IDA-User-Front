import React from "react"
import { CustomInput } from "./style"

export type InputColor = "white" | "gray"

const Input = ({
  type,
  color = "white",
  width,
  readonly,
}: {
  type: string
  color?: InputColor
  width?: number
  readonly?: boolean
}) => {
  return (
    <CustomInput
      background={color}
      type={type}
      width={width}
      readOnly={readonly}
    />
  )
}

export default Input

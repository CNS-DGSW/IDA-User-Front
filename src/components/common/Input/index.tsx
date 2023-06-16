import React from "react"
import type { ChangeEventHandler } from "react"

import { CustomInput } from "./style"

export type InputColor = "white" | "gray"

const Input = ({
  type,
  color = "white",
  width,
  readonly,
  changeEvent,
}: {
  type: string
  color?: InputColor
  width?: number
  readonly?: boolean
  changeEvent?: ChangeEventHandler<HTMLInputElement>
}) => {
  return (
    <CustomInput
      background={color}
      type={type}
      width={width}
      readOnly={readonly}
      onChange={changeEvent}
    />
  )
}

export default Input

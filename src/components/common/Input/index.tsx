import { forwardRef } from "react"
import type { ChangeEventHandler } from "react"
import type { CSSObject } from "styled-components"

import { CustomInput } from "./style"

export type InputColor = "white" | "gray"

interface TextInputProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "type" | "size"> {
  type: string
  color?: InputColor
  width?: number
  readonly?: boolean
  changeEvent?: ChangeEventHandler<HTMLInputElement>
  value?: string
  customStyle?: CSSObject
  isError?: boolean
}

const Input = forwardRef<HTMLInputElement, TextInputProps>(
  (
    {
      type,
      color = "white",
      width,
      readonly,
      changeEvent,
      value,
      customStyle,
      placeholder,
      isError = false,
      ...inputProps
    },
    ref,
  ) => {
    return (
      <CustomInput
        ref={ref}
        placeholder={placeholder}
        back={color}
        type={type}
        width={width}
        readOnly={readonly}
        onChange={changeEvent}
        style={customStyle}
        value={value}
        isError={isError}
        {...inputProps}
      />
    )
  },
)

export default Input
